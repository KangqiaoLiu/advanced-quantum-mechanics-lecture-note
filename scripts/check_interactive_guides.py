#!/usr/bin/env python3
"""Verify every live physics lab is linked once at its lecture-note point of use."""
from pathlib import Path
from collections import Counter
import json
import re

root=Path(__file__).resolve().parents[1]
catalog=json.loads((root/"companion/catalog.json").read_text(encoding="utf-8"))
labs={x["id"]:x for x in catalog["labs"] if x.get("page")}
assert len(labs)==35

main=(root/"main.tex").read_text(encoding="utf-8")
assert r"\input{frontmatter/interactive_guides}" in main
macros=(root/"frontmatter/interactive_guides.tex").read_text(encoding="utf-8")
assert r"\newcommand{\interactiveguide}[3]" in macros
assert "https://kangqiaoliu.github.io/courses/advanced-quantum-mechanics/companion/labs/#1/index.html" in macros

found=[]
for chapter in sorted((root/"chapters").rglob("*.tex")):
    tex=chapter.read_text(encoding="utf-8")
    # Each in-text guide must have a physical question/check as argument 3.
    for match in re.finditer(
        r"\\interactiveguide\{(IC-\d{2}-\d{2})\}\{",tex):
        lab_id=match.group(1)
        assert lab_id in labs,(chapter,lab_id)
        assert len(tex[match.end():].split("\n",1)[0])>80,(chapter,lab_id)
        found.append((lab_id,chapter.relative_to(root).as_posix()))
counts=Counter(k for k,_ in found)
assert set(counts)==set(labs),{
    "missing":sorted(set(labs)-set(counts)),
    "extra":sorted(set(counts)-set(labs)),
}
assert all(n==1 for n in counts.values()),counts

# Links go to 35 concrete public browser entries, not source .tex or .md pages.
for id,item in labs.items():
    assert item["page"]==f"labs/{id}/index.html",(id,item["page"])
    assert (root/"companion"/item["page"]).is_file(),id
assert len(found)==35
print("PASS: all 35 live experiments appear exactly once in contextual in-text lecture guides")
print("PASS: direct public links correspond to every working browser experiment")
print("Distribution: "+", ".join(f"{ch}: {sum(k[3:5]==f'{ch:02d}' for k,_ in found)}"
                              for ch in range(1,10)))
