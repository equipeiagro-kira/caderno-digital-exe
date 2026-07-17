"""Build the static soil-compaction dataset used by the offline PWA."""

from __future__ import annotations

import json
import re
import statistics
import unicodedata
from pathlib import Path
from typing import Any

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
DESKTOP = Path.home() / "Desktop"
OUTPUT = ROOT / "src" / "compaction-data.js"


AREAS = {
    "milho-pazinato": {
        "nome": "Milho Pazinato",
        "produtor": "Diozei Pazinato",
        "cultura": "MILHO",
        "trialId": "milho-pazinato",
        "avisos": [],
    },
    "soja-vendruscolo": {
        "nome": "Soja Vendruscolo",
        "produtor": "Leonardo Vendruscolo",
        "cultura": "SOJA",
        "trialId": "soja-vendruscolo",
        "avisos": [
            "As medicoes 12 a 15 vieram no PDF Dors e foram atribuidas a Vendruscolo apos confirmacao da equipe responsavel.",
            "As medicoes de origem 12 e 14 estao incompletas e nao entram nas medias consolidadas.",
        ],
    },
    "soja-jung": {
        "nome": "Soja Arison Jung",
        "produtor": "Arison Jung",
        "cultura": "SOJA",
        "trialId": "soja-jung",
        "avisos": [],
    },
    "milho-jung": {
        "nome": "Milho Arison Jung",
        "produtor": "Arison Jung",
        "cultura": "MILHO",
        "trialId": "milho-jung",
        "avisos": [
            "As tres primeiras paginas do PDF de milho eram copias exatas da soja e foram excluidas. O conjunto de milho usa as medicoes de origem 4 a 11.",
        ],
    },
    "soja-dors": {
        "nome": "Soja Dors",
        "produtor": "Carliens Dors",
        "cultura": "SOJA",
        "trialId": "soja-dors",
        "avisos": [
            "A medicao 11 possui perfil completo, mas veio sem GPS e com data invalida. Ela entra na media e permanece fora do mapa.",
            "As medicoes 12 a 15 do PDF Dors foram transferidas para Vendruscolo apos confirmacao da equipe responsavel.",
        ],
    },
}


ASSIGNMENTS = [
    {
        "glob": "PAZINATO_compacta*.pdf",
        "pages": range(1, 7),
        "area": "milho-pazinato",
        "campaign": "pazinato-2026-05-14",
        "campaignLabel": "Levantamento principal",
        "campaignDate": "14/05/2026",
    },
    {
        "glob": "VENDRUSCOLO_compacta*.pdf",
        "pages": range(1, 6),
        "area": "soja-vendruscolo",
        "campaign": "vendruscolo-2026-05-14",
        "campaignLabel": "Levantamento principal",
        "campaignDate": "14/05/2026",
    },
    {
        "glob": "ARISON JUNG SOJA 2026_parcial (1).pdf",
        "pages": range(0, 10),
        "area": "soja-jung",
        "campaign": "jung-soja-2026-05-29",
        "campaignLabel": "Levantamento parcial",
        "campaignDate": "29/05/2026",
    },
    {
        "glob": "ARISON JUNG MILHO 2026_parcial.pdf",
        "pages": range(3, 11),
        "area": "milho-jung",
        "campaign": "jung-milho-2026-05-29",
        "campaignLabel": "Levantamento parcial validado",
        "campaignDate": "29/05/2026",
    },
    {
        "glob": "DORS SOJA 2026_parcial.pdf",
        "pages": range(0, 11),
        "area": "soja-dors",
        "campaign": "dors-2026-06-17",
        "campaignLabel": "Levantamento principal",
        "campaignDate": "17/06/2026",
    },
    {
        "glob": "DORS SOJA 2026_parcial.pdf",
        "pages": range(11, 15),
        "area": "soja-vendruscolo",
        "campaign": "vendruscolo-2026-06-23",
        "campaignLabel": "Complemento confirmado",
        "campaignDate": "23/06/2026",
    },
]


def fold(value: str) -> str:
    return unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode().lower()


def clean_lines(text: str) -> list[str]:
    return [re.sub(r"\s+", " ", line).strip() for line in text.splitlines() if line.strip()]


def last_int(value: str) -> int | None:
    match = re.search(r"(\d+)\s*(?:kpa|cm)?\s*$", value, re.IGNORECASE)
    return int(match.group(1)) if match else None


def parse_page(page, source_file: str, page_number: int, assignment: dict[str, Any]) -> dict[str, Any]:
    text = (page.extract_text() or "").replace("\x00", "")
    lines = clean_lines(text)
    normalized = [fold(line) for line in lines]

    def first_containing(*tokens: str) -> str:
        for line, normalized_line in zip(lines, normalized):
            if all(token in normalized_line for token in tokens):
                return line
        return ""

    measurement_number = None
    for line, normalized_line in zip(lines, normalized):
        if "edicao de referencia" not in normalized_line and re.search(r"m\s*edicao\s+\d+\s*$", normalized_line):
            measurement_number = last_int(line)
            break

    maximum_line = first_containing("r.p.", "axim")
    maximum_kpa = last_int(maximum_line.replace("kPa", ""))
    maximum_depth = None
    for index, line in enumerate(lines):
        if maximum_line and line == maximum_line and index + 1 < len(lines):
            maximum_depth = last_int(lines[index + 1])
            break

    profile: dict[int, int] = {}
    for line in lines:
        match = re.fullmatch(r"(\d{1,2})\s+(\d{1,5})", line)
        if match:
            depth, value = map(int, match.groups())
            if 1 <= depth <= 60:
                profile[depth] = value

    bands = []
    for start, end in [(1, 10), (11, 20), (21, 30), (31, 40), (41, 50), (51, 60)]:
        average = None
        target = f"de {start:02d} a {end}"
        for line, normalized_line in zip(lines, normalized):
            if target in normalized_line:
                average = last_int(line)
                break
        bands.append({"inicio": start, "fim": end, "mediaKpa": average})

    overall_average = None
    for line, normalized_line in zip(lines, normalized):
        if "de 01 a 60" in normalized_line:
            overall_average = last_int(line)
            break

    speed_excess = 0
    for line, normalized_line in zip(lines, normalized):
        if "velocidade sim" in normalized_line:
            match = re.search(r"\((\d+)\)", line)
            speed_excess = int(match.group(1)) if match else 1

    complete = any("escolhida) sim" in normalized_line for normalized_line in normalized)
    date = lines[-1] if lines and re.fullmatch(r"\d{2}/\d{2}/\d{4}", lines[-1]) else ""
    time = lines[-2] if len(lines) > 1 and re.fullmatch(r"\d{2}:\d{2}:\d{2}", lines[-2]) else ""
    valid_date = bool(date and int(date[-4:]) >= 2020)

    latitude = None
    longitude = None
    for line, normalized_line in zip(lines, normalized):
        if normalized_line.startswith("lat."):
            match = re.search(r"(-?\d+(?:\.\d+)?)\s*N", line, re.IGNORECASE)
            latitude = float(match.group(1)) if match else None
        if normalized_line.startswith("long."):
            match = re.search(r"(-?\d+(?:\.\d+)?)\s*W", line, re.IGNORECASE)
            longitude = float(match.group(1)) if match else None

    point_id = f"{assignment['area']}-{assignment['campaign']}-{measurement_number or page_number}"
    return {
        "id": point_id,
        "numeroOrigem": measurement_number,
        "trabalhoOrigem": lines[0] if lines else "",
        "arquivoOrigem": source_file,
        "paginaOrigem": page_number,
        "campanhaId": assignment["campaign"],
        "campanha": assignment["campaignLabel"],
        "dataCampanha": assignment["campaignDate"],
        "dataMedicao": date if valid_date else None,
        "horaMedicao": time if valid_date else None,
        "metadadosValidos": valid_date and latitude is not None and longitude is not None,
        "completa": complete,
        "excessosVelocidade": speed_excess,
        "maximo": {"kpa": maximum_kpa, "profundidadeCm": maximum_depth},
        "mediaGeralKpa": overall_average,
        "camadas": bands,
        "coordenadas": {"latitude": latitude, "longitude": longitude} if latitude is not None and longitude is not None else None,
        "perfilKpa": [profile.get(depth, 0) for depth in range(1, 61)],
    }


def summarize(points: list[dict[str, Any]]) -> dict[str, Any]:
    valid = [point for point in points if point["completa"]]
    mean_profile = [round(statistics.mean(point["perfilKpa"][index] for point in valid), 1) for index in range(60)]
    min_profile = [min(point["perfilKpa"][index] for point in valid) for index in range(60)]
    max_profile = [max(point["perfilKpa"][index] for point in valid) for index in range(60)]
    peak_index = max(range(60), key=lambda index: mean_profile[index])
    layer_means = [
        round(statistics.mean(point["camadas"][index]["mediaKpa"] for point in valid))
        for index in range(6)
    ]

    classes = {"ate1000": 0, "1001a1500": 0, "1501a2000": 0, "2001a3500": 0, "acima3500": 0}
    for point in valid:
        value = point["maximo"]["kpa"]
        key = (
            "ate1000" if value <= 1000 else
            "1001a1500" if value <= 1500 else
            "1501a2000" if value <= 2000 else
            "2001a3500" if value <= 3500 else
            "acima3500"
        )
        classes[key] += 1

    return {
        "totalMedicoes": len(points),
        "medicoesCompletas": len(valid),
        "medicoesIncompletas": len(points) - len(valid),
        "pontosGps": sum(point["coordenadas"] is not None for point in points),
        "alertasVelocidade": sum(point["excessosVelocidade"] > 0 for point in points),
        "metadadosInvalidos": sum(not point["metadadosValidos"] for point in points),
        "mediaGeralKpa": round(statistics.mean(point["mediaGeralKpa"] for point in valid)),
        "camadasKpa": layer_means,
        "picoMedio": {"kpa": mean_profile[peak_index], "profundidadeCm": peak_index + 1},
        "maiorValorObservadoKpa": max(point["maximo"]["kpa"] for point in valid),
        "classesMaximo": classes,
        "perfilMedioKpa": mean_profile,
        "perfilMinimoKpa": min_profile,
        "perfilMaximoKpa": max_profile,
    }


def main() -> None:
    grouped = {area_id: [] for area_id in AREAS}

    for assignment in ASSIGNMENTS:
        matches = list(DESKTOP.glob(assignment["glob"]))
        if len(matches) != 1:
            raise FileNotFoundError(f"Expected one PDF for {assignment['glob']}, found {len(matches)}")
        path = matches[0]
        reader = PdfReader(path)
        for page_index in assignment["pages"]:
            grouped[assignment["area"]].append(
                parse_page(reader.pages[page_index], path.name, page_index + 1, assignment)
            )

    areas = []
    for area_id, metadata in AREAS.items():
        points = grouped[area_id]
        campaigns = []
        campaign_ids = []
        for point in points:
            if point["campanhaId"] not in campaign_ids:
                campaign_ids.append(point["campanhaId"])
        for campaign_id in campaign_ids:
            campaign_points = [point for point in points if point["campanhaId"] == campaign_id]
            campaigns.append({
                "id": campaign_id,
                "nome": campaign_points[0]["campanha"],
                "data": campaign_points[0]["dataCampanha"],
                "totalMedicoes": len(campaign_points),
                "medicoesCompletas": sum(point["completa"] for point in campaign_points),
                "arquivoOrigem": campaign_points[0]["arquivoOrigem"],
            })

        areas.append({
            "id": area_id,
            **metadata,
            "campanhas": campaigns,
            "resumo": summarize(points),
            "pontos": points,
        })

    data = {
        "meta": {
            "titulo": "Compactacao do Solo",
            "equipamento": "Falker Compact",
            "cone": 2,
            "profundidadeMaximaCm": 60,
            "resolucaoCm": 1,
            "totalAreas": len(areas),
            "totalMedicoes": sum(area["resumo"]["totalMedicoes"] for area in areas),
            "medicoesCompletas": sum(area["resumo"]["medicoesCompletas"] for area in areas),
            "criterioResumo": "Somente medicoes completas entram nas medias e nos perfis consolidados.",
        },
        "areas": areas,
    }

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    OUTPUT.write_text(f"window.EXA_COMPACTION_DATA = {payload};\n", encoding="utf-8")
    print(
        f"Generated {OUTPUT} with {data['meta']['totalAreas']} areas, "
        f"{data['meta']['totalMedicoes']} measurements and {data['meta']['medicoesCompletas']} complete profiles"
    )


if __name__ == "__main__":
    main()
