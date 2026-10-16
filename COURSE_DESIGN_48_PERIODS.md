# Course Design: 48 × 40-Minute Board-Led Teaching Route

**Working revision:** 2026-10-16, proposed allocation v0.1  
**Status:** Instructor-provided constraints recorded; specific distribution and the two new-topic sequences are **proposals, not yet approved**.  
**Read together with:** [PROJECT_BLUEPRINT.md](PROJECT_BLUEPRINT.md).

## 0. Binding information from the instructor

The following are the instructor's descriptions of the course and **are treated as established design inputs**:

1. Graduate cohort: many students enter with fragile retained preparation in introductory physics, undergraduate quantum mechanics, calculus and linear algebra; many find academic English difficult. Students are reported to depend substantially on AI assistance for study. We should assess actual needs directly, avoid making individual judgments, and produce **English material that can be independently followed from first principles**.
2. Exactly **48 nominal periods**, each **40 minutes**, for **1,920 actual teaching minutes = 32 clock hours**.
3. The instructor teaches by **writing and deriving on the blackboard**; the published note is the primary teaching support. A rapid slide-led exposition would exceed the cohort's pace.
4. A roughly **12-period investment in Chapter 1** has been needed to establish the mathematical vocabulary, particularly complex vector spaces and linear algebra.
5. Previous teaching has omitted formal classroom coverage of the Chinese source's angular momentum chapter, approximation-methods chapter, and scattering-theory chapter. These still belong to the **comprehensive English reference notes**, with potential supplementary self-study pathways.
6. Previously, the many-particle teaching went from the indistinguishability principle through the derivation of the interacting many-body Hamiltonian in second quantization, then stopped.
7. Previous supplement to dynamics: an explicit **2-period Berry-phase derivation after Aharonov–Bohm**.
8. Brief introductory Chapter 1 discussion of **non-Hermitian physics** (approximately 10–20 minutes).
9. Additional teaching before identical particles: **2 periods on the density operator** and **2 periods on quantum measurement theory**.
10. Relativistic quantum mechanics: **4 periods**, culminating in why spin appears naturally in the Dirac formalism rather than surveying all of relativistic quantum theory.
11. The instructor would like to add **topological condensed-matter physics** and **quantum neural networks and machine learning**. The detailed selection and balance are open.
12. Proposed content reductions, relocations and additions should be discussed explicitly. The ambition of the **complete reference notes and optional explorations remains broad**.

**Editorial privacy:** future student-facing course text should not characterize learners using deficits or claims about their abilities. Use neutral phrases such as “mathematical refresher,” “prerequisite review,” and “step-by-step derivation.”

## 1. One intellectual framework, three student-facing and teaching layers

### Layer A — Complete English lecture notes (the authoritative textbook)

- Retain a traceable full account of the **eight original source chapters**, with carefully adapted and verified English proofs, examples and explanations.
- Add the instructor's Berry-phase material, a coherent introduction to non-Hermitian phenomena, density-operator / quantum-measurement material, and substantive new modules on topology and quantum learning.
- Extended parts of angular momentum, approximations, scattering, relativistic symmetry, multi-body methods, and broader machine learning remain legitimate textbook content. Classroom time allocation **does not define the ultimate intellectual scope**.
- Mathematical explanations can include a short accessible lead-in immediately before using complex numbers, eigenproblems, calculus, tensor products, discrete Fourier transforms, etc. The aim is locally self-contained reasoning rather than a separate enormous mathematics preface.
- The lecture notes should remain a single consistent, publishable-in-principle document, not an accumulation of isolated slides.

### Layer B — The 48-period blackboard route (a navigable path **through** Layer A)

- A separate **instructor route** selects precisely which equation chains to derive live.
- Each period points to exact section IDs in Layer A and to optional companion units in Layer C.
- A student can follow the lecture by using the full notes and clearly identified **In-class derivation** trajectories.
- Only **one major new mathematical derivation per 40-minute period** should be planned initially; shorter supporting calculations are permitted where realistic.
- The full proof can occupy several pages of notes while the instructor's board script is planned against real chalkboard time. The instructor's explanation sets the pacing.

### Layer C — Independent interactive learning companion

Three complementary student paths, all in English:

1. **Catch-up:** visual intuition, a diagnostic, elementary prerequisite reminders, individually revealed algebraic steps, reusable formula reference, and immediate feedback on short self-checks.
2. **Reproduce the lecture:** guided reconstruction of the exact board derivations, intermediate algebra, worked examples, and links to the notes.
3. **Explore further:** more demanding derivations, topics not taught in class, numerical experiments, and research-level reading paths. This is where whole source chapters (angular momentum, perturbation theory, scattering) can be explored even if not taught live.

AI-supported learning is an explicit design concern: encourage students to **test a generated explanation** by reconstructing one logical step, checking a limiting case, identifying an assumption, and explaining a result in their own words. The companion should make these actions easy; it should not assume prior programming skill or paid AI access.

### Proposed pedagogical language rule

**All student-facing deliverables in English.** The core notes use short precise sentences, one new technical word at a time, an English glossary and labelled equations; never sacrifice physical correctness for a simplified English sentence. An instructor-only bilingual terminology aid can be kept separately if later useful; do not add translations to the notes by default without instructor discussion. Oral language of instruction is an open question.

## 2. 48-period allocation — draft, not approved

| Module | Periods | Minutes | Provisional sequence |
|---|---:|---:|---|
| I. Basic Concepts | 12 | 480 | 01–12 |
| II. Dynamics, gauge and Berry phase | 12 | 480 | 13–24 |
| III. First encounter with topological matter | 4 | 160 | 25–28 |
| IV. Density operators and quantum measurements | 4 | 160 | 29–32 |
| V. Identical particles and second quantization | 8 | 320 | 33–40 |
| VI. Quantum neural networks and machine learning | 4 | 160 | 41–44 |
| VII. Relativistic quantum mechanics | 4 | 160 | 45–48 |
| **Total** | **48** | **1,920** | **32 clock hours** |

**Allocation risk:** 12 periods for all of dynamics, including a two-period Berry derivation, is tight with this student profile. The large English notes should preserve a full treatment of WKB, path integrals, coherent states, gauge fields and all source sections; a classroom may treat portions as worked reading. We will calibrate by writing and timing a realistic full blackboard lesson, and rebalance before declaring the 48-period sequence fixed. The four periods for each new topic are likewise placeholders pending instructor choice.

**Sequence rationale:** Berry phase directly prepares the geometric-phase/winding narrative of the SSH model. Density operators and measurement prepare quantum-circuit learning; indistinguishable-particle/Fock methods provide the many-body perspective. Dirac spin closes the course as in previous cohorts. The topological and quantum-ML chapters may be located differently in the textbook's table of contents; source order, reference-book order, and teaching route are separate metadata.

## 3. Period-level board route (provisional)

Each entry identifies **one primary blackboard objective**, prerequisites, and a reason the topic belongs. The period numbers are planning IDs, not finished notes section numbers.

### I. Basic Concepts — Periods 01–12

| Period | Main blackboard derivation or action | Result students should be able to explain |
|---|---|---|
| **01** | Stern–Gerlach experimental logic; two outcomes, conditional state preparation | What the experimental result says and why it is a quantitative question |
| **02** | Cascaded Stern–Gerlach Z→X→Z; calculate conditional probabilities | Why the order of selected measurements matters |
| **03** | Complex numbers, vector addition, scalar multiplication, complex inner product with an explicit 2D calculation | Amplitude, phase, conjugation, inner product |
| **04** | Bras and kets, orthonormal basis, completeness identity in a 2×2 example | Moving between an abstract state and components |
| **05** | Operators as linear maps, matrix elements, matrix products and adjoints | What an operator does, why order matters |
| **06** | Solve a two-level Hermitian eigenproblem and normalize both eigenvectors | Spectral decomposition and what degeneracy requires |
| **07** | Derive Born probabilities and expectation values from spectral projectors | Linking eigenstates, probabilities and measured averages |
| **08** | Projective measurement, post-selection and repeatability; revisit the SG sequence | Update of state after a selected outcome; joint versus conditional probability |
| **09** | Derive Pauli matrices from spin bases and use one noncommuting pair | The connection between spin experiments and 2×2 algebra |
| **10** | Commutator, compatible measurement and elementary uncertainty relation | What mathematical incompatibility means; one worked variance |
| **11** | Unitary basis transformation and eigenbasis probabilities; introduce tensor-product notation gently | Why physics survives a change of basis; groundwork for two-qubit and Fock examples |
| **12** | Position/momentum representations and Fourier intuition using one elementary example; short non-Hermitian preview (10–20 min) | Generalized states and the difference between Hermitian and general operators |

**Risk note:** Period 12 attempts two distinct objectives; if practical timing fails, move the position/momentum derivation into carefully signposted reading and keep the non-Hermitian preview as the instructor requested. Formal tensor products also receive a second, slower derivation in period 33. Avoid basing advanced arguments on unverified student mastery of Fourier transforms.

**Non-Hermitian preview suggestion:** a simple 2×2 non-Hermitian matrix, complex eigenvalue, and one physical interpretation. State the difference between an effective non-unitary description and unitary evolution of the full closed system, as appropriate. Exceptional points and non-Hermitian topology remain eligible for extended chapters/labs, not forced into these 10–20 minutes.

### II. Dynamics and geometric phase — Periods 13–24

| Period | Main blackboard derivation or action | Result |
|---|---|---|
| **13** | Unitarity + infinitesimal time evolution → Schrödinger equation | Hamiltonian as a generator |
| **14** | Two-level Hamiltonian solved exactly; populations and relative phase | State dynamics from energy eigenstates |
| **15** | Schrödinger vs Heisenberg pictures; derive one Heisenberg equation | Equivalent views of observable evolution |
| **16** | Harmonic oscillator creation/annihilation definitions and algebra | How commutators simplify an eigenproblem |
| **17** | Ladder proof of energies and ground-state Gaussian | Spectrum and zero-point energy |
| **18** | Coherent state as a ladder-operator eigenstate; simplest evolution | Classical-looking motion from a quantum state |
| **19** | Probability current and continuity, or propagator/path-integral bridge (discuss during timing review) | The physical meaning of amplitude transport |
| **20** | Electromagnetic minimal coupling and a basic gauge transformation | Local phase conventions versus invariant results |
| **21** | Aharonov–Bohm two-path phase derivation | A measurable phase from electromagnetic flux |
| **22** | Time-dependent parameter and adiabatic eigenstate setup; assess the adiabatic assumptions | What changes when a Hamiltonian changes slowly |
| **23** | Berry phase derivation from the time-dependent Schrödinger equation | Separation of dynamical and geometric phases |
| **24** | Berry connection and closed-loop phase; concrete spin-1/2 example | Gauge dependence of connection, observable/geometric content of holonomy |

**Allocation precision:** the instructor's previous *two periods for Berry phase* are periods **23–24**, with period 22 as the adiabatic prerequisite; the final split is revisable. Full proofs of WKB and path integrals belong in Layer A even if they exceed available board time.

### III. Topological condensed-matter physics — Periods 25–28

**Recommended prototype topic: the SSH chain, as an entry point to the broader subject.** This is a teaching anchor using two-component states, matrices, Berry phase and basic finite chains; it does not limit the scope of the textbook extension or interactive reading.

| Period | Primary derivation | Result |
|---|---|---|
| **25** | Construct a dimerized 1D chain with sublattices A and B; write real-space tight-binding Hamiltonian and simple eigenproblems | Intra- vs intercell hopping and the appearance of boundary states |
| **26** | Derive the 2×2 Bloch Hamiltonian H(k) via Fourier transformation and diagonalize it | Bands, gap and gap closing at a parameter transition |
| **27** | Chiral symmetry, off-diagonal complex function q(k), winding as the loop traced by q; relate to Berry/Zak phase under stated conventions | Meaning and quantization conditions of a 1D invariant |
| **28** | Construct an open-edge zero mode and derive the decay condition; relate bulk and boundary | Bulk–boundary correspondence **under its symmetry and gap assumptions** |

**Explicit mathematical spine:**

\[
 H(k)=\begin{pmatrix}0&v+w e^{-ik}\\v+w e^{ik}&0\end{pmatrix},
 \qquad E_\pm(k)=\pm |v+w e^{ik}|.
\]

Here the convention for Fourier transform and unit cell determines phase signs; fix it before deriving the winding/Zak relation. Winding requires a nonzero bulk gap, while its robustness is tied to the symmetry class. A Zak phase by itself is convention-sensitive; explain gauge/unit-cell assumptions and when it is quantized. The demonstration of an edge state is for an explicitly defined open-chain termination, with finite-size effects distinguished from the thermodynamic limit.

**Extended material, kept available:** general Bloch theory; Berry curvature and Chern numbers; Thouless pumping; quantum Hall/Chern-insulator models; bulk–boundary correspondence beyond 1D; symmetry protection; non-Hermitian topology; interacting systems. These form a coherent possible additional notes chapter and interactive learning path, rather than a promise to fit into 160 classroom minutes.

### IV. Density operators and quantum measurement — Periods 29–32

| Period | Primary derivation | Result |
|---|---|---|
| **29** | Define density matrix via ensembles; compute expectation and trace in a two-state example | Statistical mixtures versus coherent pure states |
| **30** | Purity and reduced density matrix via a two-qubit state and partial trace | Entanglement, mixed subsystem and operator bookkeeping |
| **31** | Generalized measurement via projectors → positive operators/POVM; probabilities | Why outcomes are represented by measurement effects |
| **32** | Instrument/Kraus update with a physical two-outcome example, including selected and unselected outcomes | Probabilities, postmeasurement state, completeness and information obtained |

**Pedagogical precision:** distinguish POVM effects from the physical state-update map; a POVM alone does not specify the postmeasurement state. Explicitly verify trace preservation for the nonselective instrument and trace-decrease before normalization for selective outcomes. These four lectures should create conceptual prerequisites for later quantum learning.

### V. Identical particles and second quantization — Periods 33–40

| Period | Primary derivation | Result |
|---|---|---|
| **33** | Tensor products, exchange operator and indistinguishability | What labeling particles does and does not mean |
| **34** | Construct normalized symmetric/antisymmetric two-particle states | Bose/Fermi statistics and exclusion |
| **35** | Two-particle model; spin/space exchange where appropriate | Consequences of exchange symmetry and a worked example |
| **36** | Define occupation-number states and Fock space | How one describes fluctuating mode occupations |
| **37** | Bosonic creation/annihilation operators and commutators; derive factors \(\sqrt{n}\) | Number basis action |
| **38** | Fermionic algebra, exclusion and a careful orbital-order/sign example | The origin and bookkeeping of minus signs |
| **39** | Derive a general one-body operator \( \hat H_1=\sum_{ij}h_{ij}a_i^\dagger a_j \) | Translation from first to second quantization |
| **40** | Derive the two-body interaction \( \hat V = \frac12 \sum_{ijkl}V_{ij;kl}\,a_i^\dagger a_j^\dagger a_l a_k \) in a fixed convention | Full interacting many-body Hamiltonian and its matrix elements |

The **final derivation is a non-negotiable curricular anchor**, matching the instructor's previous course endpoint. Keep all tensor-index relabellings, exchange symmetry, and the factor 1/2 explicit; for fermions ensure that the chosen matrix-element convention matches the operator order and whether antisymmetrized integrals are used. Later second-quantized dynamics, examples and many-body extensions belong in the complete notes and exploration track.

### VI. Quantum neural networks and machine learning — Periods 41–44

A working classroom **entry model** is a parameterized quantum circuit with measurable expectation values and a classical optimization objective. This is one rigorous point of entry into quantum machine learning; the complete notes and companion can offer alternative forms and more sophisticated models.

| Period | Primary derivation | Result |
|---|---|---|
| **41** | Revisit one- and two-qubit gates, tensor products and controllable rotations; define a parameterized circuit \(U(\theta)\) | How trainable parameters enter a quantum state |
| **42** | Input encoding, a measurement-defined function \(f_\theta(x)=\langle 0|U_\theta^\dagger(x) O U_\theta(x)|0\rangle\), and a transparent elementary loss | What the model outputs and what a training objective measures |
| **43** | Derive one-qubit analytic expectation and the parameter-shift gradient for a two-eigenvalue generator | How to calculate/train a quantum model, with a direct check |
| **44** | Small two-qubit entangling model or learning example; compare representational capacity, shot noise and optimization difficulty with simple baselines | What is meant by learning and which limitations matter |

**Reference blackboard calculation:** for \(R_y(\theta)|0\rangle\) and \(O=Z\),

\[
f(\theta)=\cos\theta,\quad
\partial_\theta f(\theta)=-\sin\theta
 =\tfrac12\big[f(\theta+\pi/2)-f(\theta-\pi/2)\big].
\]

This is a transparent example of the parameter-shift rule for an appropriate gate generator; general parameter-shift formulas depend on the generator spectrum. A second stage can combine it with an explicit loss and an actual parameter update.

**Scope cautions:** parameterized circuits are not the entire quantum-ML field, and training one circuit does not establish quantum advantage. Do not conflate quantum neural networks with classical neural networks; explain the relation and differences via concrete mathematical operations. For claims about quantum benefit, use only well-identified tasks, assumptions and benchmarks.

**Extended material, kept open:** data re-uploading and expressivity; quantum kernels; variational classifiers; quantum convolutional networks; quantum generative learning; quantum data versus classical data; barren plateaus and gradient scaling; noise and finite-shot learning; optimization, generalization and classical baselines; advanced links to the instructor's stochastic-optimization/training-dynamics research if educationally useful. The whole topic may later become a substantial independent module.

### VII. Relativistic quantum mechanics — Periods 45–48

| Period | Primary derivation | Result |
|---|---|---|
| **45** | From relativistic energy–momentum relation to Klein–Gordon equation | Why naive scalar relativistic wave equations raise interpretive questions |
| **46** | Linearization of the relativistic dispersion relation → Dirac Hamiltonian and matrix anticommutators | Why the formalism needs internal matrix structure |
| **47** | Derive the spin content from the Dirac matrices/angular momentum or Pauli limit | How intrinsic spin emerges from relativistic equations |
| **48** | Work one free-spinor / nonrelativistic-limit calculation and synthesize the conceptual route | A coherent stopping point at the instructor's chosen depth |

This route follows the instructor's prior aim. The full Chapter 8 can still discuss Lorentz transformations, spinors, parity, time reversal, charge conjugation, bilinears and related matters without attempting to derive all of them on the blackboard.

## 4. Blackboard writing specification

The lecture notes must make **literal board-following possible**, and the instructor's timing analysis must include the act of writing equations.

A suggested 40-minute rhythm to test against real lessons:

| Portion | Initial time | Function |
|---|---:|---|
| Recall and repair one prerequisite | 5 min | Restore the one mathematical operation needed today |
| Develop the main derivation | 25 min | Explicitly write definitions, transformations and the conclusion |
| Apply or interpret with one example | 7 min | Make the equation physically meaningful |
| One independent check / summary | 3 min | Identify whether students can reproduce one step |

**This 5+25+7+3 split is a template, not a teaching mandate.** Some lessons merit 35 minutes of derivation with a few summary sentences, and slower students may require a carried-over calculation.

For every planned blackboard lecture we will provide:

- **One-sentence question:** what physical problem will the board derivation answer?
- **Prerequisite line(s):** write the basic rule used, perhaps again even if it was taught weeks ago.
- **Board chain:** a sequence of equations/short English transitions that can be written in order without unexplained jumps.
- **Predicted sticking points:** fractions and normalization, adjoints, matrix multiplication, signs, tensor indices, etc.
- **Physics checkpoint:** a limiting case or measurement interpretation.
- **Stop line:** a physically coherent equation or conclusion where the instructor can end if time runs out.
- **Optional continuation:** mathematical elaboration available in the notes/companion without delaying the next class.
- **Post-class one-minute reconstruction:** a tiny prompt such as “derive line 4 from line 3,” with a feedback explanation.
- **Estimated actual writing time:** initially a range, updated only after realistic chalkboard rehearsal or prior-year lesson observations.

This is **not** a separate slide deck or shortened replacement book. The instructor route gives bookmarks, one page of preparation notes and (if useful) board-page breaks into the complete text.

## 5. Mathematical and English accessibility policy

### At the moment a mathematical tool first becomes necessary

Use **micro-bridges**, normally 1–3 short paragraphs and one worked calculation, rather than assuming students remember an entire undergraduate subject. Examples:

- Complex phase/conjugation before Dirac inner products.
- Two-dimensional eigenvectors before general spectral arguments.
- Bra–ket adjoints before probabilities and expectations.
- A 2×2 commutator before generalized uncertainty.
- A first-order differential equation before time evolution and ladder-state wavefunctions.
- Elementary product/chain differentiation before Berry and parameter-shift.
- A discrete two-sublattice Fourier sum before SSH Bloch theory.
- Tensor product, partial trace and simple two-qubit basis before reduced density operators.
- Index symmetries, summation and antisymmetry before a four-index interaction Hamiltonian.

### Students studying in a second language

- Short sentences with a single mathematical action (“Insert the completeness relation”; “Take the adjoint”; “Normalize the result”).
- Introduce each technical term with one precise English definition, a familiar example, and repeated consistent usage.
- Symbol/term index and plain-English readings of important formulas.
- Equation-level explanations located immediately where they are used.
- Optional spoken-English phrasing notes for the instructor; not a replacement for the full formal derivation.
- Exercises sorted by **calculation reconstruction**, **conceptual explanation**, and **research-style exploration**, with independent feedback in the companion.
- Avoid a requirement that students install software or write Python just to encounter the key physics of a lab.

### Responsible use of AI by students

The class may explicitly permit AI as a supplementary explainer, while requiring the student to inspect and justify intermediate physical/mathematical steps. Suggested companion activity: present a convincing but intentionally incorrect sign/factor argument and let the student locate and correct it with feedback. This is particularly useful for the harmonic oscillator and second-quantized fermion signs.

## 6. Companion priority tied to observed learning bottlenecks

**First priority — before the deep topical labs:** foundational mechanics of the formalism:

1. Complex amplitudes and conjugates: multiply, add, normalize and interpret probability.
2. Two-dimensional eigensystem explorer with a fully visible matrix.
3. Cascaded Stern–Gerlach probabilities and state changes.
4. Visual representation change and Pauli measurement axes.
5. Tensor products and partial trace with controlled indices.
6. Bosonic and fermionic creation/annihilation algebra with feedback.

**Second priority — connect major course narratives:**

7. Bloch-sphere spin and adiabatic Berry phase.
8. SSH open versus periodic boundaries, spectrum, winding and localized edge modes.
9. Measurement versus density-matrix update including POVM/instrument distinction.
10. One-/two-qubit variational learning with parameter-shift and a real loss landscape.
11. Klein–Gordon versus Dirac dispersion / spinor anatomy.

**Third priority — independent deep study:** oscillator/coherent states, WKB, path integrals, scattering, perturbation theory, angular-momentum coupling, multi-body occupation models, Chern bands, quantum kernels, noise/optimization/generalization. These do not disappear because they are not on the board route.

Each interactive unit should open with a compelling physical question. Use animation only when it communicates a changing quantity, and ensure its mathematical model is verified independently.

## 7. Course feasibility and adjustments

**A planned 40-minute class is only feasible after its target equation is written in full.** We should not declare the 48-period sequence definitive on the basis of topic names alone. The most at-risk segments are:

- **Basic Concepts (12):** students may require more than 12 periods to become comfortable with inner products and operators; the Fourier/tensor preview is particularly fragile.
- **Dynamics (12):** source has several substantial sections (oscillator, coherent states, WKB, propagators, gauge, AB); two-period Berry plus gauge prerequisites require significant time. Reserve the full details for Layer A and test the board path for actual coverage.
- **Density/measurement (4):** a careful operational distinction between probabilities and state update is important; 2+2 is a sensible starting split, but may require more examples.
- **Identical particles and Fock space (8):** the interacting-Hamiltonian derivation is a fixed endpoint; factor-of-2, fermionic sign and basis algebra have to be taught at a pace students can reproduce.
- **Topology and QML (4+4):** each can deliver a complete derivation-driven conceptual example in four periods; the overall fields are far richer. Keep broader coverage in Layer A/C.
- **Relativistic QM (4):** four periods should focus on the instructor's explicit spin-emergence endpoint.

**Adaptation method:** test several representative blackboard lessons from different difficulty levels, adjust individual sessions, and review the entire 48-period budget after each test. Changes to allocated minutes must be explicit decisions in this file. No source section, enrichment idea, or research direction will be silently discarded as a consequence.

## 8. Source–classroom mapping and full-text preservation

| Original source | Full textbook | Blackboard route | Companion / advanced self-study |
|---|---|---|---|
| Ch. 1 | Full with verified mathematics | 01–12, selected chain | Mathematical refresher, SG, representation labs |
| Ch. 2 | Full, plus the instructor's Berry derivation | 13–24, selected chains | Exact/WKB, propagators, AB, Berry labs |
| Ch. 3 Angular Momentum | Full | Select spin/matrix essentials into earlier lectures; most full chapter optional | SU(2), angular-momentum addition, Bell |
| Ch. 4 Approximation Methods | Full | No dedicated periods in v0.1 | Perturbation, variational bounds, driven dynamics |
| Ch. 5 Scattering Theory | Full | No dedicated periods in v0.1 | Born scattering, Green functions, partial waves |
| Ch. 6 Identical Particles | Full | 33–35 | Exchange and spatial spin correlations |
| Ch. 7 Second Quantization | Full; remove duplicated source PDF span | 36–40 | Fock algebra, interactions and advanced methods |
| Ch. 8 Relativistic QM | Full, final spinor calculation reconstructed | 45–48, focus through spin | Lorentz transformations and spinor symmetries |
| Added non-Hermitian introduction | An appropriately self-contained supplement, scope open | 10–20 min of 12 | Spectra, effective evolution, exceptional points if approved |
| Added density & measurements | Thorough module, with cross-references to Ch. 1/3 | 29–32 | State/instrument labs |
| Added Berry phase | Full derivation and physical examples | 22–24 with two main Berry periods | Holonomy and Berry loop labs |
| Added topological condensed matter | Substantive independent English content; outline open | 25–28 example path | Additional dimensions, phases, symmetries |
| Added quantum neural networks & ML | Substantive independent English content; outline open | 41–44 example path | Kernels, generative learning, optimization, generalization |

**Non-duplication:** the density-operator passage currently in source Ch. 3 and the classroom density-matrix module should share one canonical derivation with backlinks or carefully chosen explanatory recaps. Similarly gauge/Berry/topology and spin/tensor/QML should cross-reference canonical definitions. This applies across all three layers.

## 9. Decisions / revision control

### Confirmed facts (recorded 2026-10-16)

- Course: 48 × 40 minutes; predominantly board-led.
- Approximate first-chapter investment: 12 periods.
- Instructor previously taught a 2-period Berry phase derivation after AB.
- Brief non-Hermitian introduction during Basic Concepts.
- Before identical particles, 2 periods density matrices and 2 periods measurement theory.
- Many-body classroom endpoint: fully interacting second-quantized Hamiltonian derived from the first-quantized formulation.
- Relativistic classroom endpoint: spin emerging naturally in the Dirac framework; ~4 periods.
- New requested fields: topological condensed matter and quantum neural networks / machine learning.
- English notes and companion should support students with weak prerequisite retention and academic-English fluency.
- The complete reference notes remain broad and the source's conceptual inventory stays available.

### Draft choices awaiting instructor feedback

| Decision | v0.1 proposal | Status |
|---|---|---|
| CT-001 | 12/12/4/4/8/4/4 periods, with topology directly after Berry | Proposed; **not confirmed** |
| CT-002 | SSH model as first board-level topology worked example | Proposed |
| CT-003 | Parameterized circuit/measurement/gradient as first board-level quantum learning worked example | Proposed |
| CT-004 | Density + measurement methods inserted before Fock-space treatment | Consistent with past teaching; exact placement proposed |
| CT-005 | Relativistic Dirac spin as end-of-course topic | Proposed to preserve previous endpoint |
| CT-006 | All source Ch. 3–5 retained in full English text and companion even if not presented live | Strong editorial recommendation; confirm implementation |
| CT-007 | 5/25/7/3 minute board plan and one principal derivation per class | Calibration template |
| CT-008 | Mathematical micro-bridges and three-track companion | Proposed |
| CT-009 | Final TOC locations of Berry, topology, density/measurement, QML | Open |
| CT-010 | Grading and students' permission to use AI | Open; affects exercise and feedback design |
| CT-011 | Language of live oral explanation and assessment | Open; student notes remain English |
| CT-012 | Open-source/public permission of any source-derived content | Open pending provenance review |

### Follow-up discussions that will most improve this plan

1. Which of the dynamics derivations were actually taught in prior cohorts, and where was most of the time spent?
2. Is the new-topics allocation **four periods each** acceptable, or should topology/QML receive a different weighting?
3. How far should the topological module go beyond the SSH model during live teaching, and which deeper directions belong in the notes and companion?
4. How far should QML proceed beyond a trainable two-qubit model—e.g. quantum kernels, generalization, optimizer dynamics, noise, and architecture?
5. What is the course assessment model and the degree of English-only instruction?

These questions are for later rounds; the route above is usable for the initial design discussion now.

## 10. Research and pedagogical references (verified publication metadata)

**Sources for added ideas (separate from the supplied Chinese PDF):**

- M. V. Berry, “Quantal phase factors accompanying adiabatic changes,” *Proceedings of the Royal Society of London. Series A* **392**, 45–57 (1984). https://doi.org/10.1098/rspa.1984.0023
- W. P. Su, J. R. Schrieffer, and A. J. Heeger, “Solitons in Polyacetylene,” *Physical Review Letters* **42**, 1698–1701 (1979). https://doi.org/10.1103/PhysRevLett.42.1698
- *Topology in Condensed Matter: Tying Quantum Knots*, https://topocondmat.org/ ; educational discussion of 1D winding: https://topocondmat.org/w8-general/invariants/
- M. Cerezo *et al.*, “Variational quantum algorithms,” *Nature Reviews Physics* **3**, 625–644 (2021). https://doi.org/10.1038/s42254-021-00348-9
- M. Schuld, V. Bergholm, C. Gogolin, J. Izaac, and N. Killoran, “Evaluating analytic gradients on quantum hardware,” *Physical Review A* **99**, 032331 (2019). https://doi.org/10.1103/PhysRevA.99.032331
- J. R. McClean, S. Boixo, V. N. Smelyanskiy, R. Babbush, and H. Neven, “Barren plateaus in quantum neural network training landscapes,” *Nature Communications* **9**, 4812 (2018). https://doi.org/10.1038/s41467-018-07090-4

These references support **candidate additions** and should not be attributed to the Chinese source. Bibliographic metadata and scientific conclusions must be rechecked when the relevant textbook section is actually written.

---

**Long-term rule:** maintain this file as the versioned description of the course's real learners, time budget and board-level path. Maintain [PROJECT_BLUEPRINT.md](PROJECT_BLUEPRINT.md) as the broader intellectual and editorial specification. Changes in either document must respect and link to the other.


## Manuscript structure update (2026-10-16)

The current reference textbook has nine chapters: the old chapters 6 and 7 are combined into Quantum Many-Body Systems; Relativistic Quantum Mechanics is rebuilt from the instructor's separate 2024 eight-page handwritten notes and now follows as Chapter 7; Topological Condensed Matter Physics and Quantum Neural Networks and Machine Learning are Chapters 8 and 9. The original 48 × 40-minute classroom plan remains an instructor-controlled, preliminary allocation and is distinct from the complete textbook. The new chapters contain more derivation than may fit on the board; no timing redistribution is made without instructor approval. Student-facing material remains self-contained and does not contain internal course scheduling prose.


## Interactive companion architecture update (2026-10-17)

The current nine-chapter interactive design is defined in **[INTERACTIVE_COMPANION_BLUEPRINT.md](INTERACTIVE_COMPANION_BLUEPRINT.md)** and **[companion/catalog.json](companion/catalog.json)**. Its initial 62 candidate labs span **all nine** chapters, including Chapter 8 topology and Chapter 9 quantum ML. The 22 flagged §core§ experiments form a **provisional self-study route**, not a change to the current 48-period allocation and not a list of required graded assignments. Prerequisite and conceptual routes connect classroom material to the deeper source topics (angular momentum, approximation methods, scattering). Four planned complete calibration experiments are detailed in **[companion/PROTOTYPES.md](companion/PROTOTYPES.md)**. Future teaching revisions should update the course-to-companion mapping and associated lab prerequisites together; the full independent-study scope stays broad. Current website files are a browsable catalog scaffold; running numerical physics experiments will be released separately after validation.
