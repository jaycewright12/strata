/*
 * STRATA built-in pack: GEO PE · 2. Soil Mechanics, Lab Testing & Analysis (v1.1.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES PE Civil Reference Handbook Ch. 3.2–3.3 / 3.8–3.9, UFC 3-220-10,
 * FHWA NHI-06-088, Vandevelde Soil Mechanics, EM 1110-2-1902).
 * Do not redistribute.
 * Maps to PE topic 2 (Soil Mechanics, Laboratory Testing, and Analysis) — conceptual + PE bench tracks.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-02-soil-mech",
  "title": "GEO PE · 2. Soil Mechanics, Lab Testing & Analysis",
  "version": "1.1.0",
  "description": "Personal use only. Original questions based on Jayce's study library (NCEES PE Civil Reference Handbook Ch. 3.2–3.3 / 3.8–3.9, UFC 3-220-10, FHWA NHI-06-088, Vandevelde Soil Mechanics, EM 1110-2-1902). Do not redistribute.",
  "units": [
    {
      "id": "gpe02-soil",
      "title": "2. Soil Mechanics, Lab Testing & Analysis",
      "blurb": "Phase relations, index/chemical properties, effective stress, strength, and permeability — PE Geotechnical depth.",
      "lessons": [
        {
          "id": "gpe02-soil-1",
          "title": "Soil mechanics · Concepts",
          "minutes": 40,
          "xp": 60,
          "summary": "Scenario judgment and short calcs across 2A–2E: phase relations, corrosivity indices, σ/σ′/u, Mohr-Coulomb / drained–undrained, constant/falling head and Hazen.",
          "items": [
            {
              "id": "gpe02-soil-1-01",
              "type": "mcq",
              "label": "2A · Saturation Se=wGs",
              "stem": "A soil has Gs = 2.70, water content w = 22%, and void ratio e = 0.65. Most nearly, the degree of saturation S is:",
              "choices": [
                {
                  "id": "a",
                  "text": "91%",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "34%"
                },
                {
                  "id": "c",
                  "text": "59%"
                },
                {
                  "id": "d",
                  "text": "39%"
                }
              ],
              "explanation": "NCEES §3.8.3 / UFC phase relations: S = wGs/e (ratios). S = 0.22×2.70/0.65 = 0.914 → about 91%. 34% is w/e; 59% is wGs without dividing by e; 39% is e/(1+e) = porosity, not saturation.",
              "miss": "Use S = wGs/e. Do not report w/e, wGs alone, or porosity n = e/(1+e) as saturation.",
              "fepe": "Phase check: S = wGs/e (and Se = wGs)."
            },
            {
              "id": "gpe02-soil-1-02",
              "type": "mcq",
              "label": "2A · Dry unit weight",
              "stem": "A moist clay specimen has total (moist) unit weight γt = 118 pcf at water content w = 15%. Most nearly, the dry unit weight γd is:",
              "choices": [
                {
                  "id": "a",
                  "text": "118 pcf"
                },
                {
                  "id": "b",
                  "text": "103 pcf",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "136 pcf"
                },
                {
                  "id": "d",
                  "text": "56 pcf"
                }
              ],
              "explanation": "NCEES weight–volume: γd = γt/(1+w) = 118/1.15 ≈ 102.6 pcf ≈ 103 pcf. 118 pcf is γt (forgetting to strip water); 136 pcf multiplies by (1+w); 56 pcf wrongly subtracts γw.",
              "miss": "γd = γt/(1+w), not γt, not γt(1+w), and not γt − γw.",
              "fepe": "Moist → dry: divide by (1+w)."
            },
            {
              "id": "gpe02-soil-1-03",
              "type": "mcq",
              "label": "2A · Liquidity index",
              "stem": "A clay has LL = 48, PL = 22, and natural water content w = 35%. Using LI = (w − PL)/PI from the NCEES handbook, the soil’s liquidity-index state and expected deformation behavior are most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "LI ≥ 1 (liquid) — deforms like a viscous fluid with very low strength"
                },
                {
                  "id": "b",
                  "text": "LI ≤ 0 (semisolid/solid) — brittle high-strength response"
                },
                {
                  "id": "c",
                  "text": "LI ≈ 0.5 (plastic) — intermediate strength; plastic deformation between PL and LL",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "LI ≈ 0.27 by dividing (w − PL) by LL instead of by PI"
                }
              ],
              "explanation": "PI = LL − PL = 26. LI = (w − PL)/PI = (35 − 22)/26 = 0.5. NCEES/NHI: 0 < LI < 1 is the plastic range between PL and LL. LI ≥ 1 would need w ≥ LL; LI ≤ 0 needs w ≤ PL. Dividing by LL instead of PI gives 13/48 ≈ 0.27 and mis-states the state.",
              "miss": "LI = (w − PL)/PI with PI = LL − PL. Between PL and LL → plastic (0 < LI < 1).",
              "fepe": "LI: <0 solid/semisolid; 0–1 plastic; >1 liquid."
            },
            {
              "id": "gpe02-soil-1-04",
              "type": "mcq",
              "label": "2B · Corrosivity screening",
              "stem": "Laboratory results for a site with proposed steel H-piles: soil resistivity = 1,200 ohm-cm, pH = 4.8, sulfate = 1,200 ppm, chloride = 80 ppm. Per UFC 3-220-10 corrosion-potential guidance, the most appropriate conclusion is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Low corrosion potential because chloride is below 500 ppm, so other chemistry may be ignored"
                },
                {
                  "id": "b",
                  "text": "Low corrosion potential because resistivity above 1,000 ohm-cm always means non-aggressive soil"
                },
                {
                  "id": "c",
                  "text": "Borderline risk because only chloride fails to exceed its UFC threshold, so overall aggressiveness may be discounted"
                },
                {
                  "id": "d",
                  "text": "High corrosion potential — resistivity < 2,000 ohm-cm, pH < 5.5, and sulfate > 1,000 ppm each flag aggressiveness",
                  "correct": true
                }
              ],
              "explanation": "UFC 3-220-10 corrosion-potential screening: ρ < 2,000 ohm-cm, pH < 5.5, sulfate > 1,000 ppm, and chloride > 500 ppm are separate aggressiveness flags. Here resistivity (1,200), pH (4.8), and sulfate (1,200) each exceed their thresholds — high corrosion potential — even though chloride (80) does not. One non-flagged test does not cancel the others; 1,000 ohm-cm is not the UFC resistivity cutoff.",
              "miss": "Any one of the UFC flags can indicate aggressiveness; three flags are already exceeded here despite low chloride.",
              "fepe": "UFC soil aggressiveness: ρ, pH, SO<sub>4</sub>, Cl — each can flag; do not require all four."
            },
            {
              "id": "gpe02-soil-1-05",
              "type": "mcq",
              "label": "2B · Chemical test suite",
              "stem": "For assessing chemical / electrochemical aggressiveness of soil toward buried metallic foundations, which laboratory suite is most nearly the NCEES/FHWA corrosivity package?",
              "choices": [
                {
                  "id": "a",
                  "text": "pH, resistivity, sulfate content, and chloride content",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Organic content, calcium carbonate content, and specific gravity only"
                },
                {
                  "id": "c",
                  "text": "Grain-size distribution and Atterberg limits only"
                },
                {
                  "id": "d",
                  "text": "Redox potential alone without pH, resistivity, sulfate, or chloride"
                }
              ],
              "explanation": "NCEES §3.8 / NHI corrosivity testing suite for buried metals emphasizes pH, electrical resistivity, sulfate, and chloride. Organic/carbonate/Gs and grain-size/Atterberg packages are useful for classification and compressibility but are not the chemical/electrochemical aggressiveness suite. Redox alone is incomplete.",
              "miss": "Corrosivity package = pH + resistivity + SO<sub>4</sub> + Cl — not index tests or Gs alone.",
              "fepe": "Buried metal aggressiveness: pH, ρ, sulfate, chloride."
            },
            {
              "id": "gpe02-soil-1-06",
              "type": "mcq",
              "label": "2C · Water-table rise",
              "stem": "At a fixed depth below the ground surface in a sand that becomes submerged as the water table rises from well below that depth to the ground surface, the vertical effective stress σ′v most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Increases, because total stress always rises more than pore pressure"
                },
                {
                  "id": "b",
                  "text": "Decreases, because the increase in pore pressure exceeds the increase in total stress",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Is unchanged, because σ′ = σ − u and both σ and u scale identically with any water-table move"
                },
                {
                  "id": "d",
                  "text": "Is unchanged if the sand was already moist above the rising water table (confuses partial saturation with the submerged σ′ drop)"
                }
              ],
              "explanation": "When the water table rises to the surface, pore pressure at a fixed depth increases by roughly γ<sub>w</sub>·Δh while total stress increases only by the difference between saturated and moist unit weights over the newly submerged height — so σ′ = σ − u decreases. Moist-above-WT conditions do not cancel that effective-stress drop once the soil is submerged.",
              "miss": "WT rise to the surface reduces σ′ at fixed depth below grade — u climbs faster than σ.",
              "fepe": "Raising WT → σ′ falls at a fixed depth (classic PE stress trap)."
            },
            {
              "id": "gpe02-soil-1-07",
              "type": "mcq",
              "label": "2C · Hydrostatic below WT",
              "stem": "Below a static water table in a homogeneous saturated soil with no excess pore pressure, vertical effective stress at depth z below the WT is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "σ′v = γsat · z (forget pore pressure)"
                },
                {
                  "id": "b",
                  "text": "σ′v = γw · z (pore pressure alone)"
                },
                {
                  "id": "c",
                  "text": "σ′v = γ′ · z = (γsat − γw) · z",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "σ′v = γd · z even though the soil is saturated"
                }
              ],
              "explanation": "NCEES §3.3 / effective-stress principle: σ′ = σ − u. With WT at or above the point of interest and hydrostatic conditions, σ = γsat·z and u = γw·z, so σ′ = (γsat − γw)·z = γ′·z. Using γsat or γw alone, or swapping in γd for a submerged soil, are classic PE mistakes.",
              "miss": "Submerged: use buoyant unit weight γ′ = γsat − γw. Do not report σ or u as σ′.",
              "fepe": "Hydrostatic below WT: σ′v = γ′z."
            },
            {
              "id": "gpe02-soil-1-08",
              "type": "mcq",
              "label": "2C · Layered σ′",
              "stem": "Profile: 0–6 ft dry sand, γd = 100 pcf; water table at 6 ft; 6–16 ft saturated sand, γsat = 120 pcf. γw = 62.4 pcf. Most nearly, σ′v at 16 ft depth is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1,800 psf (total stress only)"
                },
                {
                  "id": "b",
                  "text": "624 psf (u alone)"
                },
                {
                  "id": "c",
                  "text": "1,000 psf (using γd for the full 16 ft with no u)"
                },
                {
                  "id": "d",
                  "text": "1,176 psf",
                  "correct": true
                }
              ],
              "explanation": "σv = 6(100) + 10(120) = 600 + 1,200 = 1,800 psf; u = 10(62.4) = 624 psf; σ′v = 1,800 − 624 = 1,176 psf. 1,800 is σ; 624 is u; 1,000 ignores saturation and pore pressure.",
              "miss": "Build σ layer by layer, subtract hydrostatic u only for the submerged height.",
              "fepe": "Layered profiles: sum γ·Δz for σ, then subtract γw·(depth below WT)."
            },
            {
              "id": "gpe02-soil-1-09",
              "type": "mcq",
              "label": "2D · Mohr-Coulomb τf",
              "stem": "Effective-stress strength parameters are c′ = 200 psf and φ′ = 28°. On a plane with σ′n = 1,200 psf, the Mohr-Coulomb shear strength τf is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "838 psf",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "638 psf"
                },
                {
                  "id": "c",
                  "text": "1,400 psf"
                },
                {
                  "id": "d",
                  "text": "200 psf"
                }
              ],
              "explanation": "NCEES §3.3.2: τ′ = c′ + σ′n tan φ′ = 200 + 1,200 tan 28° ≈ 200 + 638 = 838 psf. 638 psf omits c′; 1,400 psf adds c′ to σ′n without tan φ′; 200 psf is c′ alone.",
              "miss": "τf = c′ + σ′n tan φ′ — include both terms and use the tangent of φ′, not φ′ in degrees as a multiplier.",
              "fepe": "Effective MC: τ = c′ + σ′ tan φ′."
            },
            {
              "id": "gpe02-soil-1-10",
              "type": "mcq",
              "label": "2D · Undrained vs drained",
              "stem": "End-of-construction (short-term) stability of a saturated clay embankment foundation is being evaluated. Pore pressures will not dissipate during loading. The strength characterization that best matches NCEES/EM practice is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Drained effective-stress analysis with peak φ′ and c′ = 0 only, ignoring undrained s<sub>u</sub>"
                },
                {
                  "id": "b",
                  "text": "Undrained total-stress strength (e.g., UU / φ = 0 with s<sub>u</sub>), because drainage cannot occur in the short term",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Residual drained φ′<sub>r</sub> along a preexisting slickenside as the only allowable short-term parameter"
                },
                {
                  "id": "d",
                  "text": "Effective-stress c′, φ′ with construction pore pressures replaced by hydrostatic u only (misses undrained excess u)"
                }
              ],
              "explanation": "EM 1110-2-1902 / NCEES §3.3: undrained conditions → undrained strengths related to total stresses (s<sub>u</sub>, often from UU or CU). Drained c′, φ′ apply when pore pressures dissipate (long-term). Using only hydrostatic u with c′, φ′ underestimates short-term undrained response when excess pore pressures develop. Residual φ′<sub>r</sub> is a different (often long-term/reactivation) issue.",
              "miss": "Short-term saturated clay → undrained s<sub>u</sub> (total stress). Save c′, φ′ for drained/long-term with correct u.",
              "fepe": "Clay embankment EOC: undrained; long-term seepage: drained effective stress."
            },
            {
              "id": "gpe02-soil-1-11",
              "type": "mcq",
              "label": "2D · CU with pore pressure",
              "stem": "The lab objective is peak effective-stress strength parameters c′ and φ′ on a saturated clay, with pore-pressure measurement during shear. Per the NCEES performance-testing table, which test is most appropriate?",
              "choices": [
                {
                  "id": "a",
                  "text": "Unconfined compression (UC) only"
                },
                {
                  "id": "b",
                  "text": "Unconsolidated-undrained (UU) triaxial without pore-pressure readings"
                },
                {
                  "id": "c",
                  "text": "Isotropic consolidated-undrained compression with pore-pressure measurement (CIUC)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Consolidated-drained (CD) triaxial sheared slowly with no pore-pressure measurement"
                }
              ],
              "explanation": "NCEES §3.8 (NHI Table 5-3): CIUC consolidates with drainage, then shears undrained while measuring pore pressures — recommended to assess effective-stress strength parameters. UC and UU without u give undrained s<sub>u</sub> approximations; CD can give drained c′, φ′ but is slow and does not use pore-pressure measurement during shear the way CIUC does for the handbook’s effective-stress recommendation.",
              "miss": "Need c′, φ′ from clay with u measured → CIUC (CU with pore pressure), not UC/UU-only or CD-without-u.",
              "fepe": "CIUC (+u) → c′, φ′; UU/UC → s<sub>u</sub>; CD → drained params slowly."
            },
            {
              "id": "gpe02-soil-1-12",
              "type": "mcq",
              "label": "2E · Constant-head formula",
              "stem": "In the NCEES handbook constant-head permeameter, the coefficient of permeability is computed from which expression?",
              "choices": [
                {
                  "id": "a",
                  "text": "k = (aL / AΔt) ln(h1/h2) (falling-head form)"
                },
                {
                  "id": "b",
                  "text": "k = C (D10)² only, with no laboratory flow measurement"
                },
                {
                  "id": "c",
                  "text": "k = Q t / (L A h)"
                },
                {
                  "id": "d",
                  "text": "k = Q L / (t A h)",
                  "correct": true
                }
              ],
              "explanation": "NCEES §3.8.5.1 constant head: k = QL/(tAh). The falling-head form uses standpipe area a and ln(h1/h2). Hazen’s k = C(D10)² is an empirical estimate for clean sand, not the constant-head lab equation. The form Q t /(L A h) inverts Q and t relative to the handbook.",
              "miss": "Constant head: QL/(tAh). Falling head: (aL/AΔt)ln(h1/h2). Hazen is separate.",
              "fepe": "Memorize both permeameter formulas and when each applies."
            },
            {
              "id": "gpe02-soil-1-13",
              "type": "mcq",
              "label": "2E · Flexible-wall permeameter",
              "stem": "A low-permeability clay (expected k on the order of 1×10⁻⁷ cm/s) must be tested for hydraulic conductivity. Per NCEES/FHWA guidance, the preferred laboratory apparatus is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Flexible-wall permeameter with backpressure saturation (for fine-grained, low-k soils)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Rigid-wall permeameter intended for clean gravel without confinement control"
                },
                {
                  "id": "c",
                  "text": "Standard Proctor compaction mold used as a substitute permeameter without saturation control"
                },
                {
                  "id": "d",
                  "text": "Rigid-wall falling-head permeameter without backpressure saturation (sidewall leakage / incomplete saturation risk in clay)"
                }
              ],
              "explanation": "NCEES performance-testing table: flexible-wall permeameter is recommended for relatively low-permeability materials (k ≤ about 1×10⁻³ cm/s), clays and silts, with backpressure saturation. Rigid-wall devices are for higher-k sands/gravels and risk sidewall leakage in fines; skipping backpressure leaves saturation incomplete for low-k clay.",
              "miss": "Clays/low k → flexible wall + backpressure. Rigid-wall (even falling-head) is the near-miss wrong apparatus here.",
              "fepe": "Fine-grained k: flexible wall; granular k: rigid wall."
            },
            {
              "id": "gpe02-soil-1-14",
              "type": "mcq",
              "label": "2E · Hazen estimate",
              "stem": "A clean filter sand has D10 = 0.20 mm. Using Hazen’s equation from the NCEES handbook with C = 1.0, the estimated permeability k is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.20 cm/s (= C·D10)"
                },
                {
                  "id": "b",
                  "text": "0.040 cm/s",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "0.040 mm/s (wrong unit label on the same number)"
                },
                {
                  "id": "d",
                  "text": "1.0 cm/s (= C with D10 ignored)"
                }
              ],
              "explanation": "NCEES §3.8.5.2: k = C(D10)² with k in cm/s and D10 in mm; C typically 0.4–1.2. With C = 1.0 and D10 = 0.20, k = 1.0(0.04) = 0.040 cm/s. Multiplying C·D10, dropping the square, or omitting D10 are common errors; the handbook unit is cm/s, not mm/s.",
              "miss": "Hazen: square D10 (mm), multiply by C, report cm/s.",
              "fepe": "Hazen k (cm/s) = C(D10_mm)²; C ≈ 0.4–1.2."
            },
            {
              "id": "gpe02-soil-1-15",
              "type": "mcq",
              "label": "2A · Impossible saturation",
              "stem": "Reported lab values on one specimen: Gs = 2.65, e = 0.80, w = 35%. Computing S = wGs/e yields about 1.16 (116%). The most reasonable engineering conclusion is:",
              "choices": [
                {
                  "id": "a",
                  "text": "The soil is validly 116% saturated; S may exceed 1.0 in clays"
                },
                {
                  "id": "b",
                  "text": "Accept the data and force S = 1.0 in γ<sub>sat</sub> formulas while leaving the reported w, e, and G<sub>s</sub> unchanged"
                },
                {
                  "id": "c",
                  "text": "The measurements are inconsistent — S cannot exceed 1.0; recheck w, e, and/or G<sub>s</sub>",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Increase G<sub>s</sub> until S = 1.0 and proceed without retesting the specimen"
                }
              ],
              "explanation": "By definition S = V<sub>w</sub>/V<sub>v</sub> ≤ 1. NCEES/UFC phase relations: S = wG<sub>s</sub>/e. A computed S > 1 means at least one of w, e, or G<sub>s</sub> is wrong (or units/decimals mixed). Do not accept S > 1, silently force S = 1 while keeping bad inputs, or invent a scaled G<sub>s</sub>.",
              "miss": "S > 100% is a lab/data error flag, not a physical state — recheck inputs.",
              "fepe": "Phase QA: if S = wG<sub>s</sub>/e > 1, reject/retest the inputs."
            }
          ]
        }
      ],
      "topic": 2
    },
    {
      "id": "gpe02-bench",
      "title": "PE bench · Soil mechanics",
      "bench": true,
      "blurb": "Multi-step PE-style numbers: phases, effective stress profiles, strength, permeameter k.",
      "lessons": [
        {
          "id": "gpe02-pe-1",
          "title": "Soil mechanics · PE numbers",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth calculations: void ratio / γt, layered σ′, UU su, falling-head k, Mohr-Coulomb τf.",
          "items": [
            {
              "id": "gpe02-pe-1-01",
              "type": "mcq",
              "pe": true,
              "label": "Phase γt",
              "given": "γw = 62.4 pcf; S = wGs/e; γd = Gs γw/(1+e); γt = γd(1+w)",
              "vignette": "Compacted fill: Gs = 2.70, w = 18%, S = 85%.",
              "stem": "Most nearly, the moist unit weight γt is:",
              "choices": [
                {
                  "id": "a",
                  "text": "107 pcf"
                },
                {
                  "id": "b",
                  "text": "168 pcf"
                },
                {
                  "id": "c",
                  "text": "132 pcf"
                },
                {
                  "id": "d",
                  "text": "126 pcf",
                  "correct": true
                }
              ],
              "work": [
                "e = wGs/S = 0.18×2.70/0.85 = 0.572",
                "γd = Gs γw/(1+e) = 2.70×62.4/1.572 ≈ 107.2 pcf",
                "γt = γd(1+w) = 107.2×1.18 ≈ 126.5 pcf ≈ 126 pcf",
                "107 pcf is γd; 168 pcf is Gsγw; 132 pcf ≈ γsat if S were forced to 1.0 with same e"
              ],
              "explanation": "Find e from Se = wGs, then γd, then γt = γd(1+w). Reporting γd, Gsγw, or a saturated unit weight with S reset to 1 are the usual distractors.",
              "miss": "126 pcf is γt; 107 is γd. Finish with γt = γd(1+w).",
              "fepe": "Partial saturation: e = wGs/S → γd → γt."
            },
            {
              "id": "gpe02-pe-1-02",
              "type": "mcq",
              "pe": true,
              "label": "Layered σ′v",
              "given": "γw = 62.4 pcf; σ′v = σv − u; hydrostatic u = γw × (depth below WT)",
              "vignette": "0–5 ft moist clay above the water table, γ = 110 pcf. WT at 5 ft. 5–20 ft saturated clay, γsat = 120 pcf. Evaluate the point at 20 ft depth.",
              "stem": "Most nearly, σ′v at 20 ft is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1,414 psf",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "2,350 psf"
                },
                {
                  "id": "c",
                  "text": "936 psf"
                },
                {
                  "id": "d",
                  "text": "1,152 psf"
                }
              ],
              "work": [
                "σv = 5(110) + 15(120) = 550 + 1,800 = 2,350 psf",
                "u = 15(62.4) = 936 psf",
                "σ′v = 2,350 − 936 = 1,414 psf",
                "1,152 psf = 20(120 − 62.4) ignores the moist crust unit weight; 2,350 is σ; 936 is u"
              ],
              "explanation": "Sum total stress through both layers; pore pressure uses only the 15 ft below the WT. Using γ′ for the full 20 ft (1,152 psf) drops the correct γ on the crust and mis-places the WT.",
              "miss": "Do not apply γ′ from grade when part of the column is above the WT.",
              "fepe": "σ layer-by-layer; u from WT down only."
            },
            {
              "id": "gpe02-pe-1-03",
              "type": "mcq",
              "pe": true,
              "label": "UU undrained strength",
              "given": "For UU (φ = 0) on saturated clay, su = (σ1 − σ3)/2 at failure",
              "vignette": "A UU triaxial test on saturated clay fails at a principal stress difference (σ1 − σ3)f = 1,800 psf.",
              "stem": "Most nearly, the undrained shear strength su is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1,800 psf"
                },
                {
                  "id": "b",
                  "text": "900 psf",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "450 psf"
                },
                {
                  "id": "d",
                  "text": "3,600 psf"
                }
              ],
              "work": [
                "φu = 0 envelope: su = (σ1 − σ3)f / 2",
                "su = 1,800/2 = 900 psf",
                "1,800 psf is the stress difference (diameter), not the radius; 450 halves twice; 3,600 doubles"
              ],
              "explanation": "NCEES/Vandevelde undrained φ = 0: Mohr circle radius is su. Confusing diameter with radius is the classic trap.",
              "miss": "su is half of (σ1 − σ3)f for UU φ = 0.",
              "fepe": "UU: su = (σ1 − σ3)/2."
            },
            {
              "id": "gpe02-pe-1-04",
              "type": "mcq",
              "pe": true,
              "label": "Falling-head k",
              "given": "k = (a L /(A (t2 − t1))) ln(h1/h2)",
              "vignette": "Falling-head test: standpipe area a = 0.50 cm², sample area A = 80 cm², sample length L = 12 cm. Head falls from h1 = 40 cm to h2 = 20 cm in Δt = 180 s.",
              "stem": "Most nearly, k is:",
              "choices": [
                {
                  "id": "a",
                  "text": "4.2 × 10⁻⁴ cm/s (omit the ln term / treat Δh wrongly)"
                },
                {
                  "id": "b",
                  "text": "7.5 × 10⁻³ cm/s (constant-head formula with Q guessed from a·Δh)"
                },
                {
                  "id": "c",
                  "text": "2.9 × 10⁻⁴ cm/s",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "2.9 × 10⁻² cm/s (off by ×100)"
                }
              ],
              "work": [
                "ln(h1/h2) = ln(2) ≈ 0.693",
                "k = (0.50 × 12)/(80 × 180) × 0.693 = (6/14,400) × 0.693 ≈ 4.167e-4 × 0.693 ≈ 2.89 × 10⁻⁴ cm/s",
                "≈ 2.9 × 10⁻⁴ cm/s"
              ],
              "explanation": "NCEES §3.8.5.1 falling head. Skipping ln(h1/h2), swapping in QL/(tAh), or shifting the decimal are common errors.",
              "miss": "Falling head needs ln(h1/h2); keep cm/s consistent.",
              "fepe": "Falling head: k = (aL/AΔt) ln(h1/h2)."
            },
            {
              "id": "gpe02-pe-1-05",
              "type": "mcq",
              "pe": true,
              "label": "Drained sand τf",
              "given": "τf = c′ + σ′n tan φ′; clean sand c′ = 0",
              "vignette": "Drained direct-shear interpretation on clean sand: c′ = 0, φ′ = 32°. The effective normal stress on the failure plane is σ′n = 2,000 psf.",
              "stem": "Most nearly, the shear strength τf is:",
              "choices": [
                {
                  "id": "a",
                  "text": "2,000 psf"
                },
                {
                  "id": "b",
                  "text": "1,060 psf (using tan 28° or sin 32° by mistake)"
                },
                {
                  "id": "c",
                  "text": "640 psf (≈ 2000 × 0.32, treating φ′ as a decimal multiplier)"
                },
                {
                  "id": "d",
                  "text": "1,250 psf",
                  "correct": true
                }
              ],
              "work": [
                "tan 32° ≈ 0.6249",
                "τf = 0 + 2,000 × 0.6249 ≈ 1,250 psf",
                "Using φ′/100 or sin φ′ underestimates; equating τf to σ′n ignores friction"
              ],
              "explanation": "NCEES §3.3.2 with c′ = 0: τf = σ′n tan φ′. Degrees are not a linear percent multiplier; use tan φ′.",
              "miss": "τf = σ′ tan φ′ — calculator in degree mode for tan 32°.",
              "fepe": "Sand drained: τ = σ′ tan φ′."
            }
          ]
        }
      ],
      "topic": 2
    }
  ]
});
