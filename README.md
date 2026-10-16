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

**Project phase (2026-10-16):** the first-pass faithful English **Chapter 1 translation** (Chinese source PDF viewer pp. 1–24) has been compiled locally. Remaining original chapters and the interactive companion are forthcoming; the instructor will review translation fidelity and approve subsequent content adaptation.

## Chapter 1: English translation baseline

- **LaTeX root:** [main.tex](main.tex), containing the six translated sections in [chapters/ch01/](chapters/ch01/).
- **Translation record:** [editorial/CHAPTER01_TRANSLATION_LOG.md](editorial/CHAPTER01_TRANSLATION_LOG.md); [provisional notation](editorial/NOTATION_BASELINE.md).
- **Local compilation:** run `latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex` from the repository root. The PDF is regenerated from tracked source files.
- **Current PDF:** [pdf/advanced-quantum-mechanics.pdf](pdf/advanced-quantum-mechanics.pdf) is the generated, version-controlled PDF in the repository; GitHub can display it directly.
- **Cloud compilation:** [.github/workflows/build-notes.yml](.github/workflows/build-notes.yml) compiles XeLaTeX when sources change, uploads the exact build under [Actions](../../actions) → *Build English lecture notes PDF* → *Artifacts*, and commits the latest PDF to `pdf/advanced-quantum-mechanics.pdf` using the GitHub Actions bot. Source commits and PDF commits are both preserved in the Git history. The editable LaTeX is the canonical source.

The faithful translation is deliberately kept separate from future additions (Berry phase, density matrices, measurement extensions, topology, QNN, etc.). Revisions to translation vs. subsequent pedagogy must be distinguishable in history.

## Intended deliverables

**Lecture notes:** a coherent English reference course text, including all eight source chapters, the instructor's additions (Berry phase, density operator, measurement theory, an introduction to non-Hermitian physics), and planned substantial extensions in topology and quantum learning; with explicit derivations, worked examples, carefully explained figures, chapter problems, and references. Modular LaTeX is the current working proposal.

**Interactive companion:** a complementary self-study resource, with physically motivated explorations and deeper extensions. The platform will be selected after comparing working prototypes. Inspirations include [Topology in Condensed Matter](https://topocondmat.org/) and [Shiling Liang's interactive PRX explainer](https://shilingliang.com/files/thermodynamic_space_explainer.html).

## Working principles

The Chinese document provides the starting structure; all eight chapters remain mapped until curricular edits are discussed. Every source section will have a recorded disposition, every substantive mathematical result will be independently reviewed, and changes to common notation or physical conventions will be reconciled across chapters and the companion. Student-facing content will be entirely in English.

The repository is private during development. Original-source provenance, translation/figure permissions, attribution, and any eventual public access will be addressed before release. The supplied source PDF is not included here.

## Contributing and continuing work

Read both [PROJECT_BLUEPRINT.md](PROJECT_BLUEPRINT.md) and [COURSE_DESIGN_48_PERIODS.md](COURSE_DESIGN_48_PERIODS.md) before preparing or modifying substantial material. Source references use PDF viewer page numbers, 1–186. Record any durable editorial or architectural decision in the blueprint so that long-term development remains consistent.

**Maintainer:** course instructor; content and publication decisions are subject to instructor review.