# STRATA pack format (app notes) — PE Civil–Geotechnical syllabus

Full format lives in the repo `FORMAT.md` (parent of `app/`). This note covers the **April 2024 NCEES PE Civil–Geotechnical** topic layout used by the built-in bank.

## PE knowledge areas (exact section titles)

1. Site Characterization
2. Soil Mechanics, Laboratory Testing, and Analysis
3. Construction Observation, Monitoring, QA/QC, and Safety
4. Earthquake Engineering and Dynamic Loads
5. Earth Structures, Ground Improvement, and Pavement
6. Groundwater and Seepage
7. Problematic Soil and Rock Conditions
8. Retaining Structures
9. Shallow Foundations
10. Deep Foundations

## How packs declare a topic

Each **unit** should set `"topic": N` with N in 1–10. The home screen always shows all 10 sections; units with matching `topic` land in that section.

| Track | How |
|---|---|
| **Conceptual** | Unit with `topic: N` and **no** `bench: true`. Path lessons; unlock in order within the unit. |
| **PE Bench** | Unit with `topic: N` and `bench: true`. Items usually have `pe: true`, `given`, and `work`. Always unlocked. |

Conceptual and PE calculation benches stay **separate units** under the **same** topic number — do not mix PE calc items into conceptual lessons.

Empty topics: a unit may have `"lessons": []` (syllabus shell → “Coming soon”). Packs that only contain empty shells are rejected (a pack still needs ≥1 valid question).

## Built-in packs

| File | Pack id | Topics |
|---|---|---|
| `geo-pe-01-site-char.js` | `geo-pe-01-site-char` | 1 Site Characterization |
| `geo-pe-02-soil-mech.js` | `geo-pe-02-soil-mech` | 2 Soil Mechanics, Lab Testing & Analysis |
| `geo-pe-03-construction.js` | `geo-pe-03-construction` | 3 Construction Observation, Monitoring, QA/QC, and Safety |
| `geo-pe-04-earthquake.js` | `geo-pe-04-earthquake` | 4 Earthquake Engineering and Dynamic Loads |
| `geo-pe-05-earth-structures.js` | `geo-pe-05-earth-structures` | 5 Earth Structures, Ground Improvement, and Pavement |
| `geo-pe-06-groundwater.js` | `geo-pe-06-groundwater` | 6 Groundwater and Seepage |
| `geo-pe-07-problematic.js` | `geo-pe-07-problematic` | 7 Problematic Soil and Rock Conditions |
| `geo-pe-08-retaining.js` | `geo-pe-08-retaining` | 8 Retaining Structures |
| `geo-pe-09-shallow.js` | `geo-pe-09-shallow` | 9 Shallow Foundations |
| `geo-pe-10-deep.js` | `geo-pe-10-deep` | 10 Deep Foundations |
| `core.js` | `core` | Remapped legacy bank kept as **Additional** under topics 2, 5 (bench), 6, 8, 9 (72 items). Empty Coming-soon shells removed where a GEO PE pack owns the topic. |

List every built-in `.js` file in `packs/index.js` (also used by `sw.js` precache). Topic packs load before `core.js` so they own the primary Conceptual + PE Bench tracks.

## Section scores (home)

Optional `sectionStats` under `strata-fepe-v1` (never reshapes existing fields). Key `"1"`…`"10"` for each PE topic, and `"all"` for All Topics · Conceptual mixed runs.

Each entry: `{ best, sum, n }` where a **run** is one finished lesson (Conceptual or PE Bench) in that section, and the run score is `correct / total` for that lesson. **Best** = max run score; **Average** = `sum / n`. Hearts are not used for gameplay (keys `hearts` / `heartTs` may still exist for old saves).

## Progress keys

localStorage `strata-fepe-v1`: keep field shapes. Prefer stable **item** ids (`missed[]`) and **lesson** ids (`completed[]`). If lesson ids change, add a one-time remap in `load()`.

## Mixed set

**All Topics · Conceptual** (home top card) samples 2 items from every non-bench lesson of every loaded pack. PE bench items are never included.
