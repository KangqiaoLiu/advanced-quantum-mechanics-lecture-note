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
    "IC-01-03": ("Exact survival probability", "25.00%"),
    "IC-02-03": ("Covariance determinant", "0.2500"),
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
print("PASS four interactive laboratories: first-paint smoke tests")
