/*
 * STRATA built-in pack: GEO PE · 5. Earth Structures, Ground Improvement & Pavement (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES HB §§3.6/3.12–3.15/3.19, EM 1110-2-1902, NHI-05-037, UFC 3-220-10, Vandevelde Depth II/III).
 * Do not redistribute.
 * Maps to PE topic 5 (Earth Structures, Ground Improvement, and Pavement) — conceptual + PE bench tracks.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-05-earth-structures",
  "title": "GEO PE · 5. Earth Structures, Ground Improvement & Pavement",
  "version": "1.0.0",
  "description": "Personal use only. Original questions based on Jayce's study library (NCEES HB §§3.6/3.12–3.15/3.19, EM 1110-2-1902, NHI-05-037, UFC 3-220-10, Vandevelde Depth II/III). Do not redistribute.",
  "units": [
    {
      "id": "gpe05-earth",
      "title": "5. Earth Structures, Ground Improvement & Pavement",
      "blurb": "Ground improvement, geosynthetics/MSE, slope stability, embankments/dams/levees, landfills, pavement, utilities — PE depth.",
      "lessons": [
        {
          "id": "gpe05-earth-1",
          "title": "Earth structures · Concepts",
          "minutes": 45,
          "xp": 60,
          "summary": "5A–5G: improvement methods, geosynthetic functions, infinite-slope FS, embankment strength selection, landfill barriers, pavement structure, utility trench backfill.",
          "items": [
            {
              "id": "gpe05-earth-1-01",
              "type": "mcq",
              "label": "5A · Vibrocompaction",
              "stem": "Per NCEES §3.12 ground-improvement applicability, vibrocompaction is most nearly suitable for:",
              "choices": [
                {
                  "id": "a",
                  "text": "Cohesionless clean sands with less than about 15% silt and/or less than about 2% clay",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Fat CH clay with Su = 200 psf requiring strength gain by densification alone"
                },
                {
                  "id": "c",
                  "text": "Peat deposits thicker than 20 ft as the sole improvement method"
                },
                {
                  "id": "d",
                  "text": "Rockfill with boulder sizes exceeding vibrator diameter as the primary tool"
                }
              ],
              "explanation": "NCEES §3.12.1: vibrocompaction — cohesionless clean sands <15% silts and/or <2% clay. Soft clay/peat need other methods.",
              "miss": "Vibrocompaction → clean sands; not fat clay or peat alone.",
              "fepe": "Vibrocompaction: clean sand, low fines."
            },
            {
              "id": "gpe05-earth-1-02",
              "type": "mcq",
              "label": "5A · PVDs",
              "stem": "Prefabricated vertical drains (PVDs) with surcharge preloading are used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Densify dry gravel by vibration without drainage paths"
                },
                {
                  "id": "b",
                  "text": "Accelerate consolidation of compressible saturated clays by shortening drainage paths",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Replace the need for any surcharge when clay is OC with OCR > 10"
                },
                {
                  "id": "d",
                  "text": "Increase permeability of rock by hydrofracture"
                }
              ],
              "explanation": "PVDs ± preload shorten radial drainage path in compressible saturated clays so consolidation time drops.",
              "miss": "PVDs speed clay consolidation under preload — not vibrators for gravel.",
              "fepe": "PVD + surcharge → faster consolidation."
            },
            {
              "id": "gpe05-earth-1-03",
              "type": "mcq",
              "label": "5A · Dynamic compaction",
              "stem": "Deep dynamic compaction (NCEES §3.12) is most nearly applicable to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Saturated fat clay at 40 ft depth as the preferred first choice"
                },
                {
                  "id": "b",
                  "text": "Contaminated sludge ponds requiring chemical fixation only"
                },
                {
                  "id": "c",
                  "text": "Loose pervious/semi-pervious soils with fines typically < 15%, materials with large voids, spoils, and waste areas",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Improving intact sound rock by dropping a weight on the surface"
                }
              ],
              "explanation": "Deep dynamic compaction — loose pervious soils with fines <15%, large voids, spoils, waste areas.",
              "miss": "DC suits loose granular/voidy fills — not deep soft clay as first choice.",
              "fepe": "DC: loose granular / debris fills, low fines."
            },
            {
              "id": "gpe05-earth-1-04",
              "type": "mcq",
              "label": "5B · Geosynthetic functions",
              "stem": "Per the NCEES geosynthetics function table, a geotextile used beneath railroad ballast primarily to keep fine subgrade from pumping into the ballast while allowing water to pass is serving which primary function?",
              "choices": [
                {
                  "id": "a",
                  "text": "Containment (geomembrane-style barrier)"
                },
                {
                  "id": "b",
                  "text": "Reinforcement as a tensile member replacing all steel"
                },
                {
                  "id": "c",
                  "text": "Drainage as a thick geonet core alone"
                },
                {
                  "id": "d",
                  "text": "Separation (and often filtration) between dissimilar materials",
                  "correct": true
                }
              ],
              "explanation": "Keeping fines out of ballast while transmitting water is classic separation/filtration.",
              "miss": "Ballast/subgrade interface → separation/filtration geotextile.",
              "fepe": "GT functions: separation, filter, drain, reinforce."
            },
            {
              "id": "gpe05-earth-1-05",
              "type": "mcq",
              "label": "5B · MSE internal vs external",
              "stem": "For an MSE wall, internal stability checks most nearly include:",
              "choices": [
                {
                  "id": "a",
                  "text": "Rupture and pullout of the reinforcement (and connection strength) within the reinforced zone",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Only global deep-seated slope circles far beyond the reinforced mass"
                },
                {
                  "id": "c",
                  "text": "Only bearing capacity of the foundation soil under the leveling pad"
                },
                {
                  "id": "d",
                  "text": "Only sliding of the entire reinforced mass on the foundation"
                }
              ],
              "explanation": "Internal: tensile rupture, pullout, connections. External: sliding, overturning, bearing, global.",
              "miss": "Internal = reinforcement rupture/pullout; external = slide/OT/bearing/global.",
              "fepe": "MSE internal: T rupture & pullout."
            },
            {
              "id": "gpe05-earth-1-06",
              "type": "mcq",
              "label": "5C · Infinite slope dry sand",
              "stem": "For an infinite slope in dry cohesionless soil (ru = 0), the NCEES handbook factor of safety simplifies most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "F = c′/(γ H sin β cos β)"
                },
                {
                  "id": "b",
                  "text": "F = tan φ′ / tan β",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "F = γ H / c′"
                },
                {
                  "id": "d",
                  "text": "F = Ka / Kp"
                }
              ],
              "explanation": "With ru = 0, F = tan φ′ / tan β for infinite sand slope.",
              "miss": "Dry infinite sand slope: FS = tanφ′/tanβ.",
              "fepe": "Infinite dry sand: F = tanφ′/tanβ."
            },
            {
              "id": "gpe05-earth-1-07",
              "type": "mcq",
              "label": "5C · Strength for end-of-construction",
              "stem": "End-of-construction stability of an embankment on saturated soft clay is evaluated most nearly using:",
              "choices": [
                {
                  "id": "a",
                  "text": "Drained c′, φ′ with u = 0 assumed throughout construction"
                },
                {
                  "id": "b",
                  "text": "Effective-stress parameters with steady seepage only, ignoring construction excess u"
                },
                {
                  "id": "c",
                  "text": "Undrained strength (UU / field vane / CU as appropriate) because drainage cannot keep up with loading",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Residual φ′r on pre-existing slickensides only, with no peak undrained check"
                }
              ],
              "explanation": "EOC → undrained strength; long-term → drained with steady seepage.",
              "miss": "EOC on soft clay → undrained su; long-term → c′,φ′ with seepage u.",
              "fepe": "EOC: undrained; long-term: drained + seepage."
            },
            {
              "id": "gpe05-earth-1-08",
              "type": "mcq",
              "label": "5D · Embankment / dam FS",
              "stem": "For a typical earth embankment long-term steady-seepage condition using effective-stress analysis, design practice reflected in PE references most nearly targets a minimum FS on the order of:",
              "choices": [
                {
                  "id": "a",
                  "text": "FS ≈ 0.9 (serviceability only)"
                },
                {
                  "id": "b",
                  "text": "FS ≈ 1.0 exactly at failure definition for design acceptance"
                },
                {
                  "id": "c",
                  "text": "FS ≈ 3.0–4.0 as for steel tension members"
                },
                {
                  "id": "d",
                  "text": "FS ≈ 1.5 (common long-term embankment/slope target in many agency criteria)",
                  "correct": true
                }
              ],
              "explanation": "Many agency/EM criteria use about FS ≥ 1.5 for long-term steady seepage embankment slopes.",
              "miss": "Long-term embankment slopes often FS ≥ ~1.5 — confirm project criteria.",
              "fepe": "Know EOC vs long-term FS criteria (~1.3 vs ~1.5)."
            },
            {
              "id": "gpe05-earth-1-09",
              "type": "mcq",
              "label": "5E · Landfill barrier",
              "stem": "In a modern MSW landfill lining system, the primary hydraulic barrier layer is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "A geomembrane and/or GCL (often with compacted clay) providing containment",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "An open-graded stone drainage layer alone without a barrier"
                },
                {
                  "id": "c",
                  "text": "A geotextile separator with no low-k component"
                },
                {
                  "id": "d",
                  "text": "A geogrid reinforcement sheet as the sole liner"
                }
              ],
              "explanation": "Containment is geomembrane/GCL (± clay). Drainage stone and GT separators are not the primary barrier.",
              "miss": "Liner containment → geomembrane/GCL (± CCL).",
              "fepe": "Landfill barrier: GM/GCL."
            },
            {
              "id": "gpe05-earth-1-10",
              "type": "mcq",
              "label": "5F · Pavement structure",
              "stem": "In a conventional flexible pavement (NCEES §3.19 / NHI-05-037), the layer that is typically the weakest, most moisture-sensitive in-situ soil is the:",
              "choices": [
                {
                  "id": "a",
                  "text": "Asphalt concrete surface course"
                },
                {
                  "id": "b",
                  "text": "Subgrade",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Bound asphalt-treated base manufactured layer"
                },
                {
                  "id": "d",
                  "text": "Portland-cement concrete slab in a rigid pavement"
                }
              ],
              "explanation": "Subgrade = weak, moisture-sensitive in-situ soil; surface/base are stronger selected layers.",
              "miss": "Subgrade = native support; AC/base are structural layers above.",
              "fepe": "Flexible pavement: surface/base/subbase over weak subgrade."
            },
            {
              "id": "gpe05-earth-1-11",
              "type": "mcq",
              "label": "5F · CBR use",
              "stem": "California Bearing Ratio (CBR) test results for pavement geotechnics are used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Replace Atterberg limits for USCS classification of all rocks"
                },
                {
                  "id": "b",
                  "text": "Measure residual rock-joint friction angle φ′r directly"
                },
                {
                  "id": "c",
                  "text": "Characterize subgrade/base support strength for thickness design empiricism",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Determine OSHA trench soil Type A/B/C exclusively"
                }
              ],
              "explanation": "CBR (and Mr) index subgrade/base support for pavement structural design.",
              "miss": "CBR → pavement support; not OSHA or rock-joint φ′.",
              "fepe": "CBR/Mr for pavement subgrade/base."
            },
            {
              "id": "gpe05-earth-1-12",
              "type": "mcq",
              "label": "5G · Utility trench backfill",
              "stem": "For a utility trench under a pavement, the most appropriate backfill practice among the following is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Place uncompacted fat clay spoils full-depth to maximize plasticity under the wheel path"
                },
                {
                  "id": "b",
                  "text": "Flood the trench with water only, with no density control, for all soil types"
                },
                {
                  "id": "c",
                  "text": "Leave the upper pavement section on loose trench spoils without densification"
                },
                {
                  "id": "d",
                  "text": "Place and compact suitable bedding/backfill in lifts to specified density, with attention to haunches and avoiding pipe damage",
                  "correct": true
                }
              ],
              "explanation": "Specified lift thickness/density, proper bedding, careful compaction at haunches without damaging the pipe.",
              "miss": "Trench backfill needs controlled compaction — not loose spoils under pavement.",
              "fepe": "Utility trenches: lift compaction + bedding."
            },
            {
              "id": "gpe05-earth-1-13",
              "type": "mcq",
              "label": "5B · Geogrid vs geotextile",
              "stem": "Compared with a nonwoven geotextile, a geogrid’s primary distinguishing engineered role is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Acting as a geomembrane hydraulic barrier with extremely low k"
                },
                {
                  "id": "b",
                  "text": "Measuring pore pressure as an embedded piezometer tip"
                },
                {
                  "id": "c",
                  "text": "Replacing all need for granular drainage layers in every application"
                },
                {
                  "id": "d",
                  "text": "Providing open apertures for soil strike-through while carrying tensile reinforcement load",
                  "correct": true
                }
              ],
              "explanation": "Geogrids reinforce with open apertures and soil interlock. Nonwoven GTs more often separate/filter/drain.",
              "miss": "Geogrid → tensile reinforcement + interlock; GT more often filter/separate.",
              "fepe": "Geogrid: reinforce; geotextile: separate/filter/drain."
            },
            {
              "id": "gpe05-earth-1-14",
              "type": "mcq",
              "label": "5A · Stone columns",
              "stem": "Stone columns (aggregate columns) are most nearly used to improve:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only intact hard rock for tunneling"
                },
                {
                  "id": "b",
                  "text": "Clays, silts, loose silty sands, and uncompacted fill by providing stiffer inclusions and drainage",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Only clean dry boulders above the water table"
                },
                {
                  "id": "d",
                  "text": "Only Site Class A rock profiles"
                }
              ],
              "explanation": "Stone columns — clays, silts, loose silty sands, uncompacted fill.",
              "miss": "Stone columns → soft/loose soils, not hard rock.",
              "fepe": "Stone columns: soft clay/silt/loose silty sand."
            },
            {
              "id": "gpe05-earth-1-15",
              "type": "mcq",
              "label": "5C · Circular arc methods",
              "stem": "Ordinary Method of Slices (Fellenius) for a circular slip surface most nearly neglects which interslice forces?",
              "choices": [
                {
                  "id": "a",
                  "text": "Gravity body forces on each slice"
                },
                {
                  "id": "b",
                  "text": "Shear strength mobilization on the base of each slice"
                },
                {
                  "id": "c",
                  "text": "All interslice forces (normal and shear between slices), summing moments about the center only with base forces",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Pore-water pressure on the slip surface when ru is given"
                }
              ],
              "explanation": "Ordinary/Fellenius ignores interslice forces; Bishop includes interslice normals (interslice shear = 0).",
              "miss": "Ordinary slices: ignore interslice forces. Bishop includes interslice normals.",
              "fepe": "Fellenius: no interslice forces; Bishop: interslice normals."
            }
          ]
        }
      ],
      "topic": 5
    },
    {
      "id": "gpe05-bench",
      "title": "PE bench · Earth structures",
      "bench": true,
      "lessons": [
        {
          "id": "gpe05-pe-1",
          "title": "Earth structures PE bench",
          "minutes": 25,
          "xp": 40,
          "summary": "Infinite-slope FS with/without ru, Rankine Ka, geosynthetic RF chain, φu=0 infinite slope.",
          "items": [
            {
              "id": "gpe05-pe-1-01",
              "type": "mcq",
              "pe": true,
              "label": "Infinite slope FS",
              "given": "F = tanφ′/tanβ (ru=0)",
              "vignette": "Infinite slope in dry sand: φ′ = 32°, slope angle β = 18°.",
              "stem": "Most nearly, the factor of safety is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.90",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "0.53"
                },
                {
                  "id": "c",
                  "text": "1.00"
                },
                {
                  "id": "d",
                  "text": "3.20"
                }
              ],
              "work": [
                "tan32° ≈ 0.6249; tan18° ≈ 0.3249",
                "F = 0.6249/0.3249 ≈ 1.92 ≈ 1.90",
                "0.53 = tanβ/tanφ′ (inverted)",
                "1.00 is failure definition",
                "3.20 ≈ φ′/β in degrees wrongly"
              ],
              "explanation": "F = tanφ′/tanβ ≈ 1.90. Inverting the ratio is the classic trap.",
              "miss": "FS = tanφ′/tanβ — do not invert.",
              "fepe": "Dry infinite slope: F = tanφ′/tanβ."
            },
            {
              "id": "gpe05-pe-1-02",
              "type": "mcq",
              "pe": true,
              "label": "Infinite slope with ru",
              "given": "F = (tanφ′/tanβ)·[1 − ru(1+tan²β)]",
              "vignette": "Same slope: φ′ = 32°, β = 18°, ru = 0.25.",
              "stem": "Most nearly, FS is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.39",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "1.90"
                },
                {
                  "id": "c",
                  "text": "0.95"
                },
                {
                  "id": "d",
                  "text": "2.40"
                }
              ],
              "work": [
                "tanφ′/tanβ ≈ 1.923",
                "1+tan²18° ≈ 1.1056; ru(1+tan²β)=0.25×1.1056≈0.276",
                "F = 1.923×(1−0.276) ≈ 1.39",
                "1.90 is ru=0; 0.95 and 2.40 are arithmetic near-misses"
              ],
              "explanation": "Apply the NCEES ru form; dry FS≈1.90 drops to about 1.39 with ru=0.25.",
              "miss": "Include [1 − ru(1+tan²β)]; dry FS overestimates when ru>0.",
              "fepe": "With ru: multiply dry FS by [1−ru(1+tan²β)]."
            },
            {
              "id": "gpe05-pe-1-03",
              "type": "mcq",
              "pe": true,
              "label": "Rankine Ka for MSE",
              "given": "Ka = tan²(45−φ′/2)",
              "vignette": "MSE select backfill φ′ = 34°. Horizontal backfill, vertical face.",
              "stem": "Most nearly, Ka is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.49"
                },
                {
                  "id": "b",
                  "text": "0.28",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "0.83"
                },
                {
                  "id": "d",
                  "text": "1.00"
                }
              ],
              "work": [
                "45−φ′/2 = 28°",
                "Ka = tan²28° ≈ 0.282 ≈ 0.28",
                "0.49 ≈ tan28° (forgot square)",
                "0.83 ≈ Kp-ish mix-up",
                "1.00 wrong limit"
              ],
              "explanation": "Ka = tan²(45−φ′/2) ≈ 0.28. Forgetting to square or computing Kp are near-misses.",
              "miss": "Ka = tan²(45−φ′/2), not tan(45−φ′/2).",
              "fepe": "Rankine Ka = tan²(45−φ′/2)."
            },
            {
              "id": "gpe05-pe-1-04",
              "type": "mcq",
              "pe": true,
              "label": "Geosynthetic partial FS",
              "given": "Tallow = Tult/(FSID·FSCR·FSCD·FSBD); then Tdesign = Tallow/FSdesign",
              "vignette": "Geotextile Tult = 4,000 lb/ft. Mid-range RF: FSID=1.5, FSCR=3.0, FSCD=1.25, FSBD=1.2. Additional design FS = 1.5 on Tallow.",
              "stem": "Most nearly, Tdesign is:",
              "choices": [
                {
                  "id": "a",
                  "text": "2,667 lb/ft"
                },
                {
                  "id": "b",
                  "text": "593 lb/ft"
                },
                {
                  "id": "c",
                  "text": "395 lb/ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "4,000 lb/ft"
                }
              ],
              "work": [
                "RF product = 1.5×3×1.25×1.2 = 6.75",
                "Tallow = 4000/6.75 ≈ 593 lb/ft",
                "Tdesign = 593/1.5 ≈ 395 lb/ft",
                "593 is Tallow; 2667 = 4000/1.5 only; 4000 is Tult"
              ],
              "explanation": "Chain all RF to get Tallow, then apply design FS → ≈395 lb/ft.",
              "miss": "Apply all RF product, then design FS — do not stop at Tult/1.5.",
              "fepe": "Tdesign = Tult/(∏RFi × FSdesign)."
            },
            {
              "id": "gpe05-pe-1-05",
              "type": "mcq",
              "pe": true,
              "label": "Undrained infinite slope φu=0",
              "given": "F = su / (γ H sinβ cosβ) for φu=0 infinite slope",
              "vignette": "Saturated clay: su = 800 psf, γsat = 120 pcf, H = 10 ft to slip, β = 25°.",
              "stem": "Most nearly, FS is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.87"
                },
                {
                  "id": "b",
                  "text": "1.00"
                },
                {
                  "id": "c",
                  "text": "2.30"
                },
                {
                  "id": "d",
                  "text": "1.73",
                  "correct": true
                }
              ],
              "work": [
                "sin25°≈0.4226; cos25°≈0.9063; product≈0.383",
                "γH sin cos = 120×10×0.383 = 460 psf",
                "F = 800/460 ≈ 1.74 ≈ 1.73",
                "0.87 = inverted; 1.00 = threshold; 2.30 = trig slip"
              ],
              "explanation": "φu=0 infinite: FS = su/(γH sinβ cosβ) ≈ 1.73.",
              "miss": "Do not invert su and driving stress.",
              "fepe": "φu=0 infinite: F = su/(γ H sinβ cosβ)."
            }
          ]
        }
      ],
      "topic": 5
    }
  ]
});
