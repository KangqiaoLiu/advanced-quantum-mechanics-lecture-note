# Chapter 3 translation ledger — Angular Momentum Theory

**Phase:** T (faithful translation baseline).  **Date:** 2026-10-16.  **Chinese source:** supplied 186-page Chinese PDF, viewer pages **62–96**.  **English files:** `chapters/ch03/01_rotations.tex` through `07_bell_inequality.tex`.

## Boundary and coverage

Source page 62 first finishes the **magnetic-monopole passage of Chapter 2**, including the charge-quantization remark. The Chinese heading **第三章：角动量理论** begins further down that page. The Chapter 2 ending was translated in `chapters/ch02/07_gauge_transformations.tex` and is not repeated at the start of Chapter 3.

| Chinese PDF page | Content reconstructed in English | File |
|---|---|---|
| 62 | Chapter heading, classical rotation noncommutativity; both rotation orders and a schematic figure | `01_rotations.tex` |
| 63 | Rotation matrices, small-angle expansions, rotation commutator, quantum rotation introduction | `01_rotations.tex` |
| 64 | Rotation generators and angular-momentum commutators | `01_rotations.tex` |
| 65 | Expectation values under spatial rotation | `01_rotations.tex` |
| 66 | Spin precession and periods of expectation values | `02_spin.tex` |
| 67 | Spinor sign after $2\pi$ rotation; neutron interference experiment and Larmor period | `02_spin.tex` |
| 68 | Pauli matrices and anticommutators; general spin rotation | `02_spin.tex` |
| 69 | Spin state from rotated $z$ eigenstate; introduction to Euler rotations | `02_spin.tex` |
| 70–71 | Euler-angle decomposition, matrix representation in spin-$1/2$ space | `02_spin.tex` |
| 72 | Pure/mixed ensembles, quantum and statistical averages | `03_density_operators.tex` |
| 73 | Density operator, trace formula, continuous-position matrix, normalization | `03_density_operators.tex` |
| 74–75 | Pure and fully/partially mixed density matrices, three worked examples | `03_density_operators.tex` |
| 76 | Liouville–von Neumann equation for the ensemble | `03_density_operators.tex` |
| 77 | General angular-momentum algebra, Casimir operator, ladder operators | `04_angular_momentum_spectrum.tex` |
| 78–79 | Ladder positivity, finite range, proof of $j(j+1)$ and allowed $m$ | `04_angular_momentum_spectrum.tex` |
| 80–81 | Ladder coefficients, component matrices, spin-$1/2$ and spin-$1$ examples | `04_angular_momentum_spectrum.tex` |
| 82–83 | Fixed-$j$ rotation matrix, Wigner small-$d$, spin-$1$ example | `04_angular_momentum_spectrum.tex` |
| 84–85 | Orbital operators in spherical coordinates, spherical harmonics, normalization | `05_orbital_angular_momentum.tex` |
| 86 | Rotations of spherical harmonics; start of angular-momentum addition | `05_orbital_angular_momentum.tex` and `06_angular_momentum_coupling.tex` |
| 87–88 | Coupled/uncoupled representations, Clebsch–Gordan transformation, allowed $j,m$ | `06_angular_momentum_coupling.tex` |
| 89–90 | Orbital–spin coupling, two-component eigenvalue calculation, explicit CG coefficients | `06_angular_momentum_coupling.tex` |
| 90–91 | Two-electron triplet and singlet coupling | `06_angular_momentum_coupling.tex` |
| 92 | Singlet spin measurement and correlations; Einstein locality introduction | `07_bell_inequality.tex` |
| 93–94 | Local hidden-type model, eight-category count table, derivation of Bell's inequality | `07_bell_inequality.tex` |
| 94–95 | Quantum predictions, measurement-angle relation, planar contradiction | `07_bell_inequality.tex` |
| 96 | Numerical example and experimental conclusions | `07_bell_inequality.tex` |

## Notation normalization (within instructor-approved scope)

- Operators carry hats through existing `\op{...}` macros. Abstract angular momenta use $\op{\vect J}$, $\op{\vect L}$ and $\op{\vect s}$. Their matrix representations and eigenvalues use unhatted symbols where the source does so.
- Spinor basis vectors are $\chi_\pm$. Arbitrary rotations use $R_i$, $\op D_i$, the angles $\alpha,\beta,\gamma$ and $\epsilon_{ijk}$.
- The source's `Clebsch-Gordon` terminology is given its standard English spelling **Clebsch–Gordan**. Wigner $D$ and reduced $d$ are used with the Euler convention already present in the original.
- Density operators use $\op\rho$; the ensemble average is $[A]$, preserving the source's distinction from the ordinary quantum expectation $\langle A\rangle$.
- Notation added to the **printed** `frontmatter/notation.tex` includes Wigner matrices, angular-momentum quantum numbers, CG coefficients, density operators and Bell probabilities.

## Clear source issues and minimal repairs

1. **PDF p. 81, p. 83 — spin-one generator normalization.** The source's displayed spin-one $J_x,J_y$ matrices use a prefactor displayed as $\hbar/2$ while their entries are the standard nearest-neighbor ones. The angular-momentum algebra and the ladder-operator coefficients require $\hbar/\sqrt2$. The translated matrices use $\hbar/\sqrt2$. This is a high-confidence internal consistency correction; it is also needed for the displayed $d^1(\beta)$.
2. **PDF p. 76 — density-operator dynamics.** The sign is kept in the source's form $i\hbar\partial_t\rho=-[\rho,H]$ (equivalently $[H,\rho]$). Reconstructed bra and ket time derivatives explicitly follow the source's logic.
3. **PDF pp. 90–91 — coupling normalizations.** The superposition coefficients are typeset with explicit square-root normalizations ($1/\sqrt2$ in the triplet $m=0$ and singlet), consistent with normalized two-spin states. The original page images, not the damaged PDF text extraction, were used to decide the square-root glyphs.
4. **PDF p. 96 — subsection marker.** The last subsection in source §7 is again marked `3)` after `3) quantum mechanics and Bell's inequality`. It has been sequentially renumbered as `4) Experimental results`. No argument was added or removed.
5. **PDF pp. 62, 67, 70, 92, 95–96 — diagrams.** Recreated as editable TikZ figures with English labels, retaining the physical content of the two rotation orders, neutron interferometer, Euler-frame sequence, two-detector singlet and three measurement directions. The Euler diagram is schematic; verify geometric details against the Chinese page image at final proof stage.

## Original-source physics questions to inspect in Phase R (no new exposition inserted)

1. **p. 66:** The sign and period $2\pi/\omega$ for a signed Larmor frequency. A positive physical period is $2\pi/|\omega|$; the source's signed convention is retained in the translation.
2. **p. 67:** The neutron magnetic moment and the electron/neutron gyromagnetic conventions are presented in the source's Gaussian units. Its $T=lm_n\lambda/\hbar$ is consistent only if $\lambda$ denotes the reduced wavelength. Clarify its definition at scientific revision.
3. **p. 71:** Euler-angle active/passive framing and the order of fixed/moving rotations need a full cross-check against the figure and the chosen group-action conventions.
4. **p. 79–80:** The statement that $j$ can be half-integer follows algebraically; whether half-integer representations require an extra explanation of $SU(2)$ versus $SO(3)$ belongs to the later content-development phase.
5. **p. 81:** The pedagogical phrase “$j=1$ (photon spin)” uses a three-state spin-one representation containing $m=0$; the physical helicity subspace of a massless photon requires additional care in an eventual scientific revision.
6. **pp. 85–86:** The definition of associated Legendre functions, the Condon–Shortley phase, spherical-harmonic rotation conventions, and complex conjugation should be checked together. Phase conventions have deliberately not been revised ad hoc.
7. **p. 87:** The source states the coupled angular-momentum basis is jointly labeled by four commuting operators; technical subtleties of reducible representations and degeneracy should be assessed during a book-wide mathematical review.
8. **pp. 92–96:** The source's account of locality, predetermination and the historical Bell inequality is translated in its original framing. Later modernization should distinguish deterministic hidden outcomes, measurement independence, locality assumptions, no-signaling and interpretations of measurement without conflating them.

## Completion checks

- [x] Original Chinese pages 62–96 each inspected as text and rendered page images.
- [x] Seven source headings kept in original order, with all corresponding page ranges mapped.
- [x] Equations, examples, matrices, and the eight-row Bell count table reconstructed.
- [x] LaTeX diagram reconstructions included.
- [x] Chapter 3 added to the existing `book` root and the cumulative notation list updated.
- [x] Local XeLaTeX compilation successful; total PDF 78 pages, including Chapters 1–3 and front matter.
- [x] A visual inspection of the 24 pages of Chapter 3 conducted (page contact sheets saved locally).
- [x] LaTeX overflow messages resolved.
- [ ] Final instructor-approved line-by-line bilingual comparison and physics audit — still required before marking **frozen translation**.
- [ ] GitHub Actions cloud build and PDF commit — mark after remote verification.

**Editorial commitment:** This file records first-pass faithful translation work. Do not insert Berry-phase additions, a new density-matrix pedagogy, or extended topological/QML teaching into the Chapter 3 translation baseline.

## Full-book fidelity review: missing diagrams and printed subsection typo (2026-10-16)

- **Viewer pp. 69 and 86:** the same original two-rotation direction diagram appears in the spin and orbital-angular-momentum sections. Both English appearances were missing in the initial version. A shared editable replacement, `figures/two_rotation_axes.tex`, is now included at both locations. The arrows identify successive rotations and the angles `\alpha,\beta`.
- **Viewer p. 95:** the original schematic showing the singlet measurement directions and angle `\theta_{ab}` was absent. `figures/spin_direction_geometry.tex` now restores it, distinct from the already present three-ray Bell arrangement on p. 96.
- **Viewer p. 70:** the Euler-angle source gives three successive, geometrically different stages (a), (b), (c). The first English line drawing repeated essentially the same axes three times. It has been redrawn to distinguish the three stages in `chapters/ch03/02_spin.tex`.
- **Viewer pp. 94 and 96:** the original contains two separately headed topics each printed with `3)` (quantum-mechanical comparison and experiment). Both distinct topics remain headings in English; the *second* is labeled `4)` to correct the source's evident repeated-number typo.

These are figure and source-structure fidelity repairs. Review file `editorial/FULL_BOOK_FIDELITY_REVIEW_2026-10-16.md` describes the evidence and remaining proofing limitations.