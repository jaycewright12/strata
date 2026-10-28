/*
 * STRATA built-in pack: GEO PE · 1b. Site Characterization (Expansion) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 1 — conceptual + PE bench tracks (expansion).
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-01b-site-char",
  "title": "GEO PE · 1b. Site Characterization (Expansion)",
  "version": "1.0.0",
  "description": "Personal use only. Original expansion questions based on Jayce's study library (NCEES PE Civil Reference Handbook v2.1 §3.7–3.8, FHWA GEC 5 / NHI-16-072, FHWA NHI-06-088, UFC 3-220-10). Do not redistribute. Complements geo-pe-01-site-char; not stem duplicates.",
  "units": [
    {
      "id": "gpe01b-site",
      "title": "1b. Site Characterization · Expansion",
      "blurb": "Additional PE-depth coverage of 1A–1H: geologic/topo interpretation, building/mat exploration, mud rotary & test pits, split-spoon vs undisturbed, vane/PMT/plate load, AASHTO & organics, weathering, artesian head.",
      "lessons": [
        {
          "id": "gpe01b-site-1",
          "title": "Site characterization · Concepts (expansion)",
          "minutes": 40,
          "xp": 60,
          "summary": "Fifteen original expansion items across 1A–1H — geologic maps, topo anomalies, building spacing, mat 2B, mud rotary, test-pit limits, NX RQD, split-spoon use, vane, PMT, plate-load scaling, AASHTO A-7-6, OL/OH, weathering vs RQD, artesian head.",
          "items": [
            {
              "id": "gpe01b-site-1-01",
              "type": "mcq",
              "label": "1A · Geologic map units",
              "stem": "A published geologic map shows the proposed interchange footprint underlain by Quaternary landslide deposits adjacent to a mapped inactive fault trace. For PE-depth exploration planning, the most appropriate first use of this information is to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Increase boring density and prioritize depth/strength sampling through the landslide mass and across the fault-proximal zone before fixing foundation type",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Adopt the map unit labels as final USCS classifications and skip lab index tests"
                },
                {
                  "id": "c",
                  "text": "Ignore Quaternary units because only bedrock geology controls foundation design"
                },
                {
                  "id": "d",
                  "text": "Cancel borings in the landslide unit and use CPT only, because maps already prove shear strength"
                }
              ],
              "explanation": "GEC 5 / NHI-06-088 site-data interpretation: geologic maps flag geologic hazards (landslides, faults, soft deposits) that should drive denser exploration and targeted sampling — not replace classification lab work or eliminate borings.",
              "miss": "Maps guide risk-focused boring layout; they do not replace USCS lab work or prove strength.",
              "fepe": "Geologic maps → hazard-driven exploration scope."
            },
            {
              "id": "gpe01b-site-1-02",
              "type": "mcq",
              "label": "1A · Topo / drainage",
              "stem": "Large-scale topographic maps and LIDAR hillshade for a proposed cut-and-fill roadway show a closed depression with no outlet and mottled tones on historical aerials. The interpretation that should most strongly influence the preliminary geotech scope is:",
              "choices": [
                {
                  "id": "a",
                  "text": "The depression is ornamental landscaping and can be ignored in exploration"
                },
                {
                  "id": "b",
                  "text": "Possible former wetland / soft organic fill / karst or closed-basin soft soils requiring targeted borings and groundwater characterization",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Closed depressions always indicate competent bedrock near the surface"
                },
                {
                  "id": "d",
                  "text": "Topo alone fixes SPT N for design without field testing"
                }
              ],
              "explanation": "NHI-06-088 Table 3-1 / GEC 5: topo and aerials identify soft ground, wetlands, filled depressions, and karst-related closed basins that need targeted exploration and GW characterization.",
              "miss": "Closed depressions + mottling → soft/organic/wetland or karst risk — investigate, do not skip.",
              "fepe": "Topo/aerials flag soft-ground and drainage anomalies."
            },
            {
              "id": "gpe01b-site-1-03",
              "type": "mcq",
              "label": "1B · Building boring spacing",
              "stem": "For a multi-story building on a relatively uniform soil site, NCEES/FHWA exploration-planning guidance for boring spacing is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "One boring at the property corner only, regardless of footprint size"
                },
                {
                  "id": "b",
                  "text": "Borings only at 500-ft grid spacing as for highway embankments"
                },
                {
                  "id": "c",
                  "text": "About 50–100 ft spacing (often denser under heavily loaded columns / mats), with depth tied to foundation influence",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Borings every 10 ft so that every footing has its own hole"
                }
              ],
              "explanation": "NCEES §3.7.1 / NHI-06-088 building guidance: typical building boring spacing is on the order of 50–100 ft (tighten under critical loads); embankment spacing (200–400 ft) is a different criterion.",
              "miss": "Do not apply embankment 200–400 ft spacing to building pads, or require a hole at every footing by default.",
              "fepe": "Buildings ≈ 50–100 ft boring spacing; depth from 2B/4B rules."
            },
            {
              "id": "gpe01b-site-1-04",
              "type": "mcq",
              "label": "1B · Mat / raft depth",
              "stem": "A mat foundation of plan width B = 80 ft will be founded at Df = 8 ft in deep soil (no rock within the influence depth). Using the NCEES axisymmetric shallow-foundation exploration multiple (exclusive of soft-soil overrides), the minimum exploration depth below the mat base is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "4B = 320 ft (strip-footing multiple applied to a mat)"
                },
                {
                  "id": "b",
                  "text": "Df only (8 ft) because mats need no deeper exploration"
                },
                {
                  "id": "c",
                  "text": "0.5B = 40 ft"
                },
                {
                  "id": "d",
                  "text": "2B = 160 ft",
                  "correct": true
                }
              ],
              "explanation": "NCEES §3.7.1: axisymmetric footings (mats treated with this multiple) use about 2B below the base; continuous strips use 4B. Soft strata and 10%-stress criteria can still deepen the program.",
              "miss": "Mats/axisymmetric → 2B, not the strip 4B multiple.",
              "fepe": "Axisymmetric/mat exploration depth ≈ 2B below base."
            },
            {
              "id": "gpe01b-site-1-05",
              "type": "mcq",
              "label": "1C · Mud rotary",
              "stem": "Exploration must advance continuously through soft clays and loose sands below the water table, recover SPT and thin-wall samples, and maintain hole stability without relying on a continuous hollow stem. Which method is typically most appropriate?",
              "choices": [
                {
                  "id": "a",
                  "text": "Mud (wet) rotary drilling with casing or bentonite slurry as needed to keep the hole open",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Solid-stem continuous-flight auger open-hole sampling below the WT"
                },
                {
                  "id": "c",
                  "text": "Air rotary only, because air always stabilizes saturated sands"
                },
                {
                  "id": "d",
                  "text": "Test pits to 40 ft below the WT in lieu of borings"
                }
              ],
              "explanation": "NHI-06-088 Table 3-4: mud/wet rotary is the common choice for unstable soils below the water table when continuous sampling is required; solid-stem open hole caves; air rotary is poor in saturated loose sands; deep test pits below WT are impractical/unsafe as a substitute.",
              "miss": "Below-WT unstable soils → mud rotary (or HSA); not open solid-stem or deep pits.",
              "fepe": "Mud rotary for below-WT unstable soils needing sampling."
            },
            {
              "id": "gpe01b-site-1-06",
              "type": "mcq",
              "label": "1C · Test pit limits",
              "stem": "Test pits are proposed as the sole exploration method for a 5-story building with column loads requiring design to about 30 ft depth. The most important limitation of relying only on test pits is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Test pits cannot expose soil for visual classification at shallow depth"
                },
                {
                  "id": "b",
                  "text": "Practical/safe pit depth is limited (typically on the order of 10–15 ft without special shoring), so deeper design strata and SPT/CPT profiles would be missed",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Test pits always destroy the site so no foundations can be built"
                },
                {
                  "id": "d",
                  "text": "OSHA forbids all test pits on building sites"
                }
              ],
              "explanation": "NHI/GEC 5 / UFC: test pits are excellent for shallow stratigraphy and bulk samples but depth is limited by safety/excavation practicality; mid-rise foundations need deeper borings/in-situ tests.",
              "miss": "Pits ≠ full-depth exploration for multi-story foundations.",
              "fepe": "Test pits: shallow only; pair with borings for deep influence."
            },
            {
              "id": "gpe01b-site-1-07",
              "type": "mcq",
              "label": "1C · Rock coring / NX",
              "stem": "RQD and recovery will be reported for foundation design on rock. Per common FHWA/NCEES practice, the preferred core size for RQD reporting is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "EX (about 7/8 in) because smaller diameter always gives higher RQD"
                },
                {
                  "id": "b",
                  "text": "Any diameter is acceptable if recovery is recorded as RQD"
                },
                {
                  "id": "c",
                  "text": "NX (about 2-1/8 in / 54 mm) or larger, with RQD based on sound pieces ≥ 4 in along the centerline",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Only BX is allowed; NX cores are not used for RQD"
                }
              ],
              "explanation": "NCEES §3.7.4.1 / NHI: RQD is standardized on NX or larger; measure sound ≥4 in along centerline. Smaller cores and equating recovery to RQD are incorrect.",
              "miss": "RQD → NX+, centerline, sound ≥4 in; recovery ≠ RQD.",
              "fepe": "RQD: NX or larger; sound ≥4 in centerline."
            },
            {
              "id": "gpe01b-site-1-08",
              "type": "mcq",
              "label": "1D · Split-barrel use",
              "stem": "A 2-in OD split-barrel (split-spoon) sample from an SPT interval in clay will be used in the lab. The most appropriate use of that specimen is:",
              "choices": [
                {
                  "id": "a",
                  "text": "UU triaxial on the as-recovered plug treated as undisturbed"
                },
                {
                  "id": "b",
                  "text": "Consolidation Cv/Cc on an undisturbed intact specimen"
                },
                {
                  "id": "c",
                  "text": "Direct shear residual on an undisturbed block carved from the spoon"
                },
                {
                  "id": "d",
                  "text": "Visual classification, moisture, Atterberg limits, and other index / disturbed-sample tests — not undisturbed strength/consolidation",
                  "correct": true
                }
              ],
              "explanation": "NHI-06-088 Table 3-5/3-6: split-barrel samples are disturbed; they support classification and index testing. Undisturbed strength/consolidation needs thin-wall (Shelby) or better quality samples.",
              "miss": "SPT spoon → disturbed/index only; do not treat as Shelby-quality.",
              "fepe": "Split-spoon: classification/index — not UU/consol undisturbed."
            },
            {
              "id": "gpe01b-site-1-09",
              "type": "mcq",
              "label": "1E · Field vane",
              "stem": "In soft saturated clay, a field vane test is performed to estimate undrained shear strength. Peak torque T is measured on a rectangular vane. The engineering quantity obtained most nearly is:",
              "choices": [
                {
                  "id": "a",
                  "text": "su (and often a remolded su for sensitivity) from vane geometry and measured torque",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Drained φ′ and c′ for long-term effective-stress design"
                },
                {
                  "id": "c",
                  "text": "Equivalent SPT N60 without energy correction"
                },
                {
                  "id": "d",
                  "text": "Coefficient of permeability k from torque decay"
                }
              ],
              "explanation": "NCEES/UFC/NHI in-situ: field vane → undrained shear strength from torque and vane dimensions; remolded strength gives sensitivity. It does not replace drained CD parameters, SPT N, or permeameter k.",
              "miss": "Vane → su (undrained), not φ′ or k.",
              "fepe": "Field vane: su from peak (and remolded) torque."
            },
            {
              "id": "gpe01b-site-1-10",
              "type": "mcq",
              "label": "1E · Pressuremeter",
              "stem": "A Menard-type pressuremeter test in a prebored hole is used primarily to obtain which design-relevant parameters?",
              "choices": [
                {
                  "id": "a",
                  "text": "Only grain-size distribution of the cuttings"
                },
                {
                  "id": "b",
                  "text": "In-situ stress–strain response: limit pressure / strength and pressuremeter modulus for deformation estimates",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "RQD of intact rock core"
                },
                {
                  "id": "d",
                  "text": "Hydraulic conductivity equal to Hazen k = C(D10)²"
                }
              ],
              "explanation": "NHI-06-088 / UFC Table 2-16 framing: PMT gives limit pressure and pressuremeter modulus from the expansion curve — strength and deformability in situ — not grain size, RQD, or Hazen k.",
              "miss": "PMT → pl / Em; not USCS, RQD, or Hazen.",
              "fepe": "Pressuremeter: limit pressure + modulus from expansion curve."
            },
            {
              "id": "gpe01b-site-1-11",
              "type": "mcq",
              "label": "1E · Plate-load influence",
              "stem": "A 1-ft-square plate-load test on sand is used to estimate settlement of a 10-ft-square footing at the same contact pressure. The most important PE caution is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Plate and footing settlements are always identical at the same q, so no scaling is needed"
                },
                {
                  "id": "b",
                  "text": "Plate-load results apply only to clay, never sand"
                },
                {
                  "id": "c",
                  "text": "The plate stresses a much shallower zone than the footing; settlement scaling / elastic influence must account for size (and layering), not equate raw plate δ to footing δ",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Plate load replaces the need for any borings beneath the footing"
                }
              ],
              "explanation": "NHI/GEC 5 / classical foundation practice: plate-load influence depth is small relative to full-size footings; use size-scaling relations and stratigraphy — do not copy plate settlement one-for-one.",
              "miss": "Plate δ ≠ footing δ without size/layer correction.",
              "fepe": "Plate load: shallow influence — scale carefully to footing size."
            },
            {
              "id": "gpe01b-site-1-12",
              "type": "mcq",
              "label": "1F · AASHTO group",
              "stem": "A soil has 62% passing No. 200, LL = 48, PI = 22. Using AASHTO M 145 / NCEES group rules for fine-grained soils, the AASHTO classification is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "A-1-a (granular)"
                },
                {
                  "id": "b",
                  "text": "A-3 (fine sand)"
                },
                {
                  "id": "c",
                  "text": "A-2-4 (silty granular)"
                },
                {
                  "id": "d",
                  "text": "A-7-6 (clayey fine-grained; PI exceeds the A-7-5/A-7-6 branch criterion relative to LL)",
                  "correct": true
                }
              ],
              "explanation": "NCEES §3.7.3: >35% fines → A-4 through A-7. With LL=48 and PI=22 (PI > LL−30 = 18), the soil falls in A-7-6. A-1/A-3/A-2 require far fewer fines.",
              "miss": "High fines + high PI → A-7-6, not granular A-1/A-2/A-3.",
              "fepe": "AASHTO: >35% No.200 and high PI → A-7-6."
            },
            {
              "id": "gpe01b-site-1-13",
              "type": "mcq",
              "label": "1F · Organic OH/OL",
              "stem": "A dark soil with organic odor has 55% fines, LL on an oven-dried specimen substantially lower than LL on the natural (not dried) specimen, and plots below the A-line. The USCS group is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "OH or OL (organic silt/clay) — organic soils identified by odor/color and LL drop on oven drying",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "CH regardless of organics because fines >50%"
                },
                {
                  "id": "c",
                  "text": "GW because organic soils are classified as gravel"
                },
                {
                  "id": "d",
                  "text": "Pt only if LL < 20"
                }
              ],
              "explanation": "NCEES USCS: organic silts/clays (OL/OH) are identified by organics and the LL reduction after oven drying; Pt is highly organic peat. Do not force CH or GW when organics govern.",
              "miss": "Organics + LL drop on drying → OL/OH (or Pt if peat), not inorganic CH.",
              "fepe": "USCS organics: OL/OH from odor/color and oven-dry LL drop."
            },
            {
              "id": "gpe01b-site-1-14",
              "type": "mcq",
              "label": "1G · Weathering vs RQD",
              "stem": "Two NX runs in the same rock unit have similar RQD ≈ 60%, but Run A is slightly weathered along joints while Run B is highly weathered with stained, weakened joint walls and some crumbled rock in the core box. For foundation design on rock, the most reasonable statement is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Identical RQD means identical allowable bearing — weathering is irrelevant"
                },
                {
                  "id": "b",
                  "text": "Run B’s higher weathering / weaker discontinuity condition typically reduces rock-mass strength and stiffness even when RQD matches Run A; describe weathering and discontinuity condition, not RQD alone",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "RQD already includes weathering, so no further description is needed"
                },
                {
                  "id": "d",
                  "text": "Only uniaxial compressive strength of intact core matters; discard RQD and weathering notes"
                }
              ],
              "explanation": "NHI/GEC 5 rock characterization: RQD, recovery, weathering grade, and discontinuity condition are complementary. Same RQD with much worse weathering does not imply the same rock-mass design parameters.",
              "miss": "RQD ≠ full rock-mass characterization — record weathering and joint condition.",
              "fepe": "Rock design: RQD + weathering + discontinuity condition."
            },
            {
              "id": "gpe01b-site-1-15",
              "type": "mcq",
              "label": "1H · Artesian head",
              "stem": "A piezometer screened in a confined sand beneath a clay aquitard shows water rising in the riser to 6 ft above the ground surface (flowing artesian if uncapped). At the screen elevation 40 ft below grade, the pore-pressure interpretation is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "u = 0 at the screen because the hole is “dry” at grade when capped"
                },
                {
                  "id": "b",
                  "text": "Hydrostatic from grade down only (ignore the 6 ft of artesian rise)"
                },
                {
                  "id": "c",
                  "text": "Head at the screen = 40 + 6 = 46 ft of water above the screen (u = 46 γw), reflecting the artesian rise above grade",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Artesian conditions mean effective stress is always zero throughout the profile"
                }
              ],
              "explanation": "UFC §2-8 / NHI groundwater: piezometric surface above grade means artesian head; u at the screen uses the full height of water column above the screen (depth to screen plus rise above grade).",
              "miss": "Artesian: add the rise above grade into the head at the screen.",
              "fepe": "Artesian u = γw × (depth to screen + rise above grade)."
            }
          ]
        }
      ],
      "topic": 1
    },
    {
      "id": "gpe01b-bench",
      "title": "PE bench · Site characterization (expansion)",
      "bench": true,
      "blurb": "Multi-step PE numbers: field vane su, AASHTO GI, RQD+recovery, mat soft-soil override, N60.",
      "lessons": [
        {
          "id": "gpe01b-pe-1",
          "title": "Site characterization · PE numbers (expansion)",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth calculations/judgments expanding §1: vane su, GI, RQD vs recovery, mat exploration override, energy-corrected N60.",
          "items": [
            {
              "id": "gpe01b-pe-1-01",
              "type": "mcq",
              "label": "Field vane su",
              "stem": "Most nearly, the undrained shear strength su from the peak torque is:",
              "choices": [
                {
                  "id": "a",
                  "text": "280 psf (≈ half; treated diameter as radius or dropped an end term)"
                },
                {
                  "id": "b",
                  "text": "1,120 psf (≈ double; omitted π or mis-converted in·lb)"
                },
                {
                  "id": "c",
                  "text": "420 psf (used a lower remolded-scale torque)"
                },
                {
                  "id": "d",
                  "text": "560 psf",
                  "correct": true
                }
              ],
              "explanation": "Convert T to in·lb: 20×12 = 240 in·lb. Denominator π(D²H/2 + D³/4) with D=2.5 in, H=5 in: D²H/2 + D³/4 = 15.625 + 3.906 = 19.531; π×19.531 ≈ 61.36. su = 240/61.36 = 3.91 psi ≈ 563 psf ≈ 560 psf.",
              "miss": "Keep vane dimensions in inches with T in in·lb, then ×144 to psf — or use consistent feet.",
              "fepe": "Vane: su = T / [π(D²H/2 + D³/4)].",
              "pe": true,
              "given": "Rectangular vane D = 2.5 in, H = 5.0 in; peak torque T = 20 ft·lb. Use su = T / [π(D²H/2 + D³/4)] with D,H in inches and T in in·lb → su in psi, then ×144 for psf. Neglect anisotropy corrections.",
              "vignette": "Soft saturated clay; field vane test at 12 ft depth.",
              "work": [
                "T = 20 ft·lb = 240 in·lb",
                "D²H/2 = (6.25)(5)/2 = 15.625",
                "D³/4 = 15.625/4 = 3.906",
                "π(15.625+3.906) = π(19.531) ≈ 61.36",
                "su = 240/61.36 = 3.91 psi → 3.91×144 ≈ 563 psf ≈ 560 psf"
              ]
            },
            {
              "id": "gpe01b-pe-1-02",
              "type": "mcq",
              "label": "AASHTO GI",
              "stem": "Most nearly, the AASHTO group index GI is:",
              "choices": [
                {
                  "id": "a",
                  "text": "9",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "4 (LL term only)"
                },
                {
                  "id": "c",
                  "text": "15 (raw (F−35)+(F−15) style without handbook factors)"
                },
                {
                  "id": "d",
                  "text": "0 (assuming GI = 0 for all A-6/A-7 soils)"
                }
              ],
              "explanation": "GI = (F−35)[0.2+0.005(LL−40)] + 0.01(F−15)(PI−10). With F=55, LL=45, PI=20: (20)[0.2+0.005(5)] + 0.01(40)(10) = 20(0.225) + 4.0 = 4.5+4.0 = 8.5 ≈ 9 (nearest whole number).",
              "miss": "Use both terms; floor negative parentheses at 0; round to whole GI.",
              "fepe": "GI handbook formula with both LL and PI terms.",
              "pe": true,
              "given": "AASHTO GI = (F − 35)[0.2 + 0.005(LL − 40)] + 0.01(F − 15)(PI − 10); treat each (F−35), (LL−40), (F−15), (PI−10) as 0 if negative. Report GI as the nearest whole number (≥ 0).",
              "vignette": "Subgrade: F = 55% passing No. 200; LL = 45; PI = 20.",
              "work": [
                "(F−35)=20; (LL−40)=5; (F−15)=40; (PI−10)=10",
                "LL term: 20[0.2+0.005×5]=20×0.225=4.5",
                "PI term: 0.01×40×10=4.0",
                "GI=8.5 → 9"
              ]
            },
            {
              "id": "gpe01b-pe-1-03",
              "type": "mcq",
              "label": "RQD + recovery",
              "stem": "Most nearly, recovery and RQD for the run are:",
              "choices": [
                {
                  "id": "a",
                  "text": "Recovery 70%, RQD 70% (equating the two)"
                },
                {
                  "id": "b",
                  "text": "Recovery 80%, RQD 55%",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Recovery 55%, RQD 80% (swapped)"
                },
                {
                  "id": "d",
                  "text": "Recovery 80%, RQD 100% (counting soft pieces as sound)"
                }
              ],
              "explanation": "Recovery = total recovered / run = 48/60 = 80%. RQD = sum of sound ≥4 in centerline lengths / run = (8+6+5+7+7)/60 = 33/60 = 55%. Soft 6 in and short pieces are excluded from RQD.",
              "miss": "Recovery ≠ RQD; exclude soft and <4 in pieces from RQD.",
              "fepe": "RQD uses sound ≥4 in only; recovery uses all recovered length.",
              "pe": true,
              "given": "Run length = 60 in. Recovered: sound hard pieces 8, 6, 5, 7, and 7 in (all ≥4 in); one soft weathered piece 6 in; broken pieces totaling 9 in each <4 in.",
              "vignette": "NX rock core for a bridge pier.",
              "work": [
                "Recovered total = 8+6+5+7+7+6+9 = 48 in → recovery = 48/60 = 80%",
                "Sound ≥4 in = 8+6+5+7+7 = 33 in → RQD = 33/60 = 55%",
                "Exclude soft 6 in and <4 in pieces from RQD"
              ]
            },
            {
              "id": "gpe01b-pe-1-04",
              "type": "mcq",
              "label": "Mat exploration depth",
              "stem": "Most nearly, the governing minimum exploration depth below the mat base is:",
              "choices": [
                {
                  "id": "a",
                  "text": "40 ft (half of 2B, confusing B with radius)"
                },
                {
                  "id": "b",
                  "text": "2B = 100 ft without regard to the soft-clay override"
                },
                {
                  "id": "c",
                  "text": "Fully penetrate the soft clay into competent sand (about 130 ft), because soft strata extend deeper than 2B = 100 ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Df = 6 ft only"
                }
              ],
              "explanation": "NCEES §3.7.1: axisymmetric multiple ≈ 2B = 100 ft, but if soft strata extend deeper than that influence depth, fully penetrate into competent material. Soft clay to 130 ft > 100 ft → drill through into the sand.",
              "miss": "Soft soils deeper than 2B → fully penetrate; do not stop at 2B.",
              "fepe": "Exploration: 2B unless soft soils go deeper — then fully penetrate.",
              "pe": true,
              "given": "NCEES axisymmetric shallow-foundation exploration depth ≈ 2B below base; if soft strata extend deeper than that, fully penetrate into competent material.",
              "vignette": "Mat width B = 50 ft, Df = 6 ft. Soft clay extends from the mat base to 130 ft depth; dense sand below.",
              "work": [
                "2B = 100 ft below mat base",
                "Soft clay thickness below base = 130 ft > 100 ft",
                "Therefore fully penetrate soft clay into dense sand (~130 ft)",
                "Stopping at 2B = 100 ft would leave soft clay below the exploration"
              ]
            },
            {
              "id": "gpe01b-pe-1-05",
              "type": "mcq",
              "label": "N60 energy",
              "stem": "Most nearly, N60 is:",
              "choices": [
                {
                  "id": "a",
                  "text": "22 (using Eeff/100 instead of Eeff/60)"
                },
                {
                  "id": "b",
                  "text": "40 (forgetting the energy ratio and reporting Nmeas)"
                },
                {
                  "id": "c",
                  "text": "53 (using 60/Eeff upside down)"
                },
                {
                  "id": "d",
                  "text": "30",
                  "correct": true
                }
              ],
              "explanation": "N60 = (Eeff/60)·Nmeas = (45/60)·40 = 0.75×40 = 30. Using /100, skipping the correction, or inverting the ratio are common PE traps.",
              "miss": "N60 = (Eeff/60)×Nmeas — do not invert or use /100.",
              "fepe": "Energy correction: N60 = (Eeff/60) Nmeas.",
              "pe": true,
              "given": "N60 = (Eeff/60)·Nmeas",
              "vignette": "SPT in sand: Nmeas = 40 blows/ft; measured hammer efficiency Eeff = 45%.",
              "work": [
                "N60 = (45/60)×40 = 0.75×40 = 30",
                "22 = 40×0.45; 40 = uncorrected; 53 ≈ 40×(60/45)"
              ]
            }
          ]
        }
      ],
      "topic": 1
    }
  ]
});
