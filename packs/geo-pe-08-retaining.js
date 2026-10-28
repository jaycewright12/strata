/*
 * STRATA built-in pack: GEO PE · 8. Retaining Structures (ASD/LRFD) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES HB §§3.1/3.4/3.18, NHI-06-089 Ch.10, DM 7.02, Vandevelde Depth I/III).
 * Do not redistribute.
 * Maps to PE topic 8 (Retaining Structures) — conceptual + PE bench tracks.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-08-retaining",
  "title": "GEO PE · 8. Retaining Structures (ASD/LRFD)",
  "version": "1.0.0",
  "description": "Personal use only. Original questions based on Jayce's study library (NCEES HB §§3.1/3.4/3.18, NHI-06-089 Ch.10, DM 7.02, Vandevelde Depth I/III). Do not redistribute.",
  "units": [
    {
      "id": "gpe08-retain",
      "title": "8. Retaining Structures (ASD/LRFD)",
      "blurb": "Lateral earth pressure, rigid walls, flexible SOE, cofferdams, underpinning, anchors/nails — PE depth.",
      "lessons": [
        {
          "id": "gpe08-retain-1",
          "title": "Retaining structures · Concepts",
          "minutes": 40,
          "xp": 60,
          "summary": "8A–8F: Rankine/Coulomb, rigid vs flexible walls, braced cuts, cofferdams, underpinning, anchors/nails.",
          "items": [
            {
              "id": "gpe08-retain-1-01",
              "type": "mcq",
              "label": "8A · At-rest Ko",
              "stem": "For a normally consolidated sand, Jaky approximation Ko is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ko = 1 − sin φ′",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Ko = tan²(45−φ′/2)"
                },
                {
                  "id": "c",
                  "text": "Ko = tan²(45+φ′/2)"
                },
                {
                  "id": "d",
                  "text": "Ko = 1 + sin φ′"
                }
              ],
              "explanation": "Jaky: Ko ≈ 1−sinφ′ for NC soil. Ka = tan²(45−φ′/2); Kp = tan²(45+φ′/2).",
              "miss": "Ko ≈ 1−sinφ′ (NC); do not use Ka or Kp formulas for Ko.",
              "fepe": "Jaky Ko = 1 − sinφ′."
            },
            {
              "id": "gpe08-retain-1-02",
              "type": "mcq",
              "label": "8A · Active condition",
              "stem": "Rankine active earth pressure develops when the wall moves most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Into the backfill far enough to mobilize full passive resistance"
                },
                {
                  "id": "b",
                  "text": "Away from the backfill sufficiently to mobilize the active state (σh = Ka σv)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Zero displacement for all wall types by definition of active"
                },
                {
                  "id": "d",
                  "text": "Upward only, with no horizontal movement"
                }
              ],
              "explanation": "Active: wall moves away from backfill → Ka. Passive: into backfill → Kp. At-rest: little movement → Ko.",
              "miss": "Active = wall away from soil; passive = into soil.",
              "fepe": "Active: wall moves away → Ka."
            },
            {
              "id": "gpe08-retain-1-03",
              "type": "mcq",
              "label": "8A · Water pressure",
              "stem": "Hydrostatic water to full height H behind a vertical wall (no seepage) contributes a horizontal force most nearly equal to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ka γw H²/2"
                },
                {
                  "id": "b",
                  "text": "γsat H²/2"
                },
                {
                  "id": "c",
                  "text": "γw H²/2",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "γ′ H²/2"
                }
              ],
              "explanation": "Water thrust = γw H²/2 (triangular). Do not multiply water by Ka; soil effective stress uses γ′ with Ka separately.",
              "miss": "Water force = γw H²/2 — Ka applies to effective soil stress, not to u.",
              "fepe": "Pw = γw H²/2 (separate from Ka σ′)."
            },
            {
              "id": "gpe08-retain-1-04",
              "type": "mcq",
              "label": "8B · Gravity wall sliding",
              "stem": "ASD sliding check for a gravity wall typically compares:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only overturning moment to bearing capacity"
                },
                {
                  "id": "b",
                  "text": "Only tensile stress in stem steel"
                },
                {
                  "id": "c",
                  "text": "Only global slope FS with no base friction"
                },
                {
                  "id": "d",
                  "text": "Resisting base shear (friction ± passive) to driving horizontal forces, often requiring FS ≥ about 1.5",
                  "correct": true
                }
              ],
              "explanation": "Sliding FS = resisting/driving horizontal. OT and bearing are separate checks.",
              "miss": "Sliding: ΣH_resist / ΣH_drive (≥~1.5 ASD typical).",
              "fepe": "Wall sliding FS = resist/drive."
            },
            {
              "id": "gpe08-retain-1-05",
              "type": "mcq",
              "label": "8B · MSE external",
              "stem": "External stability of an MSE wall treats the reinforced mass most nearly as:",
              "choices": [
                {
                  "id": "a",
                  "text": "A coherent gravity block checked for sliding, overturning, bearing, and global stability",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Only individual reinforcement strands with no mass equilibrium"
                },
                {
                  "id": "c",
                  "text": "A flexible sheet-pile that must develop passive below dredge line only"
                },
                {
                  "id": "d",
                  "text": "A drilled shaft group with lateral p-y only"
                }
              ],
              "explanation": "External MSE = gravity mass equilibrium (slide/OT/bearing/global). Internal = reinforcement rupture/pullout.",
              "miss": "MSE external = gravity block checks; internal = straps/grids.",
              "fepe": "MSE external: slide/OT/bearing/global."
            },
            {
              "id": "gpe08-retain-1-06",
              "type": "mcq",
              "label": "8C · Soldier pile / lagging",
              "stem": "A soldier-pile and lagging wall is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "A rigid gravity concrete wall with no soldier elements"
                },
                {
                  "id": "b",
                  "text": "Discrete vertical piles with lagging spanning between them; often tied back or braced",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "A cofferdam of circular cells filled with concrete only"
                },
                {
                  "id": "d",
                  "text": "An MSE wall with steel strips and select fill exclusively"
                }
              ],
              "explanation": "Soldier pile + lagging = common flexible SOE; may be cantilevered, braced, or anchored.",
              "miss": "Soldier/lagging = discrete piles + wood/concrete lagging ± anchors.",
              "fepe": "SOE: soldier piles + lagging (± tiebacks)."
            },
            {
              "id": "gpe08-retain-1-07",
              "type": "mcq",
              "label": "8C · Apparent pressure",
              "stem": "Terzaghi-Peck apparent earth-pressure diagrams for braced cuts are used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Compute Rankine Ka for cantilever walls only"
                },
                {
                  "id": "b",
                  "text": "Size retaining-wall stem flexural steel for gravity walls"
                },
                {
                  "id": "c",
                  "text": "Envelope strut/brace loads in braced excavations (not a true earth-pressure distribution at one instant)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Replace all need for water-pressure calculations"
                }
              ],
              "explanation": "Apparent-pressure boxes design struts conservatively; they are not the actual σh profile at a single stage.",
              "miss": "Apparent pressure → strut load envelope for braced cuts.",
              "fepe": "Braced cuts: Terzaghi–Peck apparent pressures for struts."
            },
            {
              "id": "gpe08-retain-1-08",
              "type": "mcq",
              "label": "8D · Cofferdam",
              "stem": "A sheet-pile cofferdam in a river is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Permanently replace the bridge foundations after construction"
                },
                {
                  "id": "b",
                  "text": "Act as the final architectural facade of the structure"
                },
                {
                  "id": "c",
                  "text": "Eliminate all seepage by physics without pumps or seals ever"
                },
                {
                  "id": "d",
                  "text": "Provide a temporary dry work area by excluding water (with dewatering/seepage control as needed)",
                  "correct": true
                }
              ],
              "explanation": "Cofferdams create temporary dry work spaces; seepage control/pumps are usually still needed.",
              "miss": "Cofferdam = temporary water exclusion for construction.",
              "fepe": "Cofferdam: temporary dry work zone."
            },
            {
              "id": "gpe08-retain-1-09",
              "type": "mcq",
              "label": "8E · Underpinning",
              "stem": "Underpinning an existing footing is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Transferring foundation support to a deeper/new element so adjacent excavation or load change does not undermine the footing",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Painting the footing surface for corrosion control only"
                },
                {
                  "id": "c",
                  "text": "Removing all foundation load permanently so the structure floats"
                },
                {
                  "id": "d",
                  "text": "Regrading only the landscaping next to the building"
                }
              ],
              "explanation": "Underpinning extends or replaces support below influence of excavation/settlement. Not cosmetic.",
              "miss": "Underpin = new deeper support under existing foundation.",
              "fepe": "Underpinning: deepen/transfer existing foundation support."
            },
            {
              "id": "gpe08-retain-1-10",
              "type": "mcq",
              "label": "8F · Ground anchors",
              "stem": "A tieback (ground anchor) for a retaining wall develops resistance most nearly from:",
              "choices": [
                {
                  "id": "a",
                  "text": "The unbonded length steel weight hanging in the air only"
                },
                {
                  "id": "b",
                  "text": "Bond stress along the bonded length in competent ground beyond the active/failure zone, plus structural capacity of the tendon",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Hydrostatic uplift under the wall footing only"
                },
                {
                  "id": "d",
                  "text": "Passive resistance of a deadman placed inside the active wedge exclusively"
                }
              ],
              "explanation": "Anchors: bonded length beyond the potential failure surface provides geotech capacity; tendon steel provides structural capacity. Deadmen are a different system.",
              "miss": "Tieback capacity → bond zone past the failure surface + tendon capacity.",
              "fepe": "Anchor: bond length beyond active zone."
            },
            {
              "id": "gpe08-retain-1-11",
              "type": "mcq",
              "label": "8F · Soil nails vs anchors",
              "stem": "Compared with post-tensioned tieback anchors, soil nails most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Are always prestressed to 100% of ultimate before excavation"
                },
                {
                  "id": "b",
                  "text": "Replace all need for shotcrete facing in every application"
                },
                {
                  "id": "c",
                  "text": "Are typically passive (or lightly post-tensioned) closely spaced inclusions that reinforce the soil mass as excavation proceeds, usually with a shotcrete face",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Function only in intact rock with no soil applications"
                }
              ],
              "explanation": "Soil nails reinforce the retained mass progressively; anchors are often high-capacity prestressed tendons to external bond zones.",
              "miss": "Nails = distributed passive reinforcement + facing; anchors = prestressed tendons.",
              "fepe": "Nails reinforce mass; anchors tie to bond zone."
            },
            {
              "id": "gpe08-retain-1-12",
              "type": "mcq",
              "label": "8A · Passive Ka Kp relation",
              "stem": "For Rankine cohesionless soil, horizontal backfill, vertical wall, Kp is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Equal to Ka for all φ′"
                },
                {
                  "id": "b",
                  "text": "Equal to Ko²"
                },
                {
                  "id": "c",
                  "text": "Equal to 1 − sinφ′"
                },
                {
                  "id": "d",
                  "text": "Equal to 1/Ka = tan²(45+φ′/2)",
                  "correct": true
                }
              ],
              "explanation": "Kp = tan²(45+φ′/2) = 1/Ka for the simple Rankine case.",
              "miss": "Kp = 1/Ka = tan²(45+φ′/2).",
              "fepe": "Rankine: Kp = 1/Ka."
            },
            {
              "id": "gpe08-retain-1-13",
              "type": "mcq",
              "label": "8C · Cantilever sheet pile",
              "stem": "A cantilever sheet-pile wall (no anchors/braces) develops stability most nearly from:",
              "choices": [
                {
                  "id": "a",
                  "text": "Embedment below dredge line mobilizing passive resistance in front of the wall",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Only the steel weight of the sheets above grade"
                },
                {
                  "id": "c",
                  "text": "Active pressure on both sides canceling exactly at all depths"
                },
                {
                  "id": "d",
                  "text": "MSE select fill straps behind the sheets"
                }
              ],
              "explanation": "Cantilever SPW needs adequate embedment for passive resistance and moment capacity.",
              "miss": "Cantilever sheet pile → embedment / passive below dredge line.",
              "fepe": "Cantilever SPW: embedment for passive + moment."
            },
            {
              "id": "gpe08-retain-1-14",
              "type": "mcq",
              "label": "8B · Soil nail wall facing",
              "stem": "Shotcrete facing on a soil-nail wall primarily:",
              "choices": [
                {
                  "id": "a",
                  "text": "Provides the entire global FS without nails"
                },
                {
                  "id": "b",
                  "text": "Supports the soil locally between nails, provides connection/load transfer, and protects the face from ravelling/erosion",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Replaces drainage requirements in all climates"
                },
                {
                  "id": "d",
                  "text": "Serves only as architectural finish with no structural role"
                }
              ],
              "explanation": "Facing transfers load to nails and retains soil between nails; nails provide mass reinforcement for global stability.",
              "miss": "Facing = local support + connection; nails = mass reinforcement.",
              "fepe": "Nail wall: facing + nails work together."
            },
            {
              "id": "gpe08-retain-1-15",
              "type": "mcq",
              "label": "8D · Cellular cofferdam",
              "stem": "A cellular sheet-pile cofferdam resists lateral loads most nearly by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Acting as an unfilled open web with no shear strength"
                },
                {
                  "id": "b",
                  "text": "Depending only on tensile capacity of wet concrete poured in the river without sheets"
                },
                {
                  "id": "c",
                  "text": "Acting as a gravity/cellular structure — fill inside cells provides weight and shear resistance with sheet-pile skin",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Using Rankine active pressure on both faces that always sum to zero"
                }
              ],
              "explanation": "Cellular cofferdams behave as gravity structures with fill weight/shear inside cells.",
              "miss": "Cellular cofferdam = gravity mass of fill within cells.",
              "fepe": "Cellular cofferdam: gravity resistance from cell fill."
            }
          ]
        }
      ],
      "topic": 8
    },
    {
      "id": "gpe08-bench",
      "title": "PE bench · Retaining",
      "bench": true,
      "lessons": [
        {
          "id": "gpe08-pe-1",
          "title": "Retaining PE bench",
          "minutes": 25,
          "xp": 40,
          "summary": "Ka/Kp, active thrust, sliding FS, anchor load, water pressure on wall.",
          "items": [
            {
              "id": "gpe08-pe-1-01",
              "type": "mcq",
              "pe": true,
              "label": "Rankine Ka",
              "given": "Ka = tan²(45−φ′/2)",
              "vignette": "φ′ = 30°, horizontal backfill, vertical smooth wall.",
              "stem": "Most nearly, Ka is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.33",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "0.50"
                },
                {
                  "id": "c",
                  "text": "3.00"
                },
                {
                  "id": "d",
                  "text": "1.00"
                }
              ],
              "work": [
                "45−15=30°",
                "Ka=tan²30°=(1/√3)²=1/3≈0.33",
                "0.50=Ko Jaky for φ=30; 3.00=Kp; 1.00=fluid"
              ],
              "explanation": "Ka=1/3. Ko=0.5 and Kp=3 are the usual mix-ups at φ′=30°.",
              "miss": "Ka=tan²(45−φ′/2); at 30° Ka=1/3, Kp=3, Ko≈0.5.",
              "fepe": "φ′=30°: Ka=1/3, Kp=3."
            },
            {
              "id": "gpe08-pe-1-02",
              "type": "mcq",
              "pe": true,
              "label": "Active thrust",
              "given": "Pa = ½ Ka γ H²",
              "vignette": "Ka = 0.33, γ = 120 pcf, H = 20 ft (dry, no water).",
              "stem": "Most nearly, active thrust Pa is:",
              "choices": [
                {
                  "id": "a",
                  "text": "15,840 lb/ft"
                },
                {
                  "id": "b",
                  "text": "7,920 lb/ft",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "24,000 lb/ft"
                },
                {
                  "id": "d",
                  "text": "3,960 lb/ft"
                }
              ],
              "work": [
                "Pa = 0.5×0.33×120×400 = 7,920 lb/ft",
                "15,840 forgets 1/2",
                "24,000 omits Ka",
                "3,960 halves twice"
              ],
              "explanation": "Pa=½KaγH²=7,920 lb/ft. Forgetting ½ doubles the force.",
              "miss": "Include ½ in Pa=½KaγH².",
              "fepe": "Pa = ½ Ka γ H²."
            },
            {
              "id": "gpe08-pe-1-03",
              "type": "mcq",
              "pe": true,
              "label": "Sliding FS",
              "given": "FS_slide = (W μ)/Ph",
              "vignette": "W = 60 kip/ft, μ = 0.45, Ph = 18 kip/ft, no passive.",
              "stem": "Most nearly, FS against sliding is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.67"
                },
                {
                  "id": "b",
                  "text": "3.33"
                },
                {
                  "id": "c",
                  "text": "1.50",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "1.00"
                }
              ],
              "work": [
                "Resist=27; FS=27/18=1.50",
                "0.67 inverts; 3.33=W/Ph; 1.00 threshold"
              ],
              "explanation": "FS=1.50.",
              "miss": "FS=resist/drive.",
              "fepe": "Sliding FS=(W tanδ)/Ph."
            },
            {
              "id": "gpe08-pe-1-04",
              "type": "mcq",
              "pe": true,
              "label": "Water + soil thrust",
              "given": "Pa=½Kaγ′H²; Pw=½γwH²; γw=62.4",
              "vignette": "H=10 ft, WT at top, γsat=120 pcf, Ka=0.30.",
              "stem": "Most nearly, total horizontal force (effective soil + water) is:",
              "choices": [
                {
                  "id": "a",
                  "text": "864 lb/ft"
                },
                {
                  "id": "b",
                  "text": "3,120 lb/ft"
                },
                {
                  "id": "c",
                  "text": "1,800 lb/ft"
                },
                {
                  "id": "d",
                  "text": "4,000 lb/ft",
                  "correct": true
                }
              ],
              "work": [
                "γ′=57.6; Pa=0.5×0.30×57.6×100=864",
                "Pw=0.5×62.4×100=3,120",
                "Total≈3,984≈4,000 lb/ft",
                "864 is Pa alone; 3,120 is Pw alone; 1,800 uses Ka on γsat without separating water"
              ],
              "explanation": "Separate Ka on γ′ plus full water triangle → ≈4,000 lb/ft. Applying Ka to γsat or omitting water are traps.",
              "miss": "Effective soil (Kaγ′) + full hydrostatic — do not Ka the water.",
              "fepe": "P = ½Kaγ′H² + ½γwH²."
            },
            {
              "id": "gpe08-pe-1-05",
              "type": "mcq",
              "pe": true,
              "label": "Kp and passive",
              "given": "Kp=1/Ka; Pp=½KpγH²",
              "vignette": "Ka=0.25, γ=110 pcf, H=8 ft for the passive triangle.",
              "stem": "Most nearly, passive thrust Pp is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1,760 lb/ft"
                },
                {
                  "id": "b",
                  "text": "7,040 lb/ft"
                },
                {
                  "id": "c",
                  "text": "3,520 lb/ft"
                },
                {
                  "id": "d",
                  "text": "14,080 lb/ft",
                  "correct": true
                }
              ],
              "work": [
                "Kp=4",
                "Pp=0.5×4×110×64=14,080 lb/ft",
                "7,040 forgets Kp or ½ mishandled",
                "3,520 = ½×Ka×γ×H² active-side slip",
                "1,760 further half"
              ],
              "explanation": "Kp=4; Pp=½KpγH²=14,080. Using Ka instead of Kp understates hugely.",
              "miss": "Use Kp=1/Ka in Pp=½KpγH².",
              "fepe": "Pp = ½ Kp γ H²."
            }
          ]
        }
      ],
      "topic": 8
    }
  ]
});
