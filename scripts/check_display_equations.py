#!/usr/bin/env python3
"""Validate full numbering of displayed mathematics in all student chapter sources."""
import re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
chapter_files=sorted((ROOT/'chapters').rglob('*.tex'))
assert len(chapter_files)>=53,len(chapter_files)
n_total=0
for p in chapter_files:
 t=p.read_text()
 for forbidden in [r'(?<!\\)\\\[',r'(?<!\\)\\\]',r'\\begin\{align\*\}',r'\\begin\{equation\*\}',r'\\begin\{gather\*\}',r'\\begin\{multline\*\}']:
  assert not re.search(forbidden,t),f'{p}: unnumbered display using {forbidden}'
 nbegin=len(re.findall(r'\\begin\{equation\}',t))
 nend=len(re.findall(r'\\end\{equation\}',t))
 assert nbegin==nend and nbegin>0,(p,nbegin,nend)
 n_total+=nbegin
assert n_total>=1100,n_total
main=(ROOT/'main.tex').read_text()
assert r'\numberwithin{equation}{section}' in main
lab=set(re.findall(r'\\label\{(eq:[^}]+)\}', '\n'.join(p.read_text() for p in chapter_files)))
refs=set(re.findall(r'\\eqref\{(eq:[^}]+)\}', '\n'.join(p.read_text() for p in chapter_files)))
assert refs<=lab,('Unresolved eqrefs',refs-lab)
print(f'Equation numbering: PASS ({n_total} numbered display blocks; {len(refs)} named equation references).')