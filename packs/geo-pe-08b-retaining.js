/*
 * STRATA built-in pack: GEO PE · 8b. Retaining Structures (Expansion) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 8 — conceptual + PE bench tracks (expansion).
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-08b-retaining",
  "title": "GEO PE · 8b. Retaining Structures (Expansion)",
  "version": "1.0.0",
  "description": "Personal use only. Original expansion questions based on Jayce's study library (NCEES HB Ch.3.1/3.4/3.18, NHI-06-089 Ch.10, DM 7.02, Vandevelde Depth I/III). Do not redistribute. Complements geo-pe-08-retaining.",
  "units": [
    {
      "id": "gpe08b-retain",
      "title": "8b. Retaining · Expansion",
      "blurb": "Coulomb vs Rankine, Ko walls, surcharge, overturning, eccentric bearing, apparent pressure, anchored SPW, cofferdam seepage, underpinning, anchor bond, soil nails, passive caution, MSE L, lagging, cellular cofferdams.",
      "lessons": [
        {
          "id": "gpe08b-retain-1",
          "title": "Retaining · Concepts (expansion)",
          "minutes": 40,
          "xp": 60,
          "summary": "Fifteen expansion items across 8A–8F.",
          "items": [
            {
              "id": "gpe08b-retain-1-01",
              "type": "mcq",
              "label": "8A · Coulomb vs Rankine",
              "stem": "Coulomb earth-pressure theory most nearly differs from Rankine by explicitly including:",
              "choices": [
                {
                  "id": "a",
                  "text": "Wall friction (δ) and a possibly battered face / sloping backfill wedge formulation",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Only φ′ = 0 clay total-stress analysis"
                },
                {
                  "id": "c",
                  "text": "Hydrostatic water with no soil"
                },
                {
                  "id": "d",
                  "text": "SPT N60 as the sole input"
                }
              ],
              "explanation": "Coulomb includes wall friction and general wedge geometry; Rankine assumes no wall friction and principal stresses vertical/horizontal for simple cases.",
              "miss": "Coulomb adds δ (wall friction).",
              "fepe": "Coulomb: wall friction δ; Rankine often δ=0."
            },
            {
              "id": "gpe08b-retain-1-02",
              "type": "mcq",
              "label": "8A · At-rest for walls",
              "stem": "At-rest earth pressure Ko is most nearly appropriate when the wall:",
              "choices": [
                {
                  "id": "a",
                  "text": "Moves enough to mobilize full active Rankine wedge"
                },
                {
                  "id": "b",
                  "text": "Is rigid and unyielding (negligible lateral strain) — e.g., stiff basement walls on rock",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Moves into the soil enough to mobilize full passive"
                },
                {
                  "id": "d",
                  "text": "Is a flexible sheet pile with large deflection always"
                }
              ],
              "explanation": "Ko for unyielding walls; Ka when sufficient active movement occurs.",
              "miss": "No movement → Ko, not Ka.",
              "fepe": "Unmoving rigid wall → Ko."
            },
            {
              "id": "gpe08b-retain-1-03",
              "type": "mcq",
              "label": "8A · Surcharge lateral",
              "stem": "A uniform vertical surcharge q behind a vertical wall (horizontal backfill) contributes a horizontal pressure most nearly of:",
              "choices": [
                {
                  "id": "a",
                  "text": "q only with no earth-pressure coefficient"
                },
                {
                  "id": "b",
                  "text": "Kp q always"
                },
                {
                  "id": "c",
                  "text": "Ka q (or Ko q for at-rest), constant with depth for the surcharge component",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Zero because surcharges never load walls"
                }
              ],
              "explanation": "Surcharge lateral = K·q (active/at-rest as applicable), approximately uniform with depth.",
              "miss": "Surcharge → K q lateral.",
              "fepe": "Uniform surcharge: σh,q = K q."
            },
            {
              "id": "gpe08b-retain-1-04",
              "type": "mcq",
              "label": "8B · Overturning FS",
              "stem": "ASD overturning check for a gravity wall most nearly compares:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only sliding friction with no moments"
                },
                {
                  "id": "b",
                  "text": "Only bearing pressure with no moments"
                },
                {
                  "id": "c",
                  "text": "Only tensile capacity of the stem"
                },
                {
                  "id": "d",
                  "text": "Resisting moments (weight, etc.) about the toe to overturning moments from lateral earth/water forces — FS = MR/MO",
                  "correct": true
                }
              ],
              "explanation": "Overturning FS = resisting moment / overturning moment about the toe (ASD).",
              "miss": "OT: MR/MO about toe.",
              "fepe": "Overturning FS = MR / MO."
            },
            {
              "id": "gpe08b-retain-1-05",
              "type": "mcq",
              "label": "8B · Bearing under heel/toe",
              "stem": "Eccentric resultant under a gravity wall base most nearly requires:",
              "choices": [
                {
                  "id": "a",
                  "text": "Checking toe/heel bearing pressures with the eccentric load (effective width / trapezoidal stress distribution)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Ignoring eccentricity because walls never overturn"
                },
                {
                  "id": "c",
                  "text": "Using only Ka for bearing"
                },
                {
                  "id": "d",
                  "text": "Using pile group efficiency formulas only"
                }
              ],
              "explanation": "Eccentricity from lateral loads → nonuniform base pressure; check qmax/qmin.",
              "miss": "Eccentric resultant → toe bearing check.",
              "fepe": "Wall base: eccentric bearing pressures."
            },
            {
              "id": "gpe08b-retain-1-06",
              "type": "mcq",
              "label": "8C · Apparent pressure braced cut",
              "stem": "Terzaghi–Peck apparent pressure diagrams for braced excavations are used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Design only cantilever walls with zero struts"
                },
                {
                  "id": "b",
                  "text": "Estimate strut loads for multi-level braced cuts (empirical envelopes), not exact Rankine triangular distributions",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Replace all water pressures"
                },
                {
                  "id": "d",
                  "text": "Compute SPT N"
                }
              ],
              "explanation": "Apparent pressure envelopes size struts; they are not literal Rankine triangles.",
              "miss": "Braced cuts → apparent pressure for struts.",
              "fepe": "T–P apparent pressure → strut design."
            },
            {
              "id": "gpe08b-retain-1-07",
              "type": "mcq",
              "label": "8C · Anchored sheet pile",
              "stem": "A single-anchor sheet-pile wall develops stability most nearly from:",
              "choices": [
                {
                  "id": "a",
                  "text": "Gravity weight of the thin sheet alone like a gravity wall"
                },
                {
                  "id": "b",
                  "text": "Only active pressure with no passive or anchor"
                },
                {
                  "id": "c",
                  "text": "Embedment passive resistance below dredge line plus anchor force above, with the sheet spanning between",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "MSE reinforcement straps only"
                }
              ],
              "explanation": "Anchored sheet pile: passive embedment + anchor; sheet as vertical beam.",
              "miss": "Anchor + embedment passive.",
              "fepe": "Anchored SPW: anchor force + passive embedment."
            },
            {
              "id": "gpe08b-retain-1-08",
              "type": "mcq",
              "label": "8D · Cofferdam dewatering",
              "stem": "Inside a sheet-pile cofferdam, unwatering the interior most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Eliminates all seepage concerns forever"
                },
                {
                  "id": "b",
                  "text": "Reduces outside water levels automatically"
                },
                {
                  "id": "c",
                  "text": "Converts Type C soil to Type A"
                },
                {
                  "id": "d",
                  "text": "Creates a head difference that increases seepage entry and uplift/heave risk at the base — design for seepage and stability",
                  "correct": true
                }
              ],
              "explanation": "Dewatered cofferdams drive seepage toward the inside; check heave and piping.",
              "miss": "Inside unwatering → seepage/heave design.",
              "fepe": "Cofferdam dewatering: seepage + heave checks."
            },
            {
              "id": "gpe08b-retain-1-09",
              "type": "mcq",
              "label": "8E · Underpinning method",
              "stem": "Pit underpinning of an existing footing most nearly involves:",
              "choices": [
                {
                  "id": "a",
                  "text": "Excavating sequential pits beneath the footing and constructing supports (piers/concrete) before proceeding to adjacent pits",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Jacking the entire building on hydraulic cushions only without excavation"
                },
                {
                  "id": "c",
                  "text": "Removing the footing entirely overnight"
                },
                {
                  "id": "d",
                  "text": "Compacting only the surface landscaping"
                }
              ],
              "explanation": "Classic pit underpinning: sequential pits and new supports under existing foundations.",
              "miss": "Sequential pits under footing.",
              "fepe": "Pit underpinning: sequential support construction."
            },
            {
              "id": "gpe08b-retain-1-10",
              "type": "mcq",
              "label": "8F · Anchor bond length",
              "stem": "The bonded length of a ground anchor (tieback) is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "The unbonded free length only"
                },
                {
                  "id": "b",
                  "text": "The grouted length beyond the critical failure surface that develops skin resistance in competent ground",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "The entire wall height above grade"
                },
                {
                  "id": "d",
                  "text": "Equal to Ka H always"
                }
              ],
              "explanation": "Bond length = grouted zone transferring load past the active wedge into stable ground.",
              "miss": "Bond ≠ free length.",
              "fepe": "Tieback bond length = grouted load-transfer zone."
            },
            {
              "id": "gpe08b-retain-1-11",
              "type": "mcq",
              "label": "8F · Soil nail construction",
              "stem": "Soil nails are typically installed most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Bottom-up after full-height cut with no facing"
                },
                {
                  "id": "b",
                  "text": "Only as prestressed strands identical to permanent tiebacks"
                },
                {
                  "id": "c",
                  "text": "Top-down as excavation proceeds, creating a reinforced soil mass with facing — nails are usually not post-tensioned like tiebacks",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Without drilling"
                }
              ],
              "explanation": "Nails: top-down, typically passive (not prestressed like tiebacks), with shotcrete facing.",
              "miss": "Nails ≠ prestressed tiebacks.",
              "fepe": "Soil nails: top-down, usually not post-tensioned."
            },
            {
              "id": "gpe08b-retain-1-12",
              "type": "mcq",
              "label": "8A · Passive earth pressure caution",
              "stem": "Full Rankine/Coulomb passive resistance Pp should be used in design most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always at 100% with zero movement walls"
                },
                {
                  "id": "b",
                  "text": "Only when Ka > 1"
                },
                {
                  "id": "c",
                  "text": "Never for any wall type"
                },
                {
                  "id": "d",
                  "text": "With caution — large wall movement into the soil is required to mobilize Pp; often a reduced passive or FS on passive is applied",
                  "correct": true
                }
              ],
              "explanation": "Mobilizing full passive needs significant movement; codes/practice often reduce Pp or apply FS.",
              "miss": "Full Pp needs large movement.",
              "fepe": "Passive: large movement; often reduce Pp."
            },
            {
              "id": "gpe08b-retain-1-13",
              "type": "mcq",
              "label": "8B · MSE reinforcement length",
              "stem": "External stability of an MSE wall typically treats the reinforced zone length L most nearly as:",
              "choices": [
                {
                  "id": "a",
                  "text": "Part of a coherent gravity mass whose width is related to L (often L ≥ ~0.7H class rules of thumb, project-specified)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Irrelevant because MSE has no external checks"
                },
                {
                  "id": "c",
                  "text": "Equal to Ka only"
                },
                {
                  "id": "d",
                  "text": "Equal to the facing panel thickness only"
                }
              ],
              "explanation": "External MSE: reinforced block width ≈ reinforcement length L.",
              "miss": "L sets the gravity-block width.",
              "fepe": "MSE external: reinforced mass width ~ L."
            },
            {
              "id": "gpe08b-retain-1-14",
              "type": "mcq",
              "label": "8C · Soldier pile lagging",
              "stem": "Wood lagging between soldier piles most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Provides the sole vertical axial capacity of the wall"
                },
                {
                  "id": "b",
                  "text": "Spans horizontally between piles to retain soil face loads as excavation deepens — temporary facing",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Replaces the need for any piles"
                },
                {
                  "id": "d",
                  "text": "Acts as permanent MSE reinforcement"
                }
              ],
              "explanation": "Lagging is temporary facing spanning pile-to-pile.",
              "miss": "Lagging spans between soldier piles.",
              "fepe": "Lagging: horizontal spanning temporary facing."
            },
            {
              "id": "gpe08b-retain-1-15",
              "type": "mcq",
              "label": "8D · Cellular cofferdam",
              "stem": "A cellular sheet-pile cofferdam resists lateral loads most nearly by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only tensile capacity of empty cells"
                },
                {
                  "id": "b",
                  "text": "Rankine active pressure inside with no fill"
                },
                {
                  "id": "c",
                  "text": "Shear and gravity stability of the soil-filled cells (wide gravity/cellular behavior), not thin cantilever sheet action alone",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Being identical to a soldier-pile wall"
                }
              ],
              "explanation": "Filled cells act as gravity/shear structures.",
              "miss": "Cellular = filled gravity cells.",
              "fepe": "Cellular cofferdam: soil-filled cell stability."
            }
          ]
        }
      ],
      "topic": 8
    },
    {
      "id": "gpe08b-bench",
      "title": "PE bench · Retaining (expansion)",
      "bench": true,
      "blurb": "Ka, Pa, sliding FS, Pa′+Pw, Pp.",
      "lessons": [
        {
          "id": "gpe08b-pe-1",
          "title": "Retaining · PE numbers (expansion)",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth retaining calculations.",
          "items": [
            {
              "id": "gpe08b-pe-1-01",
              "type": "mcq",
              "label": "Rankine Ka",
              "stem": "Most nearly, Ka is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.50 (1−sinφ) Ko form)"
                },
                {
                  "id": "b",
                  "text": "3.0 (Kp)"
                },
                {
                  "id": "c",
                  "text": "0.667 (1+sinφ)/(1−sinφ) inverted slip)"
                },
                {
                  "id": "d",
                  "text": "0.333",
                  "correct": true
                }
              ],
              "explanation": "Ka=(1−sinφ)/(1+sinφ)=(1−0.5)/(1+0.5)=0.5/1.5=0.333 for φ=30°. Key d.",
              "miss": "Ka = (1−sinφ′)/(1+sinφ′) = tan²(45−φ′/2).",
              "fepe": "Rankine Ka for horizontal backfill.",
              "pe": true,
              "given": "Rankine Ka = (1−sinφ′)/(1+sinφ′) for vertical wall, horizontal backfill, c′=0",
              "vignette": "φ′=30°.",
              "work": [
                "Ka=(1−0.5)/(1+0.5)=1/3≈0.333"
              ]
            },
            {
              "id": "gpe08b-pe-1-02",
              "type": "mcq",
              "label": "Active thrust",
              "stem": "Most nearly, Pa is:",
              "choices": [
                {
                  "id": "a",
                  "text": "2,400 lb/ft",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "4,800 lb/ft (used γH²/2 without Ka)"
                },
                {
                  "id": "c",
                  "text": "1,200 lb/ft (half)"
                },
                {
                  "id": "d",
                  "text": "7,200 lb/ft (used Kp)"
                }
              ],
              "explanation": "Pa=0.5 Ka γ H²=0.5×0.333×120×100=0.5×0.333×12,000≈2,000 — retune. 0.5*1/3*120*10^2=0.5*(1/3)*12000=2000. Use H=12: 0.5*(1/3)*120*144=2880. Want 2400: Ka=1/3, γ=120, H=√(2400*2/(Kaγ))=√(4800/40)=√120≈11. Use H=11, Ka=1/3, γ=120 → 0.5*(1/3)*120*121=2420≈2400.",
              "miss": "Pa = ½ Ka γ H².",
              "fepe": "Active thrust Pa = ½ Ka γ H².",
              "pe": true,
              "given": "Pa = ½ Ka γ H² (no water, no surcharge)",
              "vignette": "Ka=1/3; γ=120 pcf; H=11 ft; horizontal backfill.",
              "work": [
                "Pa=0.5×(1/3)×120×121≈2,420 ≈ 2,400 lb/ft"
              ]
            },
            {
              "id": "gpe08b-pe-1-03",
              "type": "mcq",
              "label": "Sliding FS",
              "stem": "Most nearly, FS against sliding is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.00"
                },
                {
                  "id": "b",
                  "text": "1.50",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "2.00 (ignored active)"
                },
                {
                  "id": "d",
                  "text": "0.75 (inverted)"
                }
              ],
              "explanation": "FS=R/P=9,000/6,000=1.50. Key b.",
              "miss": "FS_slide = resisting / driving horizontal.",
              "fepe": "Sliding FS = ΣFh,resist / ΣFh,drive.",
              "pe": true,
              "given": "FS_slide = resisting horizontal force / driving horizontal force",
              "vignette": "Resisting base shear available = 9,000 lb/ft; total driving horizontal (active+water) = 6,000 lb/ft.",
              "work": [
                "FS=9,000/6,000=1.50"
              ]
            },
            {
              "id": "gpe08b-pe-1-04",
              "type": "mcq",
              "label": "Water + soil thrust",
              "stem": "Most nearly, the total horizontal force (effective soil active + water) is:",
              "choices": [
                {
                  "id": "a",
                  "text": "3,900 lb/ft (soil only)"
                },
                {
                  "id": "b",
                  "text": "1,950 lb/ft (water only)"
                },
                {
                  "id": "c",
                  "text": "5,850 lb/ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "7,800 lb/ft (used γsat for soil without submerged logic slip)"
                }
              ],
              "explanation": "Pa=0.5×0.3×57.6×100=864 — redo. Effective γ'=57.6, Ka=0.333, H=10: Pa=0.5*(1/3)*57.6*100=960. Pw=0.5*62.4*100=3,120. Total=4,080. Want ~5850: H=12, Ka=1/3, γ'=60: Pa=0.5*(1/3)*60*144=1,440; Pw=0.5*62.4*144=4,493; total=5,933≈5,850 with γ'=55.",
              "miss": "Add ½ Ka γ′ H² + ½ γw H² for WT at top.",
              "fepe": "Total H force = Pa′ + Pw.",
              "pe": true,
              "given": "With WT at top of wall, Pa′ = ½ Ka γ′ H²; Pw = ½ γw H²; γw=62.4 pcf",
              "vignette": "Ka=1/3; γ′=55 pcf; H=12 ft; hydrostatic full height.",
              "work": [
                "Pa′=0.5×(1/3)×55×144=1,320",
                "Pw=0.5×62.4×144=4,493",
                "Total≈5,813 ≈ 5,850 lb/ft"
              ]
            },
            {
              "id": "gpe08b-pe-1-05",
              "type": "mcq",
              "label": "Kp and passive",
              "stem": "Most nearly, passive thrust Pp is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1,200 lb/ft (used Ka)"
                },
                {
                  "id": "b",
                  "text": "3,600 lb/ft (½ γ H² without K)"
                },
                {
                  "id": "c",
                  "text": "21,600 lb/ft (double)"
                },
                {
                  "id": "d",
                  "text": "10,800 lb/ft",
                  "correct": true
                }
              ],
              "explanation": "Kp=(1+sin30)/(1−sin30)=3; Pp=0.5*3*120*100=18,000. Want 10800: H=√(10800*2/(3*120))=√(21600/360)=√60≈7.75. Use H=8, Kp=3, γ=120: Pp=0.5*3*120*64=11,520≈ close. Use 0.5*3*100*72=10,800 with γ=100 H=√72? H=8.49. Simple: Kp=3, γ=120, H=√(10800*2/(360))=√60=7.75≈8 → report 10,800 with H=7.75 or give H=7.75.",
              "miss": "Pp = ½ Kp γ H².",
              "fepe": "Passive thrust Pp = ½ Kp γ H².",
              "pe": true,
              "given": "Rankine Kp = (1+sinφ′)/(1−sinφ′); Pp = ½ Kp γ H²",
              "vignette": "φ′=30° so Kp=3; γ=120 pcf; H=7.75 ft; no water.",
              "work": [
                "Pp=0.5×3×120×(7.75)²=180×60.06≈10,811 ≈ 10,800 lb/ft"
              ]
            }
          ]
        }
      ],
      "topic": 8
    }
  ]
});
