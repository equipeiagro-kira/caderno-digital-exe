const data = window.EXA_DATA || { resumo: {}, ensaios: [], cultivares: [] };
const protocolData = window.EXA_PROTOCOL_DATA || { meta: {}, croquiGeral: [], protocolos: [] };

const state = {
  selectedCrop: "TODAS",
  query: "",
  selectedTrialId: data.ensaios[0]?.id || null,
  workspace: "cultivares",
  researchView: "mapa",
  protocolQuery: "",
  selectedProtocolId: protocolData.protocolos[0]?.id || null,
  protocolTab: "tratamentos",
  deferredPrompt: null
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const normalize = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

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
    item.movida
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
  return trial.tratamentos.filter((item) => searchableTreatment(item).includes(query));
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

function trialManagementItems(trial) {
  const seen = new Set();

  return trial.tratamentos
    .flatMap((treatment) => treatment.manejos || [])
    .filter((manejo) => {
      const key = [manejo.etapa, manejo.produto, manejo.dose].map(normalize).join("|");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function formatDose(value) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return value || "-";
  return new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 3 }).format(numericValue);
}

function stageGroup(title, items) {
  const rows = items.length
    ? items
        .map(
          (manejo) => `
            <div class="manejo-product">
              <b>${manejo.produto || "-"}</b>
              <span>Dose/ha: ${formatDose(manejo.dose)}</span>
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

function treatmentManagement(trial) {
  const stageGroups = {
    pos: [],
    fung1: [],
    fung2: [],
    fung3: []
  };
  const extras = new Map();

  trialManagementItems(trial).forEach((manejo) => {
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

function countManagementItems(trial) {
  return trialManagementItems(trial).length + (trial.adubacao?.length || 0) + (trial.jatoDirigido?.length || 0);
}

function findTreatment(trialId, treatmentId) {
  const trial = data.ensaios.find((item) => item.id === trialId);
  if (!trial) return {};
  const treatment = trial.tratamentos.find((item) => item.id === treatmentId);
  return { trial, treatment };
}

function treatmentRows(treatments, trial) {
  const totalManagementItems = countManagementItems(trial);

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

      const actionLabel = totalManagementItems
        ? `${totalManagementItems} itens de manejo`
        : "Sem manejo informado";

      return `
        <tr>
          <td data-label="No.">${item.numero}</td>
          <td data-label="Cultivar"><strong>${item.cultivar || "-"}</strong><span>${item.empresa || "-"}</span></td>
          <td data-label="Dados">${specs || "-"}</td>
          <td data-label="Manejo">
            <div class="manejo-action">
              <span>${actionLabel}</span>
              <button class="secondary-button" type="button" data-treatment-detail="${item.id}" data-trial-detail="${trial.id}">
                Ver manejo completo
              </button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function showTreatmentDetail(trial, item) {
  let modal = $("#treatment-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "treatment-modal";
    modal.className = "treatment-modal";
    document.body.appendChild(modal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.closest("[data-treatment-close]")) {
        modal.classList.remove("show");
      }
    });
  }

  const specs = [
    item.maturacao ? `Maturação ${item.maturacao}` : "",
    item.pmg ? `PMG/PMS ${item.pmg}` : "",
    item.populacao ? `População ${formatNumber(item.populacao)}` : "",
    item.motora ? `Motora ${item.motora}` : "",
    item.movida ? `Movida ${item.movida}` : ""
  ].filter(Boolean);

  modal.innerHTML = `
    <div class="treatment-card" role="dialog" aria-modal="true" aria-label="Produtos da variedade">
      <button class="install-close" type="button" data-treatment-close>Fechar</button>
      <p class="eyebrow">${trial.nome}</p>
      <h2>${item.cultivar || "-"}</h2>
      <p>${trial.produtor} - Plantio ${trial.plantio}</p>
      <div class="chip-row">
        <span class="chip green">Tratamento ${item.numero}</span>
        <span class="chip">${item.empresa || "Empresa não informada"}</span>
        ${specs.map((spec) => `<span class="chip">${spec}</span>`).join("")}
      </div>
      <p class="management-scope">Receita completa usada neste experimento para a cultivar selecionada.</p>
      <div class="manejo-detail-list">
        ${treatmentManagement(trial)}
      </div>
    </div>
  `;
  modal.classList.add("show");
}

function renderTrialDetail() {
  const trial = data.ensaios.find((item) => item.id === state.selectedTrialId) || filteredTrials()[0];
  if (!trial) return;

  const treatments = filteredTreatments(trial);
  const productCount = new Set(trialManagementItems(trial).map((manejo) => manejo.produto).filter(Boolean)).size;
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

  $$("[data-treatment-detail]", $("#trial-detail")).forEach((button) => {
    button.addEventListener("click", () => {
      const { trial: selectedTrial, treatment } = findTreatment(button.dataset.trialDetail, button.dataset.treatmentDetail);
      if (selectedTrial && treatment) showTreatmentDetail(selectedTrial, treatment);
    });
  });
}

function searchableProtocol(protocol) {
  const recipes = protocol.tratamentos
    .flatMap((treatment) => treatment.aplicacoes)
    .map((application) => `${application.epoca} ${application.receita}`)
    .join(" ");
  return normalize(`${protocol.nome} ${protocol.nomeFonte} ${recipes}`);
}

function filteredProtocols() {
  if (!state.protocolQuery) return protocolData.protocolos;
  const query = normalize(state.protocolQuery);
  return protocolData.protocolos.filter((protocol) => searchableProtocol(protocol).includes(query));
}

function renderResearchMetrics() {
  $("#metric-protocolos").textContent = formatNumber(protocolData.meta.totalProtocolos || 0);
  $("#metric-protocol-treatments").textContent = formatNumber(protocolData.meta.totalTratamentos || 0);
  $("#metric-repeticoes").textContent = formatNumber(protocolData.meta.repeticoes || 0);
}

function renderWorkspace() {
  const research = state.workspace === "pesquisa";
  $("#cultivar-module").hidden = research;
  $("#research-module").hidden = !research;
  $$("[data-workspace]").forEach((button) => {
    button.classList.toggle("active", button.dataset.workspace === state.workspace);
  });
}

function renderResearchView() {
  const showProtocols = state.researchView === "protocolos";
  $("#research-map-view").hidden = showProtocols;
  $("#research-protocols-view").hidden = !showProtocols;
  $("#protocol-search-field").hidden = !showProtocols;
  $$("[data-research-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.researchView === state.researchView);
  });
}

function renderGeneralMap() {
  const protocolIds = new Set(protocolData.protocolos.map((protocol) => protocol.id));
  const blocks = protocolData.croquiGeral
    .map((block) => {
      const style = `grid-column:${block.col};grid-row:${block.row}/span ${block.span}`;
      const content = `
        <strong>${escapeHtml(block.label)}</strong>
        ${block.sourceLabel ? `<small>Origem: ${escapeHtml(block.sourceLabel)}</small>` : ""}
      `;
      if (!protocolIds.has(block.id)) {
        return `<div class="field-block tone-${escapeHtml(block.tone)}" style="${style}">${content}</div>`;
      }
      return `
        <button class="field-block tone-${escapeHtml(block.tone)}" type="button" style="${style}" data-map-protocol="${escapeHtml(block.id)}">
          ${content}
        </button>
      `;
    })
    .join("");

  const notices = (protocolData.meta.avisos || [])
    .map((notice) => `<li>${escapeHtml(notice)}</li>`)
    .join("");

  $("#general-field-map").innerHTML = `
    <div class="field-map-scroll" aria-label="Croqui geral da area">
      <div class="field-site-plan">
        <div class="field-boundary field-back">FUNDO</div>
        <div class="field-map-grid">
          ${blocks}
          <div class="field-road">RODOVIA</div>
        </div>
        <div class="field-boundary field-carrier">CARREADOR</div>
      </div>
    </div>
    <div class="map-caption">
      <span>Toque em uma parcela para abrir o protocolo.</span>
      <span>Leitura do croqui original em 15 faixas.</span>
    </div>
    ${notices ? `<ul class="source-notices">${notices}</ul>` : ""}
  `;
}

function renderProtocolList() {
  const protocols = filteredProtocols();
  $("#protocol-result-count").textContent = protocols.length;

  if (protocols.length && !protocols.some((protocol) => protocol.id === state.selectedProtocolId)) {
    state.selectedProtocolId = protocols[0].id;
  }

  $("#protocol-list").innerHTML = protocols.length
    ? protocols
        .map((protocol) => `
          <button class="trial-card protocol-card${protocol.id === state.selectedProtocolId ? " active" : ""}" type="button" data-protocol-id="${escapeHtml(protocol.id)}">
            <strong>${escapeHtml(protocol.nome)}</strong>
            <p>${protocol.epocas.length} epocas de aplicacao</p>
            <div class="trial-card-meta">
              <span class="chip green">${protocol.totalTratamentos} tratamentos</span>
              <span class="chip">${protocol.croqui.length ? "4 repeticoes" : "Croqui pendente"}</span>
            </div>
          </button>
        `)
        .join("")
    : `<p class="empty-state">Nenhum protocolo ou produto encontrado.</p>`;

  if (!protocols.length) {
    $("#protocol-detail").innerHTML = `<p class="empty-state">Ajuste a busca para visualizar os dados.</p>`;
  }
}

function treatmentRecipeView(protocol) {
  const delta = protocol.composicaoDelta?.length
    ? `
      <section class="protocol-subsection delta-composition">
        <div class="subsection-heading">
          <div><p class="eyebrow">COMPOSICAO BASE</p><h3>Formula DELTA</h3></div>
        </div>
        <div class="application-strip">
          ${protocol.composicaoDelta.map((item) => `
            <div><span>${escapeHtml(item.epoca)}</span><strong>${escapeHtml(item.receita)}</strong></div>
          `).join("")}
        </div>
      </section>
    `
    : "";

  const cards = protocol.tratamentos
    .map((treatment) => `
      <article class="protocol-treatment-card">
        <header>
          <span>TRATAMENTO</span>
          <strong>${escapeHtml(treatment.numero)}</strong>
        </header>
        <div class="protocol-applications">
          ${treatment.aplicacoes.map((application) => `
            <div class="protocol-application">
              <span>${escapeHtml(application.epoca)}</span>
              <p>${escapeHtml(application.receita === "TEST" ? "TEST - testemunha" : application.receita)}</p>
            </div>
          `).join("")}
        </div>
      </article>
    `)
    .join("");

  return `${delta}<div class="protocol-treatment-grid">${cards}</div>`;
}

function randomizationView(protocol) {
  if (!protocol.croqui.length) {
    return `
      <div class="research-empty">
        <strong>Croqui ainda nao localizado</strong>
        <p>O protocolo aparece no croqui geral, mas nao possui uma ficha de randomizacao no caderno recebido.</p>
      </div>
    `;
  }

  const columns = protocol.croqui
    .map((column) => `
      <div class="repetition-column">
        <div class="repetition-heading">${escapeHtml(column.repeticao)}</div>
        ${column.parcelas.map((plot, index) => {
          const invalid = Number(plot) > protocol.totalTratamentos;
          return `
            <div class="plot-cell${invalid ? " source-conflict" : ""}">
              <span>Parcela ${index + 1}</span>
              <strong>T${escapeHtml(plot)}</strong>
            </div>
          `;
        }).join("")}
      </div>
    `)
    .join("");

  return `
    <div class="randomization-scroll">
      <div class="croqui-orientation">
        <span>FUNDO</span>
        <span>Sentido das parcelas</span>
      </div>
      <div class="repetition-grid">${columns}</div>
      <div class="croqui-footer">CARREADOR</div>
    </div>
  `;
}

function standSummary(protocol) {
  const stand = protocol.campo.estande;
  if (!stand?.linhas?.length) return "";
  const grouped = new Map();
  stand.linhas.forEach(([treatment, repetition, value]) => {
    const key = String(treatment);
    if (!grouped.has(key)) grouped.set(key, { R1: [], R2: [], R3: [], R4: [], all: [] });
    const item = grouped.get(key);
    const rep = `R${repetition}`;
    if (item[rep]) item[rep].push(value);
    const numeric = Number(String(value).replace(",", "."));
    if (Number.isFinite(numeric)) item.all.push(numeric);
  });

  const rows = [...grouped.entries()]
    .map(([treatment, values]) => {
      const average = values.all.length
        ? new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 }).format(values.all.reduce((sum, value) => sum + value, 0) / values.all.length)
        : "-";
      return `
        <tr>
          <td data-label="Trat."><strong>T${escapeHtml(treatment)}</strong></td>
          ${["R1", "R2", "R3", "R4"].map((rep) => `<td data-label="${rep}">${escapeHtml(values[rep].join(" / ") || "-")}</td>`).join("")}
          <td data-label="Media"><strong>${average}</strong></td>
        </tr>
      `;
    })
    .join("");

  return `
    <section class="protocol-subsection">
      <div class="subsection-heading">
        <div><p class="eyebrow">REGISTRO DE CAMPO</p><h3>Estande por repeticao</h3></div>
        <span>2 contagens por parcela</span>
      </div>
      <div class="research-table-shell">
        <table class="research-data-table stand-table">
          <thead><tr><th>Trat.</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>Media</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function measurementTable(table) {
  const rows = table.linhas
    .map((row) => `
      <tr>${row.map((value, index) => `<td data-label="${escapeHtml(table.colunas[index] || `Col. ${index + 1}`)}">${escapeHtml(value || "-")}</td>`).join("")}</tr>
    `)
    .join("");
  return `
    <details class="measurement-details">
      <summary>${escapeHtml(table.titulo)} <span>${table.linhas.length} registros</span></summary>
      <div class="research-table-shell">
        <table class="research-data-table">
          <thead><tr>${table.colunas.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>
  `;
}

function fieldDataView(protocol) {
  const evaluations = protocol.avaliacoes.length
    ? `
      <section class="protocol-subsection">
        <div class="subsection-heading">
          <div><p class="eyebrow">CRONOGRAMA</p><h3>Plano de avaliacoes</h3></div>
        </div>
        <div class="evaluation-grid">
          ${protocol.avaliacoes.map((evaluation, index) => `
            <article class="evaluation-stage">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>${escapeHtml(evaluation.fase)}</strong>
                <p>${escapeHtml(evaluation.itens.join(" / ") || "Sem item informado")}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `
    : "";
  const measurements = protocol.campo.medicoes.map(measurementTable).join("");
  const empty = !evaluations && !protocol.campo.estande && !measurements
    ? `<div class="research-empty"><strong>Registros de campo pendentes</strong><p>A ficha deste protocolo nao foi encontrada no documento recebido.</p></div>`
    : "";
  return `${evaluations}${standSummary(protocol)}${measurements ? `<section class="protocol-subsection measurement-list"><div class="subsection-heading"><div><p class="eyebrow">MEDICOES</p><h3>Fichas de avaliacao</h3></div></div>${measurements}</section>` : ""}${empty}`;
}

function renderProtocolDetail() {
  const protocol = protocolData.protocolos.find((item) => item.id === state.selectedProtocolId) || filteredProtocols()[0];
  if (!protocol) return;
  const notices = protocol.avisos.length
    ? `<div class="protocol-notices">${protocol.avisos.map((notice) => `<p>${escapeHtml(notice)}</p>`).join("")}</div>`
    : "";
  const views = {
    tratamentos: treatmentRecipeView(protocol),
    croqui: randomizationView(protocol),
    campo: fieldDataView(protocol)
  };

  $("#protocol-detail").innerHTML = `
    <div class="detail-header protocol-detail-header">
      <p class="eyebrow">PROTOCOLO DE PESQUISA</p>
      <h2>${escapeHtml(protocol.nome)}</h2>
      <p>${escapeHtml(protocolData.meta.parceiros || "Excelencia / Terram")} - Safra ${escapeHtml(protocolData.meta.safra || "2026")}</p>
      <div class="chip-row">
        <span class="chip green">${protocol.totalTratamentos} tratamentos</span>
        <span class="chip">${protocol.epocas.length} epocas</span>
        <span class="chip">${protocol.croqui.length || 0} repeticoes no croqui</span>
      </div>
    </div>
    ${notices}
    <nav class="protocol-tabs" aria-label="Dados do protocolo">
      <button class="${state.protocolTab === "tratamentos" ? "active" : ""}" type="button" data-protocol-tab="tratamentos">Tratamentos</button>
      <button class="${state.protocolTab === "croqui" ? "active" : ""}" type="button" data-protocol-tab="croqui">Croqui</button>
      <button class="${state.protocolTab === "campo" ? "active" : ""}" type="button" data-protocol-tab="campo">Campo</button>
    </nav>
    <div class="protocol-view">${views[state.protocolTab]}</div>
    <p class="protocol-source">Fontes: ${protocolData.meta.fontes.map(escapeHtml).join(" + ")}</p>
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

  $(".workspace-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-workspace]");
    if (!button) return;
    state.workspace = button.dataset.workspace;
    renderWorkspace();
  });

  $(".research-view-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-research-view]");
    if (!button) return;
    state.researchView = button.dataset.researchView;
    renderResearchView();
  });

  $("#protocol-search").addEventListener("input", (event) => {
    state.protocolQuery = event.target.value;
    renderProtocolList();
    renderProtocolDetail();
  });

  $("#protocol-list").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-protocol-id]");
    if (!button) return;
    state.selectedProtocolId = button.dataset.protocolId;
    state.protocolTab = "tratamentos";
    renderProtocolList();
    renderProtocolDetail();
  });

  $("#protocol-detail").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-protocol-tab]");
    if (!button) return;
    state.protocolTab = button.dataset.protocolTab;
    renderProtocolDetail();
  });

  $("#general-field-map").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-map-protocol]");
    if (!button) return;
    state.selectedProtocolId = button.dataset.mapProtocol;
    state.protocolTab = "tratamentos";
    state.researchView = "protocolos";
    renderResearchView();
    renderProtocolList();
    renderProtocolDetail();
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
  if (params.get("module") === "pesquisa") state.workspace = "pesquisa";
  normalizeUiLabels();
  setTheme(savedTheme);
  $("#user-name").value = safeGet("exa_user") || "";
  bindEvents();
  renderMetrics();
  renderWarnings();
  renderTrialList();
  renderTrialDetail();
  renderResearchMetrics();
  renderGeneralMap();
  renderProtocolList();
  renderProtocolDetail();
  renderWorkspace();
  renderResearchView();
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
