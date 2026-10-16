# Chapter 5 — Scattering Theory

**Translation phase:** T, faithful source-based first pass. Original Chinese PDF (viewer) pp. **121–139**: the chapter starts after the final Dyson formula of Chapter 4 on the bottom half of source p. 121. The page 121 chapter boundary is shared; source p. 140 starts Chapter 6.

## Five original sections

1. `01_scattering_overview.tex` — General description, elastic/inelastic scattering and differential cross section (pp. 121–123).
2. `02_green_functions.tex` — Green-function integral equation, Fourier/residue derivation, outgoing/incoming boundary conditions and complex contours (pp. 123–126).
3. `03_lippmann_schwinger.tex` — Hilbert-space and coordinate Lippmann–Schwinger equations, Dyson equation, scattering amplitude, transition operator, optical theorem (pp. 127–132).
4. `04_born_series.tex` — First Born approximation, sphere-potential example, central potential and perturbative Born series (pp. 133–134).
5. `05_partial_waves.tex` — Central-potential partial waves, spherical Bessel functions, phase shifts, cross sections, low-energy spherical-well example (pp. 134–139).

The contents, mathematical derivations, figures and formula order follow the source. Each diagram is an editable TikZ approximation of its source diagram. The first-pass translator has corrected only clearly demonstrable mathematical inconsistencies; exact details appear in the chapter ledger. Chapter 5 was included in the cumulative `main.tex` book with an updated `frontmatter/notation.tex`. The instructor's final bilingual comparison and the full scientific review are still pending.

**Compile:** in the repository root, run `latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex`. GitHub Actions compiles and updates `pdf/advanced-quantum-mechanics.pdf` on `main`.