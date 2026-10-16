# Advanced Quantum Mechanics — Graduate Lecture Notes

A long-term project to develop a **complete English graduate-level lecture note** in advanced quantum mechanics and a **complementary interactive study resource**.

The initial content backbone is a 186-page Chinese lecture note provided by the instructor. The work proceeds in two distinct stages: first a faithful, independently versioned English translation of each original Chinese chapter; then a separately tracked instructor-directed scientific/pedagogical adaptation. Course-level decisions about additions, reductions, and reorganization are intentionally left open for later discussions.

## Start here

**[COURSE_DESIGN_48_PERIODS.md](COURSE_DESIGN_48_PERIODS.md)** captures the instructor-confirmed classroom constraints: 48 periods of 40 minutes (32 actual hours), board-by-board derivations, substantial prerequisite review, and an explicitly **provisional** 48-period route. It maps the requested new modules on topological condensed matter and quantum neural networks / machine learning while preserving the scope of the complete reference text. **Classroom teaching, full lecture notes, and interactive independent study are distinct, coordinated layers.**


**[PROJECT_BLUEPRINT.md](PROJECT_BLUEPRINT.md)** is the authoritative project plan. It includes:

- A complete eight-chapter map of the Chinese source, with PDF page references and subsection coverage.
- Editorial depth standards, derivation checking, terminology, notation, and cross-chapter consistency practices.
- An initial source audit (including repeated Chapter 7 pages and physics formulas requiring independent checking).
- A chapter-by-chapter workflow and persistent decision register.
- An analysis of interactive-course references and candidate student exercises/labs.
- Future repository organization, quality checks, and publication considerations.

**Project phase (2026-10-16):** first-pass faithful English **all eight chapters** (Chinese source PDF viewer pp. 1–186; Chapter 7 duplicate pages and Chapter 4/5 boundary have been reconciled) have been completed, compiled locally, and tracked. The complete eight-chapter English manuscript is assembled and compiles locally into 145 PDF pages. Full-book bilingual proofreading and instructor approval remain outstanding; scientific/pedagogical revision and interactive materials follow.

## Whole-book PDF structure

The versioned book root [`main.tex`](main.tex) produces a **title page**, an automatically generated **table of contents**, and an English [**List of Notation**](frontmatter/notation.tex) before the numbered chapters. These are editorial front matter, kept separate from the faithful chapter translation. All subsequent chapters should be added as `\\chapter{...}` entries in `main.tex`, with their existing section files included below. The document uses `book`, roman page numbers for front matter and arabic page numbers for the chapters. Equations are numbered by chapter and section. The notation list must be checked and extended when new chapter-specific symbols are introduced; changes to it also trigger the automatic PDF build.

## Chapter 1: English translation baseline

- **LaTeX root:** [main.tex](main.tex), containing the six translated sections in [chapters/ch01/](chapters/ch01/).
- **Translation record:** [editorial/CHAPTER01_TRANSLATION_LOG.md](editorial/CHAPTER01_TRANSLATION_LOG.md); [provisional notation](editorial/NOTATION_BASELINE.md).
- **Local compilation:** run `latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex` from the repository root. The PDF is regenerated from tracked source files.
- **Current PDF:** [pdf/advanced-quantum-mechanics.pdf](pdf/advanced-quantum-mechanics.pdf) is the generated, version-controlled PDF in the repository; GitHub can display it directly.
- **Cloud compilation:** [.github/workflows/build-notes.yml](.github/workflows/build-notes.yml) compiles XeLaTeX when sources change, uploads the exact build under [Actions](../../actions) → *Build English lecture notes PDF* → *Artifacts*, and commits the latest PDF to `pdf/advanced-quantum-mechanics.pdf` using the GitHub Actions bot. Source commits and PDF commits are both preserved in the Git history. The editable LaTeX is the canonical source.

The faithful translation is deliberately kept separate from future additions (Berry phase, density matrices, measurement extensions, topology, QNN, etc.). Revisions to translation vs. subsequent pedagogy must be distinguishable in history.

## Chapter 2: Quantum Dynamics translation baseline

- **LaTeX:** [chapters/ch02/](chapters/ch02/), containing seven sections corresponding to Chinese PDF viewer pp. 25–61.
- **Translation and scientific-audit ledger:** [editorial/CHAPTER02_TRANSLATION_LOG.md](editorial/CHAPTER02_TRANSLATION_LOG.md).
- **Complete compiled book PDF:** [pdf/advanced-quantum-mechanics.pdf](pdf/advanced-quantum-mechanics.pdf). The book now contains Chapters 1–8, with automatic title page, contents and cumulative notation list.
- **Correction policy:** record minimal obvious formula fixes in the translation ledger; defer mathematical/pedagogical expansion to the later revision phase.

## Chapter 3: Angular Momentum Theory translation baseline

- **Seven source sections:** [chapters/ch03/](chapters/ch03/) covers the Chinese PDF's Chapter 3 on viewer pp. **62–96**: rotations, spin, density operators, the angular momentum spectrum, orbital angular momentum, coupling and Bell's inequality.
- **Source provenance, smallest clear corrections and open scientific questions:** [editorial/CHAPTER03_TRANSLATION_LOG.md](editorial/CHAPTER03_TRANSLATION_LOG.md).
- **Book-wide notation:** [frontmatter/notation.tex](frontmatter/notation.tex) now includes angular-momentum and density-operator conventions.
- **Rendered complete PDF:** [pdf/advanced-quantum-mechanics.pdf](pdf/advanced-quantum-mechanics.pdf). Initial local XeLaTeX compilation produced a **78-page** complete book including front matter.
- **Status:** faithful first-pass English translation; instructor's final page-by-page fidelity review remains pending. This phase does not include course-content extensions.

## Chapter 4: Approximation Methods translation baseline

- **Seven source sections:** [chapters/ch04/](chapters/ch04/) covers nondegenerate/degenerate stationary perturbation, the variational method, strong-coupling Schrödinger equation, time-dependent perturbation, and interaction picture.
- **Critical chapter boundary:** Chapter 4 begins on source PDF viewer page **97** and ends in the **top portion of page 121**. The rest of page 121 begins Chapter 5. This correction prevents omission of the final time-ordering/Dyson formulas.
- **Translation ledger:** [editorial/CHAPTER04_TRANSLATION_LOG.md](editorial/CHAPTER04_TRANSLATION_LOG.md).
- **Cumulative student notation:** [frontmatter/notation.tex](frontmatter/notation.tex).
- **Compiled cumulative PDF:** [pdf/advanced-quantum-mechanics.pdf](pdf/advanced-quantum-mechanics.pdf). Four-chapter local book: 97 pages.
- **Status:** First-pass faithful translation with logged minimal repairs; independent instructor bilingual signoff remains outstanding.

## Chapter 5: Scattering Theory translation baseline

- **Five complete original sections:** [chapters/ch05/](chapters/ch05/) covers the source chapter on PDF viewer pp. **121 (lower half)–139**: scattering cross section; Green functions and contours; Lippmann–Schwinger/Dyson equations and optical theorem; Born series; partial waves and a finite spherical potential well.
- **Boundaries:** Chapter 4 ends on the upper part of viewer p. 121; Chapter 5 begins on the lower part. Chapter 6 begins on p. 140.
- **Source-page coverage and minimal corrections:** [editorial/CHAPTER05_TRANSLATION_LOG.md](editorial/CHAPTER05_TRANSLATION_LOG.md), including an important correction to the *differential* partial-wave cross section.
- **Updated notation:** [frontmatter/notation.tex](frontmatter/notation.tex) collects Chapter 5 scattering quantities, resolvents, phase shifts and spherical Bessel symbols.
- **Complete compiled book:** [pdf/advanced-quantum-mechanics.pdf](pdf/advanced-quantum-mechanics.pdf), **112 pages** in the initial local XeLaTeX compile, with title, contents, notation and Chapters 1–5.
- **Status:** Phase-T faithful first pass, awaiting independent final source–translation comparison.

## Chapter 6: Symmetry and Identical Particles translation baseline

- **Four complete sections:** [chapters/ch06/](chapters/ch06/) reproduces Chinese PDF viewer pages **140–153**: conserved quantities, symmetry transformations, exchange symmetry, and simple identical-particle systems including helium, spin coupling and Fermi-gas pressure.
- **Pagination anomaly:** source p. 146 holds only the trailing sentence of a question; printed numbering restarts on viewer p. 147, still within Chapter 6.
- **Source-to-English audit:** [editorial/CHAPTER06_TRANSLATION_LOG.md](editorial/CHAPTER06_TRANSLATION_LOG.md).
- **Updated notation:** [frontmatter/notation.tex](frontmatter/notation.tex).
- **Full compiled book PDF:** [pdf/advanced-quantum-mechanics.pdf](pdf/advanced-quantum-mechanics.pdf). Local XeLaTeX verified **125 pages** comprising Chapters 1–6 plus front matter.
- **Status:** faithful first translation; independent bilingual proofreading and instructor approval pending.

## Chapter 7: Second Quantization translation baseline

- **Original chapter:** Chinese PDF viewer pages **154–173**, with the seven-page sequence **154–160 exactly repeated on 161–167**. Both text and pixel content are identical. The English textbook prints each unique source page once; the exact duplication and mapping are documented.
- **Two original sections:** [chapters/ch07/](chapters/ch07/) contains *Particle-Number Representation* and *Representation of Observables by Creation and Annihilation Operators*. They are physically split into five editable LaTeX source files while retaining the original two sections and all eleven internal numbered subdivisions.
- **Full derivations:** occupation-number basis, Fock spaces and unitary basis changes, bosonic/fermionic commutation relations and occupation factors, additive one-body and two-body operators, continuous fields, and the Heisenberg equation of motion.
- **Proofing ledger:** [editorial/CHAPTER07_TRANSLATION_LOG.md](editorial/CHAPTER07_TRANSLATION_LOG.md) covers source-page correspondence, the verified duplicate, minimal notation changes and unresolved physics issues.
- **Updated notation:** [frontmatter/notation.tex](frontmatter/notation.tex).
- **Rendered cumulative book:** [pdf/advanced-quantum-mechanics.pdf](pdf/advanced-quantum-mechanics.pdf); **135 pages** in local XeLaTeX compilation, including the title page, TOC, notation and Chapters 1–7.
- **Status:** complete first-pass faithful translation; final bilingual instructor signoff and later conceptual revision remain pending.

## Chapter 8: Relativistic Quantum Mechanics translation baseline

- **English LaTeX:** [chapters/ch08/](chapters/ch08/) covers Chinese source PDF viewer pp. **174–186**, including the short source page 180 and final normalization on p. 186.
- **All three source sections:** relativistic equations of motion, relativistic invariance (Lorentz/spin/P/T/C/bilinears), and free Dirac plane-wave solutions. The source chapter has no diagrams.
- **Traceable minimal corrections and unresolved physics:** [editorial/CHAPTER08_TRANSLATION_LOG.md](editorial/CHAPTER08_TRANSLATION_LOG.md). The contradictory source first occurrence of gamma-zero was corrected using the source's own later matrix representation.
- **Full eight-chapter source map:** [editorial/FULL_BOOK_TRANSLATION_BASELINE_STATUS.md](editorial/FULL_BOOK_TRANSLATION_BASELINE_STATUS.md).
- **Student-facing notation:** [frontmatter/notation.tex](frontmatter/notation.tex) now includes Minkowski spacetime, Dirac matrices, spinor adjoints, Lorentz transformations, bilinear covariants and free-spinor normalization.
- **Whole-book PDF:** [pdf/advanced-quantum-mechanics.pdf](pdf/advanced-quantum-mechanics.pdf), locally compiled as **145 pages** with title page, automatic table of contents and all eight translated chapters.
- **Status:** faithful first-pass English translation of all original material, awaiting independent bilingual prose and equation-level instructor signoff.

## Full-book translation fidelity review (2026-10-16)

The **initial translation of all eight chapters** has received a second-round systematic source-fidelity review. The editable translation has been corrected for verified problems in source PDF viewer pages **62, 69–70, 86, 94–96 and 174**, including an omitted Chapter 2 paragraph, a mistranslated physical example, source illustrations, and subsection numbering.

- **Detailed scope, actual corrections and remaining limitations:** [full-book fidelity review](editorial/FULL_BOOK_FIDELITY_REVIEW_2026-10-16.md).
- **One-to-one source-page index:** [SOURCE_PAGE_COVERAGE.csv](editorial/SOURCE_PAGE_COVERAGE.csv), tracing **186 original viewer pages**, including **7 exact duplicate pairs**.
- **Repeatable spot checks:** [source coverage script](scripts/build_source_coverage.py) (requires the original Chinese PDF locally) and [14 symbolic algebra tests](scripts/check_translation_algebra.py) (SymPy).
- **Preserved original version:** [translation/initial-baseline-2026-10-16](../../tree/translation/initial-baseline-2026-10-16), before the fidelity fixes.
- **Preserved reviewed working version:** [translation/fidelity-audited-2026-10-16](../../tree/translation/fidelity-audited-2026-10-16), frozen after the successful all-eight-chapter XeLaTeX build. Subsequent content enhancements are committed to `main`.

**Quality boundary:** this was a source-structure, prose-anchor, selected-figure and targeted-formula review. It is a traceable **working English translation baseline**, not a claim that every translated sentence and every displayed equation has undergone independent bilingual certification. That final publication-grade read-through remains an explicit task. Content enhancements can now proceed as separately tracked revisions.

## Intended deliverables

**Lecture notes:** a coherent English reference course text, including all eight source chapters, the instructor's additions (Berry phase, density operator, measurement theory, an introduction to non-Hermitian physics), and planned substantial extensions in topology and quantum learning; with explicit derivations, worked examples, carefully explained figures, chapter problems, and references. Modular LaTeX is the current working proposal.

**Interactive companion:** a complementary self-study resource, with physically motivated explorations and deeper extensions. The platform will be selected after comparing working prototypes. Inspirations include [Topology in Condensed Matter](https://topocondmat.org/) and [Shiling Liang's interactive PRX explainer](https://shilingliang.com/files/thermodynamic_space_explainer.html).

## Working principles

The Chinese document provides the starting structure; all eight chapters remain mapped until curricular edits are discussed. Every source section will have a recorded disposition, every substantive mathematical result will be independently reviewed, and changes to common notation or physical conventions will be reconciled across chapters and the companion. Student-facing content will be entirely in English.

The repository is private during development. Original-source provenance, translation/figure permissions, attribution, and any eventual public access will be addressed before release. The supplied source PDF is not included here.

## Contributing and continuing work

Read both [PROJECT_BLUEPRINT.md](PROJECT_BLUEPRINT.md) and [COURSE_DESIGN_48_PERIODS.md](COURSE_DESIGN_48_PERIODS.md) before preparing or modifying substantial material. Source references use PDF viewer page numbers, 1–186. Record any durable editorial or architectural decision in the blueprint so that long-term development remains consistent.

**Maintainer:** course instructor; content and publication decisions are subject to instructor review.