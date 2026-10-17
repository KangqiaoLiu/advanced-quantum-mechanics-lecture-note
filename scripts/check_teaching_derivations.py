#!/usr/bin/env python3
"""Cross-chapter worked-example structural and physical spot checks."""
from pathlib import Path
import math
import cmath

root = Path(__file__).resolve().parents[1]
main = (root / "main.tex").read_text(encoding="utf-8")
paths = [
    "chapters/ch01/03a_nonhermitian_dimer.tex",
    "chapters/ch02/01a_unitarity_worked.tex",
    "chapters/ch03/06a_coupled_spin_worked.tex",
    "chapters/ch04/04a_variational_gaussian_worked.tex",
    "chapters/ch05/04a_delta_scattering_worked.tex",
    "chapters/ch06/04a_fock_signs_worked.tex",
    "chapters/ch07/03a_dirac_spinors_worked.tex",
    "chapters/ch08/02a_ssh_fully_worked.tex",
    "chapters/ch09/02a_parameter_shift_worked.tex",
]
for rel in paths:
    assert (root / rel).is_file(), rel
    name = rel.removesuffix(".tex")
    assert r"\input{" + name + "}" in main, "Missing from book: " + name
    assert len((root / rel).read_text()) >= 1800, rel

nonherm = (root / paths[0]).read_text()
assert nonherm.count(r"\begin{figure}") == 3, "Expect three original figures"
assert nonherm.count(r"\caption{") == 3
for label in ("fig:nh-physical-system", "fig:nh-eigenvalue-curves",
              "fig:nh-survival-curves", "eq:nh-complex-spectrum",
              "eq:nh-ep-condition"):
    assert r"\label{" + label + "}" in nonherm, label
assert "PT symmetry" in nonherm and "external reservoir" in nonherm
assert (root / "editorial/STEP_BY_STEP_PEDAGOGY.md").is_file()

def mm(a,b):
    return [[sum(a[i][k]*b[k][j] for k in range(2)) for j in range(2)]
            for i in range(2)]

def close(a,b,tol=1e-10):
    assert abs(a-b)<tol, (a,b)

J=1.
for kappa in (0., 1.6, 3.8, 4., 5.5, 8.):
    w0=2.5
    h=[[w0-1j*kappa/2, J],[J,w0]]
    center=w0-1j*kappa/4
    k=[[h[i][j]-(center if i==j else 0) for j in range(2)]
       for i in range(2)]
    sigma=J*J-(kappa/4)**2
    product=mm(k,k)
    close(product[0][0],sigma)
    close(product[1][1],sigma)
    close(product[0][1],0)
    close(product[1][0],0)
    omega=cmath.sqrt(sigma)
    eigenvalues=[center-omega,center+omega]
    for z in eigenvalues:
        det=(h[0][0]-z)*(h[1][1]-z)-J**2
        close(det,0,1e-9)
    if kappa == 4:
        assert eigenvalues[0] == eigenvalues[1]
        v=(1,1j)
        close((h[0][0]-center)*v[0]+h[0][1]*v[1],0)
        close(h[1][0]*v[0]+(h[1][1]-center)*v[1],0)

def survival(t,kappa):
    omega=cmath.sqrt(1-(kappa/4)**2)
    sinc=t if abs(omega)<1e-12 else cmath.sin(omega*t)/omega
    a=cmath.exp(-1j*2.5*t-kappa*t/4)*(cmath.cos(omega*t)-(kappa/4)*sinc)
    b=-1j*cmath.exp(-1j*2.5*t-kappa*t/4)*sinc
    return a.real*a.real+a.imag*a.imag+b.real*b.real+b.imag*b.imag

for kappa in (0.,2.,4.,6.):
    previous=survival(0,kappa)
    close(previous,1)
    for step in range(1,121):
        t=step/30
        nxt=survival(t,kappa)
        assert nxt<=previous+1e-10, (kappa,t,previous,nxt)
        previous=nxt
    if kappa==0:
        close(previous,1,1e-9)

# Confirm the closed-form EP curve in the final figure.
for t in (0.,.2,1.,2.,4.):
    close(survival(t,4),math.exp(-2*t)*((1-t)**2+t**2),1e-10)

# Worked quartic variational formula: sigma*=1 when lambda=0,
# and stationarity is sigma^4+6 lambda sigma^6=1.
def etrial(s,l):
    return .25/s**2+.25*s**2+.75*l*s**4
close(etrial(1,0),.5)
for l in (0.,.15,.7,1.5):
    lo,hi=.2,1.5
    for _ in range(80):
        mid=(lo+hi)/2
        if mid**4+6*l*mid**6>1: hi=mid
        else: lo=mid
    optimum=(lo+hi)/2
    assert etrial(optimum,l)<=etrial(optimum*.9,l)+1e-12
    assert etrial(optimum,l)<=etrial(optimum*1.1,l)+1e-12

print("PASS: nine chapter-linked worked examples and three original diagrams")
print("PASS: passive non-Hermitian matrix, EP, spectrum, survival and quartic variational bounds")
