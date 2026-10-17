# Interactive Physics Laboratories — Nine-Chapter Release

Each implemented module contains an independent `model.js` with a testable physical model, an `index.html` with full English teaching explanations and diagrams, and a `lab.js` for live controls and plots. Shared plotting and controls: `../assets/lab-core.js` and `../assets/lab.css`. The first four labs are detailed in [PROTOTYPES.md](../PROTOTYPES.md).

| Chapter | Interactive laboratory | Physics |
|---|---|---|
| 01 · Basic Concepts | [Sequential Stern–Gerlach](IC-01-03/index.html) | Postselection · Density operators · Exact and finite-shot probabilities |
| 02 · Quantum Dynamics | [Harmonic oscillator](IC-02-03/index.html) | Coherent and squeezed states · Wave packets · Wigner phase space |
| 03 · Angular Momentum / Composites | [Entanglement and partial trace](IC-03-04/index.html) | Schmidt probabilities · Reduced entropy · Joint correlations |
| 04 · Approximation Methods | [Avoided crossings](IC-04-01/index.html) | Perturbation breakdown · Exact energies · Eigenvector mixing |
| 05 · Scattering Theory | [Partial-wave scattering](IC-05-05/index.html) | Angular interference · Cross sections · Optical theorem |
| 06 · Many-Body Systems | [Fermion ordering signs](IC-06-04/index.html) | Fock occupations · Parity factors · Anticommutators |
| 07 · Relativistic QM | [Klein–Gordon and Dirac](IC-07-02/index.html) | Relativistic spectra · Probability current · Low-energy limit |
| 08 · Topological Matter | [SSH bulk and boundaries](IC-08-02/index.html) | Winding · Gaps · Exact finite-chain edge eigenstates |
| 09 · Quantum ML | [Training quantum circuits](IC-09-03/index.html) | Parameter shift · Loss optimization · Measurement noise |

The full 62-item roadmap lives in [catalog.json](../catalog.json). Independent model tests and static checks are under `../../scripts/` and run on every relevant GitHub Actions build. Implemented page statuses should reflect working tested experiments only.
