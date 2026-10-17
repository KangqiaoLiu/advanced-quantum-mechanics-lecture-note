# Independent Learning Guide — Advanced Quantum Mechanics

The interactive companion is a self-directed after-class resource. The investigations connect core quantum-mechanical derivations to numerical predictions. Foundational reference exercises and optional guided reading provide different entry points.

## A student workflow that goes beyond moving sliders

1. **Predict:** state a clear physical expectation before changing parameters, ideally in a limiting case with an exact derivation.
2. **Observe:** change one parameter and compare diagnostic quantities: amplitudes and probabilities, spectral gaps and topology, eigenvalues and trial bounds, gradients and shot uncertainty.
3. **Reproduce:** derive the equation shown in the laboratory using the corresponding English lecture-note section. Keep the Hilbert-space basis, physical units, signs and perturbative assumptions explicit.
4. **Test reliability:** vary a finite cutoff, grid, sample count, wavepacket width or degenerate parameter. Distinguish a genuine singularity from a numerical approximation artifact.
5. **Explain:** complete the laboratory's formative question, and record why its physical outcome follows from the model. AI may help generate counterexamples and independent calculations, but original derivations and limits determine validity.

## Featured interactive studies

| Chapter | Working self-study investigations |
|---|---|
| 1. Basic Concepts | [Cascaded Stern–Gerlach](labs/IC-01-03/index.html) |
| 2. Quantum Dynamics | [Spin precession in a field](labs/IC-02-01/index.html) · [Harmonic oscillator and coherent states](labs/IC-02-03/index.html) · [WKB near a turning point](labs/IC-02-05/index.html) · [Path phases and stationary action](labs/IC-02-06/index.html) · [Berry phase on the Bloch sphere](labs/IC-02-08/index.html) |
| 3. Angular Momentum Theory | [Adding two angular momenta](labs/IC-03-02/index.html) · [Entanglement and partial trace](labs/IC-03-04/index.html) · [POVM effects versus instruments](labs/IC-03-05/index.html) · [Bell correlations and CHSH](labs/IC-03-06/index.html) |
| 4. Approximation Methods | [Avoided crossings and perturbation theory](labs/IC-04-01/index.html) · [Variational energy landscape](labs/IC-04-02/index.html) · [Driven two-level resonance](labs/IC-04-03/index.html) |
| 5. Scattering Theory | [Lippmann–Schwinger, T matrix and Born regime](labs/IC-05-03/index.html) · [Partial-wave interference and unitarity](labs/IC-05-05/index.html) |
| 6. Quantum Many-Body Systems | [Permutation and exchange](labs/IC-06-01/index.html) · [Fermionic creation and ordering signs](labs/IC-06-04/index.html) |
| 7. Relativistic Quantum Mechanics | [From Schrödinger to Pauli](labs/IC-07-01/index.html) · [Klein–Gordon versus Dirac](labs/IC-07-02/index.html) |
| 8. Topological Condensed Matter Physics | [SSH bulk, winding and edges](labs/IC-08-02/index.html) · [SSH boundary termination and symmetry](labs/IC-08-03/index.html) · [Zak phase and Berry gauge](labs/IC-08-04/index.html) · [Chern insulator phase diagram](labs/IC-08-06/index.html) · [Thouless pumping over a cycle](labs/IC-08-07/index.html) |
| 9. Quantum Neural Networks and Machine Learning | [Parameter-shift training](labs/IC-09-03/index.html) · [Quantum kernel geometry](labs/IC-09-05/index.html) · [Trainability and gradient concentration](labs/IC-09-06/index.html) |

**Recommended concept threads:**

- *Interference → Measurement → Entanglement:* sequential Stern–Gerlach, reduced-state entropy, quantum instruments, spin addition and CHSH correlations.
- *Dynamics → Approximation:* spin precession, oscillator coherence, Berry geometry, WKB turning points, action-phase interference, variational optimization and driven resonance.
- *Scattering and many-body:* avoided crossings, exact Lippmann–Schwinger/Born benchmark, s/p-wave unitarity, exchange symmetry and fermionic ordering.
- *Relativity and topology:* Pauli magnetic coupling, free Dirac wavefunctions, SSH winding, boundary termination, Zak holonomy, QWZ Chern phases and Thouless pumping.
- *Quantum machine learning:* parameter-shift optimization, state-fidelity kernels, global/local cost gradients and finite-shot signal resolution.

## Foundational reference exercises

These short exercises reinforce prerequisites and can be revisited whenever helpful:

- [Complex amplitude and phase](labs/IC-01-01/index.html) — How do complex amplitudes combine before probabilities are formed?
- [Two-by-two eigenproblem](labs/IC-01-02/index.html) — How do the eigenvectors of a Hermitian matrix depend on its entries?
- [Born rule and projectors](labs/IC-01-04/index.html) — How are probabilities and state updates computed from projectors?
- [Measurement axes and basis changes](labs/IC-01-05/index.html) — Why do matrix components change while physical predictions remain invariant?
- [Tensor-product index laboratory](labs/IC-01-08/index.html) — How are two small Hilbert spaces combined without losing track of indices?
- [Pure states and statistical mixtures](labs/IC-03-03/index.html) — Can two different ensembles represent the same density operator?
- [Bosonic Fock occupation rules](labs/IC-06-03/index.html) — Why does bosonic creation produce a square-root occupation factor?
- [Parameterized quantum circuit output](labs/IC-09-01/index.html) — How do rotation parameters turn measurements into model predictions?

These may be used repeatedly without making them additional mandatory assignments.

## Optional further reading

Read [Guided Further Reading](reading.html) for additional scientific questions. Each includes an external teaching resource, a focused derivation or physical check and a related interactive experiment. Students may use generative AI to request alternate derivations, check algebra or investigate numerical corner cases; every result should be checked against the original equations and physical constraints.

## Lecture notes and course access

The [complete English lecture notes](../pdf/advanced-quantum-mechanics.pdf) are the mathematical reference for the experiments. Use the course access instructions supplied by your instructor to open the companion.
