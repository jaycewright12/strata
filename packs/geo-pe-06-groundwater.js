/*
 * STRATA built-in pack: GEO PE · 6. Groundwater & Seepage (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES HB §3.16, UFC 3-220-05, UFC 3-220-10 Ch.6, Vandevelde Depth II/IV).
 * Do not redistribute.
 * Maps to PE topic 6 (Groundwater and Seepage) — conceptual + PE bench tracks.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-06-groundwater",
  "title": "GEO PE · 6. Groundwater & Seepage",
  "version": "1.0.0",
  "description": "Personal use only. Original questions based on Jayce's study library (NCEES HB §3.16, UFC 3-220-05, UFC 3-220-10 Ch.6, Vandevelde Depth II/IV). Do not redistribute.",
  "units": [
    {
      "id": "gpe06-gw",
      "title": "6. Groundwater & Seepage",
      "blurb": "Dewatering, seepage analysis, nearby-structure impacts, drainage and seepage control — PE depth.",
      "lessons": [
        {
          "id": "gpe06-gw-1",
          "title": "Groundwater & seepage · Concepts",
          "minutes": 35,
          "xp": 60,
          "summary": "6A–6B: Darcy, flow nets, exit gradient, wellpoints/deep wells, filters, cutoff walls.",
          "items": [
            {
              "id": "gpe06-gw-1-01",
              "type": "mcq",
              "label": "6A · Darcy's law",
              "stem": "Darcy’s law for seepage through soil (NCEES §3.16.1) is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Q = k i A",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Q = k A / i"
                },
                {
                  "id": "c",
                  "text": "Q = i /(k A)"
                },
                {
                  "id": "d",
                  "text": "Q = γw i / k"
                }
              ],
              "explanation": "Q = k i A with i = Δh/Δs. Inverting k and i or using γw incorrectly are common slips.",
              "miss": "Q = k i A — hydraulic gradient times permeability times area.",
              "fepe": "Darcy: Q = kiA."
            },
            {
              "id": "gpe06-gw-1-02",
              "type": "mcq",
              "label": "6A · Hydraulic gradient",
              "stem": "Hydraulic gradient i along a seepage path is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "i = k / Q"
                },
                {
                  "id": "b",
                  "text": "i = Δh / ΔL (head loss over flow-path length)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "i = ΔL / Δh"
                },
                {
                  "id": "d",
                  "text": "i = u / γw only, with no path length"
                }
              ],
              "explanation": "i = Δh/ΔL (or Δh/Δs). Reciprocal and pressure-head-only definitions omit the path length ratio.",
              "miss": "i = head loss / length along the flow path.",
              "fepe": "i = Δh/ΔL."
            },
            {
              "id": "gpe06-gw-1-03",
              "type": "mcq",
              "label": "6A · Flow net discharge",
              "stem": "For a flow net, seepage quantity per unit length is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Q = k H (Nd/Nf)"
                },
                {
                  "id": "b",
                  "text": "Q = k H only, ignoring the net"
                },
                {
                  "id": "c",
                  "text": "Q = k H (Nf/Nd)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Q = (Nf/Nd)/kH"
                }
              ],
              "explanation": "NCEES: Q = k h (Nf/Nd). Inverting Nf and Nd is the classic PE trap.",
              "miss": "Q = kh(Nf/Nd) — flow channels over equipotential drops.",
              "fepe": "Flow net: Q = kh(Nf/Nd)."
            },
            {
              "id": "gpe06-gw-1-04",
              "type": "mcq",
              "label": "6A · Exit gradient",
              "stem": "Exit gradient at a downstream discharge face is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "The total head at the reservoir divided by dam height only"
                },
                {
                  "id": "b",
                  "text": "Average i across the entire foundation with no local check"
                },
                {
                  "id": "c",
                  "text": "k / γw at the exit"
                },
                {
                  "id": "d",
                  "text": "Head drop in the last equipotential interval divided by the exit flow-path length of that interval",
                  "correct": true
                }
              ],
              "explanation": "iexit ≈ Δh_last / ΔL_exit from the flow net. Heave/piping checks compare iexit to icrit.",
              "miss": "Use the last drop’s Δh/ΔL — not the global H/foundation length alone.",
              "fepe": "iexit = Δh_exit/ΔL_exit."
            },
            {
              "id": "gpe06-gw-1-05",
              "type": "mcq",
              "label": "6A · Critical gradient",
              "stem": "For upward seepage, the critical hydraulic gradient icrit is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "icrit = γ′/γw = (G_s − 1)/(1+e)  (when pore pressure makes σ′v → 0)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "icrit = γsat/γw always equal to 2.0 for all soils"
                },
                {
                  "id": "c",
                  "text": "icrit = k / n for all sands"
                },
                {
                  "id": "d",
                  "text": "icrit = φ′ in degrees divided by 100"
                }
              ],
              "explanation": "Quick condition when i = icrit = γ′/γw = (Gs−1)/(1+e). Not a universal 2.0, not k/n, not φ′/100.",
              "miss": "icrit = γ′/γw = (Gs−1)/(1+e).",
              "fepe": "Quick: i ≥ icrit = γ′/γw."
            },
            {
              "id": "gpe06-gw-1-06",
              "type": "mcq",
              "label": "6A · Nearby structures",
              "stem": "Lowering the water table with deep wells next to an adjacent building on shallow foundations over compressible clay most nearly risks:",
              "choices": [
                {
                  "id": "a",
                  "text": "Heave of the building from buoyant uplift increase"
                },
                {
                  "id": "b",
                  "text": "Consolidation settlement as effective stress rises when u drops",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Liquefaction of the clay from undrained cyclic loading by pumps"
                },
                {
                  "id": "d",
                  "text": "Immediate increase in OCR that always eliminates settlement"
                }
              ],
              "explanation": "Dewatering drops u → σ′ rises → consolidation settlement in compressible clay; adjacent structures can settle/distort. Uplift heave is the opposite; clay liquefaction from pumps is not the usual mechanism.",
              "miss": "WT drawdown → σ′↑ → settlement in soft clay near wells.",
              "fepe": "Dewatering settlement: Δu↓ raises σ′."
            },
            {
              "id": "gpe06-gw-1-07",
              "type": "mcq",
              "label": "6A · Wellpoints vs deep wells",
              "stem": "Multistage wellpoints are typically most appropriate when:",
              "choices": [
                {
                  "id": "a",
                  "text": "Dewatering rock with k < 10⁻⁷ cm/s where wells cannot yield water"
                },
                {
                  "id": "b",
                  "text": "Excavating 60 ft below grade in a single wellpoint stage without lifts"
                },
                {
                  "id": "c",
                  "text": "Lowering the water table in stages for relatively shallow excavations in sands (each stage limited in lift)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Replacing all need for cutoff walls in karst with infinite transmissivity"
                }
              ],
              "explanation": "UFC 3-220-05 / NCEES figures: multistage wellpoints for sands with limited lift per stage; deep wells for deeper excavations. Rock aquitards and karst need other controls.",
              "miss": "Wellpoints: staged shallow sand dewatering; deep wells for deeper cuts.",
              "fepe": "Wellpoints staged lifts; deep wells for deeper WT control."
            },
            {
              "id": "gpe06-gw-1-08",
              "type": "mcq",
              "label": "6B · Filter criteria role",
              "stem": "A granular filter between a clay core and a coarse rockfill drain is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Maximize piping by allowing clay particles free exit"
                },
                {
                  "id": "b",
                  "text": "Act as the primary low-k barrier replacing the clay core"
                },
                {
                  "id": "c",
                  "text": "Eliminate all need to control exit gradients"
                },
                {
                  "id": "d",
                  "text": "Retain protected-soil particles while remaining permeable enough to convey seepage without clogging",
                  "correct": true
                }
              ],
              "explanation": "Filters retain base soil particles yet pass water (Terzaghi/USACE filter rules). They do not replace the core barrier or invite piping.",
              "miss": "Filter: retain particles + pass water — not a clay replacement.",
              "fepe": "Filter: D15/D85 rules — retain yet drain."
            },
            {
              "id": "gpe06-gw-1-09",
              "type": "mcq",
              "label": "6B · Cutoff wall",
              "stem": "A soil-bentonite or cement-bentonite cutoff wall through a pervious foundation under a dam is used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Lengthen the seepage path / reduce underseepage quantity and exit gradients",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Increase foundation permeability to speed drainage through the dam"
                },
                {
                  "id": "c",
                  "text": "Replace the need for any downstream filter or drainage"
                },
                {
                  "id": "d",
                  "text": "Raise the reservoir head for the same pool elevation"
                }
              ],
              "explanation": "Cutoffs increase seepage path length and reduce underseepage/Q and often iexit. They do not increase k or raise reservoir head.",
              "miss": "Cutoff → longer path, less underseepage — not higher k.",
              "fepe": "Cutoff walls reduce underseepage Q and gradients."
            },
            {
              "id": "gpe06-gw-1-10",
              "type": "mcq",
              "label": "6B · Drainage blanket",
              "stem": "A downstream drainage blanket / toe drain in an earth dam is intended most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Store reservoir water inside the embankment permanently"
                },
                {
                  "id": "b",
                  "text": "Control the phreatic surface and safely discharge seepage without eroding the downstream shell",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Eliminate the upstream clay core entirely"
                },
                {
                  "id": "d",
                  "text": "Increase upstream pore pressures to raise FS"
                }
              ],
              "explanation": "Drains keep the phreatic surface down and exit seepage safely. They do not store reservoir water or remove the need for a core/impervious element when one is part of the design.",
              "miss": "Toe/blanket drains control phreatic surface and exit seepage.",
              "fepe": "Drains: lower phreatic line; protect against internal erosion."
            },
            {
              "id": "gpe06-gw-1-11",
              "type": "mcq",
              "label": "6A · Equipotential",
              "stem": "In a correctly drawn flow net, equipotential drops are most nearly lines of:",
              "choices": [
                {
                  "id": "a",
                  "text": "Constant velocity head only, with total head varying freely"
                },
                {
                  "id": "b",
                  "text": "Constant flow rate Q in each drop equal to kH"
                },
                {
                  "id": "c",
                  "text": "Constant total head (equal head loss per drop when drops are equal)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Constant elevation head with pressure head ignored"
                }
              ],
              "explanation": "Equipotentials = constant total head; successive drops share Δh = H/Nd when equally spaced in head.",
              "miss": "Equipotential = constant total head; Nd equal drops → Δh = H/Nd.",
              "fepe": "Equipotentials: constant h; Δh = H/Nd."
            },
            {
              "id": "gpe06-gw-1-12",
              "type": "mcq",
              "label": "6B · Geotextile filter",
              "stem": "A geotextile used as a filter against a sand should most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Have openings so large that half the sand passes freely as the design intent"
                },
                {
                  "id": "b",
                  "text": "Be a geomembrane with zero permittivity"
                },
                {
                  "id": "c",
                  "text": "Be selected only by tensile strength with no permittivity/AOS check"
                },
                {
                  "id": "d",
                  "text": "Satisfy retention (AOS vs soil) and permittivity/permeability criteria so water passes while soil is retained",
                  "correct": true
                }
              ],
              "explanation": "GT filters need retention (AOS) and adequate permittivity — same dual role as granular filters.",
              "miss": "Filter GT: AOS retention + permittivity — not an impermeable GM.",
              "fepe": "GT filter: AOS + permittivity checks."
            },
            {
              "id": "gpe06-gw-1-13",
              "type": "mcq",
              "label": "6A · Anisotropic k",
              "stem": "If kh ≫ kv in a layered foundation, flow nets drawn with isotropic k most nearly need adjustment because:",
              "choices": [
                {
                  "id": "a",
                  "text": "Transform coordinates (scale axes by √(kh/kv)) or use anisotropic formulation so flow paths reflect higher horizontal conductivity",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Always set kv = 0 and ignore all seepage"
                },
                {
                  "id": "c",
                  "text": "Replace Darcy’s law with Stokes flow for every PE problem"
                },
                {
                  "id": "d",
                  "text": "Assume iexit is automatically zero"
                }
              ],
              "explanation": "Anisotropic seepage uses transformed sections scaling by √(kh/kv). Ignoring seepage or zeroing iexit is unsafe.",
              "miss": "kh≠kv → transform section or anisotropic analysis.",
              "fepe": "Anisotropy: transform by √(kh/kv)."
            },
            {
              "id": "gpe06-gw-1-14",
              "type": "mcq",
              "label": "6A · Heave / piping",
              "stem": "Unsafe piping/heave at a downstream sand exit is indicated most nearly when:",
              "choices": [
                {
                  "id": "a",
                  "text": "iexit ≪ icrit with FS_heave ≫ 2"
                },
                {
                  "id": "b",
                  "text": "iexit approaches or exceeds icrit (FS against heave too low)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "The reservoir is empty so H = 0"
                },
                {
                  "id": "d",
                  "text": "A filter is present and iexit is therefore irrelevant by definition"
                }
              ],
              "explanation": "Compare iexit to icrit; FS = icrit/iexit. Low FS → heave/piping risk. Filters help but do not make iexit irrelevant in design checks.",
              "miss": "Piping/heave risk when iexit → icrit (low FS).",
              "fepe": "FS_heave ≈ icrit/iexit."
            },
            {
              "id": "gpe06-gw-1-15",
              "type": "mcq",
              "label": "6B · Relief wells",
              "stem": "Relief wells downstream of a levee on a pervious foundation are used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Increase artesian head under the levee blanket"
                },
                {
                  "id": "b",
                  "text": "Inject water to raise the landside water table above the riverside"
                },
                {
                  "id": "c",
                  "text": "Reduce uplift pressures / artesian head landside by providing controlled drainage outlets",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Replace the riverside embankment with a sheet-pile wall only"
                }
              ],
              "explanation": "Relief wells bleed artesian pressure under blankets to reduce uplift/sand boils. They do not increase landside head.",
              "miss": "Relief wells lower uplift — they do not raise landside head.",
              "fepe": "Relief wells: reduce landside uplift pressures."
            }
          ]
        }
      ],
      "topic": 6
    },
    {
      "id": "gpe06-bench",
      "title": "PE bench · Groundwater & seepage",
      "bench": true,
      "lessons": [
        {
          "id": "gpe06-pe-1",
          "title": "Seepage PE bench",
          "minutes": 25,
          "xp": 40,
          "summary": "Darcy Q, flow-net Q, exit gradient, critical i, well drawdown framing.",
          "items": [
            {
              "id": "gpe06-pe-1-01",
              "type": "mcq",
              "pe": true,
              "label": "Darcy Q",
              "given": "Q = k i A; i = Δh/L",
              "vignette": "k = 0.02 cm/s, Δh = 4.0 ft, L = 20 ft, area A = 50 ft² perpendicular to flow. Convert consistently: use k = 0.02 cm/s = 6.56×10⁻⁴ ft/s.",
              "stem": "Most nearly, Q is:",
              "choices": [
                {
                  "id": "a",
                  "text": "6.6×10⁻³ cfs",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "0.13 cfs"
                },
                {
                  "id": "c",
                  "text": "2.0 cfs"
                },
                {
                  "id": "d",
                  "text": "6.6×10⁻⁴ cfs"
                }
              ],
              "work": [
                "i = 4/20 = 0.20",
                "k = 0.02 cm/s × 0.03281 ft/cm = 6.56×10⁻⁴ ft/s",
                "Q = k i A = 6.56e-4 × 0.20 × 50 = 6.56e-3 cfs",
                "0.13 forgets converting cm/s properly / uses k=0.02 ft/s",
                "6.56e-4 is k alone"
              ],
              "explanation": "Convert k to ft/s, then Q=kiA≈6.6×10⁻³ cfs. Using k in cm/s as if ft/s overstates Q.",
              "miss": "Unit-consistent k before Q=kiA.",
              "fepe": "Q=kiA with consistent units."
            },
            {
              "id": "gpe06-pe-1-02",
              "type": "mcq",
              "pe": true,
              "label": "Flow net Q",
              "given": "Q = k H (Nf/Nd)",
              "vignette": "k = 1×10⁻³ ft/min, H = 20 ft, Nf = 4, Nd = 8. Find seepage per foot of dam length.",
              "stem": "Most nearly, Q is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.020 ft³/min per ft"
                },
                {
                  "id": "b",
                  "text": "0.010 ft³/min per ft",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "0.040 ft³/min per ft"
                },
                {
                  "id": "d",
                  "text": "0.005 ft³/min per ft"
                }
              ],
              "work": [
                "Nf/Nd = 4/8 = 0.5",
                "Q = 1e-3 × 20 × 0.5 = 0.010 ft³/min per ft",
                "0.020 uses Nf/Nd=1; 0.040 uses Nd/Nf inverted × wrong; 0.005 halves again"
              ],
              "explanation": "Q=kH(Nf/Nd)=0.010. Inverting Nf/Nd doubles the answer.",
              "miss": "Q=kH(Nf/Nd) — do not invert Nf and Nd.",
              "fepe": "Flow-net Q = kH(Nf/Nd)."
            },
            {
              "id": "gpe06-pe-1-03",
              "type": "mcq",
              "pe": true,
              "label": "Critical i",
              "given": "icrit = (Gs−1)/(1+e)",
              "vignette": "Gs = 2.70, e = 0.60.",
              "stem": "Most nearly, icrit is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.70"
                },
                {
                  "id": "b",
                  "text": "2.70"
                },
                {
                  "id": "c",
                  "text": "1.06",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "0.60"
                }
              ],
              "work": [
                "icrit = (2.70−1)/(1+0.60) = 1.70/1.60 = 1.0625 ≈ 1.06",
                "1.70 = (Gs−1) without /(1+e)",
                "2.70 = Gs",
                "0.60 = e"
              ],
              "explanation": "icrit=(Gs−1)/(1+e)≈1.06. Forgetting /(1+e) gives 1.70.",
              "miss": "Divide (Gs−1) by (1+e).",
              "fepe": "icrit = (Gs−1)/(1+e)."
            },
            {
              "id": "gpe06-pe-1-04",
              "type": "mcq",
              "pe": true,
              "label": "Exit gradient FS",
              "given": "FS = icrit/iexit",
              "vignette": "icrit = 1.00, last equipotential drop Δh = 2.0 ft over exit length ΔL = 5.0 ft.",
              "stem": "Most nearly, FS against heave is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.40"
                },
                {
                  "id": "b",
                  "text": "1.00"
                },
                {
                  "id": "c",
                  "text": "0.25"
                },
                {
                  "id": "d",
                  "text": "2.50",
                  "correct": true
                }
              ],
              "work": [
                "iexit = 2/5 = 0.40",
                "FS = 1.00/0.40 = 2.50",
                "0.40 is iexit; 1.00 is icrit; 0.25 inverts poorly"
              ],
              "explanation": "iexit=0.40; FS=2.50. Do not report iexit as FS.",
              "miss": "FS = icrit/iexit.",
              "fepe": "FS_heave = icrit/iexit."
            },
            {
              "id": "gpe06-pe-1-05",
              "type": "mcq",
              "pe": true,
              "label": "Head per drop",
              "given": "Δh = H/Nd",
              "vignette": "Total head loss H = 24 ft, Nd = 6 equal equipotential drops.",
              "stem": "Most nearly, head loss per equipotential drop is:",
              "choices": [
                {
                  "id": "a",
                  "text": "24 ft"
                },
                {
                  "id": "b",
                  "text": "6 ft"
                },
                {
                  "id": "c",
                  "text": "0.25 ft"
                },
                {
                  "id": "d",
                  "text": "4 ft",
                  "correct": true
                }
              ],
              "work": [
                "Δh = 24/6 = 4 ft",
                "24 = H; 6 = Nd; 0.25 = Nd/H"
              ],
              "explanation": "Equal drops: Δh = H/Nd = 4 ft.",
              "miss": "Δh = H/Nd.",
              "fepe": "Δh_drop = H/Nd."
            }
          ]
        }
      ],
      "topic": 6
    }
  ]
});
