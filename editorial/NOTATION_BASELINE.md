# Provisional notation baseline for the faithful-translation stage

## Student-facing notation list

The canonical **printed List of Notation** is maintained as [frontmatter/notation.tex](../frontmatter/notation.tex) and included in the whole-book PDF by `main.tex`. It covers symbols that appear in the completed English chapter(s), including equations and basis conventions. The present editorial file records intended global conventions and unresolved choices. Update the printed notation list and this editorial record together when a new chapter is added or conventions are changed. The printed front matter is an editorial addition: faithful source chapter text remains untouched.

This list codifies the project blueprint's proposed choices already needed in Chapter 1. It is not an expansion of the original Chinese pedagogical content.

| Concept | Chapter 1 LaTeX |
|---|---|
| Abstract pure state | `\ket{a}`, `\bra{a}` |
| Abstract operator | `\op{F}` (renders `\hat F`) |
| Hermitian adjoint | `\dagger` |
| Hilbert-space scalar product | `\braket{a}{b}` |
| Matrix element | `\mel{a}{\op{F}}{b}` |
| Pauli / spin-1/2 | `\op{s}_i=(\hbar/2)\sigma_i` in the conventional spin matrix representation |
| Active spatial translation | `\op T(\dd\vect x)=1-i\op{\vect p}\cdot\dd\vect x/\hbar` to first order |
| Fourier convention | `\braket{\vect x}{\vect p}=(2\pi\hbar)^{-3/2}e^{i\vect p\cdot\vect x/\hbar}` |
| Three-dimensional Dirac delta | `\delta^{(3)}(\vect x-\vect x')` |
| Commutator, anticommutator | `[A,B]`, `\{A,B\}` |

Full-book conventions are currently marked proposed in `PROJECT_BLUEPRINT.md`; change this file and associated chapters together if the instructor adopts a different standard.

## Chapter 2 conventions (2026-10-16)

- Schrödinger/Heisenberg observables use subscripts `\mathrm S`, `\mathrm H`; physical time evolution is `\op U(t,t_0)`.
- Oscillator lowering/raising operators are `\op a`, `\op a^\dagger`; number `\op N=\op a^\dagger\op a`; coherent eigenvalue `\alpha` is complex.
- The position-space propagator is `K(x_f,t_f;x_i,t_i)`.
- Source Chapter 2 uses Gaussian electromagnetic conventions, including `(e/c)A`, `E=-\nabla\varphi-c^{-1}\partial_t A`. Keep these units in Phase T, pending separate later decisions on uniform book units.
- The printed student list of notation remains [frontmatter/notation.tex](../frontmatter/notation.tex).

## Chapter 3 conventions (2026-10-16)

- Angular momentum uses `\\op{\\vect J}`, orbital `\\op{\\vect L}`, spin `\\op{\\vect s}` or `\\op{\\vect S}` as in source context; generators carry hats and matrices can omit hats.
- Standard ladder operators `\\op J_\\pm=\\op J_x\\pm\\ii\\op J_y`; `j,m` label `\\op{\\vect J}^{\\,2}` and `\\op J_z`; phase convention is positive square-root ladder coefficients.
- Euler rotations `D(\\alpha,\\beta,\\gamma)=D_z(\\alpha)D_y(\\beta)D_z(\\gamma)`, with Wigner `D^j_{mm'}`, `d^j_{mm'}`. Spherical-harmonic phase conventions to be harmonized later, after the faithful translation.
- Ensemble density `\\op\\rho=\\sum w_\\alpha\\ket\\alpha\\bra\\alpha`; `[A]` denotes an ensemble average and `\\langle A\\rangle` the pure-state expectation.
- Bell probabilities `P(s_a^+,s_b^+)` represent joint outcomes at separated detectors. Local hidden-type assumptions are retained in their source language for the baseline.
- Printed notation continues to live in [frontmatter/notation.tex](../frontmatter/notation.tex).

## Chapter 4 conventions (2026-10-16)

- Perturbative order $k$ is a **superscript** in `E_n^{(k)}`, `\\ket n^{(k)}`, and `\\op H^{(k)}` as in the Chinese source. `k=0` indicates the unperturbed quantity; `H_{mn}^{(1)}` denotes perturbation matrix elements.
- The degenerate subspace uses `\\ket{n,i}^{(0)}` and coefficient vectors `c_i`; the unperturbed reference energy is `E_n^{(0)}`.
- Use `\\langle E\\rangle(\\lambda)` for the variational trial energy; helium uses an effective nuclear charge `Z` and Bohr radius `a_0`.
- Preserve the strong-coupling Yukawa source convention `g,\\alpha,S(r)` and the original source's distinct symbols `m,\\mu` when they occur; unresolved dimensional issues are logged.
- Time-dependent perturbation coefficients are `a_m(t)`, transition frequencies `\\omega_{mn}=(E_m-E_n)/\\hbar`, probabilities `W_{n\\to m}(t)`.
- Interaction-picture operators carry `\\mathrm I`, time ordering is `T`, and the Heaviside step function `\\theta(t)`.
- The student-facing notation table is `frontmatter/notation.tex`, automatically included in the PDF.

## Chapter 5 conventions (2026-10-16)

- The source's first and final sections use reduced mass `\\mu` while middle sections use `m`; the translation preserves this distinction where the source uses it. Define `U(r)=2mV(r)/\\hbar^2` in the Green-function section.
- Coordinate free-particle wavevector basis: `\\braket{\\vect r}{\\vect k}=(2\\pi)^{-3/2}e^{i\\vect k\\cdot\\vect r}`. Physical momentum basis: `\\braket{\\vect r}{\\vect p}=(2\\pi\\hbar)^{-3/2}e^{i\\vect p\\cdot\\vect r/\\hbar}`. The factor of `\\hbar` must be treated consistently during basis conversion.
- `G^+(\\vect r-\\vect r')=-e^{+ik|\\vect r-\\vect r'|}/(4\\pi|\\vect r-\\vect r'|)` is the outgoing/retarded spatial Green function, and `G^-` is incoming/advanced, using the Chinese source's names. `\\op G_0^\\pm` and `\\op G^\\pm` are the free/full resolvents.
- `\\op T` is the scattering transition operator here; `T` already appeared as a time-ordering operator in Chapter 4. Context and hats disambiguate them.
- `f(\\theta)=\\sum_{l=0}^\\infty f_l(\\theta)` and the differential cross section is `\\sigma(\\theta)=|\\sum_l f_l(\\theta)|^2`; the source's sum of moduli squared misses interference and is corrected with provenance in the Chapter 5 ledger.
- `R_l, j_l, P_l, \\delta_l` are the radial partial wave, spherical Bessel function, Legendre polynomial and phase shift. New symbols were added to the student-facing `frontmatter/notation.tex`.

## Chapter 6 notation and source conventions (2026-10-16)

- Conserved observable `\\op F` is time-independent and commutes with `\\op H`; its quantum number labels stationary probabilities. A generic symmetry operator is `\\op S` (also used for total spin by context).
- Parity is `\\op I` and spherical harmonic eigenvalue `(-1)^l`. `I` also labels the direct Coulomb integral in the helium example; `J` there denotes exchange integral rather than angular momentum.
- Exchange operator `\\op P_{ij}` has eigenvalues `+1,-1`; `\\psi_+,\\psi_-` are symmetric/antisymmetric spatial states and `\\chi_+,\\chi_-` spin states.
- Two-particle relative coordinates `\\vect r=\\vect r_1-\\vect r_2` and `\\vect R=(\\vect r_1+\\vect r_2)/2`, with total/relative wavevectors `\\vect K`, `\\vect k`, retain the source's plane-wave normalization in the faithful baseline.
- Occupation `f(k)`, chemical potential `\\mu`, Fermi momentum `k_F`, number density `n`, energy density `\\varepsilon` and pressure `P` retain the source's implicit natural-unit convention in the last example; discrepancies with Chapter 1 `\\hbar` normalization are logged for later scientific revision.
- Student-facing global notation is maintained in `frontmatter/notation.tex` and should be extended alongside each translated chapter.

## Chapter 7 notation and duplicate-page rule (2026-10-16)

- Source pages **154–160** are an exact duplicate (same text and rendered pixels) of **161–167**. Print the unique block only once and trace both source appearances in `editorial/CHAPTER07_TRANSLATION_LOG.md`.
- Fock states use `\\ket{n_1,n_2,\\ldots}`, single-particle orbitals `\\ket{a_i}`, and creation/annihilation operators `\\op a_i^\\dagger,\\op a_i`. The source superscript `+` on creation maps to the preexisting project `\\dagger` convention.
- Single-mode number operator `\\op n_i=\\op a_i^\\dagger\\op a_i`, total `\\op N=\\sum_i\\op n_i`; fixed orbital ordering in fermion Fock states produces `(-1)^{\\sum_{j<i} n_j}`.
- Bosons obey commutators `[\\op a_i,\\op a_j^\\dagger]=\\delta_{ij}`, fermions anticommutators `\\{\\op a_i,\\op a_j^\\dagger\\}=\\delta_{ij}`; all same-type mode brackets vanish accordingly.
- Extensive additive observables `\\op{\\mathcal A},\\op{\\mathcal V}` distinguish their Fock-space forms from the single-particle `\\op A` and potential `\\op V` used in the source.
- Continuum field modes use `\\op\\psi_\\sigma(\\vect r)`, its adjoint `\\op\\psi_\\sigma^\\dagger(\\vect r)`, and `\\delta^{(3)}` for a spatial Dirac delta. `\\op H=\\op H_0+\\op V` in the final Heisenberg dynamics.
- Full printed notation remains in `frontmatter/notation.tex`, updated simultaneously with the chapter.
