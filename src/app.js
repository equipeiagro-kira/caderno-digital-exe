const data = window.EXA_DATA || { resumo: {}, ensaios: [], cultivares: [] };

const state = {
  selectedCrop: "TODAS",
  query: "",
  selectedTrialId: data.ensaios[0]?.id || null,
  deferredPrompt: null
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const normalize = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    return false;
  }
  return true;
}

function formatNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return value || "-";
  return new Intl.NumberFormat("pt-BR").format(number);
}

function searchableTrial(trial) {
  return normalize(`${trial.nome} ${trial.cultura} ${trial.produtor} ${trial.plantio}`);
}

function searchableTreatment(item) {
  return normalize([
    item.numero,
    item.cultivar,
    item.empresa,
    item.maturacao,
    item.pmg,
    item.populacao,
    item.motora,
    item.movida,
    item.adubacao?.join(" "),
    item.jatoDirigido?.join(" "),
    item.manejos?.map((manejo) => `${manejo.etapa} ${manejo.produto} ${manejo.dose}`).join(" ")
  ].join(" "));
}

function filteredTrials() {
  return data.ensaios.filter((trial) => {
    const cropMatch = state.selectedCrop === "TODAS" || trial.cultura === state.selectedCrop;
    return cropMatch;
  });
}

function renderMetrics() {
  $("#metric-ensaios").textContent = formatNumber(data.resumo.totalEnsaios);
  $("#metric-tratamentos").textContent = formatNumber(data.resumo.totalTratamentos);
  $("#metric-cultivares").textContent = formatNumber(data.resumo.totalCultivaresUnicas);
}

function renderWarnings() {
  const list = $("#warnings-list");
  if (!list) return;
  list.innerHTML = (data.resumo.avisos || [])
    .map((warning) => `<li>${warning}</li>`)
    .join("");
}

function renderTrialList() {
  const trials = filteredTrials();
  $("#result-count").textContent = trials.length;

  if (trials.length && !trials.some((trial) => trial.id === state.selectedTrialId)) {
    state.selectedTrialId = trials[0].id;
  }

  $("#trial-list").innerHTML = trials
    .map((trial) => {
      const active = trial.id === state.selectedTrialId ? " active" : "";
      return `
        <button class="trial-card${active}" type="button" data-trial-id="${trial.id}">
          <strong>${trial.nome}</strong>
          <p>${trial.produtor} • Plantio ${trial.plantio}</p>
          <div class="trial-card-meta">
            <span class="chip green">${trial.cultura}</span>
            <span class="chip">${trial.totalTratamentos} tratamentos</span>
          </div>
        </button>
      `;
    })
    .join("");

  if (!trials.length) {
    $("#trial-list").innerHTML = `<p class="empty-state">Nenhum ensaio encontrado para esse filtro.</p>`;
    $("#trial-detail").innerHTML = `<p class="empty-state">Ajuste a busca para visualizar os dados.</p>`;
    return;
  }

  $$(".trial-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedTrialId = button.dataset.trialId;
      renderTrialList();
      renderTrialDetail();
    });
  });
}

function filteredTreatments(trial) {
  if (!state.query) return trial.tratamentos;
  const query = normalize(state.query);
  return trial.tratamentos.filter((item) =>
    searchableTreatment({
      ...item,
      adubacao: trial.adubacao,
      jatoDirigido: trial.jatoDirigido
    }).includes(query)
  );
}

function managementGroup(title, items) {
  if (!items?.length) return "";
  return `
    <div class="manejo-group">
      <span class="manejo-group-title">${title}</span>
      <div>${items.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>
  `;
}

function stageKey(label) {
  const value = normalize(label);
  if (value.includes("pos-emergente") || value.includes("pos emergente")) return "pos";
  if (value.includes("1") && value.includes("fungicida")) return "fung1";
  if (value.includes("2") && value.includes("fungicida")) return "fung2";
  if (value.includes("3") && value.includes("fungicida")) return "fung3";
  return "";
}

function stageGroup(title, items) {
  const rows = items.length
    ? items
        .map(
          (manejo) => `
            <div class="manejo-product">
              <b>${manejo.produto || "-"}</b>
              <span>${manejo.dose || "-"}</span>
            </div>
          `
        )
        .join("")
    : `<span class="manejo-empty">Sem informação</span>`;
  return `
    <div class="manejo-group manejo-stage">
      <span class="manejo-group-title">${title}</span>
      <div>${rows}</div>
    </div>
  `;
}

function treatmentManagement(item, trial) {
  const stageGroups = {
    pos: [],
    fung1: [],
    fung2: [],
    fung3: []
  };
  const extras = new Map();

  (item.manejos || []).forEach((manejo) => {
    const key = stageKey(manejo.etapa);
    if (key) {
      stageGroups[key].push(manejo);
      return;
    }
    const title = manejo.etapa || "Aplicação";
    extras.set(title, [...(extras.get(title) || []), manejo]);
  });

  return [
    stageGroup("Pós-emergência", stageGroups.pos),
    stageGroup("1ª fungicida", stageGroups.fung1),
    stageGroup("2ª fungicida", stageGroups.fung2),
    stageGroup("3ª fungicida", stageGroups.fung3),
    ...[...extras.entries()].map(([title, items]) => stageGroup(title, items)),
    managementGroup("Adubação", trial.adubacao || []),
    managementGroup("Jato dirigido", trial.jatoDirigido || [])
  ].join("");
}

function treatmentRows(treatments, trial) {
  return treatments
    .map((item) => {
      const specs = [
        item.maturacao ? `Mat. ${item.maturacao}` : "",
        item.pmg ? `PMG/PMS ${item.pmg}` : "",
        item.populacao ? `Pop. ${formatNumber(item.populacao)}` : "",
        item.motora ? `Motora ${item.motora}` : "",
        item.movida ? `Movida ${item.movida}` : ""
      ]
        .filter(Boolean)
        .join(" · ");

      const manejos = treatmentManagement(item, trial);

      return `
        <tr>
          <td data-label="No.">${item.numero}</td>
          <td data-label="Cultivar"><strong>${item.cultivar || "-"}</strong><span>${item.empresa || "-"}</span></td>
          <td data-label="Dados">${specs || "-"}</td>
          <td data-label="Manejo"><div class="manejo-list">${manejos}</div></td>
        </tr>
      `;
    })
    .join("");
}

function renderTrialDetail() {
  const trial = data.ensaios.find((item) => item.id === state.selectedTrialId) || filteredTrials()[0];
  if (!trial) return;

  const treatments = filteredTreatments(trial);
  const productCount = new Set(
    treatments.flatMap((item) => item.manejos || []).map((manejo) => manejo.produto).filter(Boolean)
  ).size;
  const resultChip = state.query
    ? `<span class="chip green">${treatments.length} encontrados</span>`
    : `<span class="chip green">${trial.totalTratamentos} tratamentos</span>`;
  const supportChip = trial.adubacao?.length || trial.jatoDirigido?.length
    ? `<span class="chip">Adubação + jato dirigido</span>`
    : "";
  const emptyRows = `
    <tr class="empty-row">
      <td data-label="Busca" colspan="4">Nenhuma variedade ou manejo encontrado em ${trial.nome} para "${state.query}".</td>
    </tr>
  `;

  $("#trial-detail").innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">${trial.cultura}</p>
      <h2>${trial.nome}</h2>
      <p>${trial.produtor} - Plantio ${trial.plantio}</p>
      <div class="chip-row">
        ${resultChip}
        <span class="chip">${productCount} produtos</span>
        ${supportChip}
        <span class="chip">Fonte: ${trial.fonte.arquivo}</span>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Cultivar</th>
            <th>Dados agronomicos</th>
            <th>Manejo completo</th>
          </tr>
        </thead>
        <tbody>${treatments.length ? treatmentRows(treatments, trial) : emptyRows}</tbody>
      </table>
    </div>
  `;
}

function showDashboard() {
  $("#access-screen").hidden = true;
  $("#dashboard").hidden = false;
  safeSet("exa_accessed", "true");
  const name = $("#user-name").value.trim();
  if (name) safeSet("exa_user", name);
}

function updateConnectivity() {
  const pill = $("#offline-status");
  if (!pill) return;
  pill.textContent = navigator.onLine ? "Online" : "Offline";
  pill.classList.toggle("offline", !navigator.onLine);
}

function setTheme(theme) {
  document.documentElement.classList.toggle("theme-light", theme === "light");
  document.documentElement.classList.toggle("theme-neon", theme === "neon");
  $$("[data-theme-toggle]").forEach((button) => {
    button.textContent = button.classList.contains("icon-button")
      ? "T"
      : theme === "light"
        ? "Tema escuro"
        : "Tema claro";
  });
  safeSet("exa_theme", theme);
}

function toggleTheme() {
  const next = document.documentElement.classList.contains("theme-light") ? "dark" : "light";
  setTheme(next);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("./service-worker.js").catch(() => {
    console.warn("Service worker nao registrado.");
  });
}

function normalizeUiLabels() {
  const search = $("#search-input");
  if (search) search.placeholder = "Buscar variedade neste produtor";
  $$("[data-install]").forEach((button) => {
    button.textContent = button.classList.contains("icon-button") ? "PWA" : "Instalar";
  });
}

function showInstallHelp() {
  let sheet = $("#install-help");
  if (!sheet) {
    sheet = document.createElement("div");
    sheet.id = "install-help";
    sheet.className = "install-help";
    sheet.innerHTML = `
      <div class="install-card" role="dialog" aria-modal="true" aria-labelledby="install-title">
        <button class="install-close" type="button" data-install-close>Fechar</button>
        <p class="eyebrow">PWA OFFLINE</p>
        <h2 id="install-title">Instalar o Caderno Digital</h2>
        <p>Se o navegador nao abrir a instalacao automaticamente, use o menu do proprio navegador.</p>
        <ol>
          <li><strong>Android/Chrome:</strong> toque nos tres pontos e escolha "Instalar app" ou "Adicionar a tela inicial".</li>
          <li><strong>iPhone/Safari:</strong> toque em compartilhar e escolha "Adicionar a Tela de Inicio".</li>
          <li><strong>Computador:</strong> procure o icone de instalacao na barra de endereco.</li>
        </ol>
      </div>
    `;
    document.body.appendChild(sheet);
    sheet.addEventListener("click", (event) => {
      if (event.target === sheet || event.target.closest("[data-install-close]")) {
        sheet.classList.remove("show");
      }
    });
  }
  sheet.classList.add("show");
}

function bindEvents() {
  $("#access-form").addEventListener("submit", (event) => {
    event.preventDefault();
    showDashboard();
  });

  $("#search-input").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderTrialDetail();
  });

  $("[data-crop='TODAS']").parentElement.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-crop]");
    if (!button) return;
    state.selectedCrop = button.dataset.crop;
    $$("button[data-crop]").forEach((item) => item.classList.toggle("active", item === button));
    renderTrialList();
    renderTrialDetail();
  });

  $$("[data-theme-toggle]").forEach((button) => button.addEventListener("click", toggleTheme));
  $$("[data-install]").forEach((button) => {
    button.addEventListener("click", async () => {
      if (!state.deferredPrompt) {
        showInstallHelp();
        return;
      }
      state.deferredPrompt.prompt();
      await state.deferredPrompt.userChoice;
      state.deferredPrompt = null;
    });
  });

  window.addEventListener("online", updateConnectivity);
  window.addEventListener("offline", updateConnectivity);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredPrompt = event;
  });
}

function init() {
  const params = new URLSearchParams(window.location.search);
  const savedTheme = safeGet("exa_theme") || "dark";
  normalizeUiLabels();
  setTheme(savedTheme);
  $("#user-name").value = safeGet("exa_user") || "";
  bindEvents();
  renderMetrics();
  renderWarnings();
  renderTrialList();
  renderTrialDetail();
  updateConnectivity();
  registerServiceWorker();

  if (params.get("view") === "dashboard") {
    safeSet("exa_accessed", "true");
  }

  if (safeGet("exa_accessed") === "true" || params.get("view") === "dashboard") {
    showDashboard();
  }
}

init();
