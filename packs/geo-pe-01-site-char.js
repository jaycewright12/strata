/*
 * STRATA built-in pack: GEO PE · 1. Site Characterization (v1.2.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 1 (Site Characterization) — conceptual + PE bench tracks.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-01-site-char",
  "title": "GEO PE · 1. Site Characterization",
  "version": "1.2.0",
  "description": "Personal use only. Original questions based on Jayce's study library (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes). Do not redistribute.",
  "units": [
    {
      "id": "gpe01-site",
      "title": "1. Site Characterization",
      "blurb": "Desk study through groundwater: exploration planning, methods, sampling, in situ tests, soil/rock classification — PE Geotechnical depth.",
      "lessons": [
        {
          "id": "gpe01-site-1",
          "title": "Site characterization · Concepts",
          "minutes": 35,
          "xp": 60,
          "summary": "Scenario judgment across 1A–1H: desk study, boring layout/depth, methods, sampling, SPT/CPT, USCS/AASHTO, RQD, piezometers.",
          "items": [
            {
              "id": "gpe01-site-1-01",
              "type": "mcq",
              "label": "1A · Historic fill",
              "stem": "Sequential aerial photographs of a proposed warehouse pad show a small pond that was filled between 1998 and 2006. Geologic maps indicate lacustrine clay beneath the site. Before finalizing the boring layout, which concern should most strongly control exploration planning through the former pond footprint?",
              "choices": [
                {
                  "id": "a",
                  "text": "Undocumented soft/organic fill that may require borings deep enough to fully penetrate compressible soils into competent material",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Treat the filled pond as ordinary native ground once recent aerials show no standing water, so standard shallow warehouse boring depths apply"
                },
                {
                  "id": "c",
                  "text": "Limit deeper exploration to the mapped pond outline only; lacustrine clay outside that footprint can be assumed competent without soft-soil penetration"
                },
                {
                  "id": "d",
                  "text": "Stop exploration when undocumented fill is first identified at shallow depth, because confirming fill presence is sufficient for settlement design"
                }
              ],
              "explanation": "NHI-06-088 Table 3-1: a series of aerials can show an area that was filled during the review period. Undocumented fill over soft lacustrine clay raises compressibility/settlement risk; NCEES §3.7.1 requires fully penetrating soft/unsuitable soils into competent material. Dry recent aerials do not erase soft-fill risk, and identifying fill without penetrating it does not satisfy depth rules.",
              "miss": "Aerials flag where fill/alteration occurred; they do not waive soft-soil penetration into competent material or confine deep borings only to the pond outline.",
              "fepe": "Desk study first: historic fill zones get denser/deeper exploration, not shallower."
            },
            {
              "id": "gpe01-site-1-02",
              "type": "mcq",
              "label": "1A · Prior reports",
              "stem": "A 5-year-old DOT exploration report for a roadway widening 250 ft from your proposed bridge abutment includes SPT logs, lab classifications, and groundwater notes. Its primary value for your new investigation is most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Eliminate all new borings under the abutment because nearby data always govern design"
                },
                {
                  "id": "b",
                  "text": "Provide geologic, hydrogeologic, and geotechnical context that can reduce and focus the new exploration scope",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Adopt the roadway SPT N-values and classifications as final abutment design parameters without site-specific confirmation borings"
                },
                {
                  "id": "d",
                  "text": "Use the roadway groundwater notes as exact design piezometric heads at the abutment without new observation wells"
                }
              ],
              "explanation": "NHI-06-088 Table 3-1 (existing subsurface exploration reports): nearby prior work can supply geologic/hydrogeologic/geotechnical information and reduce exploration scope — it does not automatically eliminate project-specific borings under a new structure, allow adopting off-alignment N-values as final design parameters, or replace abutment-specific groundwater measurement.",
              "miss": "Prior reports inform planning; they do not waive structure-specific borings, final design parameters, or piezometers at the abutment.",
              "fepe": "Use nearby reports to target borings — still confirm conditions at critical foundations."
            },
            {
              "id": "gpe01-site-1-03",
              "type": "mcq",
              "label": "1B · Embankment depth",
              "stem": "A highway embankment will be H = 35 ft high. Soft organic silt and clay extend from the existing ground surface to about 95 ft depth before dense sand is encountered. Per NCEES/FHWA exploration-depth guidance, the minimum exploration depth below the embankment base should most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Stop at 2H = 70 ft, leaving ~25 ft of soft soil unexplored below that depth"
                },
                {
                  "id": "b",
                  "text": "Stop at H = 35 ft because settlement analyses only need one embankment height"
                },
                {
                  "id": "c",
                  "text": "Fully penetrate the soft strata into the dense sand (deeper than 2H), because soft soils extend beyond twice the embankment height",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Stop at the shallow-foundation strip criterion 4B applied to embankment height H, ignoring the 2H / soft-strata override"
                }
              ],
              "explanation": "NCEES §3.7.1 embankment foundations: minimum depth is 2H unless a hard stratum is found sooner; if soft strata extend deeper than 2H, exploration must fully penetrate those soft strata into competent material. Here soft soils go to 95 ft > 2×35 = 70 ft, so stopping at 2H is insufficient. Shallow-foundation 4B rules are a different application.",
              "miss": "The 2H rule is a floor when soft ground is shallow; when soft ground is deeper than 2H, fully penetrate it — that is the classic PE trap.",
              "fepe": "Embankments: 2H baseline, but always finish soft soils into competent material."
            },
            {
              "id": "gpe01-site-1-04",
              "type": "mcq",
              "label": "1B · Strip footing depth",
              "stem": "For a continuous strip footing of width B founded in soil (bedrock not encountered within the influence depth), NCEES handbook minimum exploration depth expressed as a multiple of B is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "1B"
                },
                {
                  "id": "b",
                  "text": "2B (the axisymmetric / square-footing multiple)"
                },
                {
                  "id": "c",
                  "text": "2H where H is any nearby wall height"
                },
                {
                  "id": "d",
                  "text": "4B",
                  "correct": true
                }
              ],
              "explanation": "NCEES §3.7.1 shallow foundations: exploration depth must (among other criteria) be at least 2× footing width for the axisymmetric case and 4× for a strip footing, plus fully penetrate unsuitable soils and reach where stress increase is <10% of applied footing stress. Confusing strip (4B) with square/axisymmetric (2B) or borrowing embankment/wall rules is a common error.",
              "miss": "2B is for axisymmetric/square-type cases; strip footings use 4B. Wall and embankment rules are different applications.",
              "fepe": "Shallow foundations: 2B axisymmetric, 4B strip — plus soft-soil and 10% stress criteria."
            },
            {
              "id": "gpe01-site-1-05",
              "type": "mcq",
              "label": "1C · Method selection",
              "stem": "A site in silty sand will cave if left as an unsupported open hole below the water table. The program needs intermittent SPT and thin-walled samples. Which boring method is typically the best primary choice?",
              "choices": [
                {
                  "id": "a",
                  "text": "Hollow-stem auger, which advances a hollow stem so sampling can proceed as in a cased hole",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Wash boring above the water table specifically when undisturbed samples are the only objective"
                },
                {
                  "id": "c",
                  "text": "Solid-stem continuous-flight auger advanced below the water table without casing, leaving an unsupported open hole for SPT"
                },
                {
                  "id": "d",
                  "text": "Mud rotary without a hollow stem or temporary casing, then attempt thin-walled sampling through an unstable hole in caving sand"
                }
              ],
              "explanation": "NHI-06-088 Table 3-4(a): hollow-stem auger is typically used in soils that would require casing to maintain an open hole for sampling. Wash boring should not be used above the water table when undisturbed samples are desired; solid-stem augers do not support the hole like HSA/casing in caving ground; mud rotary without casing still leaves a poor path for quality SPT/Shelby in running sand.",
              "miss": "Match method to ground: caving soils below WT → HSA (or casing); solid-stem open hole and unsupported mud holes are poor primary choices here.",
              "fepe": "Caving soils below WT → hollow-stem (or casing) for SPT/Shelby."
            },
            {
              "id": "gpe01-site-1-06",
              "type": "mcq",
              "label": "1C · CPT role",
              "stem": "For a large embankment footprint on interbedded sands and soft clays, the team wants continuous tip resistance, sleeve friction, and pore-pressure response to map thin drainage layers, then a few companion borings for lab samples. The primary continuous tool should be:",
              "choices": [
                {
                  "id": "a",
                  "text": "SPT only at 5-ft intervals, treating N<sub>meas</sub> as a continuous pore-pressure record"
                },
                {
                  "id": "b",
                  "text": "CPTu (piezocone) soundings for qt, fs, and u<sub>2</sub>, with separate borings where samples are required",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Standard CPT without pore-pressure sensors (qt and fs only), assuming thin drainage layers can be mapped from tip resistance alone"
                },
                {
                  "id": "d",
                  "text": "Widely spaced borings with intermittent SPT only, accepting that thin sand seams between sample intervals may be missed"
                }
              ],
              "explanation": "UFC 3-220-10 §2-7.2: CPT/CPTu pushes an instrumented cone for continuous tip and sleeve resistance; CPTu adds pore pressure (commonly u<sub>2</sub>), which is especially useful for detecting thin drainage layers. CPT does not produce a borehole, samples, or cuttings — so companion borings are still required for lab work. SPT is discontinuous; CPT without u misses the pore-pressure signature the team wants.",
              "miss": "Need continuous qt/fs/u<sub>2</sub> → CPTu, then companion borings for samples. SPT spacing and CPT without u are near-misses for thin drainage mapping.",
              "fepe": "CPTu = qt + fs + u; no samples — plan companion borings."
            },
            {
              "id": "gpe01-site-1-07",
              "type": "mcq",
              "label": "1D · Undisturbed sampling",
              "stem": "UU and CU strength tests are planned on soft to stiff clay. Which sampling practice is most appropriate for the undisturbed specimens?",
              "choices": [
                {
                  "id": "a",
                  "text": "Drive a split-barrel sampler with a 140-lb hammer and treat the disturbed spoon soil as undisturbed"
                },
                {
                  "id": "b",
                  "text": "Hammer a thin-walled tube in dense gravelly sand until refusal to maximize recovery"
                },
                {
                  "id": "c",
                  "text": "Push a thin-walled (Shelby) tube with a continuous steady stroke in the cohesive soil; avoid hammering",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Drive a thick-walled ring-lined / California-type sampler and treat it as equivalent to a pushed Shelby for UU/CU"
                }
              ],
              "explanation": "NHI-06-088 Shelby/ASTM D1587 guidance and UFC §2-6: thin-walled tubes are pushed rapidly and steadily in cohesive fine-grained soils. Hammering increases disturbance; split-barrel SPT samples are disturbed by definition; Shelby is unsuitable in hard/dense/gravelly soils; thick-walled driven tubes are more disturbed than pushed thin-wall and are not substitutes for UU/CU-quality undisturbed specimens.",
              "miss": "Undisturbed clay → push Shelby; SPT spoons, hammered tubes, and thick-walled driven samplers are disturbed.",
              "fepe": "Shelby = smooth push in clay/silt; never hammer if you need undisturbed strength."
            },
            {
              "id": "gpe01-site-1-08",
              "type": "mcq",
              "label": "1D · SPT N definition",
              "stem": "An SPT in sand records blows for three successive 6-in increments of 9, 14, and 16 (140-lb hammer, 30-in drop). The reported N<sub>meas</sub> for this interval is:",
              "choices": [
                {
                  "id": "a",
                  "text": "9 (seating drive only)"
                },
                {
                  "id": "b",
                  "text": "14 (second increment alone)"
                },
                {
                  "id": "c",
                  "text": "39 (sum of all three increments)"
                },
                {
                  "id": "d",
                  "text": "30 (sum of the last two 6-in increments)",
                  "correct": true
                }
              ],
              "explanation": "Standard SPT practice (ASTM D1586 / Vandevelde SM): drive three 6-in intervals; N is blows for the last foot (second + third increments). The first 6 in is seating and is not included. Here N<sub>meas</sub> = 14 + 16 = 30.",
              "miss": "Do not report seating alone, the middle increment alone, or the sum of all three 6-in drives.",
              "fepe": "N = last 12 in; first 6 in = seating (excluded)."
            },
            {
              "id": "gpe01-site-1-09",
              "type": "mcq",
              "label": "1E · N60 density",
              "stem": "A clean sand SPT has N<sub>meas</sub> = 36 with measured hammer efficiency E<sub>eff</sub> = 80%. Using N<sub>60</sub> = (E<sub>eff</sub>/60)·N<sub>meas</sub> and the Peck et al. sand correlations in the NCEES handbook, the energy-corrected value and relative-density description are most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "N<sub>60</sub> ≈ 48 → Dense",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "N<sub>60</sub> ≈ 36 → Medium dense (leave N uncorrected)"
                },
                {
                  "id": "c",
                  "text": "N<sub>60</sub> ≈ 27 → Loose (invert the efficiency ratio)"
                },
                {
                  "id": "d",
                  "text": "N<sub>60</sub> ≈ 48 → Soft (use clay consistency language for sand)"
                }
              ],
              "explanation": "N<sub>60</sub> = (80/60)·36 = 48. Peck/NCEES sand bands: 31–50 = Dense; 11–30 = Medium dense; over 50 = Very dense. Leaving N at 36 still looks “dense” on the table but skips the required energy correction; inverting to (60/80)·36 ≈ 27 falsely drops into medium/loose territory; “Soft” is a fine-grained consistency term, and N<sub>60</sub> must not be used for clay design strength.",
              "miss": "Correct efficiency first, then read the sand density table — do not skip correction, invert E<sub>eff</sub>, or borrow clay words.",
              "fepe": "E<sub>eff</sub> > 60% raises N<sub>60</sub> above N<sub>meas</sub>; sands 31–50 = Dense."
            },
            {
              "id": "gpe01-site-1-10",
              "type": "mcq",
              "label": "1E · CPTu interpretation",
              "stem": "During a CPTu sounding, tip resistance drops sharply while excess pore pressure at the u<sub>2</sub> filter rises and dissipates only slowly when advancement is paused. The most reasonable working interpretation of that interval is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Clean coarse gravel or dense sand with high permeability and essentially drained response"
                },
                {
                  "id": "b",
                  "text": "A fine-grained / low-permeability layer (clay or silt) generating undrained excess pore pressure",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "A free-draining sand where any excess pore pressure would dissipate almost immediately when advancement pauses"
                },
                {
                  "id": "d",
                  "text": "An overconsolidated dense sand, because only dense sands produce a sharp drop in tip resistance"
                }
              ],
              "explanation": "UFC §2-7.2: CPTu records qt, fs, and pore pressure (typically u<sub>2</sub>). Soft fine-grained layers show lower tip resistance and can develop significant excess pore pressure that dissipates slowly (low k). Clean sands/gravels tend toward drained response with little sustained excess u. A sharp tip drop with slowly dissipating excess u<sub>2</sub> is the opposite of free-draining sand behavior.",
              "miss": "Sustained excess u<sub>2</sub> + soft tip → clay/silt behavior, not free-draining or dense sand.",
              "fepe": "CPTu: low qt + high sustained Δu → fine-grained / low-k interval."
            },
            {
              "id": "gpe01-site-1-11",
              "type": "mcq",
              "label": "1F · USCS plasticity",
              "stem": "A soil has 58% passing the No. 200 sieve, LL = 54, and PI = 28. On the Casagrande chart the A-line is PI = 0.73(LL − 20). The USCS group symbol is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "CL (ignore that LL > 50)"
                },
                {
                  "id": "b",
                  "text": "MH (treat the point as below the A-line)"
                },
                {
                  "id": "c",
                  "text": "CH",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "ML (call it silt with LL > 50 without checking that PI lies above the A-line)"
                }
              ],
              "explanation": "More than 50% passing No. 200 → fine-grained. A-line at LL = 54 is PI = 0.73(34) ≈ 24.8; measured PI = 28 lies above the A-line → clay. LL > 50 → fat clay CH. CL would need LL ≤ 50; MH/ML are silt symbols (below A-line).",
              "miss": "Fine-grained gate first (No. 200), then A-line (clay vs silt), then LL = 50 split (H vs L).",
              "fepe": "USCS fines: No.200 → A-line → LL 50 → CH/CL/MH/ML."
            },
            {
              "id": "gpe01-site-1-12",
              "type": "mcq",
              "label": "1F · Cu/Cc sand",
              "stem": "A clean sand (<5% fines) has more than half of its coarse fraction passing the No. 4 sieve. Gradation: D<sub>10</sub> = 0.18 mm, D<sub>30</sub> = 0.25 mm, D<sub>60</sub> = 0.40 mm. The USCS symbol is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "SW (assume Cu ≥ 6 without calculating)"
                },
                {
                  "id": "b",
                  "text": "GW (call it gravel because D<sub>60</sub> > 0.3 mm)"
                },
                {
                  "id": "c",
                  "text": "GP (use gravel poorly graded criteria on a sand)"
                },
                {
                  "id": "d",
                  "text": "SP",
                  "correct": true
                }
              ],
              "explanation": "No. 4 split of the coarse fraction → sand (S). Cu = 0.40/0.18 ≈ 2.2 < 6, so not well graded; Cc = (0.25)²/(0.18·0.40) ≈ 0.87, not in 1–3. Clean sand that fails Cu ≥ 6 and 1 ≤ Cc ≤ 3 → SP. GW/GP require gravel (mostly retained on No. 4).",
              "miss": "Compute Cu and Cc; sands need Cu ≥ 6 (gravels Cu ≥ 4). Low Cu → SP, not SW.",
              "fepe": "Sand well-graded only if Cu ≥ 6 and 1 ≤ Cc ≤ 3; else SP."
            },
            {
              "id": "gpe01-site-1-13",
              "type": "mcq",
              "label": "1G · RQD vs recovery",
              "stem": "An NX core run is 60 in. Recovered pieces total 45 in. Sound pieces ≥ 4 in along the centerline total 28 in; an additional 7 in piece is soft and weathered, and several pieces are each < 4 in. Which statement is correct?",
              "choices": [
                {
                  "id": "a",
                  "text": "RQD ≈ 47% (Poor); recovery ≈ 75% — recovery must not be reported as RQD",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "RQD = 75% because recovery and RQD are defined identically"
                },
                {
                  "id": "c",
                  "text": "RQD ≈ 58% by adding the soft 7 in weathered piece to the sound ≥ 4 in length ((28+7)/60)"
                },
                {
                  "id": "d",
                  "text": "RQD should include the soft 7 in piece and all fragments shorter than 4 in"
                }
              ],
              "explanation": "NCEES §3.7.4.1 / NHI-06-088: RQD = (sound pieces ≥ 4 in) / (run length) = 28/60 ≈ 47% → Poor (25–50%). Recovery = 45/60 = 75%. Soft/unsound pieces and pieces < 4 in are excluded from RQD even if recovered. Equating recovery to RQD, or adding soft length into the RQD numerator, are classic PE traps.",
              "miss": "Recovery counts everything recovered; RQD is stricter (sound + ≥4 in on centerline). Soft length is not RQD.",
              "fepe": "RQD ≠ recovery; exclude soft and <4 in pieces."
            },
            {
              "id": "gpe01-site-1-14",
              "type": "mcq",
              "label": "1G · RQD length measure",
              "stem": "When measuring piece lengths for RQD, the NCEES/FHWA correct method is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Tip-to-tip along the longest outside edge so diameter increases reported length"
                },
                {
                  "id": "b",
                  "text": "Along the core centerline so length is independent of core diameter",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Only fully circular end-to-end projections that discard partial-circumference breaks"
                },
                {
                  "id": "d",
                  "text": "Along a chord at mid-radius (halfway between the centerline and the outside edge)"
                }
              ],
              "explanation": "NCEES handbook figure (after FHWA): correct RQD length is measured along the core centerline and is independent of diameter. Tip-to-tip and “fully circular” methods are illustrated as incorrect because they make length depend on diameter. A mid-radius chord is the same diameter-dependent error family.",
              "miss": "Centerline — not tip-to-tip, not diameter-dependent circular or chord projections.",
              "fepe": "RQD length = centerline; independent of NX diameter."
            },
            {
              "id": "gpe01-site-1-15",
              "type": "mcq",
              "label": "1H · Piezometer layout",
              "stem": "A perched water table in a shallow sand is separated by an 8-ft-thick clay aquitard from a deeper confined sand. You need concurrent water-level data in both sands. Per UFC guidance on nested installations, the preferred approach is:",
              "choices": [
                {
                  "id": "a",
                  "text": "One open well with a continuous sand pack from ground surface through both sands so heads average automatically"
                },
                {
                  "id": "b",
                  "text": "Nest both screens in a single boring without bentonite seals because 8 ft of separation is always enough"
                },
                {
                  "id": "c",
                  "text": "Install the two response zones in separate borings (zones ≤ about 10 ft apart should not share one nested hole)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Prefer a single nested boring with sand pack and bentonite seals regardless of the 8-ft vertical separation (ignore the ≤10 ft separate-boring rule)"
                }
              ],
              "explanation": "UFC 3-220-10 §2-8: open standpipe piezometers isolate a screened stratum with seals; nested piezometers in one boring need careful seals, but if measuring zones have about 10 ft or less of vertical separation, piezometers should be installed in separate borings. Here the aquitard is only 8 ft, so separate borings are preferred. A full-length open well averages heads; nesting without seals short-circuits zones; nesting with seals still violates the ≤10 ft separation guidance.",
              "miss": "Close vertical targets (≤~10 ft) → separate borings; seals alone do not override that UFC rule.",
              "fepe": "Nested piezos: seals matter; ≤10 ft vertical separation → separate holes."
            }
          ]
        }
      ],
      "topic": 1
    },
    {
      "id": "gpe01-bench",
      "title": "PE bench · Site Characterization",
      "blurb": "Multi-step PE calcs: energy + overburden SPT, RQD traps, USCS dual symbols, AASHTO GI, exploration depth.",
      "bench": true,
      "lessons": [
        {
          "id": "gpe01-pe-1",
          "title": "PE-style calculations",
          "minutes": 25,
          "xp": 50,
          "summary": "Work the numbers, watch handbook traps, pick the closest answer.",
          "items": [
            {
              "id": "gpe01-pe-1-01",
              "type": "mcq",
              "pe": true,
              "label": "SPT (N1)60",
              "given": "N<sub>60</sub> = (E<sub>eff</sub>/60)·N<sub>meas</sub>; (N<sub>1</sub>)<sub>60</sub> = N<sub>60</sub>·C<sub>N</sub>; C<sub>N</sub> = 0.77 log<sub>10</sub>(20/σ′<sub>v0</sub>) with σ′<sub>v0</sub> in tsf",
              "vignette": "SPT in sand: N<sub>meas</sub> = 24, E<sub>eff</sub> = 45%, vertical effective stress at the test depth σ′<sub>v0</sub> = 1.0 tsf.",
              "stem": "Most nearly, (N<sub>1</sub>)<sub>60</sub> is:",
              "choices": [
                {
                  "id": "a",
                  "text": "24"
                },
                {
                  "id": "b",
                  "text": "32"
                },
                {
                  "id": "c",
                  "text": "12"
                },
                {
                  "id": "d",
                  "text": "18",
                  "correct": true
                }
              ],
              "work": [
                "N<sub>60</sub> = (45/60)·24 = 0.75·24 = 18",
                "C<sub>N</sub> = 0.77 log<sub>10</sub>(20/1.0) = 0.77·1.3010 ≈ 1.00",
                "(N<sub>1</sub>)<sub>60</sub> = 18·1.00 = 18"
              ],
              "explanation": "Apply energy correction first, then overburden CN from NCEES §3.8.1. At σ′v0 = 1 tsf, CN ≈ 1, so (N1)60 ≈ N60 = 18. Reporting raw Nmeas (24), inverting efficiency (60/45·24 = 32), or applying CN≈0.67 incorrectly (≈12) are common mistakes.",
              "miss": "24 is Nmeas; 32 inverts Eeff/60; 12 mis-applies CN. Energy then overburden — in that order.",
              "fepe": "N60 first; then CN at σ′v0 (tsf). At 1 tsf, CN ≈ 1."
            },
            {
              "id": "gpe01-pe-1-02",
              "type": "mcq",
              "pe": true,
              "label": "RQD calculation",
              "given": "RQD = (Σ length of sound pieces ≥ 4 in, centerline) / (total core run length)",
              "vignette": "NX run length = 60 in. Centerline lengths of hard, sound pieces: 9, 7, 5, and 11 in. Also recovered: one 6 in soft weathered piece and pieces totaling 8 in that are each shorter than 4 in.",
              "stem": "Most nearly, RQD for the run is:",
              "choices": [
                {
                  "id": "a",
                  "text": "53%",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "77%"
                },
                {
                  "id": "c",
                  "text": "63%"
                },
                {
                  "id": "d",
                  "text": "45%"
                }
              ],
              "work": [
                "Sound ≥ 4 in: 9 + 7 + 5 + 11 = 32 in",
                "RQD = 32/60 = 0.533 ≈ 53%",
                "Recovery = (32 + 6 + 8)/60 = 46/60 ≈ 77% (not RQD)",
                "Including soft 6 in would give 38/60 ≈ 63% (incorrect)",
                "Omitting the 5 in piece → 27/60 = 45% (incorrect cutoff)"
              ],
              "explanation": "Only hard/sound pieces ≥ 4 in count. Soft weathered length and short fragments are excluded. 77% is recovery; 63% wrongly adds the soft piece; 45% drops the 5 in piece as if a stricter length cutoff applied ((9+7+11)/60).",
              "miss": "77% = recovery; 63% includes unsound core; 45% omits a valid ≥4 in piece. Exclude soft and <4 in only.",
              "fepe": "RQD numerator: sound AND ≥4 in. Recovery is a different number."
            },
            {
              "id": "gpe01-pe-1-03",
              "type": "mcq",
              "pe": true,
              "label": "USCS dual symbol",
              "given": "Cu = D<sub>60</sub>/D<sub>10</sub>; Cc = D<sub>30</sub>²/(D<sub>10</sub>·D<sub>60</sub>). Sands: well graded if Cu ≥ 6 and 1 ≤ Cc ≤ 3. Fines 5–12% → dual symbol with fines plasticity.",
              "vignette": "Soil is sand (more than half of coarse fraction passes No. 4). Fines = 9% with PI = 12 (clayey fines above A-line). D<sub>10</sub> = 0.10 mm, D<sub>30</sub> = 0.30 mm, D<sub>60</sub> = 0.85 mm.",
              "stem": "The USCS group symbol is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "SP-SM"
                },
                {
                  "id": "b",
                  "text": "SW-SC",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "SW"
                },
                {
                  "id": "d",
                  "text": "GC"
                }
              ],
              "work": [
                "Cu = 0.85/0.10 = 8.5 ≥ 6",
                "Cc = (0.30)²/(0.10·0.85) = 0.09/0.085 ≈ 1.06 (within 1–3) → well-graded sand base SW",
                "Fines 5–12% and clayey (SC fines) → dual symbol SW-SC",
                "Clean SW would need <5% fines; SP would fail Cu/Cc; GC is gravel with clay"
              ],
              "explanation": "Gradation meets well-graded sand criteria (SW). With 5–12% clayey fines, NCEES USCS dual-symbol rules give SW-SC — not clean SW, not SP-SM (wrong gradation and silt fines), not gravel GC.",
              "miss": "Check Cu/Cc for W vs P, then fines % and whether fines are M or C for the dual letter.",
              "fepe": "5–12% fines → dual symbol (e.g., SW-SC); <5% → clean SW/SP."
            },
            {
              "id": "gpe01-pe-1-04",
              "type": "mcq",
              "pe": true,
              "label": "AASHTO group index",
              "given": "GI = (F − 35)[0.2 + 0.005(LL − 40)] + 0.01(F − 15)(PI − 10); report ≥ 0; round to nearest whole number",
              "vignette": "Highway subgrade soil: F = 58% passing No. 200, LL = 52, PI = 24. (Not an A-2-6/A-2-7 partial-GI case.)",
              "stem": "Most nearly, the group index GI is:",
              "choices": [
                {
                  "id": "a",
                  "text": "6"
                },
                {
                  "id": "b",
                  "text": "23"
                },
                {
                  "id": "c",
                  "text": "12",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "0"
                }
              ],
              "work": [
                "GI = (58 − 35)[0.2 + 0.005(52 − 40)] + 0.01(58 − 15)(24 − 10)",
                "= 23[0.2 + 0.005(12)] + 0.01(43)(14)",
                "= 23[0.2 + 0.06] + 6.02 = 23(0.26) + 6.02 = 5.98 + 6.02 = 12.0"
              ],
              "explanation": "Full NCEES §3.7.3 GI equation yields 12. Using only the PI term (partial GI for A-2-6/A-2-7) gives ~6; using (F−35) alone gives 23; flooring a non-negative result to 0 is wrong.",
              "miss": "6 ≈ PI-term only; 23 = (F−35) without the LL bracket; use the full formula unless the group is A-2-6/A-2-7.",
              "fepe": "Full GI for A-4…A-7; partial PI-only GI only for A-2-6/A-2-7."
            },
            {
              "id": "gpe01-pe-1-05",
              "type": "mcq",
              "pe": true,
              "label": "Embankment exploration",
              "given": "NCEES §3.7.1 embankment foundations: spacing and depth rules (2H; fully penetrate soft strata; transverse points at critical sections).",
              "vignette": "New 2,400-ft embankment, uniform soft-ground site, maximum height H = 20 ft. Soft clay extends 55 ft below the base before dense sand. At the maximum-height section, stability analyses will be performed.",
              "stem": "Which statement best matches handbook minimum practice?",
              "choices": [
                {
                  "id": "a",
                  "text": "One boring at each end of the embankment only; stop all holes at 20 ft (= H)"
                },
                {
                  "id": "b",
                  "text": "Centerline borings every 2,000 ft; depth may stop at 2H = 40 ft, leaving 15 ft of soft clay unexplored"
                },
                {
                  "id": "c",
                  "text": "Centerline spacing 200–400 ft is enough; skip transverse borings at the critical section if the alignment is straight"
                },
                {
                  "id": "d",
                  "text": "Centerline spacing on the order of 200–400 ft; at the critical section use ≥3 points in a transverse line; deepen holes through the full 55 ft of soft clay into dense sand",
                  "correct": true
                }
              ],
              "work": [
                "Spacing: ~200 ft (erratic) to 400 ft (uniform) along centerline",
                "Critical section (max height / max soft depth): ≥3 exploration points transversely for stability",
                "Depth: 2H = 40 ft is less than soft-clay thickness 55 ft → fully penetrate soft clay into dense sand (≥55 ft)"
              ],
              "explanation": "NCEES §3.7.1 combines spacing, transverse coverage at critical locations, and the soft-strata depth override. Stopping at H or at 2H while soft clay remains, or skipping transverse points where stability is analyzed, violates the table.",
              "miss": "Do not stop inside soft clay at 2H; do not skip transverse borings at critical embankment sections.",
              "fepe": "Embankments: 200–400 ft spacing; 3 transverse at critical; fully penetrate soft soils."
            }
          ]
        }
      ],
      "topic": 1
    }
  ]
});
