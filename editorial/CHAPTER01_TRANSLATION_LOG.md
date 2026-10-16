# Chapter 1 — First-pass translation / verification ledger

**Scope:** Chinese source PDF viewer pp. 1–24 inclusive.  
**Product:** faithful English baseline translation of the complete first chapter; original subsection order, content, worked examples and main displayed derivations retained.  
**Stage:** complete first-pass chapter, independently compiled locally; continued source-to-English human/subject-matter review is expected before a final publication-quality edition.

## Source-page coverage

| Chinese PDF viewer pages | Source unit | LaTeX file |
|---|---|---|
| 1–3 | 1. Stern–Gerlach experiment (five original subsections, two sets of schematic experiments, optical-filter analogy) | `chapters/ch01/01_stern_gerlach.tex` |
| 4–6 | 2. Linear vector spaces (3D vectors, Dirac bras/kets, operator representations, outer products) | `chapters/ch01/02_vector_space.tex` |
| 7–9 | 3. Operator/matrix eigenvalues and eigenvectors (general matrices, Hermitian properties, degenerate orthogonalization, completeness) | `chapters/ch01/03_eigensystems.tex` |
| 9–16 | 4. Measurement (single quantities, spin matrices, simultaneous measurements, complete sets, cascades, uncertainty relation) | `chapters/ch01/04_measurement.tex` |
| 16–18 | 5. Representation transformations (states, operators, unitarity, invariant eigenvalues, commutators, trace) | `chapters/ch01/05_representation.tex` |
| 19–24 | 6. Position and momentum representations (continuous bases, translation, canonical quantization, differential representations, four original examples) | `chapters/ch01/06_position_momentum.tex` |

This is a **source-page coverage map**, not evidence of line-by-line proofreading certification. Every original page was inspected via both extracted text and rendered images when composing the translation; the mathematical PDF typefaces are prone to broken text extraction. For editorial decisions the rendered original page is authoritative.

## Minimal corrections made in the English base text

1. **Source PDF p. 15, uncertainty variance:** source writes the variance in a general state with `≠ 0`, immediately followed by the observation that an eigenstate has zero variance. The translated definition uses `≥ 0`, the correct general property of a variance. The mathematical reason is positivity of the squared Hermitian deviation operator.
2. **Source PDF p. 18, unitary transformation:** source categorically writes `S is not a Hermitian matrix; S† ≠ S`. A unitary matrix **can** also be Hermitian. English reads `S is not necessarily Hermitian: S† ≠ S` (the second formula is to be understood as generic, not universal). A future revision can make the qualifier explicit in both clauses.
3. **Source PDF p. 24, hydrogen momentum wave function:** the Fourier transform's denominator in the Chinese displayed result appears as `(a₀ p² + ħ²)²`, which is dimensionally inconsistent. English uses `(a₀² p² + ħ²)²`. The resulting rational function is also independently confirmed by Fourier-transform integration. The numerator is preserved.
4. **Source PDF pp. 1–24, notation-only:** use `†` for adjoints; `\hbar`; indexed δ as `\delta^{(3)}` for three-dimensional position/momentum normalization; consistent bold vectors and hats. The original assumptions and derivations remain as written.

**Revision discipline:** The first-pass English chapter reproduces source arguments even where subsequent rigorous teaching may motivate substantial clarification. Those improvements belong to a later instructor-approved revision phase, with commits distinct from this translation baseline.

## Scientific/mathematical points to check in the later editing phase; text preserved for now

- Pp. 8–9: the source's dimension-counting rationale for Gram–Schmidt orthogonalization does not by itself constitute a complete proof for complex degenerate subspaces.
- Pp. 9–10: the prose around quantum measurement assumes a discrete nondegenerate spectral/projective model; later treatment of degeneracy and generalized measurement may need precise caveats.
- Pp. 13–15: simultaneous measurements and cascaded probabilities are stated under implicit complete-eigenstate/projective-measurement assumptions.
- P. 12: the statement that `s²` can be regarded as a classical quantity is original source wording; it will need pedagogical framing later.
- Pp. 19–23: coordinate and momentum generalized eigenkets and canonical quantization would benefit from later mathematical qualification (distributional normalization and domains of unbounded operators).
- P. 24: the request to compute `the expectation of momentum` switches to the expectation of momentum **magnitude**; kept as in the source.
- Original diagram geometry is recreated in editable TikZ from the source; graphical fine detail should be checked if publication-level visual fidelity is demanded.

## Build and ownership

Run from repository root:

```bash
latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex
```

GitHub Actions compiles the same `main.tex` after every source commit, and stores a version-specific PDF as a downloadable workflow artifact. The tracked files are the authoritative sources; binary PDFs need not be manually pushed.

The Chinese reference PDF is **not included** in the repository; original authorship/permissions and any future publication must be reviewed before public distribution of the translated derivative work.
