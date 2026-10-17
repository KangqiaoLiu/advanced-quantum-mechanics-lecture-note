# Interactive Companion — Advanced Quantum Mechanics

**Instructor:** Kangqiao LIU. **Purpose:** voluntary, entirely student-led **after-class interactive study**. All live teaching remains on the blackboard; no classroom demonstration of interactive materials is planned.

**Current content:** 21 full interactive experiments in all nine English textbook chapters; 41 substantive experiments remain planned. The catalog retains 62 scientifically motivated questions.

[Start from the nine-chapter interactive directory](index.html) · [Independent learning paths](LEARNING_PATHS.md) · [Progress and remaining work](IMPLEMENTATION_STATUS.md) · [Complete English lecture notes](../pdf/advanced-quantum-mechanics.pdf) · [Master scientific blueprint](../INTERACTIVE_COMPANION_BLUEPRINT.md)

A student reads a motivating question, makes a prediction, varies physical parameters, compares real computed results, follows the derivation, checks a limiting case, and completes formative questions. Experiments can be revisited in any order and used without any interaction with the instructor.

## Interactive experiments by chapter

| Chapter | Available working experiments |
|---|---|
| 1. Basic Concepts | [Complex amplitude and phase](labs/IC-01-01/index.html) · [Two-by-two eigenproblem](labs/IC-01-02/index.html) · [Cascaded Stern–Gerlach](labs/IC-01-03/index.html) · [Born rule and projectors](labs/IC-01-04/index.html) · [Measurement axes and basis changes](labs/IC-01-05/index.html) |
| 2. Quantum Dynamics | [Spin precession in a field](labs/IC-02-01/index.html) · [Harmonic oscillator and coherent states](labs/IC-02-03/index.html) · [Berry phase on the Bloch sphere](labs/IC-02-08/index.html) |
| 3. Angular Momentum Theory | [Pure states and statistical mixtures](labs/IC-03-03/index.html) · [Entanglement and partial trace](labs/IC-03-04/index.html) · [POVM effects versus instruments](labs/IC-03-05/index.html) |
| 4. Approximation Methods | [Avoided crossings and perturbation theory](labs/IC-04-01/index.html) |
| 5. Scattering Theory | [Partial-wave interference and unitarity](labs/IC-05-05/index.html) |
| 6. Quantum Many-Body Systems | [Bosonic Fock occupation rules](labs/IC-06-03/index.html) · [Fermionic creation and ordering signs](labs/IC-06-04/index.html) |
| 7. Relativistic Quantum Mechanics | [Klein–Gordon versus Dirac](labs/IC-07-02/index.html) |
| 8. Topological Condensed Matter Physics | [SSH bulk, winding and edges](labs/IC-08-02/index.html) · [Zak phase and Berry gauge](labs/IC-08-04/index.html) · [Chern insulator phase diagram](labs/IC-08-06/index.html) |
| 9. Quantum Neural Networks and Machine Learning | [Parameter-shift training](labs/IC-09-03/index.html) · [Quantum kernel geometry](labs/IC-09-05/index.html) |

The selected `core` questions denote an optional recommended self-study sequence. The remaining `extension` topics offer further independent exploration. All are designed as detailed educational material rather than slides or classroom demonstrations.

## GitHub Codespaces preview — private repository

From the repository page, use **Code → Codespaces → Create codespace on main**, or open the [Codespaces creation page](https://github.com/codespaces/new?hide_repo_select=true&repo=1410589769&ref=main). The included development container automatically serves port 8000. Open the forwarded port and visit `/companion/`. Keep the forwarded port **Private**.

For local preview, run `python3 -m http.server 8000` from the repository root and open `http://localhost:8000/companion/`. Serving from the root preserves same-repository links to the lecture-note PDF. No scientific Python packages are required in a student's browser.


## Run tests and review the sources

Physics benchmarks: `node scripts/test_companion_models.cjs`. Catalog/source mapping check: `python3 scripts/check_companion_catalog.py`. Page, relative-link and accessibility metadata check: `python3 scripts/check_companion_pages.py`. Headless browser numerical-render smoke test: `python3 scripts/check_companion_browser.py`. The GitHub Actions workflow `.github/workflows/check-companion.yml` runs the complete suite.

Read [model conventions](PHYSICS_CONVENTIONS.md), [first four calibration specifications](PROTOTYPES.md), [laboratory writing template](LAB_TEMPLATE.md), [full intellectual plan](../INTERACTIVE_COMPANION_BLUEPRINT.md) and [notes provenance/rights](../COPYRIGHT.md). Students can also inspect model sources alongside the published math.

## Access and publication

The authoritative repository is **private**. GitHub Codespaces starts an authenticated cloud preview (keep forwarded port 8000 visibility Private), and local static serving needs no scientific Python packages. A public GitHub Pages website is a separate decision requiring rights clearance and separation of original interactive content from restricted source-note materials. The compiled PDF cover points at the repository's companion entry for authorized readers.

## Known limitations

Automated tests verify model equations, analytic limits, controlled mesh convergence and initial browser rendering. Human review is needed for full keyboard accessibility, mobile/desktop visualization, student understanding and deeper edge-case interactions. The 41 planned labs will be implemented to the same standards.
