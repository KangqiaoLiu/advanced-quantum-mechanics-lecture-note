# Four Gold-Standard Calibration Laboratories

**Status:** specifications prepared (2026-10-17). **All four are planned; no simulations are claimed to be working.**

These four laboratories deliberately stress different requirements: sequential quantum measurement, dynamical state-space visualization, topological spectra and invariants, and trainable numerical quantum circuits. All student-facing lab copy and figures must be English. Each must graduate from planned/prototype to implemented only after the numerical, mathematical and visual checklists in the master blueprint pass.

## IC-01-03 — Why does an intermediate Stern–Gerlach measurement change a later result?

**Current notes:** `chapters/ch01/01_stern_gerlach.tex`; `chapters/ch01/04_measurement.tex`; later `chapters/ch03/03a_quantum_measurement.tex`.

- **Controls:** initial spin direction; three analyzers' axes; selected/ignored output for each intermediate measurement; analytic distribution vs repeated finite-shot trials; seeded repeat button.
- **Visible experiment:** three analyzer stations, state before/after each selected outcome, surviving count and conditional/joint probability table. Interpret an unselected projective measurement using the dephasing map `rho ↦ Σ_s P_s rho P_s`; distinguish it from physically bypassing the device.
- **Benchmark:** for a prepared `|z+>` state and selected `x+` then `z+`, conditional probabilities are `1/2` and `1/2`; joint survival probability is `1/4`. General pure-spin transition: `P(n+|m+)=(1+n·m)/2`. Derive these with Pauli projectors.
- **Concept challenge:** choose a sequence whose last measurement matches the first direction but no longer has certainty. Explore measurement without postselection.
- **Boundary/validation:** identity and repeated same-axis measurements, antiparallel axes, every selected outcome, loss of total beam intensity through selection, conservation of probability with nonselective branches.
- **Presentation:** clean spatial experiment, selection badges and outcomes, compact formula card and collapsible state-update derivation. Sampling results must display finite-shot uncertainty rather than impersonating exact probabilities.

## IC-02-03 — Why does a coherent-state wave packet follow a classical orbit without spreading?

**Current notes:** `chapters/ch02/03_harmonic_oscillator.tex`; `chapters/ch02/04_coherent_states.tex`; `chapters/ch02/04a_squeezed_states.tex`.

- **Controls:** complex displacement `alpha` (magnitude and phase), oscillator frequency, evolution time, state selector (Fock / coherent / squeezed); optional squeeze parameter and phase.
- **Visible experiment:** oscillator potential and `|psi(x,t)|²`; phase-space centroid and uncertainty ellipse; number occupation histogram and mean position/momentum; representation options showing Heisenberg-picture expectation values.
- **Benchmarks:** `alpha(t)=alpha(0)e^{-i omega t}` (with the global phase treated consistently); `<x>=sqrt(2 hbar/(m omega)) Re(alpha(t))`; coherent-state `Δx²=hbar/(2m omega)` and `Δp²=hbar m omega/2`; `<n>=|alpha|²`. Check normalization and time invariance of energy expectation.
- **Concept challenge:** compare stationary number-state density, coherent translation, squeezed ellipse rotation and quadrature uncertainties; derive one Ehrenfest equation.
- **Boundary/validation:** vacuum at `alpha=0`, large displacement, finite-basis truncation warnings, squeezed-state covariance product and variance under symplectic rotation. Avoid claiming a finite Fock truncation is exact without an error bound.
- **Presentation:** synchronized density/phase-space views with short, explicit axes and model units; animation pause/step and reduced-motion equivalent.

## IC-08-02 — How do SSH winding and edge states emerge from a dimerized chain?

**Current notes:** `chapters/ch08/01_crystals_bloch.tex`; `chapters/ch08/02_ssh_bulk.tex`; `chapters/ch08/03_edge_states.tex`; related Berry `chapters/ch02/07a_berry_phase.tex`.

- **Controls:** `t1`, `t2`, number of cells, periodic/open boundary choice, terminated bond convention and optional onsite perturbation; inspect selected eigenstate.
- **Visible experiment:** real-space bond diagram, Bloch bands `E±(k)`, complex loop `q(k)` with winding, full open-chain spectrum and selected-eigenstate probability by site; finite-size edge localization/splitting.
- **Benchmarks:** with the current textbook convention `q(k)=t1+t2 exp(-ik)`, use phase of `q*(k)` for `nu=+1` when `t2>t1>0`; `nu=0` when `t1>t2>0`; bulk gap `2|t1-t2|` in the positive real case. Winding is undefined at `t1=t2` because the bulk gap closes.
- **Concept challenge:** predict the phase on either side of the gap closure; connect the Berry/Zak phase to a discrete-gauge-consistent overlap calculation; explain which edge termination actually supports localized modes.
- **Boundary/validation:** finite chains exhibit edge hybridization and possible energy splitting; explicitly distinguish chiral-symmetry-preserving disorder from onsite terms that break it. Confirm eigenvalue pairing for chiral chains and compare open/periodic limits. State Fourier and unit-cell conventions in the controls.
- **Presentation:** synchronized five-view science page, with clear plotted units and a compact “assumptions” strip; avoid assigning an integer at the singular gap-closing point.

## IC-09-03 — Can a parameter-shift rule train a measured quantum circuit?

**Current notes:** `chapters/ch09/01_ml_basics.tex`; `chapters/ch09/02_training_kernels.tex`; `chapters/ch09/04_worked_models.tex`.

- **Controls:** input datum/encoding, one- and two-qubit circuit presets, parameter `theta`, observable, target, learning rate, iteration count, ideal/shot-based estimates with selectable shot number and fixed seed.
- **Visible experiment:** circuit and rotations, expectation output, explicit loss landscape, three measured values at `theta` and `theta±π/2`, gradient arrow, one-step and multi-step training trajectories; compare ideal versus shot-based updates.
- **Benchmark:** for `R_y(theta)|0>` with `Z` readout, `f(theta)=cos(theta)` and `f′(theta)=-sin(theta)=[f(theta+π/2)-f(theta-π/2)]/2`. For a specified `L(theta)=(f(theta)-y)²/2`, verify `dL/dtheta=(f-y)f′` and the exact next update. Include independent finite-difference comparison at nonstationary points.
- **Concept challenge:** choose target and starting point, predict gradient direction and test convergence; compare shots and gradient error without conflating sampling fluctuation with true model variation.
- **Boundary/validation:** parameter-shift coefficients depend on the relevant gate generator, optimization depends on objective and initial condition, convergence is not guaranteed, and a trained toy circuit alone does not establish quantum advantage. For independent ±1 shots, variance of sample mean is `(1-f²)/N`.
- **Presentation:** measured-expectation plot and parameterized gate diagram, loss curve updated immediately, mathematical update presented alongside observed circuit outcomes.

## Common graduation criterion

For **each** of the four, record:
(1) exact model/conventions; (2) fixed analytic cases; (3) tests for normalization, signs, conservation and limits; (4) a usable interactive page; (5) full derivation link; (6) predict/observe/explain questions and answers; (7) static alternative; (8) narrow/mobile and desktop visual inspection. Document any numerical truncation, approximation or uncertainty explicitly.
