#!/usr/bin/env python3
"""Verify the companion's current nine-chapter catalog and local source mapping."""
import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "companion" / "catalog.json"
data = json.loads(CATALOG.read_text(encoding="utf-8"))
chapters = data["chapters"]
labs = data["labs"]
assert [c["number"] for c in chapters] == list(range(1, 10))
assert len({c["name"] for c in chapters}) == 9
assert len(labs) == 62, len(labs)
assert Counter(lab["chapter"] for lab in labs) == {
    1: 9, 2: 11, 3: 8, 4: 5, 5: 5, 6: 6, 7: 4, 8: 7, 9: 7
}
ids = [lab["id"] for lab in labs]
assert len(ids) == len(set(ids))
for chapter in range(1, 10):
    actual = [lab["id"] for lab in labs if lab["chapter"] == chapter]
    assert actual == [
        f"IC-{chapter:02d}-{i:02d}" for i in range(1, len(actual) + 1)
    ]
for lab in labs:
    assert re.fullmatch(r"IC-0[1-9]-\d{2}", lab["id"])
    assert lab["level"] in {"foundation", "guided", "advanced"}
    assert lab["route"] in {"core", "extension"}
    assert lab["stage"] in {"planned", "prototype"}
    for field in ["title", "question", "observable", "minutes"]:
        assert isinstance(lab[field], str) and lab[field].strip()
    src = lab["source"]
    assert src.startswith(f"chapters/ch{lab['chapter']:02d}/")
    assert (ROOT / src).is_file(), f"Missing notes source for {lab['id']}: {src}"
expected = {"IC-01-03", "IC-02-03", "IC-08-02", "IC-09-03"}
assert {lab["id"] for lab in labs if lab["stage"] == "prototype"} == expected
assert sum(lab["route"] == "core" for lab in labs) == 22
assert (ROOT / "companion" / "index.html").is_file()
assert (ROOT / "companion" / "assets" / "site.js").is_file()
assert (ROOT / "companion" / "assets" / "site.css").is_file()
assert (ROOT / "INTERACTIVE_COMPANION_BLUEPRINT.md").is_file()
assert (ROOT / "companion" / "PROTOTYPES.md").is_file()
print("Companion catalog valid: 9 chapters, 62 lab questions, 22 classroom-route candidates, 4 prototypes.")
