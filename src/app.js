const data = window.EXA_DATA || { resumo: {}, ensaios: [], cultivares: [] };
const protocolData = window.EXA_PROTOCOL_DATA || { meta: {}, croquiGeral: [], protocolos: [] };
const compactionData = window.EXA_COMPACTION_DATA || { meta: {}, areas: [] };

const state = {
  selectedCrop: "TODAS",
  query: "",
  selectedTrialId: data.ensaios[0]?.id || null,
  workspace: "cultivares",
  researchView: "mapa",
  protocolQuery: "",
  selectedProtocolId: protocolData.protocolos[0]?.id || null,
  protocolTab: "tratamentos",
  selectedCompactionCrop: "TODAS",
  compactionQuery: "",
  selectedCompactionAreaId: compactionData.areas[0]?.id || null,
  compactionTab: "resumo",
  compactionMapLayer: "vegetacao",
  deferredPrompt: null
};

let activeCompactionMap = null;
let activeCompactionMapFallbackTimer = null;

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

function trialManagementItems(trial) {
  if (trial.manejo?.length) return trial.manejo;

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
  const stages = new Map();

  trialManagementItems(trial).forEach((manejo) => {
    const title = manejo.etapa || "Aplicação";
    stages.set(title, [...(stages.get(title) || []), manejo]);
  });

  return [
    ...[...stages.entries()].map(([title, items]) => stageGroup(title, items)),
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
  $("#cultivar-module").hidden = state.workspace !== "cultivares";
  $("#research-module").hidden = state.workspace !== "pesquisa";
  $("#compaction-module").hidden = state.workspace !== "compactacao";
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

function formatKpa(value, maximumFractionDigits = 0) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "-";
  return new Intl.NumberFormat("pt-BR", { maximumFractionDigits }).format(number);
}

function compactionTone(value) {
  if (value <= 1000) return "low";
  if (value <= 1500) return "moderate";
  if (value <= 2000) return "attention";
  if (value <= 3500) return "high";
  return "critical";
}

function searchableCompactionArea(area) {
  return normalize(`${area.nome} ${area.produtor} ${area.cultura}`);
}

function filteredCompactionAreas() {
  const query = normalize(state.compactionQuery);
  return compactionData.areas.filter((area) => {
    const cropMatch = state.selectedCompactionCrop === "TODAS" || area.cultura === state.selectedCompactionCrop;
    const queryMatch = !query || searchableCompactionArea(area).includes(query);
    return cropMatch && queryMatch;
  });
}

function renderCompactionMetrics() {
  $("#metric-compaction-areas").textContent = formatNumber(compactionData.meta.totalAreas || 0);
  $("#metric-compaction-points").textContent = formatNumber(compactionData.meta.totalMedicoes || 0);
  $("#metric-compaction-complete").textContent = formatNumber(compactionData.meta.medicoesCompletas || 0);
}

function renderCompactionAreaList() {
  const areas = filteredCompactionAreas();
  $("#compaction-result-count").textContent = areas.length;

  if (areas.length && !areas.some((area) => area.id === state.selectedCompactionAreaId)) {
    state.selectedCompactionAreaId = areas[0].id;
  }

  $("#compaction-area-list").innerHTML = areas.length
    ? areas.map((area) => `
        <button class="trial-card compaction-area-card${area.id === state.selectedCompactionAreaId ? " active" : ""}" type="button" data-compaction-area="${escapeHtml(area.id)}">
          <strong>${escapeHtml(area.nome)}</strong>
          <p>${escapeHtml(area.produtor)}</p>
          <div class="trial-card-meta">
            <span class="chip green">${area.cultura}</span>
            <span class="chip">${area.resumo.totalMedicoes} medicoes</span>
            <span class="chip">Media ${formatKpa(area.resumo.mediaGeralKpa)} kPa</span>
          </div>
        </button>
      `).join("")
    : `<p class="empty-state">Nenhuma area encontrada para esse filtro.</p>`;

  if (!areas.length) {
    $("#compaction-detail").innerHTML = `<p class="empty-state">Ajuste a busca para visualizar a compactacao.</p>`;
  }
}

function layerBars(values) {
  const labels = ["01-10 cm", "11-20 cm", "21-30 cm", "31-40 cm", "41-50 cm", "51-60 cm"];
  const scale = Math.max(4000, Math.ceil(Math.max(...values) / 500) * 500);
  return `
    <div class="compaction-layers">
      ${values.map((value, index) => `
        <div class="layer-row">
          <span>${labels[index]}</span>
          <div class="layer-track"><i class="tone-${compactionTone(value)}" style="width:${Math.max(3, (value / scale) * 100)}%"></i></div>
          <strong>${formatKpa(value)} kPa</strong>
        </div>
      `).join("")}
    </div>
    <div class="compaction-scale" aria-label="Faixas de resistencia">
      <span class="tone-low">Ate 1.000</span>
      <span class="tone-moderate">1.001-1.500</span>
      <span class="tone-attention">1.501-2.000</span>
      <span class="tone-high">2.001-3.500</span>
      <span class="tone-critical">Acima de 3.500</span>
    </div>
  `;
}

function profileChartSvg(profile, ariaLabel, showRange = true) {
  const width = 720;
  const height = 390;
  const left = 66;
  const right = 22;
  const top = 24;
  const bottom = 42;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const maximum = Math.max(4000, Math.ceil(Math.max(...profile.max) / 1000) * 1000);
  const x = (value) => left + (value / maximum) * plotWidth;
  const y = (index) => top + (index / 59) * plotHeight;
  const path = (values) => values.map((value, index) => `${index ? "L" : "M"}${x(value).toFixed(1)},${y(index).toFixed(1)}`).join(" ");
  const range = [
    ...profile.max.map((value, index) => `${x(value).toFixed(1)},${y(index).toFixed(1)}`),
    ...profile.min.map((value, index) => `${x(value).toFixed(1)},${y(index).toFixed(1)}`).reverse()
  ].join(" ");
  const xTicks = [...new Set([0, 1000, 1500, 2000, 3500, maximum].filter((value) => value <= maximum))].sort((a, b) => a - b);
  const yTicks = [1, 10, 20, 30, 40, 50, 60];

  return `
    <svg class="profile-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(ariaLabel)}">
      <rect x="${left}" y="${top}" width="${plotWidth}" height="${plotHeight}" class="chart-plot" />
      ${xTicks.map((tick) => `
        <line x1="${x(tick)}" y1="${top}" x2="${x(tick)}" y2="${height - bottom}" class="chart-grid chart-threshold-${compactionTone(tick)}" />
        <text x="${x(tick)}" y="${height - 14}" text-anchor="middle">${formatKpa(tick)}</text>
      `).join("")}
      ${yTicks.map((depth) => `
        <line x1="${left}" y1="${y(depth - 1)}" x2="${width - right}" y2="${y(depth - 1)}" class="chart-grid horizontal" />
        <text x="${left - 10}" y="${y(depth - 1) + 4}" text-anchor="end">${depth} cm</text>
      `).join("")}
      ${showRange ? `<polygon points="${range}" class="profile-range" />` : ""}
      ${showRange ? `<path d="${path(profile.min)}" class="profile-line minimum" />` : ""}
      ${showRange ? `<path d="${path(profile.max)}" class="profile-line maximum" />` : ""}
      <path d="${path(profile.mean)}" class="profile-line average" />
      <text x="${left}" y="14" class="chart-axis-title">Resistencia a penetracao (kPa)</text>
    </svg>
  `;
}

function campaignSummary(area) {
  return `
    <div class="campaign-list">
      ${area.campanhas.map((campaign, index) => `
        <article class="campaign-row">
          <span class="campaign-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>${escapeHtml(campaign.nome)}</strong>
            <p>${escapeHtml(campaign.data)} - ${campaign.medicoesCompletas} de ${campaign.totalMedicoes} perfis completos</p>
            <small>${escapeHtml(campaign.arquivoOrigem)}</small>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function compactionSummaryView(area) {
  const summary = area.resumo;
  return `
    <div class="compaction-kpi-grid">
      <article><span>Media 0-60 cm</span><strong>${formatKpa(summary.mediaGeralKpa)} <small>kPa</small></strong></article>
      <article><span>Pico medio</span><strong>${formatKpa(summary.picoMedio.kpa, 1)} <small>kPa</small></strong><p>${summary.picoMedio.profundidadeCm} cm</p></article>
      <article><span>Maior valor</span><strong>${formatKpa(summary.maiorValorObservadoKpa)} <small>kPa</small></strong></article>
      <article><span>Qualidade</span><strong>${summary.medicoesCompletas}/${summary.totalMedicoes}</strong><p>perfis completos</p></article>
    </div>
    <section class="compaction-section">
      <div class="subsection-heading">
        <div><p class="eyebrow">CAMADAS</p><h3>Resistencia media por intervalo</h3></div>
        <span>Medias calculadas com perfis completos</span>
      </div>
      ${layerBars(summary.camadasKpa)}
    </section>
    <section class="compaction-section">
      <div class="subsection-heading">
        <div><p class="eyebrow">CAMPANHAS</p><h3>Origem das medicoes</h3></div>
      </div>
      ${campaignSummary(area)}
    </section>
  `;
}

function compactionProfileView(area) {
  const summary = area.resumo;
  return `
    <section class="compaction-section">
      <div class="subsection-heading">
        <div><p class="eyebrow">PERFIL CONSOLIDADO</p><h3>Resistencia por profundidade</h3></div>
        <span>${summary.medicoesCompletas} perfis completos</span>
      </div>
      <div class="profile-chart-shell">
        ${profileChartSvg({ mean: summary.perfilMedioKpa, min: summary.perfilMinimoKpa, max: summary.perfilMaximoKpa }, `Perfil consolidado de ${area.nome}`)}
      </div>
      <div class="profile-legend">
        <span class="average">Media</span>
        <span class="minimum">Minimo</span>
        <span class="maximum">Maximo</span>
        <span class="range">Faixa observada</span>
      </div>
      <p class="method-note">${escapeHtml(compactionData.meta.criterioResumo)} Equipamento ${escapeHtml(compactionData.meta.equipamento)}, cone ${compactionData.meta.cone}, resolucao de ${compactionData.meta.resolucaoCm} cm.</p>
    </section>
  `;
}

function destroyCompactionMap() {
  if (activeCompactionMapFallbackTimer) {
    window.clearTimeout(activeCompactionMapFallbackTimer);
    activeCompactionMapFallbackTimer = null;
  }
  if (!activeCompactionMap) return;
  const map = activeCompactionMap;
  activeCompactionMap = null;
  map.remove();
}

function gpsFallbackMap(area, points) {
  const width = 720;
  const height = 320;
  const margin = 38;
  const latitudes = points.map((point) => point.coordenadas.latitude);
  const longitudes = points.map((point) => point.coordenadas.longitude);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLon = Math.min(...longitudes);
  const maxLon = Math.max(...longitudes);
  const latRange = maxLat - minLat || 0.0001;
  const lonRange = maxLon - minLon || 0.0001;
  const x = (longitude) => margin + ((longitude - minLon) / lonRange) * (width - margin * 2);
  const y = (latitude) => margin + ((maxLat - latitude) / latRange) * (height - margin * 2);
  const campaigns = [...new Set(points.map((point) => point.campanhaId))];

  return `
    <div class="gps-fallback-shell">
      <svg class="gps-fallback-map" viewBox="0 0 ${width} ${height}" role="img" aria-label="Distribuicao relativa dos pontos GPS de ${escapeHtml(area.nome)}">
        <rect x="1" y="1" width="${width - 2}" height="${height - 2}" class="gps-map-bg" />
        ${[1, 2, 3, 4].map((step) => `<line x1="${margin}" y1="${(height / 5) * step}" x2="${width - margin}" y2="${(height / 5) * step}" class="map-grid" />`).join("")}
        ${[1, 2, 3, 4].map((step) => `<line x1="${(width / 5) * step}" y1="${margin}" x2="${(width / 5) * step}" y2="${height - margin}" class="map-grid" />`).join("")}
        ${points.map((point) => {
          const campaignIndex = campaigns.indexOf(point.campanhaId);
          return `
            <g class="gps-point campaign-${campaignIndex}${point.completa ? "" : " incomplete"}" transform="translate(${x(point.coordenadas.longitude).toFixed(1)} ${y(point.coordenadas.latitude).toFixed(1)})">
              <circle r="12" />
              <text y="4" text-anchor="middle">${point.numeroOrigem}</text>
            </g>
          `;
        }).join("")}
      </svg>
    </div>
  `;
}

function gpsMap(area) {
  const points = area.pontos.filter((point) => point.coordenadas);
  if (!points.length) return `<div class="research-empty"><strong>Sem coordenadas GPS</strong><p>Nenhuma medicao desta area possui localizacao valida.</p></div>`;
  const campaigns = [...new Set(points.map((point) => point.campanhaId))];

  return `
    <div class="compaction-map-toolbar">
      <span>Visualiza&ccedil;&atilde;o</span>
      <div class="map-layer-segmented" role="group" aria-label="Camada do mapa">
        <button class="${state.compactionMapLayer === "vegetacao" ? "active" : ""}" type="button" data-compaction-map-layer="vegetacao" aria-pressed="${state.compactionMapLayer === "vegetacao"}">Vegeta&ccedil;&atilde;o</button>
        <button class="${state.compactionMapLayer === "ruas" ? "active" : ""}" type="button" data-compaction-map-layer="ruas" aria-pressed="${state.compactionMapLayer === "ruas"}">Ruas</button>
      </div>
    </div>
    <div class="compaction-map-stack">
      <div id="compaction-map-frame" class="compaction-map-frame">
        <div id="compaction-gps-map" class="compaction-leaflet-map" role="region" aria-label="Mapa interativo dos pontos GPS de ${escapeHtml(area.nome)}"></div>
        <div id="compaction-map-loading" class="compaction-map-loading">Carregando camada de ${state.compactionMapLayer === "vegetacao" ? "vegetacao" : "ruas"}...</div>
      </div>
      <div id="compaction-map-fallback" class="gps-map-fallback" hidden>
        <div class="map-fallback-notice">
          <strong>Mapa-base indisponivel</strong>
          <p>Exibindo a posicao relativa dos pontos. O mapa geografico precisa de internet.</p>
        </div>
        ${gpsFallbackMap(area, points)}
      </div>
    </div>
    <div class="map-campaign-legend">
      ${campaigns.map((campaignId, index) => {
        const point = points.find((item) => item.campanhaId === campaignId);
        return `<span class="campaign-${index}">${escapeHtml(point.campanha)} - ${escapeHtml(point.dataCampanha)}</span>`;
      }).join("")}
      ${points.some((point) => !point.completa) ? `<span class="incomplete">Circulo vazado: medicao incompleta</span>` : ""}
    </div>
    <p class="method-note">${state.compactionMapLayer === "vegetacao" ? "Imagem de satelite Esri para leitura visual da vegetacao." : "Mapa de ruas OpenStreetMap."} Toque em um ponto para ver os dados da medicao.</p>
  `;
}

function activateCompactionMapFallback() {
  const frame = $("#compaction-map-frame");
  const fallback = $("#compaction-map-fallback");
  destroyCompactionMap();
  if (frame) frame.hidden = true;
  if (fallback) fallback.hidden = false;
}

function initCompactionMap(area) {
  const container = $("#compaction-gps-map");
  const points = area.pontos.filter((point) => point.coordenadas);
  if (!container || !points.length) return;
  if (!window.L || window.navigator?.onLine === false) {
    activateCompactionMapFallback();
    return;
  }

  destroyCompactionMap();
  const campaigns = [...new Set(points.map((point) => point.campanhaId))];
  const map = window.L.map(container, {
    scrollWheelZoom: false,
    zoomControl: true,
    attributionControl: true
  });
  activeCompactionMap = map;

  let successfulTiles = 0;
  let failedTiles = 0;
  const loading = $("#compaction-map-loading");
  const layerConfig = state.compactionMapLayer === "ruas"
    ? {
        url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        maxZoom: 19
      }
    : {
        url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attribution: 'Imagery &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community',
        maxZoom: 19
      };
  const tileLayer = window.L.tileLayer(layerConfig.url, {
    attribution: layerConfig.attribution,
    maxZoom: layerConfig.maxZoom
  });

  tileLayer.on("tileload", () => {
    successfulTiles += 1;
    if (loading) loading.hidden = true;
    if (activeCompactionMapFallbackTimer) {
      window.clearTimeout(activeCompactionMapFallbackTimer);
      activeCompactionMapFallbackTimer = null;
    }
  });
  tileLayer.on("tileerror", () => {
    failedTiles += 1;
    if (!successfulTiles && failedTiles >= 4 && activeCompactionMap === map) activateCompactionMapFallback();
  });
  tileLayer.addTo(map);

  const bounds = [];
  points.forEach((point) => {
    const campaignIndex = campaigns.indexOf(point.campanhaId);
    const markerClass = `campaign-${campaignIndex}${point.completa ? "" : " incomplete"}`;
    const icon = window.L.divIcon({
      className: "compaction-map-div-icon",
      html: `<span class="compaction-map-marker ${markerClass}">${point.numeroOrigem}</span>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -14]
    });
    const coordinates = [point.coordenadas.latitude, point.coordenadas.longitude];
    bounds.push(coordinates);
    window.L.marker(coordinates, { icon, title: `Medicao ${point.numeroOrigem}` })
      .addTo(map)
      .bindPopup(`
        <div class="compaction-map-popup-content">
          <strong>Medicao ${point.numeroOrigem}</strong>
          <span>${escapeHtml(point.dataMedicao || point.dataCampanha)} - ${escapeHtml(point.campanha)}</span>
          <dl>
            <div><dt>Maximo</dt><dd>${formatKpa(point.maximo.kpa)} kPa</dd></div>
            <div><dt>Profundidade</dt><dd>${point.maximo.profundidadeCm} cm</dd></div>
          </dl>
          <button type="button" data-compaction-point="${escapeHtml(point.id)}">Abrir perfil</button>
        </div>
      `, { className: "compaction-map-popup" });
  });

  if (bounds.length === 1) {
    map.setView(bounds[0], 17);
  } else {
    map.fitBounds(bounds, { padding: [34, 34], maxZoom: 17, animate: false });
  }
  window.L.control.scale({ imperial: false, maxWidth: 110 }).addTo(map);

  window.requestAnimationFrame(() => {
    if (activeCompactionMap === map) map.invalidateSize({ pan: false });
  });
  activeCompactionMapFallbackTimer = window.setTimeout(() => {
    if (!successfulTiles && activeCompactionMap === map) activateCompactionMapFallback();
  }, 10000);
}

function pointStatus(point) {
  const statuses = [point.completa ? `<span class="chip green">Completa</span>` : `<span class="chip warning">Incompleta</span>`];
  if (point.excessosVelocidade) statuses.push(`<span class="chip warning">Velocidade: ${point.excessosVelocidade}</span>`);
  if (!point.metadadosValidos) statuses.push(`<span class="chip warning">Metadados a revisar</span>`);
  return statuses.join("");
}

function compactionPointsView(area) {
  return `
    <section class="compaction-section">
      <div class="subsection-heading">
        <div><p class="eyebrow">GEOREFERENCIAMENTO</p><h3>Distribuicao dos pontos</h3></div>
        <span>${area.resumo.pontosGps} de ${area.resumo.totalMedicoes} com GPS</span>
      </div>
      ${gpsMap(area)}
    </section>
    <section class="compaction-section">
      <div class="subsection-heading">
        <div><p class="eyebrow">MEDICOES</p><h3>Perfis individuais</h3></div>
      </div>
      <div class="compaction-point-grid">
        ${area.pontos.map((point) => `
          <article class="compaction-point-card${point.completa ? "" : " incomplete"}">
            <header>
              <div><span>MEDICAO</span><strong>${point.numeroOrigem}</strong></div>
              <small>${escapeHtml(point.dataMedicao || "Data invalida")}</small>
            </header>
            <div class="point-status-row">${pointStatus(point)}</div>
            <dl>
              <div><dt>Maximo</dt><dd>${formatKpa(point.maximo.kpa)} kPa</dd></div>
              <div><dt>Profundidade</dt><dd>${point.maximo.profundidadeCm} cm</dd></div>
              <div><dt>Media 0-60</dt><dd>${formatKpa(point.mediaGeralKpa)} kPa</dd></div>
            </dl>
            <p>${point.coordenadas ? `${point.coordenadas.latitude.toFixed(6)}, ${point.coordenadas.longitude.toFixed(6)}` : "Sem coordenadas validas"}</p>
            <button class="secondary-button" type="button" data-compaction-point="${escapeHtml(point.id)}">Ver perfil</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCompactionDetail() {
  destroyCompactionMap();
  const area = compactionData.areas.find((item) => item.id === state.selectedCompactionAreaId) || filteredCompactionAreas()[0];
  if (!area) return;
  const warnings = area.avisos.length
    ? `<div class="protocol-notices">${area.avisos.map((warning) => `<p>${escapeHtml(warning)}</p>`).join("")}</div>`
    : "";
  const views = {
    resumo: compactionSummaryView(area),
    perfil: compactionProfileView(area),
    pontos: compactionPointsView(area)
  };

  $("#compaction-detail").innerHTML = `
    <div class="detail-header compaction-detail-header">
      <p class="eyebrow">${escapeHtml(area.cultura)} - COMPACTACAO</p>
      <h2>${escapeHtml(area.nome)}</h2>
      <p>${escapeHtml(area.produtor)}</p>
      <div class="chip-row">
        <span class="chip green">${area.resumo.totalMedicoes} medicoes</span>
        <span class="chip">${area.resumo.medicoesCompletas} completas</span>
        <span class="chip">${area.resumo.pontosGps} pontos GPS</span>
        ${area.resumo.alertasVelocidade ? `<span class="chip warning">${area.resumo.alertasVelocidade} alertas de velocidade</span>` : ""}
      </div>
      <button class="secondary-button open-trial-button" type="button" data-open-compaction-trial="${escapeHtml(area.trialId)}">Abrir cultivares</button>
    </div>
    ${warnings}
    <nav class="protocol-tabs compaction-tabs" aria-label="Dados de compactacao">
      <button class="${state.compactionTab === "resumo" ? "active" : ""}" type="button" data-compaction-tab="resumo">Resumo</button>
      <button class="${state.compactionTab === "perfil" ? "active" : ""}" type="button" data-compaction-tab="perfil">Perfil</button>
      <button class="${state.compactionTab === "pontos" ? "active" : ""}" type="button" data-compaction-tab="pontos">Pontos</button>
    </nav>
    <div class="compaction-view">${views[state.compactionTab]}</div>
  `;
  if (state.compactionTab === "pontos") {
    window.requestAnimationFrame(() => initCompactionMap(area));
  }
}

function showCompactionPoint(area, point) {
  let modal = $("#compaction-point-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "compaction-point-modal";
    modal.className = "treatment-modal compaction-point-modal";
    document.body.appendChild(modal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.closest("[data-compaction-point-close]")) {
        modal.classList.remove("show");
      }
    });
  }
  const individual = { mean: point.perfilKpa, min: point.perfilKpa, max: point.perfilKpa };
  const warnings = [
    !point.completa ? "Medicao incompleta: mantida para consulta, mas excluida das medias consolidadas." : "",
    point.excessosVelocidade ? `Ocorreram ${point.excessosVelocidade} alertas de velocidade excessiva.` : "",
    !point.metadadosValidos ? "GPS, data ou hora de origem precisam de revisao." : ""
  ].filter(Boolean);

  modal.innerHTML = `
    <div class="treatment-card compaction-point-dialog" role="dialog" aria-modal="true" aria-label="Perfil da medicao">
      <button class="install-close" type="button" data-compaction-point-close>Fechar</button>
      <p class="eyebrow">${escapeHtml(area.nome)} - MEDICAO ${point.numeroOrigem}</p>
      <h2>${formatKpa(point.maximo.kpa)} kPa a ${point.maximo.profundidadeCm} cm</h2>
      <p>${escapeHtml(point.dataMedicao || point.dataCampanha)} ${escapeHtml(point.horaMedicao || "")} - ${escapeHtml(point.campanha)}</p>
      <div class="chip-row">${pointStatus(point)}</div>
      ${warnings.length ? `<div class="protocol-notices">${warnings.map((warning) => `<p>${escapeHtml(warning)}</p>`).join("")}</div>` : ""}
      <div class="profile-chart-shell point-profile-chart">
        ${profileChartSvg(individual, `Perfil da medicao ${point.numeroOrigem} em ${area.nome}`, false)}
      </div>
      ${layerBars(point.camadas.map((layer) => layer.mediaKpa))}
      <div class="point-source">
        <strong>Origem</strong>
        <span>${escapeHtml(point.arquivoOrigem)} - pagina ${point.paginaOrigem}</span>
        <span>${point.coordenadas ? `${point.coordenadas.latitude.toFixed(6)}, ${point.coordenadas.longitude.toFixed(6)}` : "Sem GPS valido"}</span>
      </div>
    </div>
  `;
  modal.classList.add("show");
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

  $("#compaction-search").addEventListener("input", (event) => {
    state.compactionQuery = event.target.value;
    renderCompactionAreaList();
    renderCompactionDetail();
  });

  $(".compaction-crop-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-compaction-crop]");
    if (!button) return;
    state.selectedCompactionCrop = button.dataset.compactionCrop;
    $$("button[data-compaction-crop]").forEach((item) => item.classList.toggle("active", item === button));
    renderCompactionAreaList();
    renderCompactionDetail();
  });

  $("#compaction-area-list").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-compaction-area]");
    if (!button) return;
    state.selectedCompactionAreaId = button.dataset.compactionArea;
    state.compactionTab = "resumo";
    renderCompactionAreaList();
    renderCompactionDetail();
  });

  $("#compaction-detail").addEventListener("click", (event) => {
    const tabButton = event.target.closest("button[data-compaction-tab]");
    if (tabButton) {
      state.compactionTab = tabButton.dataset.compactionTab;
      renderCompactionDetail();
      return;
    }

    const mapLayerButton = event.target.closest("button[data-compaction-map-layer]");
    if (mapLayerButton) {
      state.compactionMapLayer = mapLayerButton.dataset.compactionMapLayer;
      renderCompactionDetail();
      return;
    }

    const pointButton = event.target.closest("button[data-compaction-point]");
    if (pointButton) {
      const area = compactionData.areas.find((item) => item.id === state.selectedCompactionAreaId);
      const point = area?.pontos.find((item) => item.id === pointButton.dataset.compactionPoint);
      if (area && point) showCompactionPoint(area, point);
      return;
    }

    const trialButton = event.target.closest("button[data-open-compaction-trial]");
    if (trialButton) {
      state.selectedTrialId = trialButton.dataset.openCompactionTrial;
      state.workspace = "cultivares";
      renderTrialList();
      renderTrialDetail();
      renderWorkspace();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
  if (params.get("module") === "compactacao") state.workspace = "compactacao";
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
  renderCompactionMetrics();
  renderCompactionAreaList();
  renderCompactionDetail();
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
