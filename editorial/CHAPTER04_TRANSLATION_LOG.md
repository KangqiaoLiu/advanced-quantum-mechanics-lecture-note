# Chapter 4 translation ledger — Approximation Methods

**Date:** 2026-10-16. **Phase:** T, faithful first-pass source translation. **Chinese source:** supplied 186-page PDF. **Source viewer pages:** 97–120, **plus the opening of 121**. **English:** `chapters/ch04/01_stationary_perturbation.tex` through `07_interaction_picture.tex`.

## Boundary and coverage

**Important source boundary:** PDF viewer page **121** contains the end of the interaction-picture Dyson expansion, the definition of time ordering, and the general time-ordered exponential-series formula, **followed by** the Chapter 5 heading and the beginning of scattering theory. The entire upper Chapter 4 passage on p. 121 is included in `07_interaction_picture.tex`; the lower Chapter 5 material is reserved for Chapter 5. Therefore the original “Chapter 4 = pp. 97–120” inventory in early plans is incomplete by the top of one page. PDF chapter-internal printed numbering restarts for several blocks; PDF viewer page numbers are authoritative.

| PDF viewer page | Source content translated | File |
|---|---|---|
| 97 | Introductory Schrödinger equation; why approximation is necessary; stationary perturbation series and zeroth/first orders | `01_stationary_perturbation.tex` |
| 98 | Second-order equations; distinction of nondegenerate/degenerate spectra; first-order projection | `01_stationary_perturbation.tex`, `02_nondegenerate_perturbation.tex` |
| 99 | Normalization, first-order phase freedom, state/energy corrections; start of second order | `02_nondegenerate_perturbation.tex` |
| 100 | Second-order energy and wavefunction; convergence criterion; discrete spectrum and degeneracy restrictions | `02_nondegenerate_perturbation.tex` |
| 101 | Charged oscillator in an external field; first-order energy and state corrections | `02_nondegenerate_perturbation.tex` |
| 102 | Oscillator second order, coordinate representation, completion of the square | `02_nondegenerate_perturbation.tex` |
| 103 | Exact displaced-oscillator solution and comment on second-order exact energy | `02_nondegenerate_perturbation.tex` |
| 104 | Degenerate subspace basis, general superposition, secular determinant | `03_degenerate_perturbation.tex` |
| 105 | Degeneracy removal; 2×2 secular roots; hydrogen Stark example starts | `03_degenerate_perturbation.tex` |
| 106 | n=2 four-state hydrogen Stark matrix and level splitting | `03_degenerate_perturbation.tex` |
| 107 | Relativistic expansion of kinetic energy and first-order matrix for hydrogen | `03_degenerate_perturbation.tex` |
| 108 | Radial Coulomb matrix elements, diagonal shifts, spin–orbit example begins | `03_degenerate_perturbation.tex` |
| 109 | Coupled angular momenta, fine-structure split, start of variational principle | `03_degenerate_perturbation.tex`, `04_variational_method.tex` |
| 110 | Variational stationarity and helium effective-charge worked example | `04_variational_method.tex` |
| 111 | Helium perturbative alternative, comparison with experimental energy | `04_variational_method.tex` |
| 112 | Lee et al. strong-coupling scheme for Yukawa potential and equations in 1/g² | `05_strong_coupling.tex` |
| 113 | Regularity boundary conditions and strong-coupling energy; time-dependent perturbation introduction | `05_strong_coupling.tex`, `06_time_dependent_perturbation.tex` |
| 114 | Time-dependent amplitudes, transition equations, perturbation matrix elements | `06_time_dependent_perturbation.tex` |
| 115 | First-order transition amplitudes, sinusoidal driving | `06_time_dependent_perturbation.tex` |
| 116 | Resonance, long-time delta function, transition rate, absorption/emission diagram, impulse example begins | `06_time_dependent_perturbation.tex` |
| 117 | Impulse-excited hydrogen transitions, dipole selection rule and completeness | `06_time_dependent_perturbation.tex` |
| 118 | Total transition probability and survival probability | `06_time_dependent_perturbation.tex` |
| 119 | Schrödinger/Heisenberg/interaction picture correspondence | `07_interaction_picture.tex` |
| 120 | Interaction-picture equations, integral equation, Dyson iteration | `07_interaction_picture.tex` |
| 121 (upper) | Time-ordered product and symmetric Dyson expansion; **Chapter 4 ends here** | `07_interaction_picture.tex` |

## Minimal repairs to clear source issues

1. **p. 115, sinusoidal transition amplitude.** The source writes the integrated first-order amplitude with a positive $F_{mn}/\hbar$ factor following an integral $F_{mn}/(i\hbar)\int e^{i\Omega t}\,dt$. Since $1/(i\hbar)\times 1/(i\Omega)=-1/(\hbar\Omega)$, the amplitude has an **overall minus sign**. The English equation carries that minus. The subsequent transition probability is unchanged by it.
2. **p. 117, orbital angular recurrence.** The printed $\cos\theta\ket{lm}$ recurrence has a negative coefficient for the $\ket{l-1,m}$ term. With the chapter's standard spherical-harmonic phase conventions, multiplication by $\cos\theta$ yields a **positive** coefficient. The English recurrence displays a plus. The resulting $\Delta l=\pm1$ selection rule is unchanged.
3. **pp. 98–100, order superscripts and bra–ket placement.** Superscripts identifying the unperturbed bra and corrected ket are positioned explicitly inside the Dirac inner product in English LaTeX; this disambiguates the source's stacked superscripts without changing the calculation. The purely imaginary parallel first-order component is set to zero under the phase choice made by the source.
4. **p. 110, helium trial energy.** The source prints the quadratic in $Z$ with an external **negative** $e^2/(2a_0)$ factor and coefficients $(-2Z^2+27Z/4)$; the mathematically equivalent English form $(2Z^2-27Z/4)e^2/(2a_0)$ gives $Z_0=27/16$ and negative $E_0$. This is an algebraic rearrangement, not a new correction.
5. **p. 116, absorption/emission figure.** Reconstructed the two-level absorption/emission lines and transition arrows with editable TikZ and English labels. The figure communicates the same two transitions; small visual geometry differences may be assessed at final visual proof.
6. **p. 121, chapter-ending continuation.** The final time-ordering formulas were recovered from p. 121 even though the earlier source inventory ended at p. 120. This prevents a missing final derivation. No scattering material from the lower part of p. 121 was included.

## Physics issues flagged for Phase R, faithfully retained or minimally annotated

1. **p. 100:** The source describes the smallness criterion $|H_{in}^{(1)}|\ll|E_n^{(0)}-E_i^{(0)}|$ as an absolute necessary convergence condition. This is an informal perturbative adequacy criterion and the continuous-spectrum discussion is too sweeping to stand as a general theorem. Retained for Phase T.
2. **pp. 105–106:** The $n=2$ Stark matrix depends on explicit hydrogen orbital phases and the definition of $a_0$. The source uses $H_{12}^{(1)}=-3e\mathcal E a_0$; the English baseline reproduces it. Its eigenvalues are phase-independent.
3. **pp. 107–109:** Effective-mass and electrostatic unit conventions switch between $m$, $\mu$ and Coulomb units. The spin–orbit operator shown by the source lacks a clearly stated factor involving $c^{-2}$; verify with the physical derivation and units before a later scientific rewrite. No compensating physical term was inserted in Phase T.
4. **p. 109:** The fine-structure example relates the $n=2$ eightfold spin-inclusive degeneracy to $j$ sectors. The source does not distinguish Coulomb relativistic kinetic correction from the spin–orbit correction in a combined fine-structure treatment; clarify in Phase R.
5. **p. 112–113:** The strong-coupling expansion for the Yukawa potential is faithfully retained. Its powers of $m$ and dimensions in the displayed $g^{-2}$ term, and the regularity/large-$r$ assumptions, need independent verification against the original T. D. Lee method before approval as an exact scientific statement.
6. **p. 116:** The first-order transition amplitude and its resonant $t\to\infty$ distributional limit are formal. Interpreting a divergent single-channel first-order transition probability and a frequency-integrated delta function without a density of states or driving spectral weight requires revision for a realistic application.
7. **pp. 116–118:** The electric pulse is proportional to $\delta(t)$ at the integration boundary $t=0$, where regularization can change a factor of two; the prime on the excited-state sum and omission of continuum states in the hydrogen closure need physical review. In Phase T the source's displayed $W=(e\mathcal E_0 a_0/\hbar)^2$ and its probability interpretation are retained.
8. **pp. 119–121:** The original interaction-picture derivation assumes time-independent $\op H^{(0)}$ and uses the notation $\op U$ both for the full Schrödinger evolution and the interaction-picture propagator. Later versions may distinguish them systematically; first-pass notation remains close to the source.

## Completion checks

- [x] Every original printed section 1–7 appears in the original order.
- [x] Original PDF viewer pages 97–121, stopping at the Chapter 5 boundary, examined as rendered pages and text-extraction aids.
- [x] All source examples included: charged oscillator, doubly degenerate matrix, hydrogen Stark effect, relativistic kinetic correction, spin–orbit coupling, helium variational and perturbative comparisons, Yukawa strong coupling, sinusoidal transitions, pulsed hydrogen transitions, interaction-picture Dyson expansion.
- [x] Seven separate editable LaTeX section files created.
- [x] Title page chapter count, automatic TOC and cumulative printed notation list updated.
- [x] Local XeLaTeX compiled through 97 cumulative pages (includes three previous chapters and front matter).
- [x] PDF visual contact sheets reviewed; no equations overflow the page margins in the final compile log.
- [x] GitHub Actions build and versioned PDF verified: run 38890017083 succeeded; `pdf/advanced-quantum-mechanics.pdf` on `main` updated (451,100 bytes).
- [ ] Instructor final line-by-line bilingual audit and external scientific verification still pending.

**Editorial boundary:** All additions of new results, fuller explanations, literature updates or reorganization are postponed to the instructor-approved revision phase. The translation baseline remains separately versioned.