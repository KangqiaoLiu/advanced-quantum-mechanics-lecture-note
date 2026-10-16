# Entire source textbook — faithful English translation baseline status

**First full eight-chapter assembly:** 2026-10-16. **Type:** internal working English translation baseline, awaiting bilingual instructor proof.

## Source-to-LaTeX map

| Source chapter | Viewer pages | Canonical LaTeX directory | Original-page exceptions |
| --- | --- | --- | --- |
| 1 Basic Concepts | 1–24 | `chapters/ch01/` | Original six sections |
| 2 Quantum Dynamics | 25–61 **plus upper part of p. 62** | `chapters/ch02/` | The Chapter 3 boundary is checked by actual source text |
| 3 Angular Momentum Theory | 62 **below Chapter 2 ending**–96 | `chapters/ch03/` | Chapter boundary straddles p. 62 |
| 4 Approximation Methods | 97–121 upper part | `chapters/ch04/` | Chapter 4 continues through the top of p. 121 |
| 5 Scattering Theory | 121 lower part–139 | `chapters/ch05/` | Starts on the bottom of source p. 121 |
| 6 Symmetry and Identical Particles | 140–153 | `chapters/ch06/` | Original printed page count restarts mid-chapter |
| 7 Second Quantization | 154–173 | `chapters/ch07/` | Exact duplicate p. 154–160 = p. 161–167; 13 unique source pages printed once |
| 8 Relativistic Quantum Mechanics | 174–186 | `chapters/ch08/` | Short page 180 and formula-only closing p. 186 included |

## Canonical work product

- `main.tex` is the **entire-book root**: separate title page, automatic TOC, cumulative list of notation and eight chapters.
- `frontmatter/notation.tex` is the editable **student-facing global notation list**, not a copy of internal planning notes.
- `chapters/ch01/` through `chapters/ch08/` contain all first-pass translations, ordered according to source sections.
- `editorial/CHAPTER0X_TRANSLATION_LOG.md` files record where the translations diverged only to fix clear mathematical/typographic mistakes and what remains to be checked.
- `editorial/NOTATION_BASELINE.md` records mathematical conventions and disputes for later scientific revision.
- `pdf/advanced-quantum-mechanics.pdf` is automatically compiled on GitHub Actions and committed to the private repository. The LaTeX source and revision history are canonical; PDF is a generated versioned view.

**Current build:** 145-page book, successfully compiled with XeLaTeX in a local clean incremental build, Chapter 8 beginning at total PDF page 136.

## Remaining gates before a frozen translation

1. **Text fidelity:** compare every source paragraph and note to English, including tables and visual labels, and log omissions/ambiguities. Avoid retroactively characterizing an initial translation as independently proofed.
2. **Math fidelity:** systematic equation-by-equation comparison with the source page image; preserve and separately audit formula fixes. Check conventions across chapter boundaries.
3. **Scientific revision separately:** consider and approve the conceptual and pedagogical improvements registered in individual chapter logs. Track the working translated source and the edited teaching text separately.
4. **Interactive materials only after notes:** use this versioned baseline as the factual reference for the later student interactive resource, as required by the instructor.


## Source-fidelity audit revision 2 (2026-10-16)

A reproducible per-page coverage index and a documented full-book source-fidelity pass have been added:

- `editorial/FULL_BOOK_FIDELITY_REVIEW_2026-10-16.md`: exact bilingual corrections, chapter-by-chapter review coverage, algebra spot tests and confidence limits.
- `editorial/SOURCE_PAGE_COVERAGE.csv`: all 186 viewer pages and their mapped LaTeX files, with repeated page pairs and shared chapter boundaries.
- `scripts/build_source_coverage.py`: reconstructs the above CSV from an instructor-supplied private source PDF.
- `scripts/check_translation_algebra.py`: checks fourteen concrete algebra identities using SymPy.
- `figures/`: restores the source's reused two-rotation and spin-direction illustrations.

**Translation quality label:** full source structurally mapped and specific bilingual omissions/mistranslations repaired; **independent exhaustive per-sentence and per-equation certification is still pending**. The initial, unreviewed eight-chapter state is preserved separately on the `translation/initial-baseline-2026-10-16` Git branch. Continue with versioned Phase-R course-content enhancement while respecting this evidence boundary.