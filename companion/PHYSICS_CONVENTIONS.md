# Experimental Physics and Notation Conventions

**Working authority:** current `main.tex` and [notation policy](../editorial/NOTATION_POLICY.md), [2026-10-16 nine-chapter revision log](../editorial/REVISION_2026-10-16_TOPOLOGY_QML.md). This record is intentionally focused on conventions that can silently reverse or distort a plotted prediction.

## State and measurement
- Normalize every quantum state before sampling outcomes. Pauli projectors `P_{n,±}=(I±n·sigma)/2` give `P(n+|m+)=(1+n·m)/2`.
- For selected outcomes, calculate **joint survival** as the product of conditional probabilities along the chosen branch; normalize the state after every selected outcome.
- For nonselective measurement, sum the branches at density-operator level. A POVM `E_j=M_j†M_j` sets probabilities, while an instrument fixes outcome-conditioned state transformations. Different valid instruments can share a POVM.
- For bipartite states, define basis order before computing a partial trace; test with product states and Bell states. A reduced mixed state can arise from a pure entangled composite state.

## Unitary dynamics and oscillator
- State and Heisenberg operator transformations must yield matching expectations.
- With `a` for a harmonic oscillator, coherent `|alpha>` evolves with `alpha(t)=alpha e^{-i omega t}`. Verify `<x>=sqrt(2 hbar/(m omega)) Re alpha(t)` and stationary coherent-state variances. Indicate when Fock truncation is used.
- For WKB, check validity away from turning points and use exact numerical solutions for meaningful comparisons. Identify classically allowed and forbidden intervals and connection-formula domains.

## Berry, gauge and topological models
- Current text defines Berry connection using `A=i<u|∂u>`; changing eigenvector phase by `exp(i chi)` shifts `A` by minus the gradient of `chi`.
- SSH current convention: `a_n=(1/sqrt(N)) sum_k exp(+ikn) a_k`, `q(k)=t1+t2 exp(-ik)`. With the textbook's `q*` phase orientation, `nu=+1` when `t2>t1>0` and zero for the reverse inequality. Close the gap at equality and mark winding undefined there.
- Open-chain SSH edge eigenmodes depend on termination and finite size; test chiral pairing and localization, and show possible edge-level hybridization.
- In the lower-band QWZ convention currently recorded, the Chern number phases for increasing `M` are `0,+1,-1,0` separated by `M=-2,0,2`; validate numerical discretization and gap closures. The notes choose positive `(1/2)n·(∂x n × ∂y n)` for lower-band curvature with `A=i<u|∂u>`.
- When plotting Zak phase, explicitly state unit-cell/gauge conventions and quantization assumptions. Use gauge-consistent products of overlaps for numerical phase rather than arbitrary eigenvector phases.

## Exchange statistics
- Bosonic ladder factors are `sqrt(n)` and `sqrt(n+1)`.
- Fermionic operators follow the ordered single-particle orbital basis in Chapter 6; sign equals the parity from previously occupied lower-index orbitals. Test anticommutators and state norms on small Fock spaces.
- The unsymmetrized two-body Hamiltonian has factor `1/2` with operator order `a†_i a†_j a_l a_k` following the current author's convention. Test symmetry and Hermiticity in a tiny basis before animating.

## Relativity and QML
- Electromagnetic minimal coupling uses `pi=p-(q/c)A` with `hbar,c` explicit and metric signature `(+---)`. Check the nonrelativistic Dirac/Pauli spin term and negative relativistic `p^4` correction in textbook units.
- `R_mu(theta)=exp(-i theta sigma_mu/2)` is the QML rotation convention. For a generator with the matching two-point spectrum, the parameter shift is ±π/2 with coefficient 1/2. Test against direct analytic or high-accuracy numerical derivatives.
- Finite ±1 shots give estimator variance `(1-f²)/N_shots` for independent samples. Show shot noise explicitly when estimating gradients or training.
- Quantum-kernel Gram matrices should be Hermitian positive semidefinite within numerical tolerance. Toy training results do not imply quantum advantage.

## General verification

All derived quantities must be compared against an independent known limit or a separate numerical calculation. Explicitly record random seeds for statistical illustrations, finite cutoffs, time-step/sampling convergence and numerical tolerances. Every figure must label physical quantities in English. Do not infer general physical validity from a correct plot at one parameter setting.
