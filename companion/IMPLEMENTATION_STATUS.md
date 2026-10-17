# Interactive Companion — Status and Remaining Work

**Updated:** 2026-10-17. **Scope:** 9 English graduate textbook chapters, 62 scientifically motivated interactive learning questions. This is an implementation record, not an assessment of students' mastery.

## Working release

Nine substantial, independently testable browser laboratories are committed, one in each textbook chapter.

| Chapter | Working laboratory | Question to investigate |
|---|---|---|
| Ch 1 | [Cascaded Stern–Gerlach](labs/IC-01-03/index.html) | Why can an intermediate spin measurement change the final statistics? |
| Ch 2 | [Harmonic oscillator and coherent states](labs/IC-02-03/index.html) | Why does a coherent-state wave packet move without spreading? |
| Ch 3 | [Entanglement and partial trace](labs/IC-03-04/index.html) | Why can a pure composite state have a mixed subsystem? |
| Ch 4 | [Avoided crossings and perturbation theory](labs/IC-04-01/index.html) | When does ordinary perturbation theory cease to be accurate? |
| Ch 5 | [Partial-wave interference and unitarity](labs/IC-05-05/index.html) | How do individual phase shifts combine into the total cross section? |
| Ch 6 | [Fermionic creation and ordering signs](labs/IC-06-04/index.html) | Why does exchanging two fermionic creation operators change a sign? |
| Ch 7 | [Klein–Gordon versus Dirac](labs/IC-07-02/index.html) | Why does linearizing relativistic dispersion require matrix algebra? |
| Ch 8 | [SSH bulk, winding and edges](labs/IC-08-02/index.html) | How do hopping amplitudes govern gap closure and topological winding? |
| Ch 9 | [Parameter-shift training](labs/IC-09-03/index.html) | Can a quantum circuit be trained using shifted expectation values? |

Each working unit combines a physically specified mathematical model, quantitative outputs that change under user controls, explanatory derivations, guided investigations, one formative self-check, links to manuscript source, and an accessible sequence link to neighboring chapters. The status `implemented` means that the web page and model are present and the automated numerical checks and browser first-render workflow are configured. Human pedagogical assessment and accessibility review are still in scope.

## Overall inventory

| Textbook chapter | Catalog topics | Implemented | Remaining |
|---|---:|---:|---:|
| 1. Basic Concepts | 9 | 1 | 8 |
| 2. Quantum Dynamics | 11 | 1 | 10 |
| 3. Angular Momentum Theory | 8 | 1 | 7 |
| 4. Approximation Methods | 5 | 1 | 4 |
| 5. Scattering Theory | 5 | 1 | 4 |
| 6. Quantum Many-Body Systems | 6 | 1 | 5 |
| 7. Relativistic Quantum Mechanics | 4 | 1 | 3 |
| 8. Topological Condensed Matter Physics | 7 | 1 | 6 |
| 9. Quantum Neural Networks and Machine Learning | 7 | 1 | 6 |
| **Total** | **62** | **9** | **53** |

Of the **22** proposed classroom-linked laboratories, **7** are implemented and **15** are pending. The other **38** remaining entries are extension/self-study topics. This counts distinct catalog entries, while a single implemented unit may already discuss ideas also represented by another planned topic. Deliberate separate labs still require their own teaching path and testing.

## Next priority — remaining classroom-linked laboratories (15)

- **IC-01-01 · Complex amplitude and phase** — How do complex amplitudes combine before probabilities are formed?
- **IC-01-02 · Two-by-two eigenproblem** — How do the eigenvectors of a Hermitian matrix depend on its entries?
- **IC-01-04 · Born rule and projectors** — How are probabilities and state updates computed from projectors?
- **IC-01-05 · Measurement axes and basis changes** — Why do matrix components change while physical predictions remain invariant?
- **IC-01-08 · Tensor-product index laboratory** — How are two small Hilbert spaces combined without losing track of indices?
- **IC-02-01 · Spin precession in a field** — How does a two-level state evolve in a constant magnetic field?
- **IC-02-08 · Berry phase on the Bloch sphere** — How does a cyclic adiabatic path accumulate a geometric phase?
- **IC-03-03 · Pure states and statistical mixtures** — Can two different ensembles represent the same density operator?
- **IC-03-05 · POVM effects versus instruments** — What additional information specifies the postmeasurement state?
- **IC-06-01 · Permutation and exchange** — What changes when two indistinguishable particles are exchanged?
- **IC-06-03 · Bosonic Fock occupation rules** — Why does bosonic creation produce a square-root occupation factor?
- **IC-07-01 · From Schrödinger to Pauli** — Where does spin enter the Pauli Hamiltonian with electromagnetic coupling?
- **IC-08-03 · SSH boundary termination and symmetry** — When do edge states survive a boundary or symmetry perturbation?
- **IC-08-04 · Zak phase and Berry gauge** — Which aspects of the Zak phase depend on gauge and unit cell?
- **IC-09-01 · Parameterized quantum circuit output** — How do rotation parameters turn measurements into model predictions?

These constitute the next substantial development pass. Recommended clustering:

1. **Mathematical foundations**: IC-01-01, 01-02, 01-04, 01-05, 01-08. Aim for genuine amplitude/basis calculations, eigenvector geometry, Born predictions, and tensor-index intuition.
2. **Dynamics and geometry**: IC-02-01, 02-08. Connect exact precession with geometric Berry phases and explicit gauge choices.
3. **Measurement as a physical process**: IC-03-03 and 03-05. Develop ensemble purity and POVM/instrument backaction, cross-checking the existing entanglement unit.
4. **Identical particles**: IC-06-01 and 06-03. Connect permutation symmetry to boson occupation and the implemented fermionic sign lab.
5. **Spin, topology and learning**: IC-07-01, 08-03, 08-04 and 09-01. Bridge Dirac to Pauli, bulk to boundaries and Berry/Zak phases, and parameterized circuits to trainable models.

These 15 topics are the logical teaching-priority set. Their depth should match the existing examples, rather than being reduced to brief sliders or decorative plots.

## Following pass — 38 independent-study extensions

The other **38** pending catalog topics cover WKB and turning points; path integrals and phases; Aharonov–Bohm and Berry/gauge physics; spin rotations and angular-momentum addition; Bell and teleportation; variational, resonant and interaction-picture approximations; scattering Green functions and Born/T-matrix methods; two-body Fock operators; Dirac spinors and low-energy limits; Chern phases and Thouless pumping; quantum kernels and trainability.

Each should receive an exact mathematical specification, standalone explanation, at least one scientifically diagnostic interactive display, a physical limiting-case check and references to corresponding equations. When numerical approximation is indispensable, add convergence tests and clear validity windows.

## Teaching and release quality still outstanding

- **Cross-chapter content coherence:** independently review symbols and sign conventions, mathematical prerequisites, source equation references, accuracy of displayed claims, and conceptual transitions. Compare interactive physics with the current nine-chapter textbook.
- **Human visual and accessibility review:** check mobile and desktop geometry, labels, contrast, keyboard controls, screen-reader descriptions, responsive layout, and interaction correctness after changing controls (the current automated browser test verifies first render).
- **Student learning:** trial representative tasks, evaluate difficulty and timing, revise derivations based on observed misunderstandings, and align the 22 core experiments with the provisional 48 × 40-minute course route.
- **Independent numerics where warranted:** high-precision model cross-checks and physical edge cases, plus optional notebooks with reproducible calculations. All first-wave modules have automated model checks; advanced models will need their own convergence and numerical-stability analysis.
- **Hosting and rights:** private Codespaces preview is configured. Public GitHub Pages hosting awaits permission decisions and careful separation of original interactive materials from protected manuscript content; update the PDF cover link after a stable public or appropriately access-controlled address is chosen.

## How to run and validate

Use [the nine-chapter directory](index.html), running from repo root with `python3 -m http.server 8000`, or start a private [GitHub Codespace](https://github.com/codespaces/new?hide_repo_select=true&repo=1410589769&ref=main) and open port 8000 at `/companion/`.

Run `node scripts/test_companion_models.cjs`, `python3 scripts/check_companion_catalog.py`, `python3 scripts/check_companion_pages.py`, and `python3 scripts/check_companion_browser.py` where headless Chromium is installed. The GitHub Actions workflow [check-companion.yml](../.github/workflows/check-companion.yml) runs these automatically.
