// Dados extraidos das planilhas Excelencia. Nao editar manualmente sem atualizar a fonte.
window.EXA_DATA = {
  "resumo": {
    "geradoEm": "2026-07-14T19:27:10",
    "fontePrincipal": "Teste de Cultivares 2026.xlsx",
    "totalEnsaios": 8,
    "totalTratamentos": 210,
    "totalCultivaresUnicas": 79,
    "totalProdutosManejo": 102,
    "culturas": [
      "MILHO",
      "SOJA"
    ],
    "produtores": [
      "Agostinho Faccio",
      "Arison Jung",
      "Carliens Dors",
      "Diózei Pazinato",
      "Ivo Barili",
      "Leonardo Vendrúscolo",
      "Ricardo Cunha"
    ],
    "avisos": [
      "Foram recebidos 5 arquivos Excel; a planilha Teste de Cultivares 2026.xlsx consolida 8 ensaios.",
      "SOJA JUNG e MILHO IVO aparecem tamb?m em arquivos individuais com registros equivalentes.",
      "MILHO JUNG possui diverg?ncia entre consolidado e arquivo individual: NK 509 / AZIMUT aparece como 0.7 no consolidado e 0.77 no individual.",
      "SOJA AGOSTINHO possui diferen?a de cabe?alho: o consolidado preserva a data 1? FUNGICIDA (24/06)."
    ]
  },
  "ensaios": [
    {
      "id": "soja-agostinho",
      "nome": "SOJA AGOSTINHO",
      "titulo": "TESTE DE VARIEDADES",
      "cultura": "SOJA",
      "produtor": "Agostinho Faccio",
      "plantio": "06/05/2026",
      "totalTratamentos": 21,
      "colunasOriginais": [
        "Nº",
        "CULTIVAR",
        "EMPRESA",
        "MATURAÇÃO",
        "PMS (g)",
        "POPULAÇÃO",
        "PÓS-EMERGENTE (10/06)",
        "DOSE/HA",
        "2ª FUNGICIDA (08/07)",
        "DOSE/HA"
      ],
      "tratamentos": [
        {
          "numero": 1,
          "cultivar": "RAPTOR",
          "empresa": "BRASMAX",
          "maturacao": 7.1,
          "pmg": 172,
          "populacao": 400000,
          "id": "soja-agostinho-1",
          "linhaExcel": 6,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (10/06)",
              "produto": "WG",
              "dose": "2"
            },
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "VIOVAM",
              "dose": "0.7"
            }
          ],
          "raw": [
            "1",
            "RAPTOR",
            "BRASMAX",
            "7.1",
            "172",
            "400000",
            "",
            "WG",
            "2",
            "VIOVAM",
            "0.7"
          ]
        },
        {
          "numero": 2,
          "cultivar": "NS 7676",
          "empresa": "NIDERA",
          "maturacao": 7.6,
          "pmg": 180,
          "populacao": 300000,
          "id": "soja-agostinho-2",
          "linhaExcel": 7,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (10/06)",
              "produto": "VESSARYA",
              "dose": "0.4"
            },
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "TIOFANATO 500",
              "dose": "1"
            }
          ],
          "raw": [
            "2",
            "NS 7676",
            "NIDERA",
            "7.6",
            "180",
            "300000",
            "",
            "VESSARYA",
            "0.4",
            "TIOFANATO 500",
            "1"
          ]
        },
        {
          "numero": 3,
          "cultivar": "ITAÚBA",
          "empresa": "TMG",
          "maturacao": 7.9,
          "pmg": 185,
          "populacao": 300000,
          "id": "soja-agostinho-3",
          "linhaExcel": 8,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (10/06)",
              "produto": "CARAVAN",
              "dose": "0.3"
            },
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "LANNATE",
              "dose": "1.2"
            }
          ],
          "raw": [
            "3",
            "ITAÚBA",
            "TMG",
            "7.9",
            "185",
            "300000",
            "",
            "CARAVAN",
            "0.3",
            "LANNATE",
            "1.2"
          ]
        },
        {
          "numero": 4,
          "cultivar": "ST 80Ka72",
          "empresa": "STINE",
          "maturacao": 8,
          "pmg": 150,
          "populacao": 300000,
          "id": "soja-agostinho-4",
          "linhaExcel": 9,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (10/06)",
              "produto": "TALSTAR 400",
              "dose": "0.08"
            },
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "LUFENURON",
              "dose": "0.25"
            }
          ],
          "raw": [
            "4",
            "ST 80Ka72",
            "STINE",
            "8.0",
            "150",
            "300000",
            "",
            "TALSTAR 400",
            "0.08",
            "LUFENURON",
            "0.25"
          ]
        },
        {
          "numero": 5,
          "cultivar": "OLIMPO",
          "empresa": "BASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 300000,
          "id": "soja-agostinho-5",
          "linhaExcel": 10,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (10/06)",
              "produto": "PREMIO",
              "dose": "0.08"
            },
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "ACETAMIPRID 725",
              "dose": "0.06"
            }
          ],
          "raw": [
            "5",
            "OLIMPO",
            "BASMAX",
            "8.0",
            "171",
            "300000",
            "",
            "PREMIO",
            "0.08",
            "ACETAMIPRID 725",
            "0.06"
          ]
        },
        {
          "numero": 6,
          "cultivar": "HERA",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 188,
          "populacao": 300000,
          "id": "soja-agostinho-6",
          "linhaExcel": 11,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (10/06)",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.08"
            },
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "PIRIPROXIFEN 200",
              "dose": "0.12"
            }
          ],
          "raw": [
            "6",
            "HERA",
            "BRASMAX",
            "8.0",
            "188",
            "300000",
            "",
            "CO-MO-NI LYNX",
            "0.08",
            "PIRIPROXIFEN 200",
            "0.12"
          ]
        },
        {
          "numero": 7,
          "cultivar": "TORMENTA",
          "empresa": "BRASMAX",
          "maturacao": 7.6,
          "pmg": 172,
          "populacao": 300000,
          "id": "soja-agostinho-7",
          "linhaExcel": 12,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (10/06)",
              "produto": "MULTKEL MN",
              "dose": "0.5"
            },
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "MULTKEL COBRE",
              "dose": "0.08"
            }
          ],
          "raw": [
            "7",
            "TORMENTA",
            "BRASMAX",
            "7.6",
            "172",
            "300000",
            "",
            "MULTKEL MN",
            "0.5",
            "MULTKEL COBRE",
            "0.08"
          ]
        },
        {
          "numero": 8,
          "cultivar": "AVRA 2576",
          "empresa": "AVRA",
          "maturacao": 7.6,
          "pmg": 155,
          "populacao": 300000,
          "id": "soja-agostinho-8",
          "linhaExcel": 13,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (10/06)",
              "produto": "SULF. ZINCO",
              "dose": "0.4"
            },
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "SULF. MG",
              "dose": "1.5"
            }
          ],
          "raw": [
            "8",
            "AVRA 2576",
            "AVRA",
            "7.6",
            "155",
            "300000",
            "",
            "SULF. ZINCO",
            "0.4",
            "SULF. MG",
            "1.5"
          ]
        },
        {
          "numero": 9,
          "cultivar": "MÍTICA",
          "empresa": "BRASMAX",
          "maturacao": 7.7,
          "pmg": 163,
          "populacao": 300000,
          "id": "soja-agostinho-9",
          "linhaExcel": 14,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (10/06)",
              "produto": "SULF. MG",
              "dose": "1.5"
            },
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.08"
            }
          ],
          "raw": [
            "9",
            "MÍTICA",
            "BRASMAX",
            "7.7",
            "163",
            "300000",
            "",
            "SULF. MG",
            "1.5",
            "CO-MO-NI LYNX",
            "0.08"
          ]
        },
        {
          "numero": 10,
          "cultivar": "ST 78Ka42",
          "empresa": "STINE",
          "maturacao": 7.8,
          "pmg": 150,
          "populacao": 280000,
          "id": "soja-agostinho-10",
          "linhaExcel": 15,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (10/06)",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            },
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "POTENZA K",
              "dose": "1.5"
            }
          ],
          "raw": [
            "10",
            "ST 78Ka42",
            "STINE",
            "7.8",
            "150",
            "280000",
            "",
            "BIOPARTNERS ADJ",
            "0.08",
            "POTENZA K",
            "1.5"
          ]
        },
        {
          "numero": 11,
          "cultivar": "AVRA 2478",
          "empresa": "AVRA",
          "maturacao": 7.8,
          "pmg": 166,
          "populacao": 280000,
          "id": "soja-agostinho-11",
          "linhaExcel": 16,
          "manejos": [
            {
              "etapa": "2ª FUNGICIDA (08/07)",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            }
          ],
          "raw": [
            "11",
            "AVRA 2478",
            "AVRA",
            "7.8",
            "166",
            "280000",
            "",
            "",
            "",
            "BIOPARTNERS ADJ",
            "0.08"
          ]
        },
        {
          "numero": 12,
          "cultivar": "C 2795",
          "empresa": "CORDIUS",
          "maturacao": 7.9,
          "pmg": 184,
          "populacao": 280000,
          "id": "soja-agostinho-12",
          "linhaExcel": 17,
          "manejos": [],
          "raw": [
            "12",
            "C 2795",
            "CORDIUS",
            "7.9",
            "184",
            "280000",
            "",
            "1ª FUNGICIDA (24/06)",
            "DOSE/HA",
            "3ª FUNGICIDA",
            "DOSE/HA"
          ]
        },
        {
          "numero": 13,
          "cultivar": "EVOLUI",
          "empresa": "LATITUDE",
          "maturacao": 7.9,
          "pmg": 180,
          "populacao": 280000,
          "id": "soja-agostinho-13",
          "linhaExcel": 18,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA (24/06)",
              "produto": "FOX SUPRA",
              "dose": "0.35"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "CYPRESS",
              "dose": "0.25"
            }
          ],
          "raw": [
            "13",
            "EVOLUI",
            "LATITUDE",
            "7.9",
            "180",
            "280000",
            "",
            "FOX SUPRA",
            "0.35",
            "CYPRESS",
            "0.25"
          ]
        },
        {
          "numero": 14,
          "cultivar": "SERTANEJA",
          "empresa": "LATITUDE",
          "maturacao": 7.9,
          "pmg": 170,
          "populacao": 280000,
          "id": "soja-agostinho-14",
          "linhaExcel": 19,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA (24/06)",
              "produto": "TIOFANATO 500",
              "dose": "1"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "TIOFANATO 500",
              "dose": "1"
            }
          ],
          "raw": [
            "14",
            "SERTANEJA",
            "LATITUDE",
            "7.9",
            "170",
            "280000",
            "",
            "TIOFANATO 500",
            "1",
            "TIOFANATO 500",
            "1"
          ]
        },
        {
          "numero": 15,
          "cultivar": "BÔNUS",
          "empresa": "BASMAX",
          "maturacao": 7.9,
          "pmg": 190,
          "populacao": 280000,
          "id": "soja-agostinho-15",
          "linhaExcel": 20,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA (24/06)",
              "produto": "ACETAMIPRID 725",
              "dose": "0.06"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "ACETAMIPRID 725",
              "dose": "0.06"
            }
          ],
          "raw": [
            "15",
            "BÔNUS",
            "BASMAX",
            "7.9",
            "190",
            "280000",
            "",
            "ACETAMIPRID 725",
            "0.06",
            "ACETAMIPRID 725",
            "0.06"
          ]
        },
        {
          "numero": 16,
          "cultivar": "NEO 802",
          "empresa": "NEOGEN",
          "maturacao": 8,
          "pmg": 178,
          "populacao": 280000,
          "id": "soja-agostinho-16",
          "linhaExcel": 21,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA (24/06)",
              "produto": "PIRIPROXIFEN 200",
              "dose": "0.12"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "PIRIPROXIFEN 200",
              "dose": "0.12"
            }
          ],
          "raw": [
            "16",
            "NEO 802",
            "NEOGEN",
            "8.0",
            "178",
            "280000",
            "",
            "PIRIPROXIFEN 200",
            "0.12",
            "PIRIPROXIFEN 200",
            "0.12"
          ]
        },
        {
          "numero": 17,
          "cultivar": "NEO 810",
          "empresa": "NEOGEN",
          "maturacao": 8.1,
          "pmg": 162,
          "populacao": 280000,
          "id": "soja-agostinho-17",
          "linhaExcel": 22,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA (24/06)",
              "produto": "PREMIO",
              "dose": "0.1"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "LUFENURON",
              "dose": "0.25"
            }
          ],
          "raw": [
            "17",
            "NEO 810",
            "NEOGEN",
            "8.1",
            "162",
            "280000",
            "",
            "PREMIO",
            "0.1",
            "LUFENURON",
            "0.25"
          ]
        },
        {
          "numero": 18,
          "cultivar": "80i85",
          "empresa": "DONMARIO",
          "maturacao": 8,
          "pmg": 201,
          "populacao": 280000,
          "id": "soja-agostinho-18",
          "linhaExcel": 23,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA (24/06)",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.08"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SULF. MG",
              "dose": "1.5"
            }
          ],
          "raw": [
            "18",
            "80i85",
            "DONMARIO",
            "8.0",
            "201",
            "280000",
            "",
            "CO-MO-NI LYNX",
            "0.08",
            "SULF. MG",
            "1.5"
          ]
        },
        {
          "numero": 19,
          "cultivar": "NS 8080",
          "empresa": "NIDERA",
          "maturacao": 8,
          "pmg": 185,
          "populacao": 280000,
          "id": "soja-agostinho-19",
          "linhaExcel": 24,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA (24/06)",
              "produto": "SULF. MG",
              "dose": "2"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SUGAR",
              "dose": "1"
            }
          ],
          "raw": [
            "19",
            "NS 8080",
            "NIDERA",
            "8.0",
            "185",
            "280000",
            "",
            "SULF. MG",
            "2",
            "SUGAR",
            "1"
          ]
        },
        {
          "numero": 20,
          "cultivar": "ST 84Ka92",
          "empresa": "STINE",
          "maturacao": 8.4,
          "pmg": 150,
          "populacao": 260000,
          "id": "soja-agostinho-20",
          "linhaExcel": 25,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA (24/06)",
              "produto": "BORO 10 PLUS",
              "dose": "0.4"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "MULTIKEL COBRE",
              "dose": "0.06"
            }
          ],
          "raw": [
            "20",
            "ST 84Ka92",
            "STINE",
            "8.4",
            "150",
            "260000",
            "",
            "BORO 10 PLUS",
            "0.4",
            "MULTIKEL COBRE",
            "0.06"
          ]
        },
        {
          "numero": 21,
          "cultivar": "ÍMPETO",
          "empresa": "BRASMAX",
          "maturacao": 9,
          "pmg": 162,
          "populacao": 260000,
          "id": "soja-agostinho-21",
          "linhaExcel": 26,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA (24/06)",
              "produto": "MULTKEL COBRE",
              "dose": "0.08"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "MULT MOL",
              "dose": "0.1"
            }
          ],
          "raw": [
            "21",
            "ÍMPETO",
            "BRASMAX",
            "9.0",
            "162",
            "260000",
            "",
            "MULTKEL COBRE",
            "0.08",
            "MULT MOL",
            "0.1"
          ]
        }
      ],
      "observacoes": [
        {
          "linhaExcel": 27,
          "titulo": "ADUBAÇÃO",
          "valores": [
            "ADUBAÇÃO",
            "",
            "",
            "JATO DIRIGIDO",
            "",
            "",
            "",
            "SULF. ZINCO",
            "0.4",
            "BIOPARTNERS ADJ",
            "0.08"
          ]
        },
        {
          "linhaExcel": 28,
          "titulo": "4 T Calcário.",
          "valores": [
            "4 T Calcário.",
            "",
            "",
            "Rizokop 18 doses/ha.",
            "",
            "",
            "",
            "BIOPARTNERS ADJ",
            "0.08",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 29,
          "titulo": "400 Kg SS pré-plantio.",
          "valores": [
            "400 Kg SS pré-plantio.",
            "",
            "",
            "Azokop 1 dose/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 30,
          "titulo": "180 Kg 06-40-00 a lanço.",
          "valores": [
            "180 Kg 06-40-00 a lanço.",
            "",
            "",
            "Tricodermil 100 ml/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 31,
          "titulo": "100 Kg KCl Pré-plantio.",
          "valores": [
            "100 Kg KCl Pré-plantio.",
            "",
            "",
            "Veraneio 100 g/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 32,
          "titulo": "150 Kg KCl Parcelado em cobertura.",
          "valores": [
            "150 Kg KCl Parcelado em cobertura.",
            "",
            "",
            "Stingray 200 ml/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ],
      "fonte": {
        "arquivo": "Teste de Cultivares 2026.xlsx",
        "aba": "SOJA AGOSTINHO"
      },
      "adubacao": [
        "4 T Calcário.",
        "400 Kg SS pré-plantio.",
        "180 Kg 06-40-00 a lanço.",
        "100 Kg KCl Pré-plantio.",
        "150 Kg KCl Parcelado em cobertura."
      ],
      "jatoDirigido": [
        "Rizokop 18 doses/ha.",
        "Azokop 1 dose/ha.",
        "Tricodermil 100 ml/ha.",
        "Veraneio 100 g/ha.",
        "Stingray 200 ml/ha."
      ]
    },
    {
      "id": "soja-r-cunha",
      "nome": "SOJA R CUNHA",
      "titulo": "TESTE DE VARIEDADES",
      "cultura": "SOJA",
      "produtor": "Ricardo Cunha",
      "plantio": "27/04/2026",
      "totalTratamentos": 23,
      "colunasOriginais": [
        "Nº",
        "CULTIVAR",
        "EMPRESA",
        "MATURAÇÃO",
        "PMS (g)",
        "POPULAÇÃO",
        "1ª APLICAÇÃO (20/05)",
        "DOSE/HA",
        "PREMIO",
        "0.1"
      ],
      "tratamentos": [
        {
          "numero": 1,
          "cultivar": "TORMENTA",
          "empresa": "BRASMAX",
          "maturacao": 7.6,
          "pmg": 172,
          "populacao": 275555,
          "id": "soja-r-cunha-1",
          "linhaExcel": 6,
          "manejos": [
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "BIOPARTNER ADJ",
              "dose": "0.1"
            },
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "COMPAT COPPER",
              "dose": "0.05"
            }
          ],
          "raw": [
            "1",
            "TORMENTA",
            "BRASMAX",
            "7.6",
            "172",
            "275555",
            "",
            "BIOPARTNER ADJ",
            "0.1",
            "COMPAT COPPER",
            "0.05"
          ]
        },
        {
          "numero": 2,
          "cultivar": "AVRA 2576",
          "empresa": "AVRA",
          "maturacao": 7.6,
          "pmg": 155,
          "populacao": 301111,
          "id": "soja-r-cunha-2",
          "linhaExcel": 7,
          "manejos": [
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "STIMULATE",
              "dose": "0.5"
            },
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "ZAAP QI",
              "dose": "1"
            }
          ],
          "raw": [
            "2",
            "AVRA 2576",
            "AVRA",
            "7.6",
            "155",
            "301111",
            "",
            "STIMULATE",
            "0.5",
            "ZAAP QI",
            "1"
          ]
        },
        {
          "numero": 3,
          "cultivar": "MÍTICA",
          "empresa": "BRASMAX",
          "maturacao": 7.7,
          "pmg": 163,
          "populacao": 268888,
          "id": "soja-r-cunha-3",
          "linhaExcel": 8,
          "manejos": [
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "RELEAF",
              "dose": "0.5"
            },
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "ACETAMIPRID 200",
              "dose": "0.25"
            }
          ],
          "raw": [
            "3",
            "MÍTICA",
            "BRASMAX",
            "7.7",
            "163",
            "268888",
            "",
            "RELEAF",
            "0.5",
            "ACETAMIPRID 200",
            "0.25"
          ]
        },
        {
          "numero": 4,
          "cultivar": "NS 7676",
          "empresa": "NIDERA",
          "maturacao": 7.7,
          "pmg": 180,
          "populacao": 245555,
          "id": "soja-r-cunha-4",
          "linhaExcel": 9,
          "manejos": [
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "CARAVAN",
              "dose": "0.4"
            }
          ],
          "raw": [
            "4",
            "NS 7676",
            "NIDERA",
            "7.7",
            "180",
            "245555",
            "",
            "CARAVAN",
            "0.4",
            "4ª APLICAÇÃO (18/06)",
            "DOSE/HA"
          ]
        },
        {
          "numero": 5,
          "cultivar": "OLIMPO",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 282222,
          "id": "soja-r-cunha-5",
          "linhaExcel": 10,
          "manejos": [
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "COMONI",
              "dose": "0.1"
            },
            {
              "etapa": "4ª APLICAÇÃO (18/06)",
              "produto": "BIOARTNERS ADJ",
              "dose": "0.1"
            }
          ],
          "raw": [
            "5",
            "OLIMPO",
            "BRASMAX",
            "8.0",
            "171",
            "282222",
            "",
            "COMONI",
            "0.1",
            "BIOARTNERS ADJ",
            "0.1"
          ]
        },
        {
          "numero": 6,
          "cultivar": "OLIMPO",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 251111,
          "id": "soja-r-cunha-6",
          "linhaExcel": 11,
          "manejos": [
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "EXTRATO ALGAS",
              "dose": "0.75"
            },
            {
              "etapa": "4ª APLICAÇÃO (18/06)",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "6",
            "OLIMPO",
            "BRASMAX",
            "8.0",
            "171",
            "251111",
            "",
            "EXTRATO ALGAS",
            "0.75",
            "SULF. MAGNÉSIO",
            "2"
          ]
        },
        {
          "numero": 7,
          "cultivar": "OLIMPO",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 205555,
          "id": "soja-r-cunha-7",
          "linhaExcel": 12,
          "manejos": [
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "TALSTAR",
              "dose": "0.1"
            },
            {
              "etapa": "4ª APLICAÇÃO (18/06)",
              "produto": "MULTIKEL COBRE",
              "dose": "0.08"
            }
          ],
          "raw": [
            "7",
            "OLIMPO",
            "BRASMAX",
            "8.0",
            "171",
            "205555",
            "",
            "TALSTAR",
            "0.1",
            "MULTIKEL COBRE",
            "0.08"
          ]
        },
        {
          "numero": 8,
          "cultivar": "ST 78Ka42",
          "empresa": "STINE",
          "maturacao": 7.8,
          "pmg": 150,
          "populacao": 286666,
          "id": "soja-r-cunha-8",
          "linhaExcel": 13,
          "manejos": [
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "ACETAMIPRID 200",
              "dose": "0.25"
            },
            {
              "etapa": "4ª APLICAÇÃO (18/06)",
              "produto": "MOLIBDÊNIO LYNX",
              "dose": "0.1"
            }
          ],
          "raw": [
            "8",
            "ST 78Ka42",
            "STINE",
            "7.8",
            "150",
            "286666",
            "",
            "ACETAMIPRID 200",
            "0.25",
            "MOLIBDÊNIO LYNX",
            "0.1"
          ]
        },
        {
          "numero": 9,
          "cultivar": "ST 78Ka42",
          "empresa": "STINE",
          "maturacao": 7.8,
          "pmg": 150,
          "populacao": 246666,
          "id": "soja-r-cunha-9",
          "linhaExcel": 14,
          "manejos": [
            {
              "etapa": "1ª APLICAÇÃO (20/05)",
              "produto": "SULF. MAGNÉSIO",
              "dose": "1.25"
            },
            {
              "etapa": "4ª APLICAÇÃO (18/06)",
              "produto": "POTÁSSIO LYNX",
              "dose": "1"
            }
          ],
          "raw": [
            "9",
            "ST 78Ka42",
            "STINE",
            "7.8",
            "150",
            "246666",
            "",
            "SULF. MAGNÉSIO",
            "1.25",
            "POTÁSSIO LYNX",
            "1"
          ]
        },
        {
          "numero": 10,
          "cultivar": "ST 78Ka42",
          "empresa": "STINE",
          "maturacao": 7.8,
          "pmg": 150,
          "populacao": 227777,
          "id": "soja-r-cunha-10",
          "linhaExcel": 15,
          "manejos": [
            {
              "etapa": "4ª APLICAÇÃO (18/06)",
              "produto": "MOVER",
              "dose": "1"
            }
          ],
          "raw": [
            "10",
            "ST 78Ka42",
            "STINE",
            "7.8",
            "150",
            "227777",
            "",
            "2ª APLICAÇÃO (25/05)",
            "DOSE/HA",
            "MOVER",
            "1"
          ]
        },
        {
          "numero": 11,
          "cultivar": "AVRA 2478",
          "empresa": "AVRA",
          "maturacao": 7.8,
          "pmg": 166,
          "populacao": 226666,
          "id": "soja-r-cunha-11",
          "linhaExcel": 16,
          "manejos": [
            {
              "etapa": "2ª APLICAÇÃO (25/05)",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.1"
            },
            {
              "etapa": "4ª APLICAÇÃO (18/06)",
              "produto": "MITRION",
              "dose": "0.45"
            }
          ],
          "raw": [
            "11",
            "AVRA 2478",
            "AVRA",
            "7.8",
            "166",
            "226666",
            "",
            "BIOPARTNERS ADJ",
            "0.1",
            "MITRION",
            "0.45"
          ]
        },
        {
          "numero": 12,
          "cultivar": "C 2795",
          "empresa": "CORDIUS",
          "maturacao": 7.9,
          "pmg": 184,
          "populacao": 224444,
          "id": "soja-r-cunha-12",
          "linhaExcel": 17,
          "manejos": [
            {
              "etapa": "2ª APLICAÇÃO (25/05)",
              "produto": "ZINCO LYNX",
              "dose": "0.5"
            },
            {
              "etapa": "4ª APLICAÇÃO (18/06)",
              "produto": "ULTRA SAFE",
              "dose": "1"
            }
          ],
          "raw": [
            "12",
            "C 2795",
            "CORDIUS",
            "7.9",
            "184",
            "224444",
            "",
            "ZINCO LYNX",
            "0.5",
            "ULTRA SAFE",
            "1"
          ]
        },
        {
          "numero": 13,
          "cultivar": "EVOLUI",
          "empresa": "LATITUDE",
          "maturacao": 7.9,
          "pmg": 180,
          "populacao": 251111,
          "id": "soja-r-cunha-13",
          "linhaExcel": 18,
          "manejos": [
            {
              "etapa": "2ª APLICAÇÃO (25/05)",
              "produto": "BORO LYNX",
              "dose": "0.3"
            },
            {
              "etapa": "4ª APLICAÇÃO (18/06)",
              "produto": "METOMIL",
              "dose": "1"
            }
          ],
          "raw": [
            "13",
            "EVOLUI",
            "LATITUDE",
            "7.9",
            "180",
            "251111",
            "",
            "BORO LYNX",
            "0.3",
            "METOMIL",
            "1"
          ]
        },
        {
          "numero": 14,
          "cultivar": "SERTANEJA",
          "empresa": "LATITUDE",
          "maturacao": 7.9,
          "pmg": 170,
          "populacao": 228888,
          "id": "soja-r-cunha-14",
          "linhaExcel": 19,
          "manejos": [
            {
              "etapa": "2ª APLICAÇÃO (25/05)",
              "produto": "ZAAP QI",
              "dose": "1.5"
            },
            {
              "etapa": "4ª APLICAÇÃO (18/06)",
              "produto": "HOLD",
              "dose": "0.5"
            }
          ],
          "raw": [
            "14",
            "SERTANEJA",
            "LATITUDE",
            "7.9",
            "170",
            "228888",
            "",
            "ZAAP QI",
            "1.5",
            "HOLD",
            "0.5"
          ]
        },
        {
          "numero": 15,
          "cultivar": "BÔNUS",
          "empresa": "BASMAX",
          "maturacao": 7.9,
          "pmg": 190,
          "populacao": 231111,
          "id": "soja-r-cunha-15",
          "linhaExcel": 20,
          "manejos": [
            {
              "etapa": "2ª APLICAÇÃO (25/05)",
              "produto": "VESSARYA",
              "dose": "0.6"
            }
          ],
          "raw": [
            "15",
            "BÔNUS",
            "BASMAX",
            "7.9",
            "190",
            "231111",
            "",
            "VESSARYA",
            "0.6",
            "5ª APLICAÇÃO (03/07)",
            "DOSE/HA"
          ]
        },
        {
          "numero": 16,
          "cultivar": "ITAÚBA",
          "empresa": "TMG",
          "maturacao": 7.9,
          "pmg": 185,
          "populacao": 243333,
          "id": "soja-r-cunha-16",
          "linhaExcel": 21,
          "manejos": [
            {
              "etapa": "2ª APLICAÇÃO (25/05)",
              "produto": "DIFENO",
              "dose": "0.2"
            },
            {
              "etapa": "5ª APLICAÇÃO (03/07)",
              "produto": "BIOARTNERS ADJ",
              "dose": "0.1"
            }
          ],
          "raw": [
            "16",
            "ITAÚBA",
            "TMG",
            "7.9",
            "185",
            "243333",
            "",
            "DIFENO",
            "0.2",
            "BIOARTNERS ADJ",
            "0.1"
          ]
        },
        {
          "numero": 17,
          "cultivar": "OLIMPO",
          "empresa": "BASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 219999,
          "id": "soja-r-cunha-17",
          "linhaExcel": 22,
          "manejos": [
            {
              "etapa": "2ª APLICAÇÃO (25/05)",
              "produto": "TAKUMI",
              "dose": "0.2"
            },
            {
              "etapa": "5ª APLICAÇÃO (03/07)",
              "produto": "TRIVOR",
              "dose": "0.25"
            }
          ],
          "raw": [
            "17",
            "OLIMPO",
            "BASMAX",
            "8.0",
            "171",
            "219999",
            "",
            "TAKUMI",
            "0.2",
            "TRIVOR",
            "0.25"
          ]
        },
        {
          "numero": 18,
          "cultivar": "HERA",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 188,
          "populacao": 185555,
          "id": "soja-r-cunha-18",
          "linhaExcel": 23,
          "manejos": [
            {
              "etapa": "2ª APLICAÇÃO (25/05)",
              "produto": "SULF. MAGNÉSIO",
              "dose": "1"
            },
            {
              "etapa": "5ª APLICAÇÃO (03/07)",
              "produto": "SPERTO",
              "dose": "0.25"
            }
          ],
          "raw": [
            "18",
            "HERA",
            "BRASMAX",
            "8.0",
            "188",
            "185555",
            "",
            "SULF. MAGNÉSIO",
            "1",
            "SPERTO",
            "0.25"
          ]
        },
        {
          "numero": 19,
          "cultivar": "80i85",
          "empresa": "DONMARIO",
          "maturacao": 8,
          "pmg": 201,
          "populacao": 223333,
          "id": "soja-r-cunha-19",
          "linhaExcel": 24,
          "manejos": [
            {
              "etapa": "2ª APLICAÇÃO (25/05)",
              "produto": "STARTER MN",
              "dose": "1"
            },
            {
              "etapa": "5ª APLICAÇÃO (03/07)",
              "produto": "CLORFENAPIR",
              "dose": "0.8"
            }
          ],
          "raw": [
            "19",
            "80i85",
            "DONMARIO",
            "8.0",
            "201",
            "223333",
            "",
            "STARTER MN",
            "1",
            "CLORFENAPIR",
            "0.8"
          ]
        },
        {
          "numero": 20,
          "cultivar": "NS 8080",
          "empresa": "NIDERA",
          "maturacao": 8,
          "pmg": 185,
          "populacao": 225555,
          "id": "soja-r-cunha-20",
          "linhaExcel": 25,
          "manejos": [
            {
              "etapa": "2ª APLICAÇÃO (25/05)",
              "produto": "MULTIKEL COBRE",
              "dose": "0.05"
            },
            {
              "etapa": "5ª APLICAÇÃO (03/07)",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "20",
            "NS 8080",
            "NIDERA",
            "8.0",
            "185",
            "225555",
            "",
            "MULTIKEL COBRE",
            "0.05",
            "SULF. MAGNÉSIO",
            "2"
          ]
        },
        {
          "numero": 21,
          "cultivar": "NEO 802",
          "empresa": "NEOGEN",
          "maturacao": 8,
          "pmg": 178,
          "populacao": 208888,
          "id": "soja-r-cunha-21",
          "linhaExcel": 26,
          "manejos": [
            {
              "etapa": "5ª APLICAÇÃO (03/07)",
              "produto": "MOVER",
              "dose": "1"
            }
          ],
          "raw": [
            "21",
            "NEO 802",
            "NEOGEN",
            "8.0",
            "178",
            "208888",
            "",
            "3ª APLICAÇÃO (06/06)",
            "DOSE/HA",
            "MOVER",
            "1"
          ]
        },
        {
          "numero": 22,
          "cultivar": "NEO 810",
          "empresa": "NEOGEN",
          "maturacao": 8.1,
          "pmg": 162,
          "populacao": 214444,
          "id": "soja-r-cunha-22",
          "linhaExcel": 27,
          "manejos": [
            {
              "etapa": "3ª APLICAÇÃO (06/06)",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.1"
            },
            {
              "etapa": "5ª APLICAÇÃO (03/07)",
              "produto": "MULTIKEL COBRE",
              "dose": "0.6"
            }
          ],
          "raw": [
            "22",
            "NEO 810",
            "NEOGEN",
            "8.1",
            "162",
            "214444",
            "",
            "BIOPARTNERS ADJ",
            "0.1",
            "MULTIKEL COBRE",
            "0.6"
          ]
        },
        {
          "numero": 23,
          "cultivar": "ÍMPETO",
          "empresa": "BRASMAX",
          "maturacao": 9,
          "pmg": 162,
          "populacao": 206666,
          "id": "soja-r-cunha-23",
          "linhaExcel": 28,
          "manejos": [
            {
              "etapa": "3ª APLICAÇÃO (06/06)",
              "produto": "FOX XPRO",
              "dose": "0.33"
            },
            {
              "etapa": "5ª APLICAÇÃO (03/07)",
              "produto": "MOLIBDÊNIO LYNX",
              "dose": "0.1"
            }
          ],
          "raw": [
            "23",
            "ÍMPETO",
            "BRASMAX",
            "9.0",
            "162",
            "206666",
            "",
            "FOX XPRO",
            "0.33",
            "MOLIBDÊNIO LYNX",
            "0.1"
          ]
        }
      ],
      "observacoes": [
        {
          "linhaExcel": 29,
          "titulo": "ADUBAÇÃO",
          "valores": [
            "ADUBAÇÃO",
            "",
            "",
            "JATO DIRIGIDO",
            "",
            "",
            "",
            "TIOFANATO",
            "1",
            "POTÁSSIO LYNX",
            "0.5"
          ]
        },
        {
          "linhaExcel": 30,
          "titulo": "250 Kg SSP a lanço em pré-plantio.",
          "valores": [
            "250 Kg SSP a lanço em pré-plantio.",
            "",
            "",
            "BioPartners Brady 50 doses/ha.",
            "",
            "",
            "",
            "BORO LYNX",
            "0.3",
            "CYPRESS",
            "0.25"
          ]
        },
        {
          "linhaExcel": 31,
          "titulo": "120 Kg 09-32-12 na linha.",
          "valores": [
            "120 Kg 09-32-12 na linha.",
            "",
            "",
            "BioPartners Azos 2 doses/ha.",
            "",
            "",
            "",
            "STARTER MN",
            "1",
            "TIOFANATO",
            "0.8"
          ]
        },
        {
          "linhaExcel": 32,
          "titulo": "220 Kg KCl parcelado.",
          "valores": [
            "220 Kg KCl parcelado.",
            "",
            "",
            "BioPartners Fósforo 1 dose/ha.",
            "",
            "",
            "",
            "ULTRA SAFE",
            "0.5",
            "",
            ""
          ]
        }
      ],
      "fonte": {
        "arquivo": "Teste de Cultivares 2026.xlsx",
        "aba": "SOJA R CUNHA"
      },
      "adubacao": [
        "250 Kg SSP a lanço em pré-plantio.",
        "120 Kg 09-32-12 na linha.",
        "220 Kg KCl parcelado."
      ],
      "jatoDirigido": [
        "BioPartners Brady 50 doses/ha.",
        "BioPartners Azos 2 doses/ha.",
        "BioPartners Fósforo 1 dose/ha.",
        "Tricodermil 100 g/ha.",
        "BioPartners Trio 1 dose/ha."
      ]
    },
    {
      "id": "soja-vendruscolo",
      "nome": "SOJA VENDRÚSCOLO",
      "titulo": "TESTE DE VARIEDADES",
      "cultura": "SOJA",
      "produtor": "Leonardo Vendrúscolo",
      "plantio": "08/05/2026",
      "totalTratamentos": 40,
      "colunasOriginais": [
        "Nº",
        "CULTIVAR",
        "EMPRESA",
        "MATURAÇÃO",
        "PMG",
        "POPULAÇÃO",
        "PÓS-EMERGENTE",
        "DOSE/HA",
        "2ª FUNGICIDA",
        "DOSE/HA"
      ],
      "tratamentos": [
        {
          "numero": 1,
          "cultivar": "IMPETO",
          "empresa": "BRASMAX",
          "maturacao": 9,
          "pmg": 162,
          "populacao": 180,
          "id": "soja-vendruscolo-1",
          "linhaExcel": 6,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "GLISOFATO WG 720",
              "dose": "1.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "VIOVAN",
              "dose": "0.7"
            }
          ],
          "raw": [
            "1",
            "IMPETO",
            "BRASMAX",
            "9.0",
            "162",
            "180",
            "",
            "",
            "GLISOFATO WG 720",
            "1.5",
            "VIOVAN",
            "0.7"
          ]
        },
        {
          "numero": 2,
          "cultivar": "IMPETO",
          "empresa": "BRASMAX",
          "maturacao": 9,
          "pmg": 162,
          "populacao": 260,
          "id": "soja-vendruscolo-2",
          "linhaExcel": 7,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "TALSTAR",
              "dose": "0.08"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "TIOFANATO 500",
              "dose": "0.8"
            }
          ],
          "raw": [
            "2",
            "IMPETO",
            "BRASMAX",
            "9.0",
            "162",
            "260",
            "",
            "",
            "TALSTAR",
            "0.08",
            "TIOFANATO 500",
            "0.8"
          ]
        },
        {
          "numero": 3,
          "cultivar": "LENDA",
          "empresa": "PAMPEANA",
          "maturacao": 8.4,
          "pmg": 210,
          "populacao": 260,
          "id": "soja-vendruscolo-3",
          "linhaExcel": 8,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "PROVILAR",
              "dose": "0.3"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "TRIVOR",
              "dose": "0.25"
            }
          ],
          "raw": [
            "3",
            "LENDA",
            "PAMPEANA",
            "8.4",
            "210",
            "260",
            "",
            "",
            "PROVILAR",
            "0.3",
            "TRIVOR",
            "0.25"
          ]
        },
        {
          "numero": 4,
          "cultivar": "LENDA",
          "empresa": "PAMPEANA",
          "maturacao": 8.4,
          "pmg": 210,
          "populacao": 180,
          "id": "soja-vendruscolo-4",
          "linhaExcel": 9,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.1"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            }
          ],
          "raw": [
            "4",
            "LENDA",
            "PAMPEANA",
            "8.4",
            "210",
            "180",
            "",
            "",
            "CO-MO-NI LYNX",
            "0.1",
            "BORO 10 PLUS",
            "0.3"
          ]
        },
        {
          "numero": 5,
          "cultivar": "84Ka92",
          "empresa": "STINE",
          "maturacao": 8.4,
          "pmg": 160,
          "populacao": 180,
          "id": "soja-vendruscolo-5",
          "linhaExcel": 10,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "SULF. ZINCO",
              "dose": "0.4"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "MULTIKEL COBRE",
              "dose": "0.08"
            }
          ],
          "raw": [
            "5",
            "84Ka92",
            "STINE",
            "8.4",
            "160",
            "180",
            "",
            "",
            "SULF. ZINCO",
            "0.4",
            "MULTIKEL COBRE",
            "0.08"
          ]
        },
        {
          "numero": 6,
          "cultivar": "84Ka92",
          "empresa": "STINE",
          "maturacao": 8.4,
          "pmg": 160,
          "populacao": 260,
          "id": "soja-vendruscolo-6",
          "linhaExcel": 11,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "MULTIKEL MN",
              "dose": "0.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.1"
            }
          ],
          "raw": [
            "6",
            "84Ka92",
            "STINE",
            "8.4",
            "160",
            "260",
            "",
            "",
            "MULTIKEL MN",
            "0.5",
            "CO-MO-NI LYNX",
            "0.1"
          ]
        },
        {
          "numero": 7,
          "cultivar": "80Ka72",
          "empresa": "STINE",
          "maturacao": 8,
          "pmg": 170,
          "populacao": 220,
          "id": "soja-vendruscolo-7",
          "linhaExcel": 12,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "1.5"
            }
          ],
          "raw": [
            "7",
            "80Ka72",
            "STINE",
            "8.0",
            "170",
            "220",
            "",
            "",
            "BIOPARTNERS ADJ",
            "0.08",
            "SULF. MAGNÉSIO",
            "1.5"
          ]
        },
        {
          "numero": 8,
          "cultivar": "80Ka72",
          "empresa": "STINE",
          "maturacao": 8,
          "pmg": 170,
          "populacao": 300,
          "id": "soja-vendruscolo-8",
          "linhaExcel": 13,
          "manejos": [
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            }
          ],
          "raw": [
            "8",
            "80Ka72",
            "STINE",
            "8.0",
            "170",
            "300",
            "",
            "",
            "",
            "",
            "BIOPARTNERS ADJ",
            "0.08"
          ]
        },
        {
          "numero": 9,
          "cultivar": "80I85",
          "empresa": "DON MARIO",
          "maturacao": 8,
          "pmg": 201,
          "populacao": 300,
          "id": "soja-vendruscolo-9",
          "linhaExcel": 14,
          "manejos": [],
          "raw": [
            "9",
            "80I85",
            "DON MARIO",
            "8.0",
            "201",
            "300",
            "",
            "",
            "1ª FUNGICIDA",
            "DOSE/HA",
            "3ª FUNGICIDA",
            "DOSE/HA"
          ]
        },
        {
          "numero": 10,
          "cultivar": "80I85",
          "empresa": "DON MARIO",
          "maturacao": 8,
          "pmg": 201,
          "populacao": 220,
          "id": "soja-vendruscolo-10",
          "linhaExcel": 15,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "FOX SUPRA",
              "dose": "0.32"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "GLOVE",
              "dose": "0.25"
            }
          ],
          "raw": [
            "10",
            "80I85",
            "DON MARIO",
            "8.0",
            "201",
            "220",
            "",
            "",
            "FOX SUPRA",
            "0.32",
            "GLOVE",
            "0.25"
          ]
        },
        {
          "numero": 11,
          "cultivar": "ITAÚBA",
          "empresa": "TMG",
          "maturacao": 7.9,
          "pmg": 185,
          "populacao": 220,
          "id": "soja-vendruscolo-11",
          "linhaExcel": 16,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "MANCOZEB",
              "dose": "0.85"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "GALIL - 260 ha",
              "dose": "0.3"
            }
          ],
          "raw": [
            "11",
            "ITAÚBA",
            "TMG",
            "7.9",
            "185",
            "220",
            "",
            "",
            "MANCOZEB",
            "0.85",
            "GALIL - 260 ha",
            "0.3"
          ]
        },
        {
          "numero": 12,
          "cultivar": "ITAÚBA",
          "empresa": "TMG",
          "maturacao": 7.9,
          "pmg": 185,
          "populacao": 300,
          "id": "soja-vendruscolo-12",
          "linhaExcel": 17,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SANDAL (ACETA 200)",
              "dose": "0.25"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "ENGEO PLENO - 220 ha",
              "dose": "0.2"
            }
          ],
          "raw": [
            "12",
            "ITAÚBA",
            "TMG",
            "7.9",
            "185",
            "300",
            "",
            "",
            "SANDAL (ACETA 200)",
            "0.25",
            "ENGEO PLENO - 220 ha",
            "0.2"
          ]
        },
        {
          "numero": 13,
          "cultivar": "OLIMPO (CELEIRO)",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 300,
          "id": "soja-vendruscolo-13",
          "linhaExcel": 18,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "PIRIPROXIFEM 200",
              "dose": "0.1"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "TALISMÃ - 600 ha",
              "dose": "0.3"
            }
          ],
          "raw": [
            "13",
            "OLIMPO (CELEIRO)",
            "BRASMAX",
            "8.0",
            "171",
            "300",
            "",
            "",
            "PIRIPROXIFEM 200",
            "0.1",
            "TALISMÃ - 600 ha",
            "0.3"
          ]
        },
        {
          "numero": 14,
          "cultivar": "OLIMPO (CELEIRO)",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 220,
          "id": "soja-vendruscolo-14",
          "linhaExcel": 19,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "PREMIO - 875 ha",
              "dose": "0.08"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SUGAR",
              "dose": "2"
            }
          ],
          "raw": [
            "14",
            "OLIMPO (CELEIRO)",
            "BRASMAX",
            "8.0",
            "171",
            "220",
            "",
            "",
            "PREMIO - 875 ha",
            "0.08",
            "SUGAR",
            "2"
          ]
        },
        {
          "numero": 15,
          "cultivar": "OLIMPO (CAJUEIRO)",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 220,
          "id": "soja-vendruscolo-15",
          "linhaExcel": 20,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "BELT - 375 ha",
              "dose": "0.08"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "15",
            "OLIMPO (CAJUEIRO)",
            "BRASMAX",
            "8.0",
            "171",
            "220",
            "",
            "",
            "BELT - 375 ha",
            "0.08",
            "SULF. MAGNÉSIO",
            "2"
          ]
        },
        {
          "numero": 16,
          "cultivar": "OLIMPO (CAJUEIRO)",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 300,
          "id": "soja-vendruscolo-16",
          "linhaExcel": 21,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.1"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "MULTIMOL",
              "dose": "0.08"
            }
          ],
          "raw": [
            "16",
            "OLIMPO (CAJUEIRO)",
            "BRASMAX",
            "8.0",
            "171",
            "300",
            "",
            "",
            "CO-MO-NI LYNX",
            "0.1",
            "MULTIMOL",
            "0.08"
          ]
        },
        {
          "numero": 17,
          "cultivar": "BÔNUS",
          "empresa": "BRASMAX",
          "maturacao": 7.9,
          "pmg": 190,
          "populacao": 300,
          "id": "soja-vendruscolo-17",
          "linhaExcel": 22,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "1.5"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            }
          ],
          "raw": [
            "17",
            "BÔNUS",
            "BRASMAX",
            "7.9",
            "190",
            "300",
            "",
            "",
            "SULF. MAGNÉSIO",
            "1.5",
            "BIOPARTNERS ADJ",
            "0.08"
          ]
        },
        {
          "numero": 18,
          "cultivar": "BÔNUS",
          "empresa": "BRASMAX",
          "maturacao": 7.9,
          "pmg": 190,
          "populacao": 220,
          "id": "soja-vendruscolo-18",
          "linhaExcel": 23,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SULF. ZINCO",
              "dose": "0.3"
            }
          ],
          "raw": [
            "18",
            "BÔNUS",
            "BRASMAX",
            "7.9",
            "190",
            "220",
            "",
            "",
            "SULF. ZINCO",
            "0.3",
            "",
            ""
          ]
        },
        {
          "numero": 19,
          "cultivar": "78Ka42",
          "empresa": "STINE",
          "maturacao": 7.8,
          "pmg": 150,
          "populacao": 220,
          "id": "soja-vendruscolo-19",
          "linhaExcel": 24,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "MULTKEL COBRE",
              "dose": "0.08"
            }
          ],
          "raw": [
            "19",
            "78Ka42",
            "STINE",
            "7.8",
            "150",
            "220",
            "",
            "",
            "MULTKEL COBRE",
            "0.08",
            "",
            ""
          ]
        },
        {
          "numero": 20,
          "cultivar": "78Ka72",
          "empresa": "STINE",
          "maturacao": 7.8,
          "pmg": 150,
          "populacao": 300,
          "id": "soja-vendruscolo-20",
          "linhaExcel": 25,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.4"
            }
          ],
          "raw": [
            "20",
            "78Ka72",
            "STINE",
            "7.8",
            "150",
            "300",
            "",
            "",
            "BORO 10 PLUS",
            "0.4",
            "",
            ""
          ]
        },
        {
          "numero": 21,
          "cultivar": "NEO 850",
          "empresa": "NEOGEN",
          "maturacao": 8.5,
          "pmg": 160,
          "populacao": 260,
          "id": "soja-vendruscolo-21",
          "linhaExcel": 26,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            }
          ],
          "raw": [
            "21",
            "NEO 850",
            "NEOGEN",
            "8.5",
            "160",
            "260",
            "",
            "",
            "BIOPARTNERS ADJ",
            "0.08",
            "",
            ""
          ]
        },
        {
          "numero": 22,
          "cultivar": "GH 2581",
          "empresa": "GOLDEN HARVEST",
          "maturacao": 8.1,
          "pmg": 180,
          "populacao": 260,
          "id": "soja-vendruscolo-22",
          "linhaExcel": 27,
          "manejos": [],
          "raw": [
            "22",
            "GH 2581",
            "GOLDEN HARVEST",
            "8.1",
            "180",
            "260",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 23,
          "cultivar": "NEO 802",
          "empresa": "NEOGEN",
          "maturacao": 8,
          "pmg": 178,
          "populacao": 260,
          "id": "soja-vendruscolo-23",
          "linhaExcel": 28,
          "manejos": [],
          "raw": [
            "23",
            "NEO 802",
            "NEOGEN",
            "8.0",
            "178",
            "260",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 24,
          "cultivar": "NEO 810",
          "empresa": "NEOGEN",
          "maturacao": 8.1,
          "pmg": 162,
          "populacao": 260,
          "id": "soja-vendruscolo-24",
          "linhaExcel": 29,
          "manejos": [],
          "raw": [
            "24",
            "NEO 810",
            "NEOGEN",
            "8.1",
            "162",
            "260",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 25,
          "cultivar": "NS8080",
          "empresa": "NIDERA",
          "maturacao": 8,
          "pmg": 185,
          "populacao": 260,
          "id": "soja-vendruscolo-25",
          "linhaExcel": 30,
          "manejos": [],
          "raw": [
            "25",
            "NS8080",
            "NIDERA",
            "8.0",
            "185",
            "260",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 26,
          "cultivar": "HERA",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 188,
          "populacao": 260,
          "id": "soja-vendruscolo-26",
          "linhaExcel": 31,
          "manejos": [],
          "raw": [
            "26",
            "HERA",
            "BRASMAX",
            "8.0",
            "188",
            "260",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 27,
          "cultivar": "79K80",
          "empresa": "DON MARIO",
          "maturacao": 7.9,
          "pmg": 159,
          "populacao": 280,
          "id": "soja-vendruscolo-27",
          "linhaExcel": 32,
          "manejos": [],
          "raw": [
            "27",
            "79K80",
            "DON MARIO",
            "7.9",
            "159",
            "280",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 28,
          "cultivar": "78IX80",
          "empresa": "DON MARIO",
          "maturacao": 7.8,
          "pmg": 173,
          "populacao": 280,
          "id": "soja-vendruscolo-28",
          "linhaExcel": 33,
          "manejos": [],
          "raw": [
            "28",
            "78IX80",
            "DON MARIO",
            "7.8",
            "173",
            "280",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 29,
          "cultivar": "SERTANEJA",
          "empresa": "LATITUDE",
          "maturacao": 7.9,
          "pmg": 170,
          "populacao": 280,
          "id": "soja-vendruscolo-29",
          "linhaExcel": 34,
          "manejos": [],
          "raw": [
            "29",
            "SERTANEJA",
            "LATITUDE",
            "7.9",
            "170",
            "280",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 30,
          "cultivar": "EVOLUI",
          "empresa": "LATITUDE",
          "maturacao": 7.9,
          "pmg": 180,
          "populacao": 280,
          "id": "soja-vendruscolo-30",
          "linhaExcel": 35,
          "manejos": [],
          "raw": [
            "30",
            "EVOLUI",
            "LATITUDE",
            "7.9",
            "180",
            "280",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 31,
          "cultivar": "C2795",
          "empresa": "CORDIUS",
          "maturacao": 7.9,
          "pmg": 184,
          "populacao": 280,
          "id": "soja-vendruscolo-31",
          "linhaExcel": 36,
          "manejos": [],
          "raw": [
            "31",
            "C2795",
            "CORDIUS",
            "7.9",
            "184",
            "280",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 32,
          "cultivar": "AVRA 2478",
          "empresa": "AVRA",
          "maturacao": 7.8,
          "pmg": 166,
          "populacao": 280,
          "id": "soja-vendruscolo-32",
          "linhaExcel": 37,
          "manejos": [],
          "raw": [
            "32",
            "AVRA 2478",
            "AVRA",
            "7.8",
            "166",
            "280",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 33,
          "cultivar": "MÍTICA",
          "empresa": "BRASMAX",
          "maturacao": 7.7,
          "pmg": 163,
          "populacao": 300,
          "id": "soja-vendruscolo-33",
          "linhaExcel": 38,
          "manejos": [],
          "raw": [
            "33",
            "MÍTICA",
            "BRASMAX",
            "7.7",
            "163",
            "300",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 34,
          "cultivar": "AVRA 2576",
          "empresa": "AVRA",
          "maturacao": 7.6,
          "pmg": 155,
          "populacao": 300,
          "id": "soja-vendruscolo-34",
          "linhaExcel": 39,
          "manejos": [],
          "raw": [
            "34",
            "AVRA 2576",
            "AVRA",
            "7.6",
            "155",
            "300",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 35,
          "cultivar": "TORMENTA",
          "empresa": "BRASMAX",
          "maturacao": 7.6,
          "pmg": 172,
          "populacao": 300,
          "id": "soja-vendruscolo-35",
          "linhaExcel": 40,
          "manejos": [],
          "raw": [
            "35",
            "TORMENTA",
            "BRASMAX",
            "7.6",
            "172",
            "300",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 36,
          "cultivar": "NS 7676",
          "empresa": "NIDERA",
          "maturacao": 7.6,
          "pmg": 180,
          "populacao": 300,
          "id": "soja-vendruscolo-36",
          "linhaExcel": 41,
          "manejos": [],
          "raw": [
            "36",
            "NS 7676",
            "NIDERA",
            "7.6",
            "180",
            "300",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 37,
          "cultivar": "NS 7676",
          "empresa": "NIDERA",
          "maturacao": 7.6,
          "pmg": 180,
          "populacao": 360,
          "id": "soja-vendruscolo-37",
          "linhaExcel": 42,
          "manejos": [],
          "raw": [
            "37",
            "NS 7676",
            "NIDERA",
            "7.6",
            "180",
            "360",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 38,
          "cultivar": "TORMENTA",
          "empresa": "BRASMAX",
          "maturacao": 7.6,
          "pmg": 172,
          "populacao": 360,
          "id": "soja-vendruscolo-38",
          "linhaExcel": 43,
          "manejos": [],
          "raw": [
            "38",
            "TORMENTA",
            "BRASMAX",
            "7.6",
            "172",
            "360",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 39,
          "cultivar": "RAPTOR",
          "empresa": "BRASMAX",
          "maturacao": 7.1,
          "pmg": 172,
          "populacao": 380,
          "id": "soja-vendruscolo-39",
          "linhaExcel": 44,
          "manejos": [],
          "raw": [
            "39",
            "RAPTOR",
            "BRASMAX",
            "7.1",
            "172",
            "380",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 40,
          "cultivar": "RAPTOR",
          "empresa": "BRASMAX",
          "maturacao": 7.1,
          "pmg": 172,
          "populacao": 380,
          "id": "soja-vendruscolo-40",
          "linhaExcel": 45,
          "manejos": [],
          "raw": [
            "40",
            "RAPTOR",
            "BRASMAX",
            "7.1",
            "172",
            "380",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ],
      "observacoes": [
        {
          "linhaExcel": 46,
          "titulo": "ADUBO",
          "valores": [
            "ADUBO",
            "",
            "",
            "JATO DIRIGIDO",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 47,
          "titulo": "3 T Calcário.",
          "valores": [
            "3 T Calcário.",
            "",
            "",
            "Rizokop 10 doses/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 48,
          "titulo": "350 Kg SSP pré-plantio.",
          "valores": [
            "350 Kg SSP pré-plantio.",
            "",
            "",
            "Azokop 1 dose/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 49,
          "titulo": "220 Kg KCl.",
          "valores": [
            "220 Kg KCl.",
            "",
            "",
            "Tricodermil 100 ml/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 50,
          "titulo": "20 Kg MIB algodão.",
          "valores": [
            "20 Kg MIB algodão.",
            "",
            "",
            "Veraneio 100 g/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ],
      "fonte": {
        "arquivo": "Teste de Cultivares 2026.xlsx",
        "aba": "SOJA VENDRÚSCOLO"
      },
      "adubacao": [
        "3 T Calcário.",
        "350 Kg SSP pré-plantio.",
        "220 Kg KCl.",
        "20 Kg MIB algodão."
      ],
      "jatoDirigido": [
        "Rizokop 10 doses/ha.",
        "Azokop 1 dose/ha.",
        "Tricodermil 100 ml/ha.",
        "Veraneio 100 g/ha.",
        "Stingray 200 ml/ha."
      ]
    },
    {
      "id": "soja-dors",
      "nome": "SOJA DORS",
      "titulo": "TESTE DE VARIEDADES",
      "cultura": "SOJA",
      "produtor": "Carliens Dors",
      "plantio": "19/05/2026",
      "totalTratamentos": 12,
      "colunasOriginais": [
        "Nº",
        "CULTIVAR",
        "EMPRESA",
        "MATURAÇÃO",
        "PMG",
        "POPULAÇÃO",
        "PÓS-EMERGENTE (17/06)",
        "DOSE/HA",
        "2ª FUNGICIDA (17/07)",
        "DOSE/HA"
      ],
      "tratamentos": [
        {
          "numero": 1,
          "cultivar": "RAPTOR (15 linhas)",
          "empresa": "BRASMAX",
          "maturacao": 7.1,
          "pmg": 172,
          "populacao": 350000,
          "id": "soja-dors-1",
          "linhaExcel": 6,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (17/06)",
              "produto": "CS MEGA",
              "dose": "0.04"
            },
            {
              "etapa": "2ª FUNGICIDA (17/07)",
              "produto": "CS MEGA",
              "dose": "0.04"
            }
          ],
          "raw": [
            "1",
            "RAPTOR (15 linhas)",
            "BRASMAX",
            "7.1",
            "172",
            "350000",
            "",
            "CS MEGA",
            "0.04",
            "CS MEGA",
            "0.04"
          ]
        },
        {
          "numero": 2,
          "cultivar": "TORMENTA",
          "empresa": "BRASMAX",
          "maturacao": 7.6,
          "pmg": 172,
          "populacao": 260000,
          "id": "soja-dors-2",
          "linhaExcel": 7,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (17/06)",
              "produto": "EXTRAVON",
              "dose": "0.04"
            },
            {
              "etapa": "2ª FUNGICIDA (17/07)",
              "produto": "EXTRAVON",
              "dose": "0.04"
            }
          ],
          "raw": [
            "2",
            "TORMENTA",
            "BRASMAX",
            "7.6",
            "172",
            "260000",
            "",
            "EXTRAVON",
            "0.04",
            "EXTRAVON",
            "0.04"
          ]
        },
        {
          "numero": 3,
          "cultivar": "MÍTICA",
          "empresa": "BRASMAX",
          "maturacao": 7.7,
          "pmg": 163,
          "populacao": 260000,
          "id": "soja-dors-3",
          "linhaExcel": 8,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (17/06)",
              "produto": "FIPRONIL 800 WG",
              "dose": "0.04"
            },
            {
              "etapa": "2ª FUNGICIDA (17/07)",
              "produto": "MANCOZEB",
              "dose": "1.25"
            }
          ],
          "raw": [
            "3",
            "MÍTICA",
            "BRASMAX",
            "7.7",
            "163",
            "260000",
            "",
            "FIPRONIL 800 WG",
            "0.04",
            "MANCOZEB",
            "1.25"
          ]
        },
        {
          "numero": 4,
          "cultivar": "ITAÚBA",
          "empresa": "TMG",
          "maturacao": 7.9,
          "pmg": 185,
          "populacao": 260000,
          "id": "soja-dors-4",
          "linhaExcel": 9,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (17/06)",
              "produto": "CLETODIN 240",
              "dose": "0.3"
            },
            {
              "etapa": "2ª FUNGICIDA (17/07)",
              "produto": "COMO",
              "dose": "0.08"
            }
          ],
          "raw": [
            "4",
            "ITAÚBA",
            "TMG",
            "7.9",
            "185",
            "260000",
            "",
            "CLETODIN 240",
            "0.3",
            "COMO",
            "0.08"
          ]
        },
        {
          "numero": 5,
          "cultivar": "79K80",
          "empresa": "DON MARIO",
          "maturacao": 7.9,
          "pmg": 159,
          "populacao": 260000,
          "id": "soja-dors-5",
          "linhaExcel": 10,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (17/06)",
              "produto": "DIFENO 250",
              "dose": "0.3"
            },
            {
              "etapa": "2ª FUNGICIDA (17/07)",
              "produto": "ENGEO PLENO",
              "dose": "0.3"
            }
          ],
          "raw": [
            "5",
            "79K80",
            "DON MARIO",
            "7.9",
            "159",
            "260000",
            "",
            "DIFENO 250",
            "0.3",
            "ENGEO PLENO",
            "0.3"
          ]
        },
        {
          "numero": 6,
          "cultivar": "80Ka72 ( 1 e 1/2)",
          "empresa": "STINE",
          "maturacao": 8,
          "pmg": 170,
          "populacao": 260000,
          "id": "soja-dors-6",
          "linhaExcel": 11,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE (17/06)",
              "produto": "STARTER MN",
              "dose": "0.5"
            },
            {
              "etapa": "2ª FUNGICIDA (17/07)",
              "produto": "BIOBREV",
              "dose": "0.5"
            },
            {
              "etapa": "PÓS-EMERGENTE (17/06)",
              "produto": "ZAAP QI",
              "dose": "2"
            },
            {
              "etapa": "2ª FUNGICIDA (17/07)",
              "produto": "AMPLIGO",
              "dose": "0.1"
            }
          ],
          "raw": [
            "6",
            "80Ka72 ( 1 e 1/2)",
            "STINE",
            "8.0",
            "170",
            "260000",
            "",
            "STARTER MN",
            "0.5",
            "BIOBREV",
            "0.5"
          ]
        },
        {
          "numero": 7,
          "cultivar": "C2795 (15 linhas)",
          "empresa": "CORDIUS",
          "maturacao": 7.9,
          "pmg": 184,
          "populacao": 260000,
          "id": "soja-dors-7",
          "linhaExcel": 13,
          "manejos": [
            {
              "etapa": "2ª FUNGICIDA (17/07)",
              "produto": "DIFENO 250",
              "dose": "0.3"
            }
          ],
          "raw": [
            "7",
            "C2795 (15 linhas)",
            "CORDIUS",
            "7.9",
            "184",
            "260000",
            "",
            "",
            "",
            "DIFENO 250",
            "0.3"
          ]
        },
        {
          "numero": 8,
          "cultivar": "HERA",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 188,
          "populacao": 260000,
          "id": "soja-dors-8",
          "linhaExcel": 14,
          "manejos": [
            {
              "etapa": "2ª FUNGICIDA (17/07)",
              "produto": "MITRION",
              "dose": "0.45"
            }
          ],
          "raw": [
            "8",
            "HERA",
            "BRASMAX",
            "8.0",
            "188",
            "260000",
            "",
            "",
            "",
            "MITRION",
            "0.45"
          ]
        },
        {
          "numero": 9,
          "cultivar": "NEO 810",
          "empresa": "NEOGEN",
          "maturacao": 8.1,
          "pmg": 162,
          "populacao": 260000,
          "id": "soja-dors-9",
          "linhaExcel": 15,
          "manejos": [],
          "raw": [
            "9",
            "NEO 810",
            "NEOGEN",
            "8.1",
            "162",
            "260000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 10,
          "cultivar": "GH 2581",
          "empresa": "GOLDEN HARVEST",
          "maturacao": 8.1,
          "pmg": 180,
          "populacao": 260000,
          "id": "soja-dors-10",
          "linhaExcel": 16,
          "manejos": [],
          "raw": [
            "10",
            "GH 2581",
            "GOLDEN HARVEST",
            "8.1",
            "180",
            "260000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 11,
          "cultivar": "CASTANHEIRA",
          "empresa": "TMG",
          "maturacao": 8.3,
          "pmg": 175,
          "populacao": 260000,
          "id": "soja-dors-11",
          "linhaExcel": 17,
          "manejos": [],
          "raw": [
            "11",
            "CASTANHEIRA",
            "TMG",
            "8.3",
            "175",
            "260000",
            "",
            "1ª FUNGICIDA (02/07)",
            "DOSE/HA",
            "3ª FUNGICIDA",
            "DOSE/HA"
          ]
        },
        {
          "numero": 12,
          "cultivar": "84Ka92",
          "empresa": "STINE",
          "maturacao": 8.4,
          "pmg": 160,
          "populacao": 260000,
          "id": "soja-dors-12",
          "linhaExcel": 18,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA (02/07)",
              "produto": "CS MEGA",
              "dose": "0.04"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "CS MEGA",
              "dose": "0.04"
            }
          ],
          "raw": [
            "12",
            "84Ka92",
            "STINE",
            "8.4",
            "160",
            "260000",
            "",
            "CS MEGA",
            "0.04",
            "CS MEGA",
            "0.04"
          ]
        }
      ],
      "observacoes": [
        {
          "linhaExcel": 19,
          "titulo": "ADUBO",
          "valores": [
            "ADUBO",
            "",
            "",
            "JATO DIRIGIDO",
            "",
            "",
            "",
            "EXTRAVON",
            "0.04",
            "EXTRAVON",
            "0.04"
          ]
        },
        {
          "linhaExcel": 20,
          "titulo": "350 Kg 00-30-02 na linha.",
          "valores": [
            "350 Kg 00-30-02 na linha.",
            "",
            "",
            "Bradyrhizobium japonicum 6 doses/ha.",
            "",
            "",
            "",
            "POLYTRIN",
            "1.2",
            "COMO",
            "0.08"
          ]
        },
        {
          "linhaExcel": 21,
          "titulo": "270 Kg KCl parcelado.",
          "valores": [
            "270 Kg KCl parcelado.",
            "",
            "",
            "Bradyrhizobium elkanii 6 doses/ha.",
            "",
            "",
            "",
            "BOMBARDEIRO",
            "0.3",
            "ACETAMIPRID 200",
            "0.25"
          ]
        }
      ],
      "fonte": {
        "arquivo": "Teste de Cultivares 2026.xlsx",
        "aba": "SOJA DORS"
      },
      "adubacao": [
        "350 Kg 00-30-02 na linha.",
        "270 Kg KCl parcelado."
      ],
      "jatoDirigido": [
        "Bradyrhizobium japonicum  6 doses/ha.",
        "Bradyrhizobium elkanii  6 doses/ha.",
        "Azotrop 150 ml/ha.",
        "Trichotrop 20 g/ha.",
        "Biomagno 200 ml/ha.",
        "Bioasis 100 ml/ha."
      ]
    },
    {
      "id": "soja-jung",
      "nome": "SOJA JUNG",
      "titulo": "TESTE DE VARIEDADES",
      "cultura": "SOJA",
      "produtor": "Arison Jung",
      "plantio": "10/05/2026",
      "totalTratamentos": 36,
      "colunasOriginais": [
        "Nº",
        "CULTIVAR",
        "EMPRESA",
        "MATURAÇÃO",
        "PMG",
        "POPULAÇÃO",
        "MOTORA",
        "MOVIDA",
        "PÓS-EMERGENTE",
        "DOSE/HA",
        "2ª FUNGICIDA",
        "DOSE/HA"
      ],
      "tratamentos": [
        {
          "numero": 1,
          "cultivar": "IMPETO",
          "empresa": "BRASMAX",
          "maturacao": 9,
          "pmg": 162,
          "populacao": 180,
          "motora": 18,
          "movida": 19,
          "id": "soja-jung-1",
          "linhaExcel": 6,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "VESSARYA",
              "dose": "0.4"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "VIOVAN",
              "dose": "0.7"
            }
          ],
          "raw": [
            "1",
            "IMPETO",
            "BRASMAX",
            "9.0",
            "162",
            "180",
            "18",
            "19",
            "",
            "VESSARYA",
            "0.4",
            "VIOVAN",
            "0.7"
          ]
        },
        {
          "numero": 2,
          "cultivar": "IMPETO",
          "empresa": "BRASMAX",
          "maturacao": 9,
          "pmg": 162,
          "populacao": 260,
          "motora": 26,
          "movida": 19,
          "id": "soja-jung-2",
          "linhaExcel": 7,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "TEBUCO",
              "dose": "0.4"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "TIOFANATO 500",
              "dose": "1"
            }
          ],
          "raw": [
            "2",
            "IMPETO",
            "BRASMAX",
            "9.0",
            "162",
            "260",
            "26",
            "19",
            "",
            "TEBUCO",
            "0.4",
            "TIOFANATO 500",
            "1"
          ]
        },
        {
          "numero": 3,
          "cultivar": "LENDA",
          "empresa": "PAMPEANA",
          "maturacao": 8.4,
          "pmg": 210,
          "populacao": 180,
          "motora": 18,
          "movida": 19,
          "id": "soja-jung-3",
          "linhaExcel": 8,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "CLOROTALONIL",
              "dose": "0.6"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "ACETAMIPRIDO",
              "dose": "0.25"
            }
          ],
          "raw": [
            "3",
            "LENDA",
            "PAMPEANA",
            "8.4",
            "210",
            "180",
            "18",
            "19",
            "",
            "CLOROTALONIL",
            "0.6",
            "ACETAMIPRIDO",
            "0.25"
          ]
        },
        {
          "numero": 4,
          "cultivar": "LENDA",
          "empresa": "PAMPEANA",
          "maturacao": 8.4,
          "pmg": 210,
          "populacao": 260,
          "motora": 26,
          "movida": 19,
          "id": "soja-jung-4",
          "linhaExcel": 9,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "GLIFOSATO 720",
              "dose": "1.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "PIRIPROXIFEM",
              "dose": "0.25"
            }
          ],
          "raw": [
            "4",
            "LENDA",
            "PAMPEANA",
            "8.4",
            "210",
            "260",
            "26",
            "19",
            "",
            "GLIFOSATO 720",
            "1.5",
            "PIRIPROXIFEM",
            "0.25"
          ]
        },
        {
          "numero": 5,
          "cultivar": "84Ka92",
          "empresa": "STINE",
          "maturacao": 8.4,
          "pmg": 160,
          "populacao": 180,
          "motora": 18,
          "movida": 19,
          "id": "soja-jung-5",
          "linhaExcel": 10,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "PREMIO",
              "dose": "0.08"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "LANNATE",
              "dose": "1.5"
            }
          ],
          "raw": [
            "5",
            "84Ka92",
            "STINE",
            "8.4",
            "160",
            "180",
            "18",
            "19",
            "",
            "PREMIO",
            "0.08",
            "LANNATE",
            "1.5"
          ]
        },
        {
          "numero": 6,
          "cultivar": "84Ka92",
          "empresa": "STINE",
          "maturacao": 8.4,
          "pmg": 160,
          "populacao": 260,
          "motora": 26,
          "movida": 19,
          "id": "soja-jung-6",
          "linhaExcel": 11,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "ACETAMIPRIDO",
              "dose": "0.25"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.08"
            }
          ],
          "raw": [
            "6",
            "84Ka92",
            "STINE",
            "8.4",
            "160",
            "260",
            "26",
            "19",
            "",
            "ACETAMIPRIDO",
            "0.25",
            "CO-MO-NI LYNX",
            "0.08"
          ]
        },
        {
          "numero": 7,
          "cultivar": "80Ka72",
          "empresa": "STINE",
          "maturacao": 8,
          "pmg": 170,
          "populacao": 220,
          "motora": 18,
          "movida": 15,
          "id": "soja-jung-7",
          "linhaExcel": 12,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.08"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "MULTIKEL COBRE",
              "dose": "0.08"
            }
          ],
          "raw": [
            "7",
            "80Ka72",
            "STINE",
            "8.0",
            "170",
            "220",
            "18",
            "15",
            "",
            "CO-MO-NI LYNX",
            "0.08",
            "MULTIKEL COBRE",
            "0.08"
          ]
        },
        {
          "numero": 8,
          "cultivar": "80Ka72",
          "empresa": "STINE",
          "maturacao": 8,
          "pmg": 170,
          "populacao": 300,
          "motora": 30,
          "movida": 19,
          "id": "soja-jung-8",
          "linhaExcel": 13,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "MULTIKEL MN",
              "dose": "0.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            }
          ],
          "raw": [
            "8",
            "80Ka72",
            "STINE",
            "8.0",
            "170",
            "300",
            "30",
            "19",
            "",
            "MULTIKEL MN",
            "0.5",
            "BORO 10 PLUS",
            "0.3"
          ]
        },
        {
          "numero": 9,
          "cultivar": "80I85",
          "empresa": "DON MARIO",
          "maturacao": 8,
          "pmg": 201,
          "populacao": 220,
          "motora": 18,
          "movida": 15,
          "id": "soja-jung-9",
          "linhaExcel": 14,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "SULF. ZINCO",
              "dose": "0.4"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "9",
            "80I85",
            "DON MARIO",
            "8.0",
            "201",
            "220",
            "18",
            "15",
            "",
            "SULF. ZINCO",
            "0.4",
            "SULF. MAGNÉSIO",
            "2"
          ]
        },
        {
          "numero": 10,
          "cultivar": "80I85",
          "empresa": "DON MARIO",
          "maturacao": 8,
          "pmg": 201,
          "populacao": 300,
          "motora": 30,
          "movida": 19,
          "id": "soja-jung-10",
          "linhaExcel": 15,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "SULF. MAGNÉSIO",
              "dose": "1.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "SUGAR",
              "dose": "1.5"
            }
          ],
          "raw": [
            "10",
            "80I85",
            "DON MARIO",
            "8.0",
            "201",
            "300",
            "30",
            "19",
            "",
            "SULF. MAGNÉSIO",
            "1.5",
            "SUGAR",
            "1.5"
          ]
        },
        {
          "numero": 11,
          "cultivar": "ITAÚBA",
          "empresa": "TMG",
          "maturacao": 7.9,
          "pmg": 185,
          "populacao": 220,
          "motora": 18,
          "movida": 15,
          "id": "soja-jung-11",
          "linhaExcel": 16,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "EXACT",
              "dose": "0.08"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "POTENZA K",
              "dose": "1.5"
            }
          ],
          "raw": [
            "11",
            "ITAÚBA",
            "TMG",
            "7.9",
            "185",
            "220",
            "18",
            "15",
            "",
            "EXACT",
            "0.08",
            "POTENZA K",
            "1.5"
          ]
        },
        {
          "numero": 12,
          "cultivar": "ITAÚBA",
          "empresa": "TMG",
          "maturacao": 7.9,
          "pmg": 185,
          "populacao": 300,
          "motora": 30,
          "movida": 19,
          "id": "soja-jung-12",
          "linhaExcel": 17,
          "manejos": [
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "EXACT",
              "dose": "0.08"
            }
          ],
          "raw": [
            "12",
            "ITAÚBA",
            "TMG",
            "7.9",
            "185",
            "300",
            "30",
            "19",
            "",
            "",
            "",
            "EXACT",
            "0.08"
          ]
        },
        {
          "numero": 13,
          "cultivar": "OLIMPO (CELEIRO)",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 220,
          "motora": 18,
          "movida": 15,
          "id": "soja-jung-13",
          "linhaExcel": 18,
          "manejos": [],
          "raw": [
            "13",
            "OLIMPO (CELEIRO)",
            "BRASMAX",
            "8.0",
            "171",
            "220",
            "18",
            "15",
            "",
            "1ª FUNGICIDA",
            "DOSE/HA",
            "3ª FUNGICIDA",
            "DOSE/HA"
          ]
        },
        {
          "numero": 14,
          "cultivar": "OLIMPO (CELEIRO)",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 171,
          "populacao": 300,
          "motora": 30,
          "movida": 19,
          "id": "soja-jung-14",
          "linhaExcel": 19,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "FOX SUPRA",
              "dose": "0.35"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "GLOVE",
              "dose": "0.25"
            }
          ],
          "raw": [
            "14",
            "OLIMPO (CELEIRO)",
            "BRASMAX",
            "8.0",
            "171",
            "300",
            "30",
            "19",
            "",
            "FOX SUPRA",
            "0.35",
            "GLOVE",
            "0.25"
          ]
        },
        {
          "numero": 15,
          "cultivar": "GH 2581",
          "empresa": "GOLDEN HARVEST",
          "maturacao": 8.1,
          "pmg": 180,
          "populacao": 220,
          "motora": 26,
          "movida": 19,
          "id": "soja-jung-15",
          "linhaExcel": 20,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "TIOFANATO 500",
              "dose": "1"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "GALIL",
              "dose": "0.3"
            }
          ],
          "raw": [
            "15",
            "GH 2581",
            "GOLDEN HARVEST",
            "8.1",
            "180",
            "220",
            "26",
            "19",
            "",
            "TIOFANATO 500",
            "1",
            "GALIL",
            "0.3"
          ]
        },
        {
          "numero": 16,
          "cultivar": "GH 2581",
          "empresa": "GOLDEN HARVEST",
          "maturacao": 8.1,
          "pmg": 180,
          "populacao": 300,
          "motora": 26,
          "movida": 19,
          "id": "soja-jung-16",
          "linhaExcel": 21,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "ACETAMIPRIDO",
              "dose": "0.25"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "TRIVOR",
              "dose": "0.25"
            }
          ],
          "raw": [
            "16",
            "GH 2581",
            "GOLDEN HARVEST",
            "8.1",
            "180",
            "300",
            "26",
            "19",
            "",
            "ACETAMIPRIDO",
            "0.25",
            "TRIVOR",
            "0.25"
          ]
        },
        {
          "numero": 17,
          "cultivar": "BÔNUS",
          "empresa": "BRASMAX",
          "maturacao": 7.9,
          "pmg": 190,
          "populacao": 220,
          "motora": 18,
          "movida": 15,
          "id": "soja-jung-17",
          "linhaExcel": 22,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "PIRIPROXIFEM",
              "dose": "0.25"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "MULTIMOL",
              "dose": "0.08"
            }
          ],
          "raw": [
            "17",
            "BÔNUS",
            "BRASMAX",
            "7.9",
            "190",
            "220",
            "18",
            "15",
            "",
            "PIRIPROXIFEM",
            "0.25",
            "MULTIMOL",
            "0.08"
          ]
        },
        {
          "numero": 18,
          "cultivar": "BÔNUS",
          "empresa": "BRASMAX",
          "maturacao": 7.9,
          "pmg": 190,
          "populacao": 300,
          "motora": 30,
          "movida": 19,
          "id": "soja-jung-18",
          "linhaExcel": 23,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "PREMIO",
              "dose": "0.075"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "18",
            "BÔNUS",
            "BRASMAX",
            "7.9",
            "190",
            "300",
            "30",
            "19",
            "",
            "PREMIO",
            "0.075",
            "SULF. MAGNÉSIO",
            "2"
          ]
        },
        {
          "numero": 19,
          "cultivar": "78Ka42",
          "empresa": "STINE",
          "maturacao": 7.8,
          "pmg": 150,
          "populacao": 220,
          "motora": 18,
          "movida": 15,
          "id": "soja-jung-19",
          "linhaExcel": 24,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "LANNATE",
              "dose": "1.5"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SUGAR",
              "dose": "1.5"
            }
          ],
          "raw": [
            "19",
            "78Ka42",
            "STINE",
            "7.8",
            "150",
            "220",
            "18",
            "15",
            "",
            "LANNATE",
            "1.5",
            "SUGAR",
            "1.5"
          ]
        },
        {
          "numero": 20,
          "cultivar": "78Ka72",
          "empresa": "STINE",
          "maturacao": 7.8,
          "pmg": 150,
          "populacao": 300,
          "motora": 30,
          "movida": 19,
          "id": "soja-jung-20",
          "linhaExcel": 25,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.08"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "POTENZA K",
              "dose": "1.5"
            }
          ],
          "raw": [
            "20",
            "78Ka72",
            "STINE",
            "7.8",
            "150",
            "300",
            "30",
            "19",
            "",
            "CO-MO-NI LYNX",
            "0.08",
            "POTENZA K",
            "1.5"
          ]
        },
        {
          "numero": 21,
          "cultivar": "NEO 850",
          "empresa": "NEOGEN",
          "maturacao": 8.5,
          "pmg": 160,
          "populacao": 260,
          "motora": 26,
          "movida": 19,
          "id": "soja-jung-21",
          "linhaExcel": 26,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.4"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "EXACT",
              "dose": "0.08"
            }
          ],
          "raw": [
            "21",
            "NEO 850",
            "NEOGEN",
            "8.5",
            "160",
            "260",
            "26",
            "19",
            "",
            "BORO 10 PLUS",
            "0.4",
            "EXACT",
            "0.08"
          ]
        },
        {
          "numero": 22,
          "cultivar": "NEO 810",
          "empresa": "NEOGEN",
          "maturacao": 8.1,
          "pmg": 162,
          "populacao": 260,
          "motora": 26,
          "movida": 19,
          "id": "soja-jung-22",
          "linhaExcel": 27,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "22",
            "NEO 810",
            "NEOGEN",
            "8.1",
            "162",
            "260",
            "26",
            "19",
            "",
            "SULF. MAGNÉSIO",
            "2",
            "",
            ""
          ]
        },
        {
          "numero": 23,
          "cultivar": "NEO 802",
          "empresa": "NEOGEN",
          "maturacao": 8,
          "pmg": 178,
          "populacao": 260,
          "motora": 26,
          "movida": 19,
          "id": "soja-jung-23",
          "linhaExcel": 28,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SULF. ZINCO",
              "dose": "0.3"
            }
          ],
          "raw": [
            "23",
            "NEO 802",
            "NEOGEN",
            "8.0",
            "178",
            "260",
            "26",
            "19",
            "",
            "SULF. ZINCO",
            "0.3",
            "",
            ""
          ]
        },
        {
          "numero": 24,
          "cultivar": "NS8080",
          "empresa": "NIDERA",
          "maturacao": 8,
          "pmg": 185,
          "populacao": 260,
          "motora": 26,
          "movida": 19,
          "id": "soja-jung-24",
          "linhaExcel": 29,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "MULTIKEL COBRE",
              "dose": "0.08"
            }
          ],
          "raw": [
            "24",
            "NS8080",
            "NIDERA",
            "8.0",
            "185",
            "260",
            "26",
            "19",
            "",
            "MULTIKEL COBRE",
            "0.08",
            "",
            ""
          ]
        },
        {
          "numero": 25,
          "cultivar": "HERA",
          "empresa": "BRASMAX",
          "maturacao": 8,
          "pmg": 188,
          "populacao": 260,
          "motora": 26,
          "movida": 19,
          "id": "soja-jung-25",
          "linhaExcel": 30,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "EXACT",
              "dose": "0.08"
            }
          ],
          "raw": [
            "25",
            "HERA",
            "BRASMAX",
            "8.0",
            "188",
            "260",
            "26",
            "19",
            "",
            "EXACT",
            "0.08",
            "",
            ""
          ]
        },
        {
          "numero": 26,
          "cultivar": "79K80",
          "empresa": "DON MARIO",
          "maturacao": 7.9,
          "pmg": 159,
          "populacao": 280,
          "motora": 26,
          "movida": 17,
          "id": "soja-jung-26",
          "linhaExcel": 31,
          "manejos": [],
          "raw": [
            "26",
            "79K80",
            "DON MARIO",
            "7.9",
            "159",
            "280",
            "26",
            "17",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 27,
          "cultivar": "78IX80",
          "empresa": "DON MARIO",
          "maturacao": 7.8,
          "pmg": 173,
          "populacao": 280,
          "motora": 26,
          "movida": 17,
          "id": "soja-jung-27",
          "linhaExcel": 32,
          "manejos": [],
          "raw": [
            "27",
            "78IX80",
            "DON MARIO",
            "7.8",
            "173",
            "280",
            "26",
            "17",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 28,
          "cultivar": "SERTANEJA",
          "empresa": "LATITUDE",
          "maturacao": 7.9,
          "pmg": 170,
          "populacao": 280,
          "motora": 26,
          "movida": 17,
          "id": "soja-jung-28",
          "linhaExcel": 33,
          "manejos": [],
          "raw": [
            "28",
            "SERTANEJA",
            "LATITUDE",
            "7.9",
            "170",
            "280",
            "26",
            "17",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 29,
          "cultivar": "EVOLUI",
          "empresa": "LATITUDE",
          "maturacao": 7.9,
          "pmg": 180,
          "populacao": 280,
          "motora": 26,
          "movida": 17,
          "id": "soja-jung-29",
          "linhaExcel": 34,
          "manejos": [],
          "raw": [
            "29",
            "EVOLUI",
            "LATITUDE",
            "7.9",
            "180",
            "280",
            "26",
            "17",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 30,
          "cultivar": "C2795",
          "empresa": "CORDIUS",
          "maturacao": 7.9,
          "pmg": 184,
          "populacao": 280,
          "motora": 26,
          "movida": 17,
          "id": "soja-jung-30",
          "linhaExcel": 35,
          "manejos": [],
          "raw": [
            "30",
            "C2795",
            "CORDIUS",
            "7.9",
            "184",
            "280",
            "26",
            "17",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 31,
          "cultivar": "AVRA 2478",
          "empresa": "AVRA",
          "maturacao": 7.8,
          "pmg": 166,
          "populacao": 280,
          "motora": 26,
          "movida": 17,
          "id": "soja-jung-31",
          "linhaExcel": 36,
          "manejos": [],
          "raw": [
            "31",
            "AVRA 2478",
            "AVRA",
            "7.8",
            "166",
            "280",
            "26",
            "17",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 32,
          "cultivar": "MÍTICA",
          "empresa": "BRASMAX",
          "maturacao": 7.7,
          "pmg": 163,
          "populacao": 300,
          "motora": 30,
          "movida": 19,
          "id": "soja-jung-32",
          "linhaExcel": 37,
          "manejos": [],
          "raw": [
            "32",
            "MÍTICA",
            "BRASMAX",
            "7.7",
            "163",
            "300",
            "30",
            "19",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 33,
          "cultivar": "AVRA 2576",
          "empresa": "AVRA",
          "maturacao": 7.6,
          "pmg": 155,
          "populacao": 300,
          "motora": 30,
          "movida": 19,
          "id": "soja-jung-33",
          "linhaExcel": 38,
          "manejos": [],
          "raw": [
            "33",
            "AVRA 2576",
            "AVRA",
            "7.6",
            "155",
            "300",
            "30",
            "19",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 34,
          "cultivar": "TORMENTA",
          "empresa": "BRASMAX",
          "maturacao": 7.6,
          "pmg": 172,
          "populacao": 300,
          "motora": 30,
          "movida": 19,
          "id": "soja-jung-34",
          "linhaExcel": 39,
          "manejos": [],
          "raw": [
            "34",
            "TORMENTA",
            "BRASMAX",
            "7.6",
            "172",
            "300",
            "30",
            "19",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 35,
          "cultivar": "NS 7676",
          "empresa": "NIDERA",
          "maturacao": 7.6,
          "pmg": 180,
          "populacao": 300,
          "motora": 30,
          "movida": 19,
          "id": "soja-jung-35",
          "linhaExcel": 40,
          "manejos": [],
          "raw": [
            "35",
            "NS 7676",
            "NIDERA",
            "7.6",
            "180",
            "300",
            "30",
            "19",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 36,
          "cultivar": "RAPTOR",
          "empresa": "BRASMAX",
          "maturacao": 7.1,
          "pmg": 172,
          "populacao": 380,
          "motora": 30,
          "movida": 15,
          "id": "soja-jung-36",
          "linhaExcel": 41,
          "manejos": [],
          "raw": [
            "36",
            "RAPTOR",
            "BRASMAX",
            "7.1",
            "172",
            "380",
            "30",
            "15",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ],
      "observacoes": [
        {
          "linhaExcel": 42,
          "titulo": "ADUBAÇÃO",
          "valores": [
            "ADUBAÇÃO",
            "",
            "",
            "",
            "JATO DIRIGIDO",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 43,
          "titulo": "380 Kg SSP pré-plantio.",
          "valores": [
            "380 Kg SSP pré-plantio.",
            "",
            "",
            "",
            "Rizokop 20 doses/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 44,
          "titulo": "135 Kg KCl pré-plantio.",
          "valores": [
            "135 Kg KCl pré-plantio.",
            "",
            "",
            "",
            "Azokop 1 dose/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 45,
          "titulo": "80 Kg KCl Pós-plantio.",
          "valores": [
            "80 Kg KCl Pós-plantio.",
            "",
            "",
            "",
            "Tricodermil 80 ml/ha.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ],
      "fonte": {
        "arquivo": "Teste de Cultivares 2026.xlsx",
        "aba": "SOJA JUNG"
      },
      "adubacao": [
        "380 Kg SSP pré-plantio.",
        "135 Kg KCl pré-plantio.",
        "80 Kg KCl Pós-plantio."
      ],
      "jatoDirigido": [
        "Rizokop 20 doses/ha.",
        "Azokop 1 dose/ha.",
        "Tricodermil 80 ml/ha.",
        "Stingray 300 ml/ha.",
        "NemOut 500 g/ha.",
        "Verango Prime 300 ml/ha."
      ]
    },
    {
      "id": "milho-jung",
      "nome": "MILHO JUNG",
      "titulo": "TESTE DE CULTIVARES",
      "cultura": "MILHO",
      "produtor": "Arison Jung",
      "plantio": "18/05/2026",
      "totalTratamentos": 28,
      "colunasOriginais": [
        "Nº",
        "CULTIVAR",
        "EMPRESA",
        "POPULAÇÃO",
        "PÓS-EMERGENTE",
        "DOSE/HA",
        "2ª FUNGICIDA",
        "DOSE/HA"
      ],
      "tratamentos": [
        {
          "numero": 1,
          "cultivar": "P 3845",
          "empresa": "PIONEER",
          "populacao": 70000,
          "id": "milho-jung-1",
          "linhaExcel": 6,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "AZOKOP",
              "dose": "5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "VIOVAN",
              "dose": "0.7"
            }
          ],
          "raw": [
            "1",
            "P 3845",
            "PIONEER",
            "70000",
            "",
            "AZOKOP",
            "5",
            "VIOVAN",
            "0.7"
          ]
        },
        {
          "numero": 2,
          "cultivar": "P 3701",
          "empresa": "PIONEER",
          "populacao": 70000,
          "id": "milho-jung-2",
          "linhaExcel": 7,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "GLIFOSATO 720",
              "dose": "1.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "TIOFANATO 500",
              "dose": "1"
            }
          ],
          "raw": [
            "2",
            "P 3701",
            "PIONEER",
            "70000",
            "",
            "GLIFOSATO 720",
            "1.5",
            "TIOFANATO 500",
            "1"
          ]
        },
        {
          "numero": 3,
          "cultivar": "P F784-48 (codificado)",
          "empresa": "PIONEER",
          "populacao": 70000,
          "id": "milho-jung-3",
          "linhaExcel": 8,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "GLUFOSINATO 880",
              "dose": "0.4"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "EXALT",
              "dose": "0.1"
            }
          ],
          "raw": [
            "3",
            "P F784-48 (codificado)",
            "PIONEER",
            "70000",
            "",
            "GLUFOSINATO 880",
            "0.4",
            "EXALT",
            "0.1"
          ]
        },
        {
          "numero": 4,
          "cultivar": "P F3261-48 (codificado)",
          "empresa": "PIONEER",
          "populacao": 70000,
          "id": "milho-jung-4",
          "linhaExcel": 9,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "IMIDACLOPRID 480",
              "dose": "0.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "IMIDACLOPRID 480",
              "dose": "0.5"
            }
          ],
          "raw": [
            "4",
            "P F3261-48 (codificado)",
            "PIONEER",
            "70000",
            "",
            "IMIDACLOPRID 480",
            "0.5",
            "IMIDACLOPRID 480",
            "0.5"
          ]
        },
        {
          "numero": 5,
          "cultivar": "AG 8480",
          "empresa": "AGROCERES",
          "populacao": 70000,
          "id": "milho-jung-5",
          "linhaExcel": 10,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "LANNATE",
              "dose": "1.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            }
          ],
          "raw": [
            "5",
            "AG 8480",
            "AGROCERES",
            "70000",
            "",
            "LANNATE",
            "1.5",
            "BORO 10 PLUS",
            "0.3"
          ]
        },
        {
          "numero": 6,
          "cultivar": "FS 560",
          "empresa": "FORSEED",
          "populacao": 70000,
          "id": "milho-jung-6",
          "linhaExcel": 11,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "EXALT",
              "dose": "0.1"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "6",
            "FS 560",
            "FORSEED",
            "70000",
            "",
            "EXALT",
            "0.1",
            "SULF. MAGNÉSIO",
            "2"
          ]
        },
        {
          "numero": 7,
          "cultivar": "FS 650",
          "empresa": "FORSEED",
          "populacao": 70000,
          "id": "milho-jung-7",
          "linhaExcel": 12,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.08"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "EXACT",
              "dose": "0.8"
            }
          ],
          "raw": [
            "7",
            "FS 650",
            "FORSEED",
            "70000",
            "",
            "CO-MO-NI LYNX",
            "0.08",
            "EXACT",
            "0.8"
          ]
        },
        {
          "numero": 8,
          "cultivar": "FS 695",
          "empresa": "FORSEED",
          "populacao": 70000,
          "id": "milho-jung-8",
          "linhaExcel": 13,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            }
          ],
          "raw": [
            "8",
            "FS 695",
            "FORSEED",
            "70000",
            "",
            "BORO 10 PLUS",
            "0.3",
            "",
            ""
          ]
        },
        {
          "numero": 9,
          "cultivar": "NS 66",
          "empresa": "NIDERA",
          "populacao": 70000,
          "id": "milho-jung-9",
          "linhaExcel": 14,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "MULTIKEL MN",
              "dose": "0.4"
            }
          ],
          "raw": [
            "9",
            "NS 66",
            "NIDERA",
            "70000",
            "",
            "MULTIKEL MN",
            "0.4",
            "",
            ""
          ]
        },
        {
          "numero": 10,
          "cultivar": "NS 89",
          "empresa": "NIDERA",
          "populacao": 70000,
          "id": "milho-jung-10",
          "linhaExcel": 15,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "SULF. ZINCO",
              "dose": "0.6"
            }
          ],
          "raw": [
            "10",
            "NS 89",
            "NIDERA",
            "70000",
            "",
            "SULF. ZINCO",
            "0.6",
            "",
            ""
          ]
        },
        {
          "numero": 11,
          "cultivar": "NS 99",
          "empresa": "NIDERA",
          "populacao": 70000,
          "id": "milho-jung-11",
          "linhaExcel": 16,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "EXACT",
              "dose": "0.08"
            }
          ],
          "raw": [
            "11",
            "NS 99",
            "NIDERA",
            "70000",
            "",
            "EXACT",
            "0.08",
            "",
            ""
          ]
        },
        {
          "numero": 12,
          "cultivar": "Nk FEROZ",
          "empresa": "NK",
          "populacao": 70000,
          "id": "milho-jung-12",
          "linhaExcel": 17,
          "manejos": [],
          "raw": [
            "12",
            "Nk FEROZ",
            "NK",
            "70000",
            "",
            "1ª FUNGICIDA",
            "DOSE/HA",
            "3ª FUNGICIDA",
            "DOSE/HA"
          ]
        },
        {
          "numero": 13,
          "cultivar": "NK 509",
          "empresa": "NK",
          "populacao": 70000,
          "id": "milho-jung-13",
          "linhaExcel": 18,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "AZIMUT",
              "dose": "0.7"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "AZIMUT",
              "dose": "0.7"
            }
          ],
          "raw": [
            "13",
            "NK 509",
            "NK",
            "70000",
            "",
            "AZIMUT",
            "0.7",
            "AZIMUT",
            "0.7"
          ]
        },
        {
          "numero": 14,
          "cultivar": "NK 507",
          "empresa": "NK",
          "populacao": 70000,
          "id": "milho-jung-14",
          "linhaExcel": 19,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "TIOFANATO 500",
              "dose": "1"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "CLORFENAPIR",
              "dose": "1.2"
            }
          ],
          "raw": [
            "14",
            "NK 507",
            "NK",
            "70000",
            "",
            "TIOFANATO 500",
            "1",
            "CLORFENAPIR",
            "1.2"
          ]
        },
        {
          "numero": 15,
          "cultivar": "NK 501",
          "empresa": "NK",
          "populacao": 70000,
          "id": "milho-jung-15",
          "linhaExcel": 20,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "CLORFENAPIR",
              "dose": "1.2"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "15",
            "NK 501",
            "NK",
            "70000",
            "",
            "CLORFENAPIR",
            "1.2",
            "SULF. MAGNÉSIO",
            "2"
          ]
        },
        {
          "numero": 16,
          "cultivar": "GALO",
          "empresa": "SEEDCORP",
          "populacao": 70000,
          "id": "milho-jung-16",
          "linhaExcel": 21,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "PREMIO",
              "dose": "0.1"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.4"
            }
          ],
          "raw": [
            "16",
            "GALO",
            "SEEDCORP",
            "70000",
            "",
            "PREMIO",
            "0.1",
            "BORO 10 PLUS",
            "0.4"
          ]
        },
        {
          "numero": 17,
          "cultivar": "ST 9505",
          "empresa": "STINE",
          "populacao": 70000,
          "id": "milho-jung-17",
          "linhaExcel": 22,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "GALIL",
              "dose": "0.4"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "EXACT",
              "dose": "0.08"
            }
          ],
          "raw": [
            "17",
            "ST 9505",
            "STINE",
            "70000",
            "",
            "GALIL",
            "0.4",
            "EXACT",
            "0.08"
          ]
        },
        {
          "numero": 18,
          "cultivar": "ST 9801",
          "empresa": "STINE",
          "populacao": 70000,
          "id": "milho-jung-18",
          "linhaExcel": 23,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "MULTIMOL",
              "dose": "0.1"
            }
          ],
          "raw": [
            "18",
            "ST 9801",
            "STINE",
            "70000",
            "",
            "MULTIMOL",
            "0.1",
            "",
            ""
          ]
        },
        {
          "numero": 19,
          "cultivar": "ST 9808",
          "empresa": "STINE",
          "populacao": 70000,
          "id": "milho-jung-19",
          "linhaExcel": 24,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            }
          ],
          "raw": [
            "19",
            "ST 9808",
            "STINE",
            "70000",
            "",
            "BORO 10 PLUS",
            "0.3",
            "",
            ""
          ]
        },
        {
          "numero": 20,
          "cultivar": "ST 9717",
          "empresa": "STINE",
          "populacao": 70000,
          "id": "milho-jung-20",
          "linhaExcel": 25,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SULF. ZINCO",
              "dose": "0.4"
            }
          ],
          "raw": [
            "20",
            "ST 9717",
            "STINE",
            "70000",
            "",
            "SULF. ZINCO",
            "0.4",
            "",
            ""
          ]
        },
        {
          "numero": 21,
          "cultivar": "K 7510",
          "empresa": "SUPRA",
          "populacao": 70000,
          "id": "milho-jung-21",
          "linhaExcel": 26,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "21",
            "K 7510",
            "SUPRA",
            "70000",
            "",
            "SULF. MAGNÉSIO",
            "2",
            "",
            ""
          ]
        },
        {
          "numero": 22,
          "cultivar": "K 9606",
          "empresa": "SUPRA",
          "populacao": 70000,
          "id": "milho-jung-22",
          "linhaExcel": 27,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "EXACT",
              "dose": "0.08"
            }
          ],
          "raw": [
            "22",
            "K 9606",
            "SUPRA",
            "70000",
            "",
            "EXACT",
            "0.08",
            "",
            ""
          ]
        },
        {
          "numero": 23,
          "cultivar": "B 2701",
          "empresa": "BREVANTE",
          "populacao": 70000,
          "id": "milho-jung-23",
          "linhaExcel": 28,
          "manejos": [],
          "raw": [
            "23",
            "B 2701",
            "BREVANTE",
            "70000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 24,
          "cultivar": "BS 3319",
          "empresa": "BOA SAFRA",
          "populacao": 70000,
          "id": "milho-jung-24",
          "linhaExcel": 29,
          "manejos": [],
          "raw": [
            "24",
            "BS 3319",
            "BOA SAFRA",
            "70000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 25,
          "cultivar": "BS 364",
          "empresa": "BOA SAFRA",
          "populacao": 70000,
          "id": "milho-jung-25",
          "linhaExcel": 30,
          "manejos": [],
          "raw": [
            "25",
            "BS 364",
            "BOA SAFRA",
            "70000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 26,
          "cultivar": "BS 376",
          "empresa": "BOA SAFRA",
          "populacao": 70000,
          "id": "milho-jung-26",
          "linhaExcel": 31,
          "manejos": [],
          "raw": [
            "26",
            "BS 376",
            "BOA SAFRA",
            "70000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 27,
          "cultivar": "NS 66",
          "empresa": "NIDERA",
          "populacao": 70000,
          "id": "milho-jung-27",
          "linhaExcel": 32,
          "manejos": [],
          "raw": [
            "27",
            "NS 66",
            "NIDERA",
            "70000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 28,
          "cultivar": "NS 89",
          "empresa": "NIDERA",
          "populacao": 70000,
          "id": "milho-jung-28",
          "linhaExcel": 33,
          "manejos": [],
          "raw": [
            "28",
            "NS 89",
            "NIDERA",
            "70000",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ],
      "observacoes": [
        {
          "linhaExcel": 34,
          "titulo": "ADUBAÇÃO",
          "valores": [
            "ADUBAÇÃO",
            "",
            "JATO DIRIGIDO",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 35,
          "titulo": "600 Kg SSP na linha.",
          "valores": [
            "600 Kg SSP na linha.",
            "",
            "Azokop 2 doses/ha.",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 36,
          "titulo": "300 Kg Sulfato de amônio parcelado.",
          "valores": [
            "300 Kg Sulfato de amônio parcelado.",
            "",
            "Tricodermil 100 ml/ha.",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 37,
          "titulo": "250 Kg KCl parcelado.",
          "valores": [
            "250 Kg KCl parcelado.",
            "",
            "Nem Out 500 ml/ha.",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 38,
          "titulo": "200 Kg Ureia parcelado.",
          "valores": [
            "200 Kg Ureia parcelado.",
            "",
            "Stingray 300 ml/ha.",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ],
      "fonte": {
        "arquivo": "Teste de Cultivares 2026.xlsx",
        "aba": "MILHO JUNG"
      },
      "adubacao": [
        "600 Kg SSP na linha.",
        "300 Kg Sulfato de amônio parcelado.",
        "250 Kg KCl parcelado.",
        "200 Kg Ureia parcelado."
      ],
      "jatoDirigido": [
        "Azokop 2 doses/ha.",
        "Tricodermil 100 ml/ha.",
        "Nem Out 500 ml/ha.",
        "Stingray 300 ml/ha."
      ]
    },
    {
      "id": "milho-pazinato",
      "nome": "MILHO PAZINATO",
      "titulo": "TESTE DE CULTIVARES",
      "cultura": "MILHO",
      "produtor": "Diózei Pazinato",
      "plantio": "05/05/2026",
      "totalTratamentos": 32,
      "colunasOriginais": [
        "Nº",
        "CULTIVAR",
        "EMPRESA",
        "POPULAÇÃO",
        "PÓS-EMERGENTE",
        "DOSE/HA",
        "2ª FUNGICIDA",
        "DOSE/HA"
      ],
      "tratamentos": [
        {
          "numero": 1,
          "cultivar": "P 3707",
          "empresa": "PIONEER",
          "populacao": 68000,
          "id": "milho-pazinato-1",
          "linhaExcel": 6,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "WG",
              "dose": "1.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "VIOVAM",
              "dose": "0.7"
            }
          ],
          "raw": [
            "1",
            "P 3707",
            "PIONEER",
            "68000",
            "",
            "WG",
            "1.5",
            "VIOVAM",
            "0.7"
          ]
        },
        {
          "numero": 2,
          "cultivar": "P 3845",
          "empresa": "PIONEER",
          "populacao": 68000,
          "id": "milho-pazinato-2",
          "linhaExcel": 7,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "AZOKOP",
              "dose": "5 doses"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "CLOFENAPIR",
              "dose": "1.5"
            }
          ],
          "raw": [
            "2",
            "P 3845",
            "PIONEER",
            "68000",
            "",
            "AZOKOP",
            "5 doses",
            "CLOFENAPIR",
            "1.5"
          ]
        },
        {
          "numero": 3,
          "cultivar": "P F784-48 (codificado)",
          "empresa": "PIONEER",
          "populacao": 68000,
          "id": "milho-pazinato-3",
          "linhaExcel": 8,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "CARAVAN",
              "dose": "0.3"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "PREMIO",
              "dose": "0.08"
            }
          ],
          "raw": [
            "3",
            "P F784-48 (codificado)",
            "PIONEER",
            "68000",
            "",
            "CARAVAN",
            "0.3",
            "PREMIO",
            "0.08"
          ]
        },
        {
          "numero": 4,
          "cultivar": "P F3261-48 (codificado)",
          "empresa": "PIONEER",
          "populacao": 68000,
          "id": "milho-pazinato-4",
          "linhaExcel": 9,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "GLUFOSINATO",
              "dose": "0.3"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            }
          ],
          "raw": [
            "4",
            "P F3261-48 (codificado)",
            "PIONEER",
            "68000",
            "",
            "GLUFOSINATO",
            "0.3",
            "BORO 10 PLUS",
            "0.3"
          ]
        },
        {
          "numero": 5,
          "cultivar": "AG 8480",
          "empresa": "AGROCERES",
          "populacao": 68000,
          "id": "milho-pazinato-5",
          "linhaExcel": 10,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "EXALT",
              "dose": "0.15"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "SULF. MG",
              "dose": "2"
            }
          ],
          "raw": [
            "5",
            "AG 8480",
            "AGROCERES",
            "68000",
            "",
            "EXALT",
            "0.15",
            "SULF. MG",
            "2"
          ]
        },
        {
          "numero": 6,
          "cultivar": "B 2701",
          "empresa": "BREVANTE",
          "populacao": 68000,
          "id": "milho-pazinato-6",
          "linhaExcel": 11,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "IMIDA 480",
              "dose": "0.35"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "SUGAR",
              "dose": "1.2"
            }
          ],
          "raw": [
            "6",
            "B 2701",
            "BREVANTE",
            "68000",
            "",
            "IMIDA 480",
            "0.35",
            "SUGAR",
            "1.2"
          ]
        },
        {
          "numero": 7,
          "cultivar": "BS 3319",
          "empresa": "BOA SAFRA",
          "populacao": 68000,
          "id": "milho-pazinato-7",
          "linhaExcel": 12,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "CO-MO-NI LYNX",
              "dose": "0.1"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "MULTIMOL",
              "dose": "0.1"
            }
          ],
          "raw": [
            "7",
            "BS 3319",
            "BOA SAFRA",
            "68000",
            "",
            "CO-MO-NI LYNX",
            "0.1",
            "MULTIMOL",
            "0.1"
          ]
        },
        {
          "numero": 8,
          "cultivar": "BS 364",
          "empresa": "BOA SAFRA",
          "populacao": 68000,
          "id": "milho-pazinato-8",
          "linhaExcel": 13,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            }
          ],
          "raw": [
            "8",
            "BS 364",
            "BOA SAFRA",
            "68000",
            "",
            "BORO 10 PLUS",
            "0.3",
            "BIOPARTNERS ADJ",
            "0.08"
          ]
        },
        {
          "numero": 9,
          "cultivar": "BS 376",
          "empresa": "BOA SAFRA",
          "populacao": 68000,
          "id": "milho-pazinato-9",
          "linhaExcel": 14,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "MULTIKEL MN",
              "dose": "0.5"
            }
          ],
          "raw": [
            "9",
            "BS 376",
            "BOA SAFRA",
            "68000",
            "",
            "MULTIKEL MN",
            "0.5",
            "",
            ""
          ]
        },
        {
          "numero": 10,
          "cultivar": "GALO",
          "empresa": "SEEDCORP",
          "populacao": 68000,
          "id": "milho-pazinato-10",
          "linhaExcel": 15,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "SULF. ZINCO",
              "dose": "0.4"
            }
          ],
          "raw": [
            "10",
            "GALO",
            "SEEDCORP",
            "68000",
            "",
            "SULF. ZINCO",
            "0.4",
            "",
            ""
          ]
        },
        {
          "numero": 11,
          "cultivar": "NS 89",
          "empresa": "NIDERA",
          "populacao": 68000,
          "id": "milho-pazinato-11",
          "linhaExcel": 16,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "SULF. MG",
              "dose": "1.5"
            }
          ],
          "raw": [
            "11",
            "NS 89",
            "NIDERA",
            "68000",
            "",
            "SULF. MG",
            "1.5",
            "",
            ""
          ]
        },
        {
          "numero": 12,
          "cultivar": "FS 560",
          "empresa": "FORSEED",
          "populacao": 68000,
          "id": "milho-pazinato-12",
          "linhaExcel": 17,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            }
          ],
          "raw": [
            "12",
            "FS 560",
            "FORSEED",
            "68000",
            "",
            "BIOPARTNERS ADJ",
            "0.08",
            "",
            ""
          ]
        },
        {
          "numero": 13,
          "cultivar": "FS 650",
          "empresa": "FORSEED",
          "populacao": 68000,
          "id": "milho-pazinato-13",
          "linhaExcel": 18,
          "manejos": [],
          "raw": [
            "13",
            "FS 650",
            "FORSEED",
            "68000",
            "",
            "1ª FUNGICIDA",
            "DOSE/HA",
            "3ª FUNGICIDA",
            "DOSE/HA"
          ]
        },
        {
          "numero": 14,
          "cultivar": "FS 695",
          "empresa": "FORSEED",
          "populacao": 68000,
          "id": "milho-pazinato-14",
          "linhaExcel": 19,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "APROACH POWER",
              "dose": "0.6"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "AZIMUT",
              "dose": "0.8"
            }
          ],
          "raw": [
            "14",
            "FS 695",
            "FORSEED",
            "68000",
            "",
            "APROACH POWER",
            "0.6",
            "AZIMUT",
            "0.8"
          ]
        },
        {
          "numero": 15,
          "cultivar": "ST 9505",
          "empresa": "STINE",
          "populacao": 68000,
          "id": "milho-pazinato-15",
          "linhaExcel": 20,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "CLOFENAPIR",
              "dose": "1.2"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "ACETAMIPRIDO",
              "dose": "0.3"
            }
          ],
          "raw": [
            "15",
            "ST 9505",
            "STINE",
            "68000",
            "",
            "CLOFENAPIR",
            "1.2",
            "ACETAMIPRIDO",
            "0.3"
          ]
        },
        {
          "numero": 16,
          "cultivar": "ST 9801",
          "empresa": "STINE",
          "populacao": 68000,
          "id": "milho-pazinato-16",
          "linhaExcel": 21,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "INTREPIDI",
              "dose": "0.4"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "EXALT",
              "dose": "0.2"
            }
          ],
          "raw": [
            "16",
            "ST 9801",
            "STINE",
            "68000",
            "",
            "INTREPIDI",
            "0.4",
            "EXALT",
            "0.2"
          ]
        },
        {
          "numero": 17,
          "cultivar": "ST 9808",
          "empresa": "STINE",
          "populacao": 68000,
          "id": "milho-pazinato-17",
          "linhaExcel": 22,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "MULTIMOL",
              "dose": "0.1"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "PREMIO",
              "dose": "0.08"
            }
          ],
          "raw": [
            "17",
            "ST 9808",
            "STINE",
            "68000",
            "",
            "MULTIMOL",
            "0.1",
            "PREMIO",
            "0.08"
          ]
        },
        {
          "numero": 18,
          "cultivar": "ST 9717",
          "empresa": "STINE",
          "populacao": 68000,
          "id": "milho-pazinato-18",
          "linhaExcel": 23,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SULF.MG",
              "dose": "1.5"
            }
          ],
          "raw": [
            "18",
            "ST 9717",
            "STINE",
            "68000",
            "",
            "BORO 10 PLUS",
            "0.3",
            "SULF.MG",
            "1.5"
          ]
        },
        {
          "numero": 19,
          "cultivar": "K 7510",
          "empresa": "SUPRA",
          "populacao": 68000,
          "id": "milho-pazinato-19",
          "linhaExcel": 24,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SULF. MG",
              "dose": "2"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SUGAR",
              "dose": "1.2"
            }
          ],
          "raw": [
            "19",
            "K 7510",
            "SUPRA",
            "68000",
            "",
            "SULF. MG",
            "2",
            "SUGAR",
            "1.2"
          ]
        },
        {
          "numero": 20,
          "cultivar": "K 9606",
          "empresa": "SUPRA",
          "populacao": 68000,
          "id": "milho-pazinato-20",
          "linhaExcel": 25,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SULF. ZINCO",
              "dose": "0.4"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.4"
            }
          ],
          "raw": [
            "20",
            "K 9606",
            "SUPRA",
            "68000",
            "",
            "SULF. ZINCO",
            "0.4",
            "BORO 10 PLUS",
            "0.4"
          ]
        },
        {
          "numero": 21,
          "cultivar": "NK FEROZ",
          "empresa": "NK",
          "populacao": 68000,
          "id": "milho-pazinato-21",
          "linhaExcel": 26,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            }
          ],
          "raw": [
            "21",
            "NK FEROZ",
            "NK",
            "68000",
            "",
            "BIOPARTNERS ADJ",
            "0.08",
            "BIOPARTNERS ADJ",
            "0.08"
          ]
        },
        {
          "numero": 22,
          "cultivar": "NK 509",
          "empresa": "NK",
          "populacao": 68000,
          "id": "milho-pazinato-22",
          "linhaExcel": 27,
          "manejos": [],
          "raw": [
            "22",
            "NK 509",
            "NK",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 23,
          "cultivar": "NK 507",
          "empresa": "NK",
          "populacao": 68000,
          "id": "milho-pazinato-23",
          "linhaExcel": 28,
          "manejos": [],
          "raw": [
            "23",
            "NK 507",
            "NK",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 24,
          "cultivar": "NK 501",
          "empresa": "NK",
          "populacao": 68000,
          "id": "milho-pazinato-24",
          "linhaExcel": 29,
          "manejos": [],
          "raw": [
            "24",
            "NK 501",
            "NK",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 25,
          "cultivar": "NS 66",
          "empresa": "NIDERA",
          "populacao": 68000,
          "id": "milho-pazinato-25",
          "linhaExcel": 30,
          "manejos": [],
          "raw": [
            "25",
            "NS 66",
            "NIDERA",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 26,
          "cultivar": "NS 99",
          "empresa": "NIDERA",
          "populacao": 68000,
          "id": "milho-pazinato-26",
          "linhaExcel": 31,
          "manejos": [],
          "raw": [
            "26",
            "NS 99",
            "NIDERA",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 27,
          "cultivar": "AS 1868 (meia plantadeira)",
          "empresa": "AGROESTE",
          "populacao": 68000,
          "id": "milho-pazinato-27",
          "linhaExcel": 32,
          "manejos": [],
          "raw": [
            "27",
            "AS 1868 (meia plantadeira)",
            "AGROESTE",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 28,
          "cultivar": "DKB 356 (meia plantadeira)",
          "empresa": "DEKALB",
          "populacao": 68000,
          "id": "milho-pazinato-28",
          "linhaExcel": 33,
          "manejos": [],
          "raw": [
            "28",
            "DKB 356 (meia plantadeira)",
            "DEKALB",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 29,
          "cultivar": "LG 36790 (meia plantadeira)",
          "empresa": "LG",
          "populacao": 68000,
          "id": "milho-pazinato-29",
          "linhaExcel": 34,
          "manejos": [],
          "raw": [
            "29",
            "LG 36790 (meia plantadeira)",
            "LG",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 30,
          "cultivar": "DM 2890 (meia plantadeira)",
          "empresa": "DON MARIO",
          "populacao": 68000,
          "id": "milho-pazinato-30",
          "linhaExcel": 35,
          "manejos": [],
          "raw": [
            "30",
            "DM 2890 (meia plantadeira)",
            "DON MARIO",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 31,
          "cultivar": "DM 2877 (meia plantadeira)",
          "empresa": "DON MARIO",
          "populacao": 68000,
          "id": "milho-pazinato-31",
          "linhaExcel": 36,
          "manejos": [],
          "raw": [
            "31",
            "DM 2877 (meia plantadeira)",
            "DON MARIO",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "numero": 32,
          "cultivar": "DKB 360 (meia plantadeira)",
          "empresa": "DEKALB",
          "populacao": 68000,
          "id": "milho-pazinato-32",
          "linhaExcel": 37,
          "manejos": [],
          "raw": [
            "32",
            "DKB 360 (meia plantadeira)",
            "DEKALB",
            "68000",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ],
      "observacoes": [
        {
          "linhaExcel": 38,
          "titulo": "ADUBAÇÃO",
          "valores": [
            "ADUBAÇÃO",
            "",
            "JATO DIRIGIDO",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 39,
          "titulo": "250 Kg 12-40-00 + 10 S em pré-plantio.",
          "valores": [
            "250 Kg 12-40-00 + 10 S em pré-plantio.",
            "",
            "Azokop 2 doses/ha",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 40,
          "titulo": "200 Kg Sulfato de amônio em v2-v3.",
          "valores": [
            "200 Kg Sulfato de amônio em v2-v3.",
            "",
            "Tricodermil 100 ml/ha",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 41,
          "titulo": "220 Kg KCl parcelado.",
          "valores": [
            "220 Kg KCl parcelado.",
            "",
            "Veraneio 100 ml/ha",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 42,
          "titulo": "230 Kg Ureia parcelado.",
          "valores": [
            "230 Kg Ureia parcelado.",
            "",
            "Stingray 300 ml/ha",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ],
      "fonte": {
        "arquivo": "Teste de Cultivares 2026.xlsx",
        "aba": "MILHO PAZINATO"
      },
      "adubacao": [
        "250 Kg 12-40-00 + 10 S em pré-plantio.",
        "200 Kg Sulfato de amônio em v2-v3.",
        "220 Kg KCl parcelado.",
        "230 Kg Ureia parcelado."
      ],
      "jatoDirigido": [
        "Azokop 2 doses/ha",
        "Tricodermil 100 ml/ha",
        "Veraneio 100 ml/ha",
        "Stingray 300 ml/ha"
      ]
    },
    {
      "id": "milho-ivo",
      "nome": "MILHO IVO",
      "titulo": "TESTE DE CULTIVARES",
      "cultura": "MILHO",
      "produtor": "Ivo Barili",
      "plantio": "01/05/2026",
      "totalTratamentos": 18,
      "colunasOriginais": [
        "Nº",
        "CULTIVAR",
        "EMPRESA",
        "POPULAÇÃO",
        "PÓS-EMERGENTE",
        "DOSE/HA",
        "2ª FUNGICIDA",
        "DOSE/HA"
      ],
      "tratamentos": [
        {
          "numero": 1,
          "cultivar": "P 3707",
          "empresa": "PIONEER",
          "populacao": 70000,
          "id": "milho-ivo-1",
          "linhaExcel": 6,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "GLIFOSATO WG",
              "dose": "1.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "ADJUVANTE",
              "dose": "0.08"
            }
          ],
          "raw": [
            "1",
            "P 3707",
            "PIONEER",
            "70000",
            "",
            "GLIFOSATO WG",
            "1.5",
            "ADJUVANTE",
            "0.08"
          ]
        },
        {
          "numero": 2,
          "cultivar": "NS 89 (2 passadas)",
          "empresa": "NIDERA",
          "populacao": 70000,
          "id": "milho-ivo-2",
          "linhaExcel": 7,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "LANNATE",
              "dose": "1.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "2",
            "NS 89 (2 passadas)",
            "NIDERA",
            "70000",
            "",
            "LANNATE",
            "1.5",
            "SULF. MAGNÉSIO",
            "2"
          ]
        },
        {
          "numero": 3,
          "cultivar": "AG 8480",
          "empresa": "AGROCERES",
          "populacao": 70000,
          "id": "milho-ivo-3",
          "linhaExcel": 8,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "IMIDA 480",
              "dose": "0.3"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            }
          ],
          "raw": [
            "3",
            "AG 8480",
            "AGROCERES",
            "70000",
            "",
            "IMIDA 480",
            "0.3",
            "BORO 10 PLUS",
            "0.3"
          ]
        },
        {
          "numero": 4,
          "cultivar": "BS 3319",
          "empresa": "BOA SAFRA",
          "populacao": 70000,
          "id": "milho-ivo-4",
          "linhaExcel": 9,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "EXALT",
              "dose": "0.2"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "VIOVAM",
              "dose": "0.7"
            }
          ],
          "raw": [
            "4",
            "BS 3319",
            "BOA SAFRA",
            "70000",
            "",
            "EXALT",
            "0.2",
            "VIOVAM",
            "0.7"
          ]
        },
        {
          "numero": 5,
          "cultivar": "BS 364",
          "empresa": "BOA SAFRA",
          "populacao": 70000,
          "id": "milho-ivo-5",
          "linhaExcel": 10,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "MULTIMOL",
              "dose": "0.2"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "CLOROTALONIL",
              "dose": "1"
            }
          ],
          "raw": [
            "5",
            "BS 364",
            "BOA SAFRA",
            "70000",
            "",
            "MULTIMOL",
            "0.2",
            "CLOROTALONIL",
            "1"
          ]
        },
        {
          "numero": 6,
          "cultivar": "BS 376",
          "empresa": "BOA SAFRA",
          "populacao": 70000,
          "id": "milho-ivo-6",
          "linhaExcel": 11,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "CERTERO",
              "dose": "0.35"
            }
          ],
          "raw": [
            "6",
            "BS 376",
            "BOA SAFRA",
            "70000",
            "",
            "BORO 10 PLUS",
            "0.3",
            "CERTERO",
            "0.35"
          ]
        },
        {
          "numero": 7,
          "cultivar": "GALO",
          "empresa": "SEEDCORP",
          "populacao": 70000,
          "id": "milho-ivo-7",
          "linhaExcel": 12,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "MULTIKEL MN",
              "dose": "0.5"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "TALSTAR",
              "dose": "0.1"
            }
          ],
          "raw": [
            "7",
            "GALO",
            "SEEDCORP",
            "70000",
            "",
            "MULTIKEL MN",
            "0.5",
            "TALSTAR",
            "0.1"
          ]
        },
        {
          "numero": 8,
          "cultivar": "NS 66",
          "empresa": "NIDERA",
          "populacao": 70000,
          "id": "milho-ivo-8",
          "linhaExcel": 13,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "SULF. ZINCO",
              "dose": "0.4"
            },
            {
              "etapa": "2ª FUNGICIDA",
              "produto": "BACULOVÍRUS",
              "dose": "0.05"
            }
          ],
          "raw": [
            "8",
            "NS 66",
            "NIDERA",
            "70000",
            "",
            "SULF. ZINCO",
            "0.4",
            "BACULOVÍRUS",
            "0.05"
          ]
        },
        {
          "numero": 9,
          "cultivar": "NS 89",
          "empresa": "NIDERA",
          "populacao": 70000,
          "id": "milho-ivo-9",
          "linhaExcel": 14,
          "manejos": [
            {
              "etapa": "PÓS-EMERGENTE",
              "produto": "BIOPARTNERS ADJ",
              "dose": "0.08"
            }
          ],
          "raw": [
            "9",
            "NS 89",
            "NIDERA",
            "70000",
            "",
            "BIOPARTNERS ADJ",
            "0.08",
            "",
            ""
          ]
        },
        {
          "numero": 10,
          "cultivar": "NS 99",
          "empresa": "NIDERA",
          "populacao": 70000,
          "id": "milho-ivo-10",
          "linhaExcel": 15,
          "manejos": [],
          "raw": [
            "10",
            "NS 99",
            "NIDERA",
            "70000",
            "",
            "1ª FUNGICIDA",
            "DOSE/HA",
            "3ª FUNGICIDA",
            "DOSE/HA"
          ]
        },
        {
          "numero": 11,
          "cultivar": "F784-48",
          "empresa": "PIONEER",
          "populacao": 70000,
          "id": "milho-ivo-11",
          "linhaExcel": 16,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "TEBUCO 480",
              "dose": "0.3"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "ADJUVANTE",
              "dose": "0.08"
            }
          ],
          "raw": [
            "11",
            "F784-48",
            "PIONEER",
            "70000",
            "",
            "TEBUCO 480",
            "0.3",
            "ADJUVANTE",
            "0.08"
          ]
        },
        {
          "numero": 12,
          "cultivar": "F3261-48",
          "empresa": "PIONEER",
          "populacao": 70000,
          "id": "milho-ivo-12",
          "linhaExcel": 17,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "VESSARYA",
              "dose": "0.6"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            }
          ],
          "raw": [
            "12",
            "F3261-48",
            "PIONEER",
            "70000",
            "",
            "VESSARYA",
            "0.6",
            "SULF. MAGNÉSIO",
            "2"
          ]
        },
        {
          "numero": 13,
          "cultivar": "ST 9505",
          "empresa": "STINE",
          "populacao": 70000,
          "id": "milho-ivo-13",
          "linhaExcel": 18,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "MANCOZEB",
              "dose": "1"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "SANDAL 200",
              "dose": "0.3"
            }
          ],
          "raw": [
            "13",
            "ST 9505",
            "STINE",
            "70000",
            "",
            "MANCOZEB",
            "1",
            "SANDAL 200",
            "0.3"
          ]
        },
        {
          "numero": 14,
          "cultivar": "ST 9801",
          "empresa": "STINE",
          "populacao": 70000,
          "id": "milho-ivo-14",
          "linhaExcel": 19,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "CLOFENAPIR",
              "dose": "1.5"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "EXALT",
              "dose": "0.15"
            }
          ],
          "raw": [
            "14",
            "ST 9801",
            "STINE",
            "70000",
            "",
            "CLOFENAPIR",
            "1.5",
            "EXALT",
            "0.15"
          ]
        },
        {
          "numero": 15,
          "cultivar": "ST 9808",
          "empresa": "STINE",
          "populacao": 70000,
          "id": "milho-ivo-15",
          "linhaExcel": 20,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "INTREPIDI",
              "dose": "0.4"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "FORTIVANCE",
              "dose": "2"
            }
          ],
          "raw": [
            "15",
            "ST 9808",
            "STINE",
            "70000",
            "",
            "INTREPIDI",
            "0.4",
            "FORTIVANCE",
            "2"
          ]
        },
        {
          "numero": 16,
          "cultivar": "ST 9817",
          "empresa": "STINE",
          "populacao": 70000,
          "id": "milho-ivo-16",
          "linhaExcel": 21,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.3"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "CLOFENAPIR",
              "dose": "1.5"
            }
          ],
          "raw": [
            "16",
            "ST 9817",
            "STINE",
            "70000",
            "",
            "BORO 10 PLUS",
            "0.3",
            "CLOFENAPIR",
            "1.5"
          ]
        },
        {
          "numero": 17,
          "cultivar": "K 7510",
          "empresa": "SUPRA",
          "populacao": 70000,
          "id": "milho-ivo-17",
          "linhaExcel": 22,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SULF. MAGNÉSIO",
              "dose": "2"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "AZIMUT",
              "dose": "0.8"
            }
          ],
          "raw": [
            "17",
            "K 7510",
            "SUPRA",
            "70000",
            "",
            "SULF. MAGNÉSIO",
            "2",
            "AZIMUT",
            "0.8"
          ]
        },
        {
          "numero": 18,
          "cultivar": "K 9606",
          "empresa": "SUPRA",
          "populacao": 70000,
          "id": "milho-ivo-18",
          "linhaExcel": 23,
          "manejos": [
            {
              "etapa": "1ª FUNGICIDA",
              "produto": "SULF. ZINCO",
              "dose": "0.4"
            },
            {
              "etapa": "3ª FUNGICIDA",
              "produto": "BORO 10 PLUS",
              "dose": "0.4"
            }
          ],
          "raw": [
            "18",
            "K 9606",
            "SUPRA",
            "70000",
            "",
            "SULF. ZINCO",
            "0.4",
            "BORO 10 PLUS",
            "0.4"
          ]
        }
      ],
      "observacoes": [
        {
          "linhaExcel": 24,
          "titulo": "ADUBAÇÃO",
          "valores": [
            "ADUBAÇÃO",
            "",
            "JATO DIRIGIDO",
            "",
            "",
            "BIOPARTNERS ADJ",
            "0.08",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 25,
          "titulo": "250 Kg Superfosfato Simples a lanço.",
          "valores": [
            "250 Kg Superfosfato Simples a lanço.",
            "",
            "Azokop 2 doses/ha.",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 26,
          "titulo": "240 Kg 04-28-08 na linha.",
          "valores": [
            "240 Kg 04-28-08 na linha.",
            "",
            "Tricodermil 150 ml/ha.",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 27,
          "titulo": "100 Kg KCl pré-plantio + 100 kg em pós.",
          "valores": [
            "100 Kg KCl pré-plantio + 100 kg em pós.",
            "",
            "Veraneio 100 ml/ha.",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 28,
          "titulo": "180 Kg Ureia Vera em V1.",
          "valores": [
            "180 Kg Ureia Vera em V1.",
            "",
            "Stingray 300 ml/ha.",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "linhaExcel": 29,
          "titulo": "120 Kg + 80 Kg Ureia.",
          "valores": [
            "120 Kg + 80 Kg Ureia.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ],
      "fonte": {
        "arquivo": "Teste de Cultivares 2026.xlsx",
        "aba": "MILHO IVO"
      },
      "adubacao": [
        "250 Kg Superfosfato Simples a lanço.",
        "240 Kg 04-28-08 na linha.",
        "100 Kg KCl pré-plantio + 100 kg em pós.",
        "180 Kg Ureia Vera em V1.",
        "120 Kg + 80 Kg Ureia."
      ],
      "jatoDirigido": [
        "Azokop 2 doses/ha.",
        "Tricodermil 150 ml/ha.",
        "Veraneio 100 ml/ha.",
        "Stingray 300 ml/ha."
      ]
    }
  ],
  "cultivares": [
    {
      "cultivar": "AG 8480",
      "empresa": "AGROCERES",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "AS 1868 (meia plantadeira)",
      "empresa": "AGROESTE",
      "cultura": "MILHO",
      "ensaios": [
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "B 2701",
      "empresa": "BREVANTE",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "BS 3319",
      "empresa": "BOA SAFRA",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "BS 364",
      "empresa": "BOA SAFRA",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "BS 376",
      "empresa": "BOA SAFRA",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "DKB 356 (meia plantadeira)",
      "empresa": "DEKALB",
      "cultura": "MILHO",
      "ensaios": [
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "DKB 360 (meia plantadeira)",
      "empresa": "DEKALB",
      "cultura": "MILHO",
      "ensaios": [
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "DM 2877 (meia plantadeira)",
      "empresa": "DON MARIO",
      "cultura": "MILHO",
      "ensaios": [
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "DM 2890 (meia plantadeira)",
      "empresa": "DON MARIO",
      "cultura": "MILHO",
      "ensaios": [
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "F3261-48",
      "empresa": "PIONEER",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo"
      ]
    },
    {
      "cultivar": "F784-48",
      "empresa": "PIONEER",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo"
      ]
    },
    {
      "cultivar": "FS 560",
      "empresa": "FORSEED",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "FS 650",
      "empresa": "FORSEED",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "FS 695",
      "empresa": "FORSEED",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "GALO",
      "empresa": "SEEDCORP",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "K 7510",
      "empresa": "SUPRA",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "K 9606",
      "empresa": "SUPRA",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "LG 36790 (meia plantadeira)",
      "empresa": "LG",
      "cultura": "MILHO",
      "ensaios": [
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "NK 501",
      "empresa": "NK",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "NK 507",
      "empresa": "NK",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "NK 509",
      "empresa": "NK",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "NS 66",
      "empresa": "NIDERA",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "NS 89",
      "empresa": "NIDERA",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "NS 89 (2 passadas)",
      "empresa": "NIDERA",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo"
      ]
    },
    {
      "cultivar": "NS 99",
      "empresa": "NIDERA",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "Nk FEROZ",
      "empresa": "NK",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "P 3701",
      "empresa": "PIONEER",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung"
      ]
    },
    {
      "cultivar": "P 3707",
      "empresa": "PIONEER",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "P 3845",
      "empresa": "PIONEER",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "P F3261-48 (codificado)",
      "empresa": "PIONEER",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "P F784-48 (codificado)",
      "empresa": "PIONEER",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "ST 9505",
      "empresa": "STINE",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "ST 9717",
      "empresa": "STINE",
      "cultura": "MILHO",
      "ensaios": [
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "ST 9801",
      "empresa": "STINE",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "ST 9808",
      "empresa": "STINE",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo",
        "milho-jung",
        "milho-pazinato"
      ]
    },
    {
      "cultivar": "ST 9817",
      "empresa": "STINE",
      "cultura": "MILHO",
      "ensaios": [
        "milho-ivo"
      ]
    },
    {
      "cultivar": "78IX80",
      "empresa": "DON MARIO",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "78Ka42",
      "empresa": "STINE",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "78Ka72",
      "empresa": "STINE",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "79K80",
      "empresa": "DON MARIO",
      "cultura": "SOJA",
      "ensaios": [
        "soja-dors",
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "80I85",
      "empresa": "DON MARIO",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "80Ka72",
      "empresa": "STINE",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "80Ka72 ( 1 e 1/2)",
      "empresa": "STINE",
      "cultura": "SOJA",
      "ensaios": [
        "soja-dors"
      ]
    },
    {
      "cultivar": "80i85",
      "empresa": "DONMARIO",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-r-cunha"
      ]
    },
    {
      "cultivar": "84Ka92",
      "empresa": "STINE",
      "cultura": "SOJA",
      "ensaios": [
        "soja-dors",
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "AVRA 2478",
      "empresa": "AVRA",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "AVRA 2576",
      "empresa": "AVRA",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "BÔNUS",
      "empresa": "BASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-r-cunha"
      ]
    },
    {
      "cultivar": "BÔNUS",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "C 2795",
      "empresa": "CORDIUS",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-r-cunha"
      ]
    },
    {
      "cultivar": "C2795",
      "empresa": "CORDIUS",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "C2795 (15 linhas)",
      "empresa": "CORDIUS",
      "cultura": "SOJA",
      "ensaios": [
        "soja-dors"
      ]
    },
    {
      "cultivar": "CASTANHEIRA",
      "empresa": "TMG",
      "cultura": "SOJA",
      "ensaios": [
        "soja-dors"
      ]
    },
    {
      "cultivar": "EVOLUI",
      "empresa": "LATITUDE",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "GH 2581",
      "empresa": "GOLDEN HARVEST",
      "cultura": "SOJA",
      "ensaios": [
        "soja-dors",
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "HERA",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-dors",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "IMPETO",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "ITAÚBA",
      "empresa": "TMG",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-dors",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "LENDA",
      "empresa": "PAMPEANA",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "MÍTICA",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-dors",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "NEO 802",
      "empresa": "NEOGEN",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "NEO 810",
      "empresa": "NEOGEN",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-dors",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "NEO 850",
      "empresa": "NEOGEN",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "NS 7676",
      "empresa": "NIDERA",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "NS 8080",
      "empresa": "NIDERA",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-r-cunha"
      ]
    },
    {
      "cultivar": "NS8080",
      "empresa": "NIDERA",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "OLIMPO",
      "empresa": "BASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-r-cunha"
      ]
    },
    {
      "cultivar": "OLIMPO",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-r-cunha"
      ]
    },
    {
      "cultivar": "OLIMPO (CAJUEIRO)",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "OLIMPO (CELEIRO)",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "RAPTOR",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-jung",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "RAPTOR (15 linhas)",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-dors"
      ]
    },
    {
      "cultivar": "SERTANEJA",
      "empresa": "LATITUDE",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "ST 78Ka42",
      "empresa": "STINE",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-r-cunha"
      ]
    },
    {
      "cultivar": "ST 80Ka72",
      "empresa": "STINE",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho"
      ]
    },
    {
      "cultivar": "ST 84Ka92",
      "empresa": "STINE",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho"
      ]
    },
    {
      "cultivar": "TORMENTA",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-dors",
        "soja-jung",
        "soja-r-cunha",
        "soja-vendruscolo"
      ]
    },
    {
      "cultivar": "ÍMPETO",
      "empresa": "BRASMAX",
      "cultura": "SOJA",
      "ensaios": [
        "soja-agostinho",
        "soja-r-cunha"
      ]
    }
  ]
};
