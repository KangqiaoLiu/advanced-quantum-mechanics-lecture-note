# Advanced Quantum Mechanics — Curated Interactive Companion

**Instructor:** Kangqiao LIU. **Teaching model:** classroom teaching uses the blackboard; this website is for **optional student-led after-class exploration**.

The initial 62-question inventory has been curated into **27 high-value selected investigations** (18 working, nine planned), **eight existing quick-reference labs** (all working), and **27 guided external-reading questions**. **All 26 previously completed labs remain available.** The final intended number of self-authored experiments is **35**; nine new labs remain to be developed.

## Start here

[Curated nine-chapter directory](index.html) · [27 guided external readings](reading.html) · [Independent learning paths](LEARNING_PATHS.md) · [Full scope and remaining tasks](IMPLEMENTATION_STATUS.md) · [English lecture notes](../pdf/advanced-quantum-mechanics.pdf).

The directory initially shows only the 27 selected investigations; students can change the collection selector to see all 26 currently working units, quick algebra/notation references, external reading or the full historical registry. This separation keeps the main textbook focused while preserving useful earlier work.

A typical lesson asks for a prediction, displays actual numerical/analytical results under changes of control parameters, gives the relevant derivation and assumptions, proposes investigations, and checks a student's interpretation.

## Planned nine scientific investigations

- IC-02-05: WKB near a turning point — Where does WKB reproduce an exact solution, and where does it fail?
- IC-02-06: Path phases and stationary action — How do nearby paths interfere around a stationary-action path?
- IC-03-02: Adding two angular momenta — How does the coupled basis reorganize two-spin states?
- IC-03-06: Bell correlations and CHSH — How does the CHSH value vary with four measurement directions?
- IC-04-02: Variational energy landscape — How does a trial wavefunction constrain the ground-state energy?
- IC-04-03: Driven two-level resonance — How do transition probabilities depend on drive frequency and duration?
- IC-05-03: Lippmann–Schwinger, T matrix and Born regime — How do multiple-scattering corrections determine the reliability of the Born approximation?
- IC-08-07: Thouless pumping over a cycle — How does a closed adiabatic cycle transport quantized charge?
- IC-09-06: Trainability and gradient concentration — How does training difficulty change with a circuit's structure and size?

Each new selected unit must demonstrate a genuine physical consequence of changing parameters and must pass independent scientific tests; high-quality explanation takes precedence over topic count.

## How to view the private website

From GitHub use **Code → Codespaces → Create codespace on main**, open the forwarded port 8000 and visit `/companion/`. Keep port visibility Private. Locally, from repository root execute `python3 -m http.server 8000` and open `http://localhost:8000/companion/`.

## Tests and scientific reference

Run `node scripts/test_companion_models.cjs`, `python3 scripts/check_companion_catalog.py`, `python3 scripts/check_companion_pages.py` and `python3 scripts/check_companion_browser.py`. GitHub Actions runs these checks automatically. See [physics conventions](PHYSICS_CONVENTIONS.md), [prototype specifications](PROTOTYPES.md), [the writing template](LAB_TEMPLATE.md) and [master editorial blueprint](../INTERACTIVE_COMPANION_BLUEPRINT.md).

## Rights and hosting

The repository and lecture manuscript remain private pending copyright clearance. A possible public release should separate original authored interactive content from third-party-protected source-note material. Linked external reading resources remain at their original websites. Automated checks do not replace human desktop/mobile visual QA or student comprehension trials.
