# Instructor-directed supplementary content: integration record

**Date:** 2026-10-16. **Status:** source-informed, compiled content revision in the canonical English textbook. The user expressly established that the four 2024 handwritten handouts were the actual basis of teaching identical particles and second quantization, and authorized complete replacement of the older Chinese-source chapters.

## Inputs and active placements

| Source | Actual input scope | Location in new manuscript | Treatment |
|---|---|---|---|
| Instructor handwritten **Berry phase.jpg** on the original Aharonov–Bohm / magnetic monopole facing pages | Two-page photographed handwritten derivation; instantaneous eigenvectors, adiabatic ansatz, dynamic/geometric phases, Berry connection, gauge change, curvature and closed loops | `chapters/ch02/07a_berry_phase.tex`, directly after AB effect | Reconstructed as a full derivation, defining a parameter-space path and distinguishing electromagnetic vector potential from Berry connection |
| Instructor's **10-minute squeezed-state teaching plan** | Requested position immediately after coherent states; no separately uploaded source PDF | `chapters/ch02/04a_squeezed_states.tex` | Compact quadrature and squeezing-operator introduction, Bogoliubov transformation, variance and a two-ellipse TikZ drawing; optional differential derivation |
| **D_K.Liu-15-25.pdf** | PDF excerpt (11 pages, original pp. 15–25), unitary/open/composite dynamics, projection, measurement interactions, POVM, mixed probe, concrete two-qubit example | `chapters/ch03/03a_quantum_measurement.tex`, immediately following density-operator section | Reuses earlier unitary/density/projective definitions by reference; adds tensor product/partial trace, meter dynamics, Kraus and POVM effects, instrument distinction, general initial probe coefficients, projective/unsharp limits |
| **Quantum Computation and Quantum Information-60-62.pdf** | Three-page source excerpt (the printed book pages 26–28) from Nielsen–Chuang, Bell states and teleportation | `chapters/ch03/08_quantum_teleportation.tex`, after Bell-inequality discussion | Newly written derivation of Bell-state gate preparation, CNOT/Hadamard state evolution, outcome table, two classical bits, Bob corrections, no-signalling/no-cloning and circuit drawn with TikZ |
| **1. 1 Identical particles, many-particle states, and permutation symmetry.pdf** | Instructor's handwritten 2024-01-10 material, 5 pages | `chapters/ch06/01_permutation_symmetry.tex` | Exchange group, Hamiltonian/observable symmetry, S2 and S3 including 2D standard irreps, invariant subspaces and exact distinction between group-theoretic sectors and physical Bose/Fermi statistics |
| **1.2 Completely symmetric and antisymmetric states.pdf** | Instructor's handwritten 2024-01-11 material, 2 pages | `chapters/ch06/02_symmetrized_states.tex` | Projectors, proofs, $N!$ factors, repeated Bose orbital multiplicities, fermion vanishing and Slater determinants |
| **1.3 Bosons.pdf** | Instructor's handwritten 2024-01-11 material, 6 pages | `chapters/ch07/01_bosons.tex` | Fock direct sum, normalized states, operator actions and CCR, total occupation, matrix-element proof of one-body and two-body expressions |
| **1.4 Fermions.pdf** | Instructor's handwritten 2024-01-12 material, 5 pages | `chapters/ch07/02_fermions.tex` | Ordered Fock states, Jordan–Wigner signs, CAR, normal-ordered Hamiltonian; preserved the matrix index and order conventions |

The instructor's handwritten references and the Nielsen–Chuang excerpt are **reference-only**, and their source image/PDF files have not been uploaded into the GitHub repo. The new text is an independent English exposition and derivation informed by the sources. Chapter numbers remain 1–8. The original translated Chapters 6–7 have been removed from the *active* book inputs and from the current source tree; their exact earlier files remain recoverable on the pre-expansion version branch.

## Deliberate avoidance of redundancy

- Chapter 2 squeezed states follow coherent states without repeating the coherent-state expansion or oscillator Hamiltonian. The blackboard route fits ~10 minutes; the optional algebra is retained for self-study.
- Chapter 2 Berry phase immediately follows the AB effect. The original magnetic monopole passage follows Berry phase as a separate section; no original monopole material was discarded.
- Chapter 3 measurement relies on the previous density-operator and projective-measurement sections; those definitions are briefly recalled rather than redeveloped. The new material emphasizes system–meter dynamics, selective/nonselective instruments, and the qubit-probe example.
- Chapter 3 teleportation uses the earlier density-matrix and entanglement concepts without duplicating Bell inequalities or a separate quantum-computing overview.
- Chapter 6 provides *only* permutation, symmetry and many-particle basis foundations. Chapter 7 derives boson and fermion occupation-space operators from the Chapter 6 result; the one/two-body Hamiltonian is established in the Bose case and then reused with an ordering/sign argument for fermions.

## Mathematics and provenance notes

1. **Boson normalization:** the correct normalized Bose symmetrization is $\sum_P P|i_1\ldots i_N\rangle/\sqrt{N!\prod_i n_i!}$. The handwritten source explicitly flagged this repeated-orbital factor as partially unresolved; the derivation has now been supplied.
2. **Permutation representations:** $S_3$ has a two-dimensional standard representation in addition to its trivial and sign representations. The source's observation is retained. Physical boson/fermion selection follows an additional statistical premise; a blanket claim that all abstract $S_N$ eigenstates must have only two possibilities would be mathematically inaccurate.
3. **Fermion signs:** fix an increasing orbital order once and use $(-1)^{\sum_{j<i}n_j}$ for creation/annihilation; the stated pair-operator ordering is fixed in the whole chapter.
4. **Two-body integral convention:** the prefactor $1/2$ assumes *unsymmetrized* orbital integrals. No additional $1/2$ is introduced through antisymmetrized integrals.
5. **Measurement reference details:** the metered example uses the supplied Hermitian interaction and retains its tunable initial meter amplitudes and interaction angle. The POVM effect for an initially mixed meter is $E_j=\sum_k M_{jk}^\dagger M_{jk}$, and the associated conditional state is $\sum_k M_{jk}\rho M_{jk}^\dagger/p_j$, preserving the physically required order of daggers where the extracted PDF was ambiguous.
6. **Teleportation:** the Pauli X/Z corrections are written as the preexisting book's numerical Pauli matrices $\sigma_x,\sigma_z$ to avoid reuse of the oscillator quadrature symbol $\hat X$. The Hadamard gate is locally $\hat U_{\mathrm H}$, distinct from Hamiltonian $\hat H$.
7. **Berry geometry:** the original AB interaction uses Gaussian electromagnetic conventions with factors $e/(\hbar c)$; Berry phase is an integral in Hamiltonian parameter space. Its connection has gauge change $\mathcal A' =\mathcal A+\nabla\beta$ for $|n'\rangle=e^{-i\beta}|n\rangle$.

## Verification

- Local XeLaTeX compiled the eight-chapter expanded manuscript (PDF now **138 physical pages**), retaining the one-page global notation table.
- `python scripts/check_notation_consistency.py --pdf main.pdf` passed. The printed List of Notation remains on physical PDF page 4, followed by Chapter 1 on page 5.
- `python scripts/check_content_additions.py` passed **14 deterministic algebra checks** on group relations, fermionic CAR, measurement completeness and special limits, qubit-probe signs, teleportation, Berry gauge/curvature and symplectic squeezing. These are spot checks rather than exhaustive scientific proofs.
- The original translated eight-chapter material remains recoverable from Git history; a dedicated pre-content-expansion branch is used for the exact earlier snapshot.

## Reference and publication policy

The teaching handouts are primary pedagogical references. Source-derived content retains this provenance in file comments and this record. The external Nielsen–Chuang textbook excerpt is a reference, not permission to reproduce lengthy copyrighted passages or its original diagram verbatim. The rewritten circuit is authored directly from its mathematical logic. The book currently remains private; attribution and permissions must be settled before any public release of source-derived lecture notes.

## Cloud build and preservation

GitHub Actions [run 38909682908](https://github.com/KangqiaoLiu/advanced-quantum-mechanics-lecture-note/actions/runs/38909682908) completed successfully, including the whole-book notation guard, **14 supplementary mathematical checks**, XeLaTeX, artifact upload and automatic commit of the expanded PDF. The remote `pdf/advanced-quantum-mechanics.pdf` was verified after publication (Git blob `ce03b377d81032066a7d46e838683c5962ab854f`, 599,818 bytes); the local edition has **138 physical pages**. The pre-supplement snapshot is preserved at `textbook/pre-instructor-supplements-2026-10-16`.
