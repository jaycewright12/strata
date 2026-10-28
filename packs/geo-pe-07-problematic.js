/*
 * STRATA built-in pack: GEO PE · 7. Problematic Soil & Rock Conditions (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES HB §3.17 / §3.4.3, GEC 5, UFC 3-220-10 §1-5, Vandevelde Depth IV, NHI-05-037 frost).
 * Do not redistribute.
 * Maps to PE topic 7 (Problematic Soil and Rock Conditions) — conceptual + PE bench tracks.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-07-problematic",
  "title": "GEO PE · 7. Problematic Soil & Rock Conditions",
  "version": "1.0.0",
  "description": "Personal use only. Original questions based on Jayce's study library (NCEES HB §3.17 / §3.4.3, GEC 5, UFC 3-220-10 §1-5, Vandevelde Depth IV, NHI-05-037 frost). Do not redistribute.",
  "units": [
    {
      "id": "gpe07-prob",
      "title": "7. Problematic Soil & Rock Conditions",
      "blurb": "Karst, collapsible, expansive, organic/sensitive soils; corrosive soils; frost; rock slopes/rockfall — PE depth.",
      "lessons": [
        {
          "id": "gpe07-prob-1",
          "title": "Problematic soils · Concepts",
          "minutes": 35,
          "xp": 60,
          "summary": "7A–7D recognition and mitigation judgment with short calcs.",
          "items": [
            {
              "id": "gpe07-prob-1-01",
              "type": "mcq",
              "label": "7A · Collapsible soils",
              "stem": "Collapsible soils (e.g., some loess / moisture-sensitive fills) are most nearly characterized by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Large decrease in volume upon wetting under load (metastable structure)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Volume increase upon drying only, with no wetting effect"
                },
                {
                  "id": "c",
                  "text": "Zero compressibility when saturated because e cannot change"
                },
                {
                  "id": "d",
                  "text": "Behavior identical to dense glacial till at all water contents"
                }
              ],
              "explanation": "Collapse = metastable dry structure that densifies when wetted under load (GEC 5 / UFC / NCEES collapse test refs). Not swell-on-drying, not incompressible when wet.",
              "miss": "Collapse: wetting under load → sudden settlement.",
              "fepe": "Collapsible: wetting-induced volume decrease under load."
            },
            {
              "id": "gpe07-prob-1-02",
              "type": "mcq",
              "label": "7A · Expansive clay",
              "stem": "Highly expansive clay risk is most nearly indicated by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Clean SP sand with <5% fines"
                },
                {
                  "id": "b",
                  "text": "High-plasticity clay (high PI / CH) with significant clay mineralogy and moisture change potential",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Intact granite with RQD = 95%"
                },
                {
                  "id": "d",
                  "text": "GW gravel with CBR = 80"
                }
              ],
              "explanation": "Expansive behavior tracks high-PI clays (often CH) and moisture fluctuation. Clean sands/gravel/rock are not expansive in the clay-mineral sense.",
              "miss": "Expansive → high-PI clay + moisture change — not clean sand.",
              "fepe": "Expansive soils: high PI / CH + Δw."
            },
            {
              "id": "gpe07-prob-1-03",
              "type": "mcq",
              "label": "7A · Karst",
              "stem": "In karst terrain, the geotechnical concern that should most strongly drive exploration and foundation strategy is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Uniform dense sand with no voids anywhere"
                },
                {
                  "id": "b",
                  "text": "Complete absence of groundwater in all seasons"
                },
                {
                  "id": "c",
                  "text": "Solution cavities, pinnacled rock, soil-filled slots, and irregular rockhead causing differential support",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Frost depth maps alone without geologic mapping"
                }
              ],
              "explanation": "Karst: irregular rockhead, voids, raveling soils — differential settlement/collapse risk (GEC 5 / Vandevelde Depth IV). Frost maps do not replace karst characterization.",
              "miss": "Karst → cavities/irregular rockhead → differential support risk.",
              "fepe": "Karst: map voids & irregular rockhead; probe deeply."
            },
            {
              "id": "gpe07-prob-1-04",
              "type": "mcq",
              "label": "7A · Peat / organic",
              "stem": "Thick peat / highly organic soil under a proposed embankment most nearly leads to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Negligible settlement because organics are incompressible"
                },
                {
                  "id": "b",
                  "text": "Excellent bearing with SPT N > 50 typically"
                },
                {
                  "id": "c",
                  "text": "Behavior identical to dense SW sand"
                },
                {
                  "id": "d",
                  "text": "Large secondary compression / creep settlements and low strength requiring removal, replacement, lightweight fill, or staged construction/columns",
                  "correct": true
                }
              ],
              "explanation": "Peat/organics: high compressibility including secondary compression; low strength — often excavate/replace, lightweight fill, or ground improvement (NCEES §3.12 CSE applicability).",
              "miss": "Peat → big settlement/creep — plan removal or improvement.",
              "fepe": "Organic/peat: high Sc + secondary; mitigate."
            },
            {
              "id": "gpe07-prob-1-05",
              "type": "mcq",
              "label": "7A · Sensitive clay",
              "stem": "A sensitive (quick) clay is most nearly one that:",
              "choices": [
                {
                  "id": "a",
                  "text": "Loses a large fraction of undrained strength upon remolding (high sensitivity St = su,undisturbed/su,remolded)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Gains strength when remolded because of thixotropic cementation increase only"
                },
                {
                  "id": "c",
                  "text": "Has St ≈ 1 with identical peak and remolded strengths"
                },
                {
                  "id": "d",
                  "text": "Is defined solely by having PI < 4"
                }
              ],
              "explanation": "Sensitivity St = su,U/su,R; quick clays have very high St and can flow when remolded. St≈1 is insensitive.",
              "miss": "Sensitive clay: high St — strength collapse on remolding.",
              "fepe": "St = su,undisturbed/su,remolded."
            },
            {
              "id": "gpe07-prob-1-06",
              "type": "mcq",
              "label": "7B · Resistivity corrosion",
              "stem": "Per the NCEES resistivity aggressiveness table (NCHRP), a soil with resistivity = 500 ohm-cm is most nearly classed as:",
              "choices": [
                {
                  "id": "a",
                  "text": "Noncorrosive (>10,000 ohm-cm)"
                },
                {
                  "id": "b",
                  "text": "Very corrosive (<700 ohm-cm)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Mildly corrosive (5,000–10,000)"
                },
                {
                  "id": "d",
                  "text": "Moderately corrosive (2,000–5,000) only, ignoring the <700 band"
                }
              ],
              "explanation": "NCEES §3.17.1: <700 very corrosive; 700–2,000 corrosive; 2,000–5,000 moderately; 5,000–10,000 mildly; >10,000 noncorrosive. 500 → very corrosive.",
              "miss": "ρ < 700 ohm-cm → very corrosive.",
              "fepe": "Resistivity bands: <700 very corrosive."
            },
            {
              "id": "gpe07-prob-1-07",
              "type": "mcq",
              "label": "7B · Sulfate attack",
              "stem": "High soluble sulfate in soil/groundwater is of particular concern for:",
              "choices": [
                {
                  "id": "a",
                  "text": "Stainless instrumentation cables only, with no concrete impact"
                },
                {
                  "id": "b",
                  "text": "Clean quartz sand drainage layers exclusively"
                },
                {
                  "id": "c",
                  "text": "Portland-cement concrete (and some cement-stabilized soils) — sulfate attack risk",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "HDPE geomembranes as the sole failure mode"
                }
              ],
              "explanation": "Sulfates attack concrete (and some chemically stabilized soils). Design may need sulfate-resistant cement / barriers (UFC corrosivity / NCEES chemical tests).",
              "miss": "High SO4 → concrete sulfate attack risk.",
              "fepe": "Sulfates: concrete durability issue."
            },
            {
              "id": "gpe07-prob-1-08",
              "type": "mcq",
              "label": "7C · Frost susceptibility",
              "stem": "Frost-susceptible soils are most nearly those that:",
              "choices": [
                {
                  "id": "a",
                  "text": "Are clean open-graded gravels with negligible fines <0.02 mm"
                },
                {
                  "id": "b",
                  "text": "Never heave because ice cannot form in any soil"
                },
                {
                  "id": "c",
                  "text": "Are limited to solid bedrock with no soil cover"
                },
                {
                  "id": "d",
                  "text": "Contain enough fine particles (often silts) and access to water to grow ice lenses and heave when freezing fronts penetrate",
                  "correct": true
                }
              ],
              "explanation": "NCEES §3.17.3 / NHI-05-037: frost susceptibility rises with % finer than 0.02 mm (silts especially) plus water and freezing. Clean gravels are low susceptibility.",
              "miss": "Frost heave: fines + water + freezing front — silts are classic.",
              "fepe": "Frost: %<0.02 mm + water + freeze."
            },
            {
              "id": "gpe07-prob-1-09",
              "type": "mcq",
              "label": "7C · Frost depth foundations",
              "stem": "Exterior shallow foundations in frost climates are typically founded most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Below the design frost depth (or otherwise protected) to reduce frost-heave and adfreeze uplift risk",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "On the ground surface with no cover in all climates"
                },
                {
                  "id": "c",
                  "text": "Exactly at the mid-depth of the freezing front to maximize heave restraint"
                },
                {
                  "id": "d",
                  "text": "Only on peat in frost zones because peat never freezes"
                }
              ],
              "explanation": "Bear below frost depth or use frost-protected design (NCEES frost depth map / practice). Founding in the active freeze zone invites heave.",
              "miss": "Footings below frost depth (or FPSF) — not in the freezing fringe.",
              "fepe": "Found below frost depth or protect."
            },
            {
              "id": "gpe07-prob-1-10",
              "type": "mcq",
              "label": "7D · Rock slope modes",
              "stem": "A rock slope with persistent discontinuities dipping out of the face at 35° (daylighting) is most nearly susceptible to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Isotropic undrained clay circular failure only"
                },
                {
                  "id": "b",
                  "text": "Planar (or wedge) sliding along the daylighting discontinuity",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Liquefaction of intact rock bridges under static conditions"
                },
                {
                  "id": "d",
                  "text": "OSHA Type A soil sloping at ¾:1 without geologic structure checks"
                }
              ],
              "explanation": "Kinematic rock failure: planar/wedge sliding on daylighting joints. Soil circular charts and OSHA soil typing do not replace discontinuity kinematics.",
              "miss": "Daylighting joint → planar/wedge rock-slide check.",
              "fepe": "Rock slopes: discontinuity orientation controls mode."
            },
            {
              "id": "gpe07-prob-1-11",
              "type": "mcq",
              "label": "7D · Rockfall mitigation",
              "stem": "Which measure is most nearly a rockfall catchment/protection strategy rather than a slope-reinforcement strategy?",
              "choices": [
                {
                  "id": "a",
                  "text": "Pattern rock bolts tying a potentially unstable block into sound rock"
                },
                {
                  "id": "b",
                  "text": "Shear keys concreted into the failure plane"
                },
                {
                  "id": "c",
                  "text": "A ditch and barrier fence / attenuator at the toe to intercept falling blocks",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Prestressed anchors elevating FS of a sliding wedge"
                }
              ],
              "explanation": "Catchment ditches/fences/attenuators manage rockfall paths; bolts/anchors/keys reinforce the slope mass.",
              "miss": "Ditch/fence = catchment; bolts/anchors = reinforcement.",
              "fepe": "Rockfall: reinforce source or catch at toe."
            },
            {
              "id": "gpe07-prob-1-12",
              "type": "mcq",
              "label": "7A · Mitigation collapsible",
              "stem": "A lightly loaded slab on collapsible silty soil above a deep water table is being considered. A common mitigation approach is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ignore wetting sources because collapse never occurs under slabs"
                },
                {
                  "id": "b",
                  "text": "Raise the water table permanently under the slab before construction to guarantee collapse during service"
                },
                {
                  "id": "c",
                  "text": "Use the lowest possible bearing pressure without ground treatment or drainage control"
                },
                {
                  "id": "d",
                  "text": "Prewetting/preconsolidation, removal/replacement, deep foundations through the collapsible stratum, and strict drainage control to avoid wetting",
                  "correct": true
                }
              ],
              "explanation": "Mitigate collapse by removing/replacing, prewetting/compacting, spanning with deep foundations, and preventing wetting. Intentionally wetting in service is the hazard, not the plan.",
              "miss": "Collapse mitigation: remove/replace, prewet under control, deep foundations, keep dry.",
              "fepe": "Collapsible: treat or bypass; control wetting."
            },
            {
              "id": "gpe07-prob-1-13",
              "type": "mcq",
              "label": "7B · pH corrosivity",
              "stem": "For buried steel, acidic soil (low pH) combined with low resistivity most nearly indicates:",
              "choices": [
                {
                  "id": "a",
                  "text": "Elevated corrosion potential requiring protection evaluation (coatings, CP, sacrificial thickness, or fill improvement)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "That steel needs no protection because acid passivates all metals"
                },
                {
                  "id": "c",
                  "text": "That only concrete piles are immune without any sulfate check"
                },
                {
                  "id": "d",
                  "text": "That resistivity >10,000 ohm-cm is guaranteed"
                }
              ],
              "explanation": "Low pH + low ρ flag high corrosion potential (NCEES/UFC). Protection measures follow — acid does not passivate carbon steel underground.",
              "miss": "Low pH + low ρ → high corrosion risk for steel.",
              "fepe": "Corrosion screen: pH, ρ, SO4, Cl."
            },
            {
              "id": "gpe07-prob-1-14",
              "type": "mcq",
              "label": "7C · Frost-susceptible silt",
              "stem": "Among common USCS soils, which is typically most frost-susceptible?",
              "choices": [
                {
                  "id": "a",
                  "text": "GW clean gravel with negligible fines"
                },
                {
                  "id": "b",
                  "text": "SP sand with <5% fines and free drainage"
                },
                {
                  "id": "c",
                  "text": "Intact sound rock with no soil cover"
                },
                {
                  "id": "d",
                  "text": "ML silt with appreciable % <0.02 mm and access to water",
                  "correct": true
                }
              ],
              "explanation": "NCEES frost susceptibility chart: silts with fines <0.02 mm and water access show high heave rates. Clean GW/SP and intact rock are low/negligible.",
              "miss": "Silts with fines <0.02 mm + water → high frost susceptibility.",
              "fepe": "Frost heave: silts > clean sands/gravels."
            },
            {
              "id": "gpe07-prob-1-15",
              "type": "mcq",
              "label": "7D · Rockfall source",
              "stem": "The first step in managing a rockfall hazard along a highway cut is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ignore discontinuity mapping because soil FS charts suffice"
                },
                {
                  "id": "b",
                  "text": "Install only landscaping plants with no engineering assessment"
                },
                {
                  "id": "c",
                  "text": "Characterize geology/discontinuities, identify source zones and trajectories, then select reinforce and/or catchment measures",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Assume all rock faces are Stable Rock under OSHA without field review"
                }
              ],
              "explanation": "Rockfall management starts with geologic characterization and path analysis, then mitigation. OSHA soil typing and planting alone are insufficient.",
              "miss": "Map structure → assess paths → reinforce and/or catch.",
              "fepe": "Rockfall: characterize → analyze paths → mitigate."
            }
          ]
        }
      ],
      "topic": 7
    },
    {
      "id": "gpe07-bench",
      "title": "PE bench · Problematic soils",
      "bench": true,
      "lessons": [
        {
          "id": "gpe07-pe-1",
          "title": "Problematic soils PE bench",
          "minutes": 20,
          "xp": 40,
          "summary": "Collapse strain, swell pressure framing, resistivity class, frost heave fines, corrosion loss.",
          "items": [
            {
              "id": "gpe07-pe-1-01",
              "type": "mcq",
              "pe": true,
              "label": "Collapse strain",
              "given": "εc = ΔH/H0",
              "vignette": "Oedometer collapse test: specimen height H0 = 20.00 mm. After inundation under constant load, height = 18.40 mm.",
              "stem": "Most nearly, collapse strain is:",
              "choices": [
                {
                  "id": "a",
                  "text": "8.0%",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "1.60%"
                },
                {
                  "id": "c",
                  "text": "8.7%"
                },
                {
                  "id": "d",
                  "text": "0.080%"
                }
              ],
              "work": [
                "ΔH = 20.00−18.40 = 1.60 mm",
                "εc = 1.60/20.00 = 0.080 = 8.0%",
                "1.60% forgets /H0 scaling as percent properly",
                "8.7% ≈ 1.6/18.4 final height"
              ],
              "explanation": "Collapse strain = ΔH/H0 = 8%. Using final height in the denominator is a near-miss.",
              "miss": "εc = ΔH/H0 (initial height).",
              "fepe": "Collapse strain = ΔH/H0."
            },
            {
              "id": "gpe07-pe-1-02",
              "type": "mcq",
              "pe": true,
              "label": "Resistivity class",
              "given": "NCEES table: <700 very corrosive; 700–2000 corrosive; 2000–5000 moderate; 5000–10000 mild; >10000 noncorrosive",
              "vignette": "Field soil resistivity = 1,500 ohm-cm.",
              "stem": "Most nearly, aggressiveness class is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Noncorrosive"
                },
                {
                  "id": "b",
                  "text": "Corrosive",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Very corrosive"
                },
                {
                  "id": "d",
                  "text": "Mildly corrosive"
                }
              ],
              "work": [
                "1,500 is in 700–2,000 → Corrosive",
                "<700 would be very corrosive; >5000 mild; >10000 non"
              ],
              "explanation": "1,500 ohm-cm → Corrosive band.",
              "miss": "700–2,000 = corrosive (not ‘very’ unless <700).",
              "fepe": "ρ bands per NCEES §3.17.1."
            },
            {
              "id": "gpe07-pe-1-03",
              "type": "mcq",
              "pe": true,
              "label": "Steel corrosion loss",
              "given": "x = K t^n; n=0.80 carbon steel; K=40 μm (average); t in years; 1000 μm = 1 mm",
              "vignette": "Estimate average thickness loss of carbon steel after t = 25 years using K = 40, n = 0.80.",
              "stem": "Most nearly, thickness loss x is:",
              "choices": [
                {
                  "id": "a",
                  "text": "40 μm"
                },
                {
                  "id": "b",
                  "text": "1.0 mm"
                },
                {
                  "id": "c",
                  "text": "0.48 mm",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "25 μm"
                }
              ],
              "work": [
                "t^n = 25^0.80. 25^0.5≈5; 25^0.8≈25^(4/5)=(25^4)^(1/5) or 25^0.8≈12.0",
                "x = 40×12.0 = 480 μm = 0.48 mm",
                "40 μm is K alone; 1 mm is a round distractor; 25 μm uses t without K^n"
              ],
              "explanation": "x=K t^n ≈ 480 μm = 0.48 mm. Omitting the time exponent understates loss.",
              "miss": "Apply x=K t^n — do not report K as the loss.",
              "fepe": "Corrosion depth x = K t^n."
            },
            {
              "id": "gpe07-pe-1-04",
              "type": "mcq",
              "pe": true,
              "label": "Sensitivity",
              "given": "St = su,undisturbed / su,remolded",
              "vignette": "Field vane: peak su = 1,200 psf; remolded su = 150 psf.",
              "stem": "Most nearly, sensitivity St is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.125"
                },
                {
                  "id": "b",
                  "text": "8.0",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "1,050"
                },
                {
                  "id": "d",
                  "text": "150"
                }
              ],
              "work": [
                "St = 1200/150 = 8.0",
                "0.125 inverts; 1050 is a difference; 150 is remolded su"
              ],
              "explanation": "St=8 — sensitive clay. Inverting peak/remolded is the trap.",
              "miss": "St = peak/remolded — do not invert.",
              "fepe": "St = su,U/su,R."
            },
            {
              "id": "gpe07-pe-1-05",
              "type": "mcq",
              "pe": true,
              "label": "Frost depth footing",
              "given": "Design frost depth = 4.0 ft; required cover below frost = footing bottom ≥ frost depth",
              "vignette": "Exterior spread footing, ground surface EL 100.0 ft, frost depth 4.0 ft. Neglect FPSF alternatives.",
              "stem": "Most nearly, the highest allowable elevation of the footing bottom is:",
              "choices": [
                {
                  "id": "a",
                  "text": "100.0 ft"
                },
                {
                  "id": "b",
                  "text": "98.0 ft"
                },
                {
                  "id": "c",
                  "text": "104.0 ft"
                },
                {
                  "id": "d",
                  "text": "96.0 ft",
                  "correct": true
                }
              ],
              "work": [
                "Bottom ≤ 100.0 − 4.0 = 96.0 ft",
                "100 is grade; 98 is only 2 ft embedment; 104 is above grade"
              ],
              "explanation": "Footing bottom at or below frost depth → EL ≤ 96.0 ft.",
              "miss": "Bottom below frost: grade − frost depth.",
              "fepe": "Exterior footing bottom ≤ grade − frost depth."
            }
          ]
        }
      ],
      "topic": 7
    }
  ]
});
