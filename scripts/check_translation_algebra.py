#!/usr/bin/env python3
"""Deterministic spot checks for algebraic identities displayed in the translated notes.

Usage: python scripts/check_translation_algebra.py
Optional dependency: sympy. No part of this file modifies the lecture notes.
These checks supplement, and cannot replace, the source-vs-translation proof.
"""
import sympy as s

I=s.I
sx=s.Matrix([[0,1],[1,0]])
sy=s.Matrix([[0,-I],[I,0]])
sz=s.diag(1,-1)
id2=s.eye(2)
checks={}
def record(k,ok):
    checks[k]=bool(ok)
    if not ok:raise AssertionError(k)

record('Pauli commutator x,y',sx*sy-sy*sx==2*I*sz)
record('Pauli anticommutators',all((a*b+b*a)==(2*id2 if n==m else s.zeros(2)) for n,a in enumerate((sx,sy,sz)) for m,b in enumerate((sx,sy,sz))))

jx=s.Matrix([[0,1,0],[1,0,1],[0,1,0]])/s.sqrt(2)
jy=s.Matrix([[0,-I,0],[I,0,-I],[0,I,0]])/s.sqrt(2)
jz=s.diag(1,0,-1)
record('Spin-one [Jx,Jy]=iJz',s.simplify(jx*jy-jy*jx-I*jz)==s.zeros(3))
record('Spin-one J-squared=2',s.simplify(jx*jx+jy*jy+jz*jz-2*s.eye(3))==s.zeros(3))

beta=s.symbols('beta',real=True)
d=s.Matrix([[1+s.cos(beta),-s.sqrt(2)*s.sin(beta),1-s.cos(beta)],
            [s.sqrt(2)*s.sin(beta),2*s.cos(beta),-s.sqrt(2)*s.sin(beta)],
            [1-s.cos(beta),s.sqrt(2)*s.sin(beta),1+s.cos(beta)]])/2
record('Wigner d1(beta=0)=identity',d.subs(beta,0)==s.eye(3))
record('Wigner d1 is orthogonal',s.simplify(d*d.T-s.eye(3))==s.zeros(3))
record('Wigner d1 derivative generator',s.simplify(d.diff(beta).subs(beta,0)+I*jy)==s.zeros(3))

zero=s.zeros(2)
g0=s.diag(1,1,-1,-1)
gammas=[g0,s.BlockMatrix([[zero,sx],[-sx,zero]]).as_explicit(),s.BlockMatrix([[zero,sy],[-sy,zero]]).as_explicit(),s.BlockMatrix([[zero,sz],[-sz,zero]]).as_explicit()]
eta=[1,-1,-1,-1]
record('Dirac Clifford algebra',all(gammas[n]*gammas[m]+gammas[m]*gammas[n]==(2*eta[n]*s.eye(4) if m==n else s.zeros(4)) for n in range(4) for m in range(4)))
record('Dirac gamma^0 Hermiticity',gammas[0].H==gammas[0])
record('Dirac gamma^i anti-Hermiticity',all(gammas[k].H==-gammas[k] for k in (1,2,3)))

m,kx,ky,kz,E=s.symbols('m kx ky kz E',real=True,positive=True)
p2=kx*kx+ky*ky+kz*kz
P=sx*kx+sy*ky+sz*kz
A2=1/(2*m*(m+E))
up=s.Matrix([1,0])
u=s.Matrix.vstack((E+m)*up,P*up)
v=s.Matrix.vstack(P*up,(E+m)*up)
ubar_u=(u.conjugate().T*g0*u)[0]
vbar_v=(v.conjugate().T*g0*v)[0]
record('Positive-energy spinor normalized',s.simplify((ubar_u*A2-1).subs(E,s.sqrt(m*m+p2)))==0)
record('Negative-energy spinor normalized',s.simplify((vbar_v*A2+1).subs(E,s.sqrt(m*m+p2)))==0)

# Original Bell numerical contradiction for theta = pi/4.
left=s.sin(s.pi/4)**2
right=2*s.sin(s.pi/8)**2
record('Bell test: 1/2 exceeds 2sin2(pi/8)',bool(left>right))

# Spherical square-well phase shift: correct logarithmic derivative at r=a.
k,kprime,a=s.symbols('k kprime a',positive=True,real=True)
delta=s.atan((k/kprime)*s.tan(kprime*a))-k*a
# tan(ka+delta)=k/kprime tan(k'a) (phase branch explicit).
record('Spherical-well boundary matching',s.simplify(s.trigsimp(s.tan(k*a+delta)-k/kprime*s.tan(kprime*a)))==0)

for name,value in checks.items():print(f'[PASS] {name}')
print(f'{len(checks)} independent symbolic checks passed.')