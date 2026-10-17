# Advanced Quantum Mechanics: Master Project Blueprint

**Status:** Initial source review complete; curricular and publishing choices remain open  
**Working date:** 8 October 2026; course-design revision 16 October 2026  
**Repository:** https://github.com/KangqiaoLiu/advanced-quantum-mechanics-lecture-note  
**Working language of all student-facing deliverables:** English  
**Source of the initial curricular backbone:** the supplied 186-page Chinese PDF, “清华大学 高等量子力学” (file title supplied by the instructor; authorship, licensing, and provenance have not yet been established).

> **Updated course constraints:** Read **[COURSE_DESIGN_48_PERIODS.md](COURSE_DESIGN_48_PERIODS.md)** for the confirmed cohort profile, actual 48 × 40-minute time budget, board-led teaching method, historical lesson choices, detailed provisional classroom route, and proposed new topology/quantum-learning units. **The classroom route is a selected path through the complete notes; it does not determine the full notes' scope.**

> **Purpose of this document.** This is the durable working specification for the course project. It records what the Chinese source covers, what needs attention, how we will write the English lecture notes at full derivational depth, how the interactive companion will relate to the notes, and how changes will remain coherent over a long editing history. The document is deliberately revisable. Any new decision should be recorded here before it becomes a project-wide convention.

## 1. The finished educational resource

We are building two connected, individually valuable deliverables.

**A. The English graduate lecture notes** will be a complete, coherent, typeset and downloadable course text, predominantly adapted and translated from the supplied Chinese notes. Mathematical explanations and derivations should be sufficiently explicit for serious independent study. The text will be pedagogically edited, independently checked, and selectively revised, shortened, expanded, or reorganized according to later discussions with the instructor. It must read as one authored textbook, even if chapters are written months apart.

**B. The interactive companion** will help students develop intuition, experiment with parameters, challenge assumptions, practise derivations, and explore material beyond the lecture. It should provide an alternative route through the same ideas rather than repeat the text on web pages. A student should be able to study the main notes entirely without running interactive material, and use the companion without needing to understand software development.

The shared intellectual structure is **physical problem → mathematical framework → derivation → physical interpretation → example → independent exploration**. The main notes carry the full argument; the companion lets the student manipulate its assumptions and consequences.

The starting point is the complete eight-chapter source, including its less common topics (Casimir effect, monopoles, Bell correlations, density operators, second quantization, relativistic wave equations). Proposed reductions or additions are **possibilities for instructor discussion**, not silently adopted curricular decisions.

### Explicit non-goals for the initial planning stage

- No wholesale rewriting of the syllabus based on presumed modern textbook fashions.
- No prematurely fixed interactive platform, visual design, public website, or chapter cuts.
- No publication or release of the supplied Chinese PDF or its adapted translation before provenance and reuse rights are addressed.
- No generation of whole chapters from section headings alone; the corresponding original pages, figures, derivations, and examples must be revisited when writing.

## 2. What has been reviewed

The source PDF contains **186 PDF pages and eight chapters**. The review included a page-by-page structural pass, page-image inspection across the document, and targeted closer examination of derivational passages. This establishes an accurate **content inventory and initial audit**, not a claim that every mathematical expression has already undergone an independent proof check. Formula-by-formula verification belongs to the chapter-writing workflow below.

**Important page-number convention:** all page ranges in this blueprint refer to **PDF viewer page numbers (1–186)**, not to the printed page numbers in the source, which restart inside sections/chapters. This distinction must survive every future edit.

### 2.1 Source chapter map

| Source chapter | PDF pages | Sections in the supplied PDF | Role in the course |
|---|---:|---|---|
| 1. Basic Concepts | 1–24 | Stern–Gerlach; vector and Hilbert spaces; operator eigenproblems; measurement; representation changes; position and momentum representations | Build measurement intuition and Dirac/operator fluency |
| 2. Quantum Dynamics | 25–61 | Unitary evolution; Schrödinger/Heisenberg pictures; harmonic oscillator; coherent states; WKB; path integrals; gauge transformations | Develop time evolution, semiclassical reasoning, and phase |
| 3. Angular Momentum Theory | 62–96 | Rotations; spin; density operators; angular-momentum eigenstates; orbital angular momentum; addition of angular momenta; Bell inequalities | Connect symmetry, rotations, coupled systems, and quantum correlations |
| 4. Approximation Methods | 97–120 | Stationary perturbation theory; nondegenerate/degenerate cases; variational method; strong-coupling example; time-dependent perturbation; interaction picture | Practical approximation techniques and their validity |
| 5. Scattering Theory | 121–139 | Cross sections; Green functions; Lippmann–Schwinger; Born series; partial waves | Relate microscopic dynamics to observable scattering |
| 6. Symmetry and Identical Particles | 140–153 | Constants of motion; symmetry and conservation laws; exchange symmetry; two-particle effects and simple systems | Establish symmetry logic and statistics |
| 7. Second Quantization | 154–173 | Fock space; creation/annihilation operators; bosonic/fermionic algebra; one-/two-body operators; continuous fields; dynamics | Transition from labeled-particle wavefunctions to occupation-number language |
| 8. Relativistic Quantum Mechanics | 174–186 | Klein–Gordon and Dirac equations; Lorentz covariance; spin, P/T/C, bilinears; free Dirac spinors | Give a first entry to relativistic quantum theory |

**Source anomaly:** PDF pp. **154–160 and 161–167 repeat the same seven pages** (corresponding page texts are identical). They represent **one** segment of Chapter 7, not fourteen distinct pages of teaching material. The original PDF ends on p. 186 with a brief final step in a Dirac-spinor calculation; the pedagogical closing of Chapter 8 will require examination and likely completion.

### 2.2 Detailed section inventory and preliminary teaching intentions

The following is a source-faithful inventory. The questions after each semicolon identify what an English graduate-level explanation should make explicit. They are **editorial work items**, not alterations already made.

#### Chapter 1 — Basic Concepts (pp. 1–24)

1. **Stern–Gerlach experiment (pp. 1–3).** Magnetic moment and field gradient, quantized spin projection, sequential Z–Z/Z–X/Z–X–Z filters, polarization analogy; explain post-selection, conditional probabilities, compatible/incompatible measurements, and which aspects of the optical analogy remain classical.
2. **Linear vector spaces and Hilbert spaces (pp. 4–6).** Bases, complex inner products, bras/kets, completeness, adjoints, outer products and operator matrices; distinguish coordinate representations from physical states and state the mathematical setting carefully.
3. **Eigenvalues, eigenvectors, Hermitian operators (pp. 7–9).** Characteristic equations, reality and orthogonality, degeneracy, orthonormalization and completeness; exhibit the spectral theorem in the intended finite-dimensional setting before addressing continuous spectra.
4. **Measurement (pp. 9–16).** Born probabilities, projective measurement and repeatability, spin-1/2 matrices, simultaneous observables, complete sets of commuting observables, sequential measurements, uncertainty; add the role of degeneracy and projectors, and keep the postulate/interpretation distinction explicit.
5. **Changes of representation (pp. 16–18).** Transformation amplitudes, unitarity, transformation laws, representation-independent spectral data, commutators and traces; calculate one concrete two-state example in full.
6. **Position and momentum representations (pp. 19–24).** Continuous generalized eigenstates, canonical commutation, translation generators, wavefunctions, Fourier transform, Gaussian minimum-uncertainty packet, hydrogen ground-state momentum example; explain delta normalization, Fourier conventions, and domain/boundary subtleties appropriately.

#### Chapter 2 — Quantum Dynamics (pp. 25–61)

1. **Time evolution and the Schrödinger equation (pp. 25–30).** Composition and unitarity, infinitesimal generator, constant/time-dependent Hamiltonians, Dyson series, stationary states, Larmor precession, energy–time uncertainty; make time-ordering and the meaning of the characteristic time explicit.
2. **Schrödinger and Heisenberg pictures (pp. 31–34).** State/operator transformations, moving bases, Heisenberg equation, Ehrenfest theorem and canonical correspondence; introduce a uniform sign convention and verify its examples.
3. **One-dimensional harmonic oscillator (pp. 35–40).** Factorization, ladder algebra and spectrum, coordinate wavefunctions, number states, zero-point energy, Casimir illustration, Heisenberg evolution; derive the state normalization and check operator signs independently.
4. **Coherent states (pp. 41–42).** Eigenstates of the lowering operator, minimum-uncertainty property, Fock expansion and time evolution; provide the phase-space interpretation and a clear physical comparison with number states.
5. **Coordinate Schrödinger equation and WKB (pp. 42–47).** Probability density/current, stationary equation, classical limit, semiclassical expansion, allowed/forbidden regions and turning-point matching; derive WKB prefactors and matching carefully, explain applicability and breakdown.
6. **Feynman path integrals (pp. 48–52).** Propagators in two pictures, composition, time slicing, action-weighted paths, free-particle and oscillator kernels, stationary-phase interpretation; make normalization, boundary prescriptions, and kinetic-minus-potential action explicit.
7. **Gauge transformations (pp. 53–61).** Observable relative phase, gravitational neutron interferometry, electromagnetic gauge transformation, Aharonov–Bohm effect in bound and two-path geometries, magnetic monopoles; differentiate global phase, relative phase, local gauge change, and gauge-invariant observables.

#### Chapter 3 — Angular Momentum Theory (pp. 62–96)

1. **Rotations and angular momentum (pp. 62–65).** Classical versus quantum rotations, infinitesimal generators, commutation algebra, expectation values; clarify active/passive rotation and signs.
2. **Spin angular momentum (pp. 66–71).** Spin rotations and precession, neutron interferometry, Pauli matrices, Euler-angle parameterization; derive spin-1/2 rotation matrices and the 2π/4π distinction.
3. **Ensembles and the density operator (pp. 72–76).** Pure and mixed ensembles, ensemble averages, density matrix, eigenvalues/purity, time evolution; explicitly distinguish ensemble decompositions sharing one density operator.
4. **Angular-momentum eigenvalues and eigenstates (pp. 77–83).** J-squared and J-z algebra, ladder operators, allowed j and m, representation matrices, rotation operators; retain the full ladder proof.
5. **Orbital angular momentum (pp. 84–85).** Differential representation, spherical harmonics and rotation; explain single-valuedness and quantum numbers.
6. **Addition of two angular momenta (pp. 86–91).** Uncoupled/coupled bases, triangle rule, Clebsch–Gordan coefficients, explicit low-dimensional matrices; provide a reproducible worked coupling calculation.
7. **Spin correlation and Bell inequality (pp. 92–96).** Two-spin correlations, locality assumptions, inequalities, quantum violations and experimental comparison; distinguish the selected inequality from the general Bell-theorem framework, and state the experimental assumptions.

#### Chapter 4 — Approximation Methods (pp. 97–120)

1. **Stationary-perturbation framework (p. 97).** Expansion parameter, solvable reference system, ordering of contributions; identify validity assumptions.
2. **Nondegenerate perturbation theory (pp. 98–103).** Energy and state corrections, convergence discussion and examples; show intermediate sums and normalization conventions.
3. **Degenerate perturbation theory (pp. 104–108).** Diagonalization inside the degenerate subspace, splitting, example matrices; discuss near-degeneracies and breakdown of naive expansions.
4. **Variational method (pp. 109–111).** Rayleigh–Ritz principle, trial states, variational parameters and worked bound; identify systematic ways of improving the ansatz.
5. **Strong-coupling Schrödinger equation (pp. 112–113).** The source's special approximation example; retain as a tracked curricular item until its instructional role is discussed.
6. **Time-dependent perturbation theory (pp. 113–118).** Transition amplitudes, orders of perturbation, periodic driving, resonance and long-time transition rates; develop conditions behind Fermi's golden rule.
7. **Interaction picture and perturbation theory (pp. 119–120).** Picture transformations, Dyson expansion and connection to transition amplitudes; ensure consistent time-ordering notation with Chapter 2.

#### Chapter 5 — Scattering Theory (pp. 121–139)

1. **General description (pp. 121–122).** Incident and scattered waves, flux and differential cross section, asymptotic amplitudes; specify normalization and limits.
2. **Green-function method (pp. 123–126).** Inhomogeneous equation, integral representation, outgoing/incoming boundary conditions, analytic prescription; distinguish retarded, advanced, causal, and stationary resolvent terminology.
3. **Lippmann–Schwinger equation (pp. 127–132).** Operator and coordinate forms, Dyson identity, scattering amplitude and optical theorem; display all factors in a single unit system.
4. **Born series (pp. 133–134).** First-order Born amplitude and further orders, Fourier transform of the potential, conditions for applicability; work at least one concrete potential.
5. **Partial-wave method (pp. 134–139).** Plane-wave decomposition, central potential, phase shifts, cross sections, model/example and convergence; link partial-wave unitarity to the optical theorem.

#### Chapter 6 — Symmetry and Identical Particles (pp. 140–153)

1. **Conserved observables (pp. 140–141).** Definitions and commutator criteria, probabilities and constants of motion; state time-dependence assumptions.
2. **Symmetry and conservation (pp. 141–143).** Translation, time translation, rotation and parity, unitary transformations and invariances; relate each symmetry generator to its conserved quantity, with caveats where relevant.
3. **Exchange symmetry (pp. 144–150).** Indistinguishability, exchange operator, symmetrized/antisymmetrized states, two-particle effects, spin wavefunctions; give clear counting, normalization, and fermion/boson examples.
4. **Simple identical-particle systems (pp. 151–153).** Helium, coupling orbital and spin symmetry, Pauli pressure; make the approximation and spin–space symmetry connections explicit.

#### Chapter 7 — Second Quantization (pp. 154–173; pp. 161–167 duplicate pp. 154–160)

1. **Occupation-number representation/Fock space (unique material pp. 154–160).** Occupation states, creation and annihilation operators, changing single-particle basis, commutation and anticommutation relations, Pauli exclusion, number operator; derive bosonic and fermionic sign conventions with care.
2. **Operators and dynamics in second quantization (pp. 168–173).** One-body and two-body observables, continuum/spin field operators, equations of motion; reconstruct the mapping from first- to second-quantized expressions with all index and symmetry factors visible.

#### Chapter 8 — Relativistic Quantum Mechanics (pp. 174–186)

1. **Relativistic wave equations (pp. 174–176).** Natural units, Klein–Gordon equation, probability/current difficulty, linearization and Dirac equation, gamma matrices; distinguish first-quantized interpretation from subsequent field theory.
2. **Relativistic invariance and symmetries (pp. 177–184).** Lorentz transformation, spin representation, spin, parity, time reversal, charge conjugation, bilinear covariants; document metric signature, gamma-matrix convention, and discrete-symmetry conventions.
3. **Free Dirac plane-wave solutions (pp. 184–186).** Positive/negative-energy spinors and coefficient relations; the final PDF page is very short and the treatment needs a coherent pedagogical ending. The exact scope of any extension is open.

### 2.3 The source's distinctive teaching sequence

This is an important reason to preserve the source as the backbone. It begins with sequential Stern–Gerlach measurements rather than an abstract list of postulates; develops linear algebra through representation theory; derives the Schrödinger and Heisenberg pictures before the oscillator; introduces density operators within angular momentum; and places second quantization directly after exchange symmetry. It then uses relativistic quantum mechanics as a final extension. Cross-chapter explanations should preserve these motivations and internal dependencies even if their presentation is refined.

## 3. Source audit: concrete issues already visible

The original is a useful and derivation-rich teaching document, but an English edition requires an **independent mathematical and physical audit**. Translation must never be used as implicit verification.

| ID | PDF page(s) | Issue to verify/resolve | Planned treatment |
|---|---:|---|---|
| S-001 | 154–167 | Seven pages of Chapter 7 repeated verbatim (154–160 = 161–167). | Map them to one conceptual span. Do not translate twice. Keep both PDF page mappings in the ledger. |
| S-002 | 35–40 | Harmonic-oscillator inverse momentum formula and the resulting Heisenberg x(t), p(t) signs require reconciliation with the stated ladder-operator definition and canonical commutator; the printed time-evolution signs on p. 40 conflict with the standard evolution obtained from dx/dt = p/m. | Re-derive ladder inversion and both equations of motion; propagate a consistent convention throughout Chapters 2–4. |
| S-003 | 51–52 | The harmonic-oscillator classical Lagrangian is printed with a **plus** sign before the quadratic potential on p. 52, despite the earlier general L = T − V statement. | Verify from the Legendre transform and repair the path-integral derivation and kernel. |
| S-004 | 45–47 | WKB asymptotic amplitudes, turning-point equations and connection formula are compressed and susceptible to missing factors/square roots in extraction. | Reconstruct the derivation from the differential equation, independently check the p(x)^(-1/2) prefactor, and state the matching domain. |
| S-005 | 48–52 | Time-ordered propagator with a step function and the ordinary unitary evolution kernel are used closely together. | Define each object separately and keep boundary prescriptions explicit. |
| S-006 | 53–61 | Phase and electromagnetic-coupling signs in the Aharonov–Bohm discussion need to be reconciled with the stated minimal coupling convention. | Derive gauge covariance and the interferometric phase using one fixed charge/sign convention. |
| S-007 | 7–24, 174–186 | Several operator arguments are stated in finite-dimensional notation, then extended to continuum or relativistic contexts. | Distinguish finite-dimensional linear algebra, generalized eigenstates, self-adjointness and the relevant domains without overloading the introductory chapters. |
| S-008 | 72–76, 92–96 | Density operator and Bell sections are short relative to their conceptual burden. | Retain the original logic, make state mixtures and measurement assumptions explicit, and add pedagogical worked examples where useful. |
| S-009 | 121–139 | Resolvent, Green functions, outgoing/incoming conventions, scattering normalizations and optical-theorem factors must agree. | Check by explicit free-space Green function and flux calculation. |
| S-010 | 174–186 | Gamma-matrix, metric, units, adjoints, P/T/C and spinor normalization conventions must remain consistent; final pages stop during a spinor calculation. | Create a convention table and give the section a self-contained ending after consultation. |
| S-011 | throughout | Printed source page numbering restarts; figure/equation references may refer to old internal pagination. Several equations have imperfect electronic text extraction. | Cite PDF page numbers in editorial files, check displayed equations against rendered pages, and replace old references with stable LaTeX labels. |
| S-012 | throughout | Some physical assertions use simplified or interpretation-dependent language (collapse, definite values, classical limit, energy–time uncertainty, the meaning of a particle). | Preserve the motivation while distinguishing postulates, mathematical deductions, approximate statements, and interpretations. |

**Status of the audit table:** the duplicate pages and the printed signs in S-002/S-003 have been inspected in page images. All other entries are questions for the chapter-level mathematical review, not claims of newly discovered mistakes. We will record the exact corrected equations, supporting calculations, and instructor decisions as the work proceeds.

## 4. Rules that keep the project consistent

### 4.1 One immutable provenance vocabulary

Every substantive piece of content will be tagged internally as:

- **SRC**: translated or closely adapted from an identified source PDF section/pages.
- **REFORM**: same physical content, rewritten/reordered for clearer English exposition.
- **VERIFY**: derivation reconstructed or independently checked; includes repairs to source errors.
- **ADD**: new instructor-approved or clearly identified material.
- **MOVE**: material retained but moved to a different location.
- **CONDENSE**: material retained in abbreviated form, with original location tracked.
- **OMIT-PROPOSED**: suggested deletion awaiting curricular discussion.
- **OMIT-APPROVED**: recorded deletion with reason and destination (if moved to exercises/companion).
- **OPEN**: unresolved scientific or pedagogical question.

Student-facing text will read naturally, without intrusive tags. These tags belong to the working ledger and author comments.

**Core commitment:** each source section receives an explicit disposition, including material later omitted. This permits faithful coverage and makes it possible to revisit decisions without reconstructing the history from chat.

### 4.2 Stable numbering and cross-referencing

- Source IDs: **SRC-C01-S01** through **SRC-C08-S03** (chapter/source-section identifiers; source PDF pages retained separately).
- Notes sections: **N-C01-S01**, etc.; chapter numbering may later differ from source numbering, so content ID and printed section number are distinct.
- Interactive units: **I-C01-01**, etc., linked to note concept IDs.
- Derivations/equations receive semantic LaTeX labels (example: eq:spin:commutator, eq:oscillator:heisenberg-position). Avoid hardcoded page or equation numbers.
- Figures have semantic labels and complete captions; every image or subplot shown in the notes is directly discussed where it is used.
- A term is defined at its first occurrence; later chapters refer to the same definition. A master notation and terminology register prevents silent changes.

### 4.3 Global mathematical conventions: proposed defaults

These are proposed for discussion, and the final choices will be recorded.

| Category | Proposed project convention |
|---|---|
| State | Dirac ket and bra, with normalized pure states unless stated |
| Adjoint | Dagger †; hats for abstract operators when helpful |
| Commutator | [A,B] = AB − BA |
| Time evolution | U(t,t0), with i ħ ∂t U = H(t) U |
| Rotation | Active rotations on states as the default, with passive changes labeled |
| Translation | Active displacement with U(a) = exp(− i a·p/ħ) |
| Spin | s = (ħ/2) σ for spin 1/2 |
| Angular momentum | L orbital, S spin, J total |
| Units | ħ displayed, SI-derived electromagnetic formulas as the pedagogical default; alternate conventions translated explicitly |
| Fourier normalization | State and momentum basis normalization fixed once in Chapter 1 |
| Scattering | Incident current, scattering amplitude and cross-section normalization stated at introduction |
| Relativity | Metric signature, γ matrices, γ5, and natural-unit conversion stated in Chapter 8 |
| Style | Standard international English physics terminology; consistent Schrödinger, Heisenberg, Hermitian/self-adjoint, eigenstate, bra/ket, Fock space, Aharonov–Bohm, Lippmann–Schwinger |

**Important:** the source sometimes uses electromagnetic formulas in Gaussian conventions (explicit c factors). Unit conversion is an editorial task, not a typographical substitution. The original physical content is retained until its conventions are resolved.

### 4.4 Terminology and exposition contract

Write in complete, direct academic English, with a calm, explanatory voice. Prioritize physical motivation and precise mathematical argument. Each chapter should feel like part of the same book:

1. Open with a concrete question or model and explain its role in the course.
2. State only the prerequisites actually used.
3. Introduce definitions before their first application.
4. Show the assumptions and the intermediate steps needed to recover nontrivial equations.
5. Distinguish an exact identity, postulate, convention, approximation, and physical interpretation.
6. After a derivation, explicitly explain what was learned and when it applies.
7. Work through examples with actual calculations, units, limiting cases, and interpretation.
8. End with a compact conceptual synthesis, problems, and links to appropriate companion units.
9. Use fully English labels, figure text, captions, tables, and problem statements.
10. Keep figure styling consistent across the course and redraw mathematical diagrams where necessary; evaluate the source figures individually.

Avoid abrupt “it is easy to show” at substantive logical steps. Short routine algebra may be assigned as an exercise, with sufficient intermediate guidance and an accessible solution or outline in the instructor copy.

### 4.5 Editorial depth: a minimum chapter/section anatomy

**For every major section**, record and eventually supply:

- A one-paragraph *motivation* and explicit learning objectives.
- The source section and PDF-page span.
- Definitions and physical/mathematical assumptions.
- The central theorem, postulate, physical law or approximation.
- A traceable derivation with the intermediate steps appropriate for graduate students.
- At least one fully discussed worked example where the topic permits one.
- Interpretation, validity conditions and a useful edge case or counterexample.
- One or more exercises: foundation/application and at least one deeper question.
- Any numerical check, visualization or interactive extension that truly helps understanding.
- Cross-references to prerequisites and later applications.
- A notation check, mathematical check, physics check, pedagogical check, and proofreading record.

**For each chapter**, also supply a coherent opening, explicit transitions between sections, an overview diagram when appropriate, chapter-level problem set of varying difficulty, references/further reading, and a cross-chapter consistency review.

This is a *coverage standard*, not a word-count target. Proof length follows the concept. Two lines are sufficient for a trivial identity; several pages are justified for a nontrivial result.

### 4.6 Independent verification

For each important derivation:

- Check against the exact original PDF image and distinguish source transcription from the proposed corrected statement.
- Re-derive independently from previously fixed definitions; avoid merely comparing two copies of the same equation.
- Check algebraic signs, complex conjugation, operator order, factors of i and ħ, normalization and units.
- Evaluate limiting cases (zero field/coupling, short time, classical or weak-coupling limit, large distance, etc.) wherever they provide an independent check.
- For tractable finite-dimensional examples, use an independent symbolic or numerical calculation to confirm spectra, identities, probabilities, or matrix elements.
- For perturbative and asymptotic results, verify small parameters, boundary conditions, and order symbols.
- Document the original expression, issue, correction, reasoning, and consequences for downstream sections.
- Where literature is consulted, verify title, author, edition/equation location or official article metadata before citing it.

Never treat a successful LaTeX build as mathematical verification. Build checks and physics checks are complementary.

### 4.7 Full-book synchronization after every chapter

Every modification to an established definition, symbol, physical convention, or shared example triggers a **dependency review** of affected chapters and companion units. Typical chains include:

- Commutators and Fourier normalization (Chapter 1) → evolution, oscillators, scattering, fields.
- Time-evolution sign (Chapter 2) → rotations, Heisenberg equations, time-dependent perturbation and scattering.
- Angular-momentum phases and coupling conventions (Chapter 3) → identical particles and relativistic spin.
- Green-function boundary conventions (Chapter 5) → propagators in Chapter 2 and perturbation methods in Chapter 4.
- Fermionic sign conventions (Chapters 6–7) → field-operator examples and all interactive occupation-state visualizations.

On each completed chapter revision, reread its opening, conclusion, all references and associated companion descriptions against the book's global terminology. Record project-wide changes in the decision log below.

## 5. The iterative writing and review process

We will work at **section scale** for careful derivations, then at **chapter scale** for narrative continuity, then at **book scale** for cross-chapter editing.

### Pass A — Source reconstruction

Read that section's Chinese pages, including figures and small annotations, and create a detailed source inventory: motivation, assumptions, statements, every major derivation, examples, exercises (if any), figure meanings, implicit prerequisites, potential ambiguities. Record PDF page numbers and source content IDs. The source pages, not memory, control the draft.

### Pass B — Scientific derivation

Derive all central formulas anew, resolve notation and signs, identify theorems' scopes and hidden assumptions, and check important claims using standard references where needed. Record mathematical corrections separately from translation improvements. A disputed statement stays visible as OPEN until the reasoning is resolved.

### Pass C — English teaching narrative

Write the full section as continuous textbook prose, following the approved storyline and the depth standard in §4.5. Preserve physical motivations. Make each displayed formula serve an explanation. Include meaningful figures and worked examples.

### Pass D — Comparison and scrutiny

Compare the English section against the source inventory, line by line at the level of content blocks. Look for missing derivations, altered assumptions, unsupported new assertions, incomplete explanatory bridges and broken internal references. Perform a separate physics audit and, where applicable, an independent symbolic/numerical check.

### Pass E — Chapter integration

Read the entire chapter as a graduate student would, from beginning to end. Reconcile repeated definitions and symbol choices, transitions, figures, exercise difficulties and learning goals. Run the synchronization analysis in §4.7. Produce an English PDF for review, with all unresolved issues listed explicitly.

### Pass F — Whole-book revision

At cumulative milestones, read adjacent chapters together and finally read all eight as one text. Harmonize symbols, definitions, typographical hierarchy, cross-references, bibliography, diagrams and instructional level. Check that the final table of contents reflects the actual pedagogy.

**Working cadence:** maintain the original eight-chapter roadmap. The first demonstration unit should establish the global style through a complete, carefully reviewed section (suggested: Chapter 1, Stern–Gerlach plus sequential measurements), then use the same method throughout. Chapter sequence and any parallelization can be adjusted by the instructor; no content family is discarded in advance.

### Example status record for one section

| Field | Example |
|---|---|
| Content ID | SRC-C01-S01 |
| Source | PDF pp. 1–3 |
| Target notes location | N-C01-S01 (provisional) |
| Draft revision | v0.1 |
| State | source-mapped / derivation-in-progress / English-draft / reviewed / instructor-revised |
| Included content | Single/serial Stern–Gerlach, optical analogy |
| Proposed addition | Measurement projectors and conditional probabilities |
| Issues | None accepted as settled until calculations reviewed |
| Companion | I-C01-01, I-C01-02 |
| Open instructor decision | How much experimental background and historical material? |
| Downstream links | Spin matrices, angular momentum, Bell |

These fields can later move to a dedicated machine-readable ledger as the notes grow. The canonical human-readable policy remains in this blueprint.

## 6. Main English notes: proposed authoring structure

**Working recommendation:** maintain the authoritative typeset lecture notes in **modular LaTeX**, with a standard PDF output. Mathematical exposition, references, notation, and long derivations are particularly well suited to it. Each chapter resides in its own source file and figures are stored independently. The PDF is a compiled product; editable sources remain the repository's long-term record.

Illustrative future tree (not yet created):

    README.md
    PROJECT_BLUEPRINT.md
    notes/
      main.tex
      preamble.tex
      frontmatter/
      chapters/
        ch01-basic-concepts.tex
        ch02-quantum-dynamics.tex
        ch03-angular-momentum.tex
        ch04-approximation-methods.tex
        ch05-scattering.tex
        ch06-symmetry-identical-particles.tex
        ch07-second-quantization.tex
        ch08-relativistic-quantum-mechanics.tex
      appendices/
      figures/
      references.bib
    companion/
      [platform and structure to be decided after prototypes]
    checks/
      [selected mathematical/numerical checks]
    releases/
      [optional reviewed PDF releases]

Proposed PDF typography: traditional readable textbook layout, coherent theorem/definition/example/problem environments, generous equation spacing, stable equation numbering, clickable TOC and cross-references, bibliography and index/glossary when useful. Figure size should be determined by its teaching function, with clean English labels, legible mathematical symbols, and intentional whitespace.

For each chapter we may maintain both a **student edition** and instructor-only derivation notes/solutions. Their exact separation remains open. Any solutions made public should be intentionally selected.

The Chinese PDF is the **reference input**, not automatically a file to commit; licensing/source-permission questions are still open.

## 7. Interactive companion: educational design

### 7.1 The two reference projects examined

**Topology in Condensed Matter: Tying Quantum Knots** — https://topocondmat.org/ ; source https://github.com/topocm/topocm_content

Transferable ideas: a genuine online-course organization, explicit prerequisites, qualitative physical narratives, numerical experiments woven into topics, links to deeper research, and self-study explorations. Its current public materials use Jupyter Book with interactive plotting; the project's November 2025 update describes a move to Jupyter Book 2 and Plotly. We should borrow the relation between *explanation, computational experiment, and further exploration*, not replicate its particular condensed-matter curriculum.

**Shiling Liang's PRX interactive explainer** — https://shilingliang.com/files/thermodynamic_space_explainer.html

Transferable ideas: one consistent conceptual visual language; a glossary; paper-equation and figure references; interactive laboratories that open at pedagogically meaningful parameter choices; progressive explanations; parameter sliders, graphical feedback, self-check questions and explicit distinction between what the research article establishes and what an educational visualization constructs. For our textbook, references should point to **stable lecture-note equation/section IDs** rather than PRX figure numbers. This project is a focused research-paper companion and is a model for the **design of individual labs**, not by itself the full architecture of a semester-long course.

Additional relevant example: OSCAR/OSSCAR quantum-mechanics interactive notebooks (https://github.com/osscar-org/quantum-mechanics) — particularly interactive wells, avoided crossings and wave-packet evolution.

The reference pages were inspected for their described structure and features. We have **not** yet benchmarked every interactive control or recreated their implementations.

### 7.2 What an interactive unit must do

Each lab is built around **one question that students can answer more deeply by interacting**. A useful unit has:

1. A precise question and short context.
2. An initial visualization in a meaningful, already-interpretable state.
3. At most a few important initial controls, each with a physical meaning and units.
4. Clearly marked observable(s), predictions and invariant(s).
5. A step-by-step “try this → predict → observe → explain” sequence.
6. A derivation or explanation that maps the visualization to the notes.
7. A conceptual self-check and a deeper, open-ended exploration.
8. Direct links to the prerequisite and follow-up note sections.
9. An accessible static explanation for students unable to run the lab.
10. Verification of outputs against analytic benchmarks or trusted independent calculations.

A complex model may have an advanced tab. Visual clarity and physics take precedence over the number of adjustable parameters or animation effects.

### 7.3 Candidate interactive units, mapped to the actual source

All are **candidates**; selection and depth are decided after the main section's pedagogical review.

| ID | Source | Core interaction | What it teaches beyond a static plot |
|---|---|---|---|
| I-C01-01 | C1, pp. 1–3 | Serial Stern–Gerlach analyzer axes, spin preparation, postselection, counts | Sequential noncommuting measurement and recovery of discarded outcomes |
| I-C01-02 | C1, pp. 9–16 | Change spin-measurement axis; show amplitudes and probabilities | Born rule, projectors, repeatability, basis dependence |
| I-C01-03 | C1, pp. 16–24 | Rotate bases and vary Gaussian width | Unitary transformation, Fourier duality, uncertainty |
| I-C02-01 | C2, pp. 25–34 | Spin in a controllable field; Bloch-vector evolution | State/picture equivalence, precession and expectation values |
| I-C02-02 | C2, pp. 35–42 | Number vs coherent state; animate phase-space and probability density | Ladder algebra, coherent motion and uncertainty |
| I-C02-03 | C2, pp. 42–47 | Potential and energy sliders, exact/WKB comparison | Turning points, tunnelling and approximation failure |
| I-C02-04 | C2, pp. 48–52 | Compare classical path, nearby paths and propagator phase | Stationary phase and path interference |
| I-C02-05 | C2, pp. 53–61 | Aharonov–Bohm flux and interference fringes | Gauge-invariant phase despite field-free paths |
| I-C03-01 | C3, pp. 62–71 | Spin-1/2 rotations on Bloch sphere, vary angle to 4π | SU(2) rotation, phases and 2π/4π behavior |
| I-C03-02 | C3, pp. 72–76 | Compare pure-state mixtures with same density matrix | Ensemble ambiguity, coherence and purity |
| I-C03-03 | C3, pp. 77–91 | Couple two spins, display basis change and coefficients | j composition and Clebsch–Gordan structure |
| I-C03-04 | C3, pp. 92–96 | Select measurement axes and compute Bell correlations | Classical bounds versus quantum predictions |
| I-C04-01 | C4, pp. 97–108 | Vary perturbation strength in a two-level Hamiltonian | Avoided crossings, degenerate versus ordinary perturbation |
| I-C04-02 | C4, pp. 109–113 | Move trial-state parameters and compare exact energy | Variational bounds and the importance of an ansatz |
| I-C04-03 | C4, pp. 113–120 | Drive a transition by frequency and time | Resonance, spectral broadening and transition probability |
| I-C05-01 | C5, pp. 121–134 | Vary potential and energy, inspect Born amplitude | Momentum transfer, validity of weak-scattering approximation |
| I-C05-02 | C5, pp. 134–139 | Phase-shift and partial-wave contributions | Interference among angular momenta, cross-section structure |
| I-C06-01 | C6, pp. 144–153 | Exchange two wave packets; compare bosons/fermions | Symmetrization, anti-symmetrization and exchange correlations |
| I-C07-01 | C7, pp. 154–173 | Create/annihilate modes in Fock basis | Occupation states, statistics, operator signs |
| I-C07-02 | C7, pp. 168–173 | Transform a simple two-mode Hamiltonian between pictures | Many-body operators and field-mode representation |
| I-C08-01 | C8, pp. 174–186 | Vary relativistic momentum and inspect spinor components | Dispersion, positive/negative-frequency solutions and spinor structure |

Additional exploratory directions—open-system dynamics, entanglement, quantum information, topological effects, or links to current research—remain available for future discussion. Their placement should be driven by prerequisite structure and the instructor's goals, not by assumed curricular fashion.

### 7.4 Platform options, still open

| Approach | Strength | Trade-off / question |
|---|---|---|
| **Jupyter Book 2 / MyST** | Structured online book, equations, figures, links, executable notebooks; close to the Topocondmat precedent | Careful integration needed to provide polished self-contained controls |
| **Custom static HTML/JavaScript labs** | Fine-grained, fast, responsive visual interactions; close to the Shiling Liang explainer model | More bespoke maintenance; needs deliberate coordination with the lecture notes |
| **Jupyter notebooks with JupyterLite or similar browser kernels** | Student exploration, editable code, reproducible calculations in a browser | Browser-kernel package/performance limitations and a steeper entry point |
| **Hybrid** | A consistent textbook-like website containing polished JS labs and optional deeper notebooks | Requires coordination of visual conventions and navigation |

**Provisional design direction:** experiment with **a hybrid**, with a readable online companion, small browser-native physics labs, and optional notebooks for numerical extensions. The final platform remains undecided until two real prototypes have been assessed: (i) serial Stern–Gerlach and (ii) oscillator/coherent state or WKB. Compare physics fidelity, mobile/desktop readability, offline capability, deployment cost, maintainability, and student learning value.

Jupyter Book 2 reference: https://jupyterbook.org/stable/  
JupyterLite reference: https://jupyterlite.readthedocs.io/en/stable/  
These are possibilities, not current infrastructure commitments.

### 7.5 Visual and conceptual consistency in the companion

- Same mathematical notation, units, physical sign conventions and variable names as the lecture notes.
- A stable and restrained palette with semantic meanings defined once (e.g., initial/final state, allowed/forbidden region, exact/approximate result). Avoid adopting colors before seeing real prototypes.
- Figure controls have displayed values and appropriate ranges; axes label quantities and units in English.
- Use meaningful default examples rather than random initial settings; distinguish analytic expressions from numerical approximations.
- State what a student should observe when changing a parameter and why.
- Preserve keyboard accessibility and offer static alternatives for motion-dependent explanations.
- Record all formulas and figure defaults against stable note concept IDs.
- Interactive labs are tested both against analytic benchmarks and for usability at ordinary laptop/phone screen sizes.

## 8. Editorial ledger and decision history

### 8.1 What we record whenever we change course content

Each decision entry should include:

- **ID and date**
- **Affected content IDs/pages**
- **Decision and concise rationale**
- **What remains in the notes**
- **What moves to the companion or problems**
- **What is added, with its source or independent derivation**
- **Dependencies on earlier/later chapters**
- **Whether the instructor has confirmed the editorial choice**
- **Revision or commit link**

For mathematical repairs, record the original and replacement formulas and an independent derivation. For pedagogical changes, record student learning consequences as well as space saved.

### 8.2 Initial decision register

| ID | Question | Current position |
|---|---|---|
| D-001 | Preserve the complete eight-chapter source as an initial coverage map? | **Yes, as baseline; later trims/additions open.** |
| D-002 | Main authoring format? | **Modular LaTeX proposed; instructor discussion possible.** |
| D-003 | Course length, number of lectures and prerequisite assumptions? | **Confirmed 48 × 40 minutes and uneven prerequisite retention; blackboard-led.** Detailed route proposed in COURSE_DESIGN_48_PERIODS.md. |
| D-004 | How much of Ch. 1 is review versus full proof-based reconstruction? | **Open.** |
| D-005 | Keep Casimir and monopole sections in main narrative, enrichment, or companion? | **Open.** |
| D-006 | Density matrices, Bell tests, and quantum-information enrichment? | **Open.** |
| D-007 | Coverage of strong-coupling methods and scattering examples? | **Open.** |
| D-008 | Extent of completion/extension of relativistic spinor treatment? | **Open.** |
| D-009 | Student problem solutions: public, instructor-only, selected hints? | **Open.** |
| D-010 | Interactive platform and publication model? | **Open; compare two prototypes.** |
| D-011 | Public release, source copyright/permissions, and independent reuse of diagrams? | **Open; repository remains private for now.** |
| D-012 | Instructor acknowledgement, authorship, title page and source attribution? | **Open pending source provenance and instructor preference.** |
| D-013 | SI versus Gaussian electromagnetic conventions? | **Proposed standardization, verification pending.** |
| D-014 | Whole-book PDF only, or separate chapter PDFs as well? | **Open; modular sources support both.** |

### 8.3 Decision-log entries

**2026-10-08 — Initial project definition.** The project has two deliverables: full English graduate lecture notes based primarily on the supplied Chinese source, and a supplementary interactive study resource. All eight source chapters are inventoried and retained in the working map. The repository is private. The Chinese source has duplicated Ch. 7 pages and several mathematical passages requiring independent audit. Content cuts, additions, visual design, and the interactive platform remain subjects for subsequent instructor decisions.

**2026-10-16 — Learner profile and classroom route.** The instructor confirmed a 48-period course with 40 minutes per period (32 clock hours), very limited retained prior preparation for many students, relatively weak academic English, and pure blackboard-style teaching. Prior classroom emphasis was ~12 periods of basic concepts, 2 Berry periods after AB, 2 density-operator periods, 2 measurement-theory periods, and 4 periods of Dirac physics through emergence of spin. The historical many-particle endpoint was the full interacting second-quantized Hamiltonian; the eight-period exchange/Fock allocation in the new plan is a **proposal**, not a historical period count. New topics requested: topological condensed matter and quantum neural networks/machine learning. The newly created **[48-period course design](COURSE_DESIGN_48_PERIODS.md)** supplies a provisional 48-lecture sequence, with 4 periods each for topological matter and quantum ML, both subject to discussion and timing review. Retain the original eight source chapters and extended content in the comprehensive English notes, independent of what is derived live. Differentiate full textbook, blackboard route, and interactive remediation/exploration. Students are described neutrally in published content.

Append future entries here rather than overwriting the history. Summaries may be rewritten for clarity; decisions and their dates must stay traceable.

## 9. Project organization and maintenance

### Versioning

Use small, descriptive edits at the **section** level and coherent reviewed **chapter** revisions. Commit messages should state the actual work, for example: “Draft Ch. 1 Stern–Gerlach derivations”, “Correct oscillator Heisenberg signs”, “Add Bell correlations exercise”, “Introduce companion spin-measurement lab”.

The repository always retains editable source files. A published chapter/PDF corresponds to a specific repository revision; later changes remain reversible. A short change record for pedagogically significant modifications belongs in this blueprint until the project benefits from a separate changelog.

### Consistency checks to use as we implement

- Compile a complete PDF, with warnings and unresolved references reviewed.
- Check English-only student-facing text, spelling of names, conventions and notation.
- Inspect every newly drawn figure in its final typeset context; verify labels and captions.
- Audit every new numerical interactive example against an analytical or independent benchmark.
- Review all equation references, citations and hyperlinks affected by edits.
- Compare source content coverage against the ledger; account for additions and approved omissions.
- Review chapter openings/endings as a connected narrative, rather than stitching independent fragments.

### Repository privacy and licensing

The private repository is appropriate for development. Before any public website or translated-source publication, identify the original author, source status, reuse permissions and figure rights. If necessary, replace adapted source figures with newly authored scientific illustrations and revise attribution accordingly. A private GitHub repository is not itself a student-facing website. A public-site or access-controlled delivery mechanism will be chosen with the instructor after the content and reuse constraints are clear.

### Recovering project context in future conversations

A future collaborator or assistant should:

1. Read **README.md** and **PROJECT_BLUEPRINT.md** before making project-wide decisions.
2. Inspect the latest relevant chapter files and decision log.
3. Use exact source PDF pages for any claim about the Chinese original; request the source again if it is unavailable locally.
4. Preserve open questions and avoid quietly converting suggestions into agreed decisions.
5. Explain any proposed deviation from source or global conventions and record its rationale.
6. Update this document whenever a long-lived rule, chapter plan, or platform decision changes.

This directly addresses the risk of inconsistency across many independent editing sessions.

## 10. Proposed implementation sequence

**Stage 0 — Completed in this revision:** confirm source length; inspect the eight-chapter structure; identify seven duplicate source pages; note possible mathematical/source defects; research the named interactive references; create the enduring project blueprint and repository README.

**Stage 1 — Establish a model section and unified editorial language:** discuss the priority curricular choices, author an exemplary complete Stern–Gerlach/measurement segment, set the LaTeX notation and typography from that real text, then perform source/physics/pedagogical reviews. Build one simple corresponding interactive prototype if desired.

**Stage 2 — Build the full main text:** progress through the source map at careful section granularity, revisiting all eight chapters. Keep all derivational steps that students need, and record every omission or addition. Produce readable chapter PDFs for the instructor and a continuously compilable whole-book PDF.

**Stage 3 — Test the interactive form:** construct two contrasting high-quality prototypes, study their usability, decide the platform, and define a reusable visual/conceptual grammar. Integrate more units along the course's actual conceptual dependencies rather than enforcing a one-lab-per-section quota.

**Stage 4 — Cumulative coherence and pedagogy:** cross-check notation and physics, improve problems and further-reading pathways, verify interactive labs, prepare the final complete English note and the companion's usable learning routes.

**Stage 5 — Maintenance and release:** update examples, repair errors, collect instructional feedback, and select student access/publication arrangements consistent with licensing and repository privacy.

No deadline or quantity target is imposed at this point; the instructor's lecture schedule and available review time will inform prioritization.

## 11. What should be decided with the instructor next

The most influential first discussion concerns **course profile**, rather than software: total contact hours, students' background, balance of formal derivations versus applications, expected exercise difficulty, and whether the final chapter is meant to introduce relativistic QM or to lead into quantum field theory. After that we can revise the eight-chapter map in detail, including selective cuts, relocations and additions, while preserving the content ledger.

In parallel, choose one complete model section for a real end-to-end trial. The section will reveal the appropriate derivational depth, page design and amount of student guidance far more reliably than choosing a platform from screenshots.

The governing principle is **one evolving intellectual project, two complementary educational products, and a fully traceable editorial history**.

## 12. Addendum: confirmed teaching constraints (2026-10-16)

The reference-book blueprint remains broad. The instructor's current course has **48 periods of 40 minutes** with substantial prerequisite refresh needs and a sustained **board-derivation** teaching style. The detailed time calculation, 48 proposed period descriptions, two added topical modules, mathematical refresh strategies, and associated decisions now live in **[COURSE_DESIGN_48_PERIODS.md](COURSE_DESIGN_48_PERIODS.md)**. Use that document whenever assigning sections to classroom time or prioritizing interactive help; continue using the present blueprint when deciding the scope, rigor, and cohesion of the full text.

All eight source chapters remain part of the future comprehensive notes. Chapters not presented live are self-study chapters, not deleted chapters. The proposed 4+4 periods for topological condensed matter and quantum learning create two **classroom examples**, while the complete subject extensions remain open to ambitious development. Berry phase, density operators, measurement theory, and the interacting second-quantized Hamiltonian are explicit continuity anchors across the instructor's previous and future course versions. The final route is still **provisional** until board-writing time and instructor preferences have been reviewed.


## 13. New highest-priority workflow decision: faithful translation before content adaptation (2026-10-16)

**Confirmed by the instructor:** Develop the complete English lecture note in **two successive and separately versioned phases**.

**Phase T — faithful source translation:** Work through the 186-page Chinese source *chapter by chapter*. Translate every source sentence, displayed equation, worked example, figure and caption in the original order. No independently devised deletion, insertion, expansion, restructuring or pedagogical clarification belongs in this phase. Apply only obvious formula corrections, typographical repairs and transformations required by the project's shared notation list; document every such change in a chapter-specific translation log. Ambiguous or substantive physics issues are flagged separately for later discussion and are otherwise preserved in the translation. Original source PDF viewer page numbers are traceability anchors. Each translation chapter must be typeset in editable LaTeX, locally compiled, visually inspected and saved in GitHub with source-page coverage records. **This phase supersedes any blueprint instructions that previously implied adding new exposition or exercises while performing the initial translation.**

**Phase R — revision of the frozen English baseline:** Only after the faithful English version is available, discuss decisions on removal, replacement, new content, improved explanations, Chapter 3–5 delivery treatment, Berry phase, density/measurement, topological physics, quantum learning and how interactive independent study will connect. Record and review these as deliberate content changes relative to the frozen baseline. Full subject ambition remains unchanged by the in-class 48-period allocation.

**Phase I — interactive study:** Prepare the interactive companion **after the English notes have been completed**, using stable English sections, equation identifiers and shared mathematical conventions. Do not begin unrelated interactive production before the text baseline is in place.

**Current implementation:** [`main.tex`](main.tex) and [`chapters/ch01/`](chapters/ch01/) contain the initial faithful English Chapter 1 (Chinese PDF viewer pp. 1–24), comprising six numbered sections. [`editorial/CHAPTER01_TRANSLATION_LOG.md`](editorial/CHAPTER01_TRANSLATION_LOG.md) records scope, small corrections and flagged questions. The repository [.github/workflows/build-notes.yml](.github/workflows/build-notes.yml) compiles the tracked LaTeX to a PDF in GitHub Actions; each PDF artifact is associated with a specific source commit. The original Chinese source PDF is kept outside the GitHub repository pending permissions review.

When working on Chapters 2–8, follow this phase distinction even if later research or teaching developments suggest a more attractive story. Make those improvements in Phase R rather than the translation baseline.


## 14. Translation status: Chapter 2 completed first pass (2026-10-16)

The faithful English baseline of **Chapter 2: Quantum Dynamics** now covers **all source PDF viewer pages 25–61**, organized as the source's seven sections in `chapters/ch02/`. It includes time evolution and Dyson series; stationary states and spin precession; energy–time uncertainty; Schrödinger/Heisenberg pictures and Ehrenfest theorem; harmonic oscillator, Casimir effect and coherent states; coordinate-space wavefunctions, continuity, semiclassics and WKB; propagators/path integrals; scalar/vector gauge potentials, gravitational interference, AB effect and magnetic monopoles. All these topics follow the source's original sequence. The **source correction and open-issue ledger** is `editorial/CHAPTER02_TRANSLATION_LOG.md`. Chapter 2 has been added to the cumulative `main.tex` book and `frontmatter/notation.tex` updated. A local XeLaTeX compile produced a **54-page complete PDF containing both chapters and front matter**. Source-fidelity instructor review remains pending; subsequent Berry-phase and other content expansions remain outside the Phase-T translation. As elsewhere, GitHub Actions builds and commits a fresh PDF from the tracked source.


## 15. Translation status: Chapter 3 first pass (2026-10-16)

The full source Chapter 3, **Angular Momentum Theory**, has been translated from Chinese PDF viewer pp. **62–96** into seven LaTeX files under `chapters/ch03/`. The source's sequence is maintained: noncommuting classical rotations and generators; spin precession, neutron interferometry, Pauli matrices, Euler angles; pure/mixed ensembles, density matrices and Liouville–von Neumann evolution; general angular-momentum spectra and Wigner rotations; orbital angular momentum and spherical harmonics; Clebsch–Gordan coupling and two-spin triplet/singlet; and singlet correlations, a Bell inequality and its experimental discussion. Minimal corrections and physics questions are listed in `editorial/CHAPTER03_TRANSLATION_LOG.md` and the full-book notation list in `frontmatter/notation.tex` has been updated. The source PDF p. 62 starts with the end of Chapter 2; the chapter boundary is explicitly recorded. Local XeLaTeX generated a **78-page cumulative book**, including the title page, contents, notation and Chapters 1–3. The instructor's bilingual fidelity signoff and complete physics verification are separate later steps. Future Berry/measurement/topology/QML expansions remain outside the translation phase.


## 16. Translation status: Chapter 4 first pass (2026-10-16)

The initial faithful English version of **Chapter 4, Approximation Methods**, was completed in the seven section files under `chapters/ch04/`. The original-source boundary was verified directly in rendered PDF: Chapter 4 starts at viewer p. 97 and **continues through the upper part of p. 121**, which completes the time-ordered Dyson-series derivation; Chapter 5 starts later on that same PDF page. This corrects the preliminary 97–120 mapping, prevents losing a key result, and sets the future Chapter 5 starting point. Included content: stationary expansions, nondegenerate first/second orders and oscillator, degenerate perturbation including Stark/fine structure, variational helium, Lee-type Yukawa strong-coupling expansion, time-dependent transition amplitudes/rates and pulsed hydrogen, interaction-picture perturbation series and time ordering. Local XeLaTeX successfully built a **97-page cumulative book including all front matter and Chapters 1–4**, and the printed List of Notation was extended. High-confidence formula-sign corrections and scientific issues requiring later review are tracked in `editorial/CHAPTER04_TRANSLATION_LOG.md`. The source-faithful baseline is still awaiting the instructor's independent bilingual signoff and later physics verification. The curricular redesign and new Berry/topology/QNN units remain for a separate revision stage.


## 17. Translation status: Chapter 5 first pass (2026-10-16)

The source's **Chapter 5 — Scattering Theory** covers viewer p. 121 (lower half) through p. 139 (the upper part of p. 121 completes the preceding Chapter 4). All five sections have been rendered as editable faithful English LaTeX under `chapters/ch05/`: differential cross sections; point-source/Helmholtz Green functions and retarded/advanced contours; Lippmann–Schwinger equation in Hilbert and coordinate spaces, Dyson equation, T matrix and optical theorem; Born approximation and series; partial waves and the low-energy attractive spherical-well example. Scattering, contour, momentum-transfer, Born-series and phase-shift source sketches were represented in editable TikZ. The source contains a clear incorrect sum-of-squared-amplitudes for the *differential* partial-wave cross section and a finite-well radial matching amplitude; these and the Fourier-normalization conventions are documented in `editorial/CHAPTER05_TRANSLATION_LOG.md`. The cumulative `main.tex` and `frontmatter/notation.tex` were updated. The **112-page cumulative book** compiled locally with XeLaTeX and was inspected. Independent bilingual proofing and scientific signoff remain later milestones, and any pedagogical additions remain deferred until after Phase T.


## 18. Chapter 6 faithful translation status (2026-10-16)

Chapter 6, **Symmetry and Identical Particles**, spans viewer pp. **140–153** and contains four source sections, now translated in `chapters/ch06/`: conserved observables and good quantum numbers; spatial/time translations, rotations and parity; indistinguishability, boson/fermion exchange symmetry, Pauli exclusion, exchange-correlation figures and singlet/triplet; helium Coulomb direct/exchange integrals, atomic L/S/J and Fermi-gas pressure. Viewer p. 146 is almost blank with a sentence completing p. 145; original printed pagination restarts at viewer p. 147 while continuing the same Section 3. Two source diagrams were redrawn in editable TikZ. `frontmatter/notation.tex` has been extended and `editorial/CHAPTER06_TRANSLATION_LOG.md` records exact page mapping, faithful text, mathematical-symbol harmonization, and unresolved physics issues. Local XeLaTeX produced the **125-page cumulative Chapters 1–6 book**, including title page, contents and notation. Independent formula-by-formula bilingual proofing is outstanding; no new curricular content has been inserted. Chapter 7 begins on viewer p. 154 and contains repetition in the source.


## 19. Translation status: Chapter 7 first pass (2026-10-16)

The source's **Chapter 7 — Second Quantization** occupies viewer **pp. 154–173**, including a **byte-equivalent seven-page repetition**: pp. **154–160** are identical in both extracted text and grayscale pixel renders to pp. **161–167**. The unique material comprises **13 pages** (154–160 and 168–173). English LaTeX therefore retains the exact chapter contents only once while recording the complete pairwise source-page correspondence in `editorial/CHAPTER07_TRANSLATION_LOG.md`. This is an editorial de-duplication of exact copied pages, not content reduction. Two source sections and their original 7+4 numbered subitems are contained in five editable files under `chapters/ch07/`. They cover Fock spaces; creation/annihilation operators; unitary mode-basis transformations; Bose/Fermi algebra, Pauli exclusion, normalized occupation factors; additive one/two-particle operators, continuous field annihilation/creation, and the Heisenberg dynamics interpretation of second quantization. Source assumptions about the generality of algebraic derivations, pair-potential diagonality, Fock completeness and field operator order are preserved and flagged for Phase R. The student-facing `frontmatter/notation.tex` and cumulative `main.tex` are updated. XeLaTeX locally compiled a **135-page Chapters 1–7 book** including title, TOC and notation; reviewed PDF pages 126–135 with no overflow reports. Chapter 8 begins on viewer p. 174. Final bilingual source fidelity signoff remains outstanding.


## 20. All eight source chapters assembled in faithful English (2026-10-16)

The full 186-viewer-page Chinese source has been covered, in order, by editable English LaTeX under `chapters/ch01/` through `chapters/ch08/`. Chapter 8, Relativistic Quantum Mechanics (source pp. 174–186), has three source sections: relativistic wave equations, relativistic invariance with P/T/C and bilinear covariants, and free Dirac plane waves. The short source page 180 and formula-only final p. 186 are included. An internally contradictory gamma-zero matrix on p. 176 was repaired using the explicit matrix on p. 184 and the source's Clifford algebra; the other questions, including the status of time-reversal antiunitarity and gamma-five bilinear transformations, remain recorded rather than silently reconciled. The full translation map, conventions and phase boundaries are recorded in `editorial/FULL_BOOK_TRANSLATION_BASELINE_STATUS.md` and `editorial/CHAPTER08_TRANSLATION_LOG.md`.

Local XeLaTeX produced a **145-page complete book**, with title page, TOC, cumulative notation, and Chapters 1–8. The LaTeX is canonical. **Phase T currently means all source chapters have an initial English translation; the text is awaiting the instructor's separate bilingual, page-by-page and equation-by-equation signoff.** Scientific/editorial restructuring is Phase R, followed by Phase I interactive study resources. The source PDF remains outside GitHub pending source permissions review.

## 21. Full-book fidelity review and Phase-R handoff (2026-10-16)

A second-round audit matched all **186 Chinese PDF viewer pages** to original-order English LaTeX chapters, accounting for the seven identical duplicate pages of Chapter 7 and the shared original page boundaries 62 and 121. Complete source-page index: `editorial/SOURCE_PAGE_COVERAGE.csv`, regeneration script `scripts/build_source_coverage.py` (original PDF remains external). Section inventories identified 41 original primary sections across eight chapters. A set of **14 symbolic algebra checks** covering spin, Wigner matrices, Dirac algebra/free spinors, scattering well matching and Bell numerics passed; see `scripts/check_translation_algebra.py`. Source-based fixes restored the Chapter 2 conclusion on viewer p. 62, corrected the graphene example on p. 174, restored the two-rotation figures on pp. 69 and 86, restored the singlet measurement directions on p. 95, refined the p. 70 Euler-rotation diagrams and repaired the original repeated numeral in the Bell subsection sequence. All are independently recorded in the affected chapter logs and the full review `editorial/FULL_BOOK_FIDELITY_REVIEW_2026-10-16.md`. A clean local XeLaTeX build remains **145 PDF pages**. The preserved pre-review branch is `translation/initial-baseline-2026-10-16`.

**Review claim and limit:** The page map guarantees each original page has a designated English source section, not that each sentence and mathematical display is independently proven faithful. Sample algebra tests cannot certify every formula. An exhaustive independent bilingual sentence/formula verification remains pending before any claim of publication-grade certification. The current corrected text is suitable as a **version-preserved working basis for Phase R**, which should keep content additions conceptually and historically separate from Phase-T translation fixes. Future interactive materials follow after the English content revision.


## 22. One-page whole-book notation policy (2026-10-16)

The instructor required **one consistent notation system for the entire book**, and a **single-page printed List of Notation** with no chapter-by-chapter divisions. The original long chapter inventory was replaced by 27 concise, globally meaningful entries in `frontmatter/notation.tex`. The page now covers reusable Hilbert-space syntax, operator hats and vector typography, pure/mixed expectation values, Schrödinger/Heisenberg/interaction pictures, spin, exchange, Fock operators, scattering amplitudes, field operators, and relativistic quantities. Specialized constants and parameters are defined only where used. The detailed editor-only convention register is `editorial/NOTATION_POLICY.md`.

To resolve actual collisions, all spatial-parity uses in Chapter 6 were changed from `\\op I` to a canonical `\\parityop=\\op{\\Pi}`, avoiding Chapter 1's unrelated generic operator and the identity; Chapter 4 Dyson time ordering was changed from plain `T` to `\\timeorder=\\mathcal T`, reserving `\\op T` for the scattering transition operator; and Chapter 3 ensemble shorthand `[A]` became `\\langle A\\rangle_\\rho`, harmonized with pure-state angle-bracket averages. These are identity-preserving notation changes. The macros are declared centrally in `main.tex` and `scripts/check_notation_consistency.py` checks the conventions. The notation occupies PDF physical p. 4, followed immediately by Chapter 1 on p. 5. Compiled whole-book length is now **142 pages**, with body typography unchanged. The previous fidelity-reviewed English baseline remains preserved at `translation/fidelity-audited-2026-10-16`.


## 23. Instructor-authored supplementary lecture material integrated (2026-10-16)

The instructor explicitly confirmed that the four uploaded handwritten lecture notes on permutation symmetry, completely symmetric/antisymmetric states, bosons, and fermions were the **exclusive classroom material for indistinguishable particles and second quantization**. Therefore Chapters 6–7 on the current `main` branch were **completely replaced**, while original translated Chapters 6–7 remain available in the pre-integration Git branch `textbook/pre-instructor-supplements-2026-10-16`. The new Chapter 6 develops exchange operators, the permutation group $S_N$, example representations for $S_2,S_3$, invariant subspaces, symmetry projectors and proper Bose/Fermi normalization. The new Chapter 7 develops the boson and fermion occupation bases, the Fock direct sums, creation/annihilation rules, Bose CCR/fermion CAR, total number operator, and complete single- and two-particle operator forms, with the handouts' fermionic orbital ordering and interaction prefactor. Each source handout's date/page count and all normalization/convention decisions are specified in `editorial/CONTENT_INTEGRATION_2026-10-16.md`.

A full, photo-derived Berry-phase derivation immediately follows AB interference, before the original magnetic monopole discussion: instantaneous eigensystem, adiabatic state ansatz, dynamical and geometric phases, parameter-space Berry connection, its gauge transformation, curvature and Stokes theorem. Squeezed states follow oscillator coherent states as a **10-minute classroom insert** supplemented by optional Bogoliubov derivation and phase-space diagram. After the Chapter 3 density operator, the textbook adds composite systems, reduced states, indirect projective measurement, Kraus/POVM effects and instruments, mixed probes and an explicit tunable two-qubit measurement model; quantum teleportation is placed after Bell correlations, with all CNOT/Hadamard branches, classical communication and corrections. The provided 11-page D_K.Liu extract and three-page Nielsen--Chuang excerpt are used as references, with original explanatory text and editable figures. The complete manuscript is now locally **138 pages**, with the one-page unified Notation intact and 14 independent algebra spot checks passing. The teaching route will be separately retimed: 48 nominal periods remain the fixed budget. Source handouts remain private, external to the code repository. Full scientific/fidelity review of the new independent exposition is still an instructor approval task.


## 24. Instructor-approved nine-chapter edition and modern additions (2026-10-16)

The current 48-period course's English reference manuscript now merges handwritten permutation-symmetry and boson/fermion Fock lectures into **Chapter 6, Quantum Many-Body Systems**. The separate former Chapter 7 header was removed, and active source files are under `chapters/ch06/`. The earlier current-edition snapshot is kept on `textbook/pre-topology-qml-relativity-2026-10-16`; the historical original source-faithful translation is separately preserved.

**Chapter 7, Relativistic Quantum Mechanics** was rewritten from the instructor's uploaded 8-page 2024 handwritten lecture sheet. The order is Pauli spinors, minimal electromagnetic coupling, orbital and spin magnetic moment, Klein--Gordon equation, Dirac matrix factorization and gamma matrices, then derivation of the Pauli Hamiltonian as the Dirac positive-energy nonrelativistic limit. Detailed sign checks restore the correct `-p^4/(8m^3c^2)` relativistic correction and use a common charge `q`. The scanned reference stays private, external to GitHub.

**Chapter 8, Topological Condensed Matter Physics** begins with tight-binding translation symmetry and Bloch bands, derives the SSH dispersion, chiral symmetry, winding and Zak phase, its edge-state recurrence and normalization, two-dimensional Berry curvature and Chern numbers, a two-band Chern-insulator phase diagram, boundary transport, symmetric phases, discrete Berry overlaps and Thouless pumping. **Chapter 9, Quantum Neural Networks and Machine Learning** defines classical supervised learning, measurement readouts, parametric one- and two-qubit circuits, training and parameter-shift gradients, data-encoding expressivity, kernels, quantum-data witnesses, shot/noise models, and current trainability/quantum-advantage caveats. The contemporary chapters cite **11 official journal/publisher items with DOI**, through a shared BibTeX bibliography. Numerically verified examples include SSH winding (0 and 1), a Chern model phase diagram (0,+1,-1,0), a parameter-shift identity, and a positive-semidefinite quantum kernel.

**Student-visible cleanup and rights:** The cover contains title, `Instructor: Kangqiao LIU` and date only. An instructor-only ten-minute route paragraph was removed from squeezed-state text. The whole PDF bears a small low-contrast copyright footer `© 2026 Kangqiao LIU. All rights reserved.`, and the repository includes `LICENSE` and `COPYRIGHT.md` recognizing third-party material rights. The global one-page List of Notation remains unchanged. Original source handouts remain outside the source repo. The full implementation, source map, and checks are logged in `editorial/REVISION_2026-10-16_TOPOLOGY_QML.md`.


## 25. Interactive companion: nine-chapter design handoff (2026-10-17)

The instructor decided to proceed with the independent companion after the nine-chapter lecture-note manuscript reached a working complete edition. **[INTERACTIVE_COMPANION_BLUEPRINT.md](INTERACTIVE_COMPANION_BLUEPRINT.md)** is now the authoritative current-edition specification. **[companion/catalog.json](companion/catalog.json)** is the structured nine-chapter inventory (62 candidate physics labs, 22 provisional classroom-linked core entries), with depth, question, notes source and implementation status. **[companion/PROTOTYPES.md](companion/PROTOTYPES.md)** specifies the four calibration labs (serial Stern–Gerlach, coherent oscillator, SSH and parameter-shift learning). The earlier §7.3 list of 21 candidates is preserved as a historical map to the **original** eight source chapters and its IDs/page associations must not be treated as the live chapter mapping. The working implementation is in §companion/§; the current browser index is a navigable scaffold, not a collection of functioning physics simulations. The cover of §main.tex§ now links to this same-repository companion entrance and also carries the instructor's email and personal webpage.


## 26. Confirmed companion pedagogy: students study independently (2026-10-17)

The instructor will teach the entire live course through blackboard derivations. **Every interactive component is designed solely for optional student-led after-class use. No classroom demonstrations or presentations of these modules will occur.** The previous 22-item `core` route in the companion is henceforth a recommended independent-study progression, completely detached from the 48-period scheduling. Modules must include sufficient standalone mathematical explanation, explicit physical assumptions, multiple genuinely informative interactive calculations, controlled limiting cases, formative feedback and helpful conceptual prerequisites. Students can use one lab for as long as useful and need not follow fixed session durations. The full 62-topic scope remains. The [independent learning guide](companion/LEARNING_PATHS.md) and [current implementation status](companion/IMPLEMENTATION_STATUS.md) supersede historical class-linked companion descriptions while leaving the classroom plan unchanged.
