#!/usr/bin/env python3
"""Check companion catalog integrity and exact current textbook source links."""
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
assert labs, "The companion must contain a navigable curriculum."
ids = [lab["id"] for lab in labs]
assert len(ids) == len(set(ids)), "Each lab ID must remain unique."
per_chapter = Counter(lab["chapter"] for lab in labs)
assert all(per_chapter.get(ch, 0) > 0 for ch in range(1, 10)), per_chapter

# Every chapter has an authored, runnable experimental entry in this release.
implemented_per_chapter = Counter(lab["chapter"] for lab in labs if lab["stage"] == "implemented")
assert set(implemented_per_chapter) == set(range(1, 10)), implemented_per_chapter

for lab in labs:
    assert re.fullmatch(r"IC-(0[1-9])-\d{2,3}", lab["id"])
    assert int(lab["id"].split("-")[1]) == lab["chapter"]
    assert lab["level"] in {"foundation", "guided", "advanced"}
    assert lab["route"] in {"core", "extension"}
    assert lab["stage"] in {"planned", "prototype", "implemented"}
    for field in ("title", "question", "observable", "minutes"):
        assert isinstance(lab[field], str) and lab[field].strip(), (lab["id"], field)
    source = lab["source"]
    # Cross-chapter links are deliberate (e.g. Chapter 1 tensor-product refresher
    # cites the rigorous composite-systems treatment in Chapter 3).
    assert re.fullmatch(r"chapters/ch0[1-9]/[A-Za-z0-9_]+\.tex", source), source
    assert (ROOT / source).is_file(), f"Missing notes source: {source}"
    if lab["stage"] == "implemented":
        page = lab.get("page")
        assert isinstance(page, str) and re.fullmatch(r"labs/[A-Za-z0-9_./-]+\.html", page), lab["id"]
        assert ".." not in Path(page).parts, lab["id"]
        assert (ROOT / "companion" / page).is_file(), f"Missing experiment page: {page}"

# Initial four exemplars are stable teaching anchors, even after they become implemented.
for anchor in ("IC-01-03", "IC-02-03", "IC-08-02", "IC-09-03"):
    assert anchor in ids, f"Missing core prototype anchor: {anchor}"

for relpath in (
    "INTERACTIVE_COMPANION_BLUEPRINT.md",
    "companion/README.md",
    "companion/PROTOTYPES.md",
    "companion/LAB_TEMPLATE.md",
    "companion/PHYSICS_CONVENTIONS.md",
    "companion/index.html",
    "companion/assets/site.js",
    "companion/assets/site.css",
):
    assert (ROOT / relpath).is_file(), f"Missing companion resource: {relpath}"

cover = (ROOT / "main.tex").read_text(encoding="utf-8")
for reference in (
    "mailto:kqliu@xhu.edu.cn",
    "https://kangqiaoliu.github.io/",
    "companion/README.md",
):
    assert reference in cover, f"Missing PDF-cover contact / companion link: {reference}"

print(
    f"Companion catalog valid: {len(chapters)} chapters, {len(labs)} questions, "
    f"{per_chapter}, {sum(x['route'] == 'core' for x in labs)} recommended self-study questions, "
    f"{sum(x['stage'] == 'implemented' for x in labs)} implemented experiments."
)
