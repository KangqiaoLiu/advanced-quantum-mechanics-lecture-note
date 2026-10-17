#!/usr/bin/env python3
"""Reject internal project-management wording on student-facing course surfaces."""
from pathlib import Path
import json
import re

root=Path(__file__).resolve().parents[1]
comp=root/"companion"
catalog=json.loads((comp/"catalog.json").read_text(encoding="utf-8"))
pages=[
    root/"README.md",
    comp/"README.md",
    comp/"LEARNING_PATHS.md",
    comp/"index.html",
    comp/"reading.html",
    comp/"assets/site.js",
    comp/"assets/reading.js",
    comp/"catalog.json",
    *[comp/item["page"] for item in catalog["labs"] if item.get("page")],
]
# Match actual publication/maintenance notices, not physics words such as
# "phase", "source", "time development" or scientific model assumptions.
banned=[
    r"project blueprint",
    r"implementation status",
    r"progress and remaining work",
    r"historic(?:al)? (?:topic|inventory|registry|version)",
    r"release[- ](?:notes|status|milestones)",
    r"\b(?:versioned|version history|development status)\b",
    r"\b(?:in development|planned for a future release)\b",
    r"selected future (?:labs|experiments|topics)",
    r"prototype (?:status|inventory|release)",
    r"(?i)advanced-quantum-mechanics-lecture-note/blob/main/chapters/",
    r"(?i)(?:href|src)=[\"'][^\"']*(?:IMPLEMENTATION_STATUS|INTERACTIVE_COMPANION_BLUEPRINT|editorial/)",
]
flags=re.IGNORECASE
for p in pages:
    text=p.read_text(encoding="utf-8")
    for pattern in banned:
        found=re.search(pattern,text,flags)
        if found:
            line=text.count("\n",0,found.start())+1
            raise AssertionError(f"{p.relative_to(root)}:{line}: student content contains internal notice {found.group(0)!r}")
assert len(pages)==43,(len(pages),"Expected five student documents, two course scripts, JSON and 35 experiments")
assert set(catalog)=={"title","chapters","labs"}
assert sum(x["category"]=="featured" for x in catalog["labs"])==27
assert sum(bool(x.get("page")) for x in catalog["labs"])==35
assert not any((comp/p).exists() for p in (
    "IMPLEMENTATION_STATUS.md","PROTOTYPES.md","LAB_TEMPLATE.md",
    "PHYSICS_CONVENTIONS.md","notebooks/README.md"
))
cover=(root/"main.tex").read_text(encoding="utf-8")
assert "instructor-directed additions" not in cover
assert r"\today" not in cover
assert "pdfsubject={Graduate lecture notes in advanced quantum mechanics}" in cover
print(f"PASS {len(pages)} public student-facing course surfaces have no internal notices")
print("PASS manuscript cover metadata and companion directory are student-focused")
