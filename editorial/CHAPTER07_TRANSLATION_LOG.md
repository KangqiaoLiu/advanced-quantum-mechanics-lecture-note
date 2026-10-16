# Chapter 7 translation ledger — Second Quantization

**Date:** 2026-10-16. **Phase:** T, faithful English reproduction before any instructor-approved restructuring, science expansion or pedagogy. **Only source:** `清华大学 高等量子力学.pdf`, viewer pp. 154–173. **Chapter 8 starts:** viewer p. 174.

## Repeated source pages: fully verified

The following two seven-page segments reproduce precisely the same seven pages in the original PDF:

| First occurrence | Second occurrence | Source comparison |
|---:|---:|---|
| 154 | 161 | identical |
| 155 | 162 | identical |
| 156 | 163 | identical |
| 157 | 164 | identical |
| 158 | 165 | identical |
| 159 | 166 | identical |
| 160 | 167 | identical |

These pairs were checked **both by exact extracted-text equality and exact rendered grayscale pixel-array equality**, rather than relying on visual resemblance. The English reference book prints the block *once* and proceeds to viewer pp. 168–173. Total unique content: **13 pages**, corresponding to source viewer pp. 154–160 plus 168–173 (or pp. 161–173). The actual first source appearance and its seven-to-seven mapping remain recorded above to ensure no loss of provenance. The duplication reflects the source PDF itself and has no chapter-specific physics significance.

## Source-to-English page and heading map

| Source pages | Original heading and contents | English source |
|---|---|---|
| 154 and 161 | `第七章 二次量子化`; motivation; `1. 粒子数表象`; `1) Fock空间`, `2) 产生与消灭算符` | `01_fock_space.tex` |
| 155 and 162 | `3) 两个Fock空间之间的变换`; basis-change coefficients, unitarity and creation/annihilation transformation | `01_fock_space.tex` |
| 156–159 and 163–166 | `4) 产生与消灭算符之间的对易关系`; parts A/B/C/D with all intermediary steps; `5) Pauli不相容原理`, `6) 粒子数算符` | `02_commutation_relations.tex` |
| 160 and 167 | Conclusion of item `6)` (number operator) | `02_commutation_relations.tex` |
| 168 | `7) 粒子数算符的比例常数`: bosonic square-root factors and fermionic prior-occupation signs; heading `2. 用产生消灭算符表示力学量` | `03_occupation_factors.tex` (item `7)`); `04_additive_operators.tex` (new §2) |
| 169 | `1) 可加性单粒子算符`, `2) 可加性两粒子算符` begins | `04_additive_operators.tex` |
| 170 | Two-particle quartic operator, representation change and completeness; `3) 单粒子连续谱情形` begins | `04_additive_operators.tex` and `05_field_operators.tex` |
| 171 | Discrete/continuous basis, fields and (anti)commutation relations; additive operators; `4) 量子动力学与二次量子化` | `05_field_operators.tex` |
| 172 | Operator Heisenberg equation, two-body Hamiltonian, continuous-coordinate field evolution, comparison to single-particle Schrödinger equation | `05_field_operators.tex` |
| 173 | Final paragraph: interpretation of quantum-field second quantization | `05_field_operators.tex` |

## First-pass translation editorial scope

- Retained the **two numbered** original main sections and the original internal `1)` through `7)` and `1)` through `4)` steps. Five physical LaTeX files implement the two sections without altering the displayed structure.
- Mapped source superscript `+` on creation operators consistently to `\\dagger`; Fock-space bras/kets follow the existing `\\ket`, `\\bra` conventions; `\\op` supplies operator hats. Fermion anticommutators use `\\{A,B\\}` and boson commutators `[A,B]`.
- Kept the source's two representations $A$ and $B$, unitary matrix $S$, the two exchange parameters $\\lambda,\\mu$, and the provisional scalar operator $\\hat A$ appearing in the original proof. Distinguished the extensive additive observables `\\op{\\mathcal A}`, `\\op{\\mathcal V}` from the *single-particle* operators `\\op A`, `\\op V` in mathematical typesetting.
- Retained detailed intermediate transformations to/from the diagonal representation for one-body and two-body additive operators, and the original paired-basis, continuous-field and field-dynamics arguments. Continuous three-dimensional delta functions are written `\\delta^{(3)}` in accordance with the notation list.
- The source provides **no figures** in this chapter; no illustration was invented.
- The source expression for the total Hamiltonian and Heisenberg evolution is copied with the operator ordering used in the original; known subtleties of fermionic signs and pair potentials are recorded for later review rather than silently re-derived into a different lecture.

## Explicit scientific issues to assess later (Phase R)

1. **Source pp. 156–166 / 163–166, commutator derivation:** The inference from basis independence to mode-by-mode exchange relations and the conclusion `\\mu=\\pm1` rely on assumptions about representation independence, and the vacuum action `\\op A\\ket0=\\ket0` by itself does not prove a full operator identity. These remain a faithful transcription of the original reasoning.
2. **Source pp. 165–167, particle-number coefficients:** Intermediate coefficients $x,y,z$ and their signs in the bosonic and fermionic cases are not fixed separately. The final $\\op n_i=\\op a_i^\\dagger\\op a_i$ is retained. The implicit assumption of a standard Fock representation warrants attention on scientific revision.
3. **Source p. 168, ordering and normalization:** The fermionic creation/annihilation sign depends on a fixed order of orbitals, and the source normalizing factor $A(n_1,\\ldots,n_{i-1},\\ldots)$ is implicit. The narrative and normalization relations are kept.
4. **Source pp. 169–170, diagonal two-particle potentials:** The assumption `\\op V\\ket{a_i,a_j}=V_{ij}\\ket{a_i,a_j}` is a special representation-dependent hypothesis; true interactions generally require off-diagonal matrix elements, and exchange-adapted states require care. The original's pair-counting example is retained.
5. **Source p. 170, many-body completeness:** The use of `\\sum_{ij}\\ket{a_i,a_j}\\bra{a_j,a_i}` as a completeness relation relies on the chosen symmetric/antisymmetric two-particle representation and indexing. Treating it as the identity in a general distinguishable tensor-product basis would be incorrect. The source's argument is preserved pending a rigorous formal treatment in the revision phase.
6. **Source p. 171, field operators:** The source's four-coordinate potential kernel and annihilation-field operator ordering in the general two-body expression should be checked against a consistent (anti)symmetrized-particle convention; the source order is preserved.
7. **Source pp. 171–172, field equations:** The source's Hamiltonian and continuous-field evolution specialize to a diagonal local two-body interaction in a coordinate-spin representation; explicit conditions on $V(\\vect r,\\vect r')$ and fermionic exchange structure will be addressed when rewriting.
8. **Source p. 173, terminology:** “Classical wavefunction” and “quantizing the wavefunction” are reproduced from the source's teaching perspective; precise field-theory framing is deferred to Phase R.

## Verification

- [x] All original Chapter 7 PDF viewer pages 154–173 individually located and read.
- [x] 154–160 and 161–167 compared by text and rendered pixels; all seven corresponding pairs are identical.
- [x] Mapped the actual 13 unique source pages to exactly two numbered English source sections and their eleven internal items.
- [x] Completed the five editable English LaTeX translation files with intermediate derivations and source-order arguments.
- [x] Updated the cumulative `main.tex` title, table of contents, new chapter and canonical notation list.
- [ ] Independent bilingual sentence-by-sentence and equation-by-equation signoff by the instructor.
- [ ] Scientific/pedagogical corrections in subsequent Phase R.
- [x] Local XeLaTeX compilation verified: 135-page complete book, Chapters 1–7 including title, contents and notation.
- [x] Rendered English Chapter 7 PDF pages 126–135 and inspected both contact sheets; no overfull-box diagnostics.
- [x] GitHub Actions run **38895811544** completed successfully; XeLaTeX compiled all seven chapters, archived the PDF and automatically committed the new `pdf/advanced-quantum-mechanics.pdf` to the `main` branch (verified in repository file listing).