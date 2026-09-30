/*
 * STRATA built-in pack: core question bank (8 units, 10 lessons, 72 items).
 * Lesson and item ids are stored in saved progress (strata-fepe-v1 .completed / .missed):
 * never rename them. See FORMAT.md for the pack format.
 * Loaded via <script src> (listed in packs/index.js), so it works over file:// and http.
 */
(window.STRATA_PACKS = window.STRATA_PACKS || []).push({
  id: "core",
  title: "STRATA core bank",
  version: "2.0.0",
  builtin: true,
  appName: "STRATA",
  tagline: "See what the soil will do.",
  units: [
    {
      id: "effective-stress",
      title: "Effective stress",
      blurb: "The spine of every geotech item on the FE and PE. Strength, settlement, and seepage all start here.",
      lessons: [
        {
          id: "es-1",
          title: "Three stresses",
          minutes: 5,
          xp: 20,
          summary: "Total stress is the weight above you. Pore pressure is the water. The skeleton only feels the difference.",
          items: [
            {
              id: "es-1-a",
              type: "mcq",
              label: "Definition",
              stem: "At a point in saturated soil, which quantity is carried by the grain-to-grain contacts?",
              choices: [
                { id: "a", text: "Total vertical stress, σ" },
                { id: "b", text: "Pore-water pressure, u", },
                { id: "c", text: "Effective stress, σ′", correct: true },
                { id: "d", text: "The sum of σ and u" }
              ],
              explanation: "Terzaghi’s principle: σ′ = σ − u. The water carries u; the mineral skeleton carries σ′. Strength, stiffness, and volume change track σ′, not σ.",
              miss: "A common miss is to treat total stress as what the soil “feels.” Total stress is just the overburden. The contacts feel what is left after pore pressure is subtracted.",
              fepe: "FE/PE: if a stem gives γ, depth, and a water table, they are usually fishing for σ′ at a named elevation."
            },
            {
              id: "es-1-b",
              type: "mcq",
              label: "What can you compute?",
              vignette: "You know only that a point sits 6 ft below a hydrostatic water table. You do not know the soil unit weight.",
              stem: "Which stress can you compute with that information alone?",
              choices: [
                { id: "a", text: "Total vertical stress" },
                { id: "b", text: "Effective vertical stress" },
                { id: "c", text: "Pore-water pressure", correct: true },
                { id: "d", text: "Shear strength" }
              ],
              explanation: "Hydrostatic pore pressure depends only on the height of water above the point: u = γw · h. Total and effective stress also need the soil unit weights in the column above.",
              miss: "Depth below the ground surface is not the same as head above the point. For u, you need the water column, not the soil column.",
              fepe: "On the exam, hydrostatic means no seepage — equipotentials are horizontal and u = γw z below the WT."
            },
            {
              id: "es-1-c",
              type: "mcq",
              label: "Partition",
              stem: "A saturated element has σv = 2,000 psf and u = 750 psf. What is true?",
              choices: [
                { id: "a", text: "The skeleton is carrying 2,000 psf" },
                { id: "b", text: "The skeleton is carrying 1,250 psf", correct: true },
                { id: "c", text: "The skeleton is carrying 750 psf" },
                { id: "d", text: "The water is carrying 2,000 psf" }
              ],
              explanation: "σ′v = 2,000 − 750 = 1,250 psf. That is the intergranular stress. Water carries 750 psf as pore pressure.",
              miss: "Do not add the two stresses. Pore pressure is already inside the total stress; you subtract it."
            },
            {
              id: "es-1-d",
              type: "mcq",
              label: "Dry crust",
              vignette: "A point is above the water table in a coarse clean sand. Capillary rise is negligible.",
              stem: "Which statement is the best model?",
              choices: [
                { id: "a", text: "u ≈ 0, so σ′ ≈ σ", correct: true },
                { id: "b", text: "u is large and negative, so σ′ ≫ σ" },
                { id: "c", text: "The sand cannot carry effective stress above the WT" },
                { id: "d", text: "Total stress is zero above the WT" }
              ],
              explanation: "In a coarse sand the capillary fringe is thin. Pore pressure above the WT is taken as zero for most FE/PE work, so effective stress equals total stress there. Fine silts and clays are a different story — they can hold suction.",
              miss: "Negative pore pressure (suction) is real in fine soils. Clean coarse sand is the case where you usually ignore it."
            },
            {
              id: "es-1-e",
              type: "mcq",
              label: "What changes strength?",
              stem: "Two identical saturated sand elements have the same void ratio. Element A has higher effective stress than element B. Which is true?",
              choices: [
                { id: "a", text: "A and B have the same drained strength" },
                { id: "b", text: "A has higher drained frictional strength", correct: true },
                { id: "c", text: "B is denser, so B is stronger" },
                { id: "d", text: "Strength depends only on total stress" }
              ],
              explanation: "For cohesionless soil, drained strength is σ′ tan φ′. Same density, higher σ′ → higher shear strength. Total stress does not appear in the failure criterion.",
              miss: "Void ratio sets φ′ (and dilatancy). The stress level sets how much friction you can mobilize. You need both."
            },
            {
              id: "es-1-f",
              type: "mcq",
              label: "Notation",
              stem: "On the FE/PE, a prime on a stress (σ′ or p′) almost always signals that the value is:",
              choices: [
                { id: "a", text: "An allowable (factored) design stress" },
                { id: "b", text: "An effective stress", correct: true },
                { id: "c", text: "A stress in the minor-principal direction" },
                { id: "d", text: "A stress measured in a lab, not in the field" }
              ],
              explanation: "Prime means effective. Unprimed σ or p is total. Mixing them is the single most expensive notation error on geotech items.",
              miss: "The prime is not “design” and not “laboratory.” It is the Terzaghi split."
            },
            {
              id: "es-1-g",
              type: "mcq",
              label: "Buoyancy",
              stem: "Below a hydrostatic water table, the vertical effective stress increases with depth at a rate closest to:",
              choices: [
                { id: "a", text: "The dry unit weight, γd" },
                { id: "b", text: "The saturated unit weight, γsat" },
                { id: "c", text: "The buoyant unit weight, γ′ = γsat − γw", correct: true },
                { id: "d", text: "The unit weight of water, γw" }
              ],
              explanation: "dσv/dz = γsat and du/dz = γw, so dσ′v/dz = γsat − γw = γ′. That is why submerged unit weight appears in so many bearing-capacity and slope formulas.",
              miss: "Using γsat for the effective-stress gradient double-counts the water. The water’s weight is already in u."
            },
            {
              id: "es-1-h",
              type: "mcq",
              label: "Field feel",
              vignette: "A technician says: “The total overburden at 20 ft is 2,400 psf, so the sand down there is locked up and strong.”",
              stem: "What should you ask next?",
              choices: [
                { id: "a", text: "Nothing — total overburden is the strength parameter" },
                { id: "b", text: "Where is the water table, and what is u at 20 ft?", correct: true },
                { id: "c", text: "What is the air temperature at the surface?" },
                { id: "d", text: "Is 20 ft deeper than the frost line?" }
              ],
              explanation: "Without pore pressure you do not know σ′. A high water table can leave a “heavy” column with a weak skeleton. Strength lives on σ′.",
              miss: "Frost depth matters for pavements and shallow footings, not for this claim."
            }
          ]
        },
        {
          id: "es-2",
          title: "The water table moves",
          minutes: 6,
          xp: 22,
          summary: "Raise the water table and u goes up, σ′ goes down, and most “stability” numbers get worse — even though the soil got heavier.",
          items: [
            {
              id: "es-2-a",
              type: "mcq",
              label: "Cause → effect",
              vignette: "A uniform sand deposit. Water table rises 5 ft. No seepage, no external load added.",
              stem: "At a point that remains below the new water table, effective vertical stress:",
              choices: [
                { id: "a", text: "Increases, because the soil is heavier" },
                { id: "b", text: "Decreases", correct: true },
                { id: "c", text: "Stays the same, because total and pore pressure both rise equally everywhere" },
                { id: "d", text: "Becomes equal to the pore pressure" }
              ],
              explanation: "As the WT rises, a larger part of the column is saturated (γsat > γmoist) so total stress at depth usually increases a little — but u increases more (by γw times the rise, for points that were already saturated, u increases by γw Δh). Net: σ′ drops. Heavier ≠ stronger.",
              miss: "The ‘soil got heavier’ instinct is the classic trap. Weight went up and buoyancy went up more.",
              fepe: "If an item raises the WT and asks about bearing capacity or slope FS, the answer almost always gets worse."
            },
            {
              id: "es-2-b",
              type: "mcq",
              label: "Drawdown",
              stem: "Pumping lowers a hydrostatic water table in a sand. At a point that stays saturated, what happens immediately to σ′v?",
              choices: [
                { id: "a", text: "It decreases" },
                { id: "b", text: "It increases", correct: true },
                { id: "c", text: "It is unchanged because the grains did not move" },
                { id: "d", text: "It becomes negative" }
              ],
              explanation: "Lower WT → lower u. Total stress changes only if the saturation of the upper column changes, and even then the drop in u dominates at depth. Effective stress rises. That is why dewatering can densify sand — and why it can settle adjacent structures on clay.",
              miss: "Dewatering is not “taking weight off the soil.” It is taking water pressure off the skeleton."
            },
            {
              id: "es-2-c",
              type: "mcq",
              label: "Clay timing",
              vignette: "A wide fill is placed rapidly on a thick saturated clay. Permeability is very low.",
              stem: "Immediately after placement, the increase in vertical total stress in the clay is carried mostly by:",
              choices: [
                { id: "a", text: "A matching increase in effective stress" },
                { id: "b", text: "A matching increase in pore pressure", correct: true },
                { id: "c", text: "Negative pore pressure (suction)" },
                { id: "d", text: "Horizontal stress only" }
              ],
              explanation: "Undrained response of saturated clay: the water has nowhere to go, so Δu ≈ Δσ (for 1-D constrained loading). Effective stress — and therefore drained strength — has not yet increased. Consolidation is the later handoff from u to σ′.",
              miss: "People apply the long-term (drained) picture to the end-of-construction moment. Those are different items on the PE.",
              fepe: "End-of-construction in clay is often the critical undrained case. Long-term is drained, after dissipation."
            },
            {
              id: "es-2-d",
              type: "mcq",
              label: "After consolidation",
              stem: "Years after that same fill is in place, excess pore pressure in the clay has dissipated. Compared with the instant after loading:",
              choices: [
                { id: "a", text: "u is higher and σ′ is lower" },
                { id: "b", text: "u is back near hydrostatic and σ′ has increased", correct: true },
                { id: "c", text: "Both u and σ′ have returned to their pre-fill values" },
                { id: "d", text: "The fill load has vanished into the water" }
              ],
              explanation: "Consolidation is the transfer: excess u drains away, σ′ rises by about the same amount, the clay compresses, and undrained strength of NC clay increases for the next loading.",
              miss: "The fill is still there. Total stress stays high. Only the split between u and σ′ changes."
            },
            {
              id: "es-2-e",
              type: "mcq",
              label: "Capillary",
              stem: "In a fine silt, a point sits in the capillary fringe above the water table. Pore pressure there is best described as:",
              choices: [
                { id: "a", text: "Zero, always" },
                { id: "b", text: "Positive, equal to γw times height above the WT" },
                { id: "c", text: "Negative (suction), which increases σ′ above the total stress", correct: true },
                { id: "d", text: "Undefined, because there is no water" }
              ],
              explanation: "Tension in the pore water is negative u. σ′ = σ − (−|u|) = σ + |u|. That extra effective stress is why a damp silt trench wall can stand until it dries or floods.",
              miss: "The fringe is not dry. It is saturated or nearly so, with u < 0."
            },
            {
              id: "es-2-f",
              type: "mcq",
              label: "Flooded silt",
              vignette: "That same silt trench stood last week on suction. A storm saturates it from above and the suction is lost.",
              stem: "The most likely immediate change is:",
              choices: [
                { id: "a", text: "Effective stress in the trench wall drops and the face sloughs", correct: true },
                { id: "b", text: "Effective stress rises and the wall becomes stronger" },
                { id: "c", text: "Nothing, because silt has cohesion" },
                { id: "d", text: "The total unit weight drop is the governing effect" }
              ],
              explanation: "Apparent cohesion from suction is not true c′. Flood it, lose suction, lose σ′, lose the stand-up. Clean silt is famous for this.",
              miss: "Do not credit silt with the kind of cohesion you would assign a fat clay."
            },
            {
              id: "es-2-g",
              type: "mcq",
              label: "Slope instinct",
              stem: "All else equal, raising the phreatic surface through a granular slope typically:",
              choices: [
                { id: "a", text: "Increases factor of safety because self-weight goes up" },
                { id: "b", text: "Decreases factor of safety", correct: true },
                { id: "c", text: "Has no effect unless the slope angle changes" },
                { id: "d", text: "Converts the soil from drained to undrained" }
              ],
              explanation: "Seepage forces and reduced σ′ both hurt. The infinite-slope drained equation has a (1 − ru) or buoyant-weight term for the submerged case. Water in the slope is not free ballast.",
              miss: "Self-weight in the numerator and denominator does not save you once buoyancy and seepage are in play."
            },
            {
              id: "es-2-h",
              type: "mcq",
              label: "Exam filter",
              stem: "A PE stem suddenly gives you a perched water table over a clay aquitard. The first question to ask is:",
              choices: [
                { id: "a", text: "Whether pore pressure under the perched table is still hydrostatic from the ground surface" },
                { id: "b", text: "Whether u in the perched zone is set by that local WT, and what happens below the aquitard", correct: true },
                { id: "c", text: "Whether perched water can be ignored because clay is impermeable" },
                { id: "d", text: "Whether total stress skips the perched water" }
              ],
              explanation: "A perched table resets the pore-pressure profile. Below an aquitard you may have a different head — even artesian. Never run a single hydrostatic line from the ground surface through a known perch or confined layer.",
              miss: "“Clay is impermeable” is not a license to ignore the water that is actually there."
            }
          ]
        },
        {
          id: "es-3",
          title: "Checkpoint: σ, u, σ′",
          minutes: 6,
          xp: 24,
          checkpoint: true,
          summary: "Mixed items. If these feel automatic, the rest of geotech gets much easier.",
          items: [
            {
              id: "es-3-a",
              type: "mcq",
              label: "Profile",
              vignette: "Dry sand 6 ft, then the WT, then saturated sand. You are asked for σ′ at 14 ft depth.",
              stem: "Which calculation structure is correct in spirit?",
              choices: [
                { id: "a", text: "γsat · 14 ft, because most of the profile is saturated" },
                { id: "b", text: "Total stress from the layered unit weights, minus u from 8 ft of water", correct: true },
                { id: "c", text: "γw · 14 ft" },
                { id: "d", text: "γdry · 14 ft − γw · 14 ft" }
              ],
              explanation: "Layer the totals: 6 ft of moist/dry γ plus 8 ft of γsat. Pore pressure uses only the 8 ft below the WT. Subtract. Do not pick one γ for the whole hole.",
              miss: "A single unit weight for a layered profile is the fastest way to miss an otherwise easy item."
            },
            {
              id: "es-3-b",
              type: "mcq",
              label: "Artesian",
              stem: "A sand aquifer is confined by clay. Piezometric level in the sand stands above the ground surface. At the top of the sand:",
              choices: [
                { id: "a", text: "u is higher than a hydrostatic-from-ground-surface estimate, so σ′ is lower", correct: true },
                { id: "b", text: "u cannot exceed atmospheric pressure" },
                { id: "c", text: "Effective stress is automatically zero" },
                { id: "d", text: "Total stress includes the extra head twice" }
              ],
              explanation: "Artesian head raises u. If u approaches σ, σ′ approaches zero and you get heave or a blow at the base of an excavation. That is a classic PE excavation item.",
              miss: "u is allowed to be larger than γw times depth to the ground surface when the source of head is a confined aquifer."
            },
            {
              id: "es-3-c",
              type: "mcq",
              label: "What does not care?",
              stem: "Which of the following is governed by total stress rather than effective stress?",
              choices: [
                { id: "a", text: "Drained shear strength of sand" },
                { id: "b", text: "One-dimensional consolidation settlement" },
                { id: "c", text: "The overburden used to compute geostatic vertical stress before you split out u", correct: true },
                { id: "d", text: "Liquefaction resistance of a sand" }
              ],
              explanation: "You always start with total vertical geostatic stress from unit weights. Then you subtract u to get the effective stress that actually runs strength and compressibility. The split is the point.",
              miss: "Liquefaction is an effective-stress collapse: cyclic undrained loading drives u up and σ′ down."
            },
            {
              id: "es-3-d",
              type: "mcq",
              label: "OCR",
              stem: "OCR is defined with which stresses?",
              choices: [
                { id: "a", text: "Maximum past total stress divided by current total stress" },
                { id: "b", text: "Maximum past effective stress divided by current effective vertical stress", correct: true },
                { id: "c", text: "Current pore pressure divided by preconsolidation pressure" },
                { id: "d", text: "Cu divided by σv" }
              ],
              explanation: "OCR = σ′p / σ′vo. Preconsolidation pressure is an effective stress. Using totals here scrambles every later settlement and SHANSEP item.",
              miss: "cu/σ′vo is a strength ratio that depends on OCR. It is not the definition of OCR."
            },
            {
              id: "es-3-e",
              type: "mcq",
              label: "Unload a clay",
              vignette: "A deep cut is excavated in saturated clay. Drainage is slow.",
              stem: "Immediately after excavation, the clay under the cut most nearly:",
              choices: [
                { id: "a", text: "Loses total stress, drops u, and is already at its long-term σ′" },
                { id: "b", text: "Loses total stress while u lags, so σ′ is temporarily higher than it will be long-term", correct: true },
                { id: "c", text: "Gains strength with time as it swells" },
                { id: "d", text: "Cannot change effective stress because clay is undrained" }
              ],
              explanation: "Unloading a clay is the mirror of fill loading. Short-term, negative excess u can keep σ′ (and cu) higher. Long-term swelling: u rises back toward the new equilibrium, σ′ falls, and some cuts fail months later.",
              miss: "“Undrained means nothing changes” is false. Total stress changed. u has not finished adjusting.",
              fepe: "Cuts in clay: short-term often safer than long-term. Embankments on clay: short-term often worse than long-term."
            },
            {
              id: "es-3-f",
              type: "mcq",
              label: "Quick check",
              stem: "Effective stress at a point can become zero while the soil is still there. That condition is associated with:",
              choices: [
                { id: "a", text: "Overconsolidation" },
                { id: "b", text: "A quick (boiling) condition or liquefaction", correct: true },
                { id: "c", text: "The compaction optimum" },
                { id: "d", text: "At-rest earth pressure" }
              ],
              explanation: "σ′ → 0 means the skeleton is floating. Upward seepage at the critical gradient, or cyclic liquefaction, both get you there. The deposit has not vanished; it has lost frictional strength.",
              miss: "OCR high means extra past σ′, the opposite of a zero-σ′ event."
            }
          ]
        }
      ]
    },
    {
      id: "seepage",
      title: "Seepage & heave",
      blurb: "Gradients, flownets, and the moment a soil stops being a solid.",
      lessons: [
        {
          id: "sp-1",
          title: "Gradient and piping",
          minutes: 6,
          xp: 22,
          summary: "i = Δh/L. When i reaches γ′/γw, effective stress at the exit can vanish.",
          items: [
            {
              id: "sp-1-a",
              type: "mcq",
              label: "Definition",
              stem: "Hydraulic gradient i is:",
              choices: [
                { id: "a", text: "Pore pressure divided by unit weight of soil" },
                { id: "b", text: "Head loss divided by the length of the flow path", correct: true },
                { id: "c", text: "Flow rate divided by permeability" },
                { id: "d", text: "The slope of the ground surface" }
              ],
              explanation: "i = Δh / L. Darcy’s law is v = k i. The dangerous i is the exit gradient where flow comes up through a free surface of soil.",
              miss: "Ground slope is not i unless you are looking at a particular seepage path that happens to follow the slope."
            },
            {
              id: "sp-1-b",
              type: "mcq",
              label: "Critical i",
              stem: "The critical hydraulic gradient for a cohesionless soil is most nearly:",
              choices: [
                { id: "a", text: "γsat / γw" },
                { id: "b", text: "γ′ / γw", correct: true },
                { id: "c", text: "γw / γsat" },
                { id: "d", text: "Always 1.0" }
              ],
              explanation: "Set σ′ = 0 at the top of a soil column with upward flow: ic = γ′ / γw = (γsat / γw) − 1, typically ~0.8 to 1.2, not a universal 1.0.",
              miss: "Memorizing “ic = 1” is close but sloppy. The exam can give Gs and e and expect (Gs − 1)/(1 + e)."
            },
            {
              id: "sp-1-c",
              type: "mcq",
              label: "Exit",
              vignette: "Sheet-pile cofferdam in sand. Water is high outside, low inside. Flow goes under the pile and up inside.",
              stem: "Where is piping or a blow most likely to start?",
              choices: [
                { id: "a", text: "On the high-water side, at the ground surface" },
                { id: "b", text: "At the pile tip, because velocity is highest there only" },
                { id: "c", text: "On the excavated side, where flow exits the sand", correct: true },
                { id: "d", text: "Halfway along the underside of the pile" }
              ],
              explanation: "Heave and piping are exit-face problems. The inside floor is where an upward gradient can unload σ′. Longer seepage path (deeper pile, longer blanket) drops i.",
              miss: "The tip is a high-gradient zone in a flownet, but the failure you see is the unweighted exit surface boiling.",
              fepe: "FS against heave ≈ ic / i_exit, or a weighted-soil-block check on the exit prism."
            },
            {
              id: "sp-1-d",
              type: "mcq",
              label: "Make it safer",
              stem: "Which change most reliably lowers the exit gradient of that cofferdam?",
              choices: [
                { id: "a", text: "Excavate the inside deeper, to reduce the inside water column" },
                { id: "b", text: "Drive the sheet pile deeper or add a filtered surcharge on the inside", correct: true },
                { id: "c", text: "Raise the outside water to increase confinement" },
                { id: "d", text: "Use a coarser unfiltered drainage well at the exit" }
              ],
              explanation: "Deeper penetration lengthens L. A filtered berm adds weight (raises σ) at the exit. Deeper inside excavation shortens the remaining soil column and usually makes heave worse.",
              miss: "Coarse drains without filter criteria can start the pipe you were trying to prevent."
            },
            {
              id: "sp-1-e",
              type: "mcq",
              label: "Flownet",
              stem: "In a correctly drawn flownet, which statement is true?",
              choices: [
                { id: "a", text: "Flow lines may cross" },
                { id: "b", text: "Equipotential drops are equal between adjacent equipotential lines", correct: true },
                { id: "c", text: "Head is constant along a flow line" },
                { id: "d", text: "A square flownet means the soil is anisotropic" }
              ],
              explanation: "Equipotentials are equal-head lines; successive drops Δh = H / Nd. Flow lines are paths; head changes along them. An isotropic flownet is drawn in curvilinear squares.",
              miss: "Head is constant along an equipotential, not along a flow line."
            },
            {
              id: "sp-1-f",
              type: "mcq",
              label: "Darcy",
              stem: "If hydraulic gradient doubles and the soil stays laminar and saturated, specific discharge q:",
              choices: [
                { id: "a", text: "Halves" },
                { id: "b", text: "Stays the same because k is a material property" },
                { id: "c", text: "Doubles", correct: true },
                { id: "d", text: "Increases by a factor of four" }
              ],
              explanation: "Darcy: q = k i. k does not change just because you steepened the head drop. (Very high gradients in gravel can leave Darcy’s range — not the usual FE assumption.)",
              miss: "k is not the flow rate. k is the slope of q versus i."
            },
            {
              id: "sp-1-g",
              type: "mcq",
              label: "Anisotropy",
              stem: "A varved clay has kh ≫ kv. Seepage under a long levee will tend to:",
              choices: [
                { id: "a", text: "Prefer horizontal paths and can travel farther under the levee than an isotropic estimate suggests", correct: true },
                { id: "b", text: "Only move vertically, because gravity dominates" },
                { id: "c", text: "Ignore the layering once the levee is wide" },
                { id: "d", text: "Make a flownet unnecessary because k is large" }
              ],
              explanation: "Layered floodplain deposits are anisotropic. Underseepage analyses that assume isotropic k miss how far head can ride a sand seam.",
              miss: "Gravity sets the body force; the conductivity tensor sets the path."
            },
            {
              id: "sp-1-h",
              type: "mcq",
              label: "Filter",
              stem: "A filter between a protected soil and a drain is doing its job when it:",
              choices: [
                { id: "a", text: "Is much finer than the protected soil, so nothing can move" },
                { id: "b", text: "Is coarse enough to pass water and fine enough to hold the protected soil", correct: true },
                { id: "c", text: "Has the same grain-size curve as the protected soil" },
                { id: "d", text: "Is geotextile-only; granular filters are obsolete" }
              ],
              explanation: "Retention and permeability criteria (Terzaghi / NRCS / USACE) exist because the filter must do two opposite things. Too fine: it clogs or blocks drainage. Too coarse: it lets the base soil pipe.",
              miss: "“Finer is safer” is how you build a clogged drain and a new seepage problem."
            }
          ]
        }
      ]
    },
    {
      id: "strength",
      title: "Drainage & strength",
      blurb: "The exam is asking whether the water can leave in time. That choice picks the strength you are allowed to use.",
      lessons: [
        {
          id: "st-1",
          title: "Drained or undrained?",
          minutes: 6,
          xp: 22,
          summary: "Sand usually drains. Thick clay usually does not — unless you give it months to years.",
          items: [
            {
              id: "st-1-a",
              type: "mcq",
              label: "The fork",
              stem: "“Drained” in a strength problem means:",
              choices: [
                { id: "a", text: "The soil is dry" },
                { id: "b", text: "Excess pore pressure is allowed to dissipate as the soil is sheared", correct: true },
                { id: "c", text: "The sample was taken from above the water table" },
                { id: "d", text: "A UU triaxial test was used" }
              ],
              explanation: "Drained = load slowly relative to permeability, Δu_excess → 0, use c′ and φ′. Undrained = load fast relative to permeability, volume ~ constant in saturated soil, use su (cu).",
              miss: "Drained is not “dry.” A seabed sand sheared slowly is drained and wet."
            },
            {
              id: "st-1-b",
              type: "mcq",
              label: "Pick the test",
              vignette: "End-of-construction stability of an embankment on a saturated, normally consolidated clay.",
              stem: "Which strength idea belongs?",
              choices: [
                { id: "a", text: "Drained c′, φ′ with the final consolidated σ′" },
                { id: "b", text: "Undrained strength su of the clay as it exists at that time", correct: true },
                { id: "c", text: "Residual strength along a preexisting slickenside only" },
                { id: "d", text: "SPT N-value in the embankment fill" }
              ],
              explanation: "The clay has not consolidated under the new load yet. It will fail, if it fails, at constant volume with whatever su that OCR and current σ′ already own. Long-term, after consolidation, you revisit with drained parameters (and a higher σ′).",
              miss: "Using the post-consolidation σ′ with φ′ for the end-of-construction case invents strength the clay does not have yet."
            },
            {
              id: "st-1-c",
              type: "mcq",
              label: "Sand quake",
              stem: "A loose saturated sand during an earthquake is analyzed as:",
              choices: [
                { id: "a", text: "Drained, because sand is pervious" },
                { id: "b", text: "Undrained (or partially so), because the loading is too fast for the water to leave", correct: true },
                { id: "c", text: "A c-φ problem with c = 0 and the static WT ignored" },
                { id: "d", text: "A total-stress problem with φ = 0 and su from a pocket penetrometer" }
              ],
              explanation: "Permeable does not mean instant. Cyclic loading in seconds can trap pore pressure. That is liquefaction: undrained contractive sand, u up, σ′ down.",
              miss: "The slogan “sand is drained” is a construction-rate slogan, not a seismic one."
            },
            {
              id: "st-1-d",
              type: "mcq",
              label: "Which φ?",
              stem: "A CU triaxial test on saturated clay is sheared with the drain lines closed. The friction angle you back-calculate from total stresses at failure is:",
              choices: [
                { id: "a", text: "φ′, the effective friction angle" },
                { id: "b", text: "A total-stress angle that is not φ′ and should not be used as one", correct: true },
                { id: "c", text: "Always zero" },
                { id: "d", text: "The same as from a CD test on the same sample, by definition" }
              ],
              explanation: "If you plot CU failure on total-stress axes you get a total-stress envelope. Effective-stress points (σ1′ , σ3′) give φ′. φ = 0 is the UU envelope for saturated clay, a different test.",
              miss: "Closing the valves does not make φ′ vanish. It hides φ′ inside the pore-pressure response."
            },
            {
              id: "st-1-e",
              type: "mcq",
              label: "NC clay",
              stem: "For a normally consolidated saturated clay, undrained strength su typically:",
              choices: [
                { id: "a", text: "Is a material constant, like Gs" },
                { id: "b", text: "Increases with pre-shear effective consolidation stress", correct: true },
                { id: "c", text: "Decreases as OCR increases" },
                { id: "d", text: "Equals σ′vo" }
              ],
              explanation: "su / σ′vc ≈ 0.2 to 0.3 for many NC clays (SHANSEP). Deeper NC clay is stronger in UU because it was consolidated to a higher σ′. OCR raises the ratio su/σ′vo still further.",
              miss: "A single “cu = 500 psf” with no depth or OCR attached is a red flag unless the profile is known to be uniform."
            },
            {
              id: "st-1-f",
              type: "mcq",
              label: "φ = 0",
              stem: "When is a φ = 0, c = su analysis the intended model?",
              choices: [
                { id: "a", text: "Long-term stability of a sand slope" },
                { id: "b", text: "Short-term undrained stability of a saturated clay", correct: true },
                { id: "c", text: "Any soil below the water table" },
                { id: "d", text: "Drained loading of OC clay" }
              ],
              explanation: "φ = 0 is a total-stress shorthand for undrained saturated clay: the Mohr circle at failure is shifted by u so the total-stress envelope looks horizontal. It is not a claim that clay has no friction in effective stress.",
              miss: "Below-WT sand still has φ′. Do not φ = 0 a sand because you saw water."
            },
            {
              id: "st-1-g",
              type: "mcq",
              label: "Time",
              stem: "A thin sand drain layer sits in the middle of a consolidating clay. Its practical effect on strength with time is:",
              choices: [
                { id: "a", text: "It prevents any undrained strength gain" },
                { id: "b", text: "It shortens drainage path length, so σ′ (and su) rise sooner", correct: true },
                { id: "c", text: "It changes φ′ of the clay" },
                { id: "d", text: "It only matters for permeability lab tests" }
              ],
              explanation: "Time factor Tv = cv t / Hdr². Cut Hdr and the same cv produces faster dissipation. Wick drains and sand layers exist to buy strength before the next lift of fill.",
              miss: "The clay’s φ′ is not what changed. The clock changed."
            },
            {
              id: "st-1-h",
              type: "mcq",
              label: "Field call",
              vignette: "You must pick a strength for a 2-day excavation in a fat clay. A CD peak φ′ is available, and a UU cu profile is available.",
              stem: "For the 2-day case you should lean on:",
              choices: [
                { id: "a", text: "The CD φ′ with the final excavated effective-stress field" },
                { id: "b", text: "The UU / undrained profile, with an eye on fissures and anisotropy", correct: true },
                { id: "c", text: "Residual strength only" },
                { id: "d", text: "An SPT correlation in the clay, exclusively" }
              ],
              explanation: "Two days is not a consolidation window for fat clay. Use undrained strength, then remember that UU on small samples can miss slickensides — which is why field vane and geology still matter.",
              miss: "Residual is for reactivated slides on existing shears, not the default for a fresh cut."
            }
          ]
        }
      ]
    },
    {
      id: "earth-pressure",
      title: "Earth pressure",
      blurb: "The wall only knows three stories: I cannot move, I moved away, I was pushed into the soil.",
      lessons: [
        {
          id: "ep-1",
          title: "K0, Ka, Kp",
          minutes: 6,
          xp: 22,
          summary: "Movement decides the coefficient. The formula is the easy part.",
          items: [
            {
              id: "ep-1-a",
              type: "mcq",
              label: "Match the wall",
              stem: "A basement wall is braced so that it cannot yield. The intended lateral-earth-pressure coefficient is:",
              choices: [
                { id: "a", text: "Ka (active)" },
                { id: "b", text: "K0 (at rest)", correct: true },
                { id: "c", text: "Kp (passive)" },
                { id: "d", text: "Ka on one side and Kp on the other, always" }
              ],
              explanation: "No movement → at-rest. Active requires the wall to move away enough to mobilize the failure wedge. Passive requires much more movement into the soil. Braced basements and many integral abutments are K0 problems.",
              miss: "Using Ka on a non-yielding wall underestimates the load. That is a favorite PE trap.",
              fepe: "Jaky: K0 ≈ 1 − sin φ′ for NC soils. OC soils can have higher K0."
            },
            {
              id: "ep-1-b",
              type: "mcq",
              label: "Numbers in your head",
              stem: "For a loose sand with φ′ = 30°, Rankine Ka is:",
              choices: [
                { id: "a", text: "1.0" },
                { id: "b", text: "1/3", correct: true },
                { id: "c", text: "3" },
                { id: "d", text: "0.5" }
              ],
              explanation: "Ka = tan²(45 − φ′/2) = (1 − sin φ′)/(1 + sin φ′). For 30°, Ka = 1/3 and Kp = 3. K0 ≈ 1 − sin 30° = 0.5. Those three numbers should be automatic.",
              miss: "0.5 is K0, not Ka, at φ′ = 30°."
            },
            {
              id: "ep-1-c",
              type: "mcq",
              label: "Direction",
              stem: "Compared with at-rest pressure, active pressure is:",
              choices: [
                { id: "a", text: "Larger, because the soil has failed" },
                { id: "b", text: "Smaller — the wall stepped away and the soil relaxed", correct: true },
                { id: "c", text: "The same, by definition of Rankine" },
                { id: "d", text: "Always zero at the top if there is no surcharge" }
              ],
              explanation: "Ka < K0 < Kp. Active is the lower-bound push on a yielding wall. (A cohesive backfill can put a tension crack at the top, which is a different detail.)",
              miss: "Failure does not mean “more pressure on the wall.” In the active case the wall already moved; the push dropped."
            },
            {
              id: "ep-1-d",
              type: "mcq",
              label: "Rankine’s deal",
              stem: "Rankine theory, as used on the FE/PE, most nearly assumes:",
              choices: [
                { id: "a", text: "A rough, battered wall and a Coulomb log-spiral" },
                { id: "b", text: "A smooth vertical wall and a planar failure surface", correct: true },
                { id: "c", text: "Zero friction in the soil" },
                { id: "d", text: "Undrained clay only" }
              ],
              explanation: "Rankine: soil friction only, no wall friction, planar conjugate stresses. Coulomb puts friction on the wall and lets the wedge angle move. If the stem gives δ, they want Coulomb.",
              miss: "Rankine is not “the 3D one.” It is the simpler planar, smooth-wall idealization."
            },
            {
              id: "ep-1-e",
              type: "mcq",
              label: "Passive movement",
              stem: "Mobilizing full passive pressure in front of a wall typically requires:",
              choices: [
                { id: "a", text: "Less movement than active pressure" },
                { id: "b", text: "About the same movement as active" },
                { id: "c", text: "Much more movement into the soil than active requires away from it", correct: true },
                { id: "d", text: "No movement, by definition" }
              ],
              explanation: "Active might mobilize at ~0.001–0.004 H in dense sand. Passive can want ~0.01–0.04 H or more. If the wall cannot move that far, you do not get full Kp. Do not spend all of it.",
              miss: "Passive is not free money. It is a large displacement product."
            },
            {
              id: "ep-1-f",
              type: "mcq",
              label: "Water on the wall",
              stem: "A 12-ft retaining wall has water sitting 8 ft up the back face (poor drainage). The hydrostatic water force on the wall is best thought of as:",
              choices: [
                { id: "a", text: "Already included in Ka · γ · H²/2, so do not add it" },
                { id: "b", text: "An extra load you must add; it is often larger than the active soil push", correct: true },
                { id: "c", text: "Negligible next to soil pressure" },
                { id: "d", text: "Handled by switching to Kp" }
              ],
              explanation: "Water pressure is γw h²/2 on the wet height and does not get multiplied by Ka. Drainage is a structural requirement, not a nicety. Weep holes exist because this load is brutal.",
              miss: "Ka reduces soil thrust. It does not reduce hydrostatic water."
            },
            {
              id: "ep-1-g",
              type: "mcq",
              label: "Surcharge",
              stem: "A uniform surcharge q on the backfill of a vertical Rankine wall adds a lateral pressure of:",
              choices: [
                { id: "a", text: "q, full, from top to bottom" },
                { id: "b", text: "K q, roughly uniform with depth", correct: true },
                { id: "c", text: "K q H² / 2" },
                { id: "d", text: "Nothing, because surcharge is vertical" }
              ],
              explanation: "Vertical surcharge becomes horizontal through K (Ka or K0, matching the wall). The soil-weight part is triangular; the surcharge part is a rectangle. Add them, then take moments about the toe.",
              miss: "H²/2 is the shape factor for the triangular soil diagram, not for uniform q."
            },
            {
              id: "ep-1-h",
              type: "mcq",
              label: "Cohesion",
              stem: "True cohesion in the backfill (c′ > 0) tends to:",
              choices: [
                { id: "a", text: "Increase active pressure and decrease passive pressure" },
                { id: "b", text: "Decrease active pressure and increase passive pressure", correct: true },
                { id: "c", text: "Leave both unchanged, because K is only a function of φ′" },
                { id: "d", text: "Eliminate the need to consider water" }
              ],
              explanation: "Rankine active has a −2c′√Ka term; passive has a +2c′√Kp term. That is also why a tension crack can open in clay backfill near the surface.",
              miss: "K itself is from φ′, but the pressure diagram still feels c′."
            }
          ]
        }
      ]
    },
    {
      id: "foundations",
      title: "Footings, conceptually",
      blurb: "Bearing capacity is a strength problem. Settlement is a stiffness problem. The PE will make you say which one governs.",
      lessons: [
        {
          id: "fd-1",
          title: "What actually governs",
          minutes: 6,
          xp: 22,
          summary: "Sands often settle before they “fail.” Soft clays can do either. Water under a footing is not cosmetic.",
          items: [
            {
              id: "fd-1-a",
              type: "mcq",
              label: "Two limits",
              stem: "Allowable bearing pressure on a footing is usually the lesser of:",
              choices: [
                { id: "a", text: "Ultimate bearing capacity and the pressure that produces acceptable settlement", correct: true },
                { id: "b", text: "SPT N and CPT qc, averaged" },
                { id: "c", text: "Active and passive earth pressure" },
                { id: "d", text: "Dead load and live load" }
              ],
              explanation: "Strength limit: qu / FS (or factored ULS). Service limit: settlement, differential settlement, tilt. In sand, service often wins. In soft clay, either can win.",
              miss: "N and qc are tools for estimating those two limits, not the limits themselves."
            },
            {
              id: "fd-1-b",
              type: "mcq",
              label: "Failure shape",
              stem: "General shear failure is most associated with:",
              choices: [
                { id: "a", text: "Loose sand and a punching mechanism" },
                { id: "b", text: "Dense sand or stiff clay and a well-defined slip surface", correct: true },
                { id: "c", text: "Any footing narrower than 3 ft" },
                { id: "d", text: "Footings above the water table only" }
              ],
              explanation: "Terzaghi’s classic qu equation assumes general shear. Loose sand and soft clay tend to punch or fail locally — using the general-shear Nγ on a loose sand is optimistic.",
              miss: "Width changes qu, but the mechanism is a density / stiffness story."
            },
            {
              id: "fd-1-c",
              type: "mcq",
              label: "Water under the footing",
              stem: "The water table rises from well below a footing to the base of the footing in a sand. Ultimate bearing capacity typically:",
              choices: [
                { id: "a", text: "Increases, because the sand is now heavier" },
                { id: "b", text: "Decreases, because the unit weight term becomes buoyant", correct: true },
                { id: "c", text: "Is unchanged, because φ′ did not change" },
                { id: "d", text: "Drops to zero" }
              ],
              explanation: "The 0.5 γ B Nγ term uses the unit weight of the soil in the failure wedges. Submerge it and γ → γ′. There is also a correction when the WT is within about B below the base. φ′ may be unchanged and qu still falls.",
              miss: "Same φ′ does not mean same qu. The γ in front of Nγ moved."
            },
            {
              id: "fd-1-d",
              type: "mcq",
              label: "Wider footing",
              stem: "On sand, increasing footing width B, with the same bearing pressure q:",
              choices: [
                { id: "a", text: "Usually reduces settlement, because the pressure bulb is shallower" },
                { id: "b", text: "Usually increases settlement, because the pressure bulb goes deeper", correct: true },
                { id: "c", text: "Has no effect on settlement" },
                { id: "d", text: "Always makes bearing-capacity FS drop" }
              ],
              explanation: "Settlement in sand scales with width at a given pressure — bigger footings strain a deeper zone. Bearing capacity in sand, by contrast, likes width (the Nγ term). That is why a sand site can pass qu and fail the settlement check as you upsize.",
              miss: "Do not carry the clay instinct (“wider is always stiffer”) into a sand settlement item without looking."
            },
            {
              id: "fd-1-e",
              type: "mcq",
              label: "Clay settlement",
              stem: "Primary consolidation settlement of a clay is driven by:",
              choices: [
                { id: "a", text: "The change in total stress only, even if u never changes" },
                { id: "b", text: "The change in effective stress as excess pore pressure dissipates", correct: true },
                { id: "c", text: "Elastic modulus of the footing concrete" },
                { id: "d", text: "Secondary compression only" }
              ],
              explanation: "You compute Δσv from the load (Boussinesq / 2:1), then Δσ′ after consolidation, then δc from Cc or mv and H. Secondary compression (Cα) is the creep after primary. Concrete stiffness is not the clay’s clock.",
              miss: "If the clay cannot drain, you do not get the primary settlement yet — you get Δu."
            },
            {
              id: "fd-1-f",
              type: "mcq",
              label: "Nc clay",
              stem: "For undrained bearing capacity of a saturated clay (φ = 0), qu for a strip footing at the surface is most nearly:",
              choices: [
                { id: "a", text: "su" },
                { id: "b", text: "2 su" },
                { id: "c", text: "5.14 su (≈ Nc su)", correct: true },
                { id: "d", text: "π su / 4" }
              ],
              explanation: "Nc ≈ 5.14 for a strip at the surface (Prandtl). Shape and embedment raise it (Terzaghi used 5.7 with his approximations). The point: clay bearing capacity is a multiple of undrained strength, plus overburden.",
              miss: "Using su raw as qu forgets the confinement of the mechanism."
            },
            {
              id: "fd-1-g",
              type: "mcq",
              label: "Deep vs shallow",
              stem: "A pile is chosen over a spread footing primarily when:",
              choices: [
                { id: "a", text: "The architect prefers a smaller cap" },
                { id: "b", text: "Competent bearing or acceptable settlement cannot be had at shallow depth", correct: true },
                { id: "c", text: "The water table is below the basement" },
                { id: "d", text: "The load is smaller than a footing can carry" }
              ],
              explanation: "Piles exist to skip bad ground, to take loads to a deeper stratum, or to control settlement. They are not a default upgrade.",
              miss: "A high water table can argue for piles — or for a mat and dewatering. It is not automatic."
            },
            {
              id: "fd-1-h",
              type: "mcq",
              label: "Net vs gross",
              stem: "Why do many clay bearing-capacity checks talk about net pressure?",
              choices: [
                { id: "a", text: "Because the concrete weight is ignored by code in all cases" },
                { id: "b", text: "Because excavation removes σv, so only the increase above the original overburden compresses the clay", correct: true },
                { id: "c", text: "Because net pressure equals effective stress automatically" },
                { id: "d", text: "Because buoyant unit weight is illegal in clay" }
              ],
              explanation: "Dig a basement, you unload. Put the building back, only the net increase (plus any extra) consolidates the clay. Gross pressure at the bearing elevation is still what you use in some strength formulas — know which request you were given.",
              miss: "Net is not a magic conversion to σ′. It is a bookkeeping move about the load you added back."
            }
          ]
        }
      ]
    }
,
    {
      id: "pe-stress",
      title: "PE bench · Stress profiles",
      bench: true,
      blurb: "Layered unit weights, water tables, artesian head. Most-nearly items with worked steps.",
      lessons: [
        {
          id: "pe-s1",
          title: "σ, u, σ′ with numbers",
          minutes: 12,
          xp: 30,
          summary: "Always: layer the totals, compute u from the water column only, subtract. γw = 62.4 pcf.",
          items: [
            {
              id: "pe-s1-a",
              type: "mcq",
              pe: true,
              label: "Layered profile",
              given: "γw = 62.4 pcf",
              vignette: "Moist sand, 0–6 ft, γ = 105 pcf. Water table at 6 ft. Saturated sand, 6–20 ft, γsat = 122 pcf.",
              stem: "Most nearly, the effective vertical stress at a depth of 16 ft is:",
              choices: [
                { id: "a", text: "624 psf" },
                { id: "b", text: "1,230 psf", correct: true },
                { id: "c", text: "1,850 psf" },
                { id: "d", text: "1,950 psf" }
              ],
              work: [
                "σv = 6(105) + 10(122) = 630 + 1,220 = 1,850 psf",
                "u = 10(62.4) = 624 psf  (only the 10 ft below the WT)",
                "σ′v = 1,850 − 624 = 1,226 psf → 1,230 psf"
              ],
              explanation: "Total stress uses every layer’s unit weight. Pore pressure uses only the water column above the point. Subtract. 1,850 psf is the trap for people who stop at total stress; 624 psf is u by itself.",
              miss: "Do not assign one γ to the whole 16 ft. Do not take u from the ground surface when the WT is at 6 ft.",
              fepe: "PE style: ‘most nearly’ means compute carefully, then pick the closest option. The distractors are the intermediate numbers."
            },
            {
              id: "pe-s1-b",
              type: "mcq",
              pe: true,
              label: "Hydrostatic u",
              given: "γw = 62.4 pcf · hydrostatic",
              stem: "A point sits 12 ft below a hydrostatic water table. Most nearly, the pore-water pressure at the point is:",
              choices: [
                { id: "a", text: "375 psf" },
                { id: "b", text: "624 psf" },
                { id: "c", text: "749 psf", correct: true },
                { id: "d", text: "1,250 psf" }
              ],
              work: [
                "Hydrostatic: u = γw · h = 62.4 × 12 = 748.8 psf → 749 psf"
              ],
              explanation: "You do not need γsoil to get hydrostatic u. 624 psf is 10 ft of water — a common depth mix-up.",
              miss: "Depth below ground is not automatically the water column."
            },
            {
              id: "pe-s1-c",
              type: "mcq",
              pe: true,
              label: "Water table rise",
              given: "γw = 62.4 pcf",
              vignette: "Uniform sand. Above the WT, γ = 110 pcf. Below the WT, γsat = 125 pcf. Point at 15 ft depth. The WT rises from 8 ft to 3 ft.",
              stem: "Most nearly, the effective vertical stress at 15 ft:",
              choices: [
                { id: "a", text: "increases by 240 psf" },
                { id: "b", text: "decreases by 80 psf" },
                { id: "c", text: "decreases by 240 psf", correct: true },
                { id: "d", text: "decreases by 480 psf" }
              ],
              work: [
                "Before: σ = 8(110)+7(125) = 880+875 = 1,755 psf;  u = 7(62.4) = 437 psf;  σ′ = 1,318 psf",
                "After:  σ = 3(110)+12(125) = 330+1,500 = 1,830 psf;  u = 12(62.4) = 749 psf;  σ′ = 1,081 psf",
                "Δσ′ = 1,081 − 1,318 = −237 psf → decreases ≈ 240 psf"
              ],
              explanation: "Total stress rose a little because more of the column is saturated. Pore pressure rose more. Effective stress fell. Heavier column, weaker skeleton.",
              miss: "If you only look at total stress you will predict an increase and pick A."
            },
            {
              id: "pe-s1-d",
              type: "mcq",
              pe: true,
              label: "Artesian sand",
              given: "γw = 62.4 pcf",
              vignette: "Saturated clay, 0–15 ft, γsat = 118 pcf, overlies a confined sand. The piezometric level in the sand stands 5 ft above the ground surface.",
              stem: "Most nearly, the effective vertical stress at the top of the sand is:",
              choices: [
                { id: "a", text: "520 psf", correct: true },
                { id: "b", text: "830 psf" },
                { id: "c", text: "1,250 psf" },
                { id: "d", text: "1,770 psf" }
              ],
              work: [
                "σv = 15(118) = 1,770 psf",
                "u = (15 + 5)(62.4) = 1,248 psf  (head is 20 ft of water)",
                "σ′v = 1,770 − 1,248 = 522 psf → 520 psf"
              ],
              explanation: "Artesian head is not capped at the ground surface. If you run hydrostatic from the ground (u = 15 × 62.4 = 936), you get the 830 psf trap and you miss a possible heave problem at the base of an excavation.",
              miss: "D is total stress. C is essentially u. B is the ‘I ignored the extra 5 ft of head’ answer."
            },
            {
              id: "pe-s1-e",
              type: "mcq",
              pe: true,
              label: "Buoyant gradient",
              given: "γw = 62.4 pcf · hydrostatic WT",
              vignette: "Saturated sand below the water table, γsat = 120 pcf.",
              stem: "Most nearly, effective vertical stress increases with depth at:",
              choices: [
                { id: "a", text: "62.4 pcf" },
                { id: "b", text: "57.6 pcf", correct: true },
                { id: "c", text: "120 pcf" },
                { id: "d", text: "182 pcf" }
              ],
              work: [
                "dσv/dz = γsat = 120 pcf",
                "du/dz = γw = 62.4 pcf",
                "dσ′v/dz = 120 − 62.4 = 57.6 pcf"
              ],
              explanation: "That 57.6 pcf is γ′. It is the number that belongs in submerged bearing-capacity and infinite-slope formulas.",
              miss: "120 pcf is the total-stress gradient. Using it for σ′ double-counts the water."
            },
            {
              id: "pe-s1-f",
              type: "mcq",
              pe: true,
              label: "Two-layer check",
              given: "γw = 62.4 pcf",
              vignette: "0–4 ft moist fill, γ = 100 pcf. WT at 4 ft. 4–12 ft saturated sand, γsat = 125 pcf.",
              stem: "Most nearly, σ′v at 12 ft is:",
              choices: [
                { id: "a", text: "500 psf" },
                { id: "b", text: "900 psf", correct: true },
                { id: "c", text: "1,400 psf" },
                { id: "d", text: "1,500 psf" }
              ],
              work: [
                "σv = 4(100) + 8(125) = 400 + 1,000 = 1,400 psf",
                "u = 8(62.4) = 499 psf",
                "σ′v = 1,400 − 499 = 901 psf → 900 psf"
              ],
              explanation: "Same machine as the first item. 1,400 is total. 500 is roughly u.",
              miss: "If you saturate the top 4 ft in the total-stress sum you will drift high."
            }
          ]
        }
      ]
    },
    {
      id: "pe-seepage-slopes",
      title: "PE bench · Seepage & slopes",
      bench: true,
      blurb: "Critical gradient, heave FS, and the dry vs seepage-parallel infinite slope.",
      lessons: [
        {
          id: "pe-w1",
          title: "i, ic, and FS",
          minutes: 12,
          xp: 30,
          summary: "i = Δh/L. ic = (Gs−1)/(1+e). Heave FS = ic/i_exit. Seepage through a granular slope cuts FS by about γ′/γsat.",
          items: [
            {
              id: "pe-w1-a",
              type: "mcq",
              pe: true,
              label: "Critical gradient",
              given: "Gs = 2.68 · e = 0.72",
              stem: "Most nearly, the critical hydraulic gradient ic is:",
              choices: [
                { id: "a", text: "0.72" },
                { id: "b", text: "0.98", correct: true },
                { id: "c", text: "1.56" },
                { id: "d", text: "2.68" }
              ],
              work: [
                "ic = (Gs − 1) / (1 + e) = (2.68 − 1) / (1 + 0.72) = 1.68 / 1.72 = 0.977 → 0.98"
              ],
              explanation: "Same as γ′/γw after you write γsat = Gs γw / (1+e). ic is near 1 for many sands, but the exam can give Gs and e and expect the formula, not ‘1.0’.",
              miss: "0.72 is the void ratio reused as an answer. 1.56 is (Gs−1)/e."
            },
            {
              id: "pe-w1-b",
              type: "mcq",
              pe: true,
              label: "Heave FS",
              given: "ic = 0.95",
              vignette: "Flow under a sheet pile. Head loss Δh = 10 ft. Upward path length through the inside sand L = 16 ft.",
              stem: "Most nearly, the factor of safety against a quick condition at the exit is:",
              choices: [
                { id: "a", text: "0.63" },
                { id: "b", text: "1.0" },
                { id: "c", text: "1.5", correct: true },
                { id: "d", text: "2.5" }
              ],
              work: [
                "i_exit = Δh / L = 10 / 16 = 0.625",
                "FS = ic / i_exit = 0.95 / 0.625 = 1.52 → 1.5"
              ],
              explanation: "0.63 is the gradient sold as an FS. Lengthening L (deeper pile, longer blanket) is how you raise this number.",
              miss: "FS is ic over i, not i over ic."
            },
            {
              id: "pe-w1-c",
              type: "mcq",
              pe: true,
              label: "Dry infinite slope",
              given: "c′ = 0 · no seepage",
              vignette: "Granular slope at 3H:1V (β = 18.43°). φ′ = 30°.",
              stem: "Most nearly, the factor of safety is:",
              choices: [
                { id: "a", text: "0.58" },
                { id: "b", text: "1.00" },
                { id: "c", text: "1.73", correct: true },
                { id: "d", text: "3.00" }
              ],
              work: [
                "tan β = 1/3 = 0.333;  tan 30° = 0.577",
                "FS = tan φ′ / tan β = 0.577 / 0.333 = 1.73"
              ],
              explanation: "For cohesionless dry (or WT well below the surface of sliding) infinite slopes, FS is just that ratio. 3.00 is the slope inclination reused as FS.",
              miss: "0.58 is tan φ′ sold as FS."
            },
            {
              id: "pe-w1-d",
              type: "mcq",
              pe: true,
              label: "Seepage parallel",
              given: "γsat = 125 pcf · γw = 62.4 pcf · c′ = 0",
              vignette: "Same 3H:1V slope, φ′ = 30°, now with seepage parallel to the slope and the phreatic surface at the ground.",
              stem: "Most nearly, the factor of safety is:",
              choices: [
                { id: "a", text: "0.87", correct: true },
                { id: "b", text: "1.73" },
                { id: "c", text: "2.00" },
                { id: "d", text: "0.50" }
              ],
              work: [
                "γ′ = 125 − 62.4 = 62.6 pcf",
                "γ′ / γsat = 62.6 / 125 = 0.501",
                "FS = (γ′ / γsat) · tan φ′ / tan β = 0.501 × 1.73 = 0.87"
              ],
              explanation: "Parallel seepage multiplies the dry FS by γ′/γsat, about 0.5 for many saturated sands. The slope that was fine dry can sit under 1.0 wet.",
              miss: "1.73 is the dry answer copied forward. 0.50 is the unit-weight ratio without tan φ′/tan β."
            },
            {
              id: "pe-w1-e",
              type: "mcq",
              pe: true,
              label: "Undrained strength",
              given: "su / σ′vc = 0.25 for this NC clay",
              vignette: "Normally consolidated clay with current vertical effective consolidation stress 2,000 psf.",
              stem: "Most nearly, the undrained shear strength is:",
              choices: [
                { id: "a", text: "250 psf" },
                { id: "b", text: "500 psf", correct: true },
                { id: "c", text: "800 psf" },
                { id: "d", text: "2,000 psf" }
              ],
              work: [
                "su = 0.25 × 2,000 = 500 psf"
              ],
              explanation: "SHANSEP-style ratio. su is not a soil ID constant; it scales with the effective consolidation stress the clay has actually seen.",
              miss: "2,000 psf is σ′ sold as strength. 250 psf is a 0.125 ratio."
            },
            {
              id: "pe-w1-f",
              type: "mcq",
              pe: true,
              label: "φ = 0 bearing",
              given: "Nc = 5.14 for a surface strip · φ = 0",
              vignette: "Saturated clay, su = 800 psf. Strip footing at the ground surface. Ignore overburden.",
              stem: "Most nearly, the ultimate bearing capacity is:",
              choices: [
                { id: "a", text: "800 psf" },
                { id: "b", text: "2,500 psf" },
                { id: "c", text: "4,110 psf", correct: true },
                { id: "d", text: "5,700 psf" }
              ],
              work: [
                "qu = Nc su = 5.14 × 800 = 4,112 psf → 4,110 psf"
              ],
              explanation: "5,700 psf is Terzaghi’s older 5.7 × 800. 800 psf is su used as qu. Embedment and shape factors would raise this; the stem said surface strip.",
              miss: "If the Handbook on your exam lists a different Nc, use that Nc — the method is what is being tested."
            }
          ]
        }
      ]
    },
    {
      id: "pe-walls-footings",
      title: "PE bench · Walls & footings",
      bench: true,
      blurb: "Ka vs K0 with numbers, water on the wall, bearing with a given Nγ, and one-dimensional consolidation.",
      lessons: [
        {
          id: "pe-f1",
          title: "Thrust, qu, settlement",
          minutes: 14,
          xp: 32,
          summary: "Match the K to the wall movement first. Water thrust is ½γw h² and is not multiplied by Ka. Settlement uses log10.",
          items: [
            {
              id: "pe-f1-a",
              type: "mcq",
              pe: true,
              label: "Rankine active",
              given: "φ′ = 30° so Ka = 1/3 · no water · no surcharge",
              vignette: "Smooth vertical wall, granular backfill γ = 120 pcf, H = 18 ft. Rankine active conditions fully mobilized.",
              stem: "Most nearly, the active thrust per foot of wall is:",
              choices: [
                { id: "a", text: "3,240 lb/ft" },
                { id: "b", text: "6,480 lb/ft", correct: true },
                { id: "c", text: "9,720 lb/ft" },
                { id: "d", text: "19,440 lb/ft" }
              ],
              work: [
                "Pa = ½ Ka γ H² = 0.5 × (1/3) × 120 × 18² = 20 × 324 = 6,480 lb/ft"
              ],
              explanation: "3,240 is Ka γ H² without the ½. 19,440 is ½ γ H² with Ka forgotten (K = 1).",
              miss: "Write Ka before you touch the calculator. For 30°, Ka = 1/3 is worth having cold."
            },
            {
              id: "pe-f1-b",
              type: "mcq",
              pe: true,
              label: "At-rest + surcharge",
              given: "φ′ = 30° so K0 = 1 − sin 30° = 0.50",
              vignette: "Braced basement wall, no yield. γ = 120 pcf, H = 10 ft, uniform surcharge q = 400 psf. Dry backfill.",
              stem: "Most nearly, the total at-rest thrust per foot of wall is:",
              choices: [
                { id: "a", text: "3,000 lb/ft" },
                { id: "b", text: "5,000 lb/ft", correct: true },
                { id: "c", text: "6,000 lb/ft" },
                { id: "d", text: "8,000 lb/ft" }
              ],
              work: [
                "Soil (triangle): P0 = ½ K0 γ H² = 0.5 × 0.50 × 120 × 100 = 3,000 lb/ft",
                "Surcharge (rectangle): Pq = K0 q H = 0.50 × 400 × 10 = 2,000 lb/ft",
                "Total = 5,000 lb/ft"
              ],
              explanation: "3,000 lb/ft is soil only. Using Ka = 1/3 instead of K0 would under-predict a non-yielding wall — a standard PE trap.",
              miss: "If the stem says basement, tunnel, or ‘does not yield,’ do not reach for Ka."
            },
            {
              id: "pe-f1-c",
              type: "mcq",
              pe: true,
              label: "Water on the wall",
              given: "γw = 62.4 pcf",
              vignette: "A 10-ft vertical wall has standing water to the top of the back face (weeps failed). Compute the hydrostatic water thrust only.",
              stem: "Most nearly, that water thrust is:",
              choices: [
                { id: "a", text: "1,040 lb/ft" },
                { id: "b", text: "3,120 lb/ft", correct: true },
                { id: "c", text: "6,240 lb/ft" },
                { id: "d", text: "10,000 lb/ft" }
              ],
              work: [
                "Pw = ½ γw h² = 0.5 × 62.4 × 10² = 3,120 lb/ft"
              ],
              explanation: "Water is not multiplied by Ka. 1,040 lb/ft is ½ Ka γw h² with Ka = 1/3 — the expensive mistake. 6,240 is γw h² without the ½.",
              miss: "Weep holes exist because this load is the same order as the soil thrust, or larger."
            },
            {
              id: "pe-f1-d",
              type: "mcq",
              pe: true,
              label: "Submerged active + water",
              given: "φ′ = 30°, Ka = 1/3 · γsat = 120 pcf · γw = 62.4 pcf",
              vignette: "12-ft smooth vertical wall. Water table at the top of the backfill. Rankine active. Add soil effective thrust and hydrostatic water thrust.",
              stem: "Most nearly, the total lateral thrust per foot is:",
              choices: [
                { id: "a", text: "1,380 lb/ft" },
                { id: "b", text: "2,880 lb/ft" },
                { id: "c", text: "5,880 lb/ft", correct: true },
                { id: "d", text: "7,370 lb/ft" }
              ],
              work: [
                "γ′ = 120 − 62.4 = 57.6 pcf",
                "P′a = ½ Ka γ′ H² = 0.5 × (1/3) × 57.6 × 144 = 9.6 × 144 = 1,382 lb/ft",
                "Pw = ½ γw H² = 0.5 × 62.4 × 144 = 4,493 lb/ft",
                "P = 1,382 + 4,493 = 5,875 lb/ft → 5,880 lb/ft"
              ],
              explanation: "Do not run ½ Ka γsat H². That multiplies water by Ka and gives 2,880 lb/ft. The 7,370 trap comes from mixing total-stress and effective-stress formulas.",
              miss: "Effective soil push uses γ′. Water is a separate triangle using γw."
            },
            {
              id: "pe-f1-e",
              type: "mcq",
              pe: true,
              label: "Bearing, WT at base",
              given: "Nq = 18.4 · Nγ = 15.1 · c = 0 · strip · γ = 120 pcf · γw = 62.4 pcf",
              vignette: "B = 5 ft, Df = 3 ft. Water table at the base of the footing. Use qu = γ Df Nq + 0.5 γ′ B Nγ.",
              stem: "Most nearly, qu is:",
              choices: [
                { id: "a", text: "2,170 psf" },
                { id: "b", text: "6,840 psf", correct: true },
                { id: "c", text: "7,530 psf" },
                { id: "d", text: "9,060 psf" }
              ],
              work: [
                "γ′ = 120 − 62.4 = 57.6 pcf",
                "γ Df Nq = 120 × 3 × 18.4 = 6,624 psf",
                "0.5 γ′ B Nγ = 0.5 × 57.6 × 5 × 15.1 = 2.88 × 75.5 = 217 psf",
                "qu = 6,624 + 217 = 6,841 psf → 6,840 psf"
              ],
              explanation: "7,530 psf is the same footing with WT well below (γ not γ′ on the Nγ term). The water table tax is mostly on the width term. Factors were given so you are not fighting Handbook editions.",
              miss: "Applying γ′ to the embedment term as well under-predicts qu."
            },
            {
              id: "pe-f1-f",
              type: "mcq",
              pe: true,
              label: "1-D consolidation",
              given: "Use log10 · NC clay",
              vignette: "Clay layer H = 8 ft, Cc = 0.28, e0 = 0.90. σ′0 = 1,600 psf. Added Δσ′ = 1,600 psf after consolidation.",
              stem: "Most nearly, the primary consolidation settlement is:",
              choices: [
                { id: "a", text: "1.6 in" },
                { id: "b", text: "4.3 in", correct: true },
                { id: "c", text: "8.1 in" },
                { id: "d", text: "9.8 in" }
              ],
              work: [
                "δc = [Cc H / (1+e0)] log10((σ′0+Δσ′)/σ′0)",
                "= [0.28 × 8 / 1.90] log10(3,200/1,600)",
                "= 1.179 × log10(2) = 1.179 × 0.3010 = 0.355 ft",
                "0.355 × 12 = 4.26 in → 4.3 in"
              ],
              explanation: "8.1 in forgets to divide by (1+e0). 9.8 in used ln instead of log10. NCEES handbook settlement is log10 unless the page in front of you says otherwise.",
              miss: "Write the ratio (σ′0+Δσ′)/σ′0 before you hit log. Doubling the effective stress is log10(2) = 0.301, not 0.693."
            }
          ]
        }
      ]
    },
  ],
  reference: [
    {
      title: "Effective stress",
      points: [
        "σ′ = σ − u. Strength and volume change live on σ′.",
        "Below a hydrostatic WT, σ′ gains with depth at γ′ = γsat − γw.",
        "Raise the WT → u up → σ′ down. The soil got heavier and weaker.",
        "Saturated clay, fast load: Δu carries the new total stress until it drains."
      ]
    },
    {
      title: "Seepage",
      points: [
        "i = Δh / L. Darcy: q = k i.",
        "ic = γ′ / γw = (Gs − 1) / (1 + e).",
        "Piping and heave start at the exit face.",
        "Water on a wall is not multiplied by Ka."
      ]
    },
    {
      title: "Drained vs undrained",
      points: [
        "Drained: use c′, φ′. Undrained saturated clay: use su, φ = 0 shorthand.",
        "Embanks on NC clay: short-term often critical. Cuts in clay: long-term often critical.",
        "Sand is drained at construction rate, undrained in a quake if loose and saturated.",
        "su / σ′vc is roughly 0.2–0.3 for many NC clays."
      ]
    },
    {
      title: "K0, Ka, Kp (φ′ = 30°)",
      points: [
        "Ka = 1/3, K0 ≈ 1/2, Kp = 3.",
        "No wall movement → K0. Wall away → Ka. Wall into soil → Kp.",
        "Full Kp needs much more movement than Ka.",
        "Jaky: K0 ≈ 1 − sin φ′ (NC)."
      ]
    }
  ],
  variables: [
    { sym: "σ, σv", name: "Total vertical stress", def: "Force per unit area from everything above the point (soil + water + surcharge). Geostatic start of most profiles." },
    { sym: "σ′ , σ′v", name: "Effective vertical stress", def: "Stress carried by the grain skeleton. σ′ = σ − u. Strength, stiffness, and volume change track this." },
    { sym: "u", name: "Pore-water pressure", def: "Pressure in the water. Hydrostatic: u = γw · h below the water table." },
    { sym: "Δu", name: "Excess pore pressure", def: "u above the equilibrium (usually hydrostatic) value. Dissipates during consolidation." },
    { sym: "γ", name: "Unit weight", def: "Weight per volume of soil. Use the value that matches the layer (moist, dry, or saturated)." },
    { sym: "γd", name: "Dry unit weight", def: "Unit weight of the soil solids plus empty voids; no pore water included." },
    { sym: "γsat", name: "Saturated unit weight", def: "Unit weight when voids are full of water. Used for total stress below the WT." },
    { sym: "γw", name: "Unit weight of water", def: "62.4 pcf in these items (9.81 kN/m³ in SI). Used for u and buoyancy." },
    { sym: "γ′", name: "Buoyant unit weight", def: "γsat − γw. Rate that σ′ increases with depth below a hydrostatic WT." },
    { sym: "h, z, H", name: "Height or depth", def: "h is often water-column height. z is depth. H is wall height, layer thickness, or slope height as stated." },
    { sym: "WT", name: "Water table", def: "Phreatic surface. Hydrostatic u is measured from here unless the stem says artesian or perched." },
    { sym: "Gs", name: "Specific gravity of solids", def: "Gs = γs / γw. Enters ic = (Gs − 1)/(1 + e)." },
    { sym: "e, e0", name: "Void ratio", def: "Volume of voids / volume of solids. e0 is the initial value in a settlement calculation." },
    { sym: "n", name: "Porosity", def: "Volume of voids / total volume. n = e/(1+e)." },
    { sym: "w", name: "Water content", def: "Weight of water / weight of solids." },
    { sym: "S", name: "Degree of saturation", def: "Volume of water / volume of voids. S = 1 when saturated." },
    { sym: "i", name: "Hydraulic gradient", def: "i = Δh / L. Head loss divided by seepage path length." },
    { sym: "ic", name: "Critical hydraulic gradient", def: "Gradient at which σ′ → 0 in upward flow. ic = γ′/γw = (Gs − 1)/(1+e)." },
    { sym: "Δh", name: "Head loss", def: "Drop in total head along a flow path (often outside water minus inside water)." },
    { sym: "L", name: "Seepage path length", def: "Distance over which Δh is lost. Longer L lowers i." },
    { sym: "k", name: "Hydraulic conductivity", def: "Darcy coefficient. Specific discharge q = k i." },
    { sym: "q", name: "Specific discharge", def: "Discharge per unit area. Also used for surcharge pressure on a wall or footing." },
    { sym: "FS", name: "Factor of safety", def: "Capacity / demand. For heave, often ic / i_exit." },
    { sym: "c′, φ′", name: "Effective-stress strength", def: "Drained Mohr–Coulomb parameters. Use when excess u can dissipate during shear." },
    { sym: "su, cu", name: "Undrained shear strength", def: "Strength of saturated clay sheared with no drainage. PE φ = 0 analyses use this." },
    { sym: "σ′vc, σ′vo", name: "Consolidation / overburden effective stress", def: "σ′vc is the effective stress the clay was consolidated to. σ′vo is current vertical effective overburden." },
    { sym: "σ′p", name: "Preconsolidation pressure", def: "Maximum past vertical effective stress. OCR = σ′p / σ′vo." },
    { sym: "OCR", name: "Overconsolidation ratio", def: "σ′p / σ′vo. NC clay has OCR = 1." },
    { sym: "NC, OC", name: "Normally / overconsolidated", def: "NC: current σ′ is the maximum past σ′. OC: the clay has been unloaded from a higher σ′p." },
    { sym: "Ka, K0, Kp", name: "Earth-pressure coefficients", def: "Active, at-rest, and passive. σh = K · σv (plus cohesion terms). Movement decides which K." },
    { sym: "δ", name: "Wall friction angle", def: "Friction between wall and backfill. Rankine ignores it; Coulomb includes it." },
    { sym: "Pa, P0, Pp", name: "Lateral thrust", def: "Resultant earth force per foot of wall. Triangle for soil weight, rectangle for uniform surcharge." },
    { sym: "Pw", name: "Hydrostatic water thrust", def: "½ γw h². Not multiplied by Ka." },
    { sym: "Nc, Nq, Nγ", name: "Bearing-capacity factors", def: "From φ′ (or φ = 0). qu uses c Nc, overburden Nq, and width Nγ terms." },
    { sym: "qu", name: "Ultimate bearing capacity", def: "Gross pressure at which a footing mechanism forms. Allowable is qu/FS or a factored limit." },
    { sym: "B, Df", name: "Footing width and embedment", def: "B is foundation width. Df is depth of the base below ground." },
    { sym: "Cc", name: "Compression index", def: "Slope of the e–log σ′ virgin curve. Enters primary consolidation settlement." },
    { sym: "Cr", name: "Recompression index", def: "Slope of the unload/reload curve. Used when the new stress stays below σ′p." },
    { sym: "Cα", name: "Secondary compression index", def: "Creep settlement after primary consolidation." },
    { sym: "mv", name: "Coefficient of volume compressibility", def: "Vertical strain per unit of Δσ′. Alternate settlement form δ = mv Δσ′ H." },
    { sym: "cv", name: "Coefficient of consolidation", def: "Controls time rate. Tv = cv t / Hdr²." },
    { sym: "Hdr", name: "Drainage path length", def: "Longest distance pore water must travel to a drain. Double drainage cuts Hdr in half." },
    { sym: "Tv, U", name: "Time factor and average consolidation", def: "Tv is dimensionless time. U is the fraction of primary consolidation completed." },
    { sym: "δc", name: "Primary consolidation settlement", def: "δc = [Cc H / (1+e0)] log10((σ′0+Δσ′)/σ′0) for NC clay." },
    { sym: "β", name: "Slope angle", def: "Inclination of the ground surface. Infinite-slope FS uses tan φ′ / tan β." },
    { sym: "N, N60, (N1)60", name: "SPT blow count", def: "Raw N, energy-corrected N60, and overburden-corrected (N1)60." }
  ],
  itemFigs: {
  "es-1-b": "pt-below-wt",
  "es-1-d": "pt-above-wt",
  "es-1-g": "pt-below-wt",
  "es-2-a": "wt-rise",
  "es-2-b": "wt-drop",
  "es-2-c": "fill-clay",
  "es-2-d": "fill-clay",
  "es-2-e": "capillary",
  "es-2-f": "trench",
  "es-2-g": "slope-wet",
  "es-2-h": "perched",
  "es-3-a": "layered-6-8",
  "es-3-b": "artesian",
  "es-3-e": "cut-clay",
  "es-3-f": "boiling",
  "sp-1-c": "cofferdam",
  "sp-1-d": "cofferdam",
  "sp-1-e": "flownet",
  "st-1-b": "embankment",
  "st-1-c": "loose-sand",
  "st-1-h": "cut-clay",
  "ep-1-a": "wall-k0",
  "ep-1-c": "wall-ka",
  "ep-1-e": "wall-kp",
  "ep-1-f": "wall-water",
  "ep-1-g": "wall-surcharge",
  "fd-1-c": "footing-wt",
  "fd-1-d": "footing-wide",
  "pe-s1-a": "pe-s1-a",
  "pe-s1-b": "pt-below-wt",
  "pe-s1-c": "pe-s1-c",
  "pe-s1-d": "artesian",
  "pe-s1-e": "pt-below-wt",
  "pe-s1-f": "pe-s1-f",
  "pe-w1-b": "cofferdam",
  "pe-w1-c": "slope-dry",
  "pe-w1-d": "slope-wet",
  "pe-w1-f": "footing-surface",
  "pe-f1-a": "wall-ka",
  "pe-f1-b": "wall-k0",
  "pe-f1-c": "wall-water",
  "pe-f1-d": "wall-submerged",
  "pe-f1-e": "footing-wt",
  "pe-f1-f": "consol-layer"
},
  figs: {
  "pt-below-wt": `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" aria-label="Point below the water table">
    <rect x="70" y="16" width="120" height="168" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="70" y="88" width="120" height="96" fill="#c9b48a"/>
    <line x1="70" y1="88" x2="190" y2="88" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="130" cy="148" r="6" fill="#c24e1d"/>
    <text x="200" y="28" font-size="11" fill="#5c5348">ground</text>
    <text x="200" y="92" font-size="11" fill="#2a6a78">WT</text>
    <text x="200" y="152" font-size="11" fill="#c24e1d">point</text>
  </svg>`,
  "pt-above-wt": `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="16" width="120" height="168" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="70" y="128" width="120" height="56" fill="#c9b48a"/>
    <line x1="70" y1="128" x2="190" y2="128" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="130" cy="72" r="6" fill="#c24e1d"/>
    <text x="200" y="28" font-size="11" fill="#5c5348">ground</text>
    <text x="200" y="76" font-size="11" fill="#c24e1d">point</text>
    <text x="200" y="132" font-size="11" fill="#2a6a78">WT</text>
  </svg>`,
  "wt-rise": `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
    <text x="70" y="18" font-size="11" fill="#5c5348">before</text>
    <rect x="30" y="28" width="80" height="150" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="30" y="118" width="80" height="60" fill="#c9b48a"/>
    <line x1="30" y1="118" x2="110" y2="118" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="70" cy="148" r="5" fill="#c24e1d"/>
    <text x="210" y="18" font-size="11" fill="#5c5348">WT rises</text>
    <rect x="170" y="28" width="80" height="150" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="170" y="70" width="80" height="108" fill="#c9b48a"/>
    <line x1="170" y1="70" x2="250" y2="70" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="210" cy="148" r="5" fill="#c24e1d"/>
    <path d="M122 100h36" stroke="#c24e1d" stroke-width="2" marker-end="url(#a)"/>
    <defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0l8 4-8 4z" fill="#c24e1d"/></marker></defs>
  </svg>`,
  "wt-drop": `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
    <text x="58" y="18" font-size="11" fill="#5c5348">before</text>
    <rect x="30" y="28" width="80" height="150" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="30" y="70" width="80" height="108" fill="#c9b48a"/>
    <line x1="30" y1="70" x2="110" y2="70" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="70" cy="148" r="5" fill="#c24e1d"/>
    <text x="198" y="18" font-size="11" fill="#5c5348">after pumping</text>
    <rect x="170" y="28" width="80" height="150" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="170" y="118" width="80" height="60" fill="#c9b48a"/>
    <line x1="170" y1="118" x2="250" y2="118" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="210" cy="148" r="5" fill="#c24e1d"/>
  </svg>`,
  "fill-clay": `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="70" width="260" height="110" fill="#8f5d38" stroke="#1b1712" stroke-width="2"/>
    <text x="30" y="128" font-size="12" fill="#f3eee4">saturated clay</text>
    <rect x="50" y="28" width="200" height="42" fill="#c6a36e" stroke="#1b1712" stroke-width="2"/>
    <text x="110" y="54" font-size="12" fill="#1b1712">new fill</text>
    <circle cx="150" cy="140" r="5" fill="#f3eee4"/>
    <text x="162" y="144" font-size="11" fill="#f3eee4">point</text>
  </svg>`,
  "capillary": `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="16" width="120" height="168" fill="#e4d3b0" stroke="#1b1712" stroke-width="2"/>
    <rect x="70" y="70" width="120" height="58" fill="#cbb896"/>
    <rect x="70" y="128" width="120" height="56" fill="#b89a6a"/>
    <line x1="70" y1="128" x2="190" y2="128" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="130" cy="98" r="6" fill="#c24e1d"/>
    <text x="200" y="84" font-size="11" fill="#5c5348">capillary</text>
    <text x="200" y="98" font-size="11" fill="#5c5348">fringe u &lt; 0</text>
    <text x="200" y="132" font-size="11" fill="#2a6a78">WT</text>
  </svg>`,
  "trench": `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="40" width="90" height="130" fill="#cbb896" stroke="#1b1712" stroke-width="2"/>
    <rect x="194" y="40" width="90" height="130" fill="#cbb896" stroke="#1b1712" stroke-width="2"/>
    <rect x="106" y="100" width="88" height="70" fill="#7eb0bd"/>
    <path d="M106 40v60H194V40" fill="none" stroke="#1b1712" stroke-width="2"/>
    <text x="118" y="34" font-size="11" fill="#5c5348">open trench</text>
    <text x="122" y="140" font-size="11" fill="#1b3d46">flood water</text>
  </svg>`,
  "slope-wet": `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 150L210 40h74v110H16z" fill="#c6a36e" stroke="#1b1712" stroke-width="2"/>
    <path d="M30 142L210 52" stroke="#2a6a78" stroke-width="3"/>
    <text x="40" y="36" font-size="11" fill="#2a6a78">phreatic surface</text>
    <text x="220" y="100" font-size="11" fill="#5c5348">slope</text>
  </svg>`,
  "slope-dry": `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 150L210 40h74v110H16z" fill="#e2d0ae" stroke="#1b1712" stroke-width="2"/>
    <text x="36" y="36" font-size="11" fill="#5c5348">3H : 1V · dry</text>
    <text x="40" y="128" font-size="11" fill="#5c5348">no seepage</text>
  </svg>`,
  "perched": `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="16" width="140" height="50" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="60" y="66" width="140" height="36" fill="#7eb0bd"/>
    <rect x="60" y="102" width="140" height="28" fill="#8f5d38"/>
    <rect x="60" y="130" width="140" height="54" fill="#c9b48a" stroke="#1b1712" stroke-width="2"/>
    <line x1="60" y1="16" x2="200" y2="16" stroke="#1b1712" stroke-width="2"/>
    <text x="210" y="48" font-size="10" fill="#5c5348">sand</text>
    <text x="210" y="88" font-size="10" fill="#2a6a78">perched WT</text>
    <text x="210" y="120" font-size="10" fill="#5c5348">clay aquitard</text>
    <text x="210" y="158" font-size="10" fill="#5c5348">lower unit</text>
  </svg>`,
  "layered-6-8": `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="16" width="110" height="54" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="70" y="70" width="110" height="120" fill="#c9b48a" stroke="#1b1712" stroke-width="2"/>
    <line x1="70" y1="70" x2="180" y2="70" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="125" cy="160" r="5" fill="#c24e1d"/>
    <text x="190" y="46" font-size="11" fill="#5c5348">6 ft dry/moist</text>
    <text x="190" y="74" font-size="11" fill="#2a6a78">WT</text>
    <text x="190" y="140" font-size="11" fill="#5c5348">sat. sand</text>
    <text x="190" y="164" font-size="11" fill="#c24e1d">point at 14–16 ft</text>
  </svg>`,
  "artesian": `<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="160" height="80" fill="#8f5d38" stroke="#1b1712" stroke-width="2"/>
    <rect x="50" y="130" width="160" height="50" fill="#c9b48a" stroke="#1b1712" stroke-width="2"/>
    <line x1="20" y1="28" x2="280" y2="28" stroke="#2a6a78" stroke-width="2" stroke-dasharray="5 3"/>
    <text x="22" y="20" font-size="11" fill="#2a6a78">piezometric level (above ground)</text>
    <line x1="50" y1="50" x2="210" y2="50" stroke="#1b1712" stroke-width="2"/>
    <text x="58" y="78" font-size="11" fill="#f3eee4">clay aquitard</text>
    <circle cx="130" cy="136" r="5" fill="#c24e1d"/>
    <text x="220" y="140" font-size="11" fill="#c24e1d">top of sand</text>
    <text x="220" y="70" font-size="11" fill="#5c5348">ground</text>
  </svg>`,
  "cut-clay": `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 40h90v50H70v80H16z" fill="#8f5d38" stroke="#1b1712" stroke-width="2"/>
    <path d="M194 40h90v130h-54V90h-36z" fill="#8f5d38" stroke="#1b1712" stroke-width="2"/>
    <text x="110" y="36" font-size="11" fill="#5c5348">excavation</text>
    <circle cx="150" cy="150" r="5" fill="#c24e1d"/>
    <text x="110" y="172" font-size="11" fill="#c24e1d">clay under the cut</text>
  </svg>`,
  "boiling": `<svg viewBox="0 0 280 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="50" width="200" height="120" fill="#c9b48a" stroke="#1b1712" stroke-width="2"/>
    <path d="M90 170c10-30 20-30 30 0s20-30 30 0 20-30 30 0" fill="none" stroke="#2a6a78" stroke-width="2"/>
    <text x="70" y="36" font-size="12" fill="#2a6a78">upward seepage · exit face</text>
    <text x="86" y="100" font-size="11" fill="#5c5348">σ′ → 0  (quick / boil)</text>
  </svg>`,
  "cofferdam": `<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="16" width="120" height="50" fill="#7eb0bd"/>
    <rect x="16" y="66" width="268" height="124" fill="#c9b48a" stroke="#1b1712" stroke-width="2"/>
    <rect x="148" y="16" width="20" height="130" fill="#6d4328" stroke="#1b1712" stroke-width="2"/>
    <path d="M40 66c20 28 50 50 98 70" fill="none" stroke="#2a6a78" stroke-width="2"/>
    <path d="M168 150c20-10 40-30 70-40" fill="none" stroke="#2a6a78" stroke-width="2"/>
    <text x="28" y="36" font-size="11" fill="#1b3d46">high water</text>
    <text x="180" y="40" font-size="11" fill="#5c5348">excavation</text>
    <text x="176" y="172" font-size="11" fill="#c24e1d">exit / heave</text>
  </svg>`,
  "flownet": `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="260" height="140" fill="#f3eadb" stroke="#1b1712" stroke-width="2"/>
    <path d="M40 150C80 90 120 50 160 40" fill="none" stroke="#2a6a78" stroke-width="2"/>
    <path d="M70 150C110 100 150 60 200 48" fill="none" stroke="#2a6a78" stroke-width="2"/>
    <path d="M40 120h90" fill="none" stroke="#8f5d38" stroke-width="1.5"/>
    <path d="M50 90h110" fill="none" stroke="#8f5d38" stroke-width="1.5"/>
    <text x="28" y="16" font-size="11" fill="#2a6a78">flow lines</text>
    <text x="168" y="16" font-size="11" fill="#8f5d38">equipotentials</text>
  </svg>`,
  "embankment": `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="110" width="268" height="50" fill="#8f5d38" stroke="#1b1712" stroke-width="2"/>
    <path d="M70 110l50-70h60l50 70z" fill="#c6a36e" stroke="#1b1712" stroke-width="2"/>
    <text x="118" y="80" font-size="11" fill="#1b1712">embankment</text>
    <text x="24" y="140" font-size="11" fill="#f3eee4">soft clay</text>
  </svg>`,
  "loose-sand": `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="30" width="220" height="110" fill="#d7c4a3" stroke="#1b1712" stroke-width="2"/>
    <line x1="30" y1="58" x2="250" y2="58" stroke="#2a6a78" stroke-width="3"/>
    <text x="40" y="22" font-size="11" fill="#5c5348">loose saturated sand</text>
    <text x="40" y="80" font-size="11" fill="#2a6a78">WT near surface</text>
    <text x="40" y="108" font-size="11" fill="#c24e1d">fast cyclic load</text>
  </svg>`,
  "wall-k0": `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="20" width="22" height="150" fill="#6d4328" stroke="#1b1712" stroke-width="2"/>
    <path d="M92 40h140v130H92z" fill="#e8d7b8"/>
    <path d="M92 40v130" stroke="#1b1712" stroke-width="2"/>
    <path d="M114 50l70 0" stroke="#c24e1d" stroke-width="3"/>
    <path d="M114 160l70 0" stroke="#c24e1d" stroke-width="3"/>
    <text x="20" y="36" font-size="11" fill="#5c5348">no yield</text>
    <text x="20" y="52" font-size="11" fill="#5c5348">K0</text>
    <text x="200" y="36" font-size="11" fill="#5c5348">backfill</text>
  </svg>`,
  "wall-ka": `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="86" y="20" width="22" height="150" fill="#6d4328" stroke="#1b1712" stroke-width="2"/>
    <path d="M108 40h140v130H108z" fill="#e8d7b8"/>
    <path d="M108 170L230 70" stroke="#c24e1d" stroke-width="2" stroke-dasharray="5 3"/>
    <path d="M70 90h16" stroke="#c24e1d" stroke-width="2"/>
    <text x="16" y="86" font-size="11" fill="#c24e1d">wall away</text>
    <text x="16" y="102" font-size="11" fill="#5c5348">active Ka</text>
  </svg>`,
  "wall-kp": `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="86" y="20" width="22" height="150" fill="#6d4328" stroke="#1b1712" stroke-width="2"/>
    <path d="M108 40h140v130H108z" fill="#e8d7b8"/>
    <path d="M108 170L250 90" stroke="#c24e1d" stroke-width="2" stroke-dasharray="5 3"/>
    <path d="M108 90h24" stroke="#c24e1d" stroke-width="2"/>
    <text x="16" y="86" font-size="11" fill="#c24e1d">into soil</text>
    <text x="16" y="102" font-size="11" fill="#5c5348">passive Kp</text>
  </svg>`,
  "wall-water": `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="20" width="22" height="150" fill="#6d4328" stroke="#1b1712" stroke-width="2"/>
    <rect x="102" y="40" width="130" height="130" fill="#7eb0bd"/>
    <text x="120" y="110" font-size="12" fill="#1b3d46">standing water</text>
    <text x="16" y="90" font-size="11" fill="#5c5348">Pw = ½γw h²</text>
    <text x="16" y="106" font-size="11" fill="#5c5348">not × Ka</text>
  </svg>`,
  "wall-surcharge": `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="36" width="22" height="134" fill="#6d4328" stroke="#1b1712" stroke-width="2"/>
    <rect x="92" y="50" width="150" height="120" fill="#e8d7b8"/>
    <rect x="92" y="28" width="150" height="22" fill="#c24e1d"/>
    <text x="120" y="44" font-size="11" fill="#fffaf2">surcharge q</text>
    <text x="16" y="80" font-size="11" fill="#5c5348">K q rectangle</text>
  </svg>`,
  "wall-submerged": `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="20" width="22" height="150" fill="#6d4328" stroke="#1b1712" stroke-width="2"/>
    <rect x="102" y="40" width="140" height="130" fill="#b7c9a0"/>
    <line x1="102" y1="40" x2="242" y2="40" stroke="#2a6a78" stroke-width="3"/>
    <text x="112" y="70" font-size="11" fill="#1b3d46">WT at top</text>
    <text x="112" y="88" font-size="11" fill="#5c5348">use γ′ + water</text>
  </svg>`,
  "footing-wt": `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="36" width="100" height="22" fill="#6d4328" stroke="#1b1712" stroke-width="2"/>
    <rect x="20" y="58" width="260" height="112" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <line x1="20" y1="58" x2="280" y2="58" stroke="#2a6a78" stroke-width="3"/>
    <text x="108" y="28" font-size="11" fill="#5c5348">footing</text>
    <text x="30" y="80" font-size="11" fill="#2a6a78">WT at base</text>
    <text x="30" y="130" font-size="11" fill="#5c5348">use γ′ on Nγ term</text>
  </svg>`,
  "footing-wide": `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="30" width="50" height="16" fill="#6d4328"/>
    <ellipse cx="65" cy="110" rx="40" ry="48" fill="none" stroke="#c24e1d" stroke-width="2"/>
    <rect x="160" y="30" width="110" height="16" fill="#6d4328"/>
    <ellipse cx="215" cy="118" rx="78" ry="58" fill="none" stroke="#c24e1d" stroke-width="2"/>
    <text x="36" y="22" font-size="11" fill="#5c5348">narrow</text>
    <text x="168" y="22" font-size="11" fill="#5c5348">wider · deeper bulb</text>
  </svg>`,
  "footing-surface": `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="30" width="120" height="20" fill="#6d4328" stroke="#1b1712" stroke-width="2"/>
    <rect x="20" y="50" width="260" height="90" fill="#8f5d38" stroke="#1b1712" stroke-width="2"/>
    <text x="118" y="22" font-size="11" fill="#5c5348">strip at surface</text>
    <text x="30" y="100" font-size="12" fill="#f3eee4">clay  su</text>
  </svg>`,
  "consol-layer": `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="20" width="240" height="36" fill="#c6a36e" stroke="#1b1712" stroke-width="2"/>
    <rect x="30" y="56" width="240" height="70" fill="#8f5d38" stroke="#1b1712" stroke-width="2"/>
    <rect x="30" y="126" width="240" height="36" fill="#c9b48a" stroke="#1b1712" stroke-width="2"/>
    <text x="40" y="42" font-size="11" fill="#1b1712">load / fill</text>
    <text x="40" y="96" font-size="12" fill="#f3eee4">clay  H  ·  drains top &amp; bottom</text>
    <text x="40" y="148" font-size="11" fill="#5c5348">sand drain layer</text>
  </svg>`,
  "pe-s1-a": `<svg viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="16" width="110" height="54" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="70" y="70" width="110" height="130" fill="#c9b48a" stroke="#1b1712" stroke-width="2"/>
    <line x1="70" y1="70" x2="180" y2="70" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="125" cy="160" r="5" fill="#c24e1d"/>
    <text x="190" y="36" font-size="11" fill="#5c5348">0–6 ft  γ=105</text>
    <text x="190" y="74" font-size="11" fill="#2a6a78">WT at 6 ft</text>
    <text x="190" y="120" font-size="11" fill="#5c5348">γsat=122</text>
    <text x="190" y="164" font-size="11" fill="#c24e1d">z = 16 ft</text>
  </svg>`,
  "pe-s1-c": `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg">
    <text x="48" y="16" font-size="11" fill="#5c5348">WT at 8 ft</text>
    <rect x="24" y="28" width="80" height="160" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="24" y="108" width="80" height="80" fill="#c9b48a"/>
    <line x1="24" y1="108" x2="104" y2="108" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="64" cy="172" r="5" fill="#c24e1d"/>
    <text x="200" y="16" font-size="11" fill="#5c5348">WT at 3 ft</text>
    <rect x="168" y="28" width="80" height="160" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="168" y="58" width="80" height="130" fill="#c9b48a"/>
    <line x1="168" y1="58" x2="248" y2="58" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="208" cy="172" r="5" fill="#c24e1d"/>
    <text x="120" y="180" font-size="10" fill="#c24e1d">z = 15 ft</text>
  </svg>`,
  "pe-s1-f": `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="16" width="110" height="48" fill="#e8d7b8" stroke="#1b1712" stroke-width="2"/>
    <rect x="70" y="64" width="110" height="120" fill="#c9b48a" stroke="#1b1712" stroke-width="2"/>
    <line x1="70" y1="64" x2="180" y2="64" stroke="#2a6a78" stroke-width="3"/>
    <circle cx="125" cy="176" r="5" fill="#c24e1d"/>
    <text x="190" y="40" font-size="11" fill="#5c5348">0–4 ft  γ=100</text>
    <text x="190" y="68" font-size="11" fill="#2a6a78">WT at 4 ft</text>
    <text x="190" y="120" font-size="11" fill="#5c5348">γsat=125</text>
    <text x="190" y="180" font-size="11" fill="#c24e1d">z = 12 ft</text>
  </svg>`
}
});
