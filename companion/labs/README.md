# Working Physics Laboratories

These modules form the executable part of the [Advanced Quantum Mechanics self-study companion](../README.md). They are intended **exclusively for students to explore independently after class**; the instructor teaches the course at the blackboard.

Each complete module has an `index.html` containing full English self-study material, an analytically or numerically checkable `model.js`, and a `lab.js` that links physics predictions to interactive controls and multiple graphical displays. Common controls, figures and their responsive styles live in `../assets/`.

See the complete and continuously updated directory at [../index.html](../index.html), or browse the listed files and their code in [../catalog.json](../catalog.json). The catalog is the authoritative registry of which laboratory pages are running. Source validation and physical regression tests live in `../../scripts/` and run in [GitHub Actions](../../.github/workflows/check-companion.yml).

A module must be marked `implemented` only after it has substantive explanatory content, working calculations, registered paths, physics benchmarks and browser first-render checks. Early teaching explanations are open to later student-driven revisions and scientific review.
