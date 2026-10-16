#!/usr/bin/env python3
"""Deterministic mathematical spot checks for instructor-directed course additions.

Requires sympy. These checks are necessary algebraic spot checks, not a proof of
fidelity to every handwritten source equation.
"""
import sympy as s
from functools import reduce

I=s.I
zero=s.zeros(2); id2=s.eye(2)
z=s.diag(1,-1)
raiseop=s.Matrix([[0,0],[1,0]])
lowerop=s.Matrix([[0,1],[0,0]])

def ck(t,description):
    assert t,description
    print('PASS:',description)

def eqmat(a,b):
    return all(s.simplify(x)==0 for x in list(a-b))

def kron_all(xs):
    return reduce(s.kronecker_product,xs)

# S3 standard representation on the sum-zero subspace of R^3.
P12=s.diag(-1,1)
P23=s.Matrix([[s.Rational(1,2),s.sqrt(3)/2],[s.sqrt(3)/2,-s.Rational(1,2)]])
ck(eqmat(P12**2,s.eye(2)) and eqmat(P23**2,s.eye(2)),"S3 transpositions are involutions")
ck(eqmat(P12*P23*P12,P23*P12*P23),"S3 braid relation")
ck(eqmat((P12*P23)**3,s.eye(2)),"3-cycle has order three")

# Fermionic ordered Fock states via a Jordan--Wigner representation.
A=[]
for j in range(3):
    A.append(kron_all([z]*j+[lowerop]+[id2]*(2-j)))
ck(all(eqmat(A[i]*A[j]+A[j]*A[i],s.zeros(8)) for i in range(3) for j in range(3)),
   "Fermion annihilators anticommute")
ck(all(eqmat(A[i]*A[j].H+A[j].H*A[i],s.eye(8) if i==j else s.zeros(8))
       for i in range(3) for j in range(3)),"Fermion mixed CAR and occupations")

# The qubit--meter measurement derives from the original interacting two-qubit example.
t=s.symbols('t',real=True)
c,d=s.cos(t),s.sin(t)
Mdn=s.diag((c+d)/s.sqrt(2),(c-d)/s.sqrt(2))
Mup=s.diag((c-d)/s.sqrt(2),(c+d)/s.sqrt(2))
ck(eqmat(Mdn.H*Mdn+Mup.H*Mup,s.eye(2)),"Kraus completeness for arbitrary interaction angle")
ck(eqmat(Mdn.subs(t,s.pi/4),s.diag(1,0)) and eqmat(Mup.subs(t,s.pi/4),s.diag(0,1)),
   "Strong meter interaction gives projective measurement")
ck(eqmat(Mdn.subs(t,0),s.eye(2)/s.sqrt(2)) and eqmat(Mup.subs(t,0),s.eye(2)/s.sqrt(2)),
   "Zero interaction produces uninformative effects")

# Show that the interaction Hamiltonian has the measurement signs in the text.
Y=s.Matrix([[0,-I],[I,0]])
Zp=s.diag(-1,1)
mplus=s.Matrix([1,1])/s.sqrt(2)
mdn=s.Matrix([1,0]);mup=s.Matrix([0,1])
U=s.kronecker_product(s.diag(s.exp(I*t),s.exp(-I*t)),s.eye(2))
# Physical spin-conditioned meter operation: U0=cos t I+i sin t sigma_y, U1=conjugate.
B=(s.Matrix([[0,-1],[1,0]]))
sigmay=I*B
U0=c*s.eye(2)+I*d*sigmay
U1=c*s.eye(2)-I*d*sigmay
ck(eqmat(U0.subs(t,s.pi/4)*mplus,mdn) and eqmat(U1.subs(t,s.pi/4)*mplus,mup),
   "Probe Hamiltonian correlates |0> with down and |1> with up")

# Exact teleportation state decomposition from CNOT then H.
alpha,beta=s.symbols('alpha beta')
e0=s.Matrix([1,0]);e1=s.Matrix([0,1])
ket=lambda a,b,c:s.kronecker_product([e0,e1][a],[e0,e1][b],[e0,e1][c])
psi0=(alpha*(ket(0,0,0)+ket(0,1,1))+beta*(ket(1,0,0)+ket(1,1,1)))/s.sqrt(2)
CNOT=s.eye(8)
for cidx in [4,5,6,7]:
    CNOT[cidx,cidx]=0
for cidx in [4,5,6,7]:
    target=cidx^2
    CNOT[target,cidx]=1
H=s.Matrix([[1,1],[1,-1]])/s.sqrt(2)
actual=s.kronecker_product(H,id2,id2)*CNOT*psi0
expected=(alpha*ket(0,0,0)+beta*ket(0,0,1)+alpha*ket(0,1,1)+beta*ket(0,1,0)
          +alpha*ket(1,0,0)-beta*ket(1,0,1)+alpha*ket(1,1,1)-beta*ket(1,1,0))/2
ck(eqmat(actual,expected),"Teleportation CNOT--Hadamard four-branch decomposition")

# Berry connection/gauge: |n>=(cos θ/2,e^{iφ}sin θ/2)
phi,theta,k=s.symbols('phi theta k',real=True)
n=s.Matrix([s.cos(theta/2),s.exp(I*phi)*s.sin(theta/2)])
conn=s.simplify(I*(n.conjugate().T*n.diff(phi))[0])
ng=s.exp(-I*k*phi)*n
conng=s.simplify(I*(ng.conjugate().T*ng.diff(phi))[0])
ck(s.trigsimp(conn+s.sin(theta/2)**2)==0 and s.trigsimp(conng-conn-k)==0,
   "Berry connection changes by +grad beta under |n>'=e^{-i beta}|n>")
ck(s.trigsimp(s.diff(conn,theta)+s.sin(theta)/2)==0,
   "Berry curvature for the test spinor has consistent sign")

# Symplectic squeezing scales conjugate quadratures reciprocally.
r=s.symbols('r',real=True)
S=s.diag(s.exp(-r),s.exp(r))
J=s.Matrix([[0,1],[-1,0]])
ck(eqmat(S.T*J*S,J),"Squeezing preserves canonical quadrature commutator")
ck(s.simplify((s.exp(-2*r)/2)*(s.exp(2*r)/2)-s.Rational(1,4))==0,
   "Squeezed vacuum saturates the uncertainty product")
print('Supplementary algebra checks: PASS')