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
  const treatmentText = trial.tratamentos
    .map((item) => [
      item.cultivar,
      item.empresa,
      item.populacao,
      item.manejos?.map((manejo) => `${manejo.etapa} ${manejo.produto} ${manejo.dose}`).join(" ")
    ].join(" "))
    .join(" ");

  return normalize(`${trial.nome} ${trial.cultura} ${trial.produtor} ${trial.plantio} ${treatmentText}`);
}

function filteredTrials() {
  return data.ensaios.filter((trial) => {
    const cropMatch = state.selectedCrop === "TODAS" || trial.cultura === state.selectedCrop;
    const queryMatch = !state.query || searchableTrial(trial).includes(normalize(state.query));
    return cropMatch && queryMatch;
  });
}

function renderMetrics() {
  $("#metric-ensaios").textContent = formatNumber(data.resumo.totalEnsaios);
  $("#metric-tratamentos").textContent = formatNumber(data.resumo.totalTratamentos);
  $("#metric-cultivares").textContent = formatNumber(data.resumo.totalCultivaresUnicas);
}

function renderWarnings() {
  $("#warnings-list").innerHTML = (data.resumo.avisos || [])
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

function treatmentRows(trial) {
  return trial.tratamentos
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

      const manejos = item.manejos?.length
        ? item.manejos
            .map(
              (manejo) => `
                <div class="manejo-item">
                  <span>${manejo.etapa || "Aplicacao"}</span>
                  <b>${manejo.produto || "-"}</b>
                  <span>${manejo.dose || "-"}</span>
                </div>
              `
            )
            .join("")
        : `<span class="chip">Sem manejo informado</span>`;

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

  const productCount = new Set(
    trial.tratamentos.flatMap((item) => item.manejos || []).map((manejo) => manejo.produto).filter(Boolean)
  ).size;

  $("#trial-detail").innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">${trial.cultura}</p>
      <h2>${trial.nome}</h2>
      <p>${trial.produtor} • Plantio ${trial.plantio}</p>
      <div class="chip-row">
        <span class="chip green">${trial.totalTratamentos} tratamentos</span>
        <span class="chip">${productCount} produtos</span>
        <span class="chip">Fonte: ${trial.fonte.arquivo}</span>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Cultivar</th>
            <th>Dados agronomicos</th>
            <th>Manejo fitossanitario</th>
          </tr>
        </thead>
        <tbody>${treatmentRows(trial)}</tbody>
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
  document.documentElement.classList.toggle("theme-neon", theme === "neon");
  safeSet("exa_theme", theme);
}

function toggleTheme() {
  const next = document.documentElement.classList.contains("theme-neon") ? "light" : "neon";
  setTheme(next);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("./service-worker.js").catch(() => {
    console.warn("Service worker nao registrado.");
  });
}

function bindEvents() {
  $("#access-form").addEventListener("submit", (event) => {
    event.preventDefault();
    showDashboard();
  });

  $("#search-input").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderTrialList();
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
      if (!state.deferredPrompt) return;
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
  const savedTheme = safeGet("exa_theme") || "neon";
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
