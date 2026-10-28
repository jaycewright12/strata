/*
 * STRATA built-in pack: GEO PE · 4b. Earthquake Engineering & Dynamic Loads (Expansion) (v1.0.0)
 * Personal use only. Original questions based on Jayce's study library
 * (NCEES handbook, FHWA GEC 5, NHI-06-088, UFC 3-220-10, ASCE/Vandevelde notes).
 * Do not redistribute.
 * Maps to PE topic 4 — conceptual + PE bench tracks (expansion).
 * Loaded via <script src> (listed in packs/index.js).
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  "format": "strata-pack",
  "id": "geo-pe-04b-earthquake",
  "title": "GEO PE · 4b. Earthquake Engineering & Dynamic Loads (Expansion)",
  "version": "1.0.0",
  "description": "Personal use only. Original expansion questions based on Jayce's study library (GEC 3, ASCE 7 site class framing, NCEES HB, Vandevelde Depth I liquefaction). Do not redistribute. Complements geo-pe-04-earthquake.",
  "units": [
    {
      "id": "gpe04b-eq",
      "title": "4b. Earthquake · Expansion",
      "blurb": "Site Class D, vs̄, liquefaction depth/fines/spreading/settlement, clay softening, Class F, rd, MSF, M–O, amax, dry sand, FS<1, site-class N.",
      "lessons": [
        {
          "id": "gpe04b-eq-1",
          "title": "Earthquake · Concepts (expansion)",
          "minutes": 40,
          "xp": 60,
          "summary": "Fifteen expansion items across 4A–4B.",
          "items": [
            {
              "id": "gpe04b-eq-1-01",
              "type": "mcq",
              "label": "4A · Site Class D",
              "stem": "Per ASCE 7 / PE seismic site-class framing, Site Class D (stiff soil) is most nearly associated with average upper-100-ft properties in which band?",
              "choices": [
                {
                  "id": "a",
                  "text": "vs̄ between about 600 and 1,200 ft/s (or equivalent N / Su bands for Class D)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "vs̄ > 5,000 ft/s (Class A rock)"
                },
                {
                  "id": "c",
                  "text": "vs̄ < 600 ft/s soft soil (Class E)"
                },
                {
                  "id": "d",
                  "text": "Any profile with a single SPT N = 100 at 5 ft"
                }
              ],
              "explanation": "Class D ≈ 600 < vs̄ ≤ 1,200 ft/s with parallel N/Su criteria.",
              "miss": "Class D = stiff soil band.",
              "fepe": "Site Class D: mid stiff-soil vs/N/Su band."
            },
            {
              "id": "gpe04b-eq-1-02",
              "type": "mcq",
              "label": "4A · vs̄ formula",
              "stem": "Average shear-wave velocity over the upper 100 ft is computed most nearly as:",
              "choices": [
                {
                  "id": "a",
                  "text": "Arithmetic mean of layer vs values ignoring thickness"
                },
                {
                  "id": "b",
                  "text": "vs̄ = Σ di / Σ(di/vsi) (travel-time / thickness-weighted harmonic form)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "The maximum vs in any layer"
                },
                {
                  "id": "d",
                  "text": "SPT N60 averaged then converted with no depth weighting"
                }
              ],
              "explanation": "vs̄ = Σdi/Σ(di/vsi) — not arithmetic mean of vs.",
              "miss": "Use travel-time weighting.",
              "fepe": "vs̄ = Σdi / Σ(di/vsi)."
            },
            {
              "id": "gpe04b-eq-1-03",
              "type": "mcq",
              "label": "4B · Liquefaction depth screen",
              "stem": "In simplified liquefaction screening practice, evaluation is most commonly emphasized for saturated sandy soils within approximately:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only the upper 1 ft"
                },
                {
                  "id": "b",
                  "text": "Only below 100 ft"
                },
                {
                  "id": "c",
                  "text": "About the upper 50–80 ft (deeper soils often screened out or treated as low risk in simplified methods)",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Any depth including dry sands above the WT"
                }
              ],
              "explanation": "Simplified procedures focus on shallow saturated sands.",
              "miss": "Shallow saturated sands — not dry or arbitrarily deep.",
              "fepe": "Simplified liquefaction: ~upper 50–80 ft saturated sand."
            },
            {
              "id": "gpe04b-eq-1-04",
              "type": "mcq",
              "label": "4B · Fines content effect",
              "stem": "Holding (N1)60 fixed, increasing nonplastic to low-plasticity fines content in simplified CRR charts most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Decreases CRR toward zero always"
                },
                {
                  "id": "b",
                  "text": "Has no effect in any published chart"
                },
                {
                  "id": "c",
                  "text": "Forces Site Class F automatically"
                },
                {
                  "id": "d",
                  "text": "Increases the clean-sand-equivalent CRR adjustment (within chart range) relative to clean sand at the same raw (N1)60",
                  "correct": true
                }
              ],
              "explanation": "Fines corrections typically raise equivalent clean-sand resistance within chart limits.",
              "miss": "Fines correction typically raises CRR vs clean sand at same N.",
              "fepe": "CRR charts: fines adjustment on (N1)60."
            },
            {
              "id": "gpe04b-eq-1-05",
              "type": "mcq",
              "label": "4B · Lateral spreading",
              "stem": "Earthquake-induced lateral spreading is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Downslope or toward a free face permanent lateral displacement of liquefied or softened ground",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Elastic site amplification of rock PGA only"
                },
                {
                  "id": "c",
                  "text": "Static slope creep unrelated to shaking"
                },
                {
                  "id": "d",
                  "text": "Heave of expansive clay on wetting"
                }
              ],
              "explanation": "Lateral spreading = permanent lateral displacement of liquefied ground toward free faces or down gentle slopes.",
              "miss": "Spreading ≠ site amplification.",
              "fepe": "Lateral spreading: liquefaction + free face/slope displacement."
            },
            {
              "id": "gpe04b-eq-1-06",
              "type": "mcq",
              "label": "4B · Liquefaction settlement",
              "stem": "Post-liquefaction reconsolidation settlement of a level saturated sand site is most nearly estimated from:",
              "choices": [
                {
                  "id": "a",
                  "text": "Only drained φ′ from CD tests"
                },
                {
                  "id": "b",
                  "text": "Volumetric strain correlations with (N1)60 / CSR (Tokimatsu–Seed / Ishihara–Yoshimine style charts)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Atterberg limits alone"
                },
                {
                  "id": "d",
                  "text": "OSHA trench slope tables"
                }
              ],
              "explanation": "PE liquefaction settlement uses volumetric strain vs N/CSR charts.",
              "miss": "Volumetric strain vs N/CSR.",
              "fepe": "Post-liq. settlement from volumetric-strain correlations."
            },
            {
              "id": "gpe04b-eq-1-07",
              "type": "mcq",
              "label": "4B · Clay cyclic softening",
              "stem": "Sensitive or soft clays under strong cyclic shaking are most nearly susceptible to:",
              "choices": [
                {
                  "id": "a",
                  "text": "Classic clean-sand liquefaction with zero fines"
                },
                {
                  "id": "b",
                  "text": "No strength loss ever if PI > 0"
                },
                {
                  "id": "c",
                  "text": "Cyclic softening / strength degradation (distinct from sand liquefaction), important for Site Class F soft-clay triggers",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Only increases in undrained strength during shaking"
                }
              ],
              "explanation": "Soft/sensitive clays undergo cyclic softening — different from sand liquefaction.",
              "miss": "Clays: cyclic softening ≠ sand liquefaction.",
              "fepe": "Soft clay: cyclic softening under strong shaking."
            },
            {
              "id": "gpe04b-eq-1-08",
              "type": "mcq",
              "label": "4A · Site Class F soft clay",
              "stem": "Which soft-clay condition most nearly forces Site Class F (site-specific response) in ASCE 7 framing used on the PE?",
              "choices": [
                {
                  "id": "a",
                  "text": "Any fill thicker than 1 ft"
                },
                {
                  "id": "b",
                  "text": "SPT N > 50 everywhere"
                },
                {
                  "id": "c",
                  "text": "vs̄ > 5,000 ft/s"
                },
                {
                  "id": "d",
                  "text": "A thick layer of soft clay meeting the code’s thickness + plasticity/undrained-strength criteria",
                  "correct": true
                }
              ],
              "explanation": "Class F includes liquefiable soils, quick/sensitive clays, and thick soft clays per ASCE 7.",
              "miss": "Thick soft clay → Class F.",
              "fepe": "Site Class F: soft clay / liquefiable / sensitive triggers."
            },
            {
              "id": "gpe04b-eq-1-09",
              "type": "mcq",
              "label": "4B · CSR rd role",
              "stem": "In the simplified CSR equation, the stress-reduction factor rd most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Accounts for the flexible soil-column dynamic response (CSR decreases with depth relative to a rigid column)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Converts SPT to CPT"
                },
                {
                  "id": "c",
                  "text": "Is identical to MSF"
                },
                {
                  "id": "d",
                  "text": "Equals the overconsolidation ratio"
                }
              ],
              "explanation": "rd < 1 with depth; CSR = 0.65(amax/g)(σv/σ′v)rd.",
              "miss": "rd ≠ MSF.",
              "fepe": "rd: flexible-column stress reduction vs depth."
            },
            {
              "id": "gpe04b-eq-1-10",
              "type": "mcq",
              "label": "4B · MSF direction",
              "stem": "For a magnitude M = 6.5 event versus the M = 7.5 baseline in simplified liquefaction, MSF is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Less than 1.0 (increases demand)"
                },
                {
                  "id": "b",
                  "text": "Greater than 1.0 (reduces equivalent demand / raises FS for smaller magnitudes)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "Exactly 0 always"
                },
                {
                  "id": "d",
                  "text": "Equal to rd"
                }
              ],
              "explanation": "MSF > 1 for M < 7.5.",
              "miss": "Smaller M → MSF > 1.",
              "fepe": "MSF > 1 when M < 7.5."
            },
            {
              "id": "gpe04b-eq-1-11",
              "type": "mcq",
              "label": "4B · Pseudostatic wall",
              "stem": "In a pseudostatic retaining-wall analysis, applying kh through Mononobe–Okabe most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Ignores inertia and uses static Ka only"
                },
                {
                  "id": "b",
                  "text": "Replaces all water pressures with zero"
                },
                {
                  "id": "c",
                  "text": "Increases the active earth-pressure coefficient (θ-based) relative to static Ka for horizontal inertia toward the active wedge",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Always reduces earth pressure below static Ka"
                }
              ],
              "explanation": "Kae exceeds static Ka when kh drives the wedge.",
              "miss": "M–O seismic active ≥ static active.",
              "fepe": "Mononobe–Okabe: Kae > Ka with kh."
            },
            {
              "id": "gpe04b-eq-1-12",
              "type": "mcq",
              "label": "4A · amax for CSR",
              "stem": "For liquefaction CSR in many PE presentations, amax is most nearly taken as:",
              "choices": [
                {
                  "id": "a",
                  "text": "Always SDS numerically with no site factors"
                },
                {
                  "id": "b",
                  "text": "Always 1.0 g"
                },
                {
                  "id": "c",
                  "text": "The shear-wave velocity in ft/s"
                },
                {
                  "id": "d",
                  "text": "The site-adjusted peak ground acceleration (PGA_M / site-modified PGA as specified) — not an unadjusted short-period spectral value used blindly",
                  "correct": true
                }
              ],
              "explanation": "CSR uses site PGA/amax — do not blindly substitute SDS.",
              "miss": "CSR needs amax (PGA).",
              "fepe": "Liquefaction CSR: use site PGA / amax."
            },
            {
              "id": "gpe04b-eq-1-13",
              "type": "mcq",
              "label": "4B · Dry sand above WT",
              "stem": "A clean loose sand above a deep water table (unsaturated) under strong shaking is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "Not a classical liquefaction candidate in the simplified saturated-sand procedure (may still densify/settle without undrained excess-u liquefaction)",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "Guaranteed to liquefy if N < 10"
                },
                {
                  "id": "c",
                  "text": "Automatically Site Class F"
                },
                {
                  "id": "d",
                  "text": "Required to use Mononobe–Okabe for every footing"
                }
              ],
              "explanation": "Simplified liquefaction requires saturation.",
              "miss": "No saturation → no classical liquefaction screen.",
              "fepe": "Liquefaction procedure assumes saturated sands."
            },
            {
              "id": "gpe04b-eq-1-14",
              "type": "mcq",
              "label": "4B · FS liquefaction interpretation",
              "stem": "A simplified liquefaction analysis gives FS_liq = CRR/CSR = 0.85 at mid-layer. The most reasonable engineering interpretation is:",
              "choices": [
                {
                  "id": "a",
                  "text": "Absolutely safe because FS > 0.5"
                },
                {
                  "id": "b",
                  "text": "Liquefaction is predicted / likely under the design ground motion (FS < 1) — consider consequences (settlement, spreading, bearing)",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "FS is undefined for sands"
                },
                {
                  "id": "d",
                  "text": "Increase Nmeas by MSF and stop"
                }
              ],
              "explanation": "FS < 1 → liquefaction expected under the design motion.",
              "miss": "FS_liq < 1 → liquefaction predicted.",
              "fepe": "FS = CRR/CSR; FS < 1 fails."
            },
            {
              "id": "gpe04b-eq-1-15",
              "type": "mcq",
              "label": "4A · Site-class N",
              "stem": "When using average SPT N for Site Class over 100 ft, N for each layer is most nearly:",
              "choices": [
                {
                  "id": "a",
                  "text": "(N1)60 with overburden correction always required by ASCE for site class averaging"
                },
                {
                  "id": "b",
                  "text": "Always set to 0 for fills"
                },
                {
                  "id": "c",
                  "text": "Field N (as specified by ASCE site-class procedures — distinct from liquefaction (N1)60) thickness-weighted over 100 ft",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "Equal to vs in ft/s"
                }
              ],
              "explanation": "Site-class average N ≠ liquefaction (N1)60cs.",
              "miss": "Site-class N ≠ liquefaction (N1)60.",
              "fepe": "Site Class from N: thickness-weighted field N per ASCE."
            }
          ]
        }
      ],
      "topic": 4
    },
    {
      "id": "gpe04b-bench",
      "title": "PE bench · Earthquake (expansion)",
      "bench": true,
      "blurb": "vs̄, CSR, FS_liq, Fh, MSF×CRR.",
      "lessons": [
        {
          "id": "gpe04b-pe-1",
          "title": "Earthquake · PE numbers (expansion)",
          "minutes": 25,
          "xp": 40,
          "summary": "Five PE-depth seismic calculations.",
          "items": [
            {
              "id": "gpe04b-pe-1-01",
              "type": "mcq",
              "label": "vs̄ average",
              "stem": "Most nearly, vs̄ for the upper 100 ft is:",
              "choices": [
                {
                  "id": "a",
                  "text": "950 ft/s (arithmetic-leaning slip)"
                },
                {
                  "id": "b",
                  "text": "1,100 ft/s (arithmetic mean of 500 and 1,400)"
                },
                {
                  "id": "c",
                  "text": "1,400 ft/s (deeper layer only)"
                },
                {
                  "id": "d",
                  "text": "910 ft/s",
                  "correct": true
                }
              ],
              "explanation": "vs̄=100/(30/500+70/1400)=100/0.110≈909≈910 ft/s.",
              "miss": "Use travel-time form.",
              "fepe": "vs̄ = Σdi/Σ(di/vsi).",
              "pe": true,
              "given": "vs̄ = Σ di / Σ (di/vsi) over the upper 100 ft",
              "vignette": "0–30 ft, vs=500 ft/s; 30–100 ft, vs=1,400 ft/s.",
              "work": [
                "Σ(d/vs)=0.060+0.050=0.110",
                "vs̄=100/0.110≈910 ft/s"
              ]
            },
            {
              "id": "gpe04b-pe-1-02",
              "type": "mcq",
              "label": "CSR compute",
              "stem": "Most nearly, CSR is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.18",
                  "correct": true
                },
                {
                  "id": "b",
                  "text": "0.25 (omitting 0.65/rd partially)"
                },
                {
                  "id": "c",
                  "text": "0.12 (σ′/σ inverted)"
                },
                {
                  "id": "d",
                  "text": "0.65 (leading coefficient alone)"
                }
              ],
              "explanation": "CSR=0.65(0.25)(2000/1600)(0.90)≈0.183≈0.18.",
              "miss": "Include 0.65, σv/σ′v, and rd.",
              "fepe": "CSR = 0.65 (amax/g)(σv/σ′v) rd.",
              "pe": true,
              "given": "CSR = 0.65 (amax/g) (σv/σ′v) rd",
              "vignette": "amax/g=0.25; σv=2,000 psf; σ′v=1,600 psf; rd=0.90.",
              "work": [
                "CSR≈0.18"
              ]
            },
            {
              "id": "gpe04b-pe-1-03",
              "type": "mcq",
              "label": "FS liquefaction",
              "stem": "Most nearly, FS against liquefaction is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.75 (CSR/CRR inverted)"
                },
                {
                  "id": "b",
                  "text": "1.33",
                  "correct": true
                },
                {
                  "id": "c",
                  "text": "1.00 (forcing equality)"
                },
                {
                  "id": "d",
                  "text": "0.20 (CRR − CSR)"
                }
              ],
              "explanation": "FS=0.24/0.18=1.33.",
              "miss": "FS = CRR/CSR.",
              "fepe": "FS_liq = CRR / CSR.",
              "pe": true,
              "given": "FS = CRR / CSR",
              "vignette": "CSR=0.18; CRR=0.24 (MSF and Kσ already applied).",
              "work": [
                "FS=1.33"
              ]
            },
            {
              "id": "gpe04b-pe-1-04",
              "type": "mcq",
              "label": "Pseudostatic force",
              "stem": "Most nearly, the horizontal inertial force is:",
              "choices": [
                {
                  "id": "a",
                  "text": "50 kips (0.10×W)"
                },
                {
                  "id": "b",
                  "text": "200 kips (using W)"
                },
                {
                  "id": "c",
                  "text": "100 kips",
                  "correct": true
                },
                {
                  "id": "d",
                  "text": "20 kips (kh² W)"
                }
              ],
              "explanation": "Fh=kh W=0.20×500=100 kips.",
              "miss": "Fh = kh W.",
              "fepe": "Pseudostatic Fh = kh W.",
              "pe": true,
              "given": "Fh = kh W",
              "vignette": "W=500 kips; kh=0.20.",
              "work": [
                "Fh=100 kips"
              ]
            },
            {
              "id": "gpe04b-pe-1-05",
              "type": "mcq",
              "label": "MSF application",
              "stem": "Most nearly, the magnitude-adjusted CRR is:",
              "choices": [
                {
                  "id": "a",
                  "text": "0.18 (CSR copied)"
                },
                {
                  "id": "b",
                  "text": "0.22 (MSF omitted)"
                },
                {
                  "id": "c",
                  "text": "0.15 (divided by MSF)"
                },
                {
                  "id": "d",
                  "text": "0.29",
                  "correct": true
                }
              ],
              "explanation": "CRR_M=0.22×1.30≈0.29.",
              "miss": "Multiply CRR_M7.5 by MSF.",
              "fepe": "CRR(M) = CRR_M7.5 × MSF.",
              "pe": true,
              "given": "CRR_M = CRR_M7.5 × MSF; MSF=1.30 for M=6.5 (given)",
              "vignette": "CRR at M=7.5 is 0.22.",
              "work": [
                "CRR=0.22×1.30≈0.29"
              ]
            }
          ]
        }
      ],
      "topic": 4
    }
  ]
});
