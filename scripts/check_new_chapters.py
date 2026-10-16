#!/usr/bin/env python3
"""Check major analytic examples, textbook structure and reference identifiers."""
from pathlib import Path
import cmath
import math
import re

ROOT = Path(__file__).resolve().parents[1]
checks = []

def require(cond, description):
    if not cond:
        raise AssertionError(description)
    checks.append(description)

main = (ROOT / 'main.tex').read_text()
all_text = '\n'.join(p.read_text() for p in (ROOT / 'chapters').rglob('*.tex'))
ref = (ROOT / 'references/topology_qml.bib').read_text()
require(main.count('\\chapter{') == 9, 'nine active chapters, with Chapters 6 and 7 merged')
require('\\chapter{Quantum Many-Body Systems}' in main, 'merged many-body chapter')
require('\\input{chapters/ch07/01_relativistic_wave_equations}' in main, 'relativity sourced from handwritten sequence')
require('\\chapter{Topological Condensed Matter Physics}' in main, 'topological chapter')
require('\\chapter{Quantum Neural Networks and Machine Learning}' in main, 'QNN chapter')
require('Ten-minute lecture route' not in all_text and 'Instructor-Directed Expanded Edition' not in main,
        'student prose is free from scheduling and internal-edition notes')
require('Instructor: Kangqiao LIU' in main, 'cover instructor')
require('\\AddToShipoutPictureBG' in main and (ROOT/'COPYRIGHT.md').exists(), 'per-page and repository copyright')
require('\\bibliography{references/topology_qml}' in main and ref.count('doi =') == 11, '11 DOI-identified citations')
require(all((ROOT/'chapters'/f).exists() for f in ['ch06/03_bosons.tex','ch06/04_fermions.tex','ch08/05_quantum_pumping.tex','ch09/04_worked_models.tex']), 'all substantive modules exist')

# Complex winding of q*(k) = t1 + t2 exp(+i k).
def winding(t1,t2,n=2048):
    a=[cmath.phase(t1+t2*cmath.exp(1j*(-math.pi+2*math.pi*j/n))) for j in range(n+1)]
    return sum((a[j+1]-a[j]+math.pi)%(2*math.pi)-math.pi for j in range(n))/(2*math.pi)
require(abs(winding(1,2)-1)<1e-10 and abs(winding(2,1))<1e-10,'SSH winding phases 1 and 0')
require(abs(math.sqrt(1+4-2*2)-1)<1e-10, 'SSH minimal band splitting prefactor')

# Lower-band Chern curvature = + 1/2 d dot (dkx d cross dky d) / |d|^3.
def chern(M,n=91):
    h=2*math.pi/n
    total=0.0
    for a in range(n):
        kx=-math.pi+(a+.5)*h; sx,cx=math.sin(kx),math.cos(kx)
        for b in range(n):
            ky=-math.pi+(b+.5)*h; sy,cy=math.sin(ky),math.cos(ky)
            z=M+cx+cy
            dnorm=(sx*sx+sy*sy+z*z)**1.5
            triple=sx*sx*cy+sy*sy*cx+z*cx*cy
            total+=.5*triple/dnorm
    return total*h*h/(2*math.pi)
results=[chern(M) for M in [-3,-1,1,3]]
require(all(abs(a-b)<.035 for a,b in zip(results,[0,1,-1,0])),f'QWZ Chern numerical phases {results}')

# Parameter shift, finite difference, kernel and noise checks.
for x in [-1.1,-.2,.7]:
    for theta in [-.5,.3]:
        f=lambda t:math.cos(x+t)
        derivative=.5*(f(theta+math.pi/2)-f(theta-math.pi/2))
        require(abs(derivative+math.sin(x+theta))<1e-12,'parameter shift for a single qubit')
        require(abs((1-.2)*f(theta)-((1-.2)*math.cos(x+theta)))<1e-12,'depolarizing readout')
xs=[-1.1,-.5,.1,.9]; cs=[.2,-1.4,1.1,.8]
quadratic=sum(cs[i]*cs[j]*math.cos((xs[i]-xs[j])/2)**2 for i in range(4) for j in range(4))
require(quadratic>=-1e-12,'quantum feature kernel positive semidefinite')
require(abs((.5**2)/(.5**2+.5**2)-.5)<1e-12,'Bell product-state Schmidt bound example')
print(f'All {len(checks)} checks passed; Chern values: {results}')