/*
 * STRATA built-in pack: GEO PE · 3. Construction Observation, Monitoring, QA/QC & Safety (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES PE Civil Reference Handbook Ch. 3.9–3.11 / Ch.2, OSHA 29 CFR 1926 Subpart P, UFC 3-220-10, DM 7.02, FHWA NHI-06-088, Vandevelde Depth II/IV).
 * Do not redistribute.
 * Maps to PE topic 3 (Construction Observation, Monitoring, QA/QC, and Safety) — conceptual + PE bench tracks.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-03-construction",
  "title": "GEO PE · 3. Construction Observation, Monitoring, QA/QC & Safety",
  "version": "1.0.0",
  "description": "Personal use only. Original questions based on Jayce's study library (NCEES PE Civil Reference Handbook Ch. 3.9–3.11 / Ch.2, OSHA 29 CFR 1926 Subpart P, UFC 3-220-10, DM 7.02, FHWA NHI-06-088, Vandevelde Depth II/IV). Do not redistribute.",
  "units": [
    {
      "id": "gpe03-const",
      "title": "3. Construction Observation, Monitoring, QA/QC & Safety",
      "blurb": "Earthwork compaction QA, OSHA trench safety, geotech instrumentation, and erosion/scour protection — PE Geotechnical depth.",
      "lessons": [
        {
          "id": "gpe03-const-1",
          "title": "Construction observation · Concepts",
          "minutes": 40,
          "xp": 60,
          "summary": "Scenario judgment and short calcs across 3A–3D: Proctor/RC, OSHA soil types & slopes, piezometers/inclinometers, erosion & scour.",
          "items": [
            {
              "id": "gpe03-const-1-01",
              "type": "mcq",
              "label": "3A · Relative compaction",
              "stem": "Field nuclear-gauge dry unit weight is γd,field = 118.0 pcf. Laboratory modified Proctor γd,max = 124.2 pcf. Most nearly, relative compaction RC is:",
              "choices": [
                {
                  "id": "a",
                  "text": "95%",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "105%"
                },
                {
                  "id": "c",
                  "text": "90%"
                },
                {
                  "id": "d",
                  "text": "85%"
                }
              ],
              "explanation": "NCEES §3.9.2: RC = (γd,field/γd,max)×100 = 118.0/124.2×100 ≈ 95.0%. 105% inverts the ratio; 90% and 85% are common specification floors substituted for the measured value.",
              "miss": "RC = γd,field/γd,max × 100. Do not invert the ratio or report a spec minimum instead of the measurement.",
              "fepe": "RC (%) = 100·γd,field/γd,max (same Proctor standard)."
            },
            {
              "id": "gpe03-const-1-02",
              "type": "mcq",
              "label": "3A · Standard vs modified Proctor",
              "stem": "Comparing ASTM D698 (standard Proctor) to ASTM D1557 (modified Proctor) on the same soil, which statement matches the NCEES handbook compaction-test table?",
              "choices": [
                {
                  "id": "a",
                  "text": "Modified uses a lighter hammer and fewer layers, so γd,max is lower and wopt is higher"
                },
                {
                  "id": "b",
                  "text": "Modified uses a heavier hammer, greater drop, and more layers (higher energy), so γd,max is typically higher and wopt lower than standard",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Both tests deliver the same energy (12,375 ft-lb/ft³); only mold diameter differs"
                },
                {
                  "id": "d",
                  "text": "Standard Proctor energy is 56,250 ft-lb/ft³; modified is 12,375 ft-lb/ft³"
                }
              ],
              "explanation": "NCEES §3.9.1: standard D698 — 5.5 lb×12 in, 3 layers → 12,375 ft-lb/ft³; modified D1557 — 10 lb×18 in, 5 layers → 56,250 ft-lb/ft³. Higher energy raises γd,max and shifts wopt dryward. Other choices reverse hammer/energy or swap the two energies.",
              "miss": "Modified = higher energy (56,250) → denser/drier peak than standard (12,375).",
              "fepe": "D698 12.4k vs D1557 56.3k ft-lb/ft³ — know which is which."
            },
            {
              "id": "gpe03-const-1-03",
              "type": "mcq",
              "label": "3A · Compaction equipment",
              "stem": "A clayey fill (CL/CH) is being placed in thin lifts for a structural embankment. Per NCEES/NHI compaction-equipment guidance, which roller type is most appropriate as the primary compaction tool?",
              "choices": [
                {
                  "id": "a",
                  "text": "Smooth steel drum alone without kneading, because clay responds only to static weight"
                },
                {
                  "id": "b",
                  "text": "Vibratory smooth drum intended for clean coarse sand, used dry of optimum"
                },
                {
                  "id": "c",
                  "text": "Sheepsfoot (tamping-foot) roller providing kneading action in cohesive soils",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Grid roller intended primarily for rockfill breakdown only"
                }
              ],
              "explanation": "NCEES §3.9.3 / NHI Fig. 5-32: sheepsfoot/tamping-foot zones cover clay with kneading; vibratory smooth drums suit sand; grid rollers suit rock. Using a sand-oriented vibratory drum on fat clay is a common field mismatch.",
              "miss": "Cohesive fills → kneading (sheepsfoot/tamping foot). Vibratory smooth drums are for granular soils.",
              "fepe": "Match roller to soil: clay → sheepsfoot; sand → vibratory."
            },
            {
              "id": "gpe03-const-1-04",
              "type": "mcq",
              "label": "3A · Dry of optimum",
              "stem": "A silty clay is compacted dry of optimum to the same relative compaction as a companion lift wet of optimum. Relative to the wet-of-optimum lift, the dry-of-optimum lift most nearly tends to have:",
              "choices": [
                {
                  "id": "a",
                  "text": "Lower as-compacted undrained strength, a dispersed fabric, and lower permeability"
                },
                {
                  "id": "b",
                  "text": "Identical engineering properties because RC alone fixes strength, fabric, and k"
                },
                {
                  "id": "c",
                  "text": "Necessarily lower γd, so RC cannot actually be equal when w differs"
                },
                {
                  "id": "d",
                  "text": "Higher as-compacted undrained strength and a more flocculated fabric that is typically more permeable and more brittle after wetting",
                  "correct": true
                }
              ],
              "explanation": "At equal RC, dry-of-optimum compaction produces a flocculated fabric with higher as-compacted strength, typically higher permeability, and more brittle soaked behavior; wet-of-optimum tends toward a dispersed fabric with lower k (NCEES §3.9 / NHI compaction discussion). Equal RC at different water contents on opposite sides of the curve is routine.",
              "miss": "Equal RC does not erase dry-side vs wet-side fabric effects. Dry side → flocculated / stronger as-compacted / more permeable.",
              "fepe": "Dry of wopt: flocculated, stronger as-compacted, higher k."
            },
            {
              "id": "gpe03-const-1-05",
              "type": "mcq",
              "label": "3B · OSHA Type A exclusion",
              "stem": "A stiff clay has qu = 2.0 tsf from pocket penetrometer readings. The clay is previously disturbed fill and the site is adjacent to pile-driving vibration. Per OSHA / NCEES §3.10 soil typing, the deposit should be classified as:",
              "choices": [
                {
                  "id": "a",
                  "text": "Type B (or Type C if seepage/other Type C conditions apply) — previously disturbed soil and vibration disqualify Type A even when qu ≥ 1.5 tsf",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Type A, because qu ≥ 1.5 tsf is the only criterion that matters"
                },
                {
                  "id": "c",
                  "text": "Stable rock, because qu > 1.5 tsf implies intact mineral matter"
                },
                {
                  "id": "d",
                  "text": "Type C automatically, because any vibration forces Type C regardless of qu"
                }
              ],
              "explanation": "NCEES §3.10.1: Type A requires cohesive qu ≥ 1.5 tsf AND none of the exclusions (fissured, vibration, previously disturbed, adverse layering, seeping water). Disturbed + vibration → cannot be Type A; typically Type B unless other Type C conditions exist. qu alone does not grant Type A; Stable rock is geologic intact rock; vibration alone does not force Type C on a stiff clay.",
              "miss": "Type A exclusions (disturbed, vibration, fissured, seepage, adverse layering) override a high qu.",
              "fepe": "qu ≥ 1.5 tsf is necessary but not sufficient for Type A."
            },
            {
              "id": "gpe03-const-1-06",
              "type": "mcq",
              "label": "3B · Allowable slopes",
              "stem": "For a simple slope excavation ≤ 20 ft deep in Type B soil under OSHA maximum allowable slopes (NCEES handbook table), the steepest permitted slope is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "3/4 H : 1 V (≈53°)"
                },
                {
                  "id": "b",
                  "text": "1 H : 1 V (45°)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "1½ H : 1 V (≈34°)"
                },
                {
                  "id": "d",
                  "text": "½ H : 1 V (≈63°)"
                }
              ],
              "explanation": "NCEES §3.10.2: Type A 3/4:1 (53°); Type B 1:1 (45°); Type C 1½:1 (34°); Type A short-term ≤12 ft: ½:1 (63°). Using Type A or Type C slopes, or short-term Type A, are the usual mix-ups.",
              "miss": "Memorize Type A 3/4:1, B 1:1, C 1½:1. Do not use Type A short-term ½:1 on Type B.",
              "fepe": "OSHA max slopes: A ¾:1, B 1:1, C 1½:1."
            },
            {
              "id": "gpe03-const-1-07",
              "type": "mcq",
              "label": "3B · Egress",
              "stem": "A trench is 6 ft deep in Type C sand. Per OSHA / NCEES-cited trench rules, which egress requirement most nearly applies?",
              "choices": [
                {
                  "id": "a",
                  "text": "No fixed egress is required until depth exceeds 10 ft"
                },
                {
                  "id": "b",
                  "text": "Egress is required only if the trench is classified as a permit-required confined space"
                },
                {
                  "id": "c",
                  "text": "A ladder or other fixed means of egress is required; lateral travel to egress must not exceed 25 ft; ladder must extend ≥ 36 in above the landing",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "A ladder is required but may stop flush with the ground surface if a spotter is present"
                }
              ],
              "explanation": "OSHA Subpart P: trenches ≥ 4 ft need fixed egress; max 25 ft lateral travel; ladders secured and extend ≥ 36 in above landing. The 10-ft idea confuses protective-system / tabulated-data depth cues; confined-space rules are additional; flush ladders violate the 36-in extension.",
              "miss": "≥4 ft → egress; ≤25 ft lateral; ladder ≥36 in above landing.",
              "fepe": "Trench ≥4 ft: egress within 25 ft; ladder +36 in."
            },
            {
              "id": "gpe03-const-1-08",
              "type": "mcq",
              "label": "3B · Type C soils",
              "stem": "Which deposit is correctly classified as OSHA Type C per NCEES §3.10.1?",
              "choices": [
                {
                  "id": "a",
                  "text": "Undisturbed stiff clay with qu = 2.0 tsf, no fissures, no vibration, no seepage"
                },
                {
                  "id": "b",
                  "text": "Dry angular gravel that would otherwise meet Type B descriptions, with no seepage"
                },
                {
                  "id": "c",
                  "text": "Stable sandstone that stands vertically when excavated"
                },
                {
                  "id": "d",
                  "text": "Clean sand below the water table with free seepage into the excavation",
                  "correct": true
                }
              ],
              "explanation": "Type C includes cohesive qu ≤ 0.5 tsf, granular soils, submerged soil, freely seeping soil, and unstable submerged rock. Freely seeping saturated sand is Type C. Stiff undisturbed clay with qu = 2 tsf (no exclusions) is Type A; dry angular gravel is a Type B example; stable rock is its own class.",
              "miss": "Seeping/submerged granular soils are Type C regardless of ‘strength’ feel.",
              "fepe": "Type C: soft clay, sand/gravel, submerged or seeping soils."
            },
            {
              "id": "gpe03-const-1-09",
              "type": "mcq",
              "label": "3C · Observation well vs piezometer",
              "stem": "A site has a thin perched water zone over a clay aquitard and a deeper confined sand aquifer. To measure pore pressure in the deep sand without short-circuiting through the perched zone, the preferred instrument is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "An open standpipe piezometer (or diaphragm piezometer) with a sealed tip in the deep sand and seals isolating the perched zone",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "An unsealed observation well screened through both the perched zone and the deep sand"
                },
                {
                  "id": "c",
                  "text": "A surface settlement plate only, because settlement implies pore-pressure change"
                },
                {
                  "id": "d",
                  "text": "A probe inclinometer casing without a pore-pressure tip"
                }
              ],
              "explanation": "NCEES §3.11: observation wells vertically connect strata and should only be used in continuously permeable strata. Multi-aquifer sites need sealed piezometers so the tip reads only the target zone. Settlement plates and inclinometers measure deformation, not piezometric head.",
              "miss": "Do not use an unsealed well across aquitards — it short-circuits heads. Seal the tip to the target stratum.",
              "fepe": "Observation well ≠ piezometer when strata are stratified."
            },
            {
              "id": "gpe03-const-1-10",
              "type": "mcq",
              "label": "3C · Inclinometer purpose",
              "stem": "During excavation for a braced cut next to an existing building, which instrument is most appropriate to monitor subsurface horizontal displacement of the retained soil mass with depth?",
              "choices": [
                {
                  "id": "a",
                  "text": "Open standpipe piezometer only"
                },
                {
                  "id": "b",
                  "text": "Probe inclinometer in a near-vertical casing through the retained soil / SOE zone",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Nuclear density gauge on the street surface"
                },
                {
                  "id": "d",
                  "text": "Pneumatic piezometer tip at the building foundation elevation only"
                }
              ],
              "explanation": "NCEES §3.11: probe inclinometers measure horizontal subsurface displacement profiles — standard for wall/soil movement vs depth beside excavations. Piezometers measure pore pressure; nuclear gauges measure density.",
              "miss": "Horizontal subsurface movement vs depth → inclinometer. Piezometers answer pore pressure, not deflection profiles.",
              "fepe": "Inclinometer = lateral displacement profile; piezometer = u."
            },
            {
              "id": "gpe03-const-1-11",
              "type": "mcq",
              "label": "3C · Vibrating-wire piezometer",
              "stem": "An embankment dam is under construction and the designer wants embedded piezometers with short time lag, minimal construction interference (leads independent of tip elevation), and no freezing problems in tubes. Per the NCEES instrumentation table, which type best matches that preference list?",
              "choices": [
                {
                  "id": "a",
                  "text": "Observation well only (unscreened open hole)"
                },
                {
                  "id": "b",
                  "text": "Twin-tube hydraulic piezometer (requires periodic flushing; freeze risk)"
                },
                {
                  "id": "c",
                  "text": "Vibrating-wire (embedded diaphragm) piezometer",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Open standpipe piezometer extended through the full fill height without seals"
                }
              ],
              "explanation": "NCEES §3.11 table: vibrating-wire embedded piezometers — short time lag, leads/readout independent of tip level, no freezing problems; watch zero drift and lightning. Twin-tube hydraulic needs flushing and can freeze; observation wells/open standpipes through fill interrupt construction and connect strata.",
              "miss": "VW piezometers fit short lag + no freeze + low construction interference; hydraulic tubes freeze/flush.",
              "fepe": "Embedded VW/pneumatic: short lag, no freeze; standpipes interrupt fill."
            },
            {
              "id": "gpe03-const-1-12",
              "type": "mcq",
              "label": "3D · Scour critical velocity",
              "stem": "The NCEES handbook scour-velocity equation is vc = [8β(s−1)gd / f]^0.5. Holding other terms fixed, doubling the particle diameter d most nearly multiplies vc by:",
              "choices": [
                {
                  "id": "a",
                  "text": "2.00"
                },
                {
                  "id": "b",
                  "text": "4.00"
                },
                {
                  "id": "c",
                  "text": "0.50"
                },
                {
                  "id": "d",
                  "text": "1.41",
                  "correct": true
                }
              ],
              "explanation": "vc ∝ √d, so doubling d multiplies vc by √2 ≈ 1.41. Treating the relation as linear in d (×2), as linear without the square root (×4), or inverting (×0.5) are the intended near-misses.",
              "miss": "Square-root dependence on d: factor √2 ≈ 1.41 when d doubles.",
              "fepe": "Scour vc ∝ √d (and √β, √(s−1), 1/√f)."
            },
            {
              "id": "gpe03-const-1-13",
              "type": "mcq",
              "label": "3D · Erosion control on slopes",
              "stem": "A freshly graded 2H:1V clayey embankment slope will be exposed through a rainy season before vegetation establishes. Which measure most directly addresses surface erosion protection consistent with geotech construction practice?",
              "choices": [
                {
                  "id": "a",
                  "text": "Reclassifying the fill as OSHA Type A so sloping is unnecessary"
                },
                {
                  "id": "b",
                  "text": "Deepening foundation borings at the crest only"
                },
                {
                  "id": "c",
                  "text": "Switching the nuclear gauge from nuclear to drive-cylinder mode"
                },
                {
                  "id": "d",
                  "text": "Temporary slope protection such as mulch, erosion-control blankets/mats, or equivalent cover plus drainage that keeps runoff from concentrating on bare soil",
                  "correct": true
                }
              ],
              "explanation": "Construction QA includes temporary erosion/sediment control on exposed slopes (mulch, blankets, diversion of concentrated flow) until vegetation or armor is in place. OSHA typing, boring depth, and gauge mode do not protect the slope surface from rainfall erosion.",
              "miss": "Bare slopes need surface cover + drainage control; lab/OSHA paperwork does not stop sheet/rill erosion.",
              "fepe": "Erosion control: cover + manage concentrated runoff on exposed fills."
            },
            {
              "id": "gpe03-const-1-14",
              "type": "mcq",
              "label": "3A · Spec vs measured RC",
              "stem": "Specs require ≥ 95% of modified Proctor. Field tests: γd,field = 121.0 pcf; lab γd,max (modified) = 130.0 pcf; γd,max (standard) = 122.0 pcf. The correct acceptance conclusion is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Accept — 121/122 ≈ 99% of standard Proctor exceeds 95%"
                },
                {
                  "id": "b",
                  "text": "Reject — RC = 121/130 = 93% of modified Proctor, below the 95% modified requirement",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Accept — any field dry density above 120 pcf automatically meets modified 95%"
                },
                {
                  "id": "d",
                  "text": "Reject — solely because a standard Proctor curve was also run in the lab"
                }
              ],
              "explanation": "RC must use the same lab standard named in the spec. Spec says modified → RC = 121/130 = 93.1% < 95% → reject. Comparing to standard Proctor (~99%) is a common PE trap when the spec names modified.",
              "miss": "Match the Proctor standard in the specification. Do not swap modified vs standard γd,max.",
              "fepe": "RC denominator = the Proctor test named in the specs."
            },
            {
              "id": "gpe03-const-1-15",
              "type": "mcq",
              "label": "3B · Protective systems trigger",
              "stem": "For excavations in soil, OSHA generally requires a protective system (sloping, benching, shoring, or shielding) when depth exceeds which threshold, absent stable-rock or other listed exceptions?",
              "choices": [
                {
                  "id": "a",
                  "text": "2 ft"
                },
                {
                  "id": "b",
                  "text": "10 ft"
                },
                {
                  "id": "c",
                  "text": "5 ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "20 ft"
                }
              ],
              "explanation": "OSHA 1926 Subpart P: excavations > 5 ft deep generally require a protective system unless entirely in stable rock or otherwise excepted. Handbook simple-slope figures are capped at 20 ft without engineered design — that is a maximum for tabulated sloping, not the start of protection. 10 ft is a frequent distractor from other Subpart P cues; 2 ft is below the trigger.",
              "miss": "Protective systems generally required for excavations > 5 ft (20 ft is the engineered-design threshold for simple sloping charts).",
              "fepe": ">5 ft → protect (slope/shore/shield); >20 ft → engineered design."
            }
          ]
        }
      ],
      "topic": 3
    },
    {
      "id": "gpe03-bench",
      "title": "PE bench · Construction / QA & safety",
      "bench": true,
      "lessons": [
        {
          "id": "gpe03-pe-1",
          "title": "Construction PE bench",
          "minutes": 25,
          "xp": 40,
          "summary": "Relative compaction, OSHA slope geometry, ZAV dry density, piezometric head, short-term Type A top width.",
          "items": [
            {
              "id": "gpe03-pe-1-01",
              "type": "mcq",
              "pe": true,
              "label": "RC from nuclear gauge",
              "given": "RC = (γd,field/γd,max)×100; γd = γt/(1+w)",
              "vignette": "Nuclear gauge: moist density γt = 132.0 pcf, moisture content w = 12%. Laboratory modified Proctor γd,max = 125.0 pcf. Spec requires ≥ 95% modified Proctor.",
              "stem": "Most nearly, the measured relative compaction is:",
              "choices": [
                {
                  "id": "a",
                  "text": "94%",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "95%"
                },
                {
                  "id": "c",
                  "text": "106%"
                },
                {
                  "id": "d",
                  "text": "90%"
                }
              ],
              "work": [
                "γd,field = γt/(1+w) = 132.0/1.12 = 117.86 pcf",
                "RC = 117.86/125.0 × 100 = 94.3% ≈ 94%",
                "95% is the specification floor, not the measured RC",
                "106% uses γt/γd,max without stripping moisture",
                "90% is a round-down / wrong-denominator near miss"
              ],
              "explanation": "Convert moist to dry, then divide by the specified Proctor maximum. Reporting the spec minimum (95%) or forgetting to compute γd from γt are classic mistakes.",
              "miss": "Always γd = γt/(1+w) before RC. 94% is measured; 95% is only the acceptance limit.",
              "fepe": "Gauge → γd → RC vs named Proctor max."
            },
            {
              "id": "gpe03-pe-1-02",
              "type": "mcq",
              "pe": true,
              "label": "OSHA Type B slope width",
              "given": "Type B max slope 1H:1V; excavation depth H = 12 ft; simple slope both sides",
              "vignette": "A 12-ft-deep simple-slope trench in Type B soil will be cut at the OSHA maximum allowable slope. Bottom width needed for the pipe work is 4 ft (clear).",
              "stem": "Most nearly, the minimum top width of the excavation is:",
              "choices": [
                {
                  "id": "a",
                  "text": "28 ft",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "16 ft"
                },
                {
                  "id": "c",
                  "text": "22 ft"
                },
                {
                  "id": "d",
                  "text": "40 ft"
                }
              ],
              "work": [
                "Type B → 1H:1V each side → horizontal setback per side = 12 ft",
                "Top width = bottom + 2×setback = 4 + 2×12 = 28 ft",
                "16 ft = bottom + one side only (forgot second face)",
                "22 ft = 4 + 1.5×12 (Type C run on a single-face misread)",
                "40 ft = 4 + 2×(1.5×12) using Type C slopes on both sides"
              ],
              "explanation": "NCEES allowable slopes: Type B is 1:1. Each face needs H of horizontal run; top = bottom + 2H. Missing a face or using Type C 1½:1 are the usual PE errors.",
              "miss": "Type B 1:1 both sides: top = B_bottom + 2H. Do not use Type C 1½:1 here.",
              "fepe": "Simple slope top width = bottom + 2·(H × run/rise)."
            },
            {
              "id": "gpe03-pe-1-03",
              "type": "mcq",
              "pe": true,
              "label": "Zero-air-voids γd",
              "given": "γd,ZAV = Gs·γw/(1+w·Gs) for S=1; γw = 62.4 pcf",
              "vignette": "Lab compaction point: Gs = 2.70, water content w = 16%. Plot the zero-air-voids dry unit weight at this water content.",
              "stem": "Most nearly, γd on the ZAV curve at w = 16% is:",
              "choices": [
                {
                  "id": "a",
                  "text": "125 pcf"
                },
                {
                  "id": "b",
                  "text": "118 pcf",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "146 pcf"
                },
                {
                  "id": "d",
                  "text": "108 pcf"
                }
              ],
              "work": [
                "At S = 1: e = w Gs = 0.16×2.70 = 0.432",
                "γd = Gs γw/(1+e) = 2.70×62.4/1.432 ≈ 117.7 pcf ≈ 118 pcf",
                "125 pcf is a typical Proctor-peak distractor, not ZAV at this w",
                "146 pcf ≈ Gs γw/(1+w) forgetting Gs on the water term",
                "108 pcf understates by a common phase-arithmetic slip"
              ],
              "explanation": "Zero-air-voids line: S = 1 ⇒ e = wGs ⇒ γd = Gsγw/(1+e). Forgetting Gs in the denominator (using 1+w) or quoting a typical max density are common mistakes.",
              "miss": "ZAV: γd = Gsγw/(1+w Gs). Include Gs with w.",
              "fepe": "ZAV dry density from S=1 phase relation at the given w."
            },
            {
              "id": "gpe03-pe-1-04",
              "type": "mcq",
              "pe": true,
              "label": "Standpipe piezometric head",
              "given": "u = γw · h; h = water EL − tip EL; γw = 62.4 pcf",
              "vignette": "Open standpipe piezometer tip elevation = 100.0 ft. Water level in the standpipe = 118.0 ft.",
              "stem": "Most nearly, pore-water pressure at the tip is:",
              "choices": [
                {
                  "id": "a",
                  "text": "7,363 psf"
                },
                {
                  "id": "b",
                  "text": "562 psf"
                },
                {
                  "id": "c",
                  "text": "1,123 psf",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "1,800 psf"
                }
              ],
              "work": [
                "Piezometric head above tip h = 118.0 − 100.0 = 18.0 ft",
                "u = γw h = 62.4 × 18.0 = 1,123 psf",
                "7,363 psf ≈ 120 pcf × 18 × something / uses soil γ instead of γw wrongly scaled",
                "562 psf ≈ 9×62.4 (half the head)",
                "1,800 psf = 18×100 (wrong unit weight)"
              ],
              "explanation": "Standpipe water EL minus tip EL is the head at the tip; multiply by γw. Using soil γ or halving the head are typical errors.",
              "miss": "u = γw × (water EL − tip EL). Use water unit weight, not soil γ.",
              "fepe": "Standpipe: u = γw·Δh above tip."
            },
            {
              "id": "gpe03-pe-1-05",
              "type": "mcq",
              "pe": true,
              "label": "Type A short-term setback",
              "given": "Type A short-term max slope ½H:1V for H ≤ 12 ft",
              "vignette": "A 10-ft-deep short-term excavation in qualifying Type A clay will use the OSHA short-term maximum slope. Bottom clear width = 6 ft; simple slope both sides; no lower vertical supported portion.",
              "stem": "Most nearly, the minimum top width is:",
              "choices": [
                {
                  "id": "a",
                  "text": "26 ft"
                },
                {
                  "id": "b",
                  "text": "21 ft"
                },
                {
                  "id": "c",
                  "text": "11 ft"
                },
                {
                  "id": "d",
                  "text": "16 ft",
                  "correct": true
                }
              ],
              "work": [
                "Type A short-term → ½H:1V ⇒ horizontal run per side = 0.5 × 10 = 5 ft",
                "Top width = 6 + 2×5 = 16 ft",
                "26 ft = 6 + 2×10 using Type B 1:1",
                "21 ft = 6 + 2×(0.75×10) using ordinary Type A ¾:1",
                "11 ft = 6 + 5 (only one side sloped)"
              ],
              "explanation": "Short-term Type A (≤12 ft) allows ½:1. Top = bottom + 2×(0.5H). Using regular Type A ¾:1 or Type B 1:1 are the intended near-misses.",
              "miss": "Short-term Type A is ½:1, not the ordinary ¾:1. Both faces count.",
              "fepe": "Type A short-term ≤12 ft: ½:1 each side."
            }
          ]
        }
      ],
      "topic": 3
    }
  ]
});
