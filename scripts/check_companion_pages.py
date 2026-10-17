#!/usr/bin/env python3
"""Verify finished companion lab pages and referenced local assets."""
from html.parser import HTMLParser
from pathlib import Path
import json

root = Path(__file__).resolve().parents[1]
comp = root / "companion"
catalog = json.loads((comp / "catalog.json").read_text(encoding="utf-8"))

class Inspect(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.ids = set()
        self.duplicates = set()
        self.canvas = 0
        self.scripts = 0
        self.figure_alts = 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a:
            if a["id"] in self.ids:
                self.duplicates.add(a["id"])
            self.ids.add(a["id"])
        if tag == "canvas":
            self.canvas += 1
            assert a.get("role") == "img" and a.get("aria-label"), "Canvas needs accessible description"
        if tag == "script" and a.get("src"):
            self.scripts += 1
            self.links.append(a["src"])
        if tag == "link" and a.get("href"):
            self.links.append(a["href"])
        if tag == "a" and a.get("href"):
            self.links.append(a["href"])

finished = [x for x in catalog["labs"] if x.get("page")]
assert len(finished) >= 9, "The nine-chapter release needs a working laboratory in each chapter."
for lab in finished:
    path = comp / lab["page"]
    assert path.is_file(), path
    page = path.read_text(encoding="utf-8")
    scanner = Inspect()
    scanner.feed(page)
    assert not scanner.duplicates, (path, scanner.duplicates)
    assert scanner.canvas >= 2, (path, "Expected multiple meaningful data views")
    assert scanner.scripts >= 2, (path, "Expected independent scientific model")
    for href in scanner.links:
        if href.startswith(("http:", "https:", "mailto:", "#", "data:")):
            continue
        destination = path.parent / href.split("#")[0].split("?")[0]
        assert destination.is_file(), (path, href, "missing relative asset")
    for id in ("lab-core.js", "model.js", "lab.js"):
        assert id in page, (path, id)
    assert len(page) > 6500, (path, "Lab should contain substantial explanatory text")
    assert 'aria-label="Next and previous laboratories"' in page, (path, "Missing nine-chapter navigation")
    css = comp / "assets" / "lab.css"
    styles = css.read_text(encoding="utf-8")
    assert '@import url("site.css")' in styles, "Lab stylesheet must import the actual base stylesheet."
    assert (comp / "assets" / "site.css").is_file(), "Missing base CSS."
    print(f"PASS {lab['id']} · {scanner.canvas} accessible data figures · {scanner.scripts} local scripts")
print(f"PASS: {len(finished)} implemented laboratories and local assets")


# Curated external-reading page must exist and have accessible structure.
reading_page = comp / "reading.html"
assert reading_page.is_file(), reading_page
content = reading_page.read_text(encoding="utf-8")
assert 'id="reading-list"' in content
assert 'id="reading-error"' in content
assert 'assets/reading.js' in content
assert "guided" in content.lower()
assert (comp / "assets" / "reading.js").is_file()
print("PASS guided external-reading source and assets")
