# Interactive Companion — Advanced Quantum Mechanics

**Instructor:** Kangqiao LIU · **Status:** four independently checked interactive experiments available in the nine-chapter catalog. Other laboratory questions remain planned.

**[Browser catalog source](index.html)** · **[Complete English lecture notes](../pdf/advanced-quantum-mechanics.pdf)** · **[Master companion plan](../INTERACTIVE_COMPANION_BLUEPRINT.md)**

This is an independently navigable, English-language learning companion to the graduate lecture notes. It will connect physical questions, mathematical predictions, numerical or analytic experiments, derivations, self-checks and research explorations.

## Ways to use the material

- **Catch up:** concise foundations, visible algebra, conceptual questions.
- **Reconstruct the lecture:** follow the 48-period board-derived route with key equations and experiments.
- **Explore more:** advanced experiments from all nine chapters, including topics beyond the live board route.

The nine-chapter catalog currently describes **62 candidate laboratory questions**, with **22 initially marked for the classroom-linked learning route**. Four prototypes are specified in detail: sequential Stern–Gerlach, harmonic oscillator/coherent states, SSH topological bands and edge states, and parameter-shift quantum-circuit training. The four representative experiments now have working browser pages, source models and independent physics checks.


## GitHub-only private browser preview

Open the [repository's Codespaces creation page](https://github.com/codespaces/new?hide_repo_select=true&repo=1410589769&ref=main), or use **Code → Codespaces → Create codespace on main** in GitHub. The committed `.devcontainer/devcontainer.json` starts a lightweight web server on port 8000. GitHub forwards that port with **Private** visibility by default. Follow the port link and visit `/companion/` (for example, `https://<codespace-name>-8000.app.github.dev/companion/`).

This method loads the four interactive laboratories and the PDF lecture notes without a local clone. Keep the port private. Codespaces has monthly account usage allowances and stops after inactivity; stop or delete unused environments at [github.com/codespaces](https://github.com/codespaces). This is an authenticated development preview, not a permanent public course website.

## Preview the catalog locally

From the repository root:

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000/companion/](http://localhost:8000/companion/). The existing `index.html` reads `catalog.json`; no packages are necessary to inspect and search the catalog. This is a **directory scaffold**, not yet a simulation application. Run the command from the **repository root** so the catalog can also link to the lecture PDF and design documents. A normal local file opening may block the catalog data file; use the short local server command above.

## Directory and working agreements

| Resource | Purpose |
|---|---|
| `index.html`, `assets/site.css`, `assets/site.js` | Working responsive chapter and laboratory browser |
| `catalog.json` | Structured, authoritative nine-chapter lab registry; IDs, notes paths, questions, levels and development status |
| `PROTOTYPES.md` | Detailed specifications and analytic review cases for four calibration laboratories |
| `LAB_TEMPLATE.md` | Per-lab prose/interaction/physics/validation checklist to copy when implementing each unit |
| `PHYSICS_CONVENTIONS.md` | Required numerical signs and physical conventions from current notes |
| `../INTERACTIVE_COMPANION_BLUEPRINT.md` | Full purpose, content density, platform trade-offs, research extensions and staged implementation |
| `../COURSE_DESIGN_48_PERIODS.md` | Provisional blackboard period route; pedagogical context |
| [`LEARNING_PATHS.md`](LEARNING_PATHS.md) | Conceptual cross-chapter pathways and 22-lab classroom-route alignment |
| [`labs/`](labs/) and [`notebooks/`](notebooks/) | Reserved module locations for fully tested interactive labs and optional numerical deep dives |
| `../scripts/check_companion_catalog.py` | Deterministic catalog integrity checker |

A future implemented lab may live under `companion/labs/<lab-id>/`, with its own documented model, test fixture, derivation and independent browser interface. Keep exact source equation mappings, formulas and fixed parameter checks close to each experiment. Research-grade calculations may be implemented in optional notebooks; student participation never requires coding.

## Publishing and copyright

This companion is currently contained in the same **private** repository as the notes. The linked PDF cover opens this README for readers with repository access. The local browser catalog does not by itself establish a hosted public website. When a hosted version exists, update the PDF cover link to it after checking permissions. All rights and treatment of source material follow [COPYRIGHT.md](../COPYRIGHT.md).

## Available interactive experiments (first complete set)

- [IC-01-03: Cascaded Stern–Gerlach](labs/IC-01-03/index.html) — projective preparation, selective/nonselective measurement, exact and sampled conditional statistics.
- [IC-02-03: Oscillator and coherent states](labs/IC-02-03/index.html) — Fock/coherent/squeezed states, time evolution, position densities, Wigner functions and occupations.
- [IC-08-02: SSH topology](labs/IC-08-02/index.html) — Bloch bands, winding, finite-chain spectra, edge-state localization and symmetry breaking.
- [IC-09-03: Quantum-circuit training](labs/IC-09-03/index.html) — parameter-shift identity, measured gradients, trainable losses and finite-shot updates.

Physics benchmarks run through `node scripts/test_companion_models.cjs`; static page/assets verification runs through `python3 scripts/check_companion_pages.py`. Both are invoked by `.github/workflows/check-companion.yml`. Run the local root-directory server described above and open `http://localhost:8000/companion/` for the working site.
