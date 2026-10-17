# Curated Interactive Companion — Scope, Decisions and Progress

**Authoritative editorial revision: 2026-10-17.** The nine-chapter graduate course uses blackboard instruction; these materials are entirely for **students' optional, independent after-class exploration**.

## Deliberate reduction of custom development

The original list of 62 scientific questions is **a historical topic inventory, not a production target**. The curated release policy is:

| Collection | Current pages | To build | Total |
|---|---:|---:|---:|
| **Selected scientific investigations** — substantive, high-value parameter exploration | 18 | 9 | **27** |
| **Existing foundational reference tools** — already developed, retained, discreetly accessible | 8 | 0 | **8** |
| **Guided external reading** — source, question, prompt and cross-link, no new standalone simulator | 0 | 0 | **27** |
| **All historical topics accounted for** | **26** | **9** | **62** |

The final self-authored experiment count is **35**, with **27 mainline selected experiments** as the primary student-facing collection. **Only nine new experiment modules remain**. All 26 previously authored and tested modules remain available, and no previous source content is discarded.

The default [interactive directory](index.html) displays 27 selected investigations, clearly separating existing and forthcoming items. Students can switch to *All available experiments*, *Foundational references*, or *Further reading*. The complete [guided reading library](reading.html) includes 27 externally sourced investigations. The previous 22-item `route: core` field is retained in the catalog for historical compatibility; **`editorial_track` now governs production and website presentation**.

## The nine high-impact experiments selected for future implementation

| Priority | Experiment | Scientific purpose and non-duplication |
|---|---|---|
| 1 | **IC-02-05 WKB near a turning point** | Where does WKB reproduce an exact solution, and where does it fail? |
| 2 | **IC-02-06 Path phases and stationary action** | How do nearby paths interfere around a stationary-action path? |
| 3 | **IC-03-02 Adding two angular momenta** | How does the coupled basis reorganize two-spin states? |
| 4 | **IC-03-06 Bell correlations and CHSH** | How does the CHSH value vary with four measurement directions? |
| 5 | **IC-04-02 Variational energy landscape** | How does a trial wavefunction constrain the ground-state energy? |
| 6 | **IC-04-03 Driven two-level resonance** | How do transition probabilities depend on drive frequency and duration? |
| 7 | **IC-05-03 Lippmann–Schwinger, T matrix and Born regime** | How do multiple-scattering corrections determine the reliability of the Born approximation? |
| 8 | **IC-08-07 Thouless pumping over a cycle** | How does a closed adiabatic cycle transport quantized charge? |
| 9 | **IC-09-06 Trainability and gradient concentration** | How does training difficulty change with a circuit's structure and size? |

These nine were retained for reasons tied to learning through manipulation, not topical fashion: **controlled approximation breakdown**, **coherent action interference**, **addition of angular momentum**, **nonclassical correlation**, **variational optimization**, **driven resonance**, **multi-scattering and Born-series convergence** (combined into one experiment), **quantized adiabatic pumping**, and **trainability/gradient concentration**. Each needs its own well-defined mathematical model, independent reference calculation, quantitatively interpretable plots, validity discussion and self-study exercises. [The existing four calibration exemplars](PROTOTYPES.md) remain the physical-depth floor.

## Already working selected investigations — by chapter

**Chapter 1, Basic Concepts**

- [IC-01-03 — Cascaded Stern–Gerlach](labs/IC-01-03/index.html)

**Chapter 2, Quantum Dynamics**

- [IC-02-01 — Spin precession in a field](labs/IC-02-01/index.html)
- [IC-02-03 — Harmonic oscillator and coherent states](labs/IC-02-03/index.html)
- [IC-02-08 — Berry phase on the Bloch sphere](labs/IC-02-08/index.html)

**Chapter 3, Angular Momentum Theory**

- [IC-03-04 — Entanglement and partial trace](labs/IC-03-04/index.html)
- [IC-03-05 — POVM effects versus instruments](labs/IC-03-05/index.html)

**Chapter 4, Approximation Methods**

- [IC-04-01 — Avoided crossings and perturbation theory](labs/IC-04-01/index.html)

**Chapter 5, Scattering Theory**

- [IC-05-05 — Partial-wave interference and unitarity](labs/IC-05-05/index.html)

**Chapter 6, Quantum Many-Body Systems**

- [IC-06-01 — Permutation and exchange](labs/IC-06-01/index.html)
- [IC-06-04 — Fermionic creation and ordering signs](labs/IC-06-04/index.html)

**Chapter 7, Relativistic Quantum Mechanics**

- [IC-07-01 — From Schrödinger to Pauli](labs/IC-07-01/index.html)
- [IC-07-02 — Klein–Gordon versus Dirac](labs/IC-07-02/index.html)

**Chapter 8, Topological Condensed Matter Physics**

- [IC-08-02 — SSH bulk, winding and edges](labs/IC-08-02/index.html)
- [IC-08-03 — SSH boundary termination and symmetry](labs/IC-08-03/index.html)
- [IC-08-04 — Zak phase and Berry gauge](labs/IC-08-04/index.html)
- [IC-08-06 — Chern insulator phase diagram](labs/IC-08-06/index.html)

**Chapter 9, Quantum Neural Networks and Machine Learning**

- [IC-09-03 — Parameter-shift training](labs/IC-09-03/index.html)
- [IC-09-05 — Quantum kernel geometry](labs/IC-09-05/index.html)

## Foundational tools retained as optional quick references

- [IC-01-01 — Complex amplitude and phase](labs/IC-01-01/index.html). How do complex amplitudes combine before probabilities are formed?
- [IC-01-02 — Two-by-two eigenproblem](labs/IC-01-02/index.html). How do the eigenvectors of a Hermitian matrix depend on its entries?
- [IC-01-04 — Born rule and projectors](labs/IC-01-04/index.html). How are probabilities and state updates computed from projectors?
- [IC-01-05 — Measurement axes and basis changes](labs/IC-01-05/index.html). Why do matrix components change while physical predictions remain invariant?
- [IC-01-08 — Tensor-product index laboratory](labs/IC-01-08/index.html). How are two small Hilbert spaces combined without losing track of indices?
- [IC-03-03 — Pure states and statistical mixtures](labs/IC-03-03/index.html). Can two different ensembles represent the same density operator?
- [IC-06-03 — Bosonic Fock occupation rules](labs/IC-06-03/index.html). Why does bosonic creation produce a square-root occupation factor?
- [IC-09-01 — Parameterized quantum circuit output](labs/IC-09-01/index.html). How do rotation parameters turn measurements into model predictions?

These references are useful for students who need to review amplitudes, matrices, bases, reduced states, occupation rules or simple circuit output. They remain functional and searchable without occupying the central selected-investigation display.

## Topics moved to external reading (27)

**Chapter 1:** [IC-01-06 Commutators and uncertainty](reading.html#IC-01-06); [IC-01-07 Fourier width and momentum](reading.html#IC-01-07); [IC-01-09 Elementary non-Hermitian eigenvalues](reading.html#IC-01-09)

**Chapter 2:** [IC-02-02 Schrödinger and Heisenberg pictures](reading.html#IC-02-02); [IC-02-04 Squeezed-state uncertainty](reading.html#IC-02-04); [IC-02-07 Aharonov–Bohm interference](reading.html#IC-02-07); [IC-02-09 Monopole patches and gauge potentials](reading.html#IC-02-09); [IC-02-10 Local gauge transformation](reading.html#IC-02-10); [IC-02-11 Time ordering for sequential drives](reading.html#IC-02-11)

**Chapter 3:** [IC-03-01 Spin rotations and the 4π return](reading.html#IC-03-01); [IC-03-07 Teleportation with classical outcomes](reading.html#IC-03-07); [IC-03-08 Orbital angular momentum patterns](reading.html#IC-03-08)

**Chapter 4:** [IC-04-04 Strong-coupling versus weak-coupling views](reading.html#IC-04-04); [IC-04-05 Interaction-picture ordering](reading.html#IC-04-05)

**Chapter 5:** [IC-05-01 Scattering geometry and momentum transfer](reading.html#IC-05-01); [IC-05-02 Green-function outgoing boundary conditions](reading.html#IC-05-02); [IC-05-04 Born approximation range](reading.html#IC-05-04)

**Chapter 6:** [IC-06-02 Symmetric and antisymmetric states](reading.html#IC-06-02); [IC-06-05 One-body operators in Fock space](reading.html#IC-06-05); [IC-06-06 Two-body interactions and prefactors](reading.html#IC-06-06)

**Chapter 7:** [IC-07-03 Dirac spinor components](reading.html#IC-07-03); [IC-07-04 Nonrelativistic Dirac limit](reading.html#IC-07-04)

**Chapter 8:** [IC-08-01 Bloch bands from a real-space chain](reading.html#IC-08-01); [IC-08-05 Two-dimensional Berry curvature](reading.html#IC-08-05)

**Chapter 9:** [IC-09-02 Data encoding and decision boundaries](reading.html#IC-09-02); [IC-09-04 Finite shots and training noise](reading.html#IC-09-04); [IC-09-07 One- and two-qubit worked learning models](reading.html#IC-09-07)

Every reading item preserves the source-note path and one relevant external source, proposes a concrete calculation or conceptual check, and links a related available experiment. Original material is authored as short guidance; third-party content remains at its original site. Prioritize free educational sources: [MIT OpenCourseWare](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/lecture-notes/), [QuVis](https://www.st-andrews.ac.uk/physics/quvis/de/index-about.php?catid=1&nodeid=1), [QuTiP](https://qutip.readthedocs.io/en/stable/guide/guide-dynamics.html), [IBM Quantum Learning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information), and [Topology in Condensed Matter](https://topocondmat.org/w3-pump-qhe/pumps/).

## Why the editorial design is selective

A standalone custom interactive module is justified when changing physical parameters reveals a conceptually meaningful change, a limitation of an approximation, a conservation law, a boundary/bulk connection, or a mathematical feature that benefits significantly from live calculation. Standard algebra drills, similar versions of a phenomenon already explored, specialized side directions and applications already served by established external teaching material belong in foundational references or guided reading.

Student AI access is a useful resource for elaborating a proof, proposing checks, verifying numerical limits and solving neighboring exercises. The reading guide teaches the student to check AI reasoning against equations, dimensions and valid conditions.

## Remaining quality work

- Build only the nine selected future investigations; avoid inventing mandatory standalone labs for reading-only topics.
- Audit the physics and notation of all 35 self-authored modules, especially gauge conventions, approximation validity, finite-grid errors, fermionic signs and relativistic operator factors.
- Move from first-render browser smoke tests to actual control sweeps, canvas appearance review, mobile keyboard/screen-reader accessibility and independent student comprehension testing.
- Preserve private authenticated Codespaces preview. Any later public site requires rights clearance; retain the protected lecture notes and inspect the licensing of all linked external material.

## Viewing and validation

[Explore the curated website](index.html) · [Guided extension reading](reading.html) · [Independent learning paths](LEARNING_PATHS.md) · [English lecture notes](../pdf/advanced-quantum-mechanics.pdf).

For preview use GitHub Codespaces (forwarded port 8000 at `/companion/`) or `python3 -m http.server 8000` in the repo root. Automated tests include `node scripts/test_companion_models.cjs`, `python3 scripts/check_companion_catalog.py`, `python3 scripts/check_companion_pages.py`, `python3 scripts/check_companion_browser.py`.
