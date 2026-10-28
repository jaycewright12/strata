/*
 * STRATA built-in pack: GEO PE · 6b. Groundwater & Seepage (Expansion) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 6 — conceptual + PE bench tracks (expansion).
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-06b-groundwater",
  "title": "GEO PE · 6b. Groundwater & Seepage (Expansion)",
  "version": "1.0.0",
  "description": "Personal use only. Original expansion questions based on Jayce's study library (UFC 3-220-05, UFC 3-220-10 Ch.6, NCEES HB Ch.3.16). Do not redistribute. Complements geo-pe-06-groundwater.",
  "units": [
    {
      "id": "gpe06b-gw",
      "title": "6b. Groundwater · Expansion",
      "blurb": "Dupuit, T=kb, pumping tests, R of influence, uplift, chimney drain, grout curtain, upstream blanket, quick condition, flow-net Nf, toe drain, aquitard leakage, slurry wall, Sy, filter retention.",
      "lessons": [
        {
          "id": "gpe06b-gw-1",
          "title": "Groundwater · Concepts (expansion)",
          "minutes": 40,
          "xp": 60,
          "summary": "Fifteen expansion items across 6A–6B.",
          "items": [
            {
              "id": "gpe06b-gw-1-01",
              "type": "mcq",
              "label": "6A · Dupuit assumption",
              "stem": "Dupuit-Forchheimer unconfined-flow approximations most nearly assume:",
              "choices": [
                {
                  "id": "a",
                  "text": "Horizontal flow with vertical equipotentials (neglecting vertical velocity components) for gently varying free surfaces",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Fully 3-D turbulent pipe flow only"
                },
                {
                  "id": "c",
                  "text": "Zero hydraulic conductivity"
                },
                {
                  "id": "d",
                  "text": "That Darcy’s law never applies"
                }
              ],
              "explanation": "Dupuit ≈ nearly horizontal flow for mild free-surface slopes.",
              "miss": "Dupuit ≈ horizontal flow.",
              "fepe": "Dupuit: horizontal-flow approximation."
            },
            {
              "id": "gpe06b-gw-1-02",
              "type": "mcq",
              "label": "6A · Confined aquifer T",
              "stem": "Transmissivity T of a confined aquifer is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "T = k / b"
                },
                {
                  "id": "b",
                  "text": "T = k b (hydraulic conductivity × aquifer thickness)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "T = i / k"
                },
                {
                  "id": "d",
                  "text": "T = n × e"
                }
              ],
              "explanation": "T = k b for confined aquifer thickness b.",
              "miss": "T = k × thickness.",
              "fepe": "Confined transmissivity T = kb."
            },
            {
              "id": "gpe06b-gw-1-03",
              "type": "mcq",
              "label": "6A · Pumping-test drawdown",
              "stem": "In a confined aquifer pumping test interpreted with Theis/Cooper-Jacob methods, the data used most nearly are:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only Atterberg limits of the aquitard"
                },
                {
                  "id": "b",
                  "text": "Only SPT N in the aquitard"
                },
                {
                  "id": "c",
                  "text": "Time-drawdown (or distance-drawdown) in observation wells to estimate T and storage",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Nuclear-gauge RC of the well pad"
                }
              ],
              "explanation": "Aquifer tests use drawdown vs time/distance at observation wells.",
              "miss": "Pumping test → drawdown → T, S.",
              "fepe": "Aquifer test: observation-well drawdown data."
            },
            {
              "id": "gpe06b-gw-1-04",
              "type": "mcq",
              "label": "6A · Radius of influence",
              "stem": "Empirically, the radius of influence R of a pumping well in an unconfined aquifer increases most nearly when:",
              "choices": [
                {
                  "id": "a",
                  "text": "Pumping stops and k → 0"
                },
                {
                  "id": "b",
                  "text": "The well is compacted dry of optimum"
                },
                {
                  "id": "c",
                  "text": "OCR exceeds 10"
                },
                {
                  "id": "d",
                  "text": "Pumping rate / drawdown increase and the aquifer is more permeable (larger practical R)",
                  "correct": true
                }
              ],
              "explanation": "Influence radius grows with Q, k, and drawdown.",
              "miss": "Larger Q/k → larger R.",
              "fepe": "Well radius of influence grows with Q and k."
            },
            {
              "id": "gpe06b-gw-1-05",
              "type": "mcq",
              "label": "6A · Uplift on structure",
              "stem": "A buried tank foundation sits below the water table. Uplift for buoyancy checks is most nearly based on:",
              "choices": [
                {
                  "id": "a",
                  "text": "The hydrostatic pore-pressure resultant on the submerged underside (γw × area × head), resisted by structure weight + any hold-downs",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Dry unit weight of sand only"
                },
                {
                  "id": "c",
                  "text": "At-rest Ko earth pressure only"
                },
                {
                  "id": "d",
                  "text": "SPT N60 × area"
                }
              ],
              "explanation": "Buoyancy = γw × displaced volume / pressure×area from piezometric head.",
              "miss": "Uplift from piezometric head under the base.",
              "fepe": "Buoyancy: u-resultant vs weight + anchors."
            },
            {
              "id": "gpe06b-gw-1-06",
              "type": "mcq",
              "label": "6B · Chimney drain",
              "stem": "A vertical chimney drain in a zoned earth dam is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Increase the phreatic surface elevation intentionally"
                },
                {
                  "id": "b",
                  "text": "Collect and safely discharge seepage through the core/embankment before it can exit the downstream face uncontrolled",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Replace the clay core entirely"
                },
                {
                  "id": "d",
                  "text": "Act only as a roadway pavement drain"
                }
              ],
              "explanation": "Chimney drains intercept seepage and convey it to a blanket/toe drain.",
              "miss": "Chimney drain intercepts core seepage.",
              "fepe": "Chimney drain: internal seepage collection."
            },
            {
              "id": "gpe06b-gw-1-07",
              "type": "mcq",
              "label": "6B · Grout curtain",
              "stem": "A grout curtain in rock under a dam is used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Increase reservoir evaporation"
                },
                {
                  "id": "b",
                  "text": "Replace all concrete in the spillway"
                },
                {
                  "id": "c",
                  "text": "Reduce foundation seepage by filling discontinuities (cutoff), lowering gradients and losses",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Liquefy the foundation intentionally"
                }
              ],
              "explanation": "Grout curtains are seepage cutoffs in fractured rock.",
              "miss": "Grout curtain → foundation seepage cutoff.",
              "fepe": "Grout curtain reduces rock-foundation seepage."
            },
            {
              "id": "gpe06b-gw-1-08",
              "type": "mcq",
              "label": "6B · Upstream blanket",
              "stem": "An upstream impervious blanket on a pervious foundation is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Shorten the seepage path under the dam"
                },
                {
                  "id": "b",
                  "text": "Increase exit gradients at the toe"
                },
                {
                  "id": "c",
                  "text": "Replace riprap armor"
                },
                {
                  "id": "d",
                  "text": "Lengthen the seepage path / reduce underseepage quantity and gradients by forcing longer travel through low-k material",
                  "correct": true
                }
              ],
              "explanation": "Upstream blankets lengthen the seepage path.",
              "miss": "Blanket lengthens path.",
              "fepe": "Upstream blanket: longer seepage path."
            },
            {
              "id": "gpe06b-gw-1-09",
              "type": "mcq",
              "label": "6A · Quick condition",
              "stem": "A sand heave/quick condition at a free exit surface develops most nearly when:",
              "choices": [
                {
                  "id": "a",
                  "text": "The exit hydraulic gradient approaches or exceeds icrit ≈ γ′/γw (effective stress → 0)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "The sand is dry of optimum in a Proctor mold"
                },
                {
                  "id": "c",
                  "text": "Ko = 1 − sin φ′"
                },
                {
                  "id": "d",
                  "text": "OCR > 5"
                }
              ],
              "explanation": "When i_exit → icrit, effective stress vanishes.",
              "miss": "Quick condition: i ≈ icrit at exit.",
              "fepe": "Heave/quick when i_exit ≥ icrit."
            },
            {
              "id": "gpe06b-gw-1-10",
              "type": "mcq",
              "label": "6A · Flow net Nf",
              "stem": "In a flow net, discharge Q = k H (Nf/Nd) per unit length. If the number of flow channels Nf doubles while Nd and H stay fixed, Q most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Halves"
                },
                {
                  "id": "b",
                  "text": "Doubles",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Stays the same"
                },
                {
                  "id": "d",
                  "text": "Goes to zero"
                }
              ],
              "explanation": "Q ∝ Nf/Nd. Doubling Nf doubles Q.",
              "miss": "More flow channels → more discharge.",
              "fepe": "Q = kH(Nf/Nd) ∝ Nf."
            },
            {
              "id": "gpe06b-gw-1-11",
              "type": "mcq",
              "label": "6B · Toe drain",
              "stem": "A toe drain at the downstream embankment contact is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Raise the phreatic surface to the crest"
                },
                {
                  "id": "b",
                  "text": "Block all seepage so pore pressures increase without limit"
                },
                {
                  "id": "c",
                  "text": "Collect seepage and keep the phreatic surface drawn down near the downstream toe, reducing exit gradients",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Serve as the upstream impervious element"
                }
              ],
              "explanation": "Toe drains lower the phreatic surface and control exit gradients.",
              "miss": "Toe drain draws down exit seepage.",
              "fepe": "Toe drain: control downstream exit gradients."
            },
            {
              "id": "gpe06b-gw-1-12",
              "type": "mcq",
              "label": "6A · Aquitard leakage",
              "stem": "Pumping from a semi-confined aquifer beneath an aquitard can most nearly cause:",
              "choices": [
                {
                  "id": "a",
                  "text": "No head change in adjacent aquifers ever"
                },
                {
                  "id": "b",
                  "text": "Consolidation settlement only in gravel with N > 50"
                },
                {
                  "id": "c",
                  "text": "OSHA Type A reclassification of the aquitard"
                },
                {
                  "id": "d",
                  "text": "Drawdown and consolidation in overlying compressible units if the aquitard transmits leakage / head decline propagates",
                  "correct": true
                }
              ],
              "explanation": "Leaky aquitards transmit head change — soft clays can consolidate.",
              "miss": "Lowering heads can settle compressible layers.",
              "fepe": "Aquitard leakage: pumping can settle nearby soft soils."
            },
            {
              "id": "gpe06b-gw-1-13",
              "type": "mcq",
              "label": "6B · Slurry wall purpose",
              "stem": "A soil-bentonite slurry cutoff wall keyed into an aquitard is used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Cut off horizontal seepage in a pervious stratum (groundwater control / contamination barrier)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Increase SPT N in gravel by vibration"
                },
                {
                  "id": "c",
                  "text": "Provide permanent structural capacity as a drilled shaft"
                },
                {
                  "id": "d",
                  "text": "Act as a high-k drainage gallery"
                }
              ],
              "explanation": "Slurry walls are low-k cutoffs — not drains or deep foundations.",
              "miss": "Slurry wall = seepage cutoff.",
              "fepe": "SB cutoff wall intercepts horizontal seepage."
            },
            {
              "id": "gpe06b-gw-1-14",
              "type": "mcq",
              "label": "6A · Specific yield",
              "stem": "Specific yield Sy of an unconfined aquifer is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "The same as confined storativity in all cases"
                },
                {
                  "id": "b",
                  "text": "The drainable porosity — volume of water released by gravity drainage per unit area per unit head decline",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Equal to Gs"
                },
                {
                  "id": "d",
                  "text": "Equal to the plasticity index"
                }
              ],
              "explanation": "Sy ≈ drainable porosity; confined S is much smaller.",
              "miss": "Unconfined Sy ≫ typical confined S.",
              "fepe": "Specific yield ≈ gravity-drainable porosity."
            },
            {
              "id": "gpe06b-gw-1-15",
              "type": "mcq",
              "label": "6B · Filter piping criteria",
              "stem": "Terzaghi-type filter retention criterion comparing filter D15 to base soil D85 is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Guarantee the filter is coarser than riprap D100"
                },
                {
                  "id": "b",
                  "text": "Maximize piping of the base into the filter"
                },
                {
                  "id": "c",
                  "text": "Keep filter voids small enough to retain base soil particles while still meeting permeability criteria",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Force D15,filter > 100 × D85,base always"
                }
              ],
              "explanation": "Retention limits D15,f/D85,base so base particles do not pipe.",
              "miss": "Filter: retain base, remain pervious.",
              "fepe": "Filter retention: limit D15,f / D85,base."
            }
          ]
        }
      ],
      "topic": 6
    },
    {
      "id": "gpe06b-bench",
      "title": "PE bench · Groundwater (expansion)",
      "bench": true,
      "blurb": "Darcy Q, icrit, flow-net Q, heave FS, uplift.",
      "lessons": [
        {
          "id": "gpe06b-pe-1",
          "title": "Groundwater · PE numbers (expansion)",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth seepage calculations.",
          "items": [
            {
              "id": "gpe06b-pe-1-01",
              "type": "mcq",
              "label": "Darcy Q layer",
              "stem": "Most nearly, the seepage discharge Q per foot of width is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.020 ft³/s/ft (L wrong)"
                },
                {
                  "id": "b",
                  "text": "0.20 ft³/s/ft (decimal slip)"
                },
                {
                  "id": "c",
                  "text": "1.0 ft³/s/ft"
                },
                {
                  "id": "d",
                  "text": "0.002 ft³/s/ft",
                  "correct": true
                }
              ],
              "explanation": "i=4/20=0.20; Q=0.001×0.20×10=0.002 ft³/s/ft.",
              "miss": "i=Δh/L; Q=kiA.",
              "fepe": "Darcy Q = k (Δh/L) A.",
              "pe": true,
              "given": "Q = k i A; i = Δh/L",
              "vignette": "k=1×10⁻³ ft/s; thickness=10 ft; L=20 ft; Δh=4 ft. Q per foot of width.",
              "work": [
                "i=0.20",
                "Q=0.002 ft³/s/ft"
              ]
            },
            {
              "id": "gpe06b-pe-1-02",
              "type": "mcq",
              "label": "Critical gradient",
              "stem": "Most nearly, icrit is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.94",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "1.70 (Gs−1 without /(1+e))"
                },
                {
                  "id": "c",
                  "text": "0.80 (reporting e)"
                },
                {
                  "id": "d",
                  "text": "2.70 (reporting Gs)"
                }
              ],
              "explanation": "icrit=(2.70−1)/(1+0.80)=1.70/1.80≈0.94.",
              "miss": "Divide (Gs−1) by (1+e).",
              "fepe": "icrit = (Gs−1)/(1+e).",
              "pe": true,
              "given": "icrit = (Gs − 1)/(1 + e)",
              "vignette": "Gs=2.70, e=0.80.",
              "work": [
                "icrit≈0.94"
              ]
            },
            {
              "id": "gpe06b-pe-1-03",
              "type": "mcq",
              "label": "Flow net Q",
              "stem": "Most nearly, Q per foot of width is:",
              "choices": [
                {
                  "id": "a",
                  "text": "2.0×10⁻⁴ ft³/s/ft (Nf/Nd inverted)"
                },
                {
                  "id": "b",
                  "text": "4.0×10⁻⁴ ft³/s/ft",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "1.0×10⁻⁴ (omitting Nf/Nd)"
                },
                {
                  "id": "d",
                  "text": "8.0×10⁻⁴ (using Nf×Nd)"
                }
              ],
              "explanation": "Q=kH(Nf/Nd)=(2e-5)(20)(4/4)=4e-4.",
              "miss": "Q ∝ Nf/Nd.",
              "fepe": "Flow net: Q = kH(Nf/Nd).",
              "pe": true,
              "given": "Q = k H (Nf/Nd) per unit width",
              "vignette": "k=2×10⁻⁵ ft/s; H=20 ft; Nf=4; Nd=4.",
              "work": [
                "Q=4×10⁻⁴ ft³/s/ft"
              ]
            },
            {
              "id": "gpe06b-pe-1-04",
              "type": "mcq",
              "label": "Exit gradient FS",
              "stem": "Most nearly, FS against heave is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.75 (i_exit/icrit)"
                },
                {
                  "id": "b",
                  "text": "1.00 (forcing)"
                },
                {
                  "id": "c",
                  "text": "1.33",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "0.25 (icrit − i_exit)"
                }
              ],
              "explanation": "FS=icrit/i_exit=1.00/0.75=1.33.",
              "miss": "FS = icrit/i_exit.",
              "fepe": "Heave FS = icrit / i_exit.",
              "pe": true,
              "given": "FS ≈ icrit / i_exit",
              "vignette": "icrit=1.00; i_exit=0.75.",
              "work": [
                "FS=1.33"
              ]
            },
            {
              "id": "gpe06b-pe-1-05",
              "type": "mcq",
              "label": "Uplift force",
              "stem": "Most nearly, the buoyant uplift force on the base is:",
              "choices": [
                {
                  "id": "a",
                  "text": "62 kips (half area)"
                },
                {
                  "id": "b",
                  "text": "250 kips (using γsat)"
                },
                {
                  "id": "c",
                  "text": "100 kips (dry-weight logic)"
                },
                {
                  "id": "d",
                  "text": "125 kips",
                  "correct": true
                }
              ],
              "explanation": "u=62.4×20=1,248 psf; U=1,248×100≈125 kips.",
              "miss": "Uplift = γw × head × area.",
              "fepe": "Buoyant uplift U = γw h A.",
              "pe": true,
              "given": "γw=62.4 pcf; U=(γw h)A",
              "vignette": "A=100 ft²; head above base underside h=20 ft.",
              "work": [
                "U≈125 kips"
              ]
            }
          ]
        }
      ],
      "topic": 6
    }
  ]
});
