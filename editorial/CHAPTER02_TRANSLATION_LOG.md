# Chapter 2: source-to-English translation ledger

**Version:** 2026-10-16, faithful translation baseline v0.1 (first full pass).  
**Source:** user-provided 186-page Chinese advanced quantum mechanics PDF. All page numbers below refer to the PDF viewer's page numbers (not the chapter's internal page counters).  
**Coverage:** **PDF pp. 25–61 inclusive, 37/37 pages**.  
**Status:** All seven sections have been translated and the English LaTeX builds in the whole-book PDF. **Mathematical and source-fidelity final human approval pending.** This document distinguishes deliberate minimal repairs from source problems left for later scientific revision.

## 1. Files and exact source coverage

| Section (original order) | Original PDF pages | Tracked English LaTeX |
|---|---:|---|
| 1. Time evolution and Schrödinger equation | 25–30 | `chapters/ch02/01_time_evolution.tex` |
| 2. Schrödinger and Heisenberg pictures | 31–34 | `chapters/ch02/02_pictures_ehrenfest.tex` |
| 3. One-dimensional linear harmonic oscillator | 35–40 | `chapters/ch02/03_harmonic_oscillator.tex` |
| 4. Coherent states of the oscillator | 41–42 | `chapters/ch02/04_coherent_states.tex` |
| 5. Coordinate-representation Schrödinger equation; WKB | 42–47 | `chapters/ch02/05_coordinate_wkb.tex` |
| 6. Feynman path integral | 48–52 | `chapters/ch02/06_path_integral.tex` |
| 7. Gauge transformations (gravitational interference, EM gauge, AB and monopoles) | 53–61 | `chapters/ch02/07_gauge_transformations.tex` |

**Boundary note:** the source begins Section 5 at the bottom of viewer page 42; this page legitimately appears in the coverage for two sections. Source page 61 concludes its discussion of electric charge quantization with a sentence about the minimal charge unit. The English baseline ends there, just as the source does.

## 2. Policy applied

Translate source prose, questions, examples, equations and figures in source order. Preserve its Gaussian electromagnetic convention (notably `e/c` in minimal coupling and `1/c` in electric field), original conceptual emphasis, historical claims, and level of derivation. Illustrations in the source are reconstructed as editable TikZ schematics; geometric appearance is approximate but intended physics content is preserved. The translation adds **no** Berry phase, new pedagogical derivations, exercises or external reference material. Whole-book front matter and a source-audit record are editorial metadata outside the translated chapter.

This is a **first complete translation**, not an independently typeset facsimile or a guarantee of exact character-level fidelity. The manuscript was checked against page images as well as PDF-extracted text; an instructor's detailed source–translation review is still needed before freezing the baseline.

## 3. Clearly necessary repairs applied to the English formulas

| Original PDF page | Source issue and minimal correction in English | Reason |
|---|---|---|
| 37 | For `p_{mn}`, the sign associated with `a^\dagger-a` was reconciled with the operator definition: `p_{mn}=i\sqrt{m\hbar\omega/2}(-\sqrt n\,\delta_{m,n-1}+\sqrt{n+1}\,\delta_{m,n+1})`. | The matrix element must agree with the preceding exact operator identity. |
| 40 | The Heisenberg formulas for the oscillator are written `x(t)=x(0)\cos\omega t + p(0)\sin\omega t/(m\omega)` and `p(t)=p(0)\cos\omega t -m\omega x(0)\sin\omega t`. | The source displays the opposite signs for the sine terms; those signs contradict both its preceding `a(t)=a(0)e^{-i\omega t}` and `\dot x=p/m`, `\dot p=-m\omega^2x`. The ground/eigenstate expectation arguments remain unchanged. |
| 45 | Removed an extraneous Laplacian factor attached to `(\nabla s)^2` in the displayed WKB eikonal equation. | Direct substitution of `\psi=e^{is/\hbar}` fixes the gradient-squared term. |
| 46 | Used the positive real magnitude `\sqrt{|p(x)|}` for the WKB prefactor in forbidden regions, with complex phases absorbed into arbitrary integration constants. | Avoid an ill-defined square-root choice when `p=i\widetilde p`; physically equivalent after redefining arbitrary constants. |
| 49 | Wrote the trace/partition-function relation with the same position coordinate in both propagator endpoints, `\int d^3x K(x,t;x,0)`, consistently throughout the derivation; wrote out imaginary-time substitution. | Taking a trace requires diagonal matrix elements and yields `\sum_Ee^{-iEt/\hbar}`. The source contains mixed endpoint symbols on the first line. |
| 52 | Corrected harmonic-oscillator Lagrangian to `L_c=\tfrac12m\dot x^2-\tfrac12m\omega^2x^2`. | The source displays a plus in that line; the sign for a potential in a Lagrangian is minus. The displayed propagator corresponds to the minus sign. |
| 55 | Restored the explicit time derivative when differentiating `p-eA/c` and collected terms into the full electric field `E=-\nabla\varphi-c^{-1}\partial_t A`. | Ensures the Lorentz-force equation follows from the time-dependent minimal-coupling Hamiltonian. |
| 59–60 | Wrote `\nabla\cdot B=+4\pi e_m\delta^{(3)}(r)` so its sign matches `B=e_m e_r/r^2`, the flux integral and the rest of the monopole derivation. | The source contains a minus sign in the divergence equation and then a plus sign in the solution/flux. With fixed definition of `e_m` these are inconsistent. |

Where the original has visually garbled vector accents, hats or normalizations due to PDF-font extraction, standard LaTeX glyphs are used. Source-derived physics is kept in separate translation modules and can be revisited.

## 4. Flagged source questions intentionally deferred (no additional content introduced)

1. **pp. 25–26:** source treats scalar time as a parameter and treats an infinitesimal time-translation generator as the Hamiltonian; no commentary on domain/self-adjointness is inserted.
2. **pp. 27–29:** electron spin magnetic-moment sign and the convention `\omega=-eB/(mc)>0` are preserved in Gaussian units; physical charge sign and Larmor direction should be reconciled when the chapter is scientifically edited.
3. **p. 39:** the source's expression involving a sum over all occupation numbers for the total electromagnetic-field energy is schematic and should be scrutinized separately from the vacuum expression. It is reproduced without installing a new quantized-field derivation.
4. **pp. 39–40:** the source's historical claim that the attractive Casimir force was experimentally observed in 1958 is translated as written, without independent historical fact-checking; regularization and plate-mode counting are deferred.
5. **pp. 44–45:** limits `\hbar\to0` and the commutator-to-Poisson correspondence are stated in the source as a direct prescription; their mathematical conditions may warrant subsequent discussion.
6. **pp. 46–47:** the turning-point solution is described as Bessel functions of order `\pm1/3`; the relation to Airy functions and matching constants is deferred. The source does not display the full connection formula, so none is invented.
7. **pp. 48–49:** the source's step-function propagator (used to generate a delta-function source) is distinct from the ordinary unitary propagator; the original switches between conventions. Retained in order; a later revision should label them separately.
8. **p. 49:** the original plane-wave normalization and time phase are retained in the worked example; normalization conventions deserve a chapter-wide review.
9. **p. 52:** the wording `only Gaussian path integrals can be integrated` and a heuristic classical stationary-action explanation are translated as originally presented; no claim of a rigorous exhaustive statement is added.
10. **p. 54:** the neutron de Broglie relation is given as `p=\hbar/\lambda` in the source. This differs from the common wavelength convention `p=h/\lambda`; clarification of what its `\lambda` denotes is deferred to the explicit revision stage.
11. **pp. 55–56:** the source develops a spatial gauge function `\Lambda(x)` while also introducing time-dependent scalar/vector potentials; a general time-dependent gauge function would require transforming the scalar potential too. The translation stays within the source's restricted case.
12. **pp. 57–58:** the AB calculation uses a schematic path-integral action and neglects a quadratic `A` term. In a correct Lagrangian derivation of minimal coupling, the cross-term sign/interpretation needs a careful audit. The source's expression is retained for the baseline; this is a high-priority Phase-R physics issue.
13. **pp. 60–61:** singular gauge potentials and Dirac-string distributions involve careful patchwise interpretation; the translation preserves the original conceptual route and flux/charge quantization argument.

## 5. Illustrations reconstructed as editable TikZ

- p. 28: Larmor precession cone.
- p. 35: local potential minimum.
- p. 46: classically allowed region, forbidden regions and turning points.
- pp. 48, 50–51: propagation and alternative paths.
- p. 53: gravitational-interference rectangle.
- pp. 56–58: hollow-cylinder solenoid and two-slit AB geometry.
- p. 59: electric-source field lines and magnetic dipole lines.

The source's precise graphical styling and dimensions are not necessary for the initial translation stage; drawings should be checked against original page images if revised.

## 6. Compilation and next-stage status

- Whole-book entry: `main.tex` (book front matter, Chapter 1 and Chapter 2).
- Student notation appendix before Chapter 1: `frontmatter/notation.tex`; updated for oscillator, propagator, gauge and monopole symbols.
- Compiles with `latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex`, and with the existing GitHub Actions PDF build.
- All 37 source pages have a corresponding English section; the second chapter retains all seven original sections.
- Verify every correction against the original pages before publishing the eventual classroom version. Continue to **Chapter 3 translation**, with later scientific/pedagogical expansions kept in a separate phase.