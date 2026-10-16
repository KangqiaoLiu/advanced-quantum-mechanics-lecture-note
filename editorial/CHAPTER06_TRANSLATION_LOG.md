# Chapter 6 translation ledger — Symmetry and Identical Particles

**Date:** 2026-10-16. **Phase:** T: faithful English reproduction before scientific/pedagogical revision. **Sole Chinese source:** `清华大学 高等量子力学.pdf`, PDF viewer pp. **140–153**. **Target:** four files `chapters/ch06/01_...` to `04_...`, incorporated into the complete `book` build.

## Source-page map and continuity

| Viewer pages | Original section | English file and coverage |
|---|---|---|
| 140–141 (before §2 heading) | `1. 守恒量` | `01_conserved_quantities.tex`: Ehrenfest/commutator criterion; free, potential, central, time-independent Hamiltonians; two kinds of conservation; conserved quantum numbers versus stationary states. |
| 141 (end)–144 (before §3) | `2. 对称性与守恒量` | `02_symmetry_conservation.tex`: transformed Schrödinger equation; commutation with Hamiltonian; translation and momentum, time translation and energy, rotation and angular momentum, parity operator, spherical harmonics and inversion, examples. |
| 144–151 (before §4) | `3. 全同粒子对称性` | `03_identical_particle_symmetry.tex`: overlapping orbitals figure, indistinguishability, exchange operator, bosonic/fermionic symmetry, two-particle eigenstates, permanent-like/single-determinant combinations, Pauli exclusion, free two-particle interference diagram, observable averages, two-spin triplet and singlet. |
| 151–153 | `4. 简单全同粒子体系` | `04_simple_identical_particle_systems.tex`: helium Hamiltonian, spatial/spin symmetrization, direct/exchange energy, atomic L/S/J, parity selection and zero-temperature Fermi-gas pressure. |

**Pagination anomaly:** viewer p. 146 contains only `方程，怎样构造满足二者的态？` (the end of the question begun on p. 145) and is almost blank. PDF viewer p. 147 restarts the internal printed page counter at `1` while continuing the same Section 3 at “3) 两全同粒子的态”. The text across that apparent boundary has been translated continuously. Viewer p. 154 starts Chapter 7 and is not included here. All four original section headings and numbered subdivisions are represented.

## Minimal repairs and harmonization

1. **Source p. 141: Schrödinger coefficient phase.** The differential equation is `dC_n/dt=E_nC_n/(i\hbar)` and consequently `C_n(t)=C_n(0)\exp[-iE_nt/\hbar]`; the sign is shown explicitly in the English typesetting. This preserves the original result, with the conventional `\mathrm{i}` macro.
2. **Source pp. 142–144: notation from the existing list.** Operators are given hats, vectors use `\vect{...}`, adjoints use `\dagger`, and spatial-inversion/rotation generators and commutators retain the source's formulas. The source employs parity `\hat I` and spin `\hat S` as well as a symmetry `\hat S`; their *contextual* meanings are retained and flagged in the list of notation.
3. **Source pp. 147–148: exchange combinations.** The source first constructs unnormalized `\psi(1,2)\pm\psi(2,1)` to establish eigenstate symmetry, then specifies normalized orthogonal product states, including the distinct `n=m` boson case and the fermion determinant. Both successive versions are preserved.
4. **Source p. 150: triplet/singlet labels.** The three triplet states and singlet are typeset with their original `\chi` basis labels; the combined-spin eigenvalues `S^2=2\hbar^2` (triplet) and zero (singlet), with the three `S_z` projections, follow the original.
5. **Source p. 151: total-electron exchange symmetry.** The source demands a fully **antisymmetric** electronic wavefunction, and its paired spatial/spin factors are explicitly written as `\psi_\pm\chi_\mp`. The English text uses “fully antisymmetric” consistently.
6. **Source p. 151: helium interaction sum.** Replaced the source's half-sum over all distinct pairs by an equivalent `\sum_{\substack{j,k=1\\j\ne k}}^Z` for unambiguous LaTeX rendering, with no changes to matrix elements.
7. **Source pp. 144 and 149: two plotted source figures.** Source diagrams of separated versus overlapping orbitals and of relative-distance probabilities `P/(Ar^2)`, `P_\pm/(Ar^2)` have been recreated as editable TikZ curves; the relative-distance functional forms `1\pm\sin(2kr)/(2kr)` are maintained. These illustrations should be compared against the original during instructor proofing.
8. **Source p. 153: zero-temperature Fermi distribution.** The source uses momentum symbol `k` with `E=k^2/(2m)` and phase-space measure `d^3k/(2\pi)^3`, amounting to an implicit natural-unit convention. This convention is transcribed, rather than silently converting the physics; see questions below.

## Scientific issues explicitly deferred to Phase R

- **Source p. 141, common eigenstates:** The proof assumes a shared complete orthonormal eigenbasis for commuting observables and does not discuss continuous or degenerate spectra separately. The main argument and qualifications will be addressed in scientific revision.
- **Source p. 142, symmetry generator inference:** The statement that `[\hat S,\hat H]=0` implies `[\hat F,\hat H]=0` for a Hermitian generator `\hat F` requires assumptions on the family/parameters of transformations; it is reproduced at the source's level here.
- **Source pp. 144–145, indistinguishability explanation:** Classical distinguishability, nonoverlapping versus overlapping wavefunctions, and the spin–statistics assignment are presented with the original narrative and can be framed more precisely later.
- **Source pp. 148–149, non-normalizable free plane waves:** The prefactor `(2\pi\hbar)^{-3}` with wavevectors in the exponent and the divergent center-of-mass normalization are reproduced from the source. Their relation to Chapter 1/Chapter 5 normalized momentum/wavevector kets should be reconciled in Phase R.
- **Source p. 150–151, spin-state basis statement:** A general symmetric spin superposition may still be an eigenstate of `\hat{\vect S}^{\,2}`; only `S_z` generally ceases to have a definite value. The source's broad assertion that it is “no longer an eigenstate of the spin operators” is reproduced here pending correction in the scientific revision.
- **Source pp. 151–152, helium effective Coulomb interaction and degeneracy:** Correct treatment of ground-state normalization for identical orbitals, excited-state degeneracy, and direct/exchange integrals is important when eventually revising the physics. The original scope and source equations are retained.
- **Source pp. 152–153, atomic `L+S` rule:** The example assumes two electrons in equivalent orbital configurations and exchange parity `(-1)^L`, and should be distinguished from general LS coupling in the editorial revision.
- **Source p. 153, thermodynamic units and zero-temperature gas:** The derivation is in implicit `\hbar=k_B=1` units while the preceding chapters generally retain `\hbar`; notation `\varepsilon`, `\mu` also changes contextual meaning. The source relation `\varepsilon=-P+\mu n` is kept; a later global convention will be needed.

## Verification checklist

- [x] Verified source chapter starts on viewer p. 140 and ends on p. 153, including the nearly blank page p. 146 and restarted printed numbering p. 147.
- [x] Reconstructed the four source sections and the internal numbered portions in editable LaTeX, preserving the ordering of derivations and examples.
- [x] Reproduced the source's orbital-overlap and exchange-correlation plots as editable TikZ.
- [x] Compared Chapter 6 notation with existing translation conventions and extended `frontmatter/notation.tex`.
- [x] Compiled the complete book locally with XeLaTeX (Chapters 1–6): **125 pages**, including front matter.
- [x] Reviewed rendered page contact sheets and fixed new-section overfull-line warnings.
- [x] GitHub Actions run 38894111667 succeeded; verified the version-controlled `pdf/advanced-quantum-mechanics.pdf` was updated on `main` after XeLaTeX compilation and artifact upload.
- [ ] Independent bilingual instructor source–target line-by-line and formula-by-formula check.
- [ ] Independent physics review of identified source issues (Phase R).

**Translation-phase principle:** Maintain the original logical sequence, all formulas, examples and the original pedagogical scope. Only minimal unmistakable typography/mathematics repairs and notation harmonization may be applied. New teaching modules, clarifications and conceptual expansion belong to later revision of the frozen complete English baseline.