/*
 * STRATA built-in pack: GEO PE · 7b. Problematic Soil & Rock Conditions (Expansion) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 7 — conceptual + PE bench tracks (expansion).
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-07b-problematic",
  "title": "GEO PE · 7b. Problematic Soil & Rock Conditions (Expansion)",
  "version": "1.0.0",
  "description": "Personal use only. Original expansion questions based on Jayce's study library (GEC 5 Ch.5/12, UFC 3-220-10 §1-5, NCEES HB Ch.3.17, Vandevelde Depth IV). Do not redistribute. Complements geo-pe-07-problematic.",
  "units": [
    {
      "id": "gpe07b-prob",
      "title": "7b. Problematic · Expansion",
      "blurb": "Collapse ID, swell pressure, karst exploration, peat secondary, sensitivity, chlorides, resistivity, frost depth/susceptibility, planar rock slide, rockfall ditch, expansive/collapse mitigation, sulfate cement, rock bolts.",
      "lessons": [
        {
          "id": "gpe07b-prob-1",
          "title": "Problematic soils · Concepts (expansion)",
          "minutes": 40,
          "xp": 60,
          "summary": "Fifteen expansion items across 7A–7D.",
          "items": [
            {
              "id": "gpe07b-prob-1-01",
              "type": "mcq",
              "label": "7A · Collapse identification",
              "stem": "A dry silty soil with high void ratio shows a sudden increase in compressibility when wetted under load. This behavior is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Hydrocollapse (collapsible soil) — settlement triggered by wetting under existing or applied stress",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Classic NC consolidation with no wetting effect"
                },
                {
                  "id": "c",
                  "text": "Frost heave only"
                },
                {
                  "id": "d",
                  "text": "Liquefaction of saturated sand under cyclic shear only"
                }
              ],
              "explanation": "Collapsible soils lose strength/structure on wetting under load.",
              "miss": "Wetting-induced collapse ≠ ordinary consolidation.",
              "fepe": "Collapse: wetting under load → sudden settlement."
            },
            {
              "id": "gpe07b-prob-1-02",
              "type": "mcq",
              "label": "7A · Expansive swell pressure",
              "stem": "Highly expansive clay beneath a lightly loaded slab is most nearly a concern because:",
              "choices": [
                {
                  "id": "a",
                  "text": "The clay always liquefies when dry"
                },
                {
                  "id": "b",
                  "text": "Swell pressure / heave can exceed slab loads, causing differential uplift and cracking",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Expansive clay never changes volume"
                },
                {
                  "id": "d",
                  "text": "Only deep foundations are affected, never slabs"
                }
              ],
              "explanation": "Swell pressure can lift light structures; moisture control and design details matter.",
              "miss": "Swell can lift light slabs.",
              "fepe": "Expansive clay: heave under light structures."
            },
            {
              "id": "gpe07b-prob-1-03",
              "type": "mcq",
              "label": "7A · Karst exploration",
              "stem": "In mapped karst terrain, exploration should most nearly emphasize:",
              "choices": [
                {
                  "id": "a",
                  "text": "One boring per 500 ft regardless of sinkhole density"
                },
                {
                  "id": "b",
                  "text": "No borings because maps already prove rock depth"
                },
                {
                  "id": "c",
                  "text": "Closely spaced borings/probes, geophysics as appropriate, and probing for voids/soft zones to rock — not a sparse grid assuming uniform soil",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "CPT only with no rock coring ever"
                }
              ],
              "explanation": "Karst needs denser, void-focused exploration.",
              "miss": "Karst → dense void hunting.",
              "fepe": "Karst exploration: close spacing + void detection."
            },
            {
              "id": "gpe07b-prob-1-04",
              "type": "mcq",
              "label": "7A · Organic settlement",
              "stem": "Thick fibrous peat under an embankment most nearly produces:",
              "choices": [
                {
                  "id": "a",
                  "text": "Zero settlement if SPT N = 0"
                },
                {
                  "id": "b",
                  "text": "Immediate densification to GW"
                },
                {
                  "id": "c",
                  "text": "Only elastic settlement in rock"
                },
                {
                  "id": "d",
                  "text": "Large, long-term secondary compression / creep settlements beyond primary consolidation estimates",
                  "correct": true
                }
              ],
              "explanation": "Peat/organics: large primary + significant secondary compression.",
              "miss": "Peat → large long-term settlement.",
              "fepe": "Peat: primary + secondary compression."
            },
            {
              "id": "gpe07b-prob-1-05",
              "type": "mcq",
              "label": "7A · Sensitivity definition",
              "stem": "Sensitivity St of a clay is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "St = su,undisturbed / su,remolded",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "St = LL / PL"
                },
                {
                  "id": "c",
                  "text": "St = OCR"
                },
                {
                  "id": "d",
                  "text": "St = N60 / 60"
                }
              ],
              "explanation": "Sensitivity compares undisturbed to remolded undrained strength.",
              "miss": "St = su/su,r.",
              "fepe": "Sensitivity St = su / su,remolded."
            },
            {
              "id": "gpe07b-prob-1-06",
              "type": "mcq",
              "label": "7B · Chloride corrosion",
              "stem": "Elevated chloride in soil/groundwater is of greatest concern for:",
              "choices": [
                {
                  "id": "a",
                  "text": "Sulfate attack on concrete exclusively with no steel effect"
                },
                {
                  "id": "b",
                  "text": "Corrosion of buried metals / reinforcing steel (especially with low resistivity)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Frost heave of silts"
                },
                {
                  "id": "d",
                  "text": "RQD of granite"
                }
              ],
              "explanation": "Chlorides promote steel corrosion; sulfates primarily attack concrete.",
              "miss": "Cl → steel; SO4 → concrete.",
              "fepe": "Chlorides: metal/rebar corrosion risk."
            },
            {
              "id": "gpe07b-prob-1-07",
              "type": "mcq",
              "label": "7B · Resistivity aggressive",
              "stem": "Per NCEES/NCHRP-style resistivity aggressiveness bands, resistivity = 800 ohm-cm is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Non-corrosive (>10,000 ohm-cm typical band)"
                },
                {
                  "id": "b",
                  "text": "Only a measure of SPT energy"
                },
                {
                  "id": "c",
                  "text": "Severely / very corrosive (low resistivity)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Identical to hydraulic conductivity"
                }
              ],
              "explanation": "Low resistivity (hundreds of ohm-cm) indicates high corrosivity for buried steel.",
              "miss": "Low ρ → corrosive.",
              "fepe": "Resistivity ≪ 1,000 ohm-cm: highly corrosive."
            },
            {
              "id": "gpe07b-prob-1-08",
              "type": "mcq",
              "label": "7C · Frost protection",
              "stem": "Exterior shallow foundations in frost climates are typically founded most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Above frost depth to maximize heave resistance"
                },
                {
                  "id": "b",
                  "text": "At grade with no regard to frost"
                },
                {
                  "id": "c",
                  "text": "Only on peat"
                },
                {
                  "id": "d",
                  "text": "Below the design frost depth (or otherwise frost-protected) to avoid heave",
                  "correct": true
                }
              ],
              "explanation": "Found below frost depth or use frost-protected shallow foundation details.",
              "miss": "Footing bottom ≥ frost depth (or FPSF).",
              "fepe": "Frost: found below frost depth or protect."
            },
            {
              "id": "gpe07b-prob-1-09",
              "type": "mcq",
              "label": "7C · Frost-susceptible grain size",
              "stem": "Soils most frost-susceptible are most nearly those with:",
              "choices": [
                {
                  "id": "a",
                  "text": "A significant silt-sized fraction that supports ice-lens growth and capillary water supply",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Clean open-graded gravel with no fines"
                },
                {
                  "id": "c",
                  "text": "Solid fresh granite bedrock"
                },
                {
                  "id": "d",
                  "text": "SW with <5% fines and free drainage"
                }
              ],
              "explanation": "Silts are classic frost-susceptible; clean gravels and rock are not.",
              "miss": "Silt → frost susceptible.",
              "fepe": "Frost: silty soils most susceptible."
            },
            {
              "id": "gpe07b-prob-1-10",
              "type": "mcq",
              "label": "7D · Planar rock slide",
              "stem": "A rock slope with a persistent discontinuity daylighting out of the face at 35°, friction φj = 28°, dry, c=0, is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Stable because dip < 90°"
                },
                {
                  "id": "b",
                  "text": "Unstable on that plane (dip > φj) unless reinforced or geometry changed",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Stable because φj < dip always means safe"
                },
                {
                  "id": "d",
                  "text": "Unaffected by discontinuity orientation"
                }
              ],
              "explanation": "Planar sliding when dip > φj (dry, c=0). Here 35>28 → unstable.",
              "miss": "Daylighting plane steeper than φj → slide.",
              "fepe": "Planar rock slide if α > φj."
            },
            {
              "id": "gpe07b-prob-1-11",
              "type": "mcq",
              "label": "7D · Rockfall ditch",
              "stem": "A rockfall catchment ditch at the toe of a cut is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "A ground-anchor tendon inside the rock mass"
                },
                {
                  "id": "b",
                  "text": "A method to increase RQD of the cut face"
                },
                {
                  "id": "c",
                  "text": "A protection measure to intercept falling rock before it reaches the roadway — not a slope-strengthening reinforcement",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "A replacement for geologic mapping"
                }
              ],
              "explanation": "Catchment ditches/fences protect the facility; bolts/anchors stabilize the source.",
              "miss": "Catchment ≠ reinforcement.",
              "fepe": "Rockfall ditch: catchment/protection."
            },
            {
              "id": "gpe07b-prob-1-12",
              "type": "mcq",
              "label": "7A · Expansive mitigation",
              "stem": "A light slab on expansive clay with seasonal moisture swings is being mitigated. Which measure is most nearly appropriate?",
              "choices": [
                {
                  "id": "a",
                  "text": "Flooding the clay annually to maximize swell"
                },
                {
                  "id": "b",
                  "text": "Founding the slab above grade on untreated fat clay with no moisture control"
                },
                {
                  "id": "c",
                  "text": "Using only SPT N without Atterbergs"
                },
                {
                  "id": "d",
                  "text": "Moisture control (barriers/drainage), structural isolation/stiffening, and/or removal-replacement with nonexpansive fill — as suited to the site",
                  "correct": true
                }
              ],
              "explanation": "Mitigation: control moisture, structural design, and/or replace expansive soils.",
              "miss": "Control water and/or isolate structure.",
              "fepe": "Expansive mitigation: moisture + structure + replace."
            },
            {
              "id": "gpe07b-prob-1-13",
              "type": "mcq",
              "label": "7B · Concrete sulfate class",
              "stem": "When soluble sulfates in soil exceed aggressive thresholds, the PE response for concrete foundations is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Specify sulfate-resistant cement / mix design (exposure class) rather than ordinary Type I alone",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Ignore chemistry because concrete is inert to sulfates"
                },
                {
                  "id": "c",
                  "text": "Increase steel cover only with no cement change ever"
                },
                {
                  "id": "d",
                  "text": "Switch to untreated timber piles only"
                }
              ],
              "explanation": "Sulfate exposure classes drive cement type and mix limits.",
              "miss": "High SO4 → sulfate-resistant concrete.",
              "fepe": "Sulfates: sulfate-resistant cement/mix."
            },
            {
              "id": "gpe07b-prob-1-14",
              "type": "mcq",
              "label": "7D · Rock bolt role",
              "stem": "Rock bolts / dowels in a jointed rock cut are used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Lower the friction angle of joints intentionally"
                },
                {
                  "id": "b",
                  "text": "Knit unstable blocks to stable rock / increase resistance along discontinuities (stabilization)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Replace all geologic mapping"
                },
                {
                  "id": "d",
                  "text": "Act only as drainage wells"
                }
              ],
              "explanation": "Bolts/anchors stabilize rock masses; they are not drains or mapping substitutes.",
              "miss": "Bolts stabilize blocks.",
              "fepe": "Rock bolts: stabilize discontinuity-controlled blocks."
            },
            {
              "id": "gpe07b-prob-1-15",
              "type": "mcq",
              "label": "7A · Collapsible mitigation",
              "stem": "Prewetting / precompression of a collapsible silt site before placing a shallow foundation is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Increase void ratio to maximize future collapse"
                },
                {
                  "id": "b",
                  "text": "Guarantee OCR = 1 forever"
                },
                {
                  "id": "c",
                  "text": "Induce collapse settlement before structural loads, so remaining collapse potential under the structure is reduced",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Replace USCS classification with AASHTO only"
                }
              ],
              "explanation": "Prewet/preload collapses the metastable structure before building.",
              "miss": "Collapse before you build.",
              "fepe": "Collapsible soil: prewet/preload to exhaust collapse."
            }
          ]
        }
      ],
      "topic": 7
    },
    {
      "id": "gpe07b-bench",
      "title": "PE bench · Problematic (expansion)",
      "bench": true,
      "blurb": "Collapse strain, St, resistivity class, steel loss, frost footing El.",
      "lessons": [
        {
          "id": "gpe07b-pe-1",
          "title": "Problematic · PE numbers (expansion)",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth problematic-soil calculations.",
          "items": [
            {
              "id": "gpe07b-pe-1-01",
              "type": "mcq",
              "label": "Collapse strain",
              "stem": "Most nearly, the collapse strain is:",
              "choices": [
                {
                  "id": "a",
                  "text": "4.0% (used H incorrectly)"
                },
                {
                  "id": "b",
                  "text": "12% (ΔH/H with wrong ΔH)"
                },
                {
                  "id": "c",
                  "text": "2.0% (half)"
                },
                {
                  "id": "d",
                  "text": "8.0%",
                  "correct": true
                }
              ],
              "explanation": "εc=ΔH/H0=(0.48)/6.0=0.08=8%. Put 8% as d.",
              "miss": "Collapse strain = ΔH/H0 upon wetting.",
              "fepe": "εc = ΔH / H0.",
              "pe": true,
              "given": "Collapse strain εc = ΔH / H0 × 100%",
              "vignette": "Oedometer specimen H0=6.0 in. Upon wetting at constant vertical stress, height decreases by ΔH=0.48 in.",
              "work": [
                "εc=0.48/6.0=0.08=8%"
              ]
            },
            {
              "id": "gpe07b-pe-1-02",
              "type": "mcq",
              "label": "Sensitivity St",
              "stem": "Most nearly, St is:",
              "choices": [
                {
                  "id": "a",
                  "text": "8",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "1 (remolded = peak)"
                },
                {
                  "id": "c",
                  "text": "0.125 (inverted)"
                },
                {
                  "id": "d",
                  "text": "16 (doubled)"
                }
              ],
              "explanation": "St=1,200/150=8.",
              "miss": "St = su/su,r.",
              "fepe": "Sensitivity St = su / su,remolded.",
              "pe": true,
              "given": "St = su,peak / su,remolded",
              "vignette": "Field vane: peak su=1,200 psf; remolded su=150 psf.",
              "work": [
                "St=8"
              ]
            },
            {
              "id": "gpe07b-pe-1-03",
              "type": "mcq",
              "label": "Resistivity class",
              "stem": "Most nearly, the aggressiveness classification is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Mildly corrosive"
                },
                {
                  "id": "b",
                  "text": "Severely corrosive / very high corrosivity (ρ < 1,000 ohm-cm band)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Non-corrosive"
                },
                {
                  "id": "d",
                  "text": "Not applicable to steel"
                }
              ],
              "explanation": "ρ=600 ohm-cm falls in the severely corrosive band on NCEES/NCHRP-style tables.",
              "miss": "Low resistivity → severe.",
              "fepe": "ρ ≪ 1,000 ohm-cm: severely corrosive.",
              "pe": true,
              "given": "NCEES/NCHRP-style: ρ < 1,000 ohm-cm → severely corrosive for buried steel",
              "vignette": "Soil resistivity ρ = 600 ohm-cm.",
              "work": [
                "600 < 1,000 → severely corrosive"
              ]
            },
            {
              "id": "gpe07b-pe-1-04",
              "type": "mcq",
              "label": "Steel loss",
              "stem": "Most nearly, the design thickness loss x over 50 years is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.002 in (forgot years)"
                },
                {
                  "id": "b",
                  "text": "0.50 in (used 0.01×50)"
                },
                {
                  "id": "c",
                  "text": "0.10 in",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "0.020 in (10 y only)"
                }
              ],
              "explanation": "x=r t=0.002×50=0.10 in.",
              "miss": "x = rate × time.",
              "fepe": "Corrosion loss x = r × t.",
              "pe": true,
              "given": "Thickness loss x = r × t",
              "vignette": "Uniform corrosion rate r=0.002 in/yr; design life t=50 yr.",
              "work": [
                "x=0.002×50=0.10 in"
              ]
            },
            {
              "id": "gpe07b-pe-1-05",
              "type": "mcq",
              "label": "Frost footing elevation",
              "stem": "Most nearly, the highest allowable elevation of the footing bottom is:",
              "choices": [
                {
                  "id": "a",
                  "text": "El. 100 ft (grade)"
                },
                {
                  "id": "b",
                  "text": "El. 96 ft (half frost depth)"
                },
                {
                  "id": "c",
                  "text": "El. 88 ft (deeper than required)"
                },
                {
                  "id": "d",
                  "text": "El. 92 ft",
                  "correct": true
                }
              ],
              "explanation": "Frost depth 8 ft → footing bottom ≤ grade−8 = 100−8=92. Highest allowable = 92. Key d.",
              "miss": "Footing bottom at or below frost depth.",
              "fepe": "Bottom ≤ grade − frost depth.",
              "pe": true,
              "given": "Exterior footing bottom at or below design frost depth",
              "vignette": "Grade El. = 100 ft; design frost depth = 8 ft.",
              "work": [
                "Highest bottom El. = 100−8 = 92 ft"
              ]
            }
          ]
        }
      ],
      "topic": 7
    }
  ]
});
