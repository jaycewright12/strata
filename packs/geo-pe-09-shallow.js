/*
 * STRATA built-in pack: GEO PE · 9. Shallow Foundations (ASD/LRFD) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES HB §§3.4–3.5 / §3.2, NHI-06-089 Ch.8, DM 7.02 Ch.4, Vandevelde Foundation Engineering).
 * Do not redistribute.
 * Maps to PE topic 9 (Shallow Foundations) — conceptual + PE bench tracks.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-09-shallow",
  "title": "GEO PE · 9. Shallow Foundations (ASD/LRFD)",
  "version": "1.0.0",
  "description": "Personal use only. Original questions based on Jayce's study library (NCEES HB §§3.4–3.5 / §3.2, NHI-06-089 Ch.8, DM 7.02 Ch.4, Vandevelde Foundation Engineering). Do not redistribute.",
  "units": [
    {
      "id": "gpe09-shallow",
      "title": "9. Shallow Foundations (ASD/LRFD)",
      "blurb": "Bearing capacity and settlement (including induced stress) — PE depth ASD/LRFD.",
      "lessons": [
        {
          "id": "gpe09-shallow-1",
          "title": "Shallow foundations · Concepts",
          "minutes": 40,
          "xp": 60,
          "summary": "9A–9B: Terzaghi/Vesic factors, shape/GW corrections, eccentricity, consolidation & elastic settlement.",
          "items": [
            {
              "id": "gpe09-shallow-1-01",
              "type": "mcq",
              "label": "9A · General shear",
              "stem": "General shear bearing-failure mode (Vesic / NCEES) is most nearly associated with:",
              "choices": [
                {
                  "id": "a",
                  "text": "A well-defined failure surface and peak load in relatively incompressible soil (dense sand / stiff clay)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Continuous punching with no shear surface in very soft clay only as the definition of general shear"
                },
                {
                  "id": "c",
                  "text": "Failure that occurs only when φ′ = 0 and Nc = 0"
                },
                {
                  "id": "d",
                  "text": "Elastic settlement without any shear failure mechanism"
                }
              ],
              "explanation": "General shear: clear slip surfaces and peak resistance in firm/dense soils. Punching/local shear occur in compressible soils.",
              "miss": "General shear → dense/stiff soil, clear failure surface.",
              "fepe": "Modes: general / local / punching shear."
            },
            {
              "id": "gpe09-shallow-1-02",
              "type": "mcq",
              "label": "9A · Strip qult",
              "stem": "Ultimate bearing capacity for a concentrically loaded strip footing (NCEES) is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "qult = c Nc + q + 0.5 γ B  (missing bearing factors on q and γ terms)"
                },
                {
                  "id": "b",
                  "text": "qult = c Nc + q Nq + 0.5 γ Bf Nγ",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "qult = c + q + γ Bf only with all N = 1"
                },
                {
                  "id": "d",
                  "text": "qult = Ka γ H for footings"
                }
              ],
              "explanation": "NCEES §3.4.2: qult = c Nc + q Nq + 0.5 γ Bf Nγ. Omitting N factors or using earth-pressure formulas is wrong.",
              "miss": "qult = cNc + qNq + 0.5γB Nγ.",
              "fepe": "Terzaghi/Vesic strip: cNc + qNq + ½γBNγ."
            },
            {
              "id": "gpe09-shallow-1-03",
              "type": "mcq",
              "label": "9A · φ=0 Nc",
              "stem": "For undrained φu = 0 bearing capacity, NCEES/AASHTO Nc is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "9.0 for all shapes without correction"
                },
                {
                  "id": "b",
                  "text": "1.0"
                },
                {
                  "id": "c",
                  "text": "5.14",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "30.1"
                }
              ],
              "explanation": "Bearing-factor table: φ=0 → Nc=5.14, Nq=1, Nγ=0. Shape factors then adjust for squares/circles (sc etc.).",
              "miss": "φu=0: Nc=5.14 (then apply shape factors as required).",
              "fepe": "φ=0: Nc=5.14, Nq=1, Nγ=0."
            },
            {
              "id": "gpe09-shallow-1-04",
              "type": "mcq",
              "label": "9A · Groundwater correction",
              "stem": "When the water table is at the footing base (Dw = Df) in a sand, AASHTO/NCEES groundwater correction guidance most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always doubles Nγ"
                },
                {
                  "id": "b",
                  "text": "Sets both Cwg and Cwq to 0 so qult = 0"
                },
                {
                  "id": "c",
                  "text": "Ignores water because sand drains instantly during failure"
                },
                {
                  "id": "d",
                  "text": "Reduces the unit-weight (Nγ) term (Cwg = 0.5 at Dw=Df) while the surcharge term may remain Cwq = 1.0 per the handbook table",
                  "correct": true
                }
              ],
              "explanation": "NCEES GW correction table: Dw=0 → Cwg=Cwq=0.5; Dw=Df → Cwg=0.5, Cwq=1.0; deep WT → both 1.0.",
              "miss": "WT at base: cut Nγ term (Cwg=0.5); surcharge factor often 1.0.",
              "fepe": "GW factors Cwg, Cwq from NCEES table."
            },
            {
              "id": "gpe09-shallow-1-05",
              "type": "mcq",
              "label": "9A · Eccentricity",
              "stem": "For a footing with load eccentricity eB, the effective width used in bearing calculations is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "B′ = B − 2eB",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "B′ = B + 2eB"
                },
                {
                  "id": "c",
                  "text": "B′ = B/eB"
                },
                {
                  "id": "d",
                  "text": "B′ = eB only"
                }
              ],
              "explanation": "NCEES: B′ = B − 2eB (and L′ = L − 2eL). Effective area A′ = B′L′.",
              "miss": "B′ = B − 2e — do not add eccentricity.",
              "fepe": "Effective width B′ = B − 2e."
            },
            {
              "id": "gpe09-shallow-1-06",
              "type": "mcq",
              "label": "9A · Allowable bearing ASD",
              "stem": "ASD allowable bearing pressure is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "qall = qult × FS with FS typically < 1"
                },
                {
                  "id": "b",
                  "text": "qall = qult / FS (FS often ~3 for bearing, project-dependent)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "qall = qult with FS applied only to settlement"
                },
                {
                  "id": "d",
                  "text": "qall = 0.5 γ B without strength terms"
                }
              ],
              "explanation": "qall = qult/FS. Settlement may govern a lower allowable. FS~3 classic for bearing ASD (confirm specs).",
              "miss": "ASD: divide qult by FS — do not multiply.",
              "fepe": "qall = qult/FS (settlement may control)."
            },
            {
              "id": "gpe09-shallow-1-07",
              "type": "mcq",
              "label": "9B · NC consolidation",
              "stem": "For a normally consolidated clay (pc = po), one-dimensional consolidation settlement is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Sc = Cr H /(1+e0) log(pf/po) using recompression only"
                },
                {
                  "id": "b",
                  "text": "Sc = 0 because NC clays do not compress"
                },
                {
                  "id": "c",
                  "text": "Sc = [Cc H/(1+e0)] log10(pf/po)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Sc = mv σ′v H with mv = 0 always"
                }
              ],
              "explanation": "NC: Sc = Cc H/(1+e0) log(pf/po). Cr applies on the recompression branch for OC soils.",
              "miss": "NC uses Cc (virgin); OC uses Cr then Cc past pc.",
              "fepe": "NC: Sc = [Cc H/(1+e0)] log(pf/po)."
            },
            {
              "id": "gpe09-shallow-1-08",
              "type": "mcq",
              "label": "9B · OCR",
              "stem": "Overconsolidation ratio OCR is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "OCR = po/pc"
                },
                {
                  "id": "b",
                  "text": "OCR = Cc/Cr"
                },
                {
                  "id": "c",
                  "text": "OCR = Δp/po"
                },
                {
                  "id": "d",
                  "text": "OCR = pc/po",
                  "correct": true
                }
              ],
              "explanation": "OCR = pc/po. Inverting is a frequent PE slip.",
              "miss": "OCR = pc/po — preconsolidation over present effective stress.",
              "fepe": "OCR = pc/po."
            },
            {
              "id": "gpe09-shallow-1-09",
              "type": "mcq",
              "label": "9B · Immediate settlement",
              "stem": "Immediate (elastic) settlement of a footing on sand is most nearly estimated using:",
              "choices": [
                {
                  "id": "a",
                  "text": "Elastic theory / Schmertmann CPT-based methods (strain influence), not Cc log consolidation",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Only Terzaghi 1-D consolidation with Cc for sands"
                },
                {
                  "id": "c",
                  "text": "Only undrained φu=0 circular arc FS"
                },
                {
                  "id": "d",
                  "text": "Only OSHA trench charts"
                }
              ],
              "explanation": "Sand settlements are immediate/elastic (Schmertmann, elastic formulas). Cc consolidation is for saturated clays.",
              "miss": "Sand → elastic/Schmertmann; clay → consolidation Sc.",
              "fepe": "Sand settlement: elastic / Schmertmann."
            },
            {
              "id": "gpe09-shallow-1-10",
              "type": "mcq",
              "label": "9B · Stress increase",
              "stem": "Boussinesq / approximate 2:1 methods are used in shallow-foundation settlement most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Compute Ka for basement walls"
                },
                {
                  "id": "b",
                  "text": "Estimate Δσv with depth under the footing for consolidation/elastic settlement calculations",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Replace the need for γ and Df in bearing capacity"
                },
                {
                  "id": "d",
                  "text": "Determine OSHA soil type"
                }
              ],
              "explanation": "Induced vertical stress Δσ(z) feeds pf = po+Δσ in settlement calcs.",
              "miss": "2:1 / Boussinesq → Δσv(z) for settlement.",
              "fepe": "Δσv from Boussinesq or 2V:1H approx."
            },
            {
              "id": "gpe09-shallow-1-11",
              "type": "mcq",
              "label": "9A · Net vs gross",
              "stem": "Net ultimate bearing capacity is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "qult,net = qult + γ Df"
                },
                {
                  "id": "b",
                  "text": "qult,net = γ Df only"
                },
                {
                  "id": "c",
                  "text": "qult,net = qult − q (overburden at base level), so the pressure available above existing overburden",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "qult,net = qult × Nγ"
                }
              ],
              "explanation": "Net capacity subtracts the overburden q = γDf already present at foundation level; applied net pressure is compared to qult,net.",
              "miss": "qult,net = qult − γDf (conceptually).",
              "fepe": "Net bearing removes overburden q at founding level."
            },
            {
              "id": "gpe09-shallow-1-12",
              "type": "mcq",
              "label": "9A · Shape factor φ=0",
              "stem": "For a square footing on φu=0 clay, the shape correction on the cohesion term (sc) per NCEES/AASHTO is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "sc = 0.5 for all footings"
                },
                {
                  "id": "b",
                  "text": "sc = Nγ for φ=0"
                },
                {
                  "id": "c",
                  "text": "sc = 0 because Nγ = 0 implies no shape factor"
                },
                {
                  "id": "d",
                  "text": "sc = 1 + B/(5L) (≈ 1.2 for a square)",
                  "correct": true
                }
              ],
              "explanation": "NCEES/AASHTO: φ=0 → sc = 1 + B/(5L). Square ⇒ sc = 1.2. sg=1, sq=1 for φ=0.",
              "miss": "φ=0 square: sc = 1.2 (1+B/5L).",
              "fepe": "φ=0: sc = 1 + B/(5L)."
            },
            {
              "id": "gpe09-shallow-1-13",
              "type": "mcq",
              "label": "9B · Time rate Tv",
              "stem": "Time factor Tv for consolidation is most nearly related by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Tv = cv t / Hdr²",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Tv = Hdr² /(cv t)"
                },
                {
                  "id": "c",
                  "text": "Tv = cv Hdr / t"
                },
                {
                  "id": "d",
                  "text": "Tv = u / σ′v"
                }
              ],
              "explanation": "Tv = cv t / Hdr². Inverting is a common error; Hdr is drainage path.",
              "miss": "Tv = cv t / Hdr² — drainage path length matters.",
              "fepe": "Tv = cv t / Hdr²."
            },
            {
              "id": "gpe09-shallow-1-14",
              "type": "mcq",
              "label": "9B · Double drainage",
              "stem": "A 20-ft clay layer between two sand layers consolidates with double drainage. Hdr is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "20 ft"
                },
                {
                  "id": "b",
                  "text": "40 ft"
                },
                {
                  "id": "c",
                  "text": "10 ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "5 ft"
                }
              ],
              "explanation": "Double drainage: Hdr = H/2 = 10 ft. Using full H or 2H slows/speeds time wrongly.",
              "miss": "Double drain: Hdr = H/2.",
              "fepe": "Hdr = H (single) or H/2 (double)."
            },
            {
              "id": "gpe09-shallow-1-15",
              "type": "mcq",
              "label": "9A · Punching shear",
              "stem": "Punching shear bearing failure is most nearly expected in:",
              "choices": [
                {
                  "id": "a",
                  "text": "Dense gravel with Dr > 80% and general shear peak"
                },
                {
                  "id": "b",
                  "text": "Very compressible soils (loose sand / soft clay) where the footing punches with limited surface heave",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Only on bedrock with RQD = 100%"
                },
                {
                  "id": "d",
                  "text": "Only when using LRFD φ factors equal to 1.0"
                }
              ],
              "explanation": "Punching: compressible soils, local depression without full surface heave mechanism.",
              "miss": "Punching → soft/loose compressible ground.",
              "fepe": "Punching shear in compressible soils."
            }
          ]
        }
      ],
      "topic": 9
    },
    {
      "id": "gpe09-bench",
      "title": "PE bench · Shallow foundations",
      "bench": true,
      "lessons": [
        {
          "id": "gpe09-pe-1",
          "title": "Shallow foundations PE bench",
          "minutes": 25,
          "xp": 40,
          "summary": "qult strip, FS bearing, NC consolidation settlement, Boussinesq Δσ, eccentric B′.",
          "items": [
            {
              "id": "gpe09-pe-1-01",
              "type": "mcq",
              "pe": true,
              "label": "Strip qult φ=0",
              "given": "qult = c Nc + q Nq + 0.5γB Nγ; φ=0: Nc=5.14, Nq=1, Nγ=0",
              "vignette": "Strip footing, undrained clay su=c=1,000 psf, Df=4 ft, γ=120 pcf, φu=0. Neglect shape (strip).",
              "stem": "Most nearly, qult is:",
              "choices": [
                {
                  "id": "a",
                  "text": "5,620 psf",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "5,140 psf"
                },
                {
                  "id": "c",
                  "text": "1,480 psf"
                },
                {
                  "id": "d",
                  "text": "6,140 psf"
                }
              ],
              "work": [
                "q = γ Df = 120×4 = 480 psf",
                "qult = 1000×5.14 + 480×1 + 0 = 5,140+480 = 5,620 psf",
                "5,140 omits surcharge; 1,480 = su+γDf style; 6,140 arithmetic slip"
              ],
              "explanation": "qult = su Nc + γDf = 5,620 psf. Omitting q Nq understates by 480.",
              "miss": "Include surcharge q Nq even when Nγ=0.",
              "fepe": "φ=0 strip: qult = 5.14 su + γDf."
            },
            {
              "id": "gpe09-pe-1-02",
              "type": "mcq",
              "pe": true,
              "label": "qall from FS",
              "given": "qall = qult/FS",
              "vignette": "qult = 5,620 psf, FS = 3.0.",
              "stem": "Most nearly, qall is:",
              "choices": [
                {
                  "id": "a",
                  "text": "5,620 psf"
                },
                {
                  "id": "b",
                  "text": "1,873 psf",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "16,860 psf"
                },
                {
                  "id": "d",
                  "text": "3,000 psf"
                }
              ],
              "work": [
                "qall = 5620/3 = 1,873 psf",
                "5620 is qult; 16860 multiplies by FS; 3000 is FS as stress"
              ],
              "explanation": "Divide by FS → 1,873 psf.",
              "miss": "qall = qult/FS — do not multiply.",
              "fepe": "ASD qall = qult/FS."
            },
            {
              "id": "gpe09-pe-1-03",
              "type": "mcq",
              "pe": true,
              "label": "NC settlement",
              "given": "Sc = [Cc H/(1+e0)] log10(pf/po)",
              "vignette": "NC clay: Cc=0.40, e0=1.0, H=10 ft, po=2,000 psf, Δσ=2,000 psf (pf=4,000 psf).",
              "stem": "Most nearly, Sc is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.20 ft"
                },
                {
                  "id": "b",
                  "text": "2.00 ft"
                },
                {
                  "id": "c",
                  "text": "0.60 ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "0.30 ft"
                }
              ],
              "work": [
                "CcH/(1+e0)=2.0",
                "log10(2)≈0.301",
                "Sc≈0.60 ft",
                "1.20 doubles; 2.00 is coeff; 0.30 half log error"
              ],
              "explanation": "Sc≈0.60 ft. Forgetting log or (1+e0) are near-misses.",
              "miss": "Include log(pf/po) and divide by (1+e0).",
              "fepe": "Sc = [Cc H/(1+e0)] log(pf/po)."
            },
            {
              "id": "gpe09-pe-1-04",
              "type": "mcq",
              "pe": true,
              "label": "Effective width",
              "given": "B′ = B − 2e",
              "vignette": "Footing B = 10 ft, eccentricity e = 1.0 ft along B.",
              "stem": "Most nearly, B′ is:",
              "choices": [
                {
                  "id": "a",
                  "text": "12 ft"
                },
                {
                  "id": "b",
                  "text": "9 ft"
                },
                {
                  "id": "c",
                  "text": "10 ft"
                },
                {
                  "id": "d",
                  "text": "8 ft",
                  "correct": true
                }
              ],
              "work": [
                "B′ = 10 − 2×1 = 8 ft",
                "12 adds 2e; 9 uses B−e; 10 ignores e"
              ],
              "explanation": "B′=B−2e=8 ft.",
              "miss": "Subtract 2e, not e.",
              "fepe": "B′ = B − 2e."
            },
            {
              "id": "gpe09-pe-1-05",
              "type": "mcq",
              "pe": true,
              "label": "2:1 stress increase",
              "given": "Approximate 2V:1H: Δσ = Q /[(B+z)(L+z)] for rectangle",
              "vignette": "Column load Q = 400 kip on 4 ft × 4 ft footing. Estimate Δσ at z = 8 ft below footing base (2:1).",
              "stem": "Most nearly, Δσ is:",
              "choices": [
                {
                  "id": "a",
                  "text": "4.0 ksf"
                },
                {
                  "id": "b",
                  "text": "25 ksf"
                },
                {
                  "id": "c",
                  "text": "1.0 ksf"
                },
                {
                  "id": "d",
                  "text": "2.8 ksf",
                  "correct": true
                }
              ],
              "work": [
                "B+z=L+z=12; Δσ=400/144≈2.8 ksf",
                "25 ksf = Q/(B L) contact; 4.0 and 1.0 near-miss spreads"
              ],
              "explanation": "2:1 spreads to 12×12; Δσ≈2.8 ksf. Using footing area alone gives contact pressure 25 ksf.",
              "miss": "2:1: add z to B and L before dividing Q.",
              "fepe": "2V:1H Δσ = Q/[(B+z)(L+z)]."
            }
          ]
        }
      ],
      "topic": 9
    }
  ]
});
