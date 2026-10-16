# Advanced Quantum Mechanics

English graduate-level lecture notes by **Kangqiao LIU**.

**[Read the current complete PDF](pdf/advanced-quantum-mechanics.pdf)**. The PDF is built from the LaTeX sources on every content revision.

**[Interactive Companion — nine-chapter catalog](companion/README.md)** · [Browse catalog](companion/index.html) · [Companion master plan](INTERACTIVE_COMPANION_BLUEPRINT.md). The companion currently has a navigable laboratory directory and documented prototypes; numerical and visual physics laboratories will be added as they are built and verified.

The manuscript covers foundational quantum theory, quantum dynamics, angular momentum and measurement, approximation methods, scattering, quantum many-body systems, relativistic quantum mechanics, topological condensed matter physics, and quantum neural networks and machine learning.

The original lecture notes and their historical Chinese-to-English translation are preserved in separate repository branches; the current manuscript incorporates instructor-authored handwritten lecture material and additional self-contained topics. The student-facing book includes a single-page *List of Notation* and a bibliography for its two contemporary chapters.

## Acknowledgments

These lecture notes draw **extensively** on the Advanced Quantum Mechanics lecture notes of **Professor Pengfei Zhuang (庄鹏飞)**. Parts also draw on *Quantum Computation and Quantum Information* by **Michael A. Nielsen and Isaac L. Chuang**, and *Advanced Quantum Mechanics* by **Franz Schwabl**. I am grateful to Professor Zhuang and these authors for their work and teaching materials. I also thank **Professor Hong Guo (郭弘)** for his Advanced Quantum Mechanics course, which has informed the preparation of these notes.

## Build

The root file is `main.tex` (XeLaTeX). Its sources are organized under `chapters/ch01/`--`chapters/ch09/`; the new academic references are in `references/topology_qml.bib`.

```bash
latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex
python3 scripts/check_notation_consistency.py
python3 scripts/check_new_chapters.py
python3 scripts/check_display_equations.py
```

GitHub Actions (`.github/workflows/build-notes.yml`) runs validation, compiles the book, archives a version-specific PDF, and publishes the new `pdf/advanced-quantum-mechanics.pdf` on `main`.

## Editorial references and history

- [Equation-numbering and figure-by-figure visual review](editorial/EQUATION_FIGURE_REVIEW_2026-10-16.md)

- [Project blueprint](PROJECT_BLUEPRINT.md)
- [Whole-book notation policy](editorial/NOTATION_POLICY.md)
- [Handwritten lecture integration record](editorial/CONTENT_INTEGRATION_2026-10-16.md)
- [Current revision and source mapping](editorial/REVISION_2026-10-16_TOPOLOGY_QML.md)
- `textbook/pre-instructor-supplements-2026-10-16`: original merged-chapter source before replacing handwritten material.
- `translation/fidelity-audited-2026-10-16`: source-faithful eight-chapter translation review snapshot.

## Copyright and third-party materials

**© 2026 Kangqiao LIU. All rights reserved.** The compiled PDF carries a discreet copyright mark on each page. See [COPYRIGHT.md](COPYRIGHT.md) for rights, conditions of use and treatment of third-party material. Source scans and reference PDFs are excluded from this repository.