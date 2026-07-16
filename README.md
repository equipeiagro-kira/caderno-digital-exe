# EXA Caderno Digital

PWA estatico para consulta offline dos ensaios de cultivares, protocolos de pesquisa e compactacao do solo da Excelencia Consultoria.

## Como rodar localmente

Use qualquer servidor estatico na raiz do projeto:

```powershell
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173`.

## Publicacao

O projeto nao precisa de build. Pode ser publicado em GitHub Pages, Netlify ou Vercel apontando a raiz do repositorio como pasta publica.

## Estrutura

- `index.html`: tela de acesso e dashboard.
- `src/styles.css`: tema visual inspirado no app EXA/Lovable.
- `src/app.js`: logica de busca, filtros, tela de detalhe e instalacao PWA.
- `src/data.js`: dados extraidos das planilhas em variavel local.
- `src/protocols-data.js`: protocolos, tratamentos, croquis e registros de campo em variavel local.
- `src/compaction-data.js`: perfis de resistencia, camadas, pontos GPS e alertas de qualidade.
- `public/vendor/leaflet/`: biblioteca local usada no mapa interativo, com sua licenca.
- `scripts/build-protocol-data.py`: gerador reproduzivel dos dados de pesquisa a partir do XLSX e DOCX recebidos.
- `scripts/build-compaction-data.py`: gerador reproduzivel da compactacao a partir dos PDFs Falker.
- `service-worker.js`: cache offline dos arquivos do app.
- `manifest.webmanifest`: metadados de instalacao PWA.
- `public/assets/`: logo e icones.

O mapa geografico usa Leaflet com tiles do OpenStreetMap enquanto houver internet. No modo offline, o app preserva os dados e exibe a distribuicao relativa dos pontos sem baixar mapas antecipadamente.

## Fonte dos dados

A fonte principal usada foi `Teste de Cultivares 2026.xlsx`, que consolida 8 ensaios. Os avisos de divergencia encontrados nas planilhas estao exibidos no proprio app.
