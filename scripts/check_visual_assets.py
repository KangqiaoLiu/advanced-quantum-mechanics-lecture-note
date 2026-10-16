#!/usr/bin/env python3
"""Ensure the curated source figures and the AB geometry remain intact."""
from pathlib import Path
root=Path(__file__).resolve().parents[1]
required=[
'figures/source_thesis/figure_2_1_measurement.pdf',
'figures/source_thesis/figure_2_2_qubit_probe.pdf',
'figures/qml/parameter_shift.pdf',
'figures/qml/one_qubit_training.pdf',
'figures/qml/one_qubit_kernel.pdf',
'figures/qml/global_projector_gradients.pdf']
for rel in required:
 f=root/rel
 assert f.is_file() and f.stat().st_size>4000, f'Figure file absent or too small: {rel}'
 assert f.read_bytes()[:5]==b'%PDF-', f'Not a PDF: {rel}'
measurement=(root/'chapters/ch03/03a_quantum_measurement.tex').read_text()
qml='\n'.join(p.read_text() for p in sorted((root/'chapters/ch09').glob('*.tex')))
for rel in required[:2]:
 assert rel in measurement, rel
for rel in required[2:]:
 assert rel in qml, rel
ab=(root/'chapters/ch02/07_gauge_transformations.tex').read_text()
correct=r'\draw (-1.55,-1.4) arc[start angle=180,end angle=360,x radius=1.55,y radius=.48];'
assert ab.count(correct)==2, 'Bottom semicircles no longer anchored to the two left cylinder walls'
assert r'\draw (0,-1.4) arc[start angle=180' not in ab, 'An incorrect bottom arc remains'
assert 'Professor Hong Guo' in (root/'README.md').read_text(), 'Acknowledgment not present'
print(f'Figure assets and AB cylinder geometry: PASS ({len(required)} linked PDF figures)')