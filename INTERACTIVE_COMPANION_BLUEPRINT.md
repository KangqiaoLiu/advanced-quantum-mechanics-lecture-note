# Interactive Companion — Master Design and Scientific Specification

**Revision:** 2026-10-17 · **Status:** nine-chapter content architecture and navigable directory prepared; interactive physics simulations are future deliverables.  
**Owner:** Kangqiao LIU · **Main notes:** [complete lecture notes](pdf/advanced-quantum-mechanics.pdf) · **Directory:** [companion/](companion/) · **Structured inventory:** [catalog.json](companion/catalog.json).  
**Applies to:** current nine-chapter `main.tex` edition, including instructor-authored many-body/Dirac material, topology, and quantum ML.  
**Continuity:** supplements [PROJECT_BLUEPRINT.md](PROJECT_BLUEPRINT.md) `7 and [COURSE_DESIGN_48_PERIODS.md](COURSE_DESIGN_48_PERIODS.md); the original eight-source-chapter list and 21 historical ideas remain a traceable record, while the new catalog is authoritative for the current edition.

## 1. Educational identity

The companion is a complete **interactive graduate-level study book**, with independent educational value and one-to-one conceptual compatibility with the nine-chapter mathematical notes. It supports both the 48 × 40-minute board-led teaching route and the material beyond classroom coverage. A learner may enter from a physical phenomenon, an algebraic prerequisite, a chapter, or a topic-to-topic dependency chain.

Three complementary learning paths:

- **Catch up:** a clear phenomenon; a short prerequisite bridge; expandable calculation; immediate feedback.
- **Reconstruct:** restore the blackboard's central derivation, predict the outcome, and verify each numerical or algebraic step.
- **Explore:** challenge assumptions, vary model parameters, investigate finite-size and approximation boundaries, and continue into the broader textbook and research literature.

**Conceptual route:** physical question → prediction → controlled experiment → observation → mathematical explanation → verification → further exploration. Full derivations and definitive mathematical conventions live in the main notes; the companion provides a distinct experimental pathway, linking back in both directions.

The companions' coverage is nine-chapter **coverage**, with variable depth, not one experiment for every textbook section or lecture period. A model counts as useful only when student interaction produces an answer unobtainable as effectively by reading a static page.

## 2. Scope and density

The current inventory includes **62 proposed laboratory questions** in [companion/catalog.json](companion/catalog.json); this is a planning baseline within the approximate 50–70-unit range, not a quota. It comprises the following draft distribution:

| Current chapter | Labs | Conceptual emphasis |
|---|---:|---|
| 1 Basic Concepts | 9 | amplitudes, eigensystems, SG, measurement, representations, Fourier, tensor prerequisites |
| 2 Quantum Dynamics | 11 | precession, pictures, oscillator, squeezing, WKB, paths, AB, gauge, Berry |
| 3 Angular Momentum Theory | 8 | spin rotations, coupling, density matrices, partial trace, instruments, Bell, teleportation |
| 4 Approximation Methods | 5 | perturbation, variational bounds, driven transitions, approximation regimes |
| 5 Scattering Theory | 5 | momentum transfer, Green functions, Born theory, partial waves |
| 6 Quantum Many-Body Systems | 6 | exchange, Bose/Fermi operators, Fock-space Hamiltonians |
| 7 Relativistic Quantum Mechanics | 4 | Pauli and Dirac construction, spinors and the nonrelativistic limit |
| 8 Topological Condensed Matter Physics | 7 | Bloch, SSH, Zak, Chern, curvature, Thouless pumping |
| 9 Quantum Neural Networks and Machine Learning | 7 | circuits, encoding, gradients, shots, kernels, trainability |
| **Total** | **62** | nine-chapter coverage |

An initial **22-lab classroom route** is identified by `route: "core"` in the catalog; it is a draft companion selection tied to the present 48-period course **without changing** the unapproved period-by-period teaching allocation. Every other lab remains part of the full independent-study route. The 22-lab flag can change after classroom pacing review.

Each laboratory has a primary depth, but can also include nested advanced questions:

| Kind | Typical learner time | Central outcome |
|---|---|---|
| `foundation` | 5–10 minutes | understand and manipulate one mathematical or interpretive obstruction |
| `guided` | 15–30 minutes | solve a full physical problem by controlled exploration and derivation |
| `advanced` | 30–60+ minutes | explore assumptions, boundary regimes and optional numerical extensions |

Time estimates indicate design intent, not assessment requirements; accessibility and physics complexity determine actual length. English for student pages; plain sentences, precise symbolic notation and visible units.

## 3. Book navigation and learning experience

- Nine-chapter **book route**, preserving the authoritative `main.tex` order.
- **48-period classroom route**, traversing chapters in the proposed teaching sequence: early foundations → dynamics/Berry → topology → density/measurement → many-body → QML → Dirac. This route remains a working plan until reviewed.
- **Concept routes** that cross chapter boundaries: `amplitudes → projectors → density operators → POVM`; `dynamics → adiabatic phase → Bloch bands → topology`; `tensor products → exchange symmetry → Fock operators`; `measurement → parameterized circuits → optimization`.
- Every lab records chapter, title, source `.tex`, question, predicted/observable quantity, depth, classroom tag, and status in the machine-readable catalog.
- Navigation can start at any lab; show prerequisites and a short mathematical refresher when relevant; every unit links back to a real current notes source and, later, stable equation or concept IDs.

A live implementation should include responsive keyboard-friendly controls, a glossary, breadcrumb navigation, readable mathematical typesetting, light/dark contrast checks, reduced-motion support, and static explanations where animation or computation is unavailable. Student progress may be ephemeral and local; core access cannot depend on accounts, installation, paid software or paid AI.

## 4. Required anatomy of a physics laboratory

For each substantive experiment:

1. **One genuine physical question.** State its domain, assumptions and why it matters.
2. **Prediction.** Ask a quantity or qualitative outcome before revealing a change.
3. **Meaningful default state.** A correct, interpretable plotted model with 1–3 essential controls initially shown.
4. **Experiment.** Controls mapped to physical variables, units and admissible ranges, with exact/approximate status visible.
5. **Observable and conserved quantity.** Display probabilities, spectra, densities, phases, expectation values or scattering observables with axis units.
6. **Guided discovery.** A short sequence of directed parameter changes and conceptual questions.
7. **Mathematical bridge.** Derivation revealed stepwise, with a reciprocal link to current textbook section, semantic equation ID and conventions.
8. **Independent checks.** Limit, symmetry, normalization, conservation, selected analytic benchmark, optional intermediate answer entry.
9. **Advanced exploration.** Test failure regimes, alternative assumptions, noncommuting order, boundaries, or numerical precision as appropriate.
10. **Static, accessible summary.** Describe what changes and why without relying on color or movement.

Interactive pages should not repeat multiple pages of the notes in prose. Full formulas may be shown when necessary to interpret observations.

## 5. Four calibration laboratories: build them to completion

The detailed first-wave specifications live in [companion/PROTOTYPES.md](companion/PROTOTYPES.md). These are conceptually distinct and calibrate the component language for all nine chapters:

| Stable ID | Laboratory | Essential physical truth and observed quantities |
|---|---|---|
| `IC-01-03` | **Cascaded Stern–Gerlach** | sequential projectors, selected/unselected outcomes, joint versus conditional probability |
| `IC-02-03` | **Oscillator/coherent states** | Fock-state phases, phase-space orbit, wave-packet width, coherent/squeezed contrast |
| `IC-08-02` | **SSH bulk, winding and edges** | bulk gap, unit-cell convention, finite open-chain termination, chiral symmetry and edge hybridization |
| `IC-09-03` | **Parameter-shift training** | exact expectation and gradient, shifted-circuit identity, concrete loss update, finite shots |

**Prototype completion requires** a self-contained page with actual operable controls; independently verified results; a clean mathematical derivation and source link; concise guided exercise and advanced question; readable desktop/mobile layout; and a review of all default and extreme parameter values. An index card marked `prototype` is a **planned prototype**, never evidence of a functioning lab.

## 6. Physical and editorial conventions

The active source of mathematical conventions remains [editorial/NOTATION_POLICY.md](editorial/NOTATION_POLICY.md), [editorial/REVISION_2026-10-16_TOPOLOGY_QML.md](editorial/REVISION_2026-10-16_TOPOLOGY_QML.md), and `main.tex`. The companion's targeted list of experimental sign tests is [companion/PHYSICS_CONVENTIONS.md](companion/PHYSICS_CONVENTIONS.md).

Prioritize these cross-chapter invariants:

- Spin probabilities depend on actual quantum states; selected outcome probabilities and joint-event probabilities are distinct.
- Observable expectation values are invariant between pictures when states and operators are transformed consistently.
- Under the book's SSH Fourier convention, `q(k)=t1+t2 exp(-ik)` and the chosen winding orientation uses the phase of `q*(k)`, yielding +1 for `t2>t1>0` in the gapped regime. Check bulk versus edge states with an explicitly stated chain termination.
- The lower-band Berry-curvature and Chern orientation must match Chapter 8; the QWZ integer phases in the supplied convention are 0,+1,-1,0 across the four gapped mass intervals.
- A POVM determines outcome probabilities; conditional state update also requires an instrument/Kraus implementation.
- Fermionic orbital order fixes Jordan–Wigner/parity signs; the factor `1/2` in the two-body operator follows the book's unsymmetrized matrix-element convention.
- For `R_mu(theta)=exp(-i theta sigma_mu/2)`, the elementary parameter shift uses ±π/2 with weight 1/2. Clarify dependence on the generator spectrum.
- Gaussian-coupling and metric conventions in the rewritten Dirac chapter are authoritative; keep explicit `hbar` and `c` where the notes do.
- Clearly distinguish exact diagonalization, sampled values, semiclassical approximations, and animated heuristics. The view and captions must identify which is being shown.

New notation must be defined close to its first use, and derivation references should favor durable semantic LaTeX labels over printed page/equation numbers. Edit textbook labels only if warranted; keep a dependency record for changes affecting multiple labs.

## 7. Technology: prototype-first, deployment-neutral

Recommended direction is a hybrid: a **readable book-like website** for concepts and links; **browser-native numerical/graphical labs** for essential experiments; optional **standalone Python notebooks** for more intensive derivations or calculations. Test this against MyST/Jupyter Book 2 embedding, rather than committing to the framework ahead of four actual labs.

Current `companion/index.html` is an honest **catalog and navigation scaffold** whose lab cards have source-note links; it is not yet an experiment engine. Its source of truth is `companion/catalog.json`, which can later generate Jupyter Book navigation or native pages. Development should favor reproducible deterministic physics functions independent from view rendering. Prefer the simplest numerical method that delivers demonstrably correct physics.

The local catalog can be previewed with:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/companion/`. Production deployment, domain, access rights, and eventual destination of the PDF cover link require a later publication decision; the cover currently points to the working `companion/README.md` in this same private repository.

## 8. Validation and release quality

A lab is complete only when:

- Its assumptions, analytic limit(s), sign conventions and textbook mapping are recorded.
- Normalization/unitarity or the appropriate trace/continuity/cross-section identities pass independent evaluation.
- Extreme or degenerate parameter cases are treated explicitly rather than hidden; numerical accuracy is conveyed where relevant.
- Visual axes, legends, text, equation rendering and line layout have been inspected on representative desktop and narrow/mobile viewports, with no collision, truncation or illegible controls.
- Controls work by pointer and keyboard; reduced-motion and static alternatives preserve meaning.
- Guided predictions, feedback and follow-up exercises are physically correct and unambiguous.
- All student-facing text and figure labels are English, references work, and no rights-restricted third-party image is copied without clearance.
- Every shipped lab has a fixed meaningful example, a small independent numerical test, an explanatory physical takeaway, and a link to its original derivation.

For the **catalog scaffold**, run `python3 scripts/check_companion_catalog.py`. For physics experiments, create model-specific deterministic tests plus independent comparison wherever possible; a successful webpage render alone is insufficient.

## 9. Practical development sequence: three substantive passes

**Pass A — Foundation and four calibration prototypes.** Establish the nine-chapter catalog, learning routes, terminology, baseline layout and reusable lab template (current scaffold). Implement the four laboratories to full scientific and visual quality, then compare delivery technology and settle a uniform design system.

**Pass B — Populate all nine chapters.** Develop coherent clusters of foundational short interactions and guided experiments, preserving advanced extensions; join the 22-lab initial classroom route to the period IDs and cross-chapter conceptual pathways. Parallelize chapter content where the models are mathematically independent, with integrated notation review.

**Pass C — End-to-end coherence, pedagogy and delivery.** Audit the entire set alongside the PDF notes, repair conceptual discontinuities, validate numerical results and student exercises, inspect mobile/desktop accessibility, obtain permission for distribution and select the site publishing/hosting arrangement. Update the printed cover's Companion link when a usable website is hosted.

Prefer comprehensive deliverables in these three passes to excessive micro-iterations. No artificial target date or lab count determines scientific quality.

## 10. Decision register and maintenance

| ID | Decision | State |
|---|---|---|
| IC-D01 | Nine-chapter companion aligned with the current manuscript | **Approved for project planning, 2026-10-17** |
| IC-D02 | Initial catalog contains 62 questions; all remain candidates and coverage can grow | **Planning baseline** |
| IC-D03 | Three depths and three self-study paths; 22 suggested classroom-linked labs | **Planning baseline; timing open** |
| IC-D04 | Calibrate with SG, oscillator, SSH, QML training | **Next implementation group** |
| IC-D05 | Browser-native physics + book navigation + optional numerics | **Leading option; compare prototypes** |
| IC-D06 | Host under a specific public domain / permissions model | **Open** |
| IC-D07 | Cover links to `companion/README.md` in same private repository until deployable public URL exists | **Implemented placeholder destination** |
| IC-D08 | Preserve legacy `PROJECT_BLUEPRINT.md` table as historical eight-chapter map | **Documented; new catalog supersedes it for current edition** |

Source claims, permissions, code/data rights and original academic sources remain governed by [COPYRIGHT.md](COPYRIGHT.md). The current catalog is a documented intention: mark an item as functioning only after a tested experiment is actually present.

**Hand-off to the next conversation:** read `README.md`, this blueprint, `companion/README.md`, `companion/catalog.json`, `companion/PROTOTYPES.md`, `companion/PHYSICS_CONVENTIONS.md`, the applicable `chapters/chNN/*.tex` and `editorial/NOTATION_POLICY.md`. Compare actual repository contents with this plan before implementation. Update the catalog and this document when decisions change.


## 11. First implementation milestone (2026-10-17)

The four calibration labs have been authored and linked from the companion homepage: [IC-01-03](companion/labs/IC-01-03/index.html), [IC-02-03](companion/labs/IC-02-03/index.html), [IC-08-02](companion/labs/IC-08-02/index.html), [IC-09-03](companion/labs/IC-09-03/index.html). They include independent physics models, multiple responsive visualizations, parameter controls, guided questions, worked mathematical bridges, scope notes and source-note links. Numerical regression tests: `node scripts/test_companion_models.cjs`. Page/asset checks: `python3 scripts/check_companion_pages.py`. These run on the CI workflow `check-companion.yml`. The catalog marks precisely these four entries `implemented` with working page paths. Initial release is a **local browser-capable, source-controlled website** within the private repository; public GitHub Pages deployment and browser-based visual/device validation remain separately reviewable steps.


## 12. Complete nine-chapter exemplar route (2026-10-17)

Nine substantive, verified laboratory modules are implemented, one in each textbook chapter. Newly added: IC-03-04 (Schmidt entanglement/partial trace), IC-04-01 (two-level avoided crossing, perturbative accuracy), IC-05-05 (elastic partial waves and optical theorem), IC-06-04 (fermionic operator-order signs and anticommutators), and IC-07-02 (Dirac free spectrum and velocity). The four earlier calibration exemplars remain active. All working modules contain explanatory material, parameter controls, real numerical or analytical predictions, independent worked results, exercises and verified mathematical limiting cases. The source catalog preserves 62 entries, now **9 implemented and 53 planned**; 7 of the 22 proposed classroom-route entries are implemented.

Remaining program, prioritized by educational importance and original scope:

- **Core textbook and 48-period alignment:** finish the other 15 classroom-route experiments, especially complex phases, eigenproblems, measurement and representations, spin precession, Berry phase, density matrices, instruments, bosonic occupations, fermionic permutations, core quantum-circuit output and relativistic spin emergence. Verify that each experimental activity fits the intended blackboard material.
- **Complete substantive nine-chapter self-study content:** implement the remaining 38 extension laboratories, including WKB, path integrals, time ordering, angular momentum addition/Bell/teleportation, variational and resonance, Green functions, Lippmann–Schwinger, higher many-body observables, Dirac spinor extensions, Chern insulators, pumping, and QML trainability. Quality and physical derivation take precedence over lab-count throughput.
- **Teaching and research quality pass:** mathematically independent benchmark datasets; cross-chapter notation/assumption review; browser-device and screen-reader testing; well-designed guided learning journeys, prerequisite reminders, formative assessments and optional notebook equivalents; verify individual figure legibility and full textbook chapter coverage.
- **Access/publication:** retain private Codespaces preview. If published publicly, split copyright-cleared interactive originals into a public deployable site before enabling GitHub Pages; retain protected lecture sources in the private repository. Update cover hyperlink only after the final hosting address is fixed.

All currently implemented laboratory pages are accessible through `companion/index.html`, with running values verified in headless Chrome on CI. These are meaningful self-study examples but do not yet constitute a fully authored 62-laboratory textbook or a completed instructional pilot.


## 13. Independent-study delivery policy — authoritative update (2026-10-17)

The instructor confirmed that *all interactive experiments are an optional self-paced after-class resource*. Live teaching uses blackboard derivations exclusively, with **no in-class interactive demonstration**. Abandon classroom-time restrictions when designing the interactive companion. Each unit should stand alone as a substantive learning experience: motivating question, prerequisites, accurate mathematical and physical derivation, multiple quantitative views, controllable assumptions, distinct limiting cases, structured student investigations, formative feedback, original-source cross-references and model verification. The catalog `route=core` means recommended self-study progression only; the full 62-topic companion stays broad. The present website implements at least 21 tested laboratories across all nine chapters and the remaining count is maintained dynamically in [companion/IMPLEMENTATION_STATUS.md](companion/IMPLEMENTATION_STATUS.md). This policy supersedes earlier classroom-linked scheduling language for the companion.
