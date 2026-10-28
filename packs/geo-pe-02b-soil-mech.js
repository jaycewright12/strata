/*
 * STRATA built-in pack: GEO PE · 2b. Soil Mechanics, Lab Testing & Analysis (Expansion) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 2 — conceptual + PE bench tracks (expansion).
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-02b-soil-mech",
  "title": "GEO PE · 2b. Soil Mechanics, Lab Testing & Analysis (Expansion)",
  "version": "1.0.0",
  "description": "Personal use only. Original expansion questions based on Jayce's study library (NCEES PE Civil Reference Handbook v2.1 Ch. 3.2–3.3 / 3.8–3.9, UFC 3-220-10, FHWA NHI-06-088, Vandevelde Soil Mechanics, EM 1110-2-1902). Do not redistribute. Complements geo-pe-02-soil-mech; not stem duplicates.",
  "units": [
    {
      "id": "gpe02b-soil",
      "title": "2b. Soil Mechanics · Expansion",
      "blurb": "Additional PE-depth coverage of 2A–2E: porosity, e from γd, Dr, activity, sulfates, Ko, capillary suction, Boussinesq, OCR, NC settlement, residual strength, CU vs UU, Darcy, permeameter selection, γsat.",
      "lessons": [
        {
          "id": "gpe02b-soil-1",
          "title": "Soil mechanics · Concepts (expansion)",
          "minutes": 40,
          "xp": 60,
          "summary": "Fifteen original expansion items across 2A–2E — n from e, e from γd, Dr, activity, sulfate vs concrete, Jaky Ko, capillary u<0, Boussinesq Δσz, OCR, NC Sc formula, residual strength, CU for c′φ′, Darcy scaling, constant-head selection, γsat.",
          "items": [
            {
              "id": "gpe02b-soil-1-01",
              "type": "mcq",
              "label": "2A · Porosity from e",
              "stem": "A soil has void ratio e = 0.72. Most nearly, the porosity n is:",
              "choices": [
                {
                  "id": "a",
                  "text": "42%",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "72% (reporting e as n)"
                },
                {
                  "id": "c",
                  "text": "58% (n = 1/(1+e))"
                },
                {
                  "id": "d",
                  "text": "28% (arbitrary offset from e)"
                }
              ],
              "explanation": "NCEES phase relations: n = e/(1+e) = 0.72/1.72 ≈ 0.419 → 42%. Reporting e as percent or using 1/(1+e) are common slips.",
              "miss": "n = e/(1+e), not e itself.",
              "fepe": "Porosity n = e/(1+e)."
            },
            {
              "id": "gpe02b-soil-1-02",
              "type": "mcq",
              "label": "2A · e from Gs and γd",
              "stem": "A dry sand has Gs = 2.68 and dry unit weight γd = 105 pcf. With γw = 62.4 pcf, most nearly the void ratio e is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.39 (e = Gs γw/γd without subtracting 1)"
                },
                {
                  "id": "b",
                  "text": "0.59",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "1.59 (reporting 1+e)"
                },
                {
                  "id": "d",
                  "text": "0.25 (γd/γw − Gs)"
                }
              ],
              "explanation": "γd = Gs γw/(1+e) ⇒ 1+e = Gs γw/γd = 2.68×62.4/105 ≈ 1.593 ⇒ e ≈ 0.59. Forgetting to subtract 1 or reporting 1+e are near-misses.",
              "miss": "From γd: e = Gs γw/γd − 1.",
              "fepe": "e = Gs γw/γd − 1."
            },
            {
              "id": "gpe02b-soil-1-03",
              "type": "mcq",
              "label": "2A · Relative density Dr",
              "stem": "A sand has emax = 0.85, emin = 0.45, and in-situ e = 0.57. Most nearly, the relative density Dr is:",
              "choices": [
                {
                  "id": "a",
                  "text": "33% ((e − emin)/(emax − emin) — inverted density sense)"
                },
                {
                  "id": "b",
                  "text": "85% (reporting emax as Dr)"
                },
                {
                  "id": "c",
                  "text": "70%",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "40% (reporting only emax − emin as a percent)"
                }
              ],
              "explanation": "Dr = (emax − e)/(emax − emin) = (0.85 − 0.57)/(0.85 − 0.45) = 0.28/0.40 = 0.70 → 70%. Using (e−emin) in the numerator inverts the density meaning.",
              "miss": "Dr = (emax − e)/(emax − emin); denser → higher Dr.",
              "fepe": "Relative density uses (emax − e) in the numerator."
            },
            {
              "id": "gpe02b-soil-1-04",
              "type": "mcq",
              "label": "2A · Activity",
              "stem": "A clay has PI = 36 and clay fraction (<2 μm) = 45% by weight. Skempton’s activity A = PI / (clay fraction %) is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.25 (PI ÷ 0.45 treating clay % as a fraction)"
                },
                {
                  "id": "b",
                  "text": "36 (equating activity to PI)"
                },
                {
                  "id": "c",
                  "text": "0.45 (reporting clay fraction as activity)"
                },
                {
                  "id": "d",
                  "text": "0.80",
                  "correct": true
                }
              ],
              "explanation": "Activity A = PI/(percent clay) = 36/45 = 0.80. Dividing by 0.45 instead of 45, or equating A to PI, are PE traps.",
              "miss": "A = PI / (% clay as 0–100), not /0.xx fraction.",
              "fepe": "Activity A = PI / (clay fraction %)."
            },
            {
              "id": "gpe02b-soil-1-05",
              "type": "mcq",
              "label": "2B · Sulfate / concrete",
              "stem": "High soluble sulfate content in soil/groundwater is of greatest concern for which element of a shallow foundation system?",
              "choices": [
                {
                  "id": "a",
                  "text": "Portland-cement concrete (sulfate attack on the cement paste) — select sulfate-resistant cement / mix design per exposure",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Only the reinforcing steel, never the concrete"
                },
                {
                  "id": "c",
                  "text": "Only timber lagging temporary works"
                },
                {
                  "id": "d",
                  "text": "HDPE geomembrane liners exclusively"
                }
              ],
              "explanation": "NCEES/NHI chemical aggressiveness: soluble sulfates primarily attack concrete (cement hydration products). Steel corrosion is driven more by resistivity/pH/chlorides.",
              "miss": "Sulfates → concrete durability; chlorides/low resistivity → steel.",
              "fepe": "High SO4 → sulfate-resistant concrete provisions."
            },
            {
              "id": "gpe02b-soil-1-06",
              "type": "mcq",
              "label": "2C · Jaky Ko",
              "stem": "For a normally consolidated sand with φ′ = 30°, Jaky’s approximation Ko = 1 − sin φ′ is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.67 (1 − φ′/90 style)"
                },
                {
                  "id": "b",
                  "text": "0.50",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "0.33 (using sin φ′ alone as Ko)"
                },
                {
                  "id": "d",
                  "text": "1.00 (at-rest taken as σ′h = σ′v)"
                }
              ],
              "explanation": "Ko = 1 − sin 30° = 1 − 0.50 = 0.50. Reporting sin φ′ or Ko = 1 are near-misses.",
              "miss": "Jaky: Ko = 1 − sin φ′ for NC sand.",
              "fepe": "NC sand: Ko ≈ 1 − sin φ′."
            },
            {
              "id": "gpe02b-soil-1-07",
              "type": "mcq",
              "label": "2C · Capillary suction",
              "stem": "Above a static water table in fine sand/silt, continuous capillary saturation can exist. Relative to hydrostatic from the WT upward, pore pressure in that capillary fringe is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always equal to +γw z measured upward from the WT"
                },
                {
                  "id": "b",
                  "text": "Zero everywhere above the WT by definition"
                },
                {
                  "id": "c",
                  "text": "Negative (suction) relative to atmospheric — u < 0 — which can increase σ′ = σ − u above the WT",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Equal to the total vertical stress so that σ′ = 0"
                }
              ],
              "explanation": "NCEES/UFC effective-stress framing: capillary water can sustain negative pore pressure (suction) above the WT, increasing effective stress. Do not assume u = 0 for all points above WT when capillary continuity exists.",
              "miss": "Capillary fringe: u can be negative → σ′ rises.",
              "fepe": "Above WT: capillary suction ⇒ u < 0 possible."
            },
            {
              "id": "gpe02b-soil-1-08",
              "type": "mcq",
              "label": "2C · Point-load Δσz",
              "stem": "A vertical point load Q = 100 kips acts at the ground surface. At a depth z = 10 ft directly beneath the load (r = 0), Boussinesq Δσz = (3Q)/(2π z²) is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.5 ksf (3Q/2z² without π)"
                },
                {
                  "id": "b",
                  "text": "0.16 ksf (Q/(2πz²) missing the factor 3)"
                },
                {
                  "id": "c",
                  "text": "4.77 ksf ((3Q)/(2πz) with z not squared)"
                },
                {
                  "id": "d",
                  "text": "0.48 ksf",
                  "correct": true
                }
              ],
              "explanation": "Δσz = 3(100)/(2π × 100) = 300/(200π) ≈ 0.477 ksf ≈ 0.48 ksf. Omitting π, omitting the 3, or failing to square z are classic PE errors.",
              "miss": "Boussinesq on-axis: Δσz = 3Q/(2π z²).",
              "fepe": "On-axis Boussinesq: 3Q/(2πz²)."
            },
            {
              "id": "gpe02b-soil-1-09",
              "type": "mcq",
              "label": "2D · OCR definition",
              "stem": "A clay specimen has preconsolidation stress pc = 3,600 psf and current effective overburden po = 1,200 psf. The overconsolidation ratio OCR is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "3.0",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "0.33 (po/pc inverted)"
                },
                {
                  "id": "c",
                  "text": "2,400 psf (pc − po reported as OCR)"
                },
                {
                  "id": "d",
                  "text": "4,800 psf (pc + po)"
                }
              ],
              "explanation": "OCR = pc/po = 3600/1200 = 3.0. Inverting, or reporting a stress difference/sum as OCR, are common mistakes.",
              "miss": "OCR = pc/po (dimensionless).",
              "fepe": "OCR = σ′p / σ′vo."
            },
            {
              "id": "gpe02b-soil-1-10",
              "type": "mcq",
              "label": "2D · NC consolidation settlement",
              "stem": "For normally consolidated clay (pc = po), one-dimensional primary consolidation settlement is most nearly computed from:",
              "choices": [
                {
                  "id": "a",
                  "text": "Sc = Cr H log10((po+Δσ)/po) using the recompression index on the NC branch"
                },
                {
                  "id": "b",
                  "text": "Sc = Cc H / (1+e0) × log10((po+Δσ)/po)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Sc = mv × Δσ only, with Cc forbidden on the PE"
                },
                {
                  "id": "d",
                  "text": "Sc = Cu H log10(Δσ) with undrained strength"
                }
              ],
              "explanation": "NCEES: for NC clay, Sc = [Cc H/(1+e0)] log10((po+Δσ)/po). Cr applies on the recompression/OC branch; su is not a settlement index.",
              "miss": "NC settlement uses Cc, not Cr.",
              "fepe": "NC: Sc = Cc H/(1+e0) log((po+Δσ)/po)."
            },
            {
              "id": "gpe02b-soil-1-11",
              "type": "mcq",
              "label": "2D · Peak vs residual",
              "stem": "Along a preexisting slickensided failure surface in stiff clay, drained shear strength for a reactivation analysis should most nearly use:",
              "choices": [
                {
                  "id": "a",
                  "text": "Peak φ′ and peak c′ from intact CU/CD specimens"
                },
                {
                  "id": "b",
                  "text": "Undrained su from UU on intact samples only"
                },
                {
                  "id": "c",
                  "text": "Residual (or fully softened, as appropriate) strength along the preexisting surface — peak intact parameters overestimate resistance",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "SPT N60 correlated φ′ with no residual reduction"
                }
              ],
              "explanation": "EM 1110-2-1902 / NCEES strength framing: preexisting shear surfaces → residual (or fully softened) parameters; peak intact envelopes are unconservative for reactivation.",
              "miss": "Slickensides/old slides → residual, not peak.",
              "fepe": "Preexisting failure surface → residual φ′r."
            },
            {
              "id": "gpe02b-soil-1-12",
              "type": "mcq",
              "label": "2D · Test selection CU vs UU",
              "stem": "Design needs effective-stress strength parameters c′ and φ′ for long-term stability of a cut in saturated clay. The most appropriate lab program is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "UU triaxial only (φu = 0 envelope)"
                },
                {
                  "id": "b",
                  "text": "Water-content tests only"
                },
                {
                  "id": "c",
                  "text": "SPT N correlations exclusively"
                },
                {
                  "id": "d",
                  "text": "CU (or CD) triaxial with pore-pressure measurement (or drained CD) to define the effective-stress envelope",
                  "correct": true
                }
              ],
              "explanation": "NCEES/Vandevelde: c′,φ′ require CU with u measurement or CD. UU gives undrained su for short-term φu = 0 analyses, not the drained envelope.",
              "miss": "Long-term c′,φ′ → CU+u or CD — not UU alone.",
              "fepe": "Effective-stress envelope: CU with u (or CD)."
            },
            {
              "id": "gpe02b-soil-1-13",
              "type": "mcq",
              "label": "2E · Darcy Q",
              "stem": "Steady one-dimensional seepage follows Darcy’s law Q = k i A. If k and A are fixed and the head loss over length L doubles (i doubles), Q most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Doubles",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Halves"
                },
                {
                  "id": "c",
                  "text": "Quadruples (treating Q ∝ i²)"
                },
                {
                  "id": "d",
                  "text": "Is unchanged (Q independent of i)"
                }
              ],
              "explanation": "Darcy: Q ∝ i when k and A fixed. Doubling Δh (hence i) doubles Q — not i², and not independent of gradient.",
              "miss": "Q = k i A → Q scales linearly with i.",
              "fepe": "Darcy: Q proportional to hydraulic gradient i."
            },
            {
              "id": "gpe02b-soil-1-14",
              "type": "mcq",
              "label": "2E · Head vs falling permeameter",
              "stem": "A clean sand with expected k on the order of 10⁻² cm/s is to be tested in the lab. The more appropriate permeameter setup is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Falling-head on an undisturbed clay tube (wrong soil class for this k)"
                },
                {
                  "id": "b",
                  "text": "Constant-head permeameter (typical for relatively permeable sands/gravels)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Flexible-wall with backpressure only, because constant-head cannot test sand"
                },
                {
                  "id": "d",
                  "text": "Hazen equation in lieu of any lab test when D10 is unknown"
                }
              ],
              "explanation": "NCEES §3.8.5: constant-head suits relatively permeable soils (sands); falling-head suits lower-k silts/clays; flexible-wall is for very low-k clays needing saturation control. Hazen is an estimate, not a substitute when D10 is unknown.",
              "miss": "Sands → constant-head; fine-grained low-k → falling-head / flexible-wall.",
              "fepe": "Constant-head for permeable sands; falling-head for finer soils."
            },
            {
              "id": "gpe02b-soil-1-15",
              "type": "mcq",
              "label": "2A · γsat from e",
              "stem": "For a saturated soil, Gs = 2.70, e = 0.60, γw = 62.4 pcf. Most nearly, γsat is:",
              "choices": [
                {
                  "id": "a",
                  "text": "105 pcf (γd = Gs γw/(1+e) — forgot pore water)"
                },
                {
                  "id": "b",
                  "text": "168 pcf (Gs γw, void ratio ignored)"
                },
                {
                  "id": "c",
                  "text": "129 pcf",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "94 pcf (γ′ = (Gs−1)γw/(1+e) reported as γsat)"
                }
              ],
              "explanation": "γsat = (Gs+e)γw/(1+e) = (2.70+0.60)×62.4/1.60 = 3.30×39.0 = 128.7 ≈ 129 pcf. γd omits water in voids; Gsγw ignores voids; γ′ is buoyant unit weight.",
              "miss": "Use (Gs+e), not (Gs−1), in the numerator for γsat.",
              "fepe": "γsat = (Gs+e)γw/(1+e)."
            }
          ]
        }
      ],
      "topic": 2
    },
    {
      "id": "gpe02b-bench",
      "title": "PE bench · Soil mechanics (expansion)",
      "bench": true,
      "blurb": "Multi-step PE numbers: e & n, Dr, layered σ′, NC consolidation Sc, constant-head k.",
      "lessons": [
        {
          "id": "gpe02b-pe-1",
          "title": "Soil mechanics · PE numbers (expansion)",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth calculations expanding §2: void ratio & porosity, relative density, layered effective stress, NC consolidation settlement, constant-head permeability.",
          "items": [
            {
              "id": "gpe02b-pe-1-01",
              "type": "mcq",
              "label": "e and n from γd",
              "stem": "Most nearly, e and n are:",
              "choices": [
                {
                  "id": "a",
                  "text": "e = 0.55, n = 35% (arithmetic slip on Gs γw/γd)"
                },
                {
                  "id": "b",
                  "text": "e = 0.65, n = 65% (reporting e as n in percent)"
                },
                {
                  "id": "c",
                  "text": "e = 1.65, n = 62% (reporting 1+e as e)"
                },
                {
                  "id": "d",
                  "text": "e = 0.65, n = 39%",
                  "correct": true
                }
              ],
              "explanation": "1+e = Gs γw/γd = 2.65×62.4/100 = 1.6536 → e ≈ 0.65. n = e/(1+e) = 0.654/1.654 ≈ 0.395 → 39%.",
              "miss": "Finish with n = e/(1+e); do not report e as n.",
              "fepe": "From γd: e = Gsγw/γd − 1; n = e/(1+e).",
              "pe": true,
              "given": "γd = Gs γw/(1+e); n = e/(1+e); γw = 62.4 pcf",
              "vignette": "Dry sand: Gs = 2.65, γd = 100 pcf.",
              "work": [
                "1+e = 2.65×62.4/100 = 1.6536 → e = 0.654 ≈ 0.65",
                "n = 0.654/1.654 ≈ 0.395 → 39%",
                "65% wrongly reports e as n; 1.65 is 1+e"
              ]
            },
            {
              "id": "gpe02b-pe-1-02",
              "type": "mcq",
              "label": "Relative density Dr",
              "stem": "Most nearly, Dr is:",
              "choices": [
                {
                  "id": "a",
                  "text": "60%",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "40% ((e−emin)/(emax−emin))"
                },
                {
                  "id": "c",
                  "text": "75% (arithmetic slip)"
                },
                {
                  "id": "d",
                  "text": "25% (emax−emin only)"
                }
              ],
              "explanation": "Dr = (emax−e)/(emax−emin) = (0.90−0.66)/(0.90−0.50) = 0.24/0.40 = 0.60 → 60%.",
              "miss": "Numerator is (emax − e), not (e − emin).",
              "fepe": "Dr = (emax − e)/(emax − emin).",
              "pe": true,
              "given": "Dr = (emax − e)/(emax − emin) × 100%",
              "vignette": "Sand: emax = 0.90, emin = 0.50, in-situ e = 0.66.",
              "work": [
                "Dr = (0.90−0.66)/(0.90−0.50) = 0.24/0.40 = 0.60 → 60%",
                "40% uses (e−emin) in the numerator"
              ]
            },
            {
              "id": "gpe02b-pe-1-03",
              "type": "mcq",
              "label": "Layered σ′v",
              "stem": "Most nearly, σ′v at 14 ft is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1,710 psf (σv — forgot to subtract u)"
                },
                {
                  "id": "b",
                  "text": "1,090 psf",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "624 psf (u alone)"
                },
                {
                  "id": "d",
                  "text": "876 psf (14 × γ′ with γsat from grade, ignoring moist crust)"
                }
              ],
              "explanation": "σv = 4(115) + 10(125) = 460 + 1,250 = 1,710 psf. u = 10(62.4) = 624 psf. σ′v = 1,710 − 624 = 1,086 ≈ 1,090 psf.",
              "miss": "Sum σ layer-by-layer; u only below the WT.",
              "fepe": "σ layer-by-layer; u from WT down only.",
              "pe": true,
              "given": "γw = 62.4 pcf; σ′v = σv − u; hydrostatic u = γw × (depth below WT)",
              "vignette": "0–4 ft moist soil above the WT, γ = 115 pcf. WT at 4 ft. 4–14 ft saturated soil, γsat = 125 pcf. Evaluate the point at 14 ft depth.",
              "work": [
                "σv = 4(115)+10(125) = 460+1,250 = 1,710 psf",
                "u = 10(62.4) = 624 psf",
                "σ′v = 1,710−624 = 1,086 ≈ 1,090 psf",
                "876 psf = 14(125−62.4) misapplies γ′ from grade"
              ]
            },
            {
              "id": "gpe02b-pe-1-04",
              "type": "mcq",
              "label": "NC consolidation Sc",
              "stem": "Most nearly, the primary consolidation settlement Sc is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.60 ft (used Cr = 0.10 instead of Cc)"
                },
                {
                  "id": "b",
                  "text": "3.01 ft (dropped the /(1+e0) factor: Cc H log10(2))"
                },
                {
                  "id": "c",
                  "text": "2.00 ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "1.00 ft (log10 slip)"
                }
              ],
              "explanation": "Sc = [Cc H/(1+e0)] log10((po+Δσ)/po) = [0.50×20/(1+0.50)] log10(4000/2000) = (10/1.5)×0.3010 = 6.667×0.3010 ≈ 2.01 ≈ 2.00 ft.",
              "miss": "NC uses Cc and divides by (1+e0); do not substitute Cr.",
              "fepe": "Sc = [Cc H/(1+e0)] log10((po+Δσ)/po).",
              "pe": true,
              "given": "NC clay: Sc = [Cc H/(1+e0)] log10((po+Δσ)/po)",
              "vignette": "Normally consolidated clay layer H = 20 ft, e0 = 0.50, Cc = 0.50, Cr = 0.10. po = 2,000 psf; Δσ = 2,000 psf at mid-layer.",
              "work": [
                "(po+Δσ)/po = 4000/2000 = 2; log10(2) ≈ 0.3010",
                "Cc H/(1+e0) = 0.50×20/1.50 = 6.667",
                "Sc = 6.667×0.3010 ≈ 2.01 ≈ 2.00 ft",
                "0.60 ft would use Cr; 3.01 ft omits /(1+e0)"
              ]
            },
            {
              "id": "gpe02b-pe-1-05",
              "type": "mcq",
              "label": "Constant-head k",
              "stem": "Most nearly, k is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.50 cm/s (QL/(A Δh) — omitted time t)"
                },
                {
                  "id": "b",
                  "text": "5.0×10⁻² cm/s (decimal-place slip ×10)"
                },
                {
                  "id": "c",
                  "text": "2.0×10⁻³ cm/s (swapped L and Δh: Q Δh/(A t L))"
                },
                {
                  "id": "d",
                  "text": "5.0×10⁻³ cm/s",
                  "correct": true
                }
              ],
              "explanation": "k = Q L /(A t Δh) = (90×12)/(60×240×15) = 1,080 / 216,000 = 5.0×10⁻³ cm/s.",
              "miss": "Constant head: include t in the denominator; do not swap L and Δh.",
              "fepe": "k = QL/(A t Δh).",
              "pe": true,
              "given": "Constant-head: k = Q L / (A t Δh)",
              "vignette": "Constant-head permeameter: discharge Q = 90 cm³ in t = 240 s; sample area A = 60 cm²; length L = 12 cm; head difference Δh = 15 cm.",
              "work": [
                "k = (90×12)/(60×240×15) = 1,080/216,000 = 5.0×10⁻³ cm/s",
                "Omitting t → 0.50 cm/s; swapping L↔Δh → 2.0×10⁻³ cm/s"
              ]
            }
          ]
        }
      ],
      "topic": 2
    }
  ]
});
