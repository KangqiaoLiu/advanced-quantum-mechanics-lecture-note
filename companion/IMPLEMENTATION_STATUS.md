# Interactive Companion — Implementation Status and Remaining Work

**Updated: 2026-10-17.** The full nine-chapter interactive companion is a **voluntary after-class self-study resource**. The professor teaches all live classes using the blackboard. No interactive experiment will be shown or operated during class.

## Current coverage

**21 of 62 complete scientific experiments are running; 41 remain to be authored.** Every chapter includes tested, quantitative self-study content.

| Chapter | Total questions | Implemented | Remaining |
|---|---:|---:|---:|
| 1. Basic Concepts | 9 | 5 | 4 |
| 2. Quantum Dynamics | 11 | 3 | 8 |
| 3. Angular Momentum Theory | 8 | 3 | 5 |
| 4. Approximation Methods | 5 | 1 | 4 |
| 5. Scattering Theory | 5 | 1 | 4 |
| 6. Quantum Many-Body Systems | 6 | 2 | 4 |
| 7. Relativistic Quantum Mechanics | 4 | 1 | 3 |
| 8. Topological Condensed Matter Physics | 7 | 3 | 4 |
| 9. Quantum Neural Networks and Machine Learning | 7 | 2 | 5 |
| **Total** | **62** | **21** | **41** |

## Working laboratories

### Chapter 1 — Basic Concepts

- [IC-01-01 — Complex amplitude and phase](labs/IC-01-01/index.html). How do complex amplitudes combine before probabilities are formed?
- [IC-01-02 — Two-by-two eigenproblem](labs/IC-01-02/index.html). How do the eigenvectors of a Hermitian matrix depend on its entries?
- [IC-01-03 — Cascaded Stern–Gerlach](labs/IC-01-03/index.html). Why can an intermediate spin measurement change the final statistics?
- [IC-01-04 — Born rule and projectors](labs/IC-01-04/index.html). How are probabilities and state updates computed from projectors?
- [IC-01-05 — Measurement axes and basis changes](labs/IC-01-05/index.html). Why do matrix components change while physical predictions remain invariant?

### Chapter 2 — Quantum Dynamics

- [IC-02-01 — Spin precession in a field](labs/IC-02-01/index.html). How does a two-level state evolve in a constant magnetic field?
- [IC-02-03 — Harmonic oscillator and coherent states](labs/IC-02-03/index.html). Why does a coherent-state wave packet move without spreading?
- [IC-02-08 — Berry phase on the Bloch sphere](labs/IC-02-08/index.html). How does a cyclic adiabatic path accumulate a geometric phase?

### Chapter 3 — Angular Momentum Theory

- [IC-03-03 — Pure states and statistical mixtures](labs/IC-03-03/index.html). Can two different ensembles represent the same density operator?
- [IC-03-04 — Entanglement and partial trace](labs/IC-03-04/index.html). Why can a pure composite state have a mixed subsystem?
- [IC-03-05 — POVM effects versus instruments](labs/IC-03-05/index.html). What additional information specifies the postmeasurement state?

### Chapter 4 — Approximation Methods

- [IC-04-01 — Avoided crossings and perturbation theory](labs/IC-04-01/index.html). When does ordinary perturbation theory cease to be accurate?

### Chapter 5 — Scattering Theory

- [IC-05-05 — Partial-wave interference and unitarity](labs/IC-05-05/index.html). How do individual phase shifts combine into the total cross section?

### Chapter 6 — Quantum Many-Body Systems

- [IC-06-03 — Bosonic Fock occupation rules](labs/IC-06-03/index.html). Why does bosonic creation produce a square-root occupation factor?
- [IC-06-04 — Fermionic creation and ordering signs](labs/IC-06-04/index.html). Why does exchanging two fermionic creation operators change a sign?

### Chapter 7 — Relativistic Quantum Mechanics

- [IC-07-02 — Klein–Gordon versus Dirac](labs/IC-07-02/index.html). Why does linearizing relativistic dispersion require matrix algebra?

### Chapter 8 — Topological Condensed Matter Physics

- [IC-08-02 — SSH bulk, winding and edges](labs/IC-08-02/index.html). How do hopping amplitudes govern gap closure and topological winding?
- [IC-08-04 — Zak phase and Berry gauge](labs/IC-08-04/index.html). Which aspects of the Zak phase depend on gauge and unit cell?
- [IC-08-06 — Chern insulator phase diagram](labs/IC-08-06/index.html). How does a gap-closing point change a Chern number?

### Chapter 9 — Quantum Neural Networks and Machine Learning

- [IC-09-03 — Parameter-shift training](labs/IC-09-03/index.html). Can a quantum circuit be trained using shifted expectation values?
- [IC-09-05 — Quantum kernel geometry](labs/IC-09-05/index.html). How do quantum feature states define a kernel matrix?

Each working experiment has a physically stated model, genuine quantitative outputs, multiple responsive figures, explanatory English prose, derivations, controlled explorations, at least one formative self-check, and source-note links. Analytic/numerical model tests and automated Chrome first-render checks are integrated with GitHub Actions. Device-by-device visual evaluation and student comprehension review remain separate work.

## Recommended independent-study route

The historic `route: core` selection of 22 experiments is retained as a suggested **self-study conceptual sequence**, with no scheduled laboratory use or classroom demonstration. **17/22** are currently implemented. The remaining **5** route units are:

- **IC-01-08 — Tensor-product index laboratory:** How are two small Hilbert spaces combined without losing track of indices?
- **IC-06-01 — Permutation and exchange:** What changes when two indistinguishable particles are exchanged?
- **IC-07-01 — From Schrödinger to Pauli:** Where does spin enter the Pauli Hamiltonian with electromagnetic coupling?
- **IC-08-03 — SSH boundary termination and symmetry:** When do edge states survive a boundary or symmetry perturbation?
- **IC-09-01 — Parameterized quantum circuit output:** How do rotation parameters turn measurements into model predictions?

There are **36** additional extension laboratories awaiting implementation. Their scope includes mathematical and measurement foundations, WKB and paths, noncommuting pulse sequences, angular-momentum coupling and Bell experiments, variational and interaction-picture approximations, Green-function and T-matrix scattering, interacting Fock systems, Dirac spinors, 2D band curvature and pumping, and trainability of modern quantum circuits.

## Remaining stages

1. **Conceptual continuity.** Complete the remaining five suggested path units and add explicit prerequisite links to related existing modules. Students can choose their own pace and order.
2. **Full 62-topic reference companion.** Implement all extension labs with mathematical substance. A new lab should stand alone as a complete self-study chapter, with informative physics, figures, limits and references.
3. **Scientific and pedagogical verification.** Check model assumptions, convention-sensitive signs, numerically difficult regimes, limits, truncation error and stable updates as parameters change. Run desktop/mobile visual and keyboard/screen-reader checks beyond automated first render. Ask actual students to try representative problems and revise explanations.
4. **Release and copyright.** Keep authenticated private Codespaces preview. Before public GitHub Pages hosting, separate distributable original materials from third-party-derived notes and decide license/permissions. Update any PDF cover site hyperlink only once the final hosted destination is stable.

## Preview and reproducibility

From the private GitHub repo use **Code → Codespaces → Create codespace on main**. Port **8000** automatically serves the root; visit the forwarded address at `/companion/`. Locally, use `python3 -m http.server 8000` at the repo root. Tests live in `scripts/test_companion_models.cjs`, `scripts/check_companion_browser.py`, `scripts/check_companion_pages.py`, `scripts/check_companion_catalog.py`, executed in `.github/workflows/check-companion.yml`.
