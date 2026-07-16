import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const TRIALS = [
  { sheet: "SOJA AGOSTINHO", id: "soja-agostinho" },
  { sheet: "SOJA RICARDO CUNHA", id: "soja-r-cunha" },
  { sheet: "SOJA VENDRÚSCOLO", id: "soja-vendruscolo" },
  { sheet: "SOJA DORS", id: "soja-dors" },
  { sheet: "SOJA JUNG", id: "soja-jung" },
  { sheet: "MILHO JUNG", id: "milho-jung" },
  { sheet: "MILHO PAZINATO", id: "milho-pazinato" },
  { sheet: "MILHO IVO", id: "milho-ivo" },
];

const inputPath = path.resolve(process.argv[2] || "Teste de Cultivares 2026 - ATUALIZADO.xlsx");
const outputPath = path.resolve(process.argv[3] || "src/data.js");

const normalize = (value) =>
  String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

const cleanText = (value) => {
  if (value === null || value === undefined) return "";
  return String(value).replace(/\s+/g, " ").trim();
};

const cleanValue = (value) => {
  if (typeof value === "string") return cleanText(value);
  return value;
};

const numericValue = (value) => {
  if (value === null || value === undefined || value === "") return undefined;
  const number = Number(String(value).replace(",", "."));
  return Number.isFinite(number) ? number : cleanText(value);
};

const slugCompare = (a, b) =>
  String(a).localeCompare(String(b), "pt-BR", { sensitivity: "base", numeric: true });

function findColumn(headers, predicate) {
  return headers.findIndex((header) => predicate(normalize(header)));
}

function isStageHeader(value, doseHeader) {
  if (normalize(doseHeader) !== "dose/ha") return false;
  const label = normalize(value);
  return label.includes("pos-emergente") || label.includes("fungicida") || label.includes("aplicacao");
}

function stageOrder(label) {
  const normalized = normalize(label);
  if (normalized.includes("pos-emergente")) return 0;
  const number = normalized.match(/^(\d+)/)?.[1];
  return number ? Number(number) : 99;
}

function extractManagement(values) {
  const productColumns = new Set();

  values.forEach((row) => {
    row.forEach((value, columnIndex) => {
      if (isStageHeader(value, row[columnIndex + 1])) productColumns.add(columnIndex);
    });
  });

  const stages = [];
  [...productColumns].sort((a, b) => a - b).forEach((productColumn) => {
    let currentStage = null;

    values.forEach((row, rowIndex) => {
      const value = row[productColumn];
      const dose = row[productColumn + 1];

      if (isStageHeader(value, dose)) {
        currentStage = {
          etapa: cleanText(value),
          order: stageOrder(value),
          rowIndex,
          products: [],
        };
        stages.push(currentStage);
        return;
      }

      const product = cleanText(value);
      if (!currentStage || !product || normalize(product) === "dose/ha") return;
      currentStage.products.push({
        etapa: currentStage.etapa,
        produto: product,
        dose: cleanValue(dose),
      });
    });
  });

  return stages
    .sort((a, b) => a.order - b.order || a.rowIndex - b.rowIndex)
    .flatMap((stage) => stage.products);
}

function extractSupportLists(values) {
  const headerRowIndex = values.findIndex((row) =>
    row.some((value) => ["adubacao", "adubo"].includes(normalize(value))) &&
    row.some((value) => normalize(value).includes("jato dirigido"))
  );

  if (headerRowIndex < 0) return { adubacao: [], jatoDirigido: [] };

  const headerRow = values[headerRowIndex];
  const fertilizationColumn = headerRow.findIndex((value) => ["adubacao", "adubo"].includes(normalize(value)));
  const directedJetColumn = headerRow.findIndex((value) => normalize(value).includes("jato dirigido"));

  const collectColumn = (columnIndex) =>
    values
      .slice(headerRowIndex + 1)
      .map((row) => cleanText(row[columnIndex]))
      .filter(Boolean);

  return {
    adubacao: collectColumn(fertilizationColumn),
    jatoDirigido: collectColumn(directedJetColumn),
  };
}

function parseTrial(values, config, sourceName) {
  const headerRowIndex = values.findIndex(
    (row) => normalize(row[0]).replace(/[^a-z]/g, "") === "n" && normalize(row[1]) === "cultivar"
  );
  if (headerRowIndex < 0) throw new Error(`Cabecalho de cultivares nao encontrado em ${config.sheet}.`);

  const headers = values[headerRowIndex];
  const cultivarColumn = findColumn(headers, (value) => value === "cultivar");
  const companyColumn = findColumn(headers, (value) => value === "empresa");
  const maturityColumn = findColumn(headers, (value) => value === "maturacao");
  const weightColumn = findColumn(headers, (value) => value.startsWith("pmg") || value.startsWith("pms"));
  const populationColumn = findColumn(headers, (value) => value === "populacao");
  const motoraColumn = findColumn(headers, (value) => value === "motora");
  const movidaColumn = findColumn(headers, (value) => value === "movida");

  const treatments = values
    .map((row, rowIndex) => ({ row, rowIndex }))
    .filter(({ row, rowIndex }) => rowIndex > headerRowIndex && Number.isFinite(Number(row[0])) && Number(row[0]) > 0)
    .map(({ row, rowIndex }) => {
      const treatment = {
        numero: Number(row[0]),
        cultivar: cleanText(row[cultivarColumn]),
        empresa: cleanText(row[companyColumn]),
      };

      const optionalFields = [
        ["maturacao", maturityColumn],
        ["pmg", weightColumn],
        ["populacao", populationColumn],
        ["motora", motoraColumn],
        ["movida", movidaColumn],
      ];

      optionalFields.forEach(([field, columnIndex]) => {
        if (columnIndex < 0) return;
        const value = numericValue(row[columnIndex]);
        if (value !== undefined && value !== "") treatment[field] = value;
      });

      treatment.id = `${config.id}-${treatment.numero}`;
      treatment.linhaExcel = rowIndex + 2;
      return treatment;
    });

  const context = cleanText(values[1]?.[0]);
  const plantio = context.match(/Plantio:\s*([\d/]+)/i)?.[1] || "";
  const produtor = context.match(/Produtor:\s*(.+?)(?:\.|$)/i)?.[1]?.trim() || "";
  const support = extractSupportLists(values);

  return {
    id: config.id,
    nome: config.sheet,
    titulo: cleanText(values[0]?.[0]),
    cultura: cleanText(values[2]?.[0]).toUpperCase(),
    produtor,
    plantio,
    totalTratamentos: treatments.length,
    colunasOriginais: headers.map(cleanValue).filter((value) => value !== null && value !== ""),
    tratamentos: treatments,
    manejo: extractManagement(values),
    observacoes: [],
    fonte: { arquivo: sourceName, aba: config.sheet },
    ...support,
  };
}

function buildCultivarIndex(trials) {
  const cultivarMap = new Map();

  trials.forEach((trial) => {
    trial.tratamentos.forEach((treatment) => {
      const key = `${trial.cultura}|${normalize(treatment.cultivar)}`;
      const current = cultivarMap.get(key) || {
        cultivar: treatment.cultivar,
        empresa: treatment.empresa,
        cultura: trial.cultura,
        ensaios: [],
      };
      if (!current.ensaios.includes(trial.id)) current.ensaios.push(trial.id);
      cultivarMap.set(key, current);
    });
  });

  return [...cultivarMap.values()].sort(
    (a, b) => slugCompare(a.cultura, b.cultura) || slugCompare(a.cultivar, b.cultivar)
  );
}

const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sourceName = path.basename(inputPath);
const trials = TRIALS.map((config) => {
  const sheet = workbook.worksheets.getItem(config.sheet);
  return parseTrial(sheet.getUsedRange().values, config, sourceName);
});
const cultivars = buildCultivarIndex(trials);
const allManagement = trials.flatMap((trial) => trial.manejo);
const uniqueProducts = new Set(allManagement.map((item) => normalize(item.produto)).filter(Boolean));

const data = {
  resumo: {
    geradoEm: new Date().toISOString(),
    fontePrincipal: sourceName,
    totalEnsaios: trials.length,
    totalTratamentos: trials.reduce((total, trial) => total + trial.totalTratamentos, 0),
    totalCultivaresUnicas: cultivars.length,
    totalProdutosManejo: uniqueProducts.size,
    culturas: [...new Set(trials.map((trial) => trial.cultura))].sort(slugCompare),
    produtores: [...new Set(trials.map((trial) => trial.produtor))].sort(slugCompare),
    avisos: [
      "A planilha atualizada consolida os oito ensaios de soja e milho exibidos no caderno.",
      "Os produtos de cada etapa pertencem ao ensaio e são apresentados integralmente em todas as cultivares daquele produtor.",
      "SOJA JUNG apresenta 1ª, 2ª, 3ª, 4ª e 6ª aplicações na fonte; não há cabeçalho de 5ª aplicação.",
    ],
  },
  ensaios: trials,
  cultivares: cultivars,
};

const output = `// Dados extraidos da planilha consolidada da Excelencia.\nwindow.EXA_DATA = ${JSON.stringify(data, null, 2)};\n`;
await fs.writeFile(outputPath, output, "utf8");

process.stdout.write(
  JSON.stringify({
    outputPath,
    trials: trials.map((trial) => ({
      id: trial.id,
      treatments: trial.totalTratamentos,
      managementItems: trial.manejo.length,
      stages: [...new Set(trial.manejo.map((item) => item.etapa))],
      fertilizationItems: trial.adubacao.length,
      directedJetItems: trial.jatoDirigido.length,
    })),
    totalTreatments: data.resumo.totalTratamentos,
    uniqueCultivars: data.resumo.totalCultivaresUnicas,
    uniqueManagementProducts: data.resumo.totalProdutosManejo,
  }, null, 2)
);
