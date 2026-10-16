# Chapter 8 translation ledger — Relativistic Quantum Mechanics

**Date:** 2026-10-16  
**Phase:** T — faithful initial Chinese-to-English transcription and mathematical typesetting.  
**Source:** Original 186-page Chinese PDF (`清华大学 高等量子力学.pdf`), **viewer pp. 174–186**.  
**Outcome:** Three original sections, all 13 PDF viewer pages accounted for in English LaTeX. The nearly empty last page contains the final normalization constant and has been included. Original page 180 contains a single concluding paragraph, also included. No independent pedagogical additions or new physical topics.

## Section and page map

| English source file | Original material | PDF viewer pages |
| --- | --- | --- |
| `chapters/ch08/01_relativistic_wave_equations.tex` | Section 1: motivation for relativistic quantum mechanics; natural units; Klein–Gordon and Dirac equations; conserved Dirac current | 174–177 (upper half) |
| `chapters/ch08/02_relativistic_covariance.tex` | Section 2: Lorentz covariance; infinitesimal Lorentz transformations and spin; P, T, C transformations; sixteen bilinear covariants | 177 (lower half)–184 (upper portion), including p. 180's concluding sentence |
| `chapters/ch08/03_free_dirac_plane_waves.tex` | Section 3: free positive-/negative-energy spinors; boost from rest; normalizations | 184 (middle)–186 (top) |

## Minimal changes with explicit provenance

1. **Page 176: time gamma matrix.** The source initially prints `gamma_0 = diag(I,I)` alongside `gamma_i = [[0,sigma_i],[-sigma_i,0]]` and Clifford algebra `{gamma_mu,gamma_nu}=2g_mu,nu` with signature `(1,-1,-1,-1)`. This `gamma_0` is inconsistent with its own gamma algebra and with the explicitly specified **`gamma_0 = diag(I,-I)`** on source p. 184, which is required for the source's four rest-frame solutions. The English first occurrence has been minimally repaired to **`gamma^0 = diag(I,-I)`**, matching the later explicit source representation. The change is not a new representation choice.
2. **Page 176: gamma-matrix dagger notation.** The source uses `gamma_mu^+` for Hermitian adjoints; the project-wide `\dagger` is used throughout.
3. **Page 176 and following: consistently distinguish upper/lower Lorentz indices and matrix identity.** The English uses `gamma^mu`, `gamma_mu`, `g_{mu nu}`, `I` in established notation, preserving the original metric and Clifford relations.
4. **Page 186: last expression was visually checked.** The PDF's embedded text extraction omits the radical, but the rendered source unambiguously gives `A=-B=1/sqrt(2m(m+E))`. The English retains that *square root*, closing the chapter exactly where the source ends.
5. Minor obvious typographical normalization includes `Schrödinger`, `Klein–Gordon`, `Lorentz`, `Dirac`, `gamma^5` in displayed bilinears, `\overline\psi` for the Dirac adjoint, Pauli-matrix `sigma_i`, and clear use of `T` as a transformation in this chapter, all consistent with the existing project conventions.

## Source-level scientific and mathematical issues flagged for later review

The following material is **preserved in source order and has not been silently replaced by more general modern formulations**. These are candidates for a later independently versioned revision.

- **p. 175:** The source defines a Klein–Gordon four-current `j_mu=psi* d_mu psi-(d_mu psi*) psi`, yet its subsequent real-valued `rho` and spatial `j` have a factor involving `i/(2m)`. The current normalization and use of the word *probability* deserve an explicit equation-level audit.
- **pp. 175–176:** Discussion of negative-energy solutions and when quantum field theory is needed is brief; physical interpretation is deferred to phase R.
- **pp. 177–178:** The printed Lorentz matrix index contractions and determinant classification should be audited together with metric placement and proper/orthochronous distinctions. The English tracks the derivation and flags this issue.
- **p. 179:** The statement that spin results simply from first derivatives and that Klein–Gordon *does not contain spin* should be reviewed as a statement about these specific free-field equations, not presumed to be universal.
- **p. 181:** Time reversal is described as a linear spinor matrix `S=T=gamma_1 gamma_2 gamma_3`. The role of complex conjugation and **antiunitary** time reversal must be independently checked in the later scientific revision; the source discussion is retained.
- **pp. 183–184:** The source gives both `S^{-1} gamma_5 S=gamma_5` and a later `S^{-1} gamma_5 S=-gamma_5` in its listing of transformations, while the concluding bilinear expressions use `det Lambda`. Proper versus improper Lorentz transformations, the gamma-five phase and the tensor/pseudotensor signs require a consistent later audit. The formulas have been transcribed in source sequence, with the index conventions used in the earlier chapters.
- **p. 185:** Spinor boost normalization, use of `u,v` and the sign in the negative-energy spinor expressions should be checked against a fixed `gamma`-matrix convention when the book is scientifically revised.

## Build and visual QA

- [x] Inspected the original 13 PDF page images (including both near-blank transition/ending pages).
- [x] Verified and typeset the complete source's three major sections and their subdivisions.
- [x] Added the chapter to cumulative `main.tex`; updated the title page from Chapters 1–7 to Chapters 1–8.
- [x] Extended the student-facing `frontmatter/notation.tex` with natural units, Lorentz tensors, gamma matrices, spinors and covariants.
- [x] Local `latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex` successful: **145 cumulative PDF pages** including front matter and Chapters 1–8.
- [x] Eliminated the new overfull horizontal box warning from the longest bilinear-covariant display.
- [x] Inspected contact-sheet renders of all ten English Chapter 8 pages.
- [x] GitHub Actions run 38897750654 completed successfully: XeLaTeX compilation, version-specific artifact archive and generated eight-chapter PDF committed to `pdf/advanced-quantum-mechanics.pdf` on `main` (verified in repository listing).
- [ ] Full independent instructor source-vs-translation bilingual and mathematical review.

## Frozen-stage handoff

The eight source chapters are now represented in editable English LaTeX source. A book-wide forensic audit (sentence/diagram/equation matching, mathematical corrections, notation and derivation checks, and permissions), followed by instructor signoff, is required before calling the translation *final*. The future pedagogical/research revision and interactive materials are separate phases.