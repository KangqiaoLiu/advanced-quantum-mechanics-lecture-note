#!/usr/bin/env python3
"""Validate the student-facing curriculum and authored physics-page assets."""
from pathlib import Path
from collections import Counter
import json
import re

root=Path(__file__).resolve().parents[1]
public=json.loads((root/"companion/catalog.json").read_text(encoding="utf-8"))
labs=public["labs"]
assert [x["number"] for x in public["chapters"]]==list(range(1,10))
assert len(labs)==62
assert len({x["id"] for x in labs})==len(labs)
tracks=Counter(x["category"] for x in labs)
assert tracks=={"featured":27,"foundation":8,"reading":27}, tracks
assert sum(bool(x.get("page")) for x in labs)==35
assert set(x["chapter"] for x in labs if x["category"]=="featured")==set(range(1,10))
assert set(public)=={"title","chapters","labs"}, set(public)
for hidden in ("stage","editorial_track","route","source","reading_reason","revision","version","status","curation","release_date"):
    assert all(hidden not in x for x in labs) and hidden not in public, hidden
for x in labs:
    assert re.fullmatch(r"IC-0[1-9]-\d{2,3}",x["id"]),x["id"]
    assert int(x["id"][3:5])==x["chapter"]
    assert x["title"] and x["question"] and x["minutes"]
    assert x.get("page") or x.get("reading"), x["id"]
    if x.get("page"):
        assert x["category"] in ("featured","foundation"),x["id"]
        assert re.fullmatch(r"labs/IC-0[1-9]-\d{2,3}/index\.html",x["page"]),x["page"]
        assert (root/"companion"/x["page"]).is_file()
    else:
        assert x["category"]=="reading",x["id"]
        item=x["reading"]
        assert item["url"].startswith("https://") and len(item["task"])>=55
        related=next(y for y in labs if y["id"]==item["related"])
        assert related.get("page"),x["id"]

# The teacher-only archive retains scientific source mappings and editorial records.
archive=json.loads((root/"editorial/COMPANION_CURATION_ARCHIVE.json").read_text(encoding="utf-8"))
assert len(archive["labs"])==len(labs)
for student,original in zip(labs,archive["labs"]):
    assert student["id"]==original["id"] and student["chapter"]==original["chapter"]
    assert (root/original["source"]).is_file(),original["source"]

cover=(root/"main.tex").read_text(encoding="utf-8")
assert "companion/index.html" in cover
assert (root/"companion/reading.html").is_file()
assert (root/"companion/assets/site.js").is_file()
assert (root/"companion/assets/reading.js").is_file()
print("PASS: student-facing catalog: 27 featured labs, 8 foundations, 27 guided readings")
print("PASS: teacher-only archive retains source and historical information")
