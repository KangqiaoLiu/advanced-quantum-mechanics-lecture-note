#!/usr/bin/env bash
# GitHub Codespaces private browser preview. No extra package installation.
set -euo pipefail
repo_root="$(cd "$(dirname "$0")/.." && pwd)"
url="http://127.0.0.1:8000/companion/"
if python3 - "$url" <<'PY'
import sys, urllib.request
try:
    with urllib.request.urlopen(sys.argv[1], timeout=2) as r:
        assert r.status == 200
except Exception:
    raise SystemExit(1)
PY
then
  echo "AQM Companion preview is already running at $url"
  exit 0
fi
nohup python3 -m http.server 8000 --bind 0.0.0.0 --directory "$repo_root" \
  > /tmp/aqm-companion-preview.log 2>&1 < /dev/null &
sleep 1
python3 - "$url" <<'PY'
import sys, urllib.request
with urllib.request.urlopen(sys.argv[1], timeout=5) as r:
    assert r.status == 200, f"Unexpected HTTP {r.status}"
print("AQM interactive companion is ready. Open forwarded port 8000, then /companion/.")
PY
