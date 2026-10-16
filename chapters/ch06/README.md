# Chapter 6 — Symmetry and Identical Particles

**Phase:** T, first-pass source-faithful English translation. **Source:** `清华大学 高等量子力学.pdf`, PDF viewer pages **140–153**. The following page (154) begins Chapter 7.

| Original source | English source | Coverage |
|---|---|---|
| 140–141, upper | `01_conserved_quantities.tex` | Conservation, expectation values, commutators, probability conservation, good quantum numbers |
| 141, lower–144, upper | `02_symmetry_conservation.tex` | Symmetry transformations; translations, rotations, inversion/parity; spherical harmonics |
| 144, lower–151, upper | `03_identical_particle_symmetry.tex` | Indistinguishability, permutation operator, symmetrization, Pauli exclusion, exchange effects and spin |
| 151, lower–153 | `04_simple_identical_particle_systems.tex` | Helium direct/exchange integrals; atomic angular momentum; Pauli/Fermi pressure |

The source PDF p. 146 has only one sentence fragment completing the preceding question, and p. 147 resets the **printed** source page number to 1 while continuing Chapter 6. Both are accounted for. Illustrations of spatial overlap and the boson/fermion relative-distance probability are editable TikZ.

Reproducible whole-book build:

```bash
latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex
```

For minimal mathematical corrections, original-source ambiguity and subsequent scientific review, consult [`editorial/CHAPTER06_TRANSLATION_LOG.md`](../../editorial/CHAPTER06_TRANSLATION_LOG.md). Initial translation maintains source organization and order, and has not undergone independent bilingual instructor signoff.