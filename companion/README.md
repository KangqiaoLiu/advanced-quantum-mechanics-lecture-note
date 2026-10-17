# Advanced Quantum Mechanics — Curated Interactive Companion

**Instructor:** Kangqiao LIU · **Purpose:** optional, independent student exploration after class. Live course periods continue with blackboard derivations only.

## Completed selected scope

- **27** featured working physics investigations, covering all nine chapters.
- **8** other completed foundational reference labs, available when students need an extra conceptual refresher.
- **27** externally supported guided-reading questions, with direct teaching links and specific student exercises.
- **35 self-authored interactive models are all implemented**. The historic 62-topic inventory is retained, but there are no outstanding bespoke simulations in the curated plan.

[Open curated interactive directory](index.html) · [Guided further reading](reading.html) · [Independent student learning routes](LEARNING_PATHS.md) · [Completed content and verification](IMPLEMENTATION_STATUS.md) · [Complete lecture-note PDF](../pdf/advanced-quantum-mechanics.pdf)

The curated directory defaults to the 27 featured experiments. Students can choose a chapter, search a physical question, or switch to **All available experiments**, **Foundational references**, **Guided reading** or the complete historic inventory. Inside each featured experiment, neighboring investigations connect through previous/next links.

Every selected module provides a motivating physical question, model assumptions, genuine numerical or analytical predictions that respond to controls, multiple diagnostic figures, mathematical derivations, exact or asymptotic limits, independent questions and a formative check. The website is designed to be used entirely without live classroom demonstration.

## Access in GitHub (private repository)

Open **Code → Codespaces → Create codespace on main**. The repository's development-container setup automatically starts an HTTP server with forwarded port 8000; open its forwarded address at `/companion/`. Keep the forwarded port **Private**. To update an older Codespace, pull the latest `main`.

For local preview, from repository root run `python3 -m http.server 8000` and open `http://localhost:8000/companion/`. The site runs in the browser without scientific Python dependencies.

## Scientific checks and maintaining quality

Run `node scripts/test_companion_models.cjs` (48 independent physics test groups), `python3 scripts/check_companion_catalog.py`, `python3 scripts/check_companion_pages.py`, and `python3 scripts/check_companion_browser.py`. GitHub Actions checks syntax, source links, physics models, all 35 lab-page initial renders, directory/reading content and Codespaces startup.

Further maintenance includes meaningful control-interaction sweeps, visual and keyboard/screen-reader inspection across devices, student learning feedback and cross-chapter symbol auditing. These additional quality tasks should improve the scientific teaching content rather than inflate the number of self-authored experiments.

## Source notes and rights

See [course conventions](PHYSICS_CONVENTIONS.md), [prototype specifications](PROTOTYPES.md), [laboratory template](LAB_TEMPLATE.md), [curated project blueprint](../INTERACTIVE_COMPANION_BLUEPRINT.md) and [source attribution/rights](../COPYRIGHT.md). The private repository includes teaching sources with copyright considerations. A public interactive website requires a separate rights review and an appropriately separated publication package.
