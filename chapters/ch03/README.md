# Chapter 3 — Angular Momentum Theory

**Status:** First-pass source-faithful English translation. **Source:** Chinese lecture PDF, viewer pages 62–96. The first lines on source page 62 close Chapter 2; Chapter 3 begins below them.

| LaTeX source | Original viewer pages | Source heading |
|---|---:|---|
| `01_rotations.tex` | 62–65 | 1. 旋转与角动量 |
| `02_spin.tex` | 66–71 | 2. 自旋角动量 |
| `03_density_operators.tex` | 72–76 | 3. 系综与密度算符 |
| `04_angular_momentum_spectrum.tex` | 77–83 | 4. 角动量的本征值和本征态 |
| `05_orbital_angular_momentum.tex` | 84–86 | 5. 轨道角动量 |
| `06_angular_momentum_coupling.tex` | 86–91 | 6. 两个角动量的耦合 |
| `07_bell_inequality.tex` | 92–96 | 7. 自旋关联与Bell不等式 |

## Compile

From the repository root, use `latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex`. The total book's title, contents and notation list are updated automatically. A GitHub Actions workflow also builds and commits the versioned PDF to `pdf/advanced-quantum-mechanics.pdf`.

## Editorial boundary

This is a translation baseline for the source, **not** the instructor's later restructured teaching chapter. Mathematical correction and unresolved questions are recorded in [`editorial/CHAPTER03_TRANSLATION_LOG.md`](../../editorial/CHAPTER03_TRANSLATION_LOG.md). The student-facing notation index has been extended in [`frontmatter/notation.tex`](../../frontmatter/notation.tex). The chapter awaits the instructor's final bilingual source-fidelity review.