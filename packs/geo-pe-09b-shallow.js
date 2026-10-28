/*
 * STRATA built-in pack: GEO PE · 9b. Shallow Foundations (Expansion) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 9 — conceptual + PE bench tracks (expansion).
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-09b-shallow",
  "title": "GEO PE · 9b. Shallow Foundations (Expansion)",
  "version": "1.0.0",
  "description": "Personal use only. Original expansion questions based on Jayce's study library (NHI-06-089 Ch.8, DM 7.02 Ch.4, NCEES HB Ch.3.4–3.5, Vandevelde Foundations). Do not redistribute. Complements geo-pe-09-shallow.",
  "units": [
    {
      "id": "gpe09b-shallow",
      "title": "9b. Shallow Foundations · Expansion",
      "blurb": "Bearing factors, local shear, deep WT, inclined loads, OC Cr settlement, 2:1 stress, secondary compression, embedment, U–Tv, net qall, elastic I, shape sc, preload, punching, layered Sc sum.",
      "lessons": [
        {
          "id": "gpe09b-shallow-1",
          "title": "Shallow foundations · Concepts (expansion)",
          "minutes": 40,
          "xp": 60,
          "summary": "Fifteen expansion items across 9A–9B.",
          "items": [
            {
              "id": "gpe09b-shallow-1-01",
              "type": "mcq",
              "label": "9A · Terzaghi factors",
              "stem": "In the Terzaghi/Vesic bearing-capacity equation, Nc, Nq, and Nγ most nearly depend on:",
              "choices": [
                {
                  "id": "a",
                  "text": "Friction angle φ′ (and the selected bearing-capacity theory / shape-depth factors separately)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Only the water content w"
                },
                {
                  "id": "c",
                  "text": "Only Gs"
                },
                {
                  "id": "d",
                  "text": "Only the footing color"
                }
              ],
              "explanation": "Bearing-capacity factors are φ′-dependent; shape/depth/inclination are additional modifiers.",
              "miss": "Nc,Nq,Nγ = f(φ′).",
              "fepe": "Bearing factors from φ′."
            },
            {
              "id": "gpe09b-shallow-1-02",
              "type": "mcq",
              "label": "9A · Local shear",
              "stem": "Local shear bearing failure is most nearly associated with:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only dense sand with clear wedge failure"
                },
                {
                  "id": "b",
                  "text": "Intermediate compressibility soils — peak φ′ is reduced in analysis (classical Terzaghi local-shear adjustment)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Only intact rock"
                },
                {
                  "id": "d",
                  "text": "OSHA Type A clay exclusively"
                }
              ],
              "explanation": "Local shear: use reduced φ′ (and c) in classical treatment for compressible soils.",
              "miss": "Local shear → reduced strength parameters.",
              "fepe": "Local shear: compressible soils; reduced φ′."
            },
            {
              "id": "gpe09b-shallow-1-03",
              "type": "mcq",
              "label": "9A · Groundwater Dw > B",
              "stem": "When the water table is deeper than about B below the footing base in sand, the groundwater correction to Nγ most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always forces γ′ for the entire profile"
                },
                {
                  "id": "b",
                  "text": "Sets Nγ = 0"
                },
                {
                  "id": "c",
                  "text": "Approaches no reduction (use moist/dry γ above) — WT too deep to affect the failure zone strongly",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Requires Site Class F"
                }
              ],
              "explanation": "Deep WT (≳ B below base) → little effect on bearing γ terms.",
              "miss": "Deep WT → little Nγ reduction.",
              "fepe": "WT ≫ B below base: minimal GW correction."
            },
            {
              "id": "gpe09b-shallow-1-04",
              "type": "mcq",
              "label": "9A · Inclined load",
              "stem": "An inclined resultant on a footing most nearly requires:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ignoring inclination because only vertical qult matters"
                },
                {
                  "id": "b",
                  "text": "Increasing Nγ without limit"
                },
                {
                  "id": "c",
                  "text": "Using only pile group efficiency"
                },
                {
                  "id": "d",
                  "text": "Inclination factors / reduced vertical capacity (or check sliding) because the load is not purely normal",
                  "correct": true
                }
              ],
              "explanation": "Inclined loads reduce bearing capacity via inclination factors and may govern sliding.",
              "miss": "Inclined load → reduce qult / check sliding.",
              "fepe": "Inclined footing loads: inclination factors."
            },
            {
              "id": "gpe09b-shallow-1-05",
              "type": "mcq",
              "label": "9B · OC consolidation settlement",
              "stem": "For overconsolidated clay with (po+Δσ) < pc, primary consolidation settlement most nearly uses:",
              "choices": [
                {
                  "id": "a",
                  "text": "Cr (recompression) in Sc = [Cr H/(1+e0)] log10((po+Δσ)/po)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Cc on the virgin curve even below pc"
                },
                {
                  "id": "c",
                  "text": "su from UU only"
                },
                {
                  "id": "d",
                  "text": "Hazen k"
                }
              ],
              "explanation": "Below pc, recompression index Cr applies; Cc for virgin compression when stress exceeds pc.",
              "miss": "OC below pc → Cr.",
              "fepe": "OC settlement (below pc): use Cr."
            },
            {
              "id": "gpe09b-shallow-1-06",
              "type": "mcq",
              "label": "9B · 2:1 stress increase",
              "stem": "The approximate 2:1 method for vertical stress increase under a footing most nearly spreads load at:",
              "choices": [
                {
                  "id": "a",
                  "text": "1:1 from the edge only with no depth term"
                },
                {
                  "id": "b",
                  "text": "2 vertical : 1 horizontal each side (Δσ = Q / ((B+z)(L+z)) for rectangles)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "10:1 always"
                },
                {
                  "id": "d",
                  "text": "Only Boussinesq charts with no approximation allowed on PE"
                }
              ],
              "explanation": "2:1 rule: width increases by z on each side total (B+z).",
              "miss": "2V:1H stress spread.",
              "fepe": "2:1 method: Δσ = Q/((B+z)(L+z))."
            },
            {
              "id": "gpe09b-shallow-1-07",
              "type": "mcq",
              "label": "9B · Secondary compression",
              "stem": "Secondary compression (creep) settlement is most nearly significant in:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only dense clean gravel"
                },
                {
                  "id": "b",
                  "text": "Only intact basalt"
                },
                {
                  "id": "c",
                  "text": "Highly organic / peaty and some soft clays — continues after primary excess u dissipates",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Never in any clay"
                }
              ],
              "explanation": "Secondary compression important in organics and some clays after primary.",
              "miss": "Secondary = creep after primary.",
              "fepe": "Secondary compression: organics/soft clays."
            },
            {
              "id": "gpe09b-shallow-1-08",
              "type": "mcq",
              "label": "9A · Embedment benefit",
              "stem": "Increasing footing embedment Df in a c′–φ′ soil most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always decreases capacity"
                },
                {
                  "id": "b",
                  "text": "Affects only permeability"
                },
                {
                  "id": "c",
                  "text": "Eliminates all settlement"
                },
                {
                  "id": "d",
                  "text": "Increases qult through the overburden (Nq) term and may help frost/scour — within practical limits",
                  "correct": true
                }
              ],
              "explanation": "Df contributes γ Df Nq (and depth factors).",
              "miss": "Deeper embedment → higher Nq contribution.",
              "fepe": "Embedment helps via Nq overburden term."
            },
            {
              "id": "gpe09b-shallow-1-09",
              "type": "mcq",
              "label": "9B · Time rate U%",
              "stem": "Average degree of consolidation U for one-dimensional consolidation is most nearly related to time factor Tv by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Published U–Tv relationships (e.g., U ≈ √(4Tv/π) for U < ~60%; series solutions at higher U)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "U = Tv always exactly"
                },
                {
                  "id": "c",
                  "text": "U = 1 − Tv"
                },
                {
                  "id": "d",
                  "text": "U = cv only"
                }
              ],
              "explanation": "U is a function of Tv; approximate √ formula for early stage, charts/series later.",
              "miss": "U = f(Tv), not U=Tv.",
              "fepe": "Consolidation U from Tv charts/formulas."
            },
            {
              "id": "gpe09b-shallow-1-10",
              "type": "mcq",
              "label": "9A · Net allowable",
              "stem": "Net allowable bearing pressure most nearly means:",
              "choices": [
                {
                  "id": "a",
                  "text": "Gross ultimate with no FS"
                },
                {
                  "id": "b",
                  "text": "Allowable increase in pressure at foundation level beyond the existing overburden (qult,net / FS), used with net applied loads",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Unit weight of concrete only"
                },
                {
                  "id": "d",
                  "text": "SPT N in blows/ft"
                }
              ],
              "explanation": "Net qall is the allowable pressure increment above existing overburden.",
              "miss": "Net vs gross bearing.",
              "fepe": "Net qall = allowable pressure increase."
            },
            {
              "id": "gpe09b-shallow-1-11",
              "type": "mcq",
              "label": "9B · Influence factor settlement",
              "stem": "Elastic settlement δ = q B (1−ν²)/E × I most nearly uses I as:",
              "choices": [
                {
                  "id": "a",
                  "text": "The liquidity index"
                },
                {
                  "id": "b",
                  "text": "The group index GI"
                },
                {
                  "id": "c",
                  "text": "An influence factor depending on footing shape, rigidity, and depth (Steinbrenner/Girault-type charts)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Always exactly 1.0 for all footings"
                }
              ],
              "explanation": "I captures shape/rigidity/depth effects in elastic settlement.",
              "miss": "I = settlement influence factor.",
              "fepe": "Elastic settlement: δ ∝ qB I / E."
            },
            {
              "id": "gpe09b-shallow-1-12",
              "type": "mcq",
              "label": "9A · Strip vs square Nc",
              "stem": "For φu=0 clay, going from strip to square footing most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Decreases Nc to zero"
                },
                {
                  "id": "b",
                  "text": "Has no shape effect ever"
                },
                {
                  "id": "c",
                  "text": "Converts the problem to pile design only"
                },
                {
                  "id": "d",
                  "text": "Increases the cohesion bearing term via shape factor sc > 1 (e.g., sc = 1.2 for square in common NCEES forms)",
                  "correct": true
                }
              ],
              "explanation": "Shape factor sc raises the cNc term for squares/circles vs strips.",
              "miss": "Square sc > 1 on cNc.",
              "fepe": "φ=0 square: sc increases cohesion term."
            },
            {
              "id": "gpe09b-shallow-1-13",
              "type": "mcq",
              "label": "9B · Preloading for settlement",
              "stem": "Preloading a soft clay site before building is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Complete primary consolidation under temporary surcharge so post-construction settlements under service loads are reduced",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Increase e0 to maximize future settlement"
                },
                {
                  "id": "c",
                  "text": "Eliminate the need for any drainage layer forever without design"
                },
                {
                  "id": "d",
                  "text": "Replace classification tests"
                }
              ],
              "explanation": "Preload consolidates clay before the structure — remaining Δσ causes less virgin compression.",
              "miss": "Preload exhausts settlement early.",
              "fepe": "Preload: consolidate before building."
            },
            {
              "id": "gpe09b-shallow-1-14",
              "type": "mcq",
              "label": "9A · Punching in sand",
              "stem": "Punching shear bearing failure in sand is most nearly associated with:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only dense sand with surface heave wedge"
                },
                {
                  "id": "b",
                  "text": "Loose compressible sands — failure surfaces do not develop a clear general-shear wedge to the surface",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Only φ′ > 45° rock"
                },
                {
                  "id": "d",
                  "text": "OSHA trench cave-in only"
                }
              ],
              "explanation": "Punching: loose/compressible — deep failure without surface heave wedge.",
              "miss": "Loose sand → punching.",
              "fepe": "Punching shear: loose compressible sand."
            },
            {
              "id": "gpe09b-shallow-1-15",
              "type": "mcq",
              "label": "9B · Layered settlement sum",
              "stem": "When several compressible layers exist under a footing, total primary consolidation settlement is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only the top layer ever"
                },
                {
                  "id": "b",
                  "text": "The maximum of layer settlements (not the sum)"
                },
                {
                  "id": "c",
                  "text": "The sum of layer settlements, each with its own H, e0, Cc/Cr, po, and Δσ at mid-layer",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Independent of Δσ"
                }
              ],
              "explanation": "Sum Sc over layers with layer-specific parameters and mid-layer Δσ.",
              "miss": "Total Sc = Σ Sc,layer.",
              "fepe": "Layered settlement: sum mid-layer Sc values."
            }
          ]
        }
      ],
      "topic": 9
    },
    {
      "id": "gpe09b-bench",
      "title": "PE bench · Shallow (expansion)",
      "bench": true,
      "blurb": "φ=0 qult, qall, OC Sc, B′, 2:1 Δσ.",
      "lessons": [
        {
          "id": "gpe09b-pe-1",
          "title": "Shallow · PE numbers (expansion)",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth shallow-foundation calculations.",
          "items": [
            {
              "id": "gpe09b-pe-1-01",
              "type": "mcq",
              "label": "Strip qult φ=0",
              "stem": "Most nearly, qult is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1,000 psf (su only)"
                },
                {
                  "id": "b",
                  "text": "9,140 psf (used Nc=9 without shape)"
                },
                {
                  "id": "c",
                  "text": "3,140 psf (forgot overburden)"
                },
                {
                  "id": "d",
                  "text": "5,140 psf",
                  "correct": true
                }
              ],
              "explanation": "qult=su Nc sc + γ Df; strip sc=1, Nc=5.14 → 5.14*1000+100*4=5,140+400=5,540. Want 5140: Df=0 or γDf small. Use Df=0: qult=5.14*1000=5,140.",
              "miss": "φu=0 strip: qult = su Nc (+ overburden if Df>0).",
              "fepe": "φ=0 strip qult = 5.14 su (+q).",
              "pe": true,
              "given": "φu=0 strip: Nc=5.14; qult = su Nc + γ Df (sc=1 for strip)",
              "vignette": "su=1,000 psf; Df=0 (surface footing); strip footing.",
              "work": [
                "qult=1,000×5.14=5,140 psf"
              ]
            },
            {
              "id": "gpe09b-pe-1-02",
              "type": "mcq",
              "label": "qall from FS",
              "stem": "Most nearly, qall is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1,713 psf",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "5,140 psf (qult without FS)"
                },
                {
                  "id": "c",
                  "text": "2,570 psf (FS=2)"
                },
                {
                  "id": "d",
                  "text": "1,028 psf (FS=5)"
                }
              ],
              "explanation": "qall=qult/FS=5,140/3≈1,713.",
              "miss": "qall = qult / FS.",
              "fepe": "ASD qall = qult / FS.",
              "pe": true,
              "given": "qall = qult / FS",
              "vignette": "qult=5,140 psf; FS=3.0.",
              "work": [
                "qall=5,140/3≈1,713 psf"
              ]
            },
            {
              "id": "gpe09b-pe-1-03",
              "type": "mcq",
              "label": "OC settlement Cr",
              "stem": "Most nearly, Sc is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.80 ft (used Cc=0.40)"
                },
                {
                  "id": "b",
                  "text": "0.20 ft",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "0.40 ft (forgot /(1+e0))"
                },
                {
                  "id": "d",
                  "text": "0.10 ft (half)"
                }
              ],
              "explanation": "Sc=[Cr H/(1+e0)]log10((po+Δσ)/po)=[0.08×20/1.6]log10(1.5)=1.0×0.176=0.176≈0.18. Retune Cr=0.10, H=16, e0=0.60, ratio=2: [0.1*16/1.6]*0.301=1.0*0.301=0.301. Want 0.20: [0.08*15/1.5]*log10(1.5)=0.8*0.176=0.141. Use Cr=0.10, H=20, e0=1.0, (po+Δσ)/po=1.5: [0.1*20/2]*0.176=1.0*0.176=0.176≈0.18. Label 0.18? Use 0.20 with Cr=0.12, H=20, e0=1.0, log1.5: 1.2*0.176=0.211≈0.20.",
              "miss": "Below pc use Cr, not Cc.",
              "fepe": "OC Sc = [Cr H/(1+e0)] log((po+Δσ)/po).",
              "pe": true,
              "given": "For (po+Δσ)<pc: Sc = [Cr H/(1+e0)] log10((po+Δσ)/po)",
              "vignette": "H=20 ft; e0=1.0; Cr=0.12; Cc=0.48; po=2,000 psf; Δσ=1,000 psf; pc=4,000 psf.",
              "work": [
                "(po+Δσ)<pc → Cr",
                "log10(1.5)≈0.176",
                "Sc=0.12×20/2.0×0.176=1.2×0.176≈0.21 ≈ 0.20 ft"
              ]
            },
            {
              "id": "gpe09b-pe-1-04",
              "type": "mcq",
              "label": "Effective width",
              "stem": "Most nearly, B′ is:",
              "choices": [
                {
                  "id": "a",
                  "text": "8.0 ft (B without eccentricity)"
                },
                {
                  "id": "b",
                  "text": "4.0 ft (B−2e)"
                },
                {
                  "id": "c",
                  "text": "6.0 ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "7.0 ft (B−e/2)"
                }
              ],
              "explanation": "B′=B−2e=8−2×1=6 — wait that's 6 which is a. Want key c = B−2e result as 6... Put 6.0 as c.",
              "miss": "B′ = B − 2e for eccentricity along B.",
              "fepe": "Effective width B′ = B − 2e.",
              "pe": true,
              "given": "B′ = B − 2e",
              "vignette": "Footing width B=8.0 ft; load eccentricity eB=1.0 ft.",
              "work": [
                "B′=8−2×1=6.0 ft"
              ]
            },
            {
              "id": "gpe09b-pe-1-05",
              "type": "mcq",
              "label": "2:1 stress increase",
              "stem": "Most nearly, Δσ at depth z is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1,200 psf (Q/B² at base)"
                },
                {
                  "id": "b",
                  "text": "500 psf (slip)"
                },
                {
                  "id": "c",
                  "text": "2,000 psf"
                },
                {
                  "id": "d",
                  "text": "800 psf",
                  "correct": true
                }
              ],
              "explanation": "Δσ=Q/(B+z)² for square=120/(10+5)² wait Q in kips: 120 kips / (8+4)² = 120/144=0.833 ksf=833 psf≈800. Key should be d with 800.",
              "miss": "Square 2:1: Δσ = Q / (B+z)².",
              "fepe": "2:1 square: Δσ = Q/(B+z)².",
              "pe": true,
              "given": "Square footing 2:1: Δσ = Q / (B + z)²",
              "vignette": "Q=120 kips; B=8 ft; z=4 ft below base.",
              "work": [
                "B+z=12 ft",
                "Δσ=120/144=0.833 ksf≈833 psf ≈ 800 psf"
              ]
            }
          ]
        }
      ],
      "topic": 9
    }
  ]
});
