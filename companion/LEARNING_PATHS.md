# Learning Routes Across the Nine-Chapter Companion

**Status:** proposed pathways, October 17, 2026. These paths reorganize the same laboratory catalog by learning intention; no period-by-period allocation or assessment requirement is approved here.

## 1. The nine-chapter reference-book route

Read the authoritative English lecture notes and visit the matching laboratory directory when a derivation has a physical or numerical consequence worth exploring. Chapter coverage and lab IDs are registered in [catalog.json](catalog.json). All nine chapters remain accessible, including approximation and scattering material that may be taught through independent reading rather than live board work.

1. Basic Concepts — amplitudes, Hermitian spectra, Stern–Gerlach, representations, measurement.
2. Quantum Dynamics — evolution, oscillator, approximations and geometric phase.
3. Angular Momentum Theory — rotations, spin coupling, density operators, generalized measurement, Bell physics.
4. Approximation Methods — perturbation, variational and time-dependent treatments.
5. Scattering Theory — Green functions, Born series, partial waves.
6. Quantum Many-Body Systems — permutation, Bose/Fermi Fock space and operators.
7. Relativistic Quantum Mechanics — Pauli, Klein–Gordon, Dirac and spinor structure.
8. Topological Condensed Matter Physics — Bloch/SSH through Chern phases and pumping.
9. Quantum Neural Networks and Machine Learning — trainable circuits, gradients, kernels and limitations.

## 2. Classroom-linked route (22 proposed labs)

The board route is provisionally 48 periods of 40 minutes, with specific allocations and timing still under instructor review. The following links express **conceptual alignment**, not a one-lab-per-period teaching schedule.

| Provisional period block | Corresponding concepts in the manuscript | Candidate lab IDs |
|---|---|---|
| 01–12, foundational mathematical and measurement ideas | Chapter 1 with one preparatory cross-link to Chapter 3 | IC-01-01, IC-01-02, IC-01-03, IC-01-04, IC-01-05, IC-01-08 |
| 13–24, dynamics, Aharonov–Bohm and Berry | Chapter 2 | IC-02-01, IC-02-03, IC-02-08 |
| 25–28, topological introduction | Chapter 8 | IC-08-02, IC-08-03, IC-08-04 |
| 29–32, density matrices and measurement | Chapter 3 | IC-03-03, IC-03-04, IC-03-05 |
| 33–40, identical particles and Fock methods | Chapter 6 | IC-06-01, IC-06-03, IC-06-04 |
| 41–44, parameterized quantum learning | Chapter 9 | IC-09-01, IC-09-03 |
| 45–48, Pauli/Dirac and emergence of spin | Chapter 7 | IC-07-01, IC-07-02 |

This aligns the initial **22** classroom-route flags in the current catalog. It may be reordered or augmented based on actual lecture pacing. Laboratories marked `extension` remain fully legitimate independent study and research enrichments.

## 3. Conceptual pathways across chapters

These paths should become clickable guided sequences as functioning labs are built:

- **Amplitudes → measurement:** IC-01-01 → IC-01-02 → IC-01-03 → IC-01-04 → IC-03-03 → IC-03-04 → IC-03-05. Questions progress from complex numbers to conditional measurement and generalized instruments.
- **Time evolution → geometric phase → topology:** IC-02-01 → IC-02-08 → IC-08-01 → IC-08-02 → IC-08-04 → IC-08-05 → IC-08-06. Relate adiabatic cyclic physics, Bloch theory, discrete Zak phase, curvature and Chern invariants.
- **Tensor products → many-body physics:** IC-01-08 → IC-03-04 → IC-06-01 → IC-06-02 → IC-06-03 → IC-06-04 → IC-06-05 → IC-06-06. Practice both state-level exchange and the operator-level algebra of Fock space.
- **Measured quantities → learning dynamics:** IC-01-04 → IC-03-05 → IC-09-01 → IC-09-02 → IC-09-03 → IC-09-04 → IC-09-05 → IC-09-06. Connect readouts to gradients, statistical sampling and trainability.
- **Spectra and approximation limits:** IC-01-02 → IC-04-01 → IC-04-02 → IC-02-05 → IC-05-04 → IC-05-05. Connect small eigenproblems to perturbative, semiclassical and scattering approximations.
- **Spin → relativistic theory:** IC-03-01 → IC-07-01 → IC-07-02 → IC-07-03 → IC-07-04. Follow the matrix and spinor structure from spin rotations into Dirac theory.

Advanced experiments are eligible for new linked routes as the complete companion matures. These paths are intentionally permeable: each lab can display prerequisite refreshers rather than requiring every earlier lab to be completed.

## 4. Mapping and editing rule

The [machine-readable catalog](catalog.json) owns stable IDs, notes source paths, initial route flags, scientific questions and laboratory status. The period-level syllabus lives in [COURSE_DESIGN_48_PERIODS.md](../COURSE_DESIGN_48_PERIODS.md). Keep this file synchronized with both when changing learning order. A note source can legitimately sit in another chapter (e.g., tensor-product foundations are given a later rigorous derivation).
