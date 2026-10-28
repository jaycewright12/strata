/*
 * STRATA built-in pack: GEO PE · 10b. Deep Foundations (Expansion) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 10 — conceptual + PE bench tracks (expansion).
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-10b-deep",
  "title": "GEO PE · 10b. Deep Foundations (Expansion)",
  "version": "1.0.0",
  "description": "Personal use only. Original expansion questions based on Jayce's study library (GEC 12, GEC 10, DM 7.02 Ch.5, NCEES HB, Vandevelde Depth I/III). Do not redistribute. Complements geo-pe-10-deep.",
  "units": [
    {
      "id": "gpe10b-deep",
      "title": "10b. Deep Foundations · Expansion",
      "blurb": "β/Nordlund sand, downdrag, rock sockets, p-y, fixity depth, setup, slurry, static LT, Davisson, PDA, PIT limits, CSL tubes, group block, uplift, refusal.",
      "lessons": [
        {
          "id": "gpe10b-deep-1",
          "title": "Deep foundations · Concepts (expansion)",
          "minutes": 40,
          "xp": 60,
          "summary": "Fifteen expansion items across 10A–10E.",
          "items": [
            {
              "id": "gpe10b-deep-1-01",
              "type": "mcq",
              "label": "10A · Nordlund / β sand",
              "stem": "Shaft resistance in sand for driven piles is commonly estimated most nearly using:",
              "choices": [
                {
                  "id": "a",
                  "text": "Effective-stress β (or Nordlund) methods: fs = β σ′v (with limits/factors per design manual)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Only α su with φu=0 for sand"
                },
                {
                  "id": "c",
                  "text": "Only UU triaxial on sand"
                },
                {
                  "id": "d",
                  "text": "Hazen permeability as capacity"
                }
              ],
              "explanation": "Sand shaft resistance uses β/Nordlund effective-stress approaches.",
              "miss": "Sand shaft → β σ′v.",
              "fepe": "Driven pile in sand: β / Nordlund shaft."
            },
            {
              "id": "gpe10b-deep-1-02",
              "type": "mcq",
              "label": "10A · Negative skin friction",
              "stem": "Negative skin friction (downdrag) on a pile most nearly occurs when:",
              "choices": [
                {
                  "id": "a",
                  "text": "The pile heaves upward always"
                },
                {
                  "id": "b",
                  "text": "Surrounding soil settles more than the pile (consolidating fill/soft clay), loading the pile downward via skin friction",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Only in rock sockets with no soil"
                },
                {
                  "id": "d",
                  "text": "When φ′ = 0 exactly"
                }
              ],
              "explanation": "Downdrag when soil settles relative to the pile.",
              "miss": "Soil settlement > pile → downdrag.",
              "fepe": "Negative skin friction: consolidating soil vs pile."
            },
            {
              "id": "gpe10b-deep-1-03",
              "type": "mcq",
              "label": "10A · Rock socket",
              "stem": "A drilled shaft rock socket develops capacity most nearly from:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only SPT N in the soil plug with no rock contact"
                },
                {
                  "id": "b",
                  "text": "Only α methods for soft clay with no rock"
                },
                {
                  "id": "c",
                  "text": "Side shear along the socket and/or end bearing on rock — design per GEC 10 / agency rock-socket methods",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Only liquefaction CSR"
                }
              ],
              "explanation": "Rock sockets: unit side shear + end bearing on rock.",
              "miss": "Socket = rock side shear ± end bearing.",
              "fepe": "Rock socket: side shear + end bearing."
            },
            {
              "id": "gpe10b-deep-1-04",
              "type": "mcq",
              "label": "10B · p-y curves",
              "stem": "p-y curves in lateral pile analysis most nearly represent:",
              "choices": [
                {
                  "id": "a",
                  "text": "Axial t-z only"
                },
                {
                  "id": "b",
                  "text": "Only pore-pressure dissipation"
                },
                {
                  "id": "c",
                  "text": "SPT energy ratios"
                },
                {
                  "id": "d",
                  "text": "Nonlinear lateral soil resistance p versus deflection y along the pile depth",
                  "correct": true
                }
              ],
              "explanation": "p-y = lateral soil reaction vs deflection for beam-column pile models.",
              "miss": "p-y → lateral soil springs.",
              "fepe": "p-y curves: lateral resistance vs deflection."
            },
            {
              "id": "gpe10b-deep-1-05",
              "type": "mcq",
              "label": "10B · Fixity / depth of fixity",
              "stem": "Equivalent depth of fixity for a laterally loaded pile is used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Approximate the pile as an equivalent cantilever for deflection/moment estimates in simplified methods",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Define the SPT seating interval"
                },
                {
                  "id": "c",
                  "text": "Replace axial capacity equations"
                },
                {
                  "id": "d",
                  "text": "Set OSHA trench depth"
                }
              ],
              "explanation": "Depth of fixity idealizes embedded pile response as a cantilever of equivalent length.",
              "miss": "Fixity depth → equivalent cantilever.",
              "fepe": "Lateral: equivalent depth of fixity."
            },
            {
              "id": "gpe10b-deep-1-06",
              "type": "mcq",
              "label": "10C · Driven pile setup",
              "stem": "Pile setup (time-dependent capacity gain after driving) is most nearly common in:",
              "choices": [
                {
                  "id": "a",
                  "text": "Clean dry gravel with instantaneous final capacity always identical"
                },
                {
                  "id": "b",
                  "text": "Saturated clays / some silts where excess pore pressures dissipate and strength recovers after driving disturbance",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Only solid rock with no soil"
                },
                {
                  "id": "d",
                  "text": "Never in any geomaterial"
                }
              ],
              "explanation": "Setup common in fine-grained soils after driving-induced remolding/excess u.",
              "miss": "Setup in clays after driving.",
              "fepe": "Pile setup: capacity gain with time in clays."
            },
            {
              "id": "gpe10b-deep-1-07",
              "type": "mcq",
              "label": "10C · Drilled shaft slurry",
              "stem": "Mineral or polymer slurry in drilled shaft construction is used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Replace concrete entirely"
                },
                {
                  "id": "b",
                  "text": "Increase SPT N of the cuttings"
                },
                {
                  "id": "c",
                  "text": "Stabilize the excavation against collapse and control groundwater inflow during drilling before concreting",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Act as the permanent structural reinforcement"
                }
              ],
              "explanation": "Slurry maintains hole stability until concrete placement.",
              "miss": "Slurry stabilizes the shaft excavation.",
              "fepe": "Drilled shaft slurry: hole stability / GW control."
            },
            {
              "id": "gpe10b-deep-1-08",
              "type": "mcq",
              "label": "10D · Static load test purpose",
              "stem": "A static axial compressive load test on a production or probe pile is used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Measure only RQD"
                },
                {
                  "id": "b",
                  "text": "Replace all integrity testing forever"
                },
                {
                  "id": "c",
                  "text": "Determine OSHA soil type"
                },
                {
                  "id": "d",
                  "text": "Verify or establish the allowable/design axial capacity under a defined failure criterion (e.g., Davisson)",
                  "correct": true
                }
              ],
              "explanation": "Static load tests calibrate/verify axial geotechnical capacity.",
              "miss": "Static LT → capacity verification.",
              "fepe": "Static load test: axial capacity under failure criterion."
            },
            {
              "id": "gpe10b-deep-1-09",
              "type": "mcq",
              "label": "10D · Davisson criterion",
              "stem": "Davisson’s offset failure load is most nearly defined as:",
              "choices": [
                {
                  "id": "a",
                  "text": "The load where the load–settlement curve intersects a line offset from the elastic pile line by a specified offset (PL/AE + 0.15″ + B/120 style)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "The load at 1% of pile length settlement only with no offset construction"
                },
                {
                  "id": "c",
                  "text": "The first blow count in PDA"
                },
                {
                  "id": "d",
                  "text": "The CPT tip resistance"
                }
              ],
              "explanation": "Davisson: intersection with elastic line plus code offset.",
              "miss": "Davisson = elastic line + offset.",
              "fepe": "Davisson failure: offset from elastic response."
            },
            {
              "id": "gpe10b-deep-1-10",
              "type": "mcq",
              "label": "10D · PDA purpose",
              "stem": "High-strain dynamic testing (PDA) during driving most nearly provides:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only low-strain integrity with no capacity info"
                },
                {
                  "id": "b",
                  "text": "Estimates of capacity, driving stresses, and hammer performance — often refined with CAPWAP signal matching",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Only concrete slump"
                },
                {
                  "id": "d",
                  "text": "Only Atterberg limits"
                }
              ],
              "explanation": "PDA/CAPWAP → capacity and driving stresses.",
              "miss": "PDA → capacity + stresses.",
              "fepe": "PDA/CAPWAP: dynamic capacity assessment."
            },
            {
              "id": "gpe10b-deep-1-11",
              "type": "mcq",
              "label": "10E · PIT limitation",
              "stem": "A low-strain pile integrity test (pulse-echo) most nearly cannot by itself:",
              "choices": [
                {
                  "id": "a",
                  "text": "Detect many major cross-section anomalies"
                },
                {
                  "id": "b",
                  "text": "Estimate pile length approximately"
                },
                {
                  "id": "c",
                  "text": "Provide a reliable ultimate axial geotechnical capacity (it checks integrity/length/major defects)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Be used as a QA screening tool"
                }
              ],
              "explanation": "PIT is integrity QA — not a substitute for load testing capacity.",
              "miss": "PIT ≠ capacity test.",
              "fepe": "PIT: integrity, not geotechnical Qu."
            },
            {
              "id": "gpe10b-deep-1-12",
              "type": "mcq",
              "label": "10E · CSL access tubes",
              "stem": "Crosshole sonic logging of a drilled shaft requires most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only SPT samples from the slurry"
                },
                {
                  "id": "b",
                  "text": "No tubes — surface visual inspection only"
                },
                {
                  "id": "c",
                  "text": "Only PDA sensors on the hammer"
                },
                {
                  "id": "d",
                  "text": "Water-filled access tubes cast into the shaft so that ultrasonic travel times between tubes can map concrete quality",
                  "correct": true
                }
              ],
              "explanation": "CSL needs embedded access tubes for wave transmission through concrete.",
              "miss": "CSL → access tubes in shaft.",
              "fepe": "CSL: ultrasonic logging between access tubes."
            },
            {
              "id": "gpe10b-deep-1-13",
              "type": "mcq",
              "label": "10A · Group block failure",
              "stem": "A closely spaced pile group in clay may fail most nearly as:",
              "choices": [
                {
                  "id": "a",
                  "text": "A block (equivalent pier) with perimeter shear + base bearing on the group footprint, possibly with η < 1 efficiency on summed single-pile capacities",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Always exactly the sum of single piles with η = 1 regardless of spacing"
                },
                {
                  "id": "c",
                  "text": "Only as rock sockets"
                },
                {
                  "id": "d",
                  "text": "Only in tension"
                }
              ],
              "explanation": "Tight groups in clay can act as a block; efficiency may be < 1.",
              "miss": "Close clay groups → block action.",
              "fepe": "Pile group clay: block failure / efficiency."
            },
            {
              "id": "gpe10b-deep-1-14",
              "type": "mcq",
              "label": "10A · Uplift piles",
              "stem": "Axial uplift capacity of a driven pile in clay is most nearly governed by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Full compressive tip bearing plus shaft"
                },
                {
                  "id": "b",
                  "text": "Shaft resistance in tension (often with reduced adhesion factors) — tip bearing typically neglected in uplift",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Only the steel yield of the pile with no soil"
                },
                {
                  "id": "d",
                  "text": "Hazen k × area"
                }
              ],
              "explanation": "Uplift ≈ tensile shaft resistance; end bearing doesn’t help in uplift.",
              "miss": "Uplift → shaft in tension, little tip.",
              "fepe": "Uplift piles: tension shaft resistance."
            },
            {
              "id": "gpe10b-deep-1-15",
              "type": "mcq",
              "label": "10C · Refusal criteria",
              "stem": "Driving refusal criteria are most nearly intended to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Require continued driving until the pile vanishes"
                },
                {
                  "id": "b",
                  "text": "Be identical to Davisson failure load always"
                },
                {
                  "id": "c",
                  "text": "Stop driving when penetration per blow set reaches a specified low value — protecting the pile/hammer and indicating practical refusal",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Replace concrete strength tests on shafts"
                }
              ],
              "explanation": "Refusal = minimal set per blow per specs — don’t overdrive.",
              "miss": "Refusal → stop driving at specified set.",
              "fepe": "Driving refusal: specified minimum set/blow."
            }
          ]
        }
      ],
      "topic": 10
    },
    {
      "id": "gpe10b-bench",
      "title": "PE bench · Deep (expansion)",
      "bench": true,
      "blurb": "Alpha Qs, clay tip Qb, Qall, Davisson offset, beta Qs.",
      "lessons": [
        {
          "id": "gpe10b-pe-1",
          "title": "Deep · PE numbers (expansion)",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth deep-foundation calculations.",
          "items": [
            {
              "id": "gpe10b-pe-1-01",
              "type": "mcq",
              "label": "Alpha shaft",
              "stem": "Most nearly, ultimate shaft capacity Qs is:",
              "choices": [
                {
                  "id": "a",
                  "text": "120 kips (forgot perimeter or half α)"
                },
                {
                  "id": "b",
                  "text": "480 kips (double)"
                },
                {
                  "id": "c",
                  "text": "60 kips"
                },
                {
                  "id": "d",
                  "text": "240 kips",
                  "correct": true
                }
              ],
              "explanation": "Qs=α su As=0.5*1.5*320=240 kips? As=π D L=3.14*1.5*50≈235.5 ft²; α su=0.5*2000=1000 psf; Qs=235.5*1000/1000=235.5 kips≈240. Key d.",
              "miss": "Qs = α su (π D L).",
              "fepe": "Alpha method: Qs = α su As.",
              "pe": true,
              "given": "Qs = α su As; As = π D L",
              "vignette": "α=0.50; su=2,000 psf; D=1.5 ft; L=50 ft in clay.",
              "work": [
                "As=π×1.5×50≈235.6 ft²",
                "Qs=0.5×2000×235.6 / 1000 ≈ 236 kips ≈ 240 kips"
              ]
            },
            {
              "id": "gpe10b-pe-1-02",
              "type": "mcq",
              "label": "Clay tip",
              "stem": "Most nearly, ultimate tip capacity Qb is:",
              "choices": [
                {
                  "id": "a",
                  "text": "106 kips",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "47 kips (Nc=9 without area slip)"
                },
                {
                  "id": "c",
                  "text": "212 kips (double)"
                },
                {
                  "id": "d",
                  "text": "9 kips (su only)"
                }
              ],
              "explanation": "Qb=su Nc Ab=2000*9*(π×0.75²)/1000=18,000*1.767/1000≈31.8 — retune. D=2.5 ft, Ab=4.91; Qb=2000*9*4.91/1000=88.4. Want 106: su=2.4 ksf Nc=9 Ab=π=4.91 → 106.",
              "miss": "Qb = su Nc Ab with Nc≈9.",
              "fepe": "Clay tip: Qb = 9 su Ab.",
              "pe": true,
              "given": "φu=0 tip: Qb = su Nc Ab with Nc=9; Ab=π D²/4",
              "vignette": "su=2,400 psf; D=2.5 ft.",
              "work": [
                "Ab=π(2.5)²/4≈4.91 ft²",
                "Qb=2400×9×4.91/1000≈106 kips"
              ]
            },
            {
              "id": "gpe10b-pe-1-03",
              "type": "mcq",
              "label": "Qu and Qall",
              "stem": "Most nearly, allowable capacity Qall is:",
              "choices": [
                {
                  "id": "a",
                  "text": "360 kips (Qu without FS)"
                },
                {
                  "id": "b",
                  "text": "120 kips",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "180 kips (FS=2)"
                },
                {
                  "id": "d",
                  "text": "90 kips (FS=4)"
                }
              ],
              "explanation": "Qall=(Qs+Qb)/FS=(240+120)/3=120. So 120 is correct - key should be b. Put 120 as b.",
              "miss": "Qall = (Qs+Qb)/FS.",
              "fepe": "ASD Qall = Qu / FS.",
              "pe": true,
              "given": "Qall = (Qs + Qb) / FS",
              "vignette": "Qs=240 kips; Qb=120 kips; FS=3.0.",
              "work": [
                "Qu=360 kips",
                "Qall=360/3=120 kips"
              ]
            },
            {
              "id": "gpe10b-pe-1-04",
              "type": "mcq",
              "label": "Davisson offset",
              "stem": "Most nearly, the Davisson offset distance from the elastic line is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.15 in (offset constant only)"
                },
                {
                  "id": "b",
                  "text": "0.20 in (B/120 only)"
                },
                {
                  "id": "c",
                  "text": "0.35 in",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "0.50 in (slip)"
                }
              ],
              "explanation": "Offset=0.15+B/120=0.15+24/120=0.15+0.20=0.35 in. Key c with 0.35.",
              "miss": "Davisson offset = 0.15 in + B/120 (B in inches) common form.",
              "fepe": "Davisson offset = 0.15″ + B/120.",
              "pe": true,
              "given": "Davisson offset = 0.15 in + B/120 (B = pile width/diameter in inches) — plus PL/AE elastic line",
              "vignette": "Pile diameter B=24 in.",
              "work": [
                "B/120=0.20 in",
                "Offset=0.15+0.20=0.35 in"
              ]
            },
            {
              "id": "gpe10b-pe-1-05",
              "type": "mcq",
              "label": "Beta shaft sand",
              "stem": "Most nearly, ultimate shaft capacity Qs is:",
              "choices": [
                {
                  "id": "a",
                  "text": "94 kips (half)"
                },
                {
                  "id": "b",
                  "text": "376 kips (double)"
                },
                {
                  "id": "c",
                  "text": "50 kips (βσ′v without area)"
                },
                {
                  "id": "d",
                  "text": "188 kips",
                  "correct": true
                }
              ],
              "explanation": "fs=β σ′v=0.30×2,000=600 psf; As=π×1.5×66≈311; Qs=600*311/1000=186≈188. Key d.",
              "miss": "Qs = β σ′v As for uniform β σ′v.",
              "fepe": "Beta method: fs = β σ′v.",
              "pe": true,
              "given": "Qs = fs As with fs = β σ′v; As = π D L",
              "vignette": "β=0.30; average σ′v along shaft=2,000 psf; D=1.5 ft; L=66 ft in sand.",
              "work": [
                "fs=600 psf",
                "As≈311 ft²",
                "Qs≈186 kips ≈ 188 kips"
              ]
            }
          ]
        }
      ],
      "topic": 10
    }
  ]
});
