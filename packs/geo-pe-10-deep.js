/*
 * STRATA built-in pack: GEO PE · 10. Deep Foundations (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES HB, FHWA GEC 12 / GEC 10, DM 7.02 Ch.5, Vandevelde Depth I/III, ICT drilled-shaft report).
 * Do not redistribute.
 * Maps to PE topic 10 (Deep Foundations) — conceptual + PE bench tracks.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-10-deep",
  "title": "GEO PE · 10. Deep Foundations",
  "version": "1.0.0",
  "description": "Personal use only. Original questions based on Jayce's study library (NCEES HB, FHWA GEC 12 / GEC 10, DM 7.02 Ch.5, Vandevelde Depth I/III, ICT drilled-shaft report). Do not redistribute.",
  "units": [
    {
      "id": "gpe10-deep",
      "title": "10. Deep Foundations",
      "blurb": "Axial/lateral capacity & settlement, installation, static/dynamic load tests, integrity testing — PE depth.",
      "lessons": [
        {
          "id": "gpe10-deep-1",
          "title": "Deep foundations · Concepts",
          "minutes": 40,
          "xp": 60,
          "summary": "10A–10E: driven/drilled/micropile/helical/CFA capacity, lateral, installation, PDA/static tests, PIT/CSL.",
          "items": [
            {
              "id": "gpe10-deep-1-01",
              "type": "mcq",
              "label": "10A · Alpha method",
              "stem": "The alpha method for pile shaft resistance in clay most nearly uses:",
              "choices": [
                {
                  "id": "a",
                  "text": "fs = α su along the shaft (α ≤ 1 depending on su and method)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "fs = β σ′v with β independent of clay su by definition of alpha"
                },
                {
                  "id": "c",
                  "text": "Only end bearing qb = Nq σ′v with no shaft term"
                },
                {
                  "id": "d",
                  "text": "SPT N60 directly as fs in tsf without α"
                }
              ],
              "explanation": "Alpha (Tomlinson-type): fs = α su. Beta is the effective-stress sand/clay alternative fs = β σ′v.",
              "miss": "Alpha: fs=α su; beta: fs=β σ′v.",
              "fepe": "Clay shaft: α-method fs = α su."
            },
            {
              "id": "gpe10-deep-1-02",
              "type": "mcq",
              "label": "10A · Beta method",
              "stem": "The beta method for shaft resistance is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "fs = α su only, never using effective stress"
                },
                {
                  "id": "b",
                  "text": "fs = β σ′v (effective overburden), often used in sands and sometimes clays",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "qb = 9 su for sands"
                },
                {
                  "id": "d",
                  "text": "Ignoring all shaft resistance by code"
                }
              ],
              "explanation": "Beta: fs = β σ′v. End bearing in clay often ~9 su for deep foundations; that is not the beta shaft formula.",
              "miss": "Beta shaft = β σ′v; do not confuse with 9su tip in clay.",
              "fepe": "β-method: fs = β σ′v."
            },
            {
              "id": "gpe10-deep-1-03",
              "type": "mcq",
              "label": "10A · Clay end bearing",
              "stem": "Ultimate unit end bearing of a deep foundation in saturated clay (φu=0) is often taken most nearly as:",
              "choices": [
                {
                  "id": "a",
                  "text": "qb = Nq σ′v with Nq ≫ 50 always"
                },
                {
                  "id": "b",
                  "text": "qb = 0 because clays have no tip resistance"
                },
                {
                  "id": "c",
                  "text": "qb ≈ 9 su (with depth/shape limits as applicable)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "qb = Ka γ H"
                }
              ],
              "explanation": "Undrained tip: qb ≈ Nc* su with Nc* often 9 for deep piles/shafts (GEC/DM practice). Sand tips use Nq σ′v.",
              "miss": "Clay tip ≈ 9 su; sand tip uses Nq σ′v.",
              "fepe": "Clay end bearing ~ 9 su."
            },
            {
              "id": "gpe10-deep-1-04",
              "type": "mcq",
              "label": "10A · Drilled shaft vs driven",
              "stem": "Relative to a driven displacement pile in the same sand profile, a drilled shaft most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always densifies the sand more than a closed-end driven pile"
                },
                {
                  "id": "b",
                  "text": "Is installed with the same driving stresses and PDA as a steel H-pile"
                },
                {
                  "id": "c",
                  "text": "Cannot carry axial load by side shear"
                },
                {
                  "id": "d",
                  "text": "Is cast-in-place in a drilled hole (casing/slurry as needed) and does not densify sand by driving displacement",
                  "correct": true
                }
              ],
              "explanation": "Drilled shafts are excavated and concreted; driven piles displace/densify. Side shear still develops on shafts (often progressive).",
              "miss": "Drilled shaft ≠ driven displacement densification.",
              "fepe": "Driven displace; drilled excavate & cast."
            },
            {
              "id": "gpe10-deep-1-05",
              "type": "mcq",
              "label": "10B · Lateral capacity",
              "stem": "Lateral pile response analysis commonly uses:",
              "choices": [
                {
                  "id": "a",
                  "text": "p-y curves (soil spring nonlinearity) or equivalent Broms/characteristic load methods",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Only 1-D consolidation Sc for lateral deflection"
                },
                {
                  "id": "c",
                  "text": "Only Rankine Ka on the pile head with no embedment springs"
                },
                {
                  "id": "d",
                  "text": "OSHA trench sloping charts for pile head deflection"
                }
              ],
              "explanation": "Lateral piles: p-y (or Broms for ultimate). Consolidation Sc is axial settlement; OSHA is excavation safety.",
              "miss": "Lateral piles → p-y / Broms — not consolidation Sc.",
              "fepe": "Lateral: p-y curves (or Broms)."
            },
            {
              "id": "gpe10-deep-1-06",
              "type": "mcq",
              "label": "10C · Driven pile installation",
              "stem": "Refusal of a driven pile most nearly means:",
              "choices": [
                {
                  "id": "a",
                  "text": "The pile has zero structural capacity"
                },
                {
                  "id": "b",
                  "text": "Driving resistance reaches a specified blow-count/penetration limit indicating practical driveability end",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "The pile must be extracted immediately by code in all cases"
                },
                {
                  "id": "d",
                  "text": "PDA is prohibited after refusal"
                }
              ],
              "explanation": "Refusal = specified high blow count / low set per criteria. Capacity is then verified by analysis/testing — refusal ≠ zero capacity.",
              "miss": "Refusal = driveability limit, not zero geotech capacity.",
              "fepe": "Refusal: blow-count criteria / end of drive."
            },
            {
              "id": "gpe10-deep-1-07",
              "type": "mcq",
              "label": "10C · CFA piles",
              "stem": "Continuous-flight-auger (CFA) piles are most nearly installed by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Driving a closed-end steel pipe with an impact hammer only"
                },
                {
                  "id": "b",
                  "text": "Spinning helical plates like a screw pile exclusively"
                },
                {
                  "id": "c",
                  "text": "Drilling with a continuous hollow-stem auger and pumping concrete as the auger is extracted",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Hand-excavating belled piers without concrete"
                }
              ],
              "explanation": "CFA: auger drill + concrete through stem while extracting. Not impact-driven pipe or helical screw (different products).",
              "miss": "CFA = auger + tremie/pump concrete on extraction.",
              "fepe": "CFA: continuous auger, concrete on pullout."
            },
            {
              "id": "gpe10-deep-1-08",
              "type": "mcq",
              "label": "10D · Static load test",
              "stem": "A static axial compressive load test on a pile is used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Measure only concrete compressive strength of cylinders"
                },
                {
                  "id": "b",
                  "text": "Replace all integrity testing forever on every pile"
                },
                {
                  "id": "c",
                  "text": "Determine OSHA soil type from the load-settlement curve"
                },
                {
                  "id": "d",
                  "text": "Measure load–settlement response to interpret ultimate/allowable capacity (e.g., Davisson offset)",
                  "correct": true
                }
              ],
              "explanation": "Static load tests give Q–δ for capacity interpretation (Davisson, etc.). Integrity methods are separate QA tools.",
              "miss": "Static test → capacity from load-settlement; PIT/CSL → integrity.",
              "fepe": "Static load test: Q–δ → capacity."
            },
            {
              "id": "gpe10-deep-1-09",
              "type": "mcq",
              "label": "10D · Davisson",
              "stem": "Davisson’s offset criterion is most nearly used to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Define a failure load from the static load-test curve as the load at intersection with an elastic line offset by a specified displacement",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Compute skin friction α from CPT only"
                },
                {
                  "id": "c",
                  "text": "Set Site Class for seismic design"
                },
                {
                  "id": "d",
                  "text": "Size OSHA trench boxes"
                }
              ],
              "explanation": "Davisson: offset elastic compression line; intersection with measured curve = failure load definition (Vandevelde / GEC).",
              "miss": "Davisson = offset method on static Q–δ curve.",
              "fepe": "Davisson offset → Qu from load test."
            },
            {
              "id": "gpe10-deep-1-10",
              "type": "mcq",
              "label": "10D · PDA / CAPWAP",
              "stem": "PDA with CAPWAP signal matching is most nearly used to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Measure only pile length with a tape"
                },
                {
                  "id": "b",
                  "text": "Estimate dynamic driving stresses and mobilizable capacity during/after driving from wave mechanics",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Perform CSL tomography of drilled shafts exclusively"
                },
                {
                  "id": "d",
                  "text": "Determine Atterberg limits of clay at the tip"
                }
              ],
              "explanation": "PDA/CAPWAP: wave equation / signal matching for stresses and capacity. CSL is a drilled-shaft integrity tool.",
              "miss": "PDA/CAPWAP → dynamic capacity & stresses; CSL → shaft integrity.",
              "fepe": "PDA/CAPWAP: dynamic pile testing."
            },
            {
              "id": "gpe10-deep-1-11",
              "type": "mcq",
              "label": "10E · Low-strain integrity",
              "stem": "A low-strain pile integrity test (PIT / pulse-echo) is most nearly intended to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Measure ultimate static capacity directly as a substitute for load tests in all codes"
                },
                {
                  "id": "b",
                  "text": "Replace static load tests for LRFD resistance factors without correlation"
                },
                {
                  "id": "c",
                  "text": "Screen for major length/cross-section anomalies (cracks, necks, early reflections) in piles/shafts",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Measure φ′ of sand along the shaft"
                }
              ],
              "explanation": "PIT finds impedance changes/anomalies; it does not by itself equal a static capacity test.",
              "miss": "PIT = integrity screening — not Qu by itself.",
              "fepe": "PIT: integrity anomalies, not Qu."
            },
            {
              "id": "gpe10-deep-1-12",
              "type": "mcq",
              "label": "10E · CSL",
              "stem": "Crosshole sonic logging (CSL) of a drilled shaft most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Uses a single surface hammer only with no access tubes"
                },
                {
                  "id": "b",
                  "text": "Requires the shaft to be made of timber"
                },
                {
                  "id": "c",
                  "text": "Replaces all need for concrete strength tests"
                },
                {
                  "id": "d",
                  "text": "Sends ultrasonic pulses between access tubes to detect anomalies in the concrete section",
                  "correct": true
                }
              ],
              "explanation": "CSL: tubes cast in shaft; first-arrival times/energy detect defects. Complementary to concrete testing, not a full replacement.",
              "miss": "CSL = tube-to-tube ultrasonics for shaft concrete integrity.",
              "fepe": "CSL: access tubes + ultrasonic logging."
            },
            {
              "id": "gpe10-deep-1-13",
              "type": "mcq",
              "label": "10A · Micropiles",
              "stem": "Micropiles are most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Small-diameter drilled and grouted piles (often with steel casing/reinforcement) used for capacity in restricted access / underpinning / difficult ground",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Large 10-ft-diameter drilled shafts only"
                },
                {
                  "id": "c",
                  "text": "Timber piles driven exclusively in waterfronts by definition"
                },
                {
                  "id": "d",
                  "text": "MSE wall steel strips"
                }
              ],
              "explanation": "Micropiles: small Ø, drilled/grouted, high-capacity in tight access and underpinning (GEC/industry PE knowledge).",
              "miss": "Micropile = small drilled/grouted pile — not a large shaft.",
              "fepe": "Micropiles: small Ø, drilled & grouted."
            },
            {
              "id": "gpe10-deep-1-14",
              "type": "mcq",
              "label": "10A · Helical piles",
              "stem": "Helical piles develop axial capacity most nearly from:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only skin friction on a smooth pipe with no plates"
                },
                {
                  "id": "b",
                  "text": "Bearing on helical plates (plus some shaft resistance), installed by torque",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Impact driving to refusal like an H-pile exclusively"
                },
                {
                  "id": "d",
                  "text": "Tremie concrete in a slurry-supported 6-ft shaft"
                }
              ],
              "explanation": "Helicals: plate bearing (individual or cylindrical shear) correlated often to installation torque.",
              "miss": "Helical capacity → plate bearing (± shaft); torque installation.",
              "fepe": "Helical: plate bearing; install by torque."
            },
            {
              "id": "gpe10-deep-1-15",
              "type": "mcq",
              "label": "10A · Group efficiency",
              "stem": "A closely spaced pile group in clay under undrained loading most nearly may show:",
              "choices": [
                {
                  "id": "a",
                  "text": "Efficiency always exactly 2.0 regardless of spacing"
                },
                {
                  "id": "b",
                  "text": "No interaction because piles never share load"
                },
                {
                  "id": "c",
                  "text": "Block failure / efficiency < 1 when spacing is tight, requiring group capacity checks less than Σ single piles",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Efficiency defined only by SPT N without spacing"
                }
              ],
              "explanation": "Tight groups can fail as a block; η often < 1 in clay. Always check group vs sum of singles.",
              "miss": "Close clay groups → check block failure (η may be <1).",
              "fepe": "Group capacity ≤ min(Σ singles, block)."
            }
          ]
        }
      ],
      "topic": 10
    },
    {
      "id": "gpe10-bench",
      "title": "PE bench · Deep foundations",
      "bench": true,
      "lessons": [
        {
          "id": "gpe10-pe-1",
          "title": "Deep foundations PE bench",
          "minutes": 25,
          "xp": 40,
          "summary": "Alpha skin friction, end bearing, group efficiency framing, Davisson, FS on capacity.",
          "items": [
            {
              "id": "gpe10-pe-1-01",
              "type": "mcq",
              "pe": true,
              "label": "Alpha shaft capacity",
              "given": "Qs = fs As; fs = α su",
              "vignette": "Pile diameter 1.0 ft, embedded length in clay 40 ft, su = 1,500 psf, α = 0.50. Neglect tip for this item.",
              "stem": "Most nearly, ultimate shaft capacity Qs is:",
              "choices": [
                {
                  "id": "a",
                  "text": "94 kip",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "188 kip"
                },
                {
                  "id": "c",
                  "text": "47 kip"
                },
                {
                  "id": "d",
                  "text": "1,500 kip"
                }
              ],
              "work": [
                "fs = 0.5×1500 = 750 psf",
                "As = π D L = 3.1416×1×40 ≈ 125.7 ft²",
                "Qs = 750×125.7 ≈ 94,300 lb ≈ 94 kip",
                "188 uses α=1; 47 halves area; 1500 is su as force"
              ],
              "explanation": "Qs≈94 kip. Using α=1 doubles capacity.",
              "miss": "fs=α su; As=πDL for circular pile.",
              "fepe": "Qs = α su · π D L."
            },
            {
              "id": "gpe10-pe-1-02",
              "type": "mcq",
              "pe": true,
              "label": "Clay tip capacity",
              "given": "Qb = qb Ab; qb = 9 su",
              "vignette": "Same 1.0-ft-diameter pile, su at tip = 1,500 psf. Use qb = 9 su.",
              "stem": "Most nearly, ultimate tip capacity Qb is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.2 kip"
                },
                {
                  "id": "b",
                  "text": "10.6 kip",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "94 kip"
                },
                {
                  "id": "d",
                  "text": "4.7 kip"
                }
              ],
              "work": [
                "qb = 9×1500 = 13,500 psf",
                "Ab = π/4 = 0.785 ft²",
                "Qb = 13,500×0.785 ≈ 10,600 lb ≈ 10.6 kip",
                "1.2 uses qb=su; 94 is shaft from prior; 4.7 half tip"
              ],
              "explanation": "Qb≈10.6 kip. Confusing with shaft Qs is a near-miss.",
              "miss": "Tip uses Ab=πD²/4, not shaft area.",
              "fepe": "Qb = 9 su · Ab."
            },
            {
              "id": "gpe10-pe-1-03",
              "type": "mcq",
              "pe": true,
              "label": "Total Qu and Qall",
              "given": "Qu = Qs + Qb; Qall = Qu/FS",
              "vignette": "Qs = 94 kip, Qb = 11 kip, FS = 2.0 on Qu (ASD).",
              "stem": "Most nearly, allowable capacity Qall is:",
              "choices": [
                {
                  "id": "a",
                  "text": "105 kip"
                },
                {
                  "id": "b",
                  "text": "94 kip"
                },
                {
                  "id": "c",
                  "text": "52.5 kip",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "47 kip"
                }
              ],
              "work": [
                "Qu=105; Qall=105/2=52.5",
                "105=Qu; 94=Qs; 47≈Qs/2"
              ],
              "explanation": "Sum then divide by FS → 52.5 kip.",
              "miss": "Qall = (Qs+Qb)/FS — include tip.",
              "fepe": "Qall = (Qs+Qb)/FS."
            },
            {
              "id": "gpe10-pe-1-04",
              "type": "mcq",
              "pe": true,
              "label": "Davisson offset load",
              "given": "Davisson failure = intersection of load-settlement curve with elastic line offset",
              "vignette": "Static load test plot (as in Vandevelde example style): the Davisson offset line intersects the measured curve at 230 kip. Structural elastic shortening line alone would suggest a different reading.",
              "stem": "Most nearly, the Davisson failure load Qu is:",
              "choices": [
                {
                  "id": "a",
                  "text": "115 kip"
                },
                {
                  "id": "b",
                  "text": "460 kip"
                },
                {
                  "id": "c",
                  "text": "0 kip"
                },
                {
                  "id": "d",
                  "text": "230 kip",
                  "correct": true
                }
              ],
              "work": [
                "Qu,Davisson = intersection load = 230 kip",
                "115 is half (FS=2 applied early); 460 doubles; 0 ignores the test"
              ],
              "explanation": "Report the intersection load as Qu before applying FS for allowable.",
              "miss": "Davisson Qu = intersection load — apply FS after, not before.",
              "fepe": "Davisson Qu at offset intersection."
            },
            {
              "id": "gpe10-pe-1-05",
              "type": "mcq",
              "pe": true,
              "label": "Beta shaft sand",
              "given": "fs = β σ′v; Qs = fs As",
              "vignette": "Circular pile D = 1.0 ft, L = 30 ft in sand. Average σ′v along shaft = 2,000 psf, β = 0.30.",
              "stem": "Most nearly, ultimate shaft capacity Qs is:",
              "choices": [
                {
                  "id": "a",
                  "text": "28 kip"
                },
                {
                  "id": "b",
                  "text": "188 kip"
                },
                {
                  "id": "c",
                  "text": "6 kip"
                },
                {
                  "id": "d",
                  "text": "57 kip",
                  "correct": true
                }
              ],
              "work": [
                "fs=0.30×2000=600 psf",
                "As=π×30≈94.2 ft²",
                "Qs≈56.5 kip≈57 kip",
                "28 halves; 188 uses As=πDL with fs=su mix-up; 6 uses Ab"
              ],
              "explanation": "Qs≈57 kip with β-method.",
              "miss": "fs=βσ′v; use shaft area πDL.",
              "fepe": "β-method Qs = β σ′v · π D L."
            }
          ]
        }
      ],
      "topic": 10
    }
  ]
});
