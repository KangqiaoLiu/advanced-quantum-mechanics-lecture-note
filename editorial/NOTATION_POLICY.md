# Whole-book notation policy

**Established:** 2026-10-16, after completion of the eight-chapter English translation and its structural fidelity review.

## Purpose

The student-facing [`frontmatter/notation.tex`](../frontmatter/notation.tex) is a **single-page, book-wide contract**. It lists only conventions that must remain stable throughout the text; technical quantities or constants confined to one derivation are defined at their point of introduction. It has one continuous table, with no chapter-by-chapter subdivisions. A new topic does not automatically add rows to the printed page.

## Binding conventions

| Domain | One consistent convention | Consequence |
|---|---|---|
| Abstract observables and matrices | `\op A`, `\op H`; `A_{mn}` denotes matrix elements | The hat denotes an abstract operator. A matrix in a fixed basis omits the hat. Ordinary matrix transpose is `A^{\mathsf T}`; conjugate transpose/Hermitian adjoint is `A^\dagger=(A^{\mathsf T})^*`. |
| Identity | `\mathbf1`, `\mathbf1_A` for a named subsystem | One canonical identity symbol; reserve `I` for explicitly defined non-identity parameters only. |
| Generic, translation and scattering operators | `\op A` generic; `\op U_{\mathrm{tr}}` translation; `\op T` scattering | Prevents `\op T` from denoting three unrelated operators. `\timeorder` denotes time ordering. |
| Normalized versus transposed state | `\ket{a_{\mathrm{norm}}}` versus `a^{\mathsf T}` | A normalized ket is a new state with unit norm; a transpose is an algebraic operation on matrix components. |
| Trace | `\operatorname{tr}` for full and partial traces, e.g. `\operatorname{tr}_B` | Uniform lowercase roman operator, including in composite-system measurement formulas. |
| Operator-valued vectors | `\op{\vect x}`, `\op{\vect p}` | Use operator outside bold in the source; do not alternate with `\vect{\op x}`. |
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

**Historical source record:** Translation provenance and prior notation choices are documented in instructor-only `editorial/` files. Public historical snapshot branches were retired; the commit history remains available. Mathematical notation and scientific validity are audited independently.


## Instructor supplementary chapters (2026-10-16)

The added material retains the one-page global table and defines specialized quantities at first use. In particular, $\hat{\mathcal O}=\sum_\alpha\hat t_\alpha$ is the generic one-body observable in the 2024 handwritten second-quantization derivation, replacing the handout's $\hat T$ to reserve $\hat T$ for the scattering transition operator. Particle permutation operators are $\hat P_{ij}$, and the symmetric/antisymmetric sector projectors are $\hat{\mathcal P}_\pm$. The generic fermionic mode order is increasing orbital index. In quantum teleportation the Pauli matrices are $\sigma_x,\sigma_z$, while the Hadamard gate is $\hat U_{\mathrm H}$; the oscillator quadratures are $\hat X,\hat P$. The Berry connection $\boldsymbol{\mathcal A}_n$ is explicitly named and defined to avoid confusion with the physical electromagnetic $\boldsymbol A$. These changes were made consistently across the edited chapters without enlarging the printed Notation list.

## Effective non-Hermitian physics: local conventions (2026-10-17)

`chapters/ch01/03a_nonhermitian_dimer.tex` uses an ordered single-photon basis `(|A>, |B>)`, locally sets `ℏ=1`, and defines `κ` as the lossy cavity's **intensity** decay rate. The corresponding matrix diagonal is `ω0-iκ/2`. Complex eigenvalue imaginary parts control amplitude decay; squared amplitudes determine intensity rates. A passive two-mode exceptional point occurs at `κ=4J`. Subtracting the shared complex energy yields a PT-symmetric relative matrix, while the physical original experiment contains only loss. The no-jump state has conditional, decreasing norm; the full system-plus-environment evolution conserves probability. Symbols and rates are defined in the local section to preserve the one-page printed global notation list.

## Nine-chapter notation audit (2026-10-17)

The text now uses one transpose marker, normalized-ket label, matrix/operator distinction, identity, trace convention and operator-valued-vector macro ordering. Translation is written as `\op U_{\mathrm{tr}}` and the scattering transition operator as `\op T`. The generic eigenproblem uses `\op A` and the representation transformation uses observables `\op F` and `\op G`. Standard local subject conventions remain valid when definitions are explicit: WKB tilde momentum, spin Pauli `\sigma_i` versus scattering `\sigma(\Omega)`, and time `t` versus transmission `t` in scattering calculations.

The current CI notation audit scans every chapter for superseded aliases and identity/trace collisions. Further reviews of the *meaning* of parameters should accompany individual derivations when chapters receive scientific updates.
