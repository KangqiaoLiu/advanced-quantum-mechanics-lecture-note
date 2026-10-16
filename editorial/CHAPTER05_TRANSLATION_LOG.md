# Chapter 5 translation ledger — Scattering Theory

**Date:** 2026-10-16. **Phase:** T (faithful translation baseline; no curriculum additions). **Chinese source:** `清华大学 高等量子力学.pdf`, PDF viewer pages **121–139**. **English output:** five LaTeX files `chapters/ch05/01...05*.tex` in source order. **Scope:** This source chapter ends at PDF viewer p. 139; the following page begins Chapter 6.

## Source–target mapping

| Original viewer pages | Chinese section | Editable English source | Figures and worked material |
|---|---|---|---|
| 121 lower–123 upper | `1. 一般描述` | `01_scattering_overview.tex` | Target, incident/scattered flux, differential cross section, plane/spherical current calculation |
| 123 lower–126 | `2. Green 函数方法` | `02_green_functions.tex` | Helmholtz resolvent; Fourier transform; two complex poles and 2×2 contour diagrams; advanced/retarded wave functions |
| 127–132 | `3. Lippmann–Schwinger 方程` | `03_lippmann_schwinger.tex` | Coordinate/Hilbert integrals; free and full resolvents; Dyson; scattering triangle; T matrix; optical theorem derivation |
| 133–134 upper | `4. Born 级数` | `04_born_series.tex` | First Born; constant spherical potential; Fourier integral for a central potential; iteration with Green diagrams |
| 134 lower–139 | `5. 分波法` | `05_partial_waves.tex` | Plane-wave Bessel/Legendre decomposition; radial equation; phase-shift figure; cross-section interference; spherical-well matching and low-energy limit |

**Important chapter boundary:** Source p. 121 starts with the continuation/completion of Chapter 4's interaction-picture Dyson derivation. Its remaining lower portion starts Chapter 5. The previous chapter already includes the upper-p.121 material. This prevents double translation and missing source equations.

## Minimal corrections and normalization harmonization

1. **Source p. 137, differential cross section for partial waves:** The source displays the differential cross section as a sum of separately squared partial-wave amplitudes, `\(\sigma(\theta)=\sum_l|f_l(\theta)|^2\)`. This omits interference terms and contradicts its own immediately preceding result `\(f(\theta)=\sum_l f_l(\theta)\)` and Section 1's `\(\sigma=|f|^2\)`. The English baseline uses `\(\sigma(\theta)=|\sum_l f_l(\theta)|^2\)`. Any integrated cross section is evaluated separately; integrated Legendre orthogonality cannot justify the incorrect *differential* formula.
2. **Source p. 138, matching amplitudes in the finite spherical well:** The source states `\(C'_0=C_0\)`. With the source's different denominator factors `\(C'_0/(k'r)\)` and `\(C_0/(kr)\)`, continuity of `\(rR_0\)` instead yields `\(C'_0=C_0(k'/k)\sin(ka+B_0)/\sin(k'a)\)`, with the phase condition `\(B_0=\arctan[(k/k')\tan(k'a)]-ka\)` on the appropriate branch. The corrected amplitude equation is used in the English baseline; this does not change the phase shift or cross-section derived immediately afterward.
3. **Source p. 125, angular Fourier integral:** In passing from sine to an exponential over the symmetric whole real axis, the identity `\(\int k'e^{ik'R}h(k')\,dk'=i\int k'\sin(k'R)h(k')\,dk'\)` (for even `h`) introduces a factor `1/i`. The original intermediate expression has an inconsistent factor. The English text has the consistent factor in both intermediate expressions, preserving the original outgoing/incoming Green functions.
4. **Momentum normalization in pp. 127–130:** The local source uses plane-wave `\(\braket{\vect r}{\vect k}=(2\pi)^{-3/2}e^{i\vect k\cdot\vect r}\)` for the wavevector basis but occasionally writes momentum eigenkets `\(\ket{\vect p}\)` with that same factor. To maintain the Chapter 1 Fourier convention, the translation uses `\(\braket{\vect r}{\vect p}=(2\pi\hbar)^{-3/2}e^{i\vect p\cdot\vect r/\hbar}\)`, and after conversion to `\(\vect k=\vect p/\hbar\)`, uses `\(\braket{\vect r}{\vect k}=(2\pi)^{-3/2}e^{i\vect k\cdot\vect r}\)`. The final scattering normalization and the optical theorem remain identical.
5. **Potential and mass symbols:** Original Section 1 employs reduced mass `\(\mu\)` for relative motion; Green/Lippmann–Schwinger/Born sections often use `m`; the final partial-wave section returns to `\(\mu\)`. This original convention is preserved and indexed in the notation list. The rescaled potential is `\(U=2mV/\hbar^2\)` in sections using `m`.
6. **Typesetting only:** Replaced the source's inconsistent transliterations (`Lippmabb`, `Schroedinger`, etc.) with internationally standard English spellings; maintained the mathematical content.

## Scientific questions reserved for later Phase R

- **Scattering boundary terminology (pp. 125–126, 131):** Original terminology “retarded/advanced” is used for stationary outgoing/incoming Helmholtz Green functions. In time-dependent settings the retarded/advanced resolvent terminology requires careful distinctions. The source's “causal contour containing both poles” should be critically assessed before the scientific revision.
- **Scope of the Lippmann–Schwinger limit (pp. 127–129):** The `\(i\epsilon\)` prescription requires the outgoing/incoming boundary value and the scattering-state existence assumptions, especially at thresholds/resonances. These are not expanded in the faithful translation.
- **The Born-condition wording (pp. 133–134):** The source describes first Born validity as simply `\(E\gg V\)`. In general the validity depends on the potential range/coupling and the exact scattering regime. Source wording preserved.
- **Phase-shift branch (pp. 138–139):** The arctangent relation requires a phase branch chosen continuously across parameter values. The source displays the principal arctangent without mentioning this. Preserved in the baseline.
- **Low-energy limit near well resonances (p. 139):** `\(k\to0\)` limits can be non-uniform near a zero-energy resonance; the source's expression should be discussed carefully in the subsequent physics revision.
- **Fourier contour plot:** The source has a 2×2 scanned contour plot; the English LaTeX uses an editable TikZ rendition of pole positions and upper semicircular contours. Check graphic fidelity during the instructor's page-by-page signoff.
- **One-body radial mass convention:** Chapter 5 switches between `m` and `\mu`; physical assumptions will be harmonized only after full-text translation and source-faithfulness review.

## Verification register

- [x] Reviewed source page images for viewer pp. 121–139, including actual start/end boundaries.
- [x] Reconstructed all five section bodies and displayed derivations in editable LaTeX.
- [x] Redrew source scattering, contour, momentum-triangle, Born-series and phase-shift diagrams in TikZ.
- [x] Reviewed source symbols against the current book's operator, position and momentum conventions.
- [x] Local XeLaTeX compiled the cumulative book with Chapters 1–5; verified it contains **112 pages** with title page, table of contents and updated List of Notation.
- [x] Inspected rendered chapter pages and scanned LaTeX diagnostics for severe layout problems.
- [ ] GitHub Actions run and repository PDF update verified (to be completed after remote run).
- [ ] Full independent line-by-line and equation-by-equation bilingual instructor check.
- [ ] Full physical and mathematical independent peer review of the source results.

**Phase-T principle:** Every original source section, worked calculation and figure remains part of the baseline. Content revisions, alternative boundary interpretations and pedagogical improvements belong to Phase R rather than being quietly inserted into this translation.