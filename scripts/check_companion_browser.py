#!/usr/bin/env python3
"""Headless browser smoke test: confirm each laboratory renders calculated results."""
import shutil
import subprocess
from pathlib import Path

root = Path(__file__).resolve().parents[1]
browser = next((path for name in ("google-chrome", "chromium", "chromium-browser")
                if (path := shutil.which(name))), None)
if browser is None:
    print("Browser smoke test unavailable: no headless Chrome/Chromium executable found.")
    raise SystemExit(0)

cases = {
    "IC-01-01": ("Visibility V", "Input density-matrix purity"),
    "IC-01-02": ("Spectral gap", "Upper Bloch vector"),
    "IC-01-04": ("Conditional selection success", "Purity before"),
    "IC-01-05": ("Invariant physical", "Rotated first-coordinate"),
    "IC-02-01": ("Longitudinal", "Bloch-vector norm"),
    "IC-02-08": ("Discrete overlap phase", "Wrapped phase error"),
    "IC-03-03": ("Trace distance", "Purity A / B"),
    "IC-03-05": ("Selected operation probability", "Output Bloch vector"),
    "IC-06-03": ("Ladder matrix-element amplitude", "Commutator"),
    "IC-08-04": ("Bulk spectral gap", "Analytic Zak phase"),
    "IC-08-06": ("Analytic lower-band Chern number", "Midpoint numerical integral"),
    "IC-09-05": ("Ideal overlap Kij", "Numerical positive eigenvalue count"),
    "IC-01-03": ("Exact survival probability", "25.00%"),
    "IC-02-03": ("Covariance determinant", "0.2500"),
    "IC-03-04": ("Reduced state ρA", "0.5000"),
    "IC-04-01": ("Exact energies E−, E+", "Minimum avoided gap"),
    "IC-05-05": ("Optical-theorem σ", "Transport cross section σtr"),
    "IC-06-04": ("Initial occupation |n〉", "Canonical anticommutator"),
    "IC-07-02": ("Dimensionless positive E", "Spinor normalization"),
    "IC-08-02": ("Bulk winding ν", "Infinite-bulk spectral gap"),
    "IC-09-03": ("Shifted gradient", "Exact loss"),
}
for lab_id, checks in cases.items():
    page = root / "companion" / "labs" / lab_id / "index.html"
    result = subprocess.run(
        [browser, "--headless", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage",
         "--allow-file-access-from-files", "--virtual-time-budget=1200", "--dump-dom", page.as_uri()],
        text=True, capture_output=True, timeout=40
    )
    assert result.returncode == 0, (lab_id, result.stderr[-2000:])
    document = result.stdout
    for marker in checks:
        assert marker in document, (lab_id, marker, document[-2000:])
    assert 'canvas' in document and 'width="720"' in document, f"{lab_id}: physics figures did not render"
    print(f"PASS {lab_id}: rendered numerical results and canvas figures in headless Chrome")
print("PASS all registered interactive laboratories: first-paint smoke tests")
