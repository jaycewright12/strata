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
| `core.js` | `core` | 2–10 (shells + remapped legacy bank) |
| `geo-pe-01-site-char.js` | `geo-pe-01-site-char` | 1 Site Characterization |

List every built-in `.js` file in `packs/index.js` (also used by `sw.js` precache).

## Progress keys

localStorage `strata-fepe-v1`: keep field shapes. Prefer stable **item** ids (`missed[]`) and **lesson** ids (`completed[]`). If lesson ids change, add a one-time remap in `load()`.

## Mixed set

**All Topics · Conceptual** (home top card) samples 2 items from every non-bench lesson of every loaded pack. PE bench items are never included.
