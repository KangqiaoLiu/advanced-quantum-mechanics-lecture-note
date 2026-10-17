# Independent Learning Routes — Advanced Quantum Mechanics

**Instructor's teaching model (confirmed 2026-10-17):** The Advanced Quantum Mechanics course is delivered using blackboard derivations. These interactive units are exclusively for **students to open independently after class**. The instructor will not demonstrate experiments on a screen during classroom periods, and students may explore at any pace without a prescribed period-by-period allocation.

## How to learn from one experiment

1. **Predict:** read the motivating physical question and state an anticipated result for a soluble parameter limit.
2. **Explore:** change one control at a time. Observe two complementary quantities such as probability and state purity, phase and gap, or model loss and gradient.
3. **Reconstruct:** derive the displayed formula on paper using the corresponding lecture-note source. Clarify which state, basis, gauge, units and assumptions were selected.
4. **Stress-test:** use both the default example and a difficult limit, including degeneracies, near-zero probabilities, weak/strong coupling, or finite sampling.
5. **Reflect:** complete the formative self-check, then explain a surprising output in words before choosing the next topic.

## Recommended conceptual starting route

The 22 catalog entries with `route=core` are a suggested **self-study** progression. This label retains continuity with earlier plans but no longer means classroom use, class demonstrations or fixed instructional minutes.

| Textbook chapter | Recommended questions and current links |
|---|---|
| 1. Basic Concepts | [IC-01-01: Complex amplitude and phase](labs/IC-01-01/index.html); [IC-01-02: Two-by-two eigenproblem](labs/IC-01-02/index.html); [IC-01-03: Cascaded Stern–Gerlach](labs/IC-01-03/index.html); [IC-01-04: Born rule and projectors](labs/IC-01-04/index.html); [IC-01-05: Measurement axes and basis changes](labs/IC-01-05/index.html); IC-01-08: Tensor-product index laboratory (planned) |
| 2. Quantum Dynamics | [IC-02-01: Spin precession in a field](labs/IC-02-01/index.html); [IC-02-03: Harmonic oscillator and coherent states](labs/IC-02-03/index.html); [IC-02-08: Berry phase on the Bloch sphere](labs/IC-02-08/index.html) |
| 3. Angular Momentum Theory | [IC-03-03: Pure states and statistical mixtures](labs/IC-03-03/index.html); [IC-03-04: Entanglement and partial trace](labs/IC-03-04/index.html); [IC-03-05: POVM effects versus instruments](labs/IC-03-05/index.html) |
| 4. Approximation Methods | Use independent extensions |
| 5. Scattering Theory | Use independent extensions |
| 6. Quantum Many-Body Systems | IC-06-01: Permutation and exchange (planned); [IC-06-03: Bosonic Fock occupation rules](labs/IC-06-03/index.html); [IC-06-04: Fermionic creation and ordering signs](labs/IC-06-04/index.html) |
| 7. Relativistic Quantum Mechanics | IC-07-01: From Schrödinger to Pauli (planned); [IC-07-02: Klein–Gordon versus Dirac](labs/IC-07-02/index.html) |
| 8. Topological Condensed Matter Physics | [IC-08-02: SSH bulk, winding and edges](labs/IC-08-02/index.html); IC-08-03: SSH boundary termination and symmetry (planned); [IC-08-04: Zak phase and Berry gauge](labs/IC-08-04/index.html) |
| 9. Quantum Neural Networks and Machine Learning | IC-09-01: Parameterized quantum circuit output (planned); [IC-09-03: Parameter-shift training](labs/IC-09-03/index.html) |

**Progress:** 17/22 active on this recommended sequence; the remaining 5 are IC-01-08, IC-06-01, IC-07-01, IC-08-03, IC-09-01.

## Seven concept-driven self-study journeys

**1. From probability amplitudes to state preparation.** [Complex interference](labs/IC-01-01/index.html) → [Hermitian eigenvectors](labs/IC-01-02/index.html) → [representation changes](labs/IC-01-05/index.html) → [Born projectors](labs/IC-01-04/index.html) → [sequential Stern–Gerlach](labs/IC-01-03/index.html). Compare a preparation, its probability predictions and how measurement changes the resulting state.

**2. Dynamics, coherent motion and geometry.** [Spin precession](labs/IC-02-01/index.html) → [coherent oscillator and Wigner distributions](labs/IC-02-03/index.html) → [Berry holonomy](labs/IC-02-08/index.html). Understand the distinction between dynamical state motion and geometric phase.

**3. Density operators and information.** [Equivalent statistical mixtures](labs/IC-03-03/index.html) → [Schmidt entanglement and partial trace](labs/IC-03-04/index.html) → [POVM effects versus instruments](labs/IC-03-05/index.html). Explain how different preparations can share a density operator, why reduced purity differs from global purity, and why an effect fails to determine backaction.

**4. Approximations and scattering.** [Avoided crossings](labs/IC-04-01/index.html) → [s/p partial-wave interference](labs/IC-05-05/index.html). Learn to compare an approximate formula with exact energy levels or unitarity/optical-theorem constraints, and identify parameters that control validity.

**5. Identical particles and Fock algebra.** [Bosonic ladder factors](labs/IC-06-03/index.html) → [fermionic anticommutation and signs](labs/IC-06-04/index.html). Derive normalized many-body state amplitudes before moving to interactions.

**6. Quantum geometry and band topology.** [Berry phase](labs/IC-02-08/index.html) → [SSH bands, winding and boundary modes](labs/IC-08-02/index.html) → [Zak Wilson loops](labs/IC-08-04/index.html) → [QWZ Chern insulator](labs/IC-08-06/index.html). Check gauge and unit-cell conventions, identify when the gap closes, and distinguish a local curvature density from the global integral.

**7. Relativity and quantum machine learning.** [Free Dirac spinors and velocity](labs/IC-07-02/index.html) build a relativistic spin connection. [Parameterized-circuit parameter shift](labs/IC-09-03/index.html) → [quantum kernel geometry](labs/IC-09-05/index.html) connect measurable quantum expectations to optimization and positive-semidefinite similarity.

## Complete independent study catalog

The full [nine-chapter catalog](index.html) has **62 scientific questions**, of which **21 currently link to working experiments**. All 41 further questions are meaningful independent extensions; the distinction between `core` and `extension` controls route suggestions, not educational legitimacy. Full implementation details are in [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md). Research-grade experiments will need extra convergence checks and optional companion notebooks. The English [lecture notes](../pdf/advanced-quantum-mechanics.pdf) remain authoritative.
