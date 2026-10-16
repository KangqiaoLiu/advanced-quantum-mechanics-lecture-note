# Whole-book notation policy

**Established:** 2026-10-16, after completion of the eight-chapter English translation and its structural fidelity review.

## Purpose

The student-facing [`frontmatter/notation.tex`](../frontmatter/notation.tex) is a **single-page, book-wide contract**. It lists only conventions that must remain stable throughout the text; technical quantities or constants confined to one derivation are defined at their point of introduction. It has one continuous table, with no chapter-by-chapter subdivisions. A new topic does not automatically add rows to the printed page.

## Binding conventions

| Domain | One consistent convention | Consequence |
|---|---|---|
| Abstract observables | `\op A`, `\op H`; a hat denotes an operator | Representing the operator by a numerical matrix `A_{mn}` may omit the hat; `\dagger` is the adjoint. |
| Spatial quantities | `\vect r`, `\vect p` for vectors; `\op{\vect r}`, `\op{\vect p}` for operator-valued vectors | Scalar Cartesian components may use `x`, `p_x` and associated hats. |
| Kets, bras, averages | `\ket\psi`, `\bra\psi`, `\langle A\rangle_\psi`, `\langle A\rangle_\rho` | Mixed-state averages now use angle brackets with density-matrix subscript, preserving the original source's distinction from pure-state averages; the original source's `[A]` notation is retired. |
| Pictures | Subscripts `\mathrm S`, `\mathrm H`, `\mathrm I` | Same physical operator, different representation in time evolution. |
| Angular momentum | `\op{\vect J}`, `\op{\vect L}`, `\op{\vect S}`, `\op J_\pm`, `\ket{j,m}` | `\sigma_i` denotes a Pauli matrix, `\op{\vect s}` a single spin. |
| Parity versus identity | `\parityop` renders `\op{\Pi}` | Distinguishes parity from the identity `\mathbf 1`, an unrelated generic operator `\op I` in Chapter 1, and the direct Coulomb integral `I`. |
| Identical-particle exchange | `\op P_{ij}` | Reserved for the exchange of particles; distinct from `\parityop`. |
| Density operator versus probability density | `\op\rho` versus `\rho(\vect r,t)` | Hat always distinguishes the density matrix/operator from the scalar density. |
| Oscillator and many-body modes | `\op a_i`, `\op a_i^\dagger`, `\op n_i`, `\op N` | Mode index may be omitted for a single oscillator; `\op N` remains a number operator everywhere. |
| Time ordering versus scattering T matrix | `\timeorder` renders `\mathcal{T}` versus `\op T` | Previously Chapter 4 used plain `T` for time ordering. The symbol is now globally distinct from the scattering transition operator. |
| Cross section versus Pauli symbols | `\dd\sigma/\dd\Omega` or `\sigma(\Omega)` versus `\sigma_i` | An argument denotes the scattering quantity; a Cartesian index denotes a Pauli matrix. Existing original scattering formulas defining `\sigma(\Omega)=|f(\Omega)|^2` are retained. |
| Relativistic quantities | `x^\mu`, `g_{\mu\nu}`, `\gamma^\mu`, `\overline\psi` | The specified chapter convention uses `\hbar=c=1`. Earlier chapters retain their original physical-unit factors. |

All sources use the shared macros in [`main.tex`](../main.tex), including `\op`, `\vect`, `\parityop` and `\timeorder`. Whenever an existing convention changes, change every affected LaTeX passage, the student-facing notation page and this policy in the **same** commit. When a symbol is reused in different standard subject conventions (`m` as mass or magnetic quantum number, `\mu` as a physical parameter or a Lorentz index), qualify it locally at first appearance. Eliminating such reuse across all mathematical contexts would harm normal physics notation.

## Exactly what changed in this notation pass

1. Replaced the previous chapter-by-chapter list of approximately 170 detailed entries with **27** canonical rows on one printed A4 page. All remaining examples and local parameter descriptions continue in the teaching body.
2. Changed Chapter 6's parity operator from `\op I` to `\parityop = \op{\Pi}` (the operator's action and spectrum are unchanged).
3. Changed the Chapter 4 Dyson-series time-ordering symbol from `T` to `\timeorder = \mathcal T` (no change to time-ordering definitions or perturbative formulas).
4. Changed the Chapter 3 statistical shorthand `[A]` and `[s_i]` to `\langle A\rangle_\rho` and `\langle s_i\rangle_\rho` (no change to probability mixtures or traces).
5. Established [`scripts/check_notation_consistency.py`](../scripts/check_notation_consistency.py), which guards the shared macros, the one-table structure, the changed source sites and the absence of the superseded ambiguities.

**Version separation:** The source-faithful reviewed translation is preserved in the branch `translation/fidelity-audited-2026-10-16`. This consistent-notation revision belongs to the instructor-directed Phase R and is tracked distinctly; equation identities and physics claims are unchanged. A separate full physical-science review still remains on the project agenda.