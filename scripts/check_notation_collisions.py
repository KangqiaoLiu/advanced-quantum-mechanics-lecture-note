#!/usr/bin/env python3
"""Reject mathematical notation aliases and collisions throughout the lecture notes."""
from pathlib import Path
import re

root=Path(__file__).resolve().parents[1]
tex=sorted((root/"chapters").rglob("*.tex"))
assert len(tex)>=60
rules={
 "tilde used for transpose":r"\\(?:widetilde|tilde)\s*(?:\{(?:a|F)\}|(?:a|F)\b)",
 "alternate transpose marker":r"\^\{?\\(?:top|mathrm\{T\})|\^\{T\}",
 "capitalized trace":r"\\operatorname\{Tr\}|\\mathrm\{Tr\}",
 "hatted identity":r"\\op I\b",
 "legacy operator-valued vector":r"\\vect\{\\op\s+[A-Za-z]+\}",
 "alternate identity":r"\\mathbf\s+1|\\mathbb\{I\}",
}
errors=[]
for f in tex:
 for n,line in enumerate(f.read_text().splitlines(),1):
  if line.lstrip().startswith("%"): continue
  line=re.split(r"(?<!\\)%",line,maxsplit=1)[0]
  for name,pattern in rules.items():
   for match in re.finditer(pattern,line):
    errors.append(f"{f.relative_to(root)}:{n}: {name}: {match.group(0)}")
  if r"\op T" in line and "chapters/ch05/" not in str(f):
   if not (f.name=="06_position_momentum.tex" and "distinct from the scattering transition operator" in line):
    errors.append(f"{f.relative_to(root)}:{n}: T must be reserved for scattering")
  if f.name in ("03a_nonhermitian_dimer.tex","01a_unitarity_worked.tex",
                "06a_coupled_spin_worked.tex","03a_dirac_spinors_worked.tex",
                "02a_parameter_shift_worked.tex"):
   if re.search(r"\bI\b",line):
    errors.append(f"{f.relative_to(root)}:{n}: bare matrix identity I")
if errors:
 raise AssertionError("\n".join(errors))
a=(root/"chapters/ch01/02_vector_space.tex").read_text()
assert r"a^{\mathsf T}" in a and r"\ket{a_{\mathrm{norm}}}" in a
b=(root/"chapters/ch01/05_representation.tex").read_text()
assert r"A_G=S^\dagger A_F S" in b and r"\op I" not in b
c=(root/"frontmatter/notation.tex").read_text()
assert "ordinary matrix transpose" in c
print(f"PASS: scanned all {len(tex)} chapter sources for symbol conflicts")
