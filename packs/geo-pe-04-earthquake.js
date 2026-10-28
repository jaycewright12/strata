/*
 * STRATA built-in pack: GEO PE · 4. Earthquake Engineering & Dynamic Loads (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES PE Civil Reference Handbook §3.1.5, FHWA GEC 3 / NHI-11-032, Vandevelde Geotechnical Depth I liquefaction & ASCE 7 site class, UFC 3-220-10).
 * Do not redistribute.
 * Maps to PE topic 4 (Earthquake Engineering and Dynamic Loads) — conceptual + PE bench tracks.
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-04-earthquake",
  "title": "GEO PE · 4. Earthquake Engineering & Dynamic Loads",
  "version": "1.0.0",
  "description": "Personal use only. Original questions based on Jayce's study library (NCEES PE Civil Reference Handbook §3.1.5, FHWA GEC 3 / NHI-11-032, Vandevelde Geotechnical Depth I liquefaction & ASCE 7 site class, UFC 3-220-10). Do not redistribute.",
  "units": [
    {
      "id": "gpe04-eq",
      "title": "4. Earthquake Engineering & Dynamic Loads",
      "blurb": "Seismic site characterization (ASCE 7 site class) and seismic analysis — liquefaction CSR/CRR, pseudostatic kh, EQ earth pressures — PE Geotechnical depth.",
      "lessons": [
        {
          "id": "gpe04-eq-1",
          "title": "Earthquake engineering · Concepts",
          "minutes": 40,
          "xp": 60,
          "summary": "4A–4B: site class from vs/N/Su, liquefaction susceptibility, Seed–Idriss CSR/CRR/FS, MSF, pseudostatic kh, Mononobe–Okabe framing.",
          "items": [
            {
              "id": "gpe04-eq-1-01",
              "type": "mcq",
              "label": "4A · Site class basis",
              "stem": "Per ASCE 7 / Vandevelde seismic site-class framing used on the PE exam, Site Class for a building is based most nearly on properties of which depth interval below the structure base?",
              "choices": [
                {
                  "id": "a",
                  "text": "The upper 100 ft of soil and rock below the building base (vs, N, or Su averages)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Only the upper 10 ft beneath the lowest floor slab"
                },
                {
                  "id": "c",
                  "text": "Only bedrock properties below 500 ft, ignoring soil"
                },
                {
                  "id": "d",
                  "text": "The frost-depth zone only (typically < 5 ft)"
                }
              ],
              "explanation": "Site Class models the upper 100 ft below the base using average shear-wave velocity vs, average SPT N, or average undrained strength Su (ASCE 7 Ch. 20 / Vandevelde Depth I). Shallower-only or bedrock-only rules are incorrect for standard site classification.",
              "miss": "Site Class → upper 100 ft average vs, N, or Su — not frost depth or deep bedrock alone.",
              "fepe": "Site Class: upper 100 ft (vs / N / Su)."
            },
            {
              "id": "gpe04-eq-1-02",
              "type": "mcq",
              "label": "4A · Site Class E soft clay",
              "stem": "A profile has average vs ≤ 600 ft/s in the upper 100 ft, or average N < 15, or average Su < 1,000 psf, and does not trigger Site Class F. The ASCE 7 Site Class is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Site Class B (rock)"
                },
                {
                  "id": "b",
                  "text": "Site Class E (soft clay soil)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Site Class A (hard rock)"
                },
                {
                  "id": "d",
                  "text": "Site Class C (very dense soil / soft rock)"
                }
              ],
              "explanation": "ASCE 7 table (Vandevelde): Class E — vs ≤ 600 ft/s, N < 15, or Su < 1,000 psf (or >10 ft of soft clay with PI>20, w≥40%, Su<500 psf). Class B/A are rock; Class C is 1,200 < vs ≤ 2,500 ft/s.",
              "miss": "Soft clay / low vs/N/Su → Class E (unless F applies).",
              "fepe": "E: vs≤600 fps or N<15 or Su<1,000 psf."
            },
            {
              "id": "gpe04-eq-1-03",
              "type": "mcq",
              "label": "4A · Site Class F triggers",
              "stem": "Which condition alone most nearly requires Site Class F (site-specific response analysis) per ASCE 7 / Vandevelde?",
              "choices": [
                {
                  "id": "a",
                  "text": "Average N = 25 in a stiff sand profile with no liquefaction hazard"
                },
                {
                  "id": "b",
                  "text": "vs = 3,000 ft/s competent rock with moderate weathering"
                },
                {
                  "id": "c",
                  "text": "More than 10 ft of peat and/or highly organic clay (or liquefiable soils / other listed F criteria)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "A 5-ft layer of dense gravel over rock"
                }
              ],
              "explanation": "Site Class F includes soils vulnerable to failure/collapse under seismic loading (e.g., liquefiable), >10 ft peat/highly organic clay, >25 ft very high-plasticity clay (PI>75), or >120 ft soft/medium clay (N<8). Dense gravel or Class B rock do not trigger F; N=25 stiff sand is typically D/C territory, not F.",
              "miss": "F triggers: liquefiable soils, thick peat/organic, very high-PI clay, very thick soft clay — not ordinary stiff sand.",
              "fepe": "Class F → site-specific response (liquefaction, thick peat, etc.)."
            },
            {
              "id": "gpe04-eq-1-04",
              "type": "mcq",
              "label": "4A · Default site class",
              "stem": "When site-specific vs/N/Su data are limited and neither Class E nor F is suspected, practice reflected in Vandevelde’s PE notes is to default most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Site Class A"
                },
                {
                  "id": "b",
                  "text": "Site Class B"
                },
                {
                  "id": "c",
                  "text": "Site Class C"
                },
                {
                  "id": "d",
                  "text": "Site Class D",
                  "correct": true
                }
              ],
              "explanation": "Vandevelde Depth I: default is Class D unless E or F is suspected. A/B require rock documentation; C needs dense/soft-rock evidence.",
              "miss": "Default Site Class D when E/F not suspected and data are thin.",
              "fepe": "No data + not E/F → default D."
            },
            {
              "id": "gpe04-eq-1-05",
              "type": "mcq",
              "label": "4B · Liquefaction mechanism",
              "stem": "Soil liquefaction during cyclic shaking is most nearly described as:",
              "choices": [
                {
                  "id": "a",
                  "text": "A rise in excess pore-water pressure in loose saturated cohesionless soil such that effective stress approaches zero and shear strength is largely lost",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "A permanent increase in effective stress that densifies clay and raises undrained strength"
                },
                {
                  "id": "c",
                  "text": "Dry gravel dilating so that suction increases strength above static values"
                },
                {
                  "id": "d",
                  "text": "Rock joint friction increasing because normal stress rises with pore pressure"
                }
              ],
              "explanation": "Liquefaction: loose saturated sands/silty sands develop ru → 1 so σ′ → 0 and undrained cyclic strength collapses (Vandevelde / GEC 3). Clays densifying, dry gravel suction, or rock joints gaining strength from pore pressure are the opposite physics.",
              "miss": "Liquefaction needs loose + saturated + cohesionless (typically); σ′ drop from excess u, not strength gain.",
              "fepe": "Liquefaction: Δu↑ → σ′↓ → strength loss in loose saturated sand."
            },
            {
              "id": "gpe04-eq-1-06",
              "type": "mcq",
              "label": "4B · Liquefaction susceptibility",
              "stem": "Which soil condition is most nearly susceptible to earthquake liquefaction screening concern?",
              "choices": [
                {
                  "id": "a",
                  "text": "Dense dry gravel above the water table with Dr > 80%"
                },
                {
                  "id": "b",
                  "text": "Loose, saturated, clean to silty fine sand below the water table with low (N1)60",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Hard intact limestone with RQD > 90%"
                },
                {
                  "id": "d",
                  "text": "Overconsolidated fat clay with Su = 2,500 psf well above the WT"
                }
              ],
              "explanation": "Classic susceptibility: young, loose, saturated cohesionless soils (especially clean/silty fine sands) with low penetration resistance. Dense dry gravel, intact rock, and strong OC clay are not typical liquefaction candidates.",
              "miss": "Flag loose saturated sands/silty sands with low (N1)60 — not dry dense gravel or strong clay.",
              "fepe": "Liquefaction screen: loose + saturated + sandy/silty."
            },
            {
              "id": "gpe04-eq-1-07",
              "type": "mcq",
              "label": "4B · FS liquefaction definition",
              "stem": "In the Seed–Idriss simplified liquefaction procedure as presented in Vandevelde Depth I, the factor of safety against liquefaction is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "FS = CSR/CRR"
                },
                {
                  "id": "b",
                  "text": "FS = (N1)60/amax"
                },
                {
                  "id": "c",
                  "text": "FS = CRR/CSR",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "FS = MSF × rd only"
                }
              ],
              "explanation": "FS = CRR/CSR (capacity/demand). If FS ≤ 1, liquefaction is predicted for the evaluated layer. Inverting to CSR/CRR is the classic PE trap; (N1)60/amax and MSF×rd alone are not the FS definition.",
              "miss": "FS = CRR/CSR. Do not invert capacity and demand.",
              "fepe": "Liquefaction FS = CRR/CSR (≤1 → liquefy)."
            },
            {
              "id": "gpe04-eq-1-08",
              "type": "mcq",
              "label": "4B · CSR formula",
              "stem": "The cyclic stress ratio demand in the simplified procedure is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "CSR = (N1)60 / 60"
                },
                {
                  "id": "b",
                  "text": "CSR = MSF only"
                },
                {
                  "id": "c",
                  "text": "CSR = CRRM7.5 × Kσ"
                },
                {
                  "id": "d",
                  "text": "CSR = 0.65 (amax/g) rd (σv/σ′v)",
                  "correct": true
                }
              ],
              "explanation": "Vandevelde / Seed–Idriss: CSReq = 0.65(amax/g) rd (σv/σ′v). CRR is capacity; MSF scales CRR for magnitude; (N1)60 enters CRR correlations, not CSR directly.",
              "miss": "CSR is the seismic demand side: 0.65(amax/g)rd(σv/σ′v).",
              "fepe": "CSR = 0.65(amax/g)·rd·(σv/σ′v)."
            },
            {
              "id": "gpe04-eq-1-09",
              "type": "mcq",
              "label": "4B · MSF role",
              "stem": "The magnitude scaling factor (MSF) in the simplified liquefaction method is used most nearly to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Adjust CRR from the M7.5 reference curve to the design earthquake magnitude (CRR = CRRM7.5 × MSF × Kσ as applicable)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Replace amax/g in the CSR equation so magnitude never appears elsewhere"
                },
                {
                  "id": "c",
                  "text": "Convert SPT N to (N1)60 by itself without energy or overburden corrections"
                },
                {
                  "id": "d",
                  "text": "Set Site Class equal to F whenever MSF < 1"
                }
              ],
              "explanation": "CRR for other magnitudes: CRR = CRRM7.5 × MSF × Kσ (Vandevelde). MSF = 174/M^2.56 in the notes’ form. MSF does not replace amax, does not alone create (N1)60, and does not define Site Class F.",
              "miss": "MSF scales CRR off the M7.5 baseline — it is not a CSR substitute.",
              "fepe": "CRR = CRR_M7.5 × MSF × Kσ."
            },
            {
              "id": "gpe04-eq-1-10",
              "type": "mcq",
              "label": "4B · Pseudostatic kh",
              "stem": "In pseudostatic slope or wall analysis, the horizontal seismic coefficient kh is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "The soil friction angle φ′ expressed as a decimal"
                },
                {
                  "id": "b",
                  "text": "A fraction of gravity representing horizontal inertial demand (kh = ah/g) applied as kh·W",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Always equal to 1.0 for Site Class D"
                },
                {
                  "id": "d",
                  "text": "The ratio CRR/CSR renamed for slopes"
                }
              ],
              "explanation": "NCEES §3.1.5: kh is the horizontal seismic coefficient as a fraction of g; inertial force ≈ kh W. It is not φ′, not automatically 1.0, and not the liquefaction FS.",
              "miss": "kh = horizontal accel / g; force = kh·W on the free body.",
              "fepe": "Pseudostatic: apply kh·W (and kv·W if used)."
            },
            {
              "id": "gpe04-eq-1-11",
              "type": "mcq",
              "label": "4B · Mononobe–Okabe framing",
              "stem": "Mononobe–Okabe seismic earth-pressure theory (NCEES §3.1.5) most nearly modifies static earth-pressure analysis by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ignoring inertia and using only hydrostatic water pressures behind the wall"
                },
                {
                  "id": "b",
                  "text": "Setting Ka = Kp = 1 for all φ′ during earthquakes"
                },
                {
                  "id": "c",
                  "text": "Including horizontal (and optional vertical) seismic coefficients kh (kv) so dynamic active/passive thrusts PAE/PPE replace static Pa/Pp",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Requiring Site Class A rock behind every retaining wall"
                }
              ],
              "explanation": "M–O introduces kh (and kv) into the active/passive thrust formulation for yielding walls (NCEES §3.1.5 variable list). It does not drop inertia, force Ka=Kp=1, or mandate Class A backfill.",
              "miss": "Seismic wall thrust → M–O with kh (kv); not static Ka alone.",
              "fepe": "M–O: PAE/PPE from kh, kv, φ′, geometry."
            },
            {
              "id": "gpe04-eq-1-12",
              "type": "mcq",
              "label": "4A · vs average formula",
              "stem": "Average shear-wave velocity for Site Class over the upper 100 ft is computed most nearly as:",
              "choices": [
                {
                  "id": "a",
                  "text": "vs,avg = arithmetic mean of layer vs values with equal weight regardless of thickness"
                },
                {
                  "id": "b",
                  "text": "vs,avg = maximum layer vs in the profile"
                },
                {
                  "id": "c",
                  "text": "vs,avg = minimum layer vs only"
                },
                {
                  "id": "d",
                  "text": "vs,avg = Σdi / Σ(di/vsi) for layers totaling 100 ft",
                  "correct": true
                }
              ],
              "explanation": "ASCE 7 / Vandevelde: vs = Σdi / Σ(di/vsi) with Σdi = 100 ft (harmonic-type thickness weighting). Equal-weight arithmetic means of vs, or min/max alone, are incorrect.",
              "miss": "Use thickness-weighted Σd/Σ(d/vs), not a plain average of vs numbers.",
              "fepe": "vs,avg = Σdi / Σ(di/vsi), Σdi = 100 ft."
            },
            {
              "id": "gpe04-eq-1-13",
              "type": "mcq",
              "label": "4B · Kσ overburden",
              "stem": "When effective overburden at the liquefaction evaluation depth exceeds about 100 kPa (≈1 tsf), Vandevelde’s notes adjust CRR most nearly by:",
              "choices": [
                {
                  "id": "a",
                  "text": "Increasing CSR by multiplying by (σ′v/Pa) without changing CRR"
                },
                {
                  "id": "b",
                  "text": "Ignoring overburden because SPT (N1)60 already includes all stress effects for CRR"
                },
                {
                  "id": "c",
                  "text": "Setting MSF = 0 so CRR becomes zero"
                },
                {
                  "id": "d",
                  "text": "Applying Kσ = (Pa/σ′v)^0.25 (reducing CRR as σ′v rises above ~100 kPa)",
                  "correct": true
                }
              ],
              "explanation": "Notes: if σ′v > 100 kPa, reduce CRR by Kσ = (Pa/σ′v)^0.25. (N1)60 is overburden-normalized for the CRR chart, but an additional Kσ factor still appears for high confining stress in this PE presentation. Zeroing MSF or inflating CSR instead are wrong knobs.",
              "miss": "High σ′v → apply Kσ < 1 to CRR; do not zero MSF.",
              "fepe": "Kσ = (Pa/σ′v)^0.25 when σ′v > ~100 kPa."
            },
            {
              "id": "gpe04-eq-1-14",
              "type": "mcq",
              "label": "4B · rd stress reduction",
              "stem": "In the simplified CSR equation, the factor rd most nearly accounts for:",
              "choices": [
                {
                  "id": "a",
                  "text": "Magnitude scaling from M7.5 to other magnitudes"
                },
                {
                  "id": "b",
                  "text": "Flexibility of the soil column (stress reduction with depth relative to a rigid-column assumption)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Energy ratio of the SPT hammer alone"
                },
                {
                  "id": "d",
                  "text": "Site Class letter converted to a decimal"
                }
              ],
              "explanation": "rd is the shear-stress reduction factor reflecting deformable soil response vs depth (CSR = 0.65(amax/g) rd σv/σ′v). MSF handles magnitude; ER hammer is an SPT correction; Site Class is separate.",
              "miss": "rd = depth/flexibility reduction on cyclic shear stress — not MSF or ER.",
              "fepe": "CSR uses rd for soil-column flexibility with depth."
            },
            {
              "id": "gpe04-eq-1-15",
              "type": "mcq",
              "label": "4A · Site Class from N",
              "stem": "For Site Class using average SPT N over 100 ft (ASCE 7 / Vandevelde), which statement is most nearly correct?",
              "choices": [
                {
                  "id": "a",
                  "text": "Use N values corrected for overburden to (N1)60 before averaging for Site Class"
                },
                {
                  "id": "b",
                  "text": "Only the single lowest N blow count in the profile is used as the Site Class N"
                },
                {
                  "id": "c",
                  "text": "Rock or very stiff soil layers may be assigned N = 100 bpf in the average; N is energy-corrected but not overburden-normalized for this procedure",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "N averaging is never allowed; only vs may be used"
                }
              ],
              "explanation": "Vandevelde: N corrected for hammer energy but not overburden for Site Class; rock/very stiff soil use N=100 bpf; average is thickness-weighted Σd/Σ(d/N). (N1)60 is for liquefaction CRR charts, not the Site Class N average.",
              "miss": "Site Class N ≠ (N1)60. Energy-correct; do not overburden-normalize; rock N=100.",
              "fepe": "Site Class N: ER-corrected, not (N1)60; rock = 100 bpf."
            }
          ]
        }
      ],
      "topic": 4
    },
    {
      "id": "gpe04-bench",
      "title": "PE bench · Earthquake / liquefaction",
      "bench": true,
      "lessons": [
        {
          "id": "gpe04-pe-1",
          "title": "Earthquake PE bench",
          "minutes": 25,
          "xp": 40,
          "summary": "Site-class N-average, CRR/CSR/FS liquefaction, MSF, CSR with rd, pseudostatic inertia force.",
          "items": [
            {
              "id": "gpe04-pe-1-01",
              "type": "mcq",
              "pe": true,
              "label": "Site Class N average",
              "given": "N = Σdi / Σ(di/Ni); rock N=100; Σdi=100 ft",
              "vignette": "Upper 100 ft: 0–20 ft Ni=11; 20–50 ft Ni=27; 50–100 ft hard rock (use N=100).",
              "stem": "Most nearly, the average N for Site Class is:",
              "choices": [
                {
                  "id": "a",
                  "text": "29",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "19"
                },
                {
                  "id": "c",
                  "text": "45"
                },
                {
                  "id": "d",
                  "text": "11"
                }
              ],
              "work": [
                "N = 100 / (20/11 + 30/27 + 50/100)",
                "20/11 ≈ 1.818; 30/27 ≈ 1.111; 50/100 = 0.50; sum ≈ 3.429",
                "N ≈ 100/3.429 ≈ 29.2 ≈ 29",
                "19 ≈ arithmetic mean ignoring thickness weights / rock rule errors",
                "45 over-weights rock; 11 is the soft-layer N alone"
              ],
              "explanation": "Thickness-weighted harmonic-type average with rock N=100 gives ≈29 (Vandevelde worked example). Plain soft-layer N or unweighted means are distractors.",
              "miss": "Use Σd/Σ(d/N) with rock=100 — not the minimum layer N.",
              "fepe": "Site Class N = Σdi/Σ(di/Ni)."
            },
            {
              "id": "gpe04-pe-1-02",
              "type": "mcq",
              "pe": true,
              "label": "CRR M7.5 from (N1)60",
              "given": "100·CRRM7.5 = 95/(34−(N1)60) + (N1)60/1.3 − 0.5  (Vandevelde form)",
              "vignette": "(N1)60 = 15 at the critical depth. Evaluate CRR for a magnitude 7.5 reference event (no Kσ reduction).",
              "stem": "Most nearly, CRRM7.5 is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.16",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "0.08"
                },
                {
                  "id": "c",
                  "text": "0.50"
                },
                {
                  "id": "d",
                  "text": "1.16"
                }
              ],
              "work": [
                "100·CRR = 95/(34−15) + 15/1.3 − 0.5 = 95/19 + 11.538 − 0.5",
                "95/19 = 5.0; 5.0 + 11.538 − 0.5 = 16.038",
                "CRRM7.5 = 0.160 ≈ 0.16",
                "0.08 is a lower-(N1)60 companion example value",
                "0.50 / 1.16 forget the /100 or mis-sum terms"
              ],
              "explanation": "Plug (N1)60=15 into the notes’ CRR equation and divide by 100 → 0.16 (matches Vandevelde sample). Dropping the /100 or using a different N are near-misses.",
              "miss": "Compute the bracketed expression then divide by 100 for CRR.",
              "fepe": "CRR_M7.5 from (N1)60 correlation; then ×MSF×Kσ."
            },
            {
              "id": "gpe04-pe-1-03",
              "type": "mcq",
              "pe": true,
              "label": "CSR and FS",
              "given": "CSR = 0.65(amax/g) rd (σv/σ′v); FS = CRR/CSR; CRR already includes MSF",
              "vignette": "amax/g = 0.14, rd = 0.964, σv/σ′v = 1.27. CRR (after MSF) = 0.190.",
              "stem": "Most nearly, the factor of safety against liquefaction is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.70"
                },
                {
                  "id": "b",
                  "text": "1.73",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "1.00"
                },
                {
                  "id": "d",
                  "text": "0.11"
                }
              ],
              "work": [
                "CSR = 0.65×0.14×0.964×1.27 ≈ 0.65×0.14×1.224 ≈ 0.111",
                "FS = 0.190/0.111 ≈ 1.71 ≈ 1.73",
                "0.70 is an FS<1 companion example (would liquefy)",
                "0.11 is CSR itself reported as FS",
                "1.00 is the liquefaction threshold, not this calculation"
              ],
              "explanation": "Compute CSR from 0.65(amax/g)rd(σv/σ′v), then FS=CRR/CSR≈1.73 (will not liquefy). Reporting CSR as FS or recalling a liquefying example FS≈0.7 are traps.",
              "miss": "FS = CRR/CSR. Do not report CSR as the factor of safety.",
              "fepe": "CSR demand → FS = CRR/CSR."
            },
            {
              "id": "gpe04-pe-1-04",
              "type": "mcq",
              "pe": true,
              "label": "MSF for M=7.0",
              "given": "MSF = 174 / M^2.56  (Vandevelde notes form)",
              "vignette": "Design earthquake magnitude M = 7.0. Scale a CRRM7.5 value using MSF only (Kσ = 1).",
              "stem": "Most nearly, MSF is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.89"
                },
                {
                  "id": "b",
                  "text": "1.00"
                },
                {
                  "id": "c",
                  "text": "1.19",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "1.73"
                }
              ],
              "work": [
                "MSF = 174 / 7.0^2.56",
                "7^2 = 49; 7^0.56 ≈ 7^0.5×7^0.06 ≈ 2.646×1.13 ≈ 2.99; or 7^2.56 ≈ 146.2",
                "MSF ≈ 174/146.2 ≈ 1.19",
                "1.00 would be no scaling; 0.89 is Seed–Idriss MSF at M≈8.5 from the notes table; 1.73 is an FS value from another example"
              ],
              "explanation": "MSF = 174/M^2.56 ≈ 1.19 for M=7.0 (Vandevelde sample). Confusing MSF with FS or with large-magnitude table values are the near-misses.",
              "miss": "MSF≈1.19 for M=7.0 with 174/M^2.56 — not 1.0 and not the FS.",
              "fepe": "MSF = 174/M^2.56 (notes form)."
            },
            {
              "id": "gpe04-pe-1-05",
              "type": "mcq",
              "pe": true,
              "label": "Pseudostatic inertia",
              "given": "Fh = kh · W; kh = 0.15",
              "vignette": "A rigid block of soil/wall free-body weight W = 40 kip is analyzed pseudostatically with kh = 0.15 (kv = 0).",
              "stem": "Most nearly, the horizontal inertial force to apply is:",
              "choices": [
                {
                  "id": "a",
                  "text": "40 kip"
                },
                {
                  "id": "b",
                  "text": "0.15 kip"
                },
                {
                  "id": "c",
                  "text": "266 kip"
                },
                {
                  "id": "d",
                  "text": "6.0 kip",
                  "correct": true
                }
              ],
              "work": [
                "Fh = kh W = 0.15 × 40 = 6.0 kip",
                "40 kip is W itself (kh forgotten)",
                "0.15 kip treats kh as a force",
                "266 kip ≈ W/kh incorrectly"
              ],
              "explanation": "Pseudostatic horizontal force is kh·W = 6 kip. Forgetting to multiply, or dividing by kh, are common slips.",
              "miss": "Inertia = kh·W, not W and not W/kh.",
              "fepe": "Fh = kh W (kv W if vertical used)."
            }
          ]
        }
      ],
      "topic": 4
    }
  ]
});
