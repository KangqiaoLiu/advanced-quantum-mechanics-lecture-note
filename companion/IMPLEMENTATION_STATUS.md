# Interactive Companion — Implementation Status and Remaining Work

**October 17, 2026.** This is a comprehensive, **optional independent after-class textbook**. The instructor teaches the live course entirely at the blackboard. There will be no demonstrations or use of the interactive materials in class.

## What is complete

**26/62** physics laboratories have complete interactive pages with mathematical derivations and independently tested models. **All 22** entries in the recommended foundational self-study sequence are implemented. Every one of the nine textbook chapters has working interactive content. Another **36** independent-study extension labs remain planned.

| Textbook chapter | Registered scientific questions | Working labs | Still to write |
|---|---:|---:|---:|
| 1. Basic Concepts | 9 | 6 | 3 |
| 2. Quantum Dynamics | 11 | 3 | 8 |
| 3. Angular Momentum Theory | 8 | 3 | 5 |
| 4. Approximation Methods | 5 | 1 | 4 |
| 5. Scattering Theory | 5 | 1 | 4 |
| 6. Quantum Many-Body Systems | 6 | 3 | 3 |
| 7. Relativistic Quantum Mechanics | 4 | 2 | 2 |
| 8. Topological Condensed Matter Physics | 7 | 4 | 3 |
| 9. Quantum Neural Networks and Machine Learning | 7 | 3 | 4 |
| **Total** | **62** | **26** | **36** |

### Running experiments

**Chapter 1 — Basic Concepts**

- [IC-01-01: Complex amplitude and phase](labs/IC-01-01/index.html) — How do complex amplitudes combine before probabilities are formed?
- [IC-01-02: Two-by-two eigenproblem](labs/IC-01-02/index.html) — How do the eigenvectors of a Hermitian matrix depend on its entries?
- [IC-01-03: Cascaded Stern–Gerlach](labs/IC-01-03/index.html) — Why can an intermediate spin measurement change the final statistics?
- [IC-01-04: Born rule and projectors](labs/IC-01-04/index.html) — How are probabilities and state updates computed from projectors?
- [IC-01-05: Measurement axes and basis changes](labs/IC-01-05/index.html) — Why do matrix components change while physical predictions remain invariant?
- [IC-01-08: Tensor-product index laboratory](labs/IC-01-08/index.html) — How are two small Hilbert spaces combined without losing track of indices?

**Chapter 2 — Quantum Dynamics**

- [IC-02-01: Spin precession in a field](labs/IC-02-01/index.html) — How does a two-level state evolve in a constant magnetic field?
- [IC-02-03: Harmonic oscillator and coherent states](labs/IC-02-03/index.html) — Why does a coherent-state wave packet move without spreading?
- [IC-02-08: Berry phase on the Bloch sphere](labs/IC-02-08/index.html) — How does a cyclic adiabatic path accumulate a geometric phase?

**Chapter 3 — Angular Momentum Theory**

- [IC-03-03: Pure states and statistical mixtures](labs/IC-03-03/index.html) — Can two different ensembles represent the same density operator?
- [IC-03-04: Entanglement and partial trace](labs/IC-03-04/index.html) — Why can a pure composite state have a mixed subsystem?
- [IC-03-05: POVM effects versus instruments](labs/IC-03-05/index.html) — What additional information specifies the postmeasurement state?

**Chapter 4 — Approximation Methods**

- [IC-04-01: Avoided crossings and perturbation theory](labs/IC-04-01/index.html) — When does ordinary perturbation theory cease to be accurate?

**Chapter 5 — Scattering Theory**

- [IC-05-05: Partial-wave interference and unitarity](labs/IC-05-05/index.html) — How do individual phase shifts combine into the total cross section?

**Chapter 6 — Quantum Many-Body Systems**

- [IC-06-01: Permutation and exchange](labs/IC-06-01/index.html) — What changes when two indistinguishable particles are exchanged?
- [IC-06-03: Bosonic Fock occupation rules](labs/IC-06-03/index.html) — Why does bosonic creation produce a square-root occupation factor?
- [IC-06-04: Fermionic creation and ordering signs](labs/IC-06-04/index.html) — Why does exchanging two fermionic creation operators change a sign?

**Chapter 7 — Relativistic Quantum Mechanics**

- [IC-07-01: From Schrödinger to Pauli](labs/IC-07-01/index.html) — Where does spin enter the Pauli Hamiltonian with electromagnetic coupling?
- [IC-07-02: Klein–Gordon versus Dirac](labs/IC-07-02/index.html) — Why does linearizing relativistic dispersion require matrix algebra?

**Chapter 8 — Topological Condensed Matter Physics**

- [IC-08-02: SSH bulk, winding and edges](labs/IC-08-02/index.html) — How do hopping amplitudes govern gap closure and topological winding?
- [IC-08-03: SSH boundary termination and symmetry](labs/IC-08-03/index.html) — When do edge states survive a boundary or symmetry perturbation?
- [IC-08-04: Zak phase and Berry gauge](labs/IC-08-04/index.html) — Which aspects of the Zak phase depend on gauge and unit cell?
- [IC-08-06: Chern insulator phase diagram](labs/IC-08-06/index.html) — How does a gap-closing point change a Chern number?

**Chapter 9 — Quantum Neural Networks and Machine Learning**

- [IC-09-01: Parameterized quantum circuit output](labs/IC-09-01/index.html) — How do rotation parameters turn measurements into model predictions?
- [IC-09-03: Parameter-shift training](labs/IC-09-03/index.html) — Can a quantum circuit be trained using shifted expectation values?
- [IC-09-05: Quantum kernel geometry](labs/IC-09-05/index.html) — How do quantum feature states define a kernel matrix?

The active labs are independent self-study units. Each contains a motivating scientific question, controls, computed observables in multiple graphs, English explanatory writing, mathematical derivation, limiting-case discussion, guided investigations, a formative check, and source-section links. New labs require physics regression tests and browser first-render validation before their catalog status is marked implemented.

## Remaining 36 scientific extensions

The complete 22-unit *recommended* study route is available. The 36 remaining catalog topics are equally valid and substantial scientific extensions. They include:

- **Chapter 1:** IC-01-06 Commutators and uncertainty; IC-01-07 Fourier width and momentum; IC-01-09 Elementary non-Hermitian eigenvalues.
- **Chapter 2:** IC-02-02 Schrödinger and Heisenberg pictures; IC-02-04 Squeezed-state uncertainty; IC-02-05 WKB near a turning point; IC-02-06 Path phases and stationary action; IC-02-07 Aharonov–Bohm interference; IC-02-09 Monopole patches and gauge potentials; IC-02-10 Local gauge transformation; IC-02-11 Time ordering for sequential drives.
- **Chapter 3:** IC-03-01 Spin rotations and the 4π return; IC-03-02 Adding two angular momenta; IC-03-06 Bell correlations and CHSH; IC-03-07 Teleportation with classical outcomes; IC-03-08 Orbital angular momentum patterns.
- **Chapter 4:** IC-04-02 Variational energy landscape; IC-04-03 Driven two-level resonance; IC-04-04 Strong-coupling versus weak-coupling views; IC-04-05 Interaction-picture ordering.
- **Chapter 5:** IC-05-01 Scattering geometry and momentum transfer; IC-05-02 Green-function outgoing boundary conditions; IC-05-03 Lippmann–Schwinger and the T matrix; IC-05-04 Born approximation range.
- **Chapter 6:** IC-06-02 Symmetric and antisymmetric states; IC-06-05 One-body operators in Fock space; IC-06-06 Two-body interactions and prefactors.
- **Chapter 7:** IC-07-03 Dirac spinor components; IC-07-04 Nonrelativistic Dirac limit.
- **Chapter 8:** IC-08-01 Bloch bands from a real-space chain; IC-08-05 Two-dimensional Berry curvature; IC-08-07 Thouless pumping over a cycle.
- **Chapter 9:** IC-09-02 Data encoding and decision boundaries; IC-09-04 Finite shots and training noise; IC-09-06 Trainability and gradient concentration; IC-09-07 One- and two-qubit worked learning models.

### Priorities for the next development pass

1. **Meaningful advanced physics:** high-value extensions such as WKB turning-point failure, path integrals, driven resonance, Bell correlations, scattering Green functions and Born accuracy, Fock-space interactions, Chern/Berry numerical methods and quantum trainability. Every new lab must sustain independent comprehension at graduate depth.
2. **Cross-chapter derivation and notation audit:** ensure consistency with the primary nine-chapter English manuscript, the Bloch-sphere / Berry-sign conventions, Dirac/Pauli electromagnetic factors, spin statistics and boundary terminations.
3. **Interaction and visual QA:** complement browser first-render checks with automated parameter-change assertions, desktop/mobile layout review, contrast, screen-reader and keyboard access, and meaningful feedback after a student's choice.
4. **Independent student testing:** invite learners to explore difficult examples and refine the explanations, prerequisites, exercises and learning route in response to genuine misunderstandings.
5. **Deployment and permissions:** retain private GitHub Codespaces preview. Consider a public, separately rights-cleared original-interactive-only site later; preserve the restricted teaching-note source, and update the PDF-cover hyperlink when its permanent location is decided.

## Preview

In GitHub, use **Code → Codespaces → Create codespace on main**, open the forwarded port 8000, and navigate to `/companion/`. Alternatively run `python3 -m http.server 8000` from the repository root. The index and experiment pages are all ordinary browser resources, requiring no numerical Python packages.

The GitHub Actions checks are maintained at [check-companion.yml](../.github/workflows/check-companion.yml), including `scripts/test_companion_models.cjs` and the catalog, links, CSS, browser and Codespaces acceptance tests. Passing those checks establishes verified mathematical and static-browser behavior, while full human pedagogical and accessibility review remains forthcoming.
