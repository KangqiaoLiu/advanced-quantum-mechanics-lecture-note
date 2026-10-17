# Derivation-Complete Pedagogical Standard

**Established:** 2026-10-17. **Scope:** the complete nine-chapter English graduate *Advanced Quantum Mechanics* lecture manuscript and all future updates.

## Purpose and student context

Students should be able to reconstruct the reasoning of each physical derivation without silently assuming a previous familiarity with the particular operator trick, normalization convention, or approximation. A new mathematical method is most effective when introduced with a complete small example. Written material is intended for careful self-study outside class; all classroom teaching remains blackboard-led.

The goal is an original, pedagogically self-contained exposition with explicitly checked physics and a consistent narrative throughout the book. Attribution to underlying sources remains an independent responsibility. New derivations should be authored afresh and checked rather than using paraphrase merely to disguise source text.

## Binding rule for new or revised explanations

1. **Motivation and definitions first.** Explain what is being calculated, why it is useful, and what the physical system is. Define all symbols and units before first use.
2. **Show the underlying operation.** Matrix representations require an explicit basis and element-by-element demonstration at first appearance. Adjoints must show complex conjugation and reversal of order; tensor products require basis ordering; Fourier transforms require phase convention and the finite/Dirac orthogonality identity.
3. **One justified step per displayed transition.** For an eigenproblem show the determinant, expanded polynomial, eigenvalues and component ratios. For approximations show the small parameter, neglected terms, domain of validity and limiting-case comparison. For probabilities show state normalization and completeness.
4. **Worked example immediately after a first abstraction.** Prefer a tractable physical system: two-level spin, lossy coupled cavities, coupled spins, Gaussian oscillator, delta scatterer, ordered three-orbital fermions, SSH dimer, parameter-shift circuit.
5. **Separate mathematical identity from physical interpretation.** In an effective theory state what is conditional, what is averaged, what is held fixed, which physical observables are measured, and whether the result requires normalization.
6. **Every figure is interpretable alone.** Use English labels, specify parameter values and normalization, distinguish calculated curves/approximations, and refer to the figure and its physical meaning from the prose. Prefer a single focused plot or a coherent two-part figure.
7. **End with physical checks.** At least one exact limiting case, one dimensions/normalization check, one distinction students often confuse, and ideally an independently reproducible calculation.
8. **Symbols must remain consistent** with `frontmatter/notation.tex` and `editorial/NOTATION_POLICY.md`. Subscripts, indexing, Fourier sign, Pauli convention and Hamiltonian factors must be cross-checked across chapters.
9. **Reference and rights compliance.** Cite prior physics literature and teaching sources, use original diagrams and independently written explanations, and preserve copyright/source history separately. An independently rewritten derivation does not in itself license protected copied passages.

## Concrete delivered interventions (October 17, 2026)

| Chapter | Targeted newly complete derivation | Scientific independent check |
|---|---|---|
| 1 | Eigenvalue matrix projection, constructive Gram--Schmidt, finite-dimensional spectral theorem, non-Hermitian effective two-cavity Hamiltonian, complex eigenvalues, exceptional points and norm evolution with three original figures | Operator-adjoint and no-jump norm; EP coalescence and Jordan form; analytic plotted branches |
| 2 | Deriving Hermitian Hamiltonians from infinitesimal unitarity and the time-evolution equation; ordering of noncommuting time intervals | First-order generator identity; constant Pauli rotation |
| 3 | Constructing all four spin-half CG states with lowering operators and checking J² in both bases | Coupled/uncoupled matrix eigenvectors |
| 4 | Normalized Gaussian trial wavefunction, all moments, kinetic integral, stationarity and upper bound | Exact harmonic limit and positive second derivative |
| 5 | Derivative jump at 1D delta interaction, exact r/t, independent outgoing Green function and geometric Born-series error | Current conservation and finite-order convergence |
| 6 | Three-mode fermionic creation/annihilation signs, one-body transition and two-body half prefactor | Canonical operator ordering and adjoint transition |
| 7 | Positive-energy Dirac spinor normalization and the explicit nonrelativistic expansion | Spinor norm and leading lower-component amplitude |
| 8 | Explicit Fourier transform from SSH real-space hopping to 2×2 Bloch matrix, band gap, normalized eigenstate and Zak phase | Fourier orthogonality, eigenvector residual, phase derivative |
| 9 | Expand the Pauli rotation, derive parameter-shift identity and finite-shot estimator variance; contrast global and local gradient moments | Exact two-shift derivative and independent Bernoulli shot variances |

These are `\input` sources in `main.tex`, placed directly adjacent to their parent derivations.

## Whole-manuscript quality audit: continuing improvements

The targeted additions above directly address high-friction transitions; they **are not a claim that every equation in the existing manuscript has undergone a fully exhaustive line-by-line proof audit**. A full no-gap editorial sweep must inspect each historical paragraph against prerequisites, mathematical validity, symbols, source structure and student comprehension.

Complete future audit passes should include:

- **Chapter 1:** all original Stern--Gerlach interferometric paths, complex inner product conventions, projector postulates, the continuous coordinate representation.
- **Chapter 2:** coherent/squeezed states and Wigner marginals, turning-point matching constants, path-integral normalization and gauge-patch transformations.
- **Chapter 3:** Wigner rotations and general j, CG recursion beyond two spins, angular wavefunctions, instruments/POVMs, CHSH/teleportation conditional branches.
- **Chapter 4:** perturbation-theory denominators near degeneracy, helium Coulomb matrix integrals, strong-coupling matching and time-ordered perturbation expansions.
- **Chapter 5:** outgoing resolvent contour integration, distributional boundary conditions and partial-wave optical theorem normalization.
- **Chapter 6:** many-body symmetrization for nonorthogonal orbitals, bosonic occupation coefficients and full four-index interaction sign tests.
- **Chapter 7:** operator-ordering and gauge conventions in the Pauli limit, Dirac currents, Lorentz transformation conventions and negative-energy interpretation.
- **Chapter 8:** finite-chain termination, Berry gauges, discrete Wilson loop continuity, 2D Chern curvature, pump orientation and finite-grid errors.
- **Chapter 9:** data encodings, statistical estimators, kernel positive semidefiniteness, optimization geometry and limits to claimed quantum advantage.

For each passage, the standard is **read, derive independently, amend at point of first occurrence, numerically/symbolically cross-check, rebuild PDF, inspect typography/figures, and re-test**. Additional steps should respond to actual identified gaps rather than increasing pages for their own sake.

## Required validation

`python3 scripts/check_teaching_derivations.py` checks the newly authored source links and the non-Hermitian analytic matrix identities without external data, followed by `python3 scripts/check_content_additions.py` for full SymPy scientific spot checks, the existing PDF build and visual checks. Screenshots/visual inspection of the three new TikZ figures remain necessary on a final compiled PDF.
