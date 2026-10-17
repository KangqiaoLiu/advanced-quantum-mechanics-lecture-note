#!/usr/bin/env python3
"""Ensure the mixed-license course retains accurate author attribution."""
from pathlib import Path

root = Path(__file__).resolve().parents[1]
def read(name):
    return (root / name).read_text(encoding="utf-8")

apache=read("LICENSE")
assert apache.startswith("Apache License\nVersion 2.0, January 2004")
assert "TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION" in apache
assert len(apache) >= 10000

rights=read("COPYRIGHT.md")
assert "Kangqiao LIU retains copyright" in rights
assert "CC BY-NC-SA 4.0" in rights and "Apache License" in rights
assert "not to the entire PDF" in rights
assert "excluded" in rights.lower()
assert "Professor Pengfei Zhuang" in rights
assert "third-party" in rights

assert "creativecommons.org/licenses/by-nc-sa/4.0/legalcode.en" in read("LICENSE-CONTENT.md")
assert "Copyright 2026 Kangqiao LIU" in read("NOTICE")
assert "family-names: Liu" in read("CITATION.cff")
assert "given-names: Kangqiao" in read("CITATION.cff")
assert "https://github.com/KangqiaoLiu/advanced-quantum-mechanics-lecture-note" in read("CITATION.cff")
assert "retains copyright" in read("CONTRIBUTING.md")
assert "does not ask for a transfer" in read("CONTRIBUTING.md")
assert "Kangqiao LIU" in read("CONTRIBUTORS.md")
for path in (".github/ISSUE_TEMPLATE/physics-error.md",
             ".github/ISSUE_TEMPLATE/improvement.md",
             ".github/PULL_REQUEST_TEMPLATE.md"):
    assert (root/path).is_file(), path
assert "All rights reserved." not in read("main.tex")
assert "original instructor" in read("README.md").lower()
assert "COPYRIGHT.md" in read("companion/index.html")
print("PASS: separate Apache and CC content licenses and contributor attribution")
print("PASS: compilation and third-party rights exclusions remain visible")
