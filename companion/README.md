# Interactive Companion — Advanced Quantum Mechanics

**Instructor:** Kangqiao LIU · **Status:** nine complete interactive physics laboratories, with at least one working laboratory in each chapter. **62** cataloged scientific questions; **53** are planned extensions.

**[Companion catalog source](index.html)** · **[Complete English lecture notes](../pdf/advanced-quantum-mechanics.pdf)** · **[Remaining work and status](IMPLEMENTATION_STATUS.md)** · **[Master plan](../INTERACTIVE_COMPANION_BLUEPRINT.md)**

This is a graduate-level interactive self-study companion with quantitative experiments, mathematical derivations, interpretation, guided questions, and independent physics verification. Every chapter is now represented by a runnable scientific laboratory.

## Working laboratories by chapter

| Chapter | Working experiment | Student learns to verify |
|---|---|---|
| 01 · Basic Concepts | [Sequential Stern–Gerlach](labs/IC-01-03/index.html) | Postselection · Density operators · Exact and finite-shot probabilities |
| 02 · Quantum Dynamics | [Harmonic oscillator](labs/IC-02-03/index.html) | Coherent and squeezed states · Wave packets · Wigner phase space |
| 03 · Angular Momentum / Composites | [Entanglement and partial trace](labs/IC-03-04/index.html) | Schmidt probabilities · Reduced entropy · Joint correlations |
| 04 · Approximation Methods | [Avoided crossings](labs/IC-04-01/index.html) | Perturbation breakdown · Exact energies · Eigenvector mixing |
| 05 · Scattering Theory | [Partial-wave scattering](labs/IC-05-05/index.html) | Angular interference · Cross sections · Optical theorem |
| 06 · Many-Body Systems | [Fermion ordering signs](labs/IC-06-04/index.html) | Fock occupations · Parity factors · Anticommutators |
| 07 · Relativistic QM | [Klein–Gordon and Dirac](labs/IC-07-02/index.html) | Relativistic spectra · Probability current · Low-energy limit |
| 08 · Topological Matter | [SSH bulk and boundaries](labs/IC-08-02/index.html) | Winding · Gaps · Exact finite-chain edge eigenstates |
| 09 · Quantum ML | [Training quantum circuits](labs/IC-09-03/index.html) | Parameter shift · Loss optimization · Measurement noise |

The 62-item catalog retains its original scientific questions and distinguishes implemented entries from planned extensions. Seven of the nine implemented laboratories belong to the proposed 22-lab classroom-linked route; the approximation and scattering exemplars serve as independent-study extensions.

## GitHub Codespaces preview — private repository

From the repository page, use **Code → Codespaces → Create codespace on main**, or open the [Codespaces creation page](https://github.com/codespaces/new?hide_repo_select=true&repo=1410589769&ref=main). The included development container automatically serves port 8000. Open the forwarded port and visit `/companion/`. Keep the forwarded port **Private**.

For local preview, run `python3 -m http.server 8000` from the repository root and open `http://localhost:8000/companion/`. Serving from the root preserves same-repository links to the lecture-note PDF. No scientific Python packages are required in a student's browser.

## Physics and interface checks

- `node scripts/test_companion_models.cjs` runs reproducible analytic, numerical, normalization and algebraic model benchmarks.
- `python3 scripts/check_companion_catalog.py` verifies source mappings, chapter coverage and implemented page paths.
- `python3 scripts/check_companion_pages.py` checks page structure, assets, controls and accessible figure labels.
- `python3 scripts/check_companion_browser.py` smoke-tests calculations and rendered canvas figures in headless Chrome when available.
- `.github/workflows/check-companion.yml` executes the checks in GitHub Actions on content changes.

Other key references: [laboratory conventions](PHYSICS_CONVENTIONS.md), [teaching routes](LEARNING_PATHS.md), [lab design template](LAB_TEMPLATE.md), [full development blueprint](../INTERACTIVE_COMPANION_BLUEPRINT.md). The four first calibration labs have detailed source specifications in [PROTOTYPES.md](PROTOTYPES.md).

## Publishing and copyright

The full notes and this interactive companion are presently contained in a **private** repository. Github Codespaces preview runs within the user's authenticated session with private ports. A public GitHub Pages deployment requires a deliberate permission/rights decision; publicly distributable original interactive content can be separated from restricted teaching sources. All rights and source attribution follow [COPYRIGHT.md](../COPYRIGHT.md).

## Honest scope of this release

All nine laboratories have working numerical/analytic models and substantive explanations. The remaining 53 scientific questions are registered but awaiting implementation. Browser smoke tests cover first paint and numerical data rendering; human visual inspection on different devices, student comprehension trials, and a deployable rights-reviewed public edition are further work. The 48-period classroom schedule remains provisional.
