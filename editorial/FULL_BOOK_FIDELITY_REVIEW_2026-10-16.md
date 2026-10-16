# Full-book source-fidelity review, revision 2

**Date:** 2026-10-16. **Scope:** source Chinese PDF (186 viewer pages) versus English LaTeX translation of Chapters 1–8. **Branch preserved before changes:** [`translation/initial-baseline-2026-10-16`](https://github.com/KangqiaoLiu/advanced-quantum-mechanics-lecture-note/tree/translation/initial-baseline-2026-10-16).

## Scope and confidence of the review

This review verifies source-page-to-LaTeX coverage, original section/subsection order, named-entity and dated-example anchors, absence of untranslated Chinese or placeholders, known duplicated and split chapter pages, selected source illustrations and high-risk formulas, and the compiled PDF. The CSV [`SOURCE_PAGE_COVERAGE.csv`](SOURCE_PAGE_COVERAGE.csv) indexes **all 186 source viewer pages** and gives their candidate corresponding English LaTeX files, including the seven identical repeated pages in Chapter 7. `scripts/build_source_coverage.py` regenerates the table from a private local copy of the original PDF. The source PDF must remain outside the repository.

**Evidence boundary:** The page map and source-keyword probes test *presence and structure*. They cannot establish that every translated sentence is semantically exact or every displayed equation is character-for-character correct. The mathematical checks cover selected derivations. No claim of exhaustive independent human page-by-page/equation-by-equation bilingual certification is made. The instructor should approve such a claim only after a separate authoritative read-through. The research/content-revision phase can proceed in distinct commits while retaining the original translation baseline.

## Exact corrections made in revision 2

| ID | Source location | Type | Verified issue and minimal repair |
|---|---|---|---|
| F01 | PDF viewer p. 62, immediately before Chapter 3 | **Omission** | Restore the final two-sentence Chapter 2 conclusion: quantum mechanics does not require magnetic monopoles, while their existence would imply quantization and a fundamental unit of electric charge. It had been missed because the paragraph appears above the Chapter 3 heading. The charge-quantization formula immediately preceding it was already present. |
| F02 | PDF viewer p. 174 | **Substitution of physical example** | Original says graphene (石墨稀, a nonstandard orthographic spelling). The first translation incorrectly substituted “hydrogen atom.” Restore **graphene**, preserving the source's meaning. |
| F03 | PDF viewer pp. 69 and 86 | **Two omitted source illustrations** | The identical two-step vector rotation illustration appears **twice** in the Chinese original: once in the spin section and again in the orbital-angular-momentum section. Add one reusable editable TikZ drawing (`figures/two_rotation_axes.tex`) and include it at both source positions. |
| F04 | PDF viewer p. 95 | **Omitted source illustration** | Restore the spin-singlet measurement-direction schematic showing the angle between the measurement axes (`figures/spin_direction_geometry.tex`). Source p. 96 additionally contains the three-ray `a,b,c` Bell geometry, which was already present in the English text. |
| F05 | PDF viewer p. 70 | **Oversimplified illustration** | The first translation drew the three Euler-rotation stages as three near-identical axis diagrams. Replace it with three distinct schematics: the first rotation around the shared $z$ axis, the second tilting $z'$ about $y'$, and the third rotating the transverse axis about $z'$. Keep the source's $(a),(b),(c)$ stages. |
| F06 | PDF viewer pp. 94 and 96 | **Original subsection-number typo** | The source prints both “3) Quantum mechanics and Bell's inequality” (p. 94) and “3) Experimental results” (p. 96), repeating the numeral 3. Preserve **both** original subsection topics and normalize the latter's printed label to **4)** as an unmistakable consecutive-numbering repair. No section is removed or added. |

All these corrections are to the faithful-translation version. Separately logged physics questions inherited from the Chinese source remain for scientific revision.

## Review coverage by chapter

| Chapter | Original PDF coverage | Original numbered sections | English source files | Review notes |
|---|---|---:|---:|---|
| 1 Basic Concepts | 1–24 | 6 | 6 | Original headings, measurement and representation subjects checked; earlier explicit math repairs retained. |
| 2 Quantum Dynamics | 25–62 **above Chapter 3 heading** | 7 | 7 | Restored final magnetic-monopole qualification (F01); cross-checked historical 1958 Casimir sentence with PDF p. 40; Gaussian electromagnetic convention retained. |
| 3 Angular Momentum Theory | 62 **below Ch. 2 closing**–96 | 7 | 7 | Restored repeated rotation sketch and spin geometry; corrected Euler triptych; corrected the source's duplicate subsection number; spin-one generator/Wigner identities checked symbolically. |
| 4 Approximation Methods | 97–121 **above Ch. 5 heading** | 7 | 7 | Seven topics, examples, strong-coupling method, Dyson-series closing line and shared-boundary p. 121 indexed; earlier source corrections preserved. |
| 5 Scattering Theory | 121 **below Ch. 4 closing**–139 | 5 | 5 | Green function, Born series, optical theorem, partial-wave geometry and spherical-well matching indexed; matching phase checked symbolically. |
| 6 Symmetry and Identical Particles | 140–153 | 4 | 4 | Two originally drawn exchange/correlation diagrams, nearly blank p. 146 and restarted printed pagination traced. |
| 7 Second Quantization | 154–173 | 2 | 5 (two original source sections with 11 subdivisions) | Confirmed 154–160 and 161–167 as seven identical duplicate pairs. **13 unique content pages** translated once. Source uniqueness is separate from printed chapter numbering. |
| 8 Relativistic Quantum Mechanics | 174–186 | 3 | 3 | Graphene example fixed; p. 180's single paragraph and p. 186's final formula retained; source's self-contradictory first gamma-zero matrix was previously repaired with provenance. Dirac gamma and free-spinor normalization checked algebraically. |

## Reproducible checks completed

- **Page assignment:** Every source viewer page 1–186 maps to one or more extant English chapter source files, with p. 62 and p. 121 correctly assigned to two chapters and p. 161–167 mapped to duplicated p. 154–160.
- **Section inventory:** All eight original chapter titles and **41 original top-level sections** are present. The original subsections, including the two separately headed Bell discussions, are retained in source order.
- **Source features:** Viewer pages 146, 180, 186 contain only very short source content; they remain indexed. Original raster figure candidates were inventoried and their specific omissions F03–F05 addressed. Existing source-schematic redrawing is not pixel-identical; the images are represented by editable line art.
- **Terminology and numbers:** Probe source-versus-target occurrences of key domain terms, named examples and year references by chapter. This probe discovered the graphene substitution; other flagged terms referred to cross-chapter boundary overlap, spelling differences (Clebsch--Gordan) or legitimate variant terminology. The source historical 1958 assertion was matched, not historically verified.
- **Mathematical identities:** Run `python scripts/check_translation_algebra.py` with SymPy: **14** deterministic passes on Pauli/Dirac algebra, spin-one generators, Wigner $d^1$, positive/negative Dirac spinor normalization, a finite spherical-well boundary condition and a Bell numerical comparison. These verify sample high-risk formulas, not every formula of the eight chapters.
- **Build and document structure:** XeLaTeX builds the whole book with a separate cover, automatic TOC, cumulative notation and eight chapters, using tracked editable `.tex` files. The compiled PDF is visually inspected at pages affected by the new diagrams. No missing source inputs or generated-figure dependencies.

## Preserved questions for scientific/content revision

The source discussion of projective measurements, Ehrenfest/energy-time uncertainty, Casimir mode counting, WKB matching, magnetic charge, density-operator assumptions, Bell locality, strong-coupling expansion, scattering normalization, fermionic exchange representations, finite-$T$ Fermi-gas units, relativistic time reversal and gamma-five bilinears contains known ambiguities or questionable statements. The chapter translation logs identify their original pages. **Retaining these source claims is part of faithful Phase T**; decisions to correct/expand them belong to independently versioned Phase R.

## Handoff and version policy

1. Keep the `translation/initial-baseline-2026-10-16` Git branch as the immutable state *before* the present source-fidelity fixes.
2. Preserve this review report, all eight chapter logs, `SOURCE_PAGE_COVERAGE.csv`, and deterministic algebra checks in the repository.
3. The present main-branch translation can serve as the **working reference for the forthcoming instructor-directed content revision**, with the following clear caveat: an independent bilingual sentence-by-sentence and displayed-equation-by-displayed-equation read-through is still required for a publication-grade *certified* translation. Never represent the automated page index or a successful build as that signoff.
4. In the content-revision phase, record changes to assumptions, proofs, exposition, nomenclature, examples and supplementary material separately from translation-fidelity corrections. Maintain attribution and permissions review before public release of source-derived English text.