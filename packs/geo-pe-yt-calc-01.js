/*
 * STRATA built-in pack: GEO PE · Long Calculation Problems I (v1.0.0)
 * Personal use only. 50 original PE depth calculation problems (5 per NCEES topic), based on
 * Jayce's reference library (NCEES PE Civil Reference Handbook v2.1, FHWA GEC 3/12, NHI-05-037,
 * Vandevelde ASCE PE Review). Do not redistribute.
 * Maps to PE topics 1–10 — one PE bench unit per topic. Items link worked-solution PDFs in solutions/yt-calc-01/.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-yt-calc-01",
  "title": "GEO PE · Long Calculation Problems I",
  "version": "1.0.0",
  "description": "Personal use only. 50 original PE Civil–Geotechnical depth calculation problems (5 per NCEES topic), inspired by the problem types in public YouTube walkthroughs (no creator problem copied; geometry and values changed). Equations and factors are from Jayce's reference library: NCEES PE Civil Reference Handbook v2.1 (Ch. 2–3, 6.6), FHWA GEC 3 (NHI-11-032), FHWA GEC 12 (NHI-16-009), FHWA NHI-05-037, Vandevelde ASCE PE Review. Do not redistribute.",
  "units": [
    {
      "id": "gpeyt1-t1-bench",
      "title": "PE bench · YT calc · 1. Site Characterization",
      "topic": 1,
      "bench": true,
      "blurb": "Long multi-step PE calculations — Site Characterization.",
      "lessons": [
        {
          "id": "gpeyt1-t1-pe",
          "title": "Site Characterization · long calcs",
          "minutes": 35,
          "xp": 45,
          "summary": "Five long PE-depth calculations on site characterization.",
          "items": [
            {
              "id": "gpeyt1-01",
              "type": "mcq",
              "pe": true,
              "label": "SPT (N1)60",
              "given": "γw = 62.4 pcf; N60 = (Eeff/60)·Nmeas; (N1)60 = CN·N60; CN = 0.77 log10(20/Po), Po = vertical effective stress in tsf",
              "vignette": "A boring for a highway embankment encounters 8 ft of moist silty sand (γ = 112 pcf) over saturated clean fine sand (γsat = 124 pcf). The water table is at 8 ft. At a depth of 22 ft the field SPT blow count is N = 14 blows/ft. The automatic hammer was calibrated at an energy ratio of 80%. The driller also reports a 2 ft sample recovery, a 140 lb hammer with a 30 in. drop, and AWJ rods (none of which need further correction for this problem).",
              "stem": "Most nearly, the corrected blow count (N1)60 at 22 ft is:",
              "choices": [
                {
                  "id": "a",
                  "text": "20",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "17"
                },
                {
                  "id": "c",
                  "text": "15"
                },
                {
                  "id": "d",
                  "text": "11"
                }
              ],
              "work": [
                "Po = [8(112) + 14(124 − 62.4)]/2000 = 0.879 tsf",
                "N60 = 14×80/60 = 18.67",
                "CN = 0.77 log10(20/0.879) = 1.045",
                "(N1)60 = 18.67×1.045 = 19.5 ≈ 20",
                "Near-miss values: 17 comes from a slip: used total stress for Po; 15 comes from a slip: skipped the energy correction; 11 comes from a slip: inverted the energy ratio (60/80)."
              ],
              "explanation": "20 is correct. Method: γw = 62.4 pcf; N60 = (Eeff/60)·Nmeas; (N1)60 = CN·N60; CN = 0.77 log10(20/Po), Po = vertical effective stress in tsf. Distractors: 17 comes from a slip: used total stress for Po; 15 comes from a slip: skipped the energy correction; 11 comes from a slip: inverted the energy ratio (60/80).",
              "miss": "Check the step that produced your value — 17 is what you get if you used total stress for Po. The correct result is 20.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.8.1.1–3.8.1.2 (Hammer Efficiency, Depth Adjustment), p. 124",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-01-spt-n160.pdf"
            },
            {
              "id": "gpeyt1-02",
              "type": "mcq",
              "pe": true,
              "label": "RQD",
              "given": "RQD = Σ(length of intact pieces ≥ 4 in.)/(total core run length) × 100%",
              "vignette": "A 5.0 ft (60 in.) NQ core run in a jointed limestone recovers the following intact pieces (in., measured along the core axis): 5.5, 2.0, 7.0, 3.5, 4.0, 1.5, 9.0, 3.0, 6.5, 2.5, 4.5. The rest of the run was lost as rubble. The core barrel was double-tube, drilling took 18 minutes, and the drill water return was 80%.",
              "stem": "Most nearly, the RQD of this run and its rock-quality description are:",
              "choices": [
                {
                  "id": "a",
                  "text": "82%, good"
                },
                {
                  "id": "b",
                  "text": "54%, fair"
                },
                {
                  "id": "c",
                  "text": "74%, fair"
                },
                {
                  "id": "d",
                  "text": "61%, fair",
                  "correct": true
                }
              ],
              "work": [
                "Pieces ≥ 4 in.: 5.5, 7.0, 4.0, 9.0, 6.5, 4.5 → Σ = 36.5 in.",
                "RQD = 36.5/60 × 100 = 60.8%",
                "Recovery = 49.0/60 = 82% (not RQD)",
                "RQD 61% → fair (handbook RQD description table)",
                "Near-miss values: 82%, good comes from a slip: reported total core recovery (all pieces) as RQD; 54%, fair comes from a slip: excluded pieces exactly 4 in. long; 74%, fair comes from a slip: divided by recovered length instead of run length."
              ],
              "explanation": "61%, fair is correct. Method: RQD = Σ(length of intact pieces ≥ 4 in.)/(total core run length) × 100%. Distractors: 82%, good comes from a slip: reported total core recovery (all pieces) as RQD; 54%, fair comes from a slip: excluded pieces exactly 4 in. long; 74%, fair comes from a slip: divided by recovered length instead of run length.",
              "miss": "Check the step that produced your value — 82%, good is what you get if you reported total core recovery (all pieces) as RQD. The correct result is 61%, fair.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.7.4.1 Rock Quality Designation (RQD), p. 120",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-02-rqd-core-run.pdf"
            },
            {
              "id": "gpeyt1-03",
              "type": "mcq",
              "pe": true,
              "label": "USCS from gradation",
              "given": "Cu = D60/D10; Cc = D30²/(D10·D60); SW requires Cu ≥ 6 and 1 ≤ Cc ≤ 3; fines < 5%",
              "vignette": "A sieve analysis on a split-spoon sample gives: 96% passing No. 4, 3% passing No. 200, D10 = 0.12 mm, D30 = 0.3 mm, D60 = 0.95 mm. The sample is non-plastic, brown, moist, with a natural water content of 9%. The boring log also notes trace mica.",
              "stem": "Most nearly, Cu, Cc and the USCS group symbol are:",
              "choices": [
                {
                  "id": "a",
                  "text": "Cu = 7.9, Cc = 1.27, SW"
                },
                {
                  "id": "b",
                  "text": "Cu = 7.9, Cc = 0.79, SP-SM"
                },
                {
                  "id": "c",
                  "text": "Cu = 7.9, Cc = 0.79, SP",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Cu = 7.9, Cc = 0.79, SW"
                }
              ],
              "work": [
                "Cu = 0.95/0.12 = 7.92 (≥ 6 OK)",
                "Cc = 0.3²/(0.12×0.95) = 0.789 (< 1, fails)",
                "96% passes No. 4 → sand; 3% fines < 5% → clean sand",
                "Fails Cc → poorly graded sand, SP",
                "Near-miss values: Cu = 7.9, Cc = 1.27, SW comes from a slip: inverted Cc; Cu = 7.9, Cc = 0.79, SP-SM comes from a slip: treated 3% fines as a dual-symbol (5–12%) soil; Cu = 7.9, Cc = 0.79, SW comes from a slip: checked Cu only."
              ],
              "explanation": "Cu = 7.9, Cc = 0.79, SP is correct. Method: Cu = D60/D10; Cc = D30²/(D10·D60); SW requires Cu ≥ 6 and 1 ≤ Cc ≤ 3; fines < 5%. Distractors: Cu = 7.9, Cc = 1.27, SW comes from a slip: inverted Cc; Cu = 7.9, Cc = 0.79, SP-SM comes from a slip: treated 3% fines as a dual-symbol (5–12%) soil; Cu = 7.9, Cc = 0.79, SW comes from a slip: checked Cu only.",
              "miss": "Check the step that produced your value — Cu = 7.9, Cc = 1.27, SW is what you get if you inverted Cc. The correct result is Cu = 7.9, Cc = 0.79, SP.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.7.2 USCS, p. 110–117; §3.8.4 Gradation Tests, p. 136",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-03-uscs-gradation.pdf"
            },
            {
              "id": "gpeyt1-04",
              "type": "mcq",
              "pe": true,
              "label": "Atterberg / LI",
              "given": "PI = LL − PL; LI = (w − PL)/PI; A-line: PI = 0.73(LL − 20)",
              "vignette": "A Shelby-tube sample of gray clay from 30 ft has LL = 58, PL = 24, and natural water content w = 52%. The torvane reading was 0.35 tsf, the pocket penetrometer 0.5 tsf, and 100% passes the No. 200 sieve. The engineer wants the liquidity index and a USCS fine-grained symbol from the plasticity chart.",
              "stem": "Most nearly, the LI and USCS symbol are:",
              "choices": [
                {
                  "id": "a",
                  "text": "LI = 0.18, CH"
                },
                {
                  "id": "b",
                  "text": "LI = 0.82, MH"
                },
                {
                  "id": "c",
                  "text": "LI = 0.48, CL"
                },
                {
                  "id": "d",
                  "text": "LI = 0.82, CH",
                  "correct": true
                }
              ],
              "work": [
                "PI = 58 − 24 = 34",
                "LI = (52 − 24)/34 = 0.824",
                "A-line at LL = 58: 0.73(58−20) = 27.7 < PI = 34 → above A-line",
                "LL ≥ 50 and above A-line → CH; LI near 0.9 → soft, near-liquid consistency",
                "Near-miss values: LI = 0.18, CH comes from a slip: computed consistency index (LL − w)/PI; LI = 0.82, MH comes from a slip: read the soil as below the A-line; LI = 0.48, CL comes from a slip: divided by LL and used LL < 50 boundary."
              ],
              "explanation": "LI = 0.82, CH is correct. Method: PI = LL − PL; LI = (w − PL)/PI; A-line: PI = 0.73(LL − 20). Distractors: LI = 0.18, CH comes from a slip: computed consistency index (LL − w)/PI; LI = 0.82, MH comes from a slip: read the soil as below the A-line; LI = 0.48, CL comes from a slip: divided by LL and used LL < 50 boundary.",
              "miss": "Check the step that produced your value — LI = 0.18, CH is what you get if you computed consistency index (LL − w)/PI. The correct result is LI = 0.82, CH.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.8.2 Atterberg Limits, p. 132; §3.7.2 plasticity chart",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-04-atterberg-li.pdf"
            },
            {
              "id": "gpeyt1-05",
              "type": "mcq",
              "pe": true,
              "label": "(N1)60 profile",
              "given": "N60 = (ER/60)·N; CN = 0.77 log10(20/Po), Po in tsf effective; γw = 62.4 pcf",
              "vignette": "A sand deposit has γ = 118 pcf above the water table at 6 ft and γsat = 128 pcf below. Two SPT samples were taken with a safety hammer (ER = 70%): N = 11 at 12 ft and N = 24 at 45 ft. The geologist claims the deeper sand is 'much denser' because its raw N is ~65% higher. The rig used 2 in. OD split spoon and 1.4 in. ID liner-free sampler.",
              "stem": "Most nearly, (N1)60 at 45 ft is:",
              "choices": [
                {
                  "id": "a",
                  "text": "28"
                },
                {
                  "id": "b",
                  "text": "18"
                },
                {
                  "id": "c",
                  "text": "23",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "15"
                }
              ],
              "work": [
                "Po(12) = 0.551 tsf → (N1)60 = 11×70/60×1.201 = 15.4",
                "Po(45) = [6(118) + 39(128−62.4)]/2000 = 1.633 tsf",
                "CN = 0.77 log10(20/1.633) = 0.838",
                "(N1)60 = 24×70/60×CN = 23.5; after correction the two sands are much closer than raw N suggests",
                "Near-miss values: 28 comes from a slip: forgot the overburden correction; 18 comes from a slip: used total stress in CN; 15 comes from a slip: reported the 12 ft value."
              ],
              "explanation": "23 is correct. Method: N60 = (ER/60)·N; CN = 0.77 log10(20/Po), Po in tsf effective; γw = 62.4 pcf. Distractors: 28 comes from a slip: forgot the overburden correction; 18 comes from a slip: used total stress in CN; 15 comes from a slip: reported the 12 ft value.",
              "miss": "Check the step that produced your value — 28 is what you get if you forgot the overburden correction. The correct result is 23.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.8.1.1–3.8.1.2, p. 124",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-05-spt-two-depths.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "gpeyt1-t2-bench",
      "title": "PE bench · YT calc · 2. Soil Mechanics, Lab Testing & Analysis",
      "topic": 2,
      "bench": true,
      "blurb": "Long multi-step PE calculations — Soil Mechanics, Lab Testing & Analysis.",
      "lessons": [
        {
          "id": "gpeyt1-t2-pe",
          "title": "Soil Mechanics, Lab Testing & Analysis · long calcs",
          "minutes": 35,
          "xp": 45,
          "summary": "Five long PE-depth calculations on soil mechanics, lab testing & analysis.",
          "items": [
            {
              "id": "gpeyt1-06",
              "type": "mcq",
              "pe": true,
              "label": "OC clay settlement",
              "given": "γw = 62.4 pcf; OC clay with σ′0 < σ′p < σ′f: S = [Cr H/(1+e0)] log(σ′p/σ′0) + [Cc H/(1+e0)] log(σ′f/σ′p)",
              "vignette": "A warehouse slab will add a uniform Δσ = 1,200 psf (wide load) at the top of a 16 ft clay layer. Profile: 0–10 ft sand, γ = 115 pcf (water table at 10 ft, top of clay); 10–26 ft clay, γsat = 108 pcf, e0 = 1.05, Cc = 0.42, Cr = 0.06, σ′p = 1,450 psf; below is dense gravel. The clay's cv = 0.35 ft²/day and LL = 61 (not needed here). Use one layer evaluated at mid-depth.",
              "stem": "Most nearly, the primary consolidation settlement of the clay is:",
              "choices": [
                {
                  "id": "a",
                  "text": "10.6 in.",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "10.0 in."
                },
                {
                  "id": "c",
                  "text": "1.4 in."
                },
                {
                  "id": "d",
                  "text": "8.0 in."
                }
              ],
              "work": [
                "σ′0 at mid-clay = 10(115) + 8(108 − 62.4) = 1,515 psf",
                "σ′f = 1,515 + 1,200 = 2,715 psf > σ′p = 1,450 → crosses σ′p",
                "Recompression: 0.06×16/2.05×log(1450/1515) = -0.0089 ft",
                "Virgin: 0.42×16/2.05×log(2715/1450) = 0.8928 ft",
                "S = 0.8840 ft = 10.6 in.",
                "Near-miss values: 10.0 in. comes from a slip: treated the clay as normally consolidated (Cc from σ′0); 1.4 in. comes from a slip: used Cr for the whole stress range; 8.0 in. comes from a slip: used total stress at mid-clay."
              ],
              "explanation": "10.6 in. is correct. Method: γw = 62.4 pcf; OC clay with σ′0 < σ′p < σ′f: S = [Cr H/(1+e0)] log(σ′p/σ′0) + [Cc H/(1+e0)] log(σ′f/σ′p). Distractors: 10.0 in. comes from a slip: treated the clay as normally consolidated (Cc from σ′0); 1.4 in. comes from a slip: used Cr for the whole stress range; 8.0 in. comes from a slip: used total stress at mid-clay.",
              "miss": "Check the step that produced your value — 10.0 in. is what you get if you treated the clay as normally consolidated (Cc from σ′0). The correct result is 10.6 in..",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.2.1–3.2.2 Consolidation (NC and OC soils), pp. 82–84",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-06-oc-consolidation.pdf"
            },
            {
              "id": "gpeyt1-07",
              "type": "mcq",
              "pe": true,
              "label": "Time rate of consolidation",
              "given": "t = Tv Hd²/cv; Hd = longest drainage distance; Tv(U = 90%) = 0.848, Tv(50%) = 0.197",
              "vignette": "An 18 ft layer of soft clay lies between a sand blanket above and a fractured, free-draining sandstone below. A preload is placed instantly. Lab data: cv = 0.28 ft²/day, Cc = 0.38, e0 = 1.12. Ultimate primary settlement under the preload is estimated at 9.6 in. The contractor wants to know how long the preload must stay to reach 90% average consolidation.",
              "stem": "Most nearly, the time for U = 90% is:",
              "choices": [
                {
                  "id": "a",
                  "text": "981 days"
                },
                {
                  "id": "b",
                  "text": "57 days"
                },
                {
                  "id": "c",
                  "text": "27 days"
                },
                {
                  "id": "d",
                  "text": "245 days",
                  "correct": true
                }
              ],
              "work": [
                "Double drainage (sand top, free-draining rock base) → Hd = H/2 = 9 ft",
                "t90 = 0.848 × 9² / 0.28 = 245 days (≈ 0.67 yr)",
                "Settlement at that time ≈ 0.9 × 9.6 = 8.6 in. (extra data not needed)",
                "Near-miss values: 981 days comes from a slip: used Hd = full thickness (single drainage); 57 days comes from a slip: used Tv for 50%; 27 days comes from a slip: forgot to square Hd."
              ],
              "explanation": "245 days is correct. Method: t = Tv Hd²/cv; Hd = longest drainage distance; Tv(U = 90%) = 0.848, Tv(50%) = 0.197. Distractors: 981 days comes from a slip: used Hd = full thickness (single drainage); 57 days comes from a slip: used Tv for 50%; 27 days comes from a slip: forgot to square Hd.",
              "miss": "Check the step that produced your value — 981 days is what you get if you used Hd = full thickness (single drainage). The correct result is 245 days.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.2.3 Time Rate of Settlement and U–Tv table, p. 85",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-07-time-rate-u90.pdf"
            },
            {
              "id": "gpeyt1-08",
              "type": "mcq",
              "pe": true,
              "label": "CD triaxial strength",
              "given": "sin φ′ = (σ′1 − σ′3)/(σ′1 + σ′3); σ′1 = σ′3 tan²(45 + φ′/2) for c′ = 0",
              "vignette": "A consolidated-drained (CD) triaxial test on a remolded clean sand (c′ = 0) consolidated to σ′3 = 20 psi fails at a deviator stress of 52 psi. Pore pressure was zero throughout; specimen diameter 2.8 in., height 5.6 in.; axial strain at failure 6%. A second specimen of the same sand will be tested at σ′3 = 35 psi.",
              "stem": "Most nearly, the deviator stress at failure expected for the 35 psi test is:",
              "choices": [
                {
                  "id": "a",
                  "text": "91 psi",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "126 psi"
                },
                {
                  "id": "c",
                  "text": "99 psi"
                },
                {
                  "id": "d",
                  "text": "45 psi"
                }
              ],
              "work": [
                "Test 1: σ′1 = 20 + 52 = 72 psi",
                "sin φ′ = 52/92 = 0.5652 → φ′ = 34.4°",
                "Kp-type ratio tan²(45 + φ′/2) = 3.600",
                "Test 2: σ′1 = 35×3.600 = 126.0 psi; Δσf = 126.0 − 35 = 91.0 psi",
                "Near-miss values: 126 psi comes from a slip: reported σ′1 instead of deviator stress; 99 psi comes from a slip: used tan φ = Δσ/σ1; 45 psi comes from a slip: reported the Mohr-circle radius (½ deviator)."
              ],
              "explanation": "91 psi is correct. Method: sin φ′ = (σ′1 − σ′3)/(σ′1 + σ′3); σ′1 = σ′3 tan²(45 + φ′/2) for c′ = 0. Distractors: 126 psi comes from a slip: reported σ′1 instead of deviator stress; 99 psi comes from a slip: used tan φ = Δσ/σ1; 45 psi comes from a slip: reported the Mohr-circle radius (½ deviator).",
              "miss": "Check the step that produced your value — 126 psi is what you get if you reported σ′1 instead of deviator stress. The correct result is 91 psi.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.3.2 Shear Strength — Effective Stress (Mohr–Coulomb), p. 87",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-08-cd-triaxial.pdf"
            },
            {
              "id": "gpeyt1-09",
              "type": "mcq",
              "pe": true,
              "label": "Falling-head k",
              "given": "k = (a L)/(A t) · ln(h1/h2); a = standpipe area, A = specimen area",
              "vignette": "A falling-head permeability test is run on a silty sand specimen 2.5 in. in diameter and 6.0 in. long. The standpipe inside diameter is 0.25 in. The head drops from 40 in. to 24 in. in 26 min. Water temperature 20°C; specimen dry unit weight 104 pcf; Gs = 2.66.",
              "stem": "Most nearly, the hydraulic conductivity k is:",
              "choices": [
                {
                  "id": "a",
                  "text": "5.0e-05 cm/s",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "2.2e-05 cm/s"
                },
                {
                  "id": "c",
                  "text": "2.0e-05 cm/s"
                },
                {
                  "id": "d",
                  "text": "5.0e-04 cm/s"
                }
              ],
              "work": [
                "a = π/4 (0.25)² = 0.04909 in.²; A = π/4 (2.5)² = 4.9087 in.²",
                "t = 26 × 60 = 1560 s",
                "k = (0.04909×6.0)/(4.9087×1560) × ln(40/24) = 1.965e-05 in./s",
                "× 2.54 = 4.99e-05 cm/s",
                "Near-miss values: 2.2e-05 cm/s comes from a slip: used log10 instead of ln; 2.0e-05 cm/s comes from a slip: left the result in in./s but labeled cm/s; 5.0e-04 cm/s comes from a slip: used diameter ratio d/D instead of area ratio a/A."
              ],
              "explanation": "5.0e-05 cm/s is correct. Method: k = (a L)/(A t) · ln(h1/h2); a = standpipe area, A = specimen area. Distractors: 2.2e-05 cm/s comes from a slip: used log10 instead of ln; 2.0e-05 cm/s comes from a slip: left the result in in./s but labeled cm/s; 5.0e-04 cm/s comes from a slip: used diameter ratio d/D instead of area ratio a/A.",
              "miss": "Check the step that produced your value — 2.2e-05 cm/s is what you get if you used log10 instead of ln. The correct result is 5.0e-05 cm/s.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.8.5 Permeability Testing, p. 139",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-09-falling-head-k.pdf"
            },
            {
              "id": "gpeyt1-10",
              "type": "mcq",
              "pe": true,
              "label": "Δσ′ from drawdown",
              "given": "σ′ = σ − u; u = γw(z − zw); γw = 62.4 pcf",
              "vignette": "A uniform silty sand deposit is 50 ft thick over rock. Above the water table γ = 110 pcf (moist); below, γsat = 122 pcf. Dewatering for a nearby excavation will lower the water table from 4 ft to 14 ft below grade over several months. Assume the sand above the new water table drains to the moist unit weight and no capillary rise. A settlement-sensitive pipeline rests on piles tipped at 40 ft.",
              "stem": "Most nearly, the increase in vertical effective stress at 40 ft is:",
              "choices": [
                {
                  "id": "a",
                  "text": "624 psf"
                },
                {
                  "id": "b",
                  "text": "504 psf",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "120 psf"
                },
                {
                  "id": "d",
                  "text": "1,100 psf"
                }
              ],
              "work": [
                "Before: σ′ = 4(110) + 36(122−62.4) = 2,586 psf",
                "After: σ′ = 14(110) + 26(122−62.4) = 3,090 psf",
                "Δσ′ = 504 psf = 10 ft × (110 − 122 + 62.4)",
                "Near-miss values: 624 psf comes from a slip: took Δσ′ = γw Δzw (ignored the drop in total stress); 120 psf comes from a slip: used only (γsat − γmoist)Δz; 1,100 psf comes from a slip: added only the moist weight and forgot buoyancy before."
              ],
              "explanation": "504 psf is correct. Method: σ′ = σ − u; u = γw(z − zw); γw = 62.4 pcf. Distractors: 624 psf comes from a slip: took Δσ′ = γw Δzw (ignored the drop in total stress); 120 psf comes from a slip: used only (γsat − γmoist)Δz; 1,100 psf comes from a slip: added only the moist weight and forgot buoyancy before.",
              "miss": "Check the step that produced your value — 624 psf is what you get if you took Δσ′ = γw Δzw (ignored the drop in total stress). The correct result is 504 psf.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.3 Effective and Total Stresses, p. 87",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-10-wt-drawdown-stress.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "gpeyt1-t3-bench",
      "title": "PE bench · YT calc · 3. Construction Observation, QA/QC & Safety",
      "topic": 3,
      "bench": true,
      "blurb": "Long multi-step PE calculations — Construction Observation, QA/QC & Safety.",
      "lessons": [
        {
          "id": "gpeyt1-t3-pe",
          "title": "Construction Observation, QA/QC & Safety · long calcs",
          "minutes": 35,
          "xp": 45,
          "summary": "Five long PE-depth calculations on construction observation, qa/qc & safety.",
          "items": [
            {
              "id": "gpeyt1-11",
              "type": "mcq",
              "pe": true,
              "label": "OSHA sloping",
              "given": "OSHA maximum allowable slopes (H:V): Type A 3/4:1, Type B 1:1, Type C 1½:1 (excavations ≤ 20 ft)",
              "vignette": "A 13 ft deep utility trench with a 5 ft wide bottom will be sloped (no shoring) on both sides through a medium-stiff silty clay classified by the competent person as OSHA Type B (qu = 1.0 tsf, fissured, previously disturbed). The trench run is 240 ft long. The spoil pile will be kept 2 ft back from the edge, and the excavator weighs 48,000 lb.",
              "stem": "Most nearly, the minimum top width of the trench is:",
              "choices": [
                {
                  "id": "a",
                  "text": "24 ft"
                },
                {
                  "id": "b",
                  "text": "44 ft"
                },
                {
                  "id": "c",
                  "text": "31 ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "18 ft"
                }
              ],
              "work": [
                "Type B → 1H:1V on each side",
                "Horizontal run each side = 13 × 1 = 13 ft",
                "Top width = 5 + 2(13) = 31.0 ft",
                "(Excavated volume ≈ (5+31.0)/2 × 13 × 240/27 = 2,080 yd³ — not asked)",
                "Near-miss values: 24 ft comes from a slip: used the Type A slope 3/4:1; 44 ft comes from a slip: used the Type C slope 1½:1; 18 ft comes from a slip: sloped only one side."
              ],
              "explanation": "31 ft is correct. Method: OSHA maximum allowable slopes (H:V): Type A 3/4:1, Type B 1:1, Type C 1½:1 (excavations ≤ 20 ft). Distractors: 24 ft comes from a slip: used the Type A slope 3/4:1; 44 ft comes from a slip: used the Type C slope 1½:1; 18 ft comes from a slip: sloped only one side.",
              "miss": "Check the step that produced your value — 24 ft is what you get if you used the Type A slope 3/4:1. The correct result is 31 ft.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.10.2 Slope and Shield Configurations (Allowable Slopes table), p. 152; 29 CFR 1926 Subpart P App. B",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-11-osha-typeb-trench.pdf"
            },
            {
              "id": "gpeyt1-12",
              "type": "mcq",
              "pe": true,
              "label": "Sand-cone relative compaction",
              "given": "V = Wsand/γsand; γt = W/V; γd = γt/(1 + w); RC = γd/γd,max × 100%",
              "vignette": "A field density test on a compacted embankment lift: the mass of calibrated sand that filled the hole (after subtracting the cone correction) was 3.36 lb; the bulk density of the calibrated sand is 93.5 pcf. The moist soil removed from the hole weighed 4.66 lb, and its oven-dry water content is 11.8%. The lab standard Proctor gave γd,max = 121.0 pcf at wopt = 10.5%. Specification: ≥ 95% relative compaction, w within −1/+3% of optimum. Lift thickness 8 in.",
              "stem": "Most nearly, the relative compaction and the test result are:",
              "choices": [
                {
                  "id": "a",
                  "text": "107.2%, passes"
                },
                {
                  "id": "b",
                  "text": "94.5%, fails"
                },
                {
                  "id": "c",
                  "text": "95.9%, passes",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "104.3%, passes"
                }
              ],
              "work": [
                "Hole volume V = 3.36/93.5 = 0.0359 ft³",
                "γt = 4.66/0.0359 = 129.7 pcf",
                "γd = 129.7/1.118 = 116.0 pcf",
                "RC = 116.0/121.0 = 95.9% (≥ 95% required); w = 11.8% is +1.3% of opt (within −1/+3) → passes",
                "Near-miss values: 107.2%, passes comes from a slip: used moist unit weight (forgot ÷(1+w)); 94.5%, fails comes from a slip: multiplied by (1 − w) instead of dividing by (1 + w); 104.3%, passes comes from a slip: inverted the ratio."
              ],
              "explanation": "95.9%, passes is correct. Method: V = Wsand/γsand; γt = W/V; γd = γt/(1 + w); RC = γd/γd,max × 100%. Distractors: 107.2%, passes comes from a slip: used moist unit weight (forgot ÷(1+w)); 94.5%, fails comes from a slip: multiplied by (1 − w) instead of dividing by (1 + w); 104.3%, passes comes from a slip: inverted the ratio.",
              "miss": "Check the step that produced your value — 107.2%, passes is what you get if you used moist unit weight (forgot ÷(1+w)). The correct result is 95.9%, passes.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.9.1–3.9.2 Laboratory and Field Compaction, pp. 146–148; §3.8.3 Weight-Volume Relationships",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-12-sand-cone-rc.pdf"
            },
            {
              "id": "gpeyt1-13",
              "type": "mcq",
              "pe": true,
              "label": "Compaction production",
              "given": "Compacted yd³/hr = 16.3 · W · S · L · efficiency / n (W ft, S mph, L in.)",
              "vignette": "A contractor will compact 18,000 compacted yd³ of embankment with a single smooth-drum vibratory roller. Drum compacted width per pass = 7.0 ft; average speed = 2.5 mph; compacted lift = 8 in.; job efficiency = 80% (48 min/hr); test strip shows 6 passes are needed for 95% RC. Shrinkage from bank to compacted is 15% and the haul fleet delivers 300 bank yd³/hr.",
              "stem": "Most nearly, how many roller-hours are required?",
              "choices": [
                {
                  "id": "a",
                  "text": "10 hr"
                },
                {
                  "id": "b",
                  "text": "47 hr"
                },
                {
                  "id": "c",
                  "text": "59 hr",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "50 hr"
                }
              ],
              "work": [
                "Rate = 16.3 × 7.0 × 2.5 × 8 × 0.8 / 6 = 304.3 compacted yd³/hr",
                "Hours = 18,000/304.3 = 59 hr",
                "Shrinkage only converts compacted to bank yd³ — not needed because quantity is already compacted",
                "Near-miss values: 10 hr comes from a slip: multiplied by n instead of dividing; 47 hr comes from a slip: omitted the efficiency factor; 50 hr comes from a slip: applied the shrinkage factor to compacted quantity."
              ],
              "explanation": "59 hr is correct. Method: Compacted yd³/hr = 16.3 · W · S · L · efficiency / n (W ft, S mph, L in.). Distractors: 10 hr comes from a slip: multiplied by n instead of dividing; 47 hr comes from a slip: omitted the efficiency factor; 50 hr comes from a slip: applied the shrinkage factor to compacted quantity.",
              "miss": "Check the step that produced your value — 10 hr is what you get if you multiplied by n instead of dividing. The correct result is 59 hr.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §2.3.3.1 Production Rate for Soil Compaction (Ch. 2 Construction)",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-13-roller-production.pdf"
            },
            {
              "id": "gpeyt1-14",
              "type": "mcq",
              "pe": true,
              "label": "Moisture conditioning",
              "given": "Gallons = γd,desired × Vcompacted × (wdesired − wborrow)/100 / 8.33 lb/gal",
              "vignette": "Borrow for a 52,000 ft³ (compacted) highway embankment has an in-situ water content of 7.5%. The specification requires placement at 13.0% and a dry unit weight of 114 pcf. The water truck holds 4,000 gal. The borrow's in-place moist unit weight is 118 pcf and Gs = 2.68 (not needed).",
              "stem": "Most nearly, the volume of water that must be added is:",
              "choices": [
                {
                  "id": "a",
                  "text": "39,140 gal",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "92,514 gal"
                },
                {
                  "id": "c",
                  "text": "5,225 gal"
                },
                {
                  "id": "d",
                  "text": "40,514 gal"
                }
              ],
              "work": [
                "Δw = 13.0 − 7.5 = 5.5%",
                "Water weight = 114 × 52,000 × 0.055 = 326,040 lb",
                "Gallons = /8.33 = 39,140 gal (≈ 10 truckloads)",
                "Near-miss values: 92,514 gal comes from a slip: used the full desired w (ignored borrow moisture); 5,225 gal comes from a slip: divided by 62.4 (got ft³, labeled gal); 40,514 gal comes from a slip: used the moist borrow unit weight."
              ],
              "explanation": "39,140 gal is correct. Method: Gallons = γd,desired × Vcompacted × (wdesired − wborrow)/100 / 8.33 lb/gal. Distractors: 92,514 gal comes from a slip: used the full desired w (ignored borrow moisture); 5,225 gal comes from a slip: divided by 62.4 (got ft³, labeled gal); 40,514 gal comes from a slip: used the moist borrow unit weight.",
              "miss": "Check the step that produced your value — 92,514 gal is what you get if you used the full desired w (ignored borrow moisture). The correct result is 39,140 gal.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §2.3.1 Earthwork/compaction — amount of water to add (Ch. 2 Construction)",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-14-water-addition.pdf"
            },
            {
              "id": "gpeyt1-15",
              "type": "mcq",
              "pe": true,
              "label": "Piezometer QA",
              "given": "ue = γw × (piezometric elevation − static water elevation); Uz = 1 − ue/ue0; γw = 62.4 pcf",
              "vignette": "A vibrating-wire piezometer is installed at the middle of a soft clay layer (tip at El. 60.0) beneath a staged embankment. Immediately after stage-1 fill, the excess pore pressure at the tip was 1,150 psf. Three months later the piezometer indicates a total head equivalent to a water level at El. 96.5, while the static groundwater table is at El. 88.0. Settlement plates show 7.2 in. of settlement; inclinometers show <0.3 in. lateral movement.",
              "stem": "Most nearly, the local degree of consolidation at the piezometer tip is:",
              "choices": [
                {
                  "id": "a",
                  "text": "54%",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "46%"
                },
                {
                  "id": "c",
                  "text": "76%"
                },
                {
                  "id": "d",
                  "text": "19%"
                }
              ],
              "work": [
                "Excess head = 96.5 − 88.0 = 8.5 ft",
                "ue = 8.5 × 62.4 = 530 psf",
                "Uz = 1 − 530/1,150 = 0.539 ≈ 54%",
                "Near-miss values: 46% comes from a slip: reported ue/ue0 (fraction still remaining); 76% comes from a slip: measured excess head from the ground surface (El. 92.0) instead of the static water table; 19% comes from a slip: used the clay unit weight (110 pcf) instead of γw."
              ],
              "explanation": "54% is correct. Method: ue = γw × (piezometric elevation − static water elevation); Uz = 1 − ue/ue0; γw = 62.4 pcf. Distractors: 46% comes from a slip: reported ue/ue0 (fraction still remaining); 76% comes from a slip: measured excess head from the ground surface (El. 92.0) instead of the static water table; 19% comes from a slip: used the clay unit weight (110 pcf) instead of γw.",
              "miss": "Check the step that produced your value — 46% is what you get if you reported ue/ue0 (fraction still remaining). The correct result is 54%.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.11 Geotechnical Instrumentation, p. 156; §3.2.3 consolidation",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-15-piezometer-u.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "gpeyt1-t4-bench",
      "title": "PE bench · YT calc · 4. Earthquake Engineering & Dynamic Loads",
      "topic": 4,
      "bench": true,
      "blurb": "Long multi-step PE calculations — Earthquake Engineering & Dynamic Loads.",
      "lessons": [
        {
          "id": "gpeyt1-t4-pe",
          "title": "Earthquake Engineering & Dynamic Loads · long calcs",
          "minutes": 35,
          "xp": 45,
          "summary": "Five long PE-depth calculations on earthquake engineering & dynamic loads.",
          "items": [
            {
              "id": "gpeyt1-16",
              "type": "mcq",
              "pe": true,
              "label": "Cyclic stress ratio",
              "given": "CSR = 0.65 (amax/g)(σvo/σ′vo) rd; rd = 1.0 − 0.00233z for z < 30 ft (z in ft); γw = 62.4 pcf",
              "vignette": "A bridge abutment site is underlain by loose to medium dense clean sand. Water table at 6 ft. γ = 112 pcf above and γsat = 125 pcf below. The design earthquake has Mw = 7.0 and a site-adjusted peak ground acceleration amax = 0.32g (PGA on rock was 0.24g). Evaluate the sand at 24 ft depth using the Seed–Idriss simplified procedure with the mean rd relation.",
              "stem": "Most nearly, the CSR at 24 ft is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.338"
                },
                {
                  "id": "b",
                  "text": "0.196"
                },
                {
                  "id": "c",
                  "text": "0.319",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "0.239"
                }
              ],
              "work": [
                "σvo = 6(112) + 18(125) = 2,922 psf",
                "u = 18(62.4) = 1,123 psf → σ′vo = 1,799 psf",
                "rd = 1 − 0.00233(24) = 0.9441",
                "CSR = 0.65 × 0.32 × (2,922/1,799) × 0.9441 = 0.319",
                "Near-miss values: 0.338 comes from a slip: omitted rd; 0.196 comes from a slip: omitted σvo/σ′vo; 0.239 comes from a slip: used rock PGA instead of site amax."
              ],
              "explanation": "0.319 is correct. Method: CSR = 0.65 (amax/g)(σvo/σ′vo) rd; rd = 1.0 − 0.00233z for z < 30 ft (z in ft); γw = 62.4 pcf. Distractors: 0.338 comes from a slip: omitted rd; 0.196 comes from a slip: omitted σvo/σ′vo; 0.239 comes from a slip: used rock PGA instead of site amax.",
              "miss": "Check the step that produced your value — 0.338 is what you get if you omitted rd. The correct result is 0.319.",
              "fepe": "Reference: FHWA-NHI-11-032 (GEC 3) Eq. 6-16, §6.4 Simplified Procedure; rd relation (Liao & Whitman) in GEC 3",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-16-csr-simplified.pdf"
            },
            {
              "id": "gpeyt1-17",
              "type": "mcq",
              "pe": true,
              "label": "FS against liquefaction",
              "given": "CSR = 0.65 (amax/g)(σvo/σ′vo) rd; FSL = (CRR7.5 · MSF · Kσ)/CSR",
              "vignette": "A silty sand layer (FC = 12%) at 18 ft has a clean-sand-equivalent (N1)60cs = 13, giving CRR(M7.5) = 0.17 from the base curve. The design event is Mw = 6.75 with amax = 0.28g; the magnitude scaling factor for that event is MSF = 1.19. Kσ = 1.0. Water table 8 ft; γ = 115 pcf above, γsat = 122 pcf below. Use rd = 1 − 0.00233z.",
              "stem": "Most nearly, the factor of safety against liquefaction is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.69"
                },
                {
                  "id": "b",
                  "text": "1.22"
                },
                {
                  "id": "c",
                  "text": "1.16"
                },
                {
                  "id": "d",
                  "text": "0.82",
                  "correct": true
                }
              ],
              "work": [
                "σvo = 8(115) + 10(122) = 2,140 psf; σ′vo = 1,516 psf",
                "rd = 0.9581; CSR = 0.65×0.28×1.412×0.9581 = 0.246",
                "FSL = 0.17×1.19×1.0/0.246 = 0.82 (<1 → liquefiable)",
                "Near-miss values: 0.69 comes from a slip: omitted MSF; 1.22 comes from a slip: inverted FS (CSR/CRR); 1.16 comes from a slip: used total stress for σ′vo (ratio = 1)."
              ],
              "explanation": "0.82 is correct. Method: CSR = 0.65 (amax/g)(σvo/σ′vo) rd; FSL = (CRR7.5 · MSF · Kσ)/CSR. Distractors: 0.69 comes from a slip: omitted MSF; 1.22 comes from a slip: inverted FS (CSR/CRR); 1.16 comes from a slip: used total stress for σ′vo (ratio = 1).",
              "miss": "Check the step that produced your value — 0.69 is what you get if you omitted MSF. The correct result is 0.82.",
              "fepe": "Reference: FHWA-NHI-11-032 (GEC 3) Ch. 6 Eq. 6-16 and FS definition, MSF discussion",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-17-fs-liquefaction.pdf"
            },
            {
              "id": "gpeyt1-18",
              "type": "mcq",
              "pe": true,
              "label": "Mononobe–Okabe",
              "given": "Mononobe–Okabe with δ = 0, β = 0, i = 0: θ = tan⁻¹[kh/(1−kv)]; KAE = cos²(φ−θ)/{cos²θ [1 + √(sin φ sin(φ−θ)/cos θ)]²}; PAE = ½ KAE γ H² (1 − kv)",
              "vignette": "An 18 ft cantilever wall retains level, dry granular backfill (γ = 120 pcf, φ = 34°, c = 0). The back face is vertical and wall friction is neglected (δ = 0). Seismic design uses kh = 0.16, kv = 0. The wall has a 10 ft base and a 2 ft thick stem; passive resistance at the toe is ignored.",
              "stem": "Most nearly, the total (static + seismic) active thrust PAE is:",
              "choices": [
                {
                  "id": "a",
                  "text": "7,403 lb/ft",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "5,496 lb/ft"
                },
                {
                  "id": "c",
                  "text": "14,807 lb/ft"
                },
                {
                  "id": "d",
                  "text": "6,219 lb/ft"
                }
              ],
              "work": [
                "θ = tan⁻¹(0.16) = 9.09°",
                "KAE = cos²(34−9.09)/{cos²(9.09)[1+√(sin34·sin24.91/cos9.09)]²} = 0.381",
                "(static Ka = 0.283)",
                "PAE = ½(0.381)(120)(18)² = 7,403 lb/ft",
                "Near-miss values: 5,496 lb/ft comes from a slip: used static Rankine Ka; 14,807 lb/ft comes from a slip: forgot the ½; 6,219 lb/ft comes from a slip: multiplied by (1 − kh) instead of (1 − kv)."
              ],
              "explanation": "7,403 lb/ft is correct. Method: Mononobe–Okabe with δ = 0, β = 0, i = 0: θ = tan⁻¹[kh/(1−kv)]; KAE = cos²(φ−θ)/{cos²θ [1 + √(sin φ sin(φ−θ)/cos θ)]²}; PAE = ½ KAE γ H² (1 − kv). Distractors: 5,496 lb/ft comes from a slip: used static Rankine Ka; 14,807 lb/ft comes from a slip: forgot the ½; 6,219 lb/ft comes from a slip: multiplied by (1 − kh) instead of (1 − kv).",
              "miss": "Check the step that produced your value — 5,496 lb/ft is what you get if you used static Rankine Ka. The correct result is 7,403 lb/ft.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.1.5 Pseudostatic Analysis and Earthquake Loads (Mononobe–Okabe), p. 79; GEC 3 §11.3.1",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-18-mononobe-okabe.pdf"
            },
            {
              "id": "gpeyt1-19",
              "type": "mcq",
              "pe": true,
              "label": "Pseudostatic rock slope",
              "given": "FS = [cL + (W cos α − kW sin α − PWR − PWJ sin α) tan φ]/(W sin α + kW cos α + PWJ cos α); PWR = PWJ = 0 when drained",
              "vignette": "A highway rock cut has a daylighting planar joint dipping α = 35° with length L = 60 ft along the joint per ft of cut. The sliding block weighs W = 180,000 lb/ft. Joint strength: c = 500 psf, φ = 30°. The slope is fully drained (no water in the tension crack or on the joint). For seismic screening use k = 0.15. The rock unit weight is 160 pcf and RQD is 72% (not needed).",
              "stem": "Most nearly, the pseudostatic factor of safety is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.12"
                },
                {
                  "id": "b",
                  "text": "0.85",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "0.92"
                },
                {
                  "id": "d",
                  "text": "1.18"
                }
              ],
              "work": [
                "cL = 500×60 = 30,000 lb/ft",
                "Normal: W cos α − kW sin α = 147,447 − 15,487 = 131,961 lb/ft",
                "Resisting = 30,000 + 131,961×tan30 = 106,188",
                "Driving = W sin α + kW cos α = 125,361",
                "FS = 0.85 (static 1.12)",
                "Near-miss values: 1.12 comes from a slip: static FS (dropped k); 0.92 comes from a slip: added k only to the driving side; 1.18 comes from a slip: inverted FS."
              ],
              "explanation": "0.85 is correct. Method: FS = [cL + (W cos α − kW sin α − PWR − PWJ sin α) tan φ]/(W sin α + kW cos α + PWJ cos α); PWR = PWJ = 0 when drained. Distractors: 1.12 comes from a slip: static FS (dropped k); 0.92 comes from a slip: added k only to the driving side; 1.18 comes from a slip: inverted FS.",
              "miss": "Check the step that produced your value — 1.12 is what you get if you static FS (dropped k). The correct result is 0.85.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.6.3 Rock Slope Failure (Stability of Rock Slope figure), p. 104",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-19-rock-wedge-seismic.pdf"
            },
            {
              "id": "gpeyt1-20",
              "type": "mcq",
              "pe": true,
              "label": "Pseudostatic infinite slope",
              "given": "Static infinite slope (ru = 0): F = tan φ′/tan β. Resolve W and khW parallel/normal to the slip plane: F = (cos β − kh sin β) tan φ′/(sin β + kh cos β)",
              "vignette": "A long, dry, cohesionless fill slope is inclined at β = 24° (about 2.25H:1V) with φ′ = 36°, γ = 120 pcf. A shallow failure surface parallel to the slope at 6 ft depth is being checked. The seismic coefficient is kh = 0.12 applied horizontally (out of slope) at the block's center of mass. No pore pressure.",
              "stem": "Most nearly, the pseudostatic factor of safety is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.63"
                },
                {
                  "id": "b",
                  "text": "1.46"
                },
                {
                  "id": "c",
                  "text": "1.35"
                },
                {
                  "id": "d",
                  "text": "1.22",
                  "correct": true
                }
              ],
              "work": [
                "Static F = tan36/tan24 = 1.63",
                "Normal (per W): cos24 − 0.12 sin24 = 0.8647",
                "Driving (per W): sin24 + 0.12 cos24 = 0.5164",
                "F = 0.8647×tan36/0.5164 = 1.22 (depth and γ cancel)",
                "Near-miss values: 1.63 comes from a slip: static FS only; 1.46 comes from a slip: divided static FS by (1 + kh); 1.35 comes from a slip: added kh·sin β to the normal force (wrong sign)."
              ],
              "explanation": "1.22 is correct. Method: Static infinite slope (ru = 0): F = tan φ′/tan β. Resolve W and khW parallel/normal to the slip plane: F = (cos β − kh sin β) tan φ′/(sin β + kh cos β). Distractors: 1.63 comes from a slip: static FS only; 1.46 comes from a slip: divided static FS by (1 + kh); 1.35 comes from a slip: added kh·sin β to the normal force (wrong sign).",
              "miss": "Check the step that produced your value — 1.63 is what you get if you static FS only. The correct result is 1.22.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.6.4 Infinite Slope, p. 105; pseudostatic resolution as in §3.6.3 (kW terms); GEC 3 Ch. 7",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-20-pseudostatic-infinite-slope.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "gpeyt1-t5-bench",
      "title": "PE bench · YT calc · 5. Earth Structures, Ground Improvement & Pavements",
      "topic": 5,
      "bench": true,
      "blurb": "Long multi-step PE calculations — Earth Structures, Ground Improvement & Pavements.",
      "lessons": [
        {
          "id": "gpeyt1-t5-pe",
          "title": "Earth Structures, Ground Improvement & Pavements · long calcs",
          "minutes": 35,
          "xp": 45,
          "summary": "Five long PE-depth calculations on earth structures, ground improvement & pavements.",
          "items": [
            {
              "id": "gpeyt1-21",
              "type": "mcq",
              "pe": true,
              "label": "Borrow quantity",
              "given": "Dry solids are conserved: Vborrow = Vfill × γd,fill / γd,borrow; γd = γ/(1 + w)",
              "vignette": "A highway embankment needs 85,000 yd³ of compacted fill at 95% of standard Proctor γd,max = 118.5 pcf. The borrow pit soil has an in-place moist unit weight of 112 pcf at w = 14%. The loose (truck) unit weight is 96 pcf and each truck carries 14 loose yd³. Ignore haul losses.",
              "stem": "Most nearly, the volume of borrow (bank measure) required is:",
              "choices": [
                {
                  "id": "a",
                  "text": "85,436 yd³"
                },
                {
                  "id": "b",
                  "text": "102,524 yd³"
                },
                {
                  "id": "c",
                  "text": "74,181 yd³"
                },
                {
                  "id": "d",
                  "text": "97,397 yd³",
                  "correct": true
                }
              ],
              "work": [
                "γd,fill = 0.95 × 118.5 = 112.6 pcf",
                "γd,borrow = 112/1.14 = 98.2 pcf",
                "Vborrow = 85,000 × 112.6/98.2 = 97,397 yd³",
                "Near-miss values: 85,436 yd³ comes from a slip: used moist borrow unit weight as dry; 102,524 yd³ comes from a slip: forgot the 95% factor; 74,181 yd³ comes from a slip: inverted the density ratio."
              ],
              "explanation": "97,397 yd³ is correct. Method: Dry solids are conserved: Vborrow = Vfill × γd,fill / γd,borrow; γd = γ/(1 + w). Distractors: 85,436 yd³ comes from a slip: used moist borrow unit weight as dry; 102,524 yd³ comes from a slip: forgot the 95% factor; 74,181 yd³ comes from a slip: inverted the density ratio.",
              "miss": "Check the step that produced your value — 85,436 yd³ is what you get if you used moist borrow unit weight as dry. The correct result is 97,397 yd³.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.8.3 Weight-Volume Relationships, p. 133; §2.3.1 earthwork unit weights (γB, γC)",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-21-borrow-volume.pdf"
            },
            {
              "id": "gpeyt1-22",
              "type": "mcq",
              "pe": true,
              "label": "Infinite slope with pore pressure",
              "given": "ru = u/(γz); F = [1 − ru(1 + tan²β)] tan φ′/tan β",
              "vignette": "A long natural hillside of residual silty sand slopes at β = 18°. A shallow slip surface parallel to the slope is suspected at z = 8 ft (vertical depth). γ = 122 pcf, c′ = 0, φ′ = 30°. During wet season a piezometer on the slip surface reads u = 280 psf. The road at the toe carries 2,000 vehicles/day.",
              "stem": "Most nearly, the factor of safety during the wet season is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.78"
                },
                {
                  "id": "b",
                  "text": "1.27"
                },
                {
                  "id": "c",
                  "text": "1.21",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "0.68"
                }
              ],
              "work": [
                "ru = 280/(122×8) = 0.287",
                "1 + tan²18 = 1.1056",
                "F = [1 − 0.287×1.1056] × tan30/tan18 = 0.6828 × 1.777 = 1.21",
                "Near-miss values: 1.78 comes from a slip: dry case (ignored u); 1.27 comes from a slip: omitted the (1 + tan²β) term; 0.68 comes from a slip: used γw instead of γ in ru."
              ],
              "explanation": "1.21 is correct. Method: ru = u/(γz); F = [1 − ru(1 + tan²β)] tan φ′/tan β. Distractors: 1.78 comes from a slip: dry case (ignored u); 1.27 comes from a slip: omitted the (1 + tan²β) term; 0.68 comes from a slip: used γw instead of γ in ru.",
              "miss": "Check the step that produced your value — 1.78 is what you get if you dry case (ignored u). The correct result is 1.21.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.6.4 Infinite Slope, p. 105",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-22-infinite-slope-ru.pdf"
            },
            {
              "id": "gpeyt1-23",
              "type": "mcq",
              "pe": true,
              "label": "Flexible pavement SN",
              "given": "SN = a1D1 + a2D2m2 + a3D3m3",
              "vignette": "An AASHTO 1993 flexible pavement design gives a required structural number SN = 4.6 for 8.2 million ESALs (R = 95%, S0 = 0.45, ΔPSI = 1.7, subgrade MR = 6,000 psi). Layers: 4.0 in. HMA (a1 = 0.44); crushed-stone base (a2 = 0.14, m2 = 1.0); 8.0 in. granular subbase (a3 = 0.11, m3 = 0.9).",
              "stem": "Most nearly, the minimum base thickness D2 is:",
              "choices": [
                {
                  "id": "a",
                  "text": "14.0 in."
                },
                {
                  "id": "b",
                  "text": "14.6 in.",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "20.3 in."
                },
                {
                  "id": "d",
                  "text": "16.3 in."
                }
              ],
              "work": [
                "a1D1 = 0.44×4.0 = 1.76",
                "a3D3m3 = 0.11×8.0×0.9 = 0.792",
                "D2 = (4.6 − 1.76 − 0.792)/(0.14×1.0) = 14.6 in. (round up in practice)",
                "Near-miss values: 14.0 in. comes from a slip: ignored the subbase drainage coefficient m3; 20.3 in. comes from a slip: forgot the subbase contribution; 16.3 in. comes from a slip: applied m3 = 0.9 to the base instead."
              ],
              "explanation": "14.6 in. is correct. Method: SN = a1D1 + a2D2m2 + a3D3m3. Distractors: 14.0 in. comes from a slip: ignored the subbase drainage coefficient m3; 20.3 in. comes from a slip: forgot the subbase contribution; 16.3 in. comes from a slip: applied m3 = 0.9 to the base instead.",
              "miss": "Check the step that produced your value — 14.0 in. is what you get if you ignored the subbase drainage coefficient m3. The correct result is 14.6 in..",
              "fepe": "Reference: FHWA NHI-05-037 Geotechnical Aspects of Pavements, Eq. 5.40 (SN = a1D1 + a2D2m2 + a3D3m3); NCEES PE Civil Reference Handbook v2.1 §3.19 Pavements",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-23-pavement-sn-base.pdf"
            },
            {
              "id": "gpeyt1-24",
              "type": "mcq",
              "pe": true,
              "label": "Geotextile wall spacing",
              "given": "σh = Ka γ Z + Ka q; Tallow = Tult/ΠRF; Sv = Tallow/(σh · FS); Ka = tan²(45 − φ/2)",
              "vignette": "A 16 ft geotextile-wrapped reinforced wall retains granular backfill (γ = 120 pcf, φ = 32°). A uniform surcharge q = 250 psf acts on top (no live point loads). The geotextile has wide-width Tult = 2,400 lb/ft and cumulative reduction factors ΠRF = 2.6. Use FS = 1.5 on reinforcement. Check the bottom layer at Z = 16 ft. Facing batter is vertical; foundation is dense gravel.",
              "stem": "Most nearly, the maximum vertical spacing of the bottom layer is:",
              "choices": [
                {
                  "id": "a",
                  "text": "2.40 ft"
                },
                {
                  "id": "b",
                  "text": "1.04 ft"
                },
                {
                  "id": "c",
                  "text": "0.09 ft"
                },
                {
                  "id": "d",
                  "text": "0.92 ft",
                  "correct": true
                }
              ],
              "work": [
                "Ka = tan²(45 − 32/2) = 0.307",
                "σh = 0.307×120×16 + 0.307×250 = 667 psf",
                "Tallow = 2,400/2.6 = 923 lb/ft",
                "Sv = 923/(667×1.5) = 0.92 ft (≈ 11 in.)",
                "Near-miss values: 2.40 ft comes from a slip: used Tult without reduction factors; 1.04 ft comes from a slip: omitted the surcharge pressure; 0.09 ft comes from a slip: used Kp in place of Ka."
              ],
              "explanation": "0.92 ft is correct. Method: σh = Ka γ Z + Ka q; Tallow = Tult/ΠRF; Sv = Tallow/(σh · FS); Ka = tan²(45 − φ/2). Distractors: 2.40 ft comes from a slip: used Tult without reduction factors; 1.04 ft comes from a slip: omitted the surcharge pressure; 0.09 ft comes from a slip: used Kp in place of Ka.",
              "miss": "Check the step that produced your value — 2.40 ft is what you get if you used Tult without reduction factors. The correct result is 0.92 ft.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.13.5.1 Geotextile-Reinforced Walls, p. 170",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-24-geotextile-wall-sv.pdf"
            },
            {
              "id": "gpeyt1-25",
              "type": "mcq",
              "pe": true,
              "label": "Geotextile length",
              "given": "σh = Ka(γZ + q); Le = Sv σh FS/[2(ca + γZ tan δ)]; LR = (H − Z) tan(45 − φ/2)",
              "vignette": "Same 16 ft geotextile wall: γ = 120 pcf, φ = 32°, q = 250 psf, FS = 1.5. Design a layer at Z = 4 ft below the top with Sv = 2.0 ft. Interface friction δ = ⅔φ, ca = 0. Wall length L = Le + LR (LR measured from the face to the Rankine plane).",
              "stem": "Most nearly, the total geotextile length L at Z = 4 ft is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.8 ft"
                },
                {
                  "id": "b",
                  "text": "10.2 ft"
                },
                {
                  "id": "c",
                  "text": "4.0 ft"
                },
                {
                  "id": "d",
                  "text": "8.4 ft",
                  "correct": true
                }
              ],
              "work": [
                "σh = 0.307(120×4 + 250) = 224 psf",
                "δ = 21.33°; Le = 2.0×224×1.5/[2×120×4×tan21.33] = 1.79 ft",
                "LR = (16 − 4) tan(45 − 16) = 6.65 ft",
                "L = 1.79 + 6.65 = 8.4 ft (a practical minimum length would also be checked)",
                "Near-miss values: 1.8 ft comes from a slip: reported Le only (forgot LR); 10.2 ft comes from a slip: used one face of friction (dropped the 2); 4.0 ft comes from a slip: measured LR with Z instead of H − Z."
              ],
              "explanation": "8.4 ft is correct. Method: σh = Ka(γZ + q); Le = Sv σh FS/[2(ca + γZ tan δ)]; LR = (H − Z) tan(45 − φ/2). Distractors: 1.8 ft comes from a slip: reported Le only (forgot LR); 10.2 ft comes from a slip: used one face of friction (dropped the 2); 4.0 ft comes from a slip: measured LR with Z instead of H − Z.",
              "miss": "Check the step that produced your value — 1.8 ft is what you get if you reported Le only (forgot LR). The correct result is 8.4 ft.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.13.5.1 Geotextile-Reinforced Walls, p. 170",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-25-geotextile-wall-length.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "gpeyt1-t6-bench",
      "title": "PE bench · YT calc · 6. Groundwater & Seepage",
      "topic": 6,
      "bench": true,
      "blurb": "Long multi-step PE calculations — Groundwater & Seepage.",
      "lessons": [
        {
          "id": "gpeyt1-t6-pe",
          "title": "Groundwater & Seepage · long calcs",
          "minutes": 35,
          "xp": 45,
          "summary": "Five long PE-depth calculations on groundwater & seepage.",
          "items": [
            {
              "id": "gpeyt1-26",
              "type": "mcq",
              "pe": true,
              "label": "Flow-net seepage",
              "given": "q = k H Nf/Nd per unit length; H = total head loss; 1 cm/s = 2,835 ft/day",
              "vignette": "A concrete diversion weir on a silty sand foundation (k = 2.5e-04 cm/s, isotropic) has headwater 34 ft and tailwater 6 ft above the foundation surface. A properly drawn flow net beneath the weir has Nf = 4 flow channels and Nd = 14 equipotential drops. The weir is 450 ft long. The sheet-pile cutoff is 20 ft deep and the sand is 45 ft thick.",
              "stem": "Most nearly, the total seepage under the weir is:",
              "choices": [
                {
                  "id": "a",
                  "text": "3,098 ft³/day"
                },
                {
                  "id": "b",
                  "text": "31,252 ft³/day"
                },
                {
                  "id": "c",
                  "text": "2,551 ft³/day",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "6 ft³/day"
                }
              ],
              "work": [
                "k = 2.5e-04 cm/s × 2,835 = 0.709 ft/day",
                "H = 34 − 6 = 28 ft",
                "q = 0.709 × 28 × 4/14 = 5.67 ft³/day/ft",
                "Q = 5.67 × 450 = 2,551 ft³/day",
                "Near-miss values: 3,098 ft³/day comes from a slip: used headwater depth instead of head difference; 31,252 ft³/day comes from a slip: inverted Nf/Nd; 6 ft³/day comes from a slip: reported per-foot flow (forgot length)."
              ],
              "explanation": "2,551 ft³/day is correct. Method: q = k H Nf/Nd per unit length; H = total head loss; 1 cm/s = 2,835 ft/day. Distractors: 3,098 ft³/day comes from a slip: used headwater depth instead of head difference; 31,252 ft³/day comes from a slip: inverted Nf/Nd; 6 ft³/day comes from a slip: reported per-foot flow (forgot length).",
              "miss": "Check the step that produced your value — 3,098 ft³/day is what you get if you used headwater depth instead of head difference. The correct result is 2,551 ft³/day.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.16.4 Flow Nets, p. 190; §3.16.1 Darcy's Law",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-26-flow-net-dam.pdf"
            },
            {
              "id": "gpeyt1-27",
              "type": "mcq",
              "pe": true,
              "label": "Exit gradient / boiling",
              "given": "icr = γ′/γw; iexit = Δh/l; FS = icr/iexit; γw = 62.4 pcf",
              "vignette": "Inside a sheet-pile cofferdam excavated in fine sand (γsat = 124 pcf, Gs = 2.66, e = 0.62), a flow net shows the last equipotential square adjacent to the excavation floor has a head loss of Δh = 2.8 ft over a flow-path length of 4.5 ft. Total head difference across the cofferdam is 16 ft and the sheet piles are embedded 14 ft below the floor.",
              "stem": "Most nearly, the factor of safety against boiling at the exit is:",
              "choices": [
                {
                  "id": "a",
                  "text": "3.19"
                },
                {
                  "id": "b",
                  "text": "1.59",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "0.63"
                },
                {
                  "id": "d",
                  "text": "0.86"
                }
              ],
              "work": [
                "γ′ = 124 − 62.4 = 61.6 pcf → icr = 0.987",
                "(check: (Gs−1)/(1+e) = 1.025)",
                "iexit = 2.8/4.5 = 0.622",
                "FS = 0.987/0.622 = 1.59",
                "Near-miss values: 3.19 comes from a slip: used γsat/γw for icr; 0.63 comes from a slip: inverted FS; 0.86 comes from a slip: used total head/embedment as the exit gradient."
              ],
              "explanation": "1.59 is correct. Method: icr = γ′/γw; iexit = Δh/l; FS = icr/iexit; γw = 62.4 pcf. Distractors: 3.19 comes from a slip: used γsat/γw for icr; 0.63 comes from a slip: inverted FS; 0.86 comes from a slip: used total head/embedment as the exit gradient.",
              "miss": "Check the step that produced your value — 3.19 is what you get if you used γsat/γw for icr. The correct result is 1.59.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.16.3 Flow Through Soil / §3.16.4 Flow Nets, pp. 188–190",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-27-exit-gradient.pdf"
            },
            {
              "id": "gpeyt1-28",
              "type": "mcq",
              "pe": true,
              "label": "Unconfined well (Thiem)",
              "given": "Unconfined (Dupuit–Thiem): Q = πK(h2² − h1²)/ln(r2/r1)",
              "vignette": "A fully penetrating dewatering well in an unconfined sand-and-gravel aquifer (K = 45 ft/day) resting on horizontal impermeable clay is pumped to steady state. Observation wells at r1 = 25 ft and r2 = 150 ft show saturated thicknesses (water level above the clay) of h1 = 38.0 ft and h2 = 41.5 ft. The well radius is 0.5 ft, the static saturated thickness was 44 ft, and the pump is set 5 ft above the clay.",
              "stem": "Most nearly, the pumping rate is:",
              "choices": [
                {
                  "id": "a",
                  "text": "50,551 ft³/day"
                },
                {
                  "id": "b",
                  "text": "21,954 ft³/day",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "967 ft³/day"
                },
                {
                  "id": "d",
                  "text": "43,908 ft³/day"
                }
              ],
              "work": [
                "h2² − h1² = 1722.25 − 1444.00 = 278.25 ft²",
                "ln(150/25) = 1.7918",
                "Q = π×45×278.25/1.7918 = 21,954 ft³/day (≈ 114 gpm)",
                "Near-miss values: 50,551 ft³/day comes from a slip: used log10; 967 ft³/day comes from a slip: squared the difference instead of differencing squares; 43,908 ft³/day comes from a slip: used 2π (confined form)."
              ],
              "explanation": "21,954 ft³/day is correct. Method: Unconfined (Dupuit–Thiem): Q = πK(h2² − h1²)/ln(r2/r1). Distractors: 50,551 ft³/day comes from a slip: used log10; 967 ft³/day comes from a slip: squared the difference instead of differencing squares; 43,908 ft³/day comes from a slip: used 2π (confined form).",
              "miss": "Check the step that produced your value — 50,551 ft³/day is what you get if you used log10. The correct result is 21,954 ft³/day.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §6.6.4 Well Analysis–Steady State (unconfined aquifer); §3.16.5 Construction Dewatering",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-28-unconfined-well.pdf"
            },
            {
              "id": "gpeyt1-29",
              "type": "mcq",
              "pe": true,
              "label": "Confined aquifer K",
              "given": "Confined: Q = 2πKb(h2 − h1)/ln(r2/r1); h2 − h1 = s1 − s2; 1 ft³ = 7.48 gal",
              "vignette": "A pumping test in a 30 ft thick confined sand aquifer (overlain by 22 ft of clay) runs at a steady 350 gpm. Drawdowns: 9.2 ft at r = 40 ft and 5.1 ft at r = 200 ft. The pumping well radius is 0.67 ft; the piezometric surface is 8 ft below grade before pumping.",
              "stem": "Most nearly, the hydraulic conductivity K is:",
              "choices": [
                {
                  "id": "a",
                  "text": "140 ft/day",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "61 ft/day"
                },
                {
                  "id": "c",
                  "text": "40 ft/day"
                },
                {
                  "id": "d",
                  "text": "281 ft/day"
                }
              ],
              "work": [
                "Q = 350 gpm / 7.48 × 1,440 = 67,380 ft³/day",
                "h2 − h1 = 9.2 − 5.1 = 4.1 ft",
                "K = 67,380 × ln(200/40) / (2π × 30 × 4.1) = 140.3 ft/day",
                "Near-miss values: 61 ft/day comes from a slip: used log10; 40 ft/day comes from a slip: added drawdowns; 281 ft/day comes from a slip: used π instead of 2π."
              ],
              "explanation": "140 ft/day is correct. Method: Confined: Q = 2πKb(h2 − h1)/ln(r2/r1); h2 − h1 = s1 − s2; 1 ft³ = 7.48 gal. Distractors: 61 ft/day comes from a slip: used log10; 40 ft/day comes from a slip: added drawdowns; 281 ft/day comes from a slip: used π instead of 2π.",
              "miss": "Check the step that produced your value — 61 ft/day is what you get if you used log10. The correct result is 140 ft/day.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §6.6.4 Well Analysis–Steady State (confined aquifer); UFC 3-220-05 Ch. 4",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-29-confined-pump-test.pdf"
            },
            {
              "id": "gpeyt1-30",
              "type": "mcq",
              "pe": true,
              "label": "Layered k (vertical)",
              "given": "kv,eq = ΣHi/Σ(Hi/ki); kh,eq = Σ(kiHi)/ΣHi",
              "vignette": "A 12 ft soil column beneath a detention pond consists of 4 ft of sand (k = 2×10⁻³ cm/s), 2 ft of silty clay (k = 5×10⁻⁶ cm/s), and 6 ft of silty sand (k = 8×10⁻⁴ cm/s), top to bottom. The total head loss across the column is 9 ft. Flow is vertical (downward).",
              "stem": "Most nearly, the equivalent vertical hydraulic conductivity is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.1e-03 cm/s"
                },
                {
                  "id": "b",
                  "text": "2.9e-05 cm/s",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "2.0e-04 cm/s"
                },
                {
                  "id": "d",
                  "text": "5.0e-06 cm/s"
                }
              ],
              "work": [
                "Σ Hi/ki = 4/2e-3 + 2/5e-6 + 6/8e-4 = 409,500 ft·s/cm",
                "kv = 12/409,500 = 2.93e-05 cm/s",
                "(kh = 1.07e-03 cm/s for comparison; clay layer controls vertical flow)",
                "Near-miss values: 1.1e-03 cm/s comes from a slip: used the horizontal (arithmetic) average; 2.0e-04 cm/s comes from a slip: used a geometric mean; 5.0e-06 cm/s comes from a slip: took the clay k alone."
              ],
              "explanation": "2.9e-05 cm/s is correct. Method: kv,eq = ΣHi/Σ(Hi/ki); kh,eq = Σ(kiHi)/ΣHi. Distractors: 1.1e-03 cm/s comes from a slip: used the horizontal (arithmetic) average; 2.0e-04 cm/s comes from a slip: used a geometric mean; 5.0e-06 cm/s comes from a slip: took the clay k alone.",
              "miss": "Check the step that produced your value — 1.1e-03 cm/s is what you get if you used the horizontal (arithmetic) average. The correct result is 2.9e-05 cm/s.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.16.3 Flow Through Soil (layered/equivalent k), p. 188",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-30-layered-kv.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "gpeyt1-t7-bench",
      "title": "PE bench · YT calc · 7. Problematic Soil & Rock Conditions",
      "topic": 7,
      "bench": true,
      "blurb": "Long multi-step PE calculations — Problematic Soil & Rock Conditions.",
      "lessons": [
        {
          "id": "gpeyt1-t7-pe",
          "title": "Problematic Soil & Rock Conditions · long calcs",
          "minutes": 35,
          "xp": 45,
          "summary": "Five long PE-depth calculations on problematic soil & rock conditions.",
          "items": [
            {
              "id": "gpeyt1-31",
              "type": "mcq",
              "pe": true,
              "label": "Corrosion allowance",
              "given": "x = K tⁿ (μm); carbon steel n = 0.80, K = 40 (avg) / 80 (max); 1,000 μm = 1 mm = 0.039 in.",
              "vignette": "Uncoated carbon-steel H-piles will be driven through a fill with field resistivity 1,500 Ω·cm (pH 5.8, sulfates 400 ppm) for a bridge with a 75-year design life. The owner requires the maximum (conservative) loss rate per face. Flange thickness is 0.61 in.",
              "stem": "Most nearly, the sacrificial thickness loss per exposed face over the design life is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.099 in.",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "0.049 in."
                },
                {
                  "id": "c",
                  "text": "0.016 in."
                },
                {
                  "id": "d",
                  "text": "0.187 in."
                }
              ],
              "work": [
                "1,500 Ω·cm → corrosive (700–2,000) per resistivity table",
                "x = 80 × 75^0.80 = 2,530 μm",
                "= 2.53 mm × 0.039 = 0.099 in. per face",
                "Near-miss values: 0.049 in. comes from a slip: used the average K = 40; 0.016 in. comes from a slip: used galvanized-steel constants; 0.187 in. comes from a slip: multiplied t by n instead of raising to n."
              ],
              "explanation": "0.099 in. is correct. Method: x = K tⁿ (μm); carbon steel n = 0.80, K = 40 (avg) / 80 (max); 1,000 μm = 1 mm = 0.039 in.. Distractors: 0.049 in. comes from a slip: used the average K = 40; 0.016 in. comes from a slip: used galvanized-steel constants; 0.187 in. comes from a slip: multiplied t by n instead of raising to n.",
              "miss": "Check the step that produced your value — 0.049 in. is what you get if you used the average K = 40. The correct result is 0.099 in..",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.17.1 Reactive and Corrosive Soils (resistivity table), p. 197; §3.17.2 Corrosion of Buried Steel, p. 198",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-31-buried-steel-loss.pdf"
            },
            {
              "id": "gpeyt1-32",
              "type": "mcq",
              "pe": true,
              "label": "Rock slope with joint water",
              "given": "FS = [cL + (W cos α − PWR − PWJ sin α) tan φ]/(W sin α + PWJ cos α); PWJ = ½γw hw²; PWR = ½γw hw L",
              "vignette": "A sandstone cut contains a planar bedding joint dipping α = 38° (length L = 55 ft) and a vertical tension crack behind the crest. After a storm the tension crack fills to hw = 18 ft with water that drains along the joint to the face. Block weight W = 210,000 lb/ft. Joint c = 300 psf, φ = 32°. No seismic load. Rock RMR = 58 (fair).",
              "stem": "Most nearly, the factor of safety with the crack full of water is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.93"
                },
                {
                  "id": "b",
                  "text": "0.85"
                },
                {
                  "id": "c",
                  "text": "0.78"
                },
                {
                  "id": "d",
                  "text": "0.70",
                  "correct": true
                }
              ],
              "work": [
                "PWJ = ½(62.4)(18)² = 10,109 lb/ft",
                "PWR = ½(62.4)(18)(55) = 30,888 lb/ft",
                "N′ = 165,482 − 30,888 − 6,224 = 128,371",
                "Resisting = 16,500 + N′ tan32 = 96,715",
                "Driving = 129,289 + 7,966 = 137,255",
                "FS = 0.70 (dry 0.93)",
                "Near-miss values: 0.93 comes from a slip: ignored water forces; 0.85 comes from a slip: omitted uplift PWR on the joint; 0.78 comes from a slip: omitted the tension-crack force PWJ."
              ],
              "explanation": "0.70 is correct. Method: FS = [cL + (W cos α − PWR − PWJ sin α) tan φ]/(W sin α + PWJ cos α); PWJ = ½γw hw²; PWR = ½γw hw L. Distractors: 0.93 comes from a slip: ignored water forces; 0.85 comes from a slip: omitted uplift PWR on the joint; 0.78 comes from a slip: omitted the tension-crack force PWJ.",
              "miss": "Check the step that produced your value — 0.93 is what you get if you ignored water forces. The correct result is 0.70.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.6.3 Rock Slope Failure, p. 104",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-32-rock-slope-water.pdf"
            },
            {
              "id": "gpeyt1-33",
              "type": "mcq",
              "pe": true,
              "label": "Galvanized coating life",
              "given": "x = K tⁿ; galvanized: n = 0.65, K = 25 (avg) / 50 (max) μm",
              "vignette": "MSE wall steel strips are hot-dip galvanized with a 86 μm zinc coating. Backfill resistivity tests average 4,200 Ω·cm, pH 7.1, chlorides 60 ppm. Estimate how long the zinc lasts using the AVERAGE galvanized loss constants before the base steel starts to corrode.",
              "stem": "Most nearly, the zinc coating life is:",
              "choices": [
                {
                  "id": "a",
                  "text": "7 years",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "2 years"
                },
                {
                  "id": "c",
                  "text": "5 years"
                },
                {
                  "id": "d",
                  "text": "3 years"
                }
              ],
              "work": [
                "4,200 Ω·cm → moderately corrosive (2,000–5,000)",
                "t = (x/K)^(1/n) = (86/25)^(1/0.65) = 3.44^1.538 = 6.7 yr",
                "Near-miss values: 2 years comes from a slip: used the maximum K = 50; 5 years comes from a slip: divided by n instead of taking the 1/n root; 3 years comes from a slip: used carbon-steel constants."
              ],
              "explanation": "7 years is correct. Method: x = K tⁿ; galvanized: n = 0.65, K = 25 (avg) / 50 (max) μm. Distractors: 2 years comes from a slip: used the maximum K = 50; 5 years comes from a slip: divided by n instead of taking the 1/n root; 3 years comes from a slip: used carbon-steel constants.",
              "miss": "Check the step that produced your value — 2 years is what you get if you used the maximum K = 50. The correct result is 7 years.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.17.1–3.17.2, pp. 197–198",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-33-zinc-coating-life.pdf"
            },
            {
              "id": "gpeyt1-34",
              "type": "mcq",
              "pe": true,
              "label": "Collapsible soil settlement",
              "given": "ΔH = H Δe/(1 + e0)",
              "vignette": "A 9 ft thick layer of dry loess will support a spread-footing warehouse. A double-oedometer test on a sample from mid-layer (initial e0 = 0.98) shows: under the design stress (dry) e = 0.94; after inundation at that same stress e = 0.83. Natural w = 6%, γd = 86 pcf. The owner asks how much additional settlement occurs if lawn irrigation wets the layer after construction.",
              "stem": "Most nearly, the collapse settlement caused by wetting is:",
              "choices": [
                {
                  "id": "a",
                  "text": "8.2 in."
                },
                {
                  "id": "b",
                  "text": "11.9 in."
                },
                {
                  "id": "c",
                  "text": "6.0 in.",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "0.5 in."
                }
              ],
              "work": [
                "Δe (collapse) = 0.94 − 0.83 = 0.11",
                "ΔH = 9 × 0.11/(1 + 0.98) = 0.500 ft = 6.0 in.",
                "Near-miss values: 8.2 in. comes from a slip: included the dry load-compression as collapse; 11.9 in. comes from a slip: forgot to divide by (1 + e0); 0.5 in. comes from a slip: left the answer in feet labeled inches."
              ],
              "explanation": "6.0 in. is correct. Method: ΔH = H Δe/(1 + e0). Distractors: 8.2 in. comes from a slip: included the dry load-compression as collapse; 11.9 in. comes from a slip: forgot to divide by (1 + e0); 0.5 in. comes from a slip: left the answer in feet labeled inches.",
              "miss": "Check the step that produced your value — 8.2 in. is what you get if you included the dry load-compression as collapse. The correct result is 6.0 in..",
              "fepe": "Reference: Vandevelde, ASCE PE Review — Foundation Engineering (S = HΔe/(1+e0) worked example); NCEES PE Civil Reference Handbook v2.1 §3.2 Consolidation (strain form)",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-34-collapse-wetting.pdf"
            },
            {
              "id": "gpeyt1-35",
              "type": "mcq",
              "pe": true,
              "label": "Secondary compression (organic)",
              "given": "Ss = Cα H0 Δlog t (Cα in strain form)",
              "vignette": "A 14 ft layer of organic silt (OH, organic content 14%) under a preloaded embankment reaches the end of primary consolidation at t = 1.8 years. The strain-based coefficient of secondary compression is Cα = 0.012. The design life of the roadway is 40 years from construction. Primary settlement was 22 in.",
              "stem": "Most nearly, the secondary settlement from end of primary to end of design life is:",
              "choices": [
                {
                  "id": "a",
                  "text": "3.2 in."
                },
                {
                  "id": "b",
                  "text": "6.3 in."
                },
                {
                  "id": "c",
                  "text": "1.0 in."
                },
                {
                  "id": "d",
                  "text": "2.7 in.",
                  "correct": true
                }
              ],
              "work": [
                "Δlog t = log(40/1.8) = 1.3468",
                "Ss = 0.012 × 14 × 1.3468 = 0.2263 ft = 2.7 in.",
                "Near-miss values: 3.2 in. comes from a slip: used log t2 (started the clock at 1 yr); 6.3 in. comes from a slip: used natural log; 1.0 in. comes from a slip: divided by (1 + e0) again although Cα is in strain form."
              ],
              "explanation": "2.7 in. is correct. Method: Ss = Cα H0 Δlog t (Cα in strain form). Distractors: 3.2 in. comes from a slip: used log t2 (started the clock at 1 yr); 6.3 in. comes from a slip: used natural log; 1.0 in. comes from a slip: divided by (1 + e0) again although Cα is in strain form.",
              "miss": "Check the step that produced your value — 3.2 in. is what you get if you used log t2 (started the clock at 1 yr). The correct result is 2.7 in..",
              "fepe": "Reference: Vandevelde, ASCE PE Review — Foundation Engineering (Ss = Cα H0 Δlog t)",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-35-secondary-organic.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "gpeyt1-t8-bench",
      "title": "PE bench · YT calc · 8. Retaining Structures",
      "topic": 8,
      "bench": true,
      "blurb": "Long multi-step PE calculations — Retaining Structures.",
      "lessons": [
        {
          "id": "gpeyt1-t8-pe",
          "title": "Retaining Structures · long calcs",
          "minutes": 35,
          "xp": 45,
          "summary": "Five long PE-depth calculations on retaining structures.",
          "items": [
            {
              "id": "gpeyt1-36",
              "type": "mcq",
              "pe": true,
              "label": "Rankine thrust with water table",
              "given": "Ka = tan²(45 − φ/2); σ′h = Ka σ′v; u = γw hw; P = area of pressure diagram",
              "vignette": "A 22 ft high vertical-backed wall retains level granular backfill (c = 0, φ = 32°). Because the weep holes are clogged, a water table has built up 8 ft below the top of the backfill. γ = 118 pcf above the water table, γsat = 126 pcf below. Ignore wall friction; the wall moves enough to mobilize active pressure. The concrete stem is 18 in. thick.",
              "stem": "Most nearly, the total horizontal force (soil + water) per foot of wall is:",
              "choices": [
                {
                  "id": "a",
                  "text": "7,136 lb/ft"
                },
                {
                  "id": "b",
                  "text": "13,251 lb/ft",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "9,015 lb/ft"
                },
                {
                  "id": "d",
                  "text": "8,774 lb/ft"
                }
              ],
              "work": [
                "Ka = 0.3073",
                "σ′h at 8 ft = 0.3073×118×8 = 290 psf",
                "σ′h at 22 ft = 290 + 0.3073×63.6×14 = 564 psf",
                "Soil: ½(290)(8) + 290(14) + ½(274)(14) = 7,136 lb/ft",
                "Water: ½(62.4)(14)² = 6,115 lb/ft",
                "Total = 13,251 lb/ft",
                "Near-miss values: 7,136 lb/ft comes from a slip: forgot the water pressure; 9,015 lb/ft comes from a slip: used γsat (total) below the WT and no separate water; 8,774 lb/ft comes from a slip: treated the backfill as dry."
              ],
              "explanation": "13,251 lb/ft is correct. Method: Ka = tan²(45 − φ/2); σ′h = Ka σ′v; u = γw hw; P = area of pressure diagram. Distractors: 7,136 lb/ft comes from a slip: forgot the water pressure; 9,015 lb/ft comes from a slip: used γsat (total) below the WT and no separate water; 8,774 lb/ft comes from a slip: treated the backfill as dry.",
              "miss": "Check the step that produced your value — 7,136 lb/ft is what you get if you forgot the water pressure. The correct result is 13,251 lb/ft.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.1.2 Rankine Earth Coefficients, p. 72",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-36-wall-water-table.pdf"
            },
            {
              "id": "gpeyt1-37",
              "type": "mcq",
              "pe": true,
              "label": "Overturning FS",
              "given": "Ka = tan²(45 − φ/2); Pa = ½KaγH² at H/3; FSOT = ΣMresisting/ΣMoverturning about the toe",
              "vignette": "A 12 ft tall plain-concrete gravity wall (γc = 150 pcf) has a vertical back face and a battered front face. Crest width 2 ft, base width 7 ft (toe at the front). Backfill is level, dry sand: γ = 120 pcf, φ = 30°, c = 0, no wall friction. Passive resistance in front is neglected. The foundation is dense gravel with δ = 28°.",
              "stem": "Most nearly, the factor of safety against overturning is:",
              "choices": [
                {
                  "id": "a",
                  "text": "2.12"
                },
                {
                  "id": "b",
                  "text": "0.96"
                },
                {
                  "id": "c",
                  "text": "3.18",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "1.59"
                }
              ],
              "work": [
                "Ka = 1/3; Pa = ½(1/3)(120)(12)² = 2,880 lb/ft at 4.0 ft",
                "Rectangle (back): W1 = 2×12×150 = 3,600 lb at 6.00 ft from toe",
                "Triangle (front): W2 = ½×5×12×150 = 4,500 lb at 3.33 ft",
                "MR = 36,600; MO = 2,880×4.0 = 11,520 ft-lb/ft",
                "FSOT = 3.18",
                "Near-miss values: 2.12 comes from a slip: applied Pa at H/2; 0.96 comes from a slip: took moments about the heel-side distances (wrong lever arms); 1.59 comes from a slip: forgot the ½ in Pa."
              ],
              "explanation": "3.18 is correct. Method: Ka = tan²(45 − φ/2); Pa = ½KaγH² at H/3; FSOT = ΣMresisting/ΣMoverturning about the toe. Distractors: 2.12 comes from a slip: applied Pa at H/2; 0.96 comes from a slip: took moments about the heel-side distances (wrong lever arms); 1.59 comes from a slip: forgot the ½ in Pa.",
              "miss": "Check the step that produced your value — 2.12 is what you get if you applied Pa at H/2. The correct result is 3.18.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.1.2 Rankine; §3.18 / wall stability figures (moments about toe), p. 209",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-37-gravity-wall-overturning.pdf"
            },
            {
              "id": "gpeyt1-38",
              "type": "mcq",
              "pe": true,
              "label": "Sliding FS with passive",
              "given": "FSs = [(ΣV) tan δb + ca B + Pp]/Ph; Kp = tan²(45 + φ/2); Pp = ½Kpγ Df²",
              "vignette": "A cantilever wall has total vertical load (concrete + soil on heel) ΣV = 15,400 lb/ft and horizontal active thrust Ph = 6,200 lb/ft. The base is 9 ft wide and cast on sand with base friction δb = 26° (ca = 0). Soil in front of the toe is 3 ft deep (γ = 120 pcf, φ = 30°) and the designer will count full Rankine passive resistance on the toe. Overturning FS was already checked at 2.4.",
              "stem": "Most nearly, the factor of safety against sliding is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1.21"
                },
                {
                  "id": "b",
                  "text": "1.47",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "1.24"
                },
                {
                  "id": "d",
                  "text": "1.73"
                }
              ],
              "work": [
                "Base friction = 15,400 × tan26 = 7,511 lb/ft",
                "Kp = 3.00; Pp = ½(3.00)(120)(3)² = 1,620 lb/ft",
                "FSs = (7,511 + 1,620)/6,200 = 1.47",
                "Near-miss values: 1.21 comes from a slip: ignored passive resistance; 1.24 comes from a slip: used Ka instead of Kp in front; 1.73 comes from a slip: forgot the ½ in Pp."
              ],
              "explanation": "1.47 is correct. Method: FSs = [(ΣV) tan δb + ca B + Pp]/Ph; Kp = tan²(45 + φ/2); Pp = ½Kpγ Df². Distractors: 1.21 comes from a slip: ignored passive resistance; 1.24 comes from a slip: used Ka instead of Kp in front; 1.73 comes from a slip: forgot the ½ in Pp.",
              "miss": "Check the step that produced your value — 1.21 is what you get if you ignored passive resistance. The correct result is 1.47.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 Factor of Safety against Sliding (cantilever/counterfort wall figure), p. 209; §3.1.2 Rankine",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-38-wall-sliding-passive.pdf"
            },
            {
              "id": "gpeyt1-39",
              "type": "mcq",
              "pe": true,
              "label": "Uniform surcharge thrust",
              "given": "σh = Ka(q + γz); Pq = KaqH at H/2; Ps = ½KaγH² at H/3",
              "vignette": "A 16 ft basement-type wall that can yield to the active state retains dry, level silty sand (γ = 115 pcf, φ = 30°, c = 0). A uniform surcharge of q = 400 psf from a parking area acts over the full backfill. No water; ignore wall friction. The designer needs the total thrust and its height above the base for the moment check.",
              "stem": "Most nearly, the total thrust and its height above the base are:",
              "choices": [
                {
                  "id": "a",
                  "text": "7,040 lb/ft at 6.1 ft",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "7,040 lb/ft at 5.3 ft"
                },
                {
                  "id": "c",
                  "text": "11,307 lb/ft at 6.8 ft"
                },
                {
                  "id": "d",
                  "text": "5,973 lb/ft at 5.3 ft"
                }
              ],
              "work": [
                "Ka = 1/3",
                "Pq = (1/3)(400)(16) = 2,133 lb/ft at 8 ft",
                "Ps = ½(1/3)(115)(16)² = 4,907 lb/ft at 5.33 ft",
                "P = 7,040 lb/ft; ȳ = (2,133×8 + 4,907×5.33)/7,040 = 6.14 ft",
                "Near-miss values: 7,040 lb/ft at 5.3 ft comes from a slip: placed the whole resultant at H/3; 11,307 lb/ft at 6.8 ft comes from a slip: applied full q (forgot Ka on the surcharge); 5,973 lb/ft at 5.3 ft comes from a slip: treated the surcharge as triangular."
              ],
              "explanation": "7,040 lb/ft at 6.1 ft is correct. Method: σh = Ka(q + γz); Pq = KaqH at H/2; Ps = ½KaγH² at H/3. Distractors: 7,040 lb/ft at 5.3 ft comes from a slip: placed the whole resultant at H/3; 11,307 lb/ft at 6.8 ft comes from a slip: applied full q (forgot Ka on the surcharge); 5,973 lb/ft at 5.3 ft comes from a slip: treated the surcharge as triangular.",
              "miss": "Check the step that produced your value — 7,040 lb/ft at 5.3 ft is what you get if you placed the whole resultant at H/3. The correct result is 7,040 lb/ft at 6.1 ft.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.1.2 Rankine; §3.13.5.1 σhq = Ka q; §3.1.4 Load Distribution from Surcharge",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-39-wall-surcharge.pdf"
            },
            {
              "id": "gpeyt1-40",
              "type": "mcq",
              "pe": true,
              "label": "Wall base pressure",
              "given": "e = B/2 − d; qmax = (ΣV/B)(1 + 6e/B); qeq (Meyerhof) = ΣV/B′, B′ = B − 2e; for soils e ≤ B/6",
              "vignette": "For a cantilever retaining wall on medium dense sand, the resultant of all vertical forces ΣV = 18,200 lb/ft (Pv included) intersects the 10 ft base at d = 4.1 ft from the toe, computed from moments about the toe. The allowable bearing pressure for the sand is 4,000 psf. Overturning FS = 2.3, sliding FS = 1.6.",
              "stem": "Most nearly, the maximum toe pressure qmax is:",
              "choices": [
                {
                  "id": "a",
                  "text": "2,220 psf"
                },
                {
                  "id": "b",
                  "text": "2,803 psf",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "837 psf"
                },
                {
                  "id": "d",
                  "text": "1,984 psf"
                }
              ],
              "work": [
                "e = 10/2 − 4.1 = 0.90 ft ≤ B/6 = 1.67 ✓",
                "qmax = (18,200/10)(1 + 6×0.90/10) = 2,803 psf",
                "qmin = 837 psf; qeq = 18,200/8.2 = 2,220 psf (for comparison)",
                "Near-miss values: 2,220 psf comes from a slip: reported Meyerhof uniform qeq; 837 psf comes from a slip: reported qmin (heel); 1,984 psf comes from a slip: used (1 + e/B), dropped the 6."
              ],
              "explanation": "2,803 psf is correct. Method: e = B/2 − d; qmax = (ΣV/B)(1 + 6e/B); qeq (Meyerhof) = ΣV/B′, B′ = B − 2e; for soils e ≤ B/6. Distractors: 2,220 psf comes from a slip: reported Meyerhof uniform qeq; 837 psf comes from a slip: reported qmin (heel); 1,984 psf comes from a slip: used (1 + e/B), dropped the 6.",
              "miss": "Check the step that produced your value — 2,220 psf is what you get if you reported Meyerhof uniform qeq. The correct result is 2,803 psf.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 Applied Stress at Base (qmax, qmin, qeq) and eccentricity criteria (cantilever wall figure), p. 209",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-40-wall-base-pressure.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "gpeyt1-t9-bench",
      "title": "PE bench · YT calc · 9. Shallow Foundations",
      "topic": 9,
      "bench": true,
      "blurb": "Long multi-step PE calculations — Shallow Foundations.",
      "lessons": [
        {
          "id": "gpeyt1-t9-pe",
          "title": "Shallow Foundations · long calcs",
          "minutes": 35,
          "xp": 45,
          "summary": "Five long PE-depth calculations on shallow foundations.",
          "items": [
            {
              "id": "gpeyt1-41",
              "type": "mcq",
              "pe": true,
              "label": "Square footing, WT at base",
              "given": "qult = cNc sc + qNq sq Cwq + 0.5γBNγ sγ Cwγ; φ = 32°: Nq = 23.2, Nγ = 30.2; sq = 1 + (B/L) tan φ; sγ = 1 − 0.4(B/L); Dw = Df → Cwq = 1.0, Cwγ = 0.5",
              "vignette": "A 6 ft × 6 ft column footing bears 4 ft below grade in a uniform medium-dense sand (c = 0, φ = 32°, γ = 120 pcf above and γsat ≈ 125 pcf below the water table). The seasonal-high water table is at the footing base (Dw = Df). Use the AASHTO/NHI general bearing equation with handbook shape factors and groundwater correction factors, FS = 3.0. Column dead load 160 kips, live load 90 kips (not needed to compute capacity).",
              "stem": "Most nearly, the allowable column load (gross, FS = 3) is:",
              "choices": [
                {
                  "id": "a",
                  "text": "295 kips"
                },
                {
                  "id": "b",
                  "text": "256 kips",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "199 kips"
                },
                {
                  "id": "d",
                  "text": "148 kips"
                }
              ],
              "work": [
                "q = 120×4 = 480 psf; sq = 1 + tan32 = 1.625; sγ = 0.6",
                "Surcharge term = 480×23.2×1.625×1.0 = 18,095 psf",
                "γ term = 0.5×120×6×30.2×0.6×0.5 = 3,262 psf",
                "qult = 21,356 psf; qall = 7,119 psf",
                "Qall = 7,119 × 36 ft² = 256 kips",
                "Near-miss values: 295 kips comes from a slip: ignored the groundwater correction (Cwγ = 1); 199 kips comes from a slip: omitted shape factors; 148 kips comes from a slip: also took Cwq = 0.5 (misread the Dw = Df row)."
              ],
              "explanation": "256 kips is correct. Method: qult = cNc sc + qNq sq Cwq + 0.5γBNγ sγ Cwγ; φ = 32°: Nq = 23.2, Nγ = 30.2; sq = 1 + (B/L) tan φ; sγ = 1 − 0.4(B/L); Dw = Df → Cwq = 1.0, Cwγ = 0.5. Distractors: 295 kips comes from a slip: ignored the groundwater correction (Cwγ = 1); 199 kips comes from a slip: omitted shape factors; 148 kips comes from a slip: also took Cwq = 0.5 (misread the Dw = Df row).",
              "miss": "Check the step that produced your value — 295 kips is what you get if you ignored the groundwater correction (Cwγ = 1). The correct result is 256 kips.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.4.2–3.4.2.1 Bearing Capacity Equation, Shape Factors, Bearing Capacity Factors and Groundwater Correction tables, pp. 90–91",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-41-square-footing-wt.pdf"
            },
            {
              "id": "gpeyt1-42",
              "type": "mcq",
              "pe": true,
              "label": "Strip footing on clay (φ = 0)",
              "given": "φ = 0: Nc = 5.14, Nq = 1, Nγ = 0; su = qu/2; qnet,ult = qult − γDf = 5.14 su",
              "vignette": "A 5 ft wide continuous wall footing bears 3.5 ft deep in a saturated, homogeneous stiff clay. Unconfined compression tests give an average qu = 2,400 psf; γ = 118 pcf; the water table is deep. Analyze the short-term (undrained) case with FS = 3.0 on net bearing pressure. The wall load is 9 kips/ft.",
              "stem": "Most nearly, the allowable NET bearing pressure is:",
              "choices": [
                {
                  "id": "a",
                  "text": "4,112 psf"
                },
                {
                  "id": "b",
                  "text": "2,194 psf"
                },
                {
                  "id": "c",
                  "text": "2,280 psf"
                },
                {
                  "id": "d",
                  "text": "2,056 psf",
                  "correct": true
                }
              ],
              "work": [
                "su = 2,400/2 = 1,200 psf",
                "qnet,ult = 5.14 × 1,200 = 6,168 psf",
                "qnet,all = 6,168/3.0 = 2,056 psf",
                "(check: wall pressure 9,000/5 = 1,800 psf gross)",
                "Near-miss values: 4,112 psf comes from a slip: used qu as su (forgot ÷2); 2,194 psf comes from a slip: reported gross (added γDf after FS); 2,280 psf comes from a slip: used Terzaghi Nc = 5.7."
              ],
              "explanation": "2,056 psf is correct. Method: φ = 0: Nc = 5.14, Nq = 1, Nγ = 0; su = qu/2; qnet,ult = qult − γDf = 5.14 su. Distractors: 4,112 psf comes from a slip: used qu as su (forgot ÷2); 2,194 psf comes from a slip: reported gross (added γDf after FS); 2,280 psf comes from a slip: used Terzaghi Nc = 5.7.",
              "miss": "Check the step that produced your value — 4,112 psf is what you get if you used qu as su (forgot ÷2). The correct result is 2,056 psf.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.4.2 Bearing Capacity Equation (strip) and factor table (φ = 0: Nc = 5.14), pp. 90–91; §3.3.3 Undrained Shear Strength",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-42-strip-clay-net.pdf"
            },
            {
              "id": "gpeyt1-43",
              "type": "mcq",
              "pe": true,
              "label": "Eccentric footing (Meyerhof)",
              "given": "e = M/P (≤ B/6); B′ = B − 2e; qeq = P/(B′L); qmax = (P/BL)(1 + 6e/B)",
              "vignette": "An 8 ft × 8 ft footing supports a vertical load P = 180 kips (including footing weight) and an overturning moment M = 120 kip-ft about one axis from wind on a sign structure. The footing bears on dense sand where settlement analysis uses the Meyerhof equivalent uniform pressure. Allowable bearing pressure is 4.0 ksf.",
              "stem": "Most nearly, the Meyerhof equivalent uniform bearing pressure is:",
              "choices": [
                {
                  "id": "a",
                  "text": "4,219 psf"
                },
                {
                  "id": "b",
                  "text": "2,812 psf"
                },
                {
                  "id": "c",
                  "text": "3,375 psf",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "3,068 psf"
                }
              ],
              "work": [
                "e = 120/180 = 0.667 ft ≤ B/6 = 1.33 ✓",
                "B′ = 8 − 2(0.667) = 6.667 ft",
                "qeq = 180/(6.667×8) = 3.375 ksf = 3,375 psf",
                "(qmax = 4,219 psf)",
                "Near-miss values: 4,219 psf comes from a slip: reported qmax (trapezoidal toe pressure); 2,812 psf comes from a slip: ignored eccentricity; 3,068 psf comes from a slip: used B′ = B − e."
              ],
              "explanation": "3,375 psf is correct. Method: e = M/P (≤ B/6); B′ = B − 2e; qeq = P/(B′L); qmax = (P/BL)(1 + 6e/B). Distractors: 4,219 psf comes from a slip: reported qmax (trapezoidal toe pressure); 2,812 psf comes from a slip: ignored eccentricity; 3,068 psf comes from a slip: used B′ = B − e.",
              "miss": "Check the step that produced your value — 4,219 psf is what you get if you reported qmax (trapezoidal toe pressure). The correct result is 3,375 psf.",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 Applied stress at base — qeq = ΣV/B′, B′ = B − 2e (cantilever wall figure, p. 209); NHI-06-089 §8 effective width",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-43-eccentric-footing.pdf"
            },
            {
              "id": "gpeyt1-44",
              "type": "mcq",
              "pe": true,
              "label": "2:1 stress + clay settlement",
              "given": "Δσz = Δp B L/[(B + z)(L + z)] (2:1, z below footing base); S = Cc H/(1 + e0) log(σ′f/σ′0); γw = 62.4 pcf",
              "vignette": "A 10 ft × 10 ft footing with net applied pressure Δp = 2,600 psf bears 3 ft below grade on sand (γ = 120 pcf above and below the water table, which is at the footing base). A 10 ft normally consolidated clay layer (γsat = 112 pcf, e0 = 0.92, Cc = 0.3) begins 10 ft below the footing base. Use the 2:1 method at mid-clay and a single layer.",
              "stem": "Most nearly, the consolidation settlement of the clay is:",
              "choices": [
                {
                  "id": "a",
                  "text": "9.5 in."
                },
                {
                  "id": "b",
                  "text": "3.6 in."
                },
                {
                  "id": "c",
                  "text": "2.5 in.",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "1.5 in."
                }
              ],
              "work": [
                "z (base → mid-clay) = 10 + 5 = 15 ft",
                "Δσ = 2,600×10²/(10+15)² = 416 psf",
                "σ′0 = 3(120) + 10(120−62.4) + 5(112−62.4) = 1,184 psf",
                "S = 0.3×10/1.92 × log(1,600/1,184) = 0.2043 ft = 2.5 in.",
                "Near-miss values: 9.5 in. comes from a slip: applied full Δp at mid-clay (no spreading); 3.6 in. comes from a slip: evaluated Δσ at the top of clay; 1.5 in. comes from a slip: used total stress for σ′0."
              ],
              "explanation": "2.5 in. is correct. Method: Δσz = Δp B L/[(B + z)(L + z)] (2:1, z below footing base); S = Cc H/(1 + e0) log(σ′f/σ′0); γw = 62.4 pcf. Distractors: 9.5 in. comes from a slip: applied full Δp at mid-clay (no spreading); 3.6 in. comes from a slip: evaluated Δσ at the top of clay; 1.5 in. comes from a slip: used total stress for σ′0.",
              "miss": "Check the step that produced your value — 9.5 in. is what you get if you applied full Δp at mid-clay (no spreading). The correct result is 2.5 in..",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.5.1 Stress Distribution (2:1 method), p. 94; §3.2.1 NC consolidation, p. 83",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-44-footing-2to1-consol.pdf"
            },
            {
              "id": "gpeyt1-45",
              "type": "mcq",
              "pe": true,
              "label": "Elastic settlement",
              "given": "δv = Cd Δp Bf (1 − ν²)/Em; Cd (square, flexible): center 1.12, corner 0.56, average 0.95; square rigid 0.99",
              "vignette": "A flexible 9 ft × 9 ft mat for an equipment pad applies Δp = 3,200 psf to a deep, homogeneous dense gravelly sand with Em = 420,000 psf (≈ 2,917 psi) and ν = 0.3. Estimate the AVERAGE immediate settlement under the flexible pad (not the center).",
              "stem": "Most nearly, the average elastic settlement is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.71 in.",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "0.84 in."
                },
                {
                  "id": "c",
                  "text": "0.78 in."
                },
                {
                  "id": "d",
                  "text": "0.06 in."
                }
              ],
              "work": [
                "1 − ν² = 0.91",
                "δv = 0.95 × 3,200 × 9 × 0.91/420,000 = 0.0593 ft = 0.71 in.",
                "Near-miss values: 0.84 in. comes from a slip: used the center factor 1.12; 0.78 in. comes from a slip: omitted (1 − ν²); 0.06 in. comes from a slip: left the answer in ft labeled in.."
              ],
              "explanation": "0.71 in. is correct. Method: δv = Cd Δp Bf (1 − ν²)/Em; Cd (square, flexible): center 1.12, corner 0.56, average 0.95; square rigid 0.99. Distractors: 0.84 in. comes from a slip: used the center factor 1.12; 0.78 in. comes from a slip: omitted (1 − ν²); 0.06 in. comes from a slip: left the answer in ft labeled in..",
              "miss": "Check the step that produced your value — 0.84 in. is what you get if you used the center factor 1.12. The correct result is 0.71 in..",
              "fepe": "Reference: NCEES PE Civil Reference Handbook v2.1 §3.5.2 Settlement (Elastic Method) and Cd table, p. 95",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-45-elastic-settlement.pdf"
            }
          ]
        }
      ]
    },
    {
      "id": "gpeyt1-t10-bench",
      "title": "PE bench · YT calc · 10. Deep Foundations",
      "topic": 10,
      "bench": true,
      "blurb": "Long multi-step PE calculations — Deep Foundations.",
      "lessons": [
        {
          "id": "gpeyt1-t10-pe",
          "title": "Deep Foundations · long calcs",
          "minutes": 35,
          "xp": 45,
          "summary": "Five long PE-depth calculations on deep foundations.",
          "items": [
            {
              "id": "gpeyt1-46",
              "type": "mcq",
              "pe": true,
              "label": "Driven pile in clay (α)",
              "given": "Rs = Σ α su (perimeter)(ΔL); Rt = 9 su At; Ru = Rs + Rt",
              "vignette": "A 16 in. square precast concrete pile is driven 50 ft into a two-layer clay deposit: 0–20 ft soft clay su = 600 psf (α = 0.95); 20–60 ft stiff clay su = 1400 psf (α = 0.62). The water table is at 5 ft. Clay γsat = 115 pcf. Use the α-method for side resistance and qp = 9su at the toe. Design load 90 kips; ASD FS = 2.5.",
              "stem": "Most nearly, the ultimate axial compression capacity Ru is:",
              "choices": [
                {
                  "id": "a",
                  "text": "310 kips"
                },
                {
                  "id": "b",
                  "text": "200 kips"
                },
                {
                  "id": "c",
                  "text": "174 kips"
                },
                {
                  "id": "d",
                  "text": "222 kips",
                  "correct": true
                }
              ],
              "work": [
                "Perimeter = 4×1.333 = 5.333 ft; At = 1.778 ft²",
                "Layer 1: 0.95×600×5.333×20 = 60,800 lb",
                "Layer 2: 0.62×1400×5.333×30 = 138,880 lb",
                "Rt = 9×1400×1.778 = 22,400 lb",
                "Ru = 222,080 lb ≈ 222 kips (Rall = 89 kips at FS 2.5 > 90 ✓)",
                "Near-miss values: 310 kips comes from a slip: omitted α (α = 1); 200 kips comes from a slip: left out toe resistance; 174 kips comes from a slip: treated the pile as a 16 in. round pile."
              ],
              "explanation": "222 kips is correct. Method: Rs = Σ α su (perimeter)(ΔL); Rt = 9 su At; Ru = Rs + Rt. Distractors: 310 kips comes from a slip: omitted α (α = 1); 200 kips comes from a slip: left out toe resistance; 174 kips comes from a slip: treated the pile as a 16 in. round pile.",
              "miss": "Check the step that produced your value — 310 kips is what you get if you omitted α (α = 1). The correct result is 222 kips.",
              "fepe": "Reference: FHWA-NHI-16-009 (GEC 12) Vol I §7.2 α-method (Eq. 7-31) and qp = 9su (Eq. 7-16)",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-46-alpha-pile-clay.pdf"
            },
            {
              "id": "gpeyt1-47",
              "type": "mcq",
              "pe": true,
              "label": "Driven pile in sand (β)",
              "given": "Rs = β ∫σ′v dA (use average σ′v of each segment × side area); Rt = Nt σ′v,toe At; γw = 62.4 pcf",
              "vignette": "A 14 in. diameter closed-end steel pipe pile is driven 45 ft into medium-dense sand. Water table at 10 ft; γ = 115 pcf above, γsat = 125 pcf below. Use the effective-stress β-method with β = 0.38 along the full length and toe coefficient Nt = 40 (from the Fellenius ranges for this sand). Ignore any limiting values. SPT N60 ≈ 22; φ′ ≈ 34°.",
              "stem": "Most nearly, the ultimate capacity Ru is:",
              "choices": [
                {
                  "id": "a",
                  "text": "407 kips"
                },
                {
                  "id": "b",
                  "text": "260 kips",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "117 kips"
                },
                {
                  "id": "d",
                  "text": "352 kips"
                }
              ],
              "work": [
                "σ′v at 10 ft = 1,150 psf; at toe = 1,150 + 35(125−62.4) = 3,341 psf",
                "Perimeter = π(1.167) = 3.665 ft; At = 1.069 ft²",
                "Σσ′v·L = ½(1,150)(10) + ½(1,150+3,341)(35) = 84,342 lb/ft",
                "Rs = 0.38×3.665×that = 117,470 lb",
                "Rt = 40×3,341×1.069 = 142,863 lb",
                "Ru = 260 kips",
                "Near-miss values: 407 kips comes from a slip: used total stress (no pore-pressure subtraction); 117 kips comes from a slip: left out toe resistance; 352 kips comes from a slip: used toe σ′v along the whole shaft."
              ],
              "explanation": "260 kips is correct. Method: Rs = β ∫σ′v dA (use average σ′v of each segment × side area); Rt = Nt σ′v,toe At; γw = 62.4 pcf. Distractors: 407 kips comes from a slip: used total stress (no pore-pressure subtraction); 117 kips comes from a slip: left out toe resistance; 352 kips comes from a slip: used toe σ′v along the whole shaft.",
              "miss": "Check the step that produced your value — 407 kips is what you get if you used total stress (no pore-pressure subtraction). The correct result is 260 kips.",
              "fepe": "Reference: FHWA-NHI-16-009 (GEC 12) Vol I §7.2 effective-stress (β) method, Rs and Rt with Nt",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-47-beta-pile-sand.pdf"
            },
            {
              "id": "gpeyt1-48",
              "type": "mcq",
              "pe": true,
              "label": "Uplift capacity in clay",
              "given": "Tall = α su π D L / FS + Wpier",
              "vignette": "A transmission tower leg is founded on an 18 in. diameter drilled concrete pier, 40 ft long, in uniform stiff clay (su = 1,100 psf, adhesion factor α = 0.7). The water table is deep (below the pier). Concrete γc = 150 pcf. Apply FS = 3.0 to side resistance only; pier self-weight is counted at full value (unfactored). Ignore any belling and end suction.",
              "stem": "Most nearly, the allowable uplift capacity is:",
              "choices": [
                {
                  "id": "a",
                  "text": "52 kips"
                },
                {
                  "id": "b",
                  "text": "59 kips",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "48 kips"
                },
                {
                  "id": "d",
                  "text": "55 kips"
                }
              ],
              "work": [
                "Qs = 0.7×1,100×π×1.50×40 = 145,142 lb",
                "W = π/4×1.50²×40×150 = 10,603 lb",
                "Tall = 145,142/3.0 + 10,603 = 58,983 lb ≈ 59 kips",
                "Near-miss values: 52 kips comes from a slip: applied FS to pier weight too; 48 kips comes from a slip: ignored pier weight; 55 kips comes from a slip: used buoyant concrete weight though WT is deep."
              ],
              "explanation": "59 kips is correct. Method: Tall = α su π D L / FS + Wpier. Distractors: 52 kips comes from a slip: applied FS to pier weight too; 48 kips comes from a slip: ignored pier weight; 55 kips comes from a slip: used buoyant concrete weight though WT is deep.",
              "miss": "Check the step that produced your value — 52 kips is what you get if you applied FS to pier weight too. The correct result is 59 kips.",
              "fepe": "Reference: FHWA-NHI-16-009 (GEC 12) α-method side resistance; uplift Rn = Rs + W (Eq. 7-41 group form)",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-48-uplift-clay.pdf"
            },
            {
              "id": "gpeyt1-49",
              "type": "mcq",
              "pe": true,
              "label": "Pile group block failure",
              "given": "Block: Rng = 2D(B + Z)su1 + B Z su2 Nc; Nc = 5(1 + D/5B)(1 + B/5Z) ≤ 9; B = Z = outside-to-outside group width; group capacity = lesser of block and Σ singles",
              "vignette": "A 3 × 3 group of 12 in. square piles at 3 ft center-to-center spacing is driven 45 ft into soft-to-medium clay with weighted average su1 = 900 psf along the embedment and su2 = 1,600 psf below the toe (to 2B). Each single pile has nominal capacity 95 kips (α-method + toe). Pile cap is not in contact with the ground.",
              "stem": "Most nearly, the nominal group capacity is:",
              "choices": [
                {
                  "id": "a",
                  "text": "1,840 kips"
                },
                {
                  "id": "b",
                  "text": "855 kips",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "1,490 kips"
                },
                {
                  "id": "d",
                  "text": "1,273 kips"
                }
              ],
              "work": [
                "B = Z = 2(3) + 1 = 7 ft; Nc = 5(1 + 45/35.0)(1.2) = 13.7 → cap at 9",
                "Rblock = 2(45)(7.0+7.0)(900) + 7.0²(1,600)(9) = 1,839,600 lb",
                "Σ singles = 9 × 95 = 855 kips",
                "Group = lesser = 855 kips",
                "Near-miss values: 1,840 kips comes from a slip: took the larger value; 1,490 kips comes from a slip: used center-to-center (6 ft) group width for block; 1,273 kips comes from a slip: forgot the 2 on perimeter shear."
              ],
              "explanation": "855 kips is correct. Method: Block: Rng = 2D(B + Z)su1 + B Z su2 Nc; Nc = 5(1 + D/5B)(1 + B/5Z) ≤ 9; B = Z = outside-to-outside group width; group capacity = lesser of block and Σ singles. Distractors: 1,840 kips comes from a slip: took the larger value; 1,490 kips comes from a slip: used center-to-center (6 ft) group width for block; 1,273 kips comes from a slip: forgot the 2 on perimeter shear.",
              "miss": "Check the step that produced your value — 1,840 kips is what you get if you took the larger value. The correct result is 855 kips.",
              "fepe": "Reference: FHWA-NHI-16-009 (GEC 12) Vol I Eq. 7-36 and 7-37 (block failure, Nc)",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-49-pile-group-block.pdf"
            },
            {
              "id": "gpeyt1-50",
              "type": "mcq",
              "pe": true,
              "label": "Pile group settlement (equivalent footing)",
              "given": "Equivalent footing at D′ = (2/3)D; Δσ = Q/[(B + z)(L + z)] with z measured from D′; S = Cc H/(1 + e0) log(σ′f/σ′0)",
              "vignette": "A pile group with plan dimensions 8 ft × 8 ft (outside-to-outside) carries Q = 900 kips. The friction piles are 45 ft long in a stiff clay crust that overlies a 20 ft normally consolidated clay layer from 45 ft to 65 ft (γsat = 118 pcf, e0 = 1.0, Cc = 0.36). Water table at the ground surface; stiff crust also γsat = 118 pcf. Place the equivalent footing at 2/3 of the embedded length and spread load at 2:1; evaluate one layer at mid-depth of the NC clay.",
              "stem": "Most nearly, the consolidation settlement of the group is:",
              "choices": [
                {
                  "id": "a",
                  "text": "4.5 in.",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "12.1 in."
                },
                {
                  "id": "c",
                  "text": "1.3 in."
                },
                {
                  "id": "d",
                  "text": "2.2 in."
                }
              ],
              "work": [
                "D′ = (2/3)(45) = 30 ft; mid-clay depth = 55 ft → z = 25 ft",
                "Δσ = 900,000/(8+25)² = 826 psf",
                "σ′0 = 55(118−62.4) = 3,058 psf",
                "S = 0.36×20/2.0 × log(3,884/3,058) = 4.5 in.",
                "Near-miss values: 12.1 in. comes from a slip: placed the equivalent footing at the pile toe; 1.3 in. comes from a slip: spread the load from the ground surface; 2.2 in. comes from a slip: used total stress for σ′0."
              ],
              "explanation": "4.5 in. is correct. Method: Equivalent footing at D′ = (2/3)D; Δσ = Q/[(B + z)(L + z)] with z measured from D′; S = Cc H/(1 + e0) log(σ′f/σ′0). Distractors: 12.1 in. comes from a slip: placed the equivalent footing at the pile toe; 1.3 in. comes from a slip: spread the load from the ground surface; 2.2 in. comes from a slip: used total stress for σ′0.",
              "miss": "Check the step that produced your value — 12.1 in. is what you get if you placed the equivalent footing at the pile toe. The correct result is 4.5 in..",
              "fepe": "Reference: FHWA-NHI-16-009 (GEC 12) Vol I §7 equivalent-footing method (2/3 D); NCEES PE Civil Reference Handbook v2.1 §3.5.1 2:1 method; §3.2.1",
              "solutionPdf": "solutions/yt-calc-01/gpeyt1-50-group-equiv-footing.pdf"
            }
          ]
        }
      ]
    }
  ]
});
