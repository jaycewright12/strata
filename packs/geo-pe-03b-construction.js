/*
 * STRATA built-in pack: GEO PE · 3b. Construction Observation, Monitoring, QA/QC & Safety (Expansion) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 3 — conceptual + PE bench tracks (expansion).
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-03b-construction",
  "title": "GEO PE · 3b. Construction Observation, Monitoring, QA/QC & Safety (Expansion)",
  "version": "1.0.0",
  "description": "Personal use only. Original expansion questions based on Jayce's study library (OSHA 1926 Subpart P, NCEES HB Ch.2/3.9–3.11, DM 7.02, UFC 3-220-10). Do not redistribute. Complements geo-pe-03-construction.",
  "units": [
    {
      "id": "gpe03b-const",
      "title": "3b. Construction · Expansion",
      "blurb": "Borrow/shrinkage, lifts, rollers, wet-side fabric, Type A short-term, spoil setback, shields, exclusions, settlement plates, extensometers, inclinometers, riprap/filter, nuclear γd, 5-ft trigger.",
      "lessons": [
        {
          "id": "gpe03b-const-1",
          "title": "Construction · Concepts (expansion)",
          "minutes": 40,
          "xp": 60,
          "summary": "Fifteen expansion items across 3A–3D.",
          "items": [
            {
              "id": "gpe03b-const-1-01",
              "type": "mcq",
              "label": "3A · Shrinkage / borrow",
              "stem": "A compacted fill requires Vf = 10,000 yd³ at γd,fill = 120 pcf. Borrow soil in situ has γd,borrow = 100 pcf. Ignoring waste, the borrow excavation volume Vb most nearly is:",
              "choices": [
                {
                  "id": "a",
                  "text": "12,000 yd³",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "8,300 yd³ (inverted density ratio)"
                },
                {
                  "id": "c",
                  "text": "10,000 yd³ (no shrinkage)"
                },
                {
                  "id": "d",
                  "text": "15,000 yd³ (arbitrary 1.5 factor)"
                }
              ],
              "explanation": "Dry mass conserved: Vb = Vf×(γd,fill/γd,borrow)=10,000×1.20=12,000 yd³.",
              "miss": "Borrow scales by γd,fill/γd,borrow.",
              "fepe": "Vb = Vf × (γd,fill/γd,borrow)."
            },
            {
              "id": "gpe03b-const-1-02",
              "type": "mcq",
              "label": "3A · Lift thickness",
              "stem": "For a clayey structural fill compacted with a sheepsfoot roller, typical PE earthwork practice for loose lift thickness is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "3–4 ft loose lifts to maximize production"
                },
                {
                  "id": "b",
                  "text": "About 6–8 in loose lifts so kneading energy reaches the full lift",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "No limit if surface nuclear-gauge RC passes"
                },
                {
                  "id": "d",
                  "text": "24 in lifts because OSHA requires thick lifts"
                }
              ],
              "explanation": "Cohesive fills with sheepsfoot need thin lifts (~6–8 in loose) so energy penetrates.",
              "miss": "Clay + sheepsfoot → thin lifts.",
              "fepe": "Cohesive fill: thin lifts (≈6–8 in loose)."
            },
            {
              "id": "gpe03b-const-1-03",
              "type": "mcq",
              "label": "3A · Sand compaction equipment",
              "stem": "A clean sand fill (SP) is being placed for a structural pad. The most appropriate primary roller type is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Sheepsfoot / padfoot kneading roller (best for fat clays)"
                },
                {
                  "id": "b",
                  "text": "Static smooth-drum with no vibration on dry sand"
                },
                {
                  "id": "c",
                  "text": "Smooth-drum or pneumatic vibratory roller — vibration densifies cohesionless soils",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Grid roller exclusively because sands cannot be vibrated"
                }
              ],
              "explanation": "Sands densify under vibratory rollers; sheepsfoot suits cohesive soils.",
              "miss": "Clean sand → vibratory.",
              "fepe": "SP/SW fills: vibratory compaction."
            },
            {
              "id": "gpe03b-const-1-04",
              "type": "mcq",
              "label": "3A · Wet of optimum",
              "stem": "A CL fill compacted wet of optimum to the same relative compaction as a dry-of-optimum companion typically shows which behavior?",
              "choices": [
                {
                  "id": "a",
                  "text": "Higher strength and lower compressibility than the dry-side fill"
                },
                {
                  "id": "b",
                  "text": "Identical structure regardless of water content"
                },
                {
                  "id": "c",
                  "text": "Always fails nuclear-gauge RC if wet of optimum"
                },
                {
                  "id": "d",
                  "text": "More plastic/soft fabric, lower strength, and higher compressibility potential than the dry-side fill at the same RC",
                  "correct": true
                }
              ],
              "explanation": "Wet of optimum → plastic fabric, lower strength, higher compressibility at same dry density.",
              "miss": "Same RC ≠ same behavior.",
              "fepe": "Wet of optimum: softer, more compressible at same RC."
            },
            {
              "id": "gpe03b-const-1-05",
              "type": "mcq",
              "label": "3B · Type A short-term slope",
              "stem": "For a simple slope excavation ≤ 20 ft deep in OSHA Type A soil under short-term (≤ 24 h) maximum allowable slopes, the steepest permitted slope is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "¾H:1V (≈ 53°)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "1H:1V"
                },
                {
                  "id": "c",
                  "text": "1½H:1V"
                },
                {
                  "id": "d",
                  "text": "2H:1V"
                }
              ],
              "explanation": "Type A short-term allows ¾:1; Type B 1:1; Type C 1½:1.",
              "miss": "Type A short-term → ¾H:1V.",
              "fepe": "OSHA Type A ≤24 h: ¾:1."
            },
            {
              "id": "gpe03b-const-1-06",
              "type": "mcq",
              "label": "3B · Spoil setback",
              "stem": "Per OSHA excavation rules, spoil piles and equipment are generally kept at least how far from the edge of an excavation?",
              "choices": [
                {
                  "id": "a",
                  "text": "Flush with the crest to brace the wall"
                },
                {
                  "id": "b",
                  "text": "At least 2 ft from the edge",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "10 ft minimum in all cases with no exceptions"
                },
                {
                  "id": "d",
                  "text": "No setback if the soil is Type A"
                }
              ],
              "explanation": "Keep spoil/equipment ≥ 2 ft from the edge unless properly retained.",
              "miss": "Spoil ≥ 2 ft from edge.",
              "fepe": "OSHA: 2-ft spoil setback."
            },
            {
              "id": "gpe03b-const-1-07",
              "type": "mcq",
              "label": "3B · Trench shield",
              "stem": "A trench box (shield) in a utility trench is used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Permanently support the trench for the life of the pipeline"
                },
                {
                  "id": "b",
                  "text": "Increase allowable spoil height without setback"
                },
                {
                  "id": "c",
                  "text": "Protect workers inside by shielding against cave-in — temporary protective system within tabulated/engineered limits",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Eliminate the need for any sloping documentation ever"
                }
              ],
              "explanation": "Shields protect workers temporarily per tabulated data — not permanent walls.",
              "miss": "Trench shield ≠ permanent wall.",
              "fepe": "Shields protect workers temporarily."
            },
            {
              "id": "gpe03b-const-1-08",
              "type": "mcq",
              "label": "3B · Type A exclusions",
              "stem": "Even when undrained strength qu ≥ 1.5 tsf, a soil may NOT be classified OSHA Type A if it is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Any clay with LL > 50 automatically"
                },
                {
                  "id": "b",
                  "text": "Any soil above the water table automatically"
                },
                {
                  "id": "c",
                  "text": "Only soils with SPT N > 50"
                },
                {
                  "id": "d",
                  "text": "Fissured, subject to vibration, previously disturbed, or in a layered system where a weak layer slopes toward the excavation — among listed Type A exclusions",
                  "correct": true
                }
              ],
              "explanation": "Type A requires qu ≥ 1.5 tsf AND none of the exclusions.",
              "miss": "Strength alone ≠ Type A.",
              "fepe": "Type A: qu ≥ 1.5 tsf and no exclusions."
            },
            {
              "id": "gpe03b-const-1-09",
              "type": "mcq",
              "label": "3C · Settlement plates",
              "stem": "Settlement plates placed at the base of a new embankment are used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Measure vertical compression/settlement of the foundation soils as fill height increases",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Measure horizontal deflection of a braced wall"
                },
                {
                  "id": "c",
                  "text": "Record pore-pressure dissipation only"
                },
                {
                  "id": "d",
                  "text": "Replace lab consolidation tests forever"
                }
              ],
              "explanation": "Settlement plates track vertical settlement under fills.",
              "miss": "Settlement plate → vertical δ.",
              "fepe": "Settlement plates: embankment foundation settlement."
            },
            {
              "id": "gpe03b-const-1-10",
              "type": "mcq",
              "label": "3C · Extensometer",
              "stem": "A borehole extensometer with anchors at several depths in a clay foundation under a surcharge is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Measure only surface heave outside the fill footprint"
                },
                {
                  "id": "b",
                  "text": "Resolve compressibility/settlement contribution by depth interval (strain profiling)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Measure SPT N continuously"
                },
                {
                  "id": "d",
                  "text": "Replace piezometers for pore-pressure readings"
                }
              ],
              "explanation": "Extensometers resolve settlement by depth interval.",
              "miss": "Extensometer → depth-resolved settlement.",
              "fepe": "Borehole extensometer: settlement vs depth."
            },
            {
              "id": "gpe03b-const-1-11",
              "type": "mcq",
              "label": "3C · Inclinometer casing",
              "stem": "Inclinometer casing installed behind a tied-back wall should most nearly be:",
              "choices": [
                {
                  "id": "a",
                  "text": "Laid horizontally on the ground surface only"
                },
                {
                  "id": "b",
                  "text": "Read only once before excavation"
                },
                {
                  "id": "c",
                  "text": "Installed vertically through the expected movement zone and read periodically as excavation proceeds",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Filled with concrete so it cannot deflect"
                }
              ],
              "explanation": "Vertical casing + periodic surveys during excavation.",
              "miss": "Vertical casing + repeated surveys.",
              "fepe": "Inclinometer: vertical profile of lateral movement."
            },
            {
              "id": "gpe03b-const-1-12",
              "type": "mcq",
              "label": "3D · Riprap role",
              "stem": "Riprap on a channel bank or abutment toe is used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Chemically stabilize expansive clay"
                },
                {
                  "id": "b",
                  "text": "Increase the plasticity index of the bank soil"
                },
                {
                  "id": "c",
                  "text": "Replace all vegetation forever"
                },
                {
                  "id": "d",
                  "text": "Armor the surface against erosive flow velocities / scour",
                  "correct": true
                }
              ],
              "explanation": "Riprap is armor against hydraulic erosion.",
              "miss": "Riprap → erosion/scour armor.",
              "fepe": "Riprap armors against erosive velocities."
            },
            {
              "id": "gpe03b-const-1-13",
              "type": "mcq",
              "label": "3D · Filter under riprap",
              "stem": "A graded granular filter (or suitable geotextile) between fine subgrade and coarse riprap is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Prevent loss of fine soil through the riprap voids while allowing drainage",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Increase the riprap D50 artificially"
                },
                {
                  "id": "c",
                  "text": "Act as the primary armor against boulder impact only"
                },
                {
                  "id": "d",
                  "text": "Seal the bank so that no drainage occurs"
                }
              ],
              "explanation": "Filter: retain fines, remain permeable.",
              "miss": "Filter retains soil, passes water.",
              "fepe": "Riprap filter: retention + drainage."
            },
            {
              "id": "gpe03b-const-1-14",
              "type": "mcq",
              "label": "3A · Nuclear gauge moisture",
              "stem": "A nuclear density gauge reports wet density ρt and moisture content w. Dry density used for relative compaction is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "ρt (ignore moisture)"
                },
                {
                  "id": "b",
                  "text": "ρd = ρt / (1+w)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "ρt × (1+w)"
                },
                {
                  "id": "d",
                  "text": "ρt − 62.4 pcf"
                }
              ],
              "explanation": "γd = γt/(1+w). Using wet density overstates RC.",
              "miss": "RC uses dry density.",
              "fepe": "ρd = ρt/(1+w) before RC check."
            },
            {
              "id": "gpe03b-const-1-15",
              "type": "mcq",
              "label": "3B · Protective system depth",
              "stem": "OSHA generally requires a protective system for employee entry into excavations in soil when depth is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Greater than 20 ft only"
                },
                {
                  "id": "b",
                  "text": "Greater than 10 ft only"
                },
                {
                  "id": "c",
                  "text": "5 ft or greater (with noted exceptions such as stable rock)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Any depth including 1-ft landscaping edging"
                }
              ],
              "explanation": "Protective systems at ≥ 5 ft; ≥ 20 ft needs engineered design.",
              "miss": "≥ 5 ft → protective system.",
              "fepe": "OSHA: protect excavations ≥ 5 ft deep."
            }
          ]
        }
      ],
      "topic": 3
    },
    {
      "id": "gpe03b-bench",
      "title": "PE bench · Construction (expansion)",
      "bench": true,
      "blurb": "Borrow volume, Type A/C widths, RC with moisture, ZAV.",
      "lessons": [
        {
          "id": "gpe03b-pe-1",
          "title": "Construction · PE numbers (expansion)",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth construction calculations.",
          "items": [
            {
              "id": "gpe03b-pe-1-01",
              "type": "mcq",
              "label": "Borrow volume",
              "stem": "Most nearly, the required borrow excavation volume is:",
              "choices": [
                {
                  "id": "a",
                  "text": "9,200 yd³ (inverted ratio)"
                },
                {
                  "id": "b",
                  "text": "11,500 yd³ (moist unit weights)"
                },
                {
                  "id": "c",
                  "text": "8,000 yd³ (assuming swell)"
                },
                {
                  "id": "d",
                  "text": "12,500 yd³",
                  "correct": true
                }
              ],
              "explanation": "Vb = 10,000×(125/100)=12,500 yd³.",
              "miss": "Use dry unit weights.",
              "fepe": "Vb = Vf × γd,fill/γd,borrow.",
              "pe": true,
              "given": "Vb γd,borrow = Vf γd,fill",
              "vignette": "Vf = 10,000 yd³ at γd,fill = 125 pcf. Borrow γd,borrow = 100 pcf. Neglect waste.",
              "work": [
                "Vb = 10,000 × (125/100) = 12,500 yd³"
              ]
            },
            {
              "id": "gpe03b-pe-1-02",
              "type": "mcq",
              "label": "Type A short-term width",
              "stem": "Most nearly, the minimum excavation top width is:",
              "choices": [
                {
                  "id": "a",
                  "text": "23 ft",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "11 ft (bottom only)"
                },
                {
                  "id": "c",
                  "text": "35 ft (1½:1 Type C)"
                },
                {
                  "id": "d",
                  "text": "27 ft (1:1 each side)"
                }
              ],
              "explanation": "¾:1 → run 0.75×8=6 ft each side; top=11+6+6=23 ft.",
              "miss": "Use ¾:1 for Type A short-term.",
              "fepe": "Top = bottom + 2×(0.75 H).",
              "pe": true,
              "given": "Type A short-term slope = ¾H:1V each side.",
              "vignette": "Type A short-term: H = 8 ft; bottom width = 11 ft.",
              "work": [
                "Run each side = 6 ft",
                "Top width = 23 ft"
              ]
            },
            {
              "id": "gpe03b-pe-1-03",
              "type": "mcq",
              "label": "RC with moisture",
              "stem": "Most nearly, the relative compaction is:",
              "choices": [
                {
                  "id": "a",
                  "text": "98% (wet density / γd,max)"
                },
                {
                  "id": "b",
                  "text": "95%",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "92% (γd = γt(1−w) style)"
                },
                {
                  "id": "d",
                  "text": "100%"
                }
              ],
              "explanation": "γd=128/1.12=114.3; RC=114.3/120≈95%.",
              "miss": "Convert to dry density before RC.",
              "fepe": "RC = [γt/(1+w)] / γd,max.",
              "pe": true,
              "given": "RC = γd,field/γd,max; γd=γt/(1+w)",
              "vignette": "γt = 128.0 pcf at w = 12%. γd,max = 120.0 pcf.",
              "work": [
                "γd = 114.29 pcf",
                "RC ≈ 95%"
              ]
            },
            {
              "id": "gpe03b-pe-1-04",
              "type": "mcq",
              "label": "Type C slope width",
              "stem": "Most nearly, the minimum top width is:",
              "choices": [
                {
                  "id": "a",
                  "text": "20 ft (vertical)"
                },
                {
                  "id": "b",
                  "text": "26 ft (1:1)"
                },
                {
                  "id": "c",
                  "text": "32 ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "14 ft (bottom only)"
                }
              ],
              "explanation": "1½:1 → run 12 ft each side; top=8+12+12=32 ft.",
              "miss": "Type C → 1½H:1V.",
              "fepe": "Top = bottom + 2×(1.5 H).",
              "pe": true,
              "given": "Type C slope = 1½H:1V each side.",
              "vignette": "Type C: H = 8 ft; bottom width = 8 ft.",
              "work": [
                "Run each side = 12 ft",
                "Top width = 32 ft"
              ]
            },
            {
              "id": "gpe03b-pe-1-05",
              "type": "mcq",
              "label": "ZAV γd",
              "stem": "Most nearly, γd on the zero-air-voids curve at w = 12% is:",
              "choices": [
                {
                  "id": "a",
                  "text": "105 pcf (wrong ZAV denominator)"
                },
                {
                  "id": "b",
                  "text": "165 pcf (Gs γw)"
                },
                {
                  "id": "c",
                  "text": "118 pcf (slip)"
                },
                {
                  "id": "d",
                  "text": "126 pcf",
                  "correct": true
                }
              ],
              "explanation": "γd=Gsγw/(1+wGs)=2.65×62.4/1.318≈125.5≈126 pcf.",
              "miss": "ZAV uses (1+w Gs).",
              "fepe": "γd,ZAV = Gs γw/(1+w Gs).",
              "pe": true,
              "given": "γd = Gs γw/(1+w Gs); γw=62.4 pcf",
              "vignette": "Gs = 2.65; w = 12%.",
              "work": [
                "1+w Gs = 1.318",
                "γd ≈ 126 pcf"
              ]
            }
          ]
        }
      ],
      "topic": 3
    }
  ]
});
