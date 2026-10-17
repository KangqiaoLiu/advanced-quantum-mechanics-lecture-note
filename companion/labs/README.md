# Physics Lab Modules

This directory is reserved for **implemented, independently checked interactive physics experiments**. The full laboratory plan currently lives in [catalog.json](../catalog.json), [PROTOTYPES.md](../PROTOTYPES.md), and [LAB_TEMPLATE.md](../LAB_TEMPLATE.md).

**Current status:** four browser laboratories with authored scientific explanations, operating parameter controls and independent model checks have been committed. The first-wave lab IDs are IC-01-03 (Stern–Gerlach), IC-02-03 (oscillator/coherent states), IC-08-02 (SSH), and IC-09-03 (QML training). As implementations begin, organize each module as `labs/IC-XX-YY/` with its browser page, model, independent numerical/analytic tests and source mapping.

Each completed experiment must have meaningful defaults, parameter ranges, visible observables, derivation and exercise links, validation, keyboard usability and static explanation. The catalog entry is updated to `stage: "implemented"` with a `page` path such as `labs/IC-01-03/index.html` only when that page exists and has passed validation.

Physics correctness and the current notes' conventions take precedence over visual animation complexity.

## Implemented laboratories

| ID | Full interactive page | Main physical model |
|---|---|---|
| IC-01-03 | [Cascaded Stern–Gerlach](IC-01-03/index.html) | Spin-½ projectors and branch conditioning |
| IC-02-03 | [Oscillator and coherent states](IC-02-03/index.html) | Exact oscillator number-state, Gaussian and Wigner descriptions |
| IC-08-02 | [SSH topological chain](IC-08-02/index.html) | Bloch bands, exact finite-chain eigenpairs and protected winding |
| IC-09-03 | [Quantum-circuit training](IC-09-03/index.html) | Parameter shift and finite-shot sample-based optimization |

See [physics regression tests](../../scripts/test_companion_models.cjs) and [page checks](../../scripts/check_companion_pages.py).
