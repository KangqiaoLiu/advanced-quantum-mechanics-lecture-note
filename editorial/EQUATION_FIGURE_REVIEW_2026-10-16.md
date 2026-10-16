# Book-wide equation numbering and figure repair

**Editorial verification date:** 2026-10-16  
**Scope:** complete nine-chapter, student-facing English textbook.

## Equation numbering

- Replaced **1,028** unnumbered `\[...\]` display groups and **90** `align*` derivation groups with numbered AMS `equation` displays. Multiline derivations use `equation`+`aligned` and have **one number for the complete chain**, consistent with standard textbook practice.
- Added no semantic changes to algebra, physical equations, or their original mathematical order. Historical `\label{...}` and `\eqref{...}` entries retain their meanings.
- Existing numbered equation blocks remain numbered. The completed manuscript has **1,141** automatically generated chapter.section.equation labels, confirmed independently by scanning **all PDF pages**.
- A numerical/bounding-box audit of PDF equation tags detected **zero text collisions** and **zero labels outside the page's numbering margin**. `main.log` has no Overfull `\hbox` diagnostics.
- `scripts/check_display_equations.py` is run in GitHub Actions; new unnumbered chapter displays or broken named equation references make the check fail.

## Figure visual inspection

- Every TikZ drawing was compiled into a **separate inspection page** and reviewed at readable scale: **41 distinct source drawings**, comprising **39 inline** plus **2 reusable `.tex` figures**. The shared rotation sketch appears twice and the shared spin direction sketch appears once, for **42 diagram placements** in the book.
- The standalone contact sheets were reviewed for line-label intersections, box connectors, disconnected paths, arrow endpoint placement, clipped bounds, crowding, and inaccurate object positioning. Source correction was preferred to PDF-only graphical adjustment.
- Repairs include:
  - Stern--Gerlach screen labels moved clear of the detector bar; measurement processes replaced with node-anchored arrows which stop at the borders of the boxes; position/momentum loop labels moved away from linework.
  - Path-integral annotations given unobstructed positions along trajectories.
  - Gravitational-interference figure label and leader moved outside the rectangle; solenoid radius markers separated; AB figure reconstructed with a distinct flux-tube cross-section and unobstructed interfering arms; Berry curve/curvature labels spaced apart.
  - Spin interferometer magnetic-field inset and A/B arm labels repositioned; Bell measurement arrows and conditional teleportation feedback lines redrawn to meet the intended components.
  - Scattering cross-section angular/area labels separated; Green-function upper/lower contour groups re-spaced; Born-series diagram interaction labels moved off its lines.
  - Schrödinger/Pauli/Klein--Gordon/Dirac relation diagram redrawn with distinct one-way curved arrows and labels outside all four boxes; SSH labels/axis scale improved.
- The full PDF's vector path bounds were checked against page dimensions: **zero drawings extend past the printable page edges**. The diagrams were recompiled after all fixes.
- The unlabeled content of mathematical figures remains conceptually the same; only the visual clarity of lines, arrows and text was edited. Special cases (such as multiple routes meeting a common scattering point) retain physically intentional intersections.

## Acknowledgments

The repository README and COPYRIGHT file now explicitly thank Professor **Pengfei Zhuang (庄鹏飞)** for his Advanced Quantum Mechanics course notes, and acknowledge *Quantum Computation and Quantum Information* by **Michael A. Nielsen and Isaac L. Chuang**, and *Advanced Quantum Mechanics* by **Franz Schwabl**. This does not affect third-party intellectual property rights.

## Verification commands

```bash
python3 scripts/check_display_equations.py
python3 scripts/check_notation_consistency.py
python3 scripts/check_content_additions.py
python3 scripts/check_new_chapters.py
latexmk -xelatex -interaction=nonstopmode -halt-on-error main.tex
```

**Final local outcome:** 151 PDF pages; numbered displays 1,141; no overfull boxes; original one-page notation and bibliography preserved; source-vs-PDF source drawing checks complete. The bibliography uses ordinary BibTeX compilation as before.