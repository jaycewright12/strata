/*
 * STRATA built-in pack: GEO PE · 5b. Earth Structures, Ground Improvement & Pavement (Expansion) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 5 — conceptual + PE bench tracks (expansion).
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-05b-earth-structures",
  "title": "GEO PE · 5b. Earth Structures, Ground Improvement & Pavement (Expansion)",
  "version": "1.0.0",
  "description": "Personal use only. Original expansion questions based on Jayce's study library (EM 1110-2-1902, NHI-05-037, UFC 3-220-10, NCEES HB Ch.3.6/3.12–3.15/3.19). Do not redistribute. Complements geo-pe-05-earth-structures.",
  "units": [
    {
      "id": "gpe05b-earth",
      "title": "5b. Earth Structures · Expansion",
      "blurb": "Stone columns, DSM, MSE internal, geotextile separation, infinite slope seepage, Bishop, FS criteria, dam phreatic, freeboard, landfill liner, CBR, frost pavement, pipe bedding, surcharge±PVD, tension cracks.",
      "lessons": [
        {
          "id": "gpe05b-earth-1",
          "title": "Earth structures · Concepts (expansion)",
          "minutes": 40,
          "xp": 60,
          "summary": "Fifteen expansion items across 5A–5G.",
          "items": [
            {
              "id": "gpe05b-earth-1-01",
              "type": "mcq",
              "label": "5A · Stone columns",
              "stem": "Vibro-replacement stone columns in soft clay are used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Increase bearing / reduce settlement and provide drainage paths in soft cohesive ground (not the same as vibrocompaction of clean sand)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Densify clean loose sand by vibration alone without stone"
                },
                {
                  "id": "c",
                  "text": "Replace the need for any surcharge ever on every site"
                },
                {
                  "id": "d",
                  "text": "Act only as decorative landscaping columns"
                }
              ],
              "explanation": "Stone columns reinforce soft clay and drain; vibrocompaction targets clean sands.",
              "miss": "Stone columns ≠ vibrocompaction of SP sand.",
              "fepe": "Stone columns: reinforce + drain soft clay."
            },
            {
              "id": "gpe05b-earth-1-02",
              "type": "mcq",
              "label": "5A · Deep soil mixing",
              "stem": "Deep soil mixing (DSM) / cement deep mixing most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Is identical to dynamic compaction with falling weights"
                },
                {
                  "id": "b",
                  "text": "Blends binder (cement/lime) with in-situ soil to create stronger/stiffer columns or panels",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Requires liquefaction of the binder only"
                },
                {
                  "id": "d",
                  "text": "Is used only above the water table on dry sand"
                }
              ],
              "explanation": "DSM mechanically mixes binder into soil to form treated columns/panels.",
              "miss": "DSM = binder mixed into soil.",
              "fepe": "Deep soil mixing: cement/lime–soil columns."
            },
            {
              "id": "gpe05b-earth-1-03",
              "type": "mcq",
              "label": "5B · MSE internal stability",
              "stem": "Internal stability of an MSE wall most nearly checks:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only global sliding of the entire reinforced block (external)"
                },
                {
                  "id": "b",
                  "text": "Only overturning about the toe (external)"
                },
                {
                  "id": "c",
                  "text": "Rupture and pullout of the reinforcements within the reinforced soil mass (plus facing connections as applicable)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Only bearing capacity of the foundation (external)"
                }
              ],
              "explanation": "Internal = reinforcement rupture/pullout; external = sliding/overturning/bearing of the block.",
              "miss": "Internal ≠ external global checks.",
              "fepe": "MSE internal: rupture + pullout."
            },
            {
              "id": "gpe05b-earth-1-04",
              "type": "mcq",
              "label": "5B · Geotextile separation",
              "stem": "A geotextile used for separation between a fine subgrade and a coarse aggregate base is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Provide the sole flexural stiffness of a bridge girder"
                },
                {
                  "id": "b",
                  "text": "Replace all compaction of the base"
                },
                {
                  "id": "c",
                  "text": "Act as a high-k chimney drain in a dam core"
                },
                {
                  "id": "d",
                  "text": "Prevent intermixing of the two layers while allowing drainage",
                  "correct": true
                }
              ],
              "explanation": "Separation geotextiles keep fines from pumping into aggregate.",
              "miss": "Separation ≠ structural girder.",
              "fepe": "Geotextile separation prevents layer intermixing."
            },
            {
              "id": "gpe05b-earth-1-05",
              "type": "mcq",
              "label": "5C · Infinite slope drained",
              "stem": "For an infinite cohesionless slope with seepage parallel to the slope, FS is most nearly reduced relative to the dry case because:",
              "choices": [
                {
                  "id": "a",
                  "text": "Seepage reduces effective stress (u > 0 on the failure plane), lowering available shear resistance",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Seepage increases φ′ above 45°"
                },
                {
                  "id": "c",
                  "text": "Seepage always doubles c′"
                },
                {
                  "id": "d",
                  "text": "Unit weight becomes zero"
                }
              ],
              "explanation": "Parallel seepage raises u and cuts σ′ — FS falls vs dry infinite slope.",
              "miss": "Seepage → lower σ′ → lower FS.",
              "fepe": "Infinite slope with seepage: u reduces σ′."
            },
            {
              "id": "gpe05b-earth-1-06",
              "type": "mcq",
              "label": "5C · Bishop simplified",
              "stem": "Bishop’s simplified method for circular slip surfaces most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ignores all pore pressures by definition"
                },
                {
                  "id": "b",
                  "text": "Satisfies vertical force and overall moment equilibrium with interslice forces assumed horizontal (common PE slope method)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Applies only to dry sand wedges with planar slips"
                },
                {
                  "id": "d",
                  "text": "Is identical to Rankine active earth pressure"
                }
              ],
              "explanation": "Bishop simplified: circular arc, F from moment equilibrium with horizontal interslice forces.",
              "miss": "Bishop ≠ Rankine wall theory.",
              "fepe": "Bishop simplified: circular FS with horizontal X-forces."
            },
            {
              "id": "gpe05b-earth-1-07",
              "type": "mcq",
              "label": "5C · FS criteria embankment",
              "stem": "For end-of-construction undrained stability of an embankment on soft clay, a typical PE/EM minimum FS target is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Exactly 3.0 always like ASD steel"
                },
                {
                  "id": "b",
                  "text": "0.5 is acceptable if CPT was run"
                },
                {
                  "id": "c",
                  "text": "On the order of 1.3 (short-term) with higher long-term drained targets often ~1.5 — confirm project criteria",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "FS is never computed for embankments"
                }
              ],
              "explanation": "EM 1110-2-1902 / practice: short-term FS often ≥1.3; long-term ≥1.5 (project-specific).",
              "miss": "Short-term FS ~1.3 class, not 0.5.",
              "fepe": "Embankment FS: ~1.3 EOC; ~1.5 long-term (typical)."
            },
            {
              "id": "gpe05b-earth-1-08",
              "type": "mcq",
              "label": "5D · Phreatic surface dam",
              "stem": "In a homogeneous earth dam without internal drains, the phreatic surface most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always stays below the upstream heel only"
                },
                {
                  "id": "b",
                  "text": "Is identical to the crest alignment"
                },
                {
                  "id": "c",
                  "text": "Never exists if the dam is compacted"
                },
                {
                  "id": "d",
                  "text": "Exits on the downstream face, creating high exit gradients unless controlled by drains/filters",
                  "correct": true
                }
              ],
              "explanation": "Without drains, the phreatic surface typically exits downstream — toe drains/filters control this.",
              "miss": "Uncontrolled exit on d/s face is a seepage risk.",
              "fepe": "Homogeneous dam: phreatic exit needs drainage control."
            },
            {
              "id": "gpe05b-earth-1-09",
              "type": "mcq",
              "label": "5D · Freeboard",
              "stem": "Freeboard on a dam/levee is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "The vertical distance from the maximum design water surface to the crest (wave/overtopping allowance)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "The width of the cutoff trench only"
                },
                {
                  "id": "c",
                  "text": "The same as the dam’s base width"
                },
                {
                  "id": "d",
                  "text": "The undrained shear strength of the core"
                }
              ],
              "explanation": "Freeboard = crest above design pool for waves/setup/overtopping margin.",
              "miss": "Freeboard ≠ base width.",
              "fepe": "Freeboard: crest above design water surface."
            },
            {
              "id": "gpe05b-earth-1-10",
              "type": "mcq",
              "label": "5E · Landfill liner",
              "stem": "A composite landfill liner (geomembrane over low-k clay/GCL) is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Maximize infiltration into groundwater"
                },
                {
                  "id": "b",
                  "text": "Minimize leachate migration into the subsurface by combining an advective barrier with a low-permeability soil/GCL layer",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Replace all gas collection systems"
                },
                {
                  "id": "d",
                  "text": "Act as the primary structural foundation for buildings"
                }
              ],
              "explanation": "Composite liners reduce leakage vs either component alone.",
              "miss": "Liner limits leachate migration.",
              "fepe": "Composite liner: geomembrane + clay/GCL barrier."
            },
            {
              "id": "gpe05b-earth-1-11",
              "type": "mcq",
              "label": "5F · Subgrade CBR",
              "stem": "California Bearing Ratio (CBR) of a pavement subgrade is most nearly used to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Replace RQD for rock cores"
                },
                {
                  "id": "b",
                  "text": "Measure hydraulic conductivity of clays only"
                },
                {
                  "id": "c",
                  "text": "Index the supporting strength of subgrade/base for flexible pavement thickness design correlations",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Define OSHA soil type exclusively"
                }
              ],
              "explanation": "CBR indexes subgrade strength for pavement structural design.",
              "miss": "CBR → pavement support, not RQD/OSHA.",
              "fepe": "CBR: subgrade/base strength index for pavements."
            },
            {
              "id": "gpe05b-earth-1-12",
              "type": "mcq",
              "label": "5F · Frost in pavement",
              "stem": "Frost-susceptible silt subgrades under pavements are problematic most nearly because:",
              "choices": [
                {
                  "id": "a",
                  "text": "They always have CBR > 50"
                },
                {
                  "id": "b",
                  "text": "They never hold water"
                },
                {
                  "id": "c",
                  "text": "They classify only as GW"
                },
                {
                  "id": "d",
                  "text": "Ice lensing / frost heave and subsequent thaw weakening can damage the pavement structure",
                  "correct": true
                }
              ],
              "explanation": "Frost-susceptible fines + water + freezing → heave and spring thaw softening.",
              "miss": "Frost heave/thaw weaken pavements.",
              "fepe": "Frost-susceptible silt: heave + thaw weakening."
            },
            {
              "id": "gpe05b-earth-1-13",
              "type": "mcq",
              "label": "5G · Trench bedding",
              "stem": "Flexible pipe in a utility trench typically relies most nearly on:",
              "choices": [
                {
                  "id": "a",
                  "text": "Proper bedding and haunch support / controlled backfill to develop lateral soil support and limit deflection",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "The pipe acting as a rigid beam spanning between manholes with no soil support"
                },
                {
                  "id": "c",
                  "text": "Zero compaction around the pipe always"
                },
                {
                  "id": "d",
                  "text": "Only the pipe wall stiffness with native soft clay left uncompacted at the springline"
                }
              ],
              "explanation": "Flexible pipe design needs soil support from bedding/haunches/backfill.",
              "miss": "Flexible pipe → soil–pipe interaction.",
              "fepe": "Flexible pipe: bedding + haunch support critical."
            },
            {
              "id": "gpe05b-earth-1-14",
              "type": "mcq",
              "label": "5A · Surcharge preload",
              "stem": "Surcharge preloading without PVDs on a thick soft clay is limited most nearly by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Immediate elastic settlement only with no consolidation ever"
                },
                {
                  "id": "b",
                  "text": "Long drainage paths → slow consolidation; PVDs shorten horizontal drainage path and accelerate settlement",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "The surcharge always finishes in one day regardless of cv"
                },
                {
                  "id": "d",
                  "text": "SPT N increasing to 100 overnight"
                }
              ],
              "explanation": "Without drains, time ∝ Hdr²; PVDs cut drainage path length.",
              "miss": "Thick clay without PVDs consolidates slowly.",
              "fepe": "Preload ± PVDs: drainage path controls time."
            },
            {
              "id": "gpe05b-earth-1-15",
              "type": "mcq",
              "label": "5C · Tension crack",
              "stem": "A vertical tension crack at the crest of a steep clay slope most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always increases FS by adding weight at the crest"
                },
                {
                  "id": "b",
                  "text": "Proves the slope is rock"
                },
                {
                  "id": "c",
                  "text": "Removes tensile/cohesive resistance near the crest and can fill with water, increasing driving force — often modeled as a crack depth in limit-equilibrium analyses",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Is ignored in all PE slope methods"
                }
              ],
              "explanation": "Tension cracks reduce resisting force and may add water pressure if filled.",
              "miss": "Tension crack can lower FS.",
              "fepe": "Crest tension crack: cut resistance; possible water fill."
            }
          ]
        }
      ],
      "topic": 5
    },
    {
      "id": "gpe05b-bench",
      "title": "PE bench · Earth structures (expansion)",
      "bench": true,
      "blurb": "Infinite slope dry/seepage FS, embankment FS check, PVD time, MSE tensile force.",
      "lessons": [
        {
          "id": "gpe05b-pe-1",
          "title": "Earth structures · PE numbers (expansion)",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth earth-structure calculations.",
          "items": [
            {
              "id": "gpe05b-pe-1-01",
              "type": "mcq",
              "label": "Infinite slope dry FS",
              "stem": "Most nearly, FS for the dry infinite slope is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.67 (tan β / tan φ′)"
                },
                {
                  "id": "b",
                  "text": "1.00 (forcing)"
                },
                {
                  "id": "c",
                  "text": "2.25 (tan φ′ / sin β)"
                },
                {
                  "id": "d",
                  "text": "1.50",
                  "correct": true
                }
              ],
              "explanation": "FS = tan φ′ / tan β = tan30/tan20 = 0.577/0.364≈1.59 — retune β. tan30/tan22=0.577/0.404=1.43. Use φ=36 β=26: tan36/tan26=0.727/0.488=1.49≈1.50.",
              "miss": "FS = tanφ′/tanβ for dry cohesionless infinite slope.",
              "fepe": "Dry infinite slope: FS = tanφ′/tanβ.",
              "pe": true,
              "given": "Dry cohesionless infinite slope: FS = tan φ′ / tan β",
              "vignette": "φ′=36°, slope angle β=26°, c′=0, no seepage.",
              "work": [
                "FS = tan36°/tan26° ≈ 0.7265/0.4877 ≈ 1.49 ≈ 1.50"
              ]
            },
            {
              "id": "gpe05b-pe-1-02",
              "type": "mcq",
              "label": "Infinite slope seepage FS",
              "stem": "Most nearly, FS with seepage parallel to the slope (sat. infinite slope form FS = (γ′/γsat)(tanφ′/tanβ)) is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.85",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "1.50 (dry FS reused)"
                },
                {
                  "id": "c",
                  "text": "1.20 (γ′/γsat omitted partially)"
                },
                {
                  "id": "d",
                  "text": "0.50 (γ′/γsat alone)"
                }
              ],
              "explanation": "γ′/γsat=(125-62.4)/125=0.501; FS=0.501×(tan36/tan26)≈0.501×1.49≈0.75. Retune for 0.85: use φ=36 β=22: dry FS=tan36/tan22=0.727/0.404=1.80; ×0.501≈0.90. Close. Use γsat=120: γ′=57.6; ratio=0.48; ×1.80=0.86≈0.85.",
              "miss": "Include γ′/γsat factor for parallel seepage.",
              "fepe": "Seepage parallel: FS = (γ′/γsat) tanφ′/tanβ.",
              "pe": true,
              "given": "Saturated infinite slope, seepage parallel: FS = (γ′/γsat)(tan φ′ / tan β); γw=62.4 pcf",
              "vignette": "φ′=36°, β=22°, γsat=120 pcf, c′=0.",
              "work": [
                "γ′=57.6; γ′/γsat=0.48",
                "tanφ′/tanβ≈1.80",
                "FS≈0.48×1.80=0.86≈0.85"
              ]
            },
            {
              "id": "gpe05b-pe-1-03",
              "type": "mcq",
              "label": "Embankment FS judgment",
              "stem": "Most nearly, the computed FS and status vs a 1.30 short-term criterion are:",
              "choices": [
                {
                  "id": "a",
                  "text": "FS = 1.18 — exceeds 1.30"
                },
                {
                  "id": "b",
                  "text": "FS = 1.18 — below 1.30; not adequate for the stated EOC criterion",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "FS = 1.50 using drained φ′ by mistake for EOC"
                },
                {
                  "id": "d",
                  "text": "FS undefined"
                }
              ],
              "explanation": "FS=τf/τd=850/720=1.18 < 1.30 → fails short-term criterion.",
              "miss": "Compare computed FS to the stated criterion.",
              "fepe": "EOC FS = available su resistance / demand.",
              "pe": true,
              "given": "FS = τf / τd; short-term minimum FS = 1.30",
              "vignette": "Undrained analysis: available shear strength along critical surface averages 850 psf; driving shear demand averages 720 psf.",
              "work": [
                "FS=850/720=1.18 < 1.30 → inadequate"
              ]
            },
            {
              "id": "gpe05b-pe-1-04",
              "type": "mcq",
              "label": "PVD time factor",
              "stem": "Most nearly, the time for 90% consolidation with PVDs (radial drainage dominant) using Tv,90 ≈ 0.848 = cvh t / (Dd/2)² simplified form as given is:",
              "choices": [
                {
                  "id": "a",
                  "text": "30 days (forgot square on drainage path)"
                },
                {
                  "id": "b",
                  "text": "365 days (vertical drainage only guess)"
                },
                {
                  "id": "c",
                  "text": "120 days",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "12 days (off by ×10)"
                }
              ],
              "explanation": "Need numbers: Dd=6 ft, cvh=0.15 ft²/day; t = Tv (Dd/2)² / cvh = 0.848×9 / 0.15 = 7.632/0.15=50.9 days. Retune for 120: Dd=8 ft → (4)²=16; 0.848×16/0.113≈120.",
              "miss": "t = Tv R² / cvh with R=Dd/2.",
              "fepe": "PVD time from radial Tv and cvh.",
              "pe": true,
              "given": "For U=90%, Tv=0.848 = cvh t / R² with R = Dd/2",
              "vignette": "Equivalent drain diameter spacing Dd = 8 ft; cvh = 0.113 ft²/day.",
              "work": [
                "R=4 ft; R²=16",
                "t=0.848×16/0.113≈120 days"
              ]
            },
            {
              "id": "gpe05b-pe-1-05",
              "type": "mcq",
              "label": "MSE tensile demand",
              "stem": "Most nearly, the horizontal tensile force T per reinforcement at mid-height is:",
              "choices": [
                {
                  "id": "a",
                  "text": "900 lb/ft (used Ka=0.25 slip)"
                },
                {
                  "id": "b",
                  "text": "3,600 lb/ft (used Kp)"
                },
                {
                  "id": "c",
                  "text": "450 lb/ft (half height wrong)"
                },
                {
                  "id": "d",
                  "text": "1,800 lb/ft",
                  "correct": true
                }
              ],
              "explanation": "σh=Ka σv=0.30×2000=600 psf; T=σh×Sv=600×3=1,800 — put 1800 as d.",
              "miss": "T = Ka σ′v Sv for horizontal reinforcement spacing Sv.",
              "fepe": "MSE: T = Ka σv × vertical spacing.",
              "pe": true,
              "given": "Horizontal stress σh = Ka σv; force per unit width on one layer T = σh × Sv",
              "vignette": "At the reinforcement elevation, σv=2,000 psf; Ka=0.30; vertical spacing Sv=3.0 ft.",
              "work": [
                "σh=0.30×2000=600 psf",
                "T=600×3=1,800 lb/ft"
              ]
            }
          ]
        }
      ],
      "topic": 5
    }
  ]
});
