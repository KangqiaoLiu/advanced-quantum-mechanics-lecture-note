# Provisional notation baseline for the faithful-translation stage

## Student-facing notation list

The canonical **printed List of Notation** is maintained as [frontmatter/notation.tex](../frontmatter/notation.tex) and included in the whole-book PDF by `main.tex`. It covers symbols that appear in the completed English chapter(s), including equations and basis conventions. The present editorial file records intended global conventions and unresolved choices. Update the printed notation list and this editorial record together when a new chapter is added or conventions are changed. The printed front matter is an editorial addition: faithful source chapter text remains untouched.

This list codifies the project blueprint's proposed choices already needed in Chapter 1. It is not an expansion of the original Chinese pedagogical content.

| Concept | Chapter 1 LaTeX |
|---|---|
| Abstract pure state | `\ket{a}`, `\bra{a}` |
| Abstract operator | `\op{F}` (renders `\hat F`) |
| Hermitian adjoint | `\dagger` |
| Hilbert-space scalar product | `\braket{a}{b}` |
| Matrix element | `\mel{a}{\op{F}}{b}` |
| Pauli / spin-1/2 | `\op{s}_i=(\hbar/2)\sigma_i` in the conventional spin matrix representation |
| Active spatial translation | `\op T(\dd\vect x)=1-i\op{\vect p}\cdot\dd\vect x/\hbar` to first order |
| Fourier convention | `\braket{\vect x}{\vect p}=(2\pi\hbar)^{-3/2}e^{i\vect p\cdot\vect x/\hbar}` |
| Three-dimensional Dirac delta | `\delta^{(3)}(\vect x-\vect x')` |
| Commutator, anticommutator | `[A,B]`, `\{A,B\}` |

Full-book conventions are currently marked proposed in `PROJECT_BLUEPRINT.md`; change this file and associated chapters together if the instructor adopts a different standard.
