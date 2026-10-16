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
