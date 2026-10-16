#!/usr/bin/env python3
"""Generate reproducible vector illustrations for introductory quantum ML.

Only NumPy/Matplotlib; no training libraries or external data are required.
All plotted quantities are defined by the analytic toy models in chapter 9.
"""
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT/'figures'/'qml'; OUT.mkdir(parents=True, exist_ok=True)
plt.rcParams.update({
    'font.family':'DejaVu Sans','font.size':9,
    'pdf.fonttype':42,'ps.fonttype':42,'axes.spines.top':False,
    'axes.spines.right':False,'axes.linewidth':.8,
    'xtick.direction':'out','ytick.direction':'out',
})
BLUE='#3276A3'; ORANGE='#D38752'; TEAL='#4C9A8A'; GREY='#777777'

def save(fig,name):
    fig.savefig(OUT/name,format='pdf',bbox_inches='tight',pad_inches=.12)
    fig.savefig(OUT/(name.replace('.pdf','.png')),dpi=190,bbox_inches='tight',pad_inches=.12)
    plt.close(fig)

# (A) Parameter-shift rule for f(theta) = cos(theta).
theta=np.linspace(-2.75,2.75,451)
chosen=.48
fm=np.cos(chosen-np.pi/2);fp=np.cos(chosen+np.pi/2)
exact=-np.sin(chosen)
fig,ax=plt.subplots(figsize=(5.15,2.65))
ax.plot(theta,np.cos(theta),color=BLUE,lw=1.9,label=r'$f(\theta)=\cos\theta$')
for x,y,col,lab in [(chosen-np.pi/2,fm,TEAL,r'$f(\theta_0-\pi/2)$'),(chosen+np.pi/2,fp,ORANGE,r'$f(\theta_0+\pi/2)$')]:
    ax.scatter([x],[y],s=38,c=[col],zorder=5)
    ax.plot([x,x],[0,y],lw=.8,ls=':',c=col,alpha=.85)
ax.axvline(chosen,lw=.8,c=GREY,ls='--')
ax.set(xlabel=r'Gate angle $\theta$ (rad)',ylabel='Expectation value',ylim=(-1.15,1.15),xlim=(-2.7,2.7))
ax.legend(fontsize=8.0,loc='upper right',frameon=False)
ax.text(.02,.04,rf'$\frac{{1}}{{2}}(f_+-f_-)={exact:+.3f}=f^\prime(\theta_0)$',transform=ax.transAxes,fontsize=8)
fig.tight_layout();save(fig,'parameter_shift.pdf')

# (B) Exact MSE optimization on an actual defined one-qubit model.
x=np.linspace(-1.35,1.35,31)
true_theta=.6
labels=np.cos(x+true_theta)
initial=-1.05;rate=.34
parameters=[initial];losses=[]
for iteration in range(35):
    th=parameters[-1]
    values=np.cos(x+th)
    loss=np.mean((values-labels)**2)
    deriv=np.mean(2*(values-labels)*(-np.sin(x+th)))
    losses.append(loss)
    parameters.append(th-rate*deriv)
losses=np.array(losses)
fig,ax=plt.subplots(figsize=(5.15,2.60))
ax.semilogy(np.arange(len(losses)),losses+1e-14,color=BLUE,lw=1.9)
ax.set(xlabel='Gradient-descent step',ylabel='Mean-squared error',xlim=(0,35),ylim=(1e-11,2))
ax.text(.96,.96,r'$f_\theta(x)=\cos(x+\theta)$'+'\n'+rf'$\theta_\mathrm{{true}}={true_theta:.1f},\;\theta_0={initial:.2f}$',ha='right',va='top',transform=ax.transAxes,fontsize=8)
ax.grid(axis='y',alpha=.18)
fig.tight_layout();save(fig,'one_qubit_training.pdf')
print('Training: initial/final loss =',float(losses[0]),float(losses[-1]),'last θ =',parameters[-1])

# (C) Explicit fidelity quantum kernel for Ry(x)|0>.
grid=np.linspace(-np.pi,np.pi,17)
K=np.cos((grid[:,None]-grid[None,:])/2)**2
fig,ax=plt.subplots(figsize=(4.15,3.2))
im=ax.imshow(K,origin='lower',extent=(-np.pi,np.pi,-np.pi,np.pi),vmin=0,vmax=1,cmap='viridis',interpolation='nearest',aspect='equal')
ax.set(xlabel=r'Input $x_j$',ylabel=r'Input $x_i$')
ax.set_xticks([-np.pi,0,np.pi],labels=[r'$-\pi$','0',r'$\pi$'])
ax.set_yticks([-np.pi,0,np.pi],labels=[r'$-\pi$','0',r'$\pi$'])
cbar=fig.colorbar(im,ax=ax,fraction=.046,pad=.05);cbar.set_label(r'$K(x_i,x_j)$')
fig.tight_layout();save(fig,'one_qubit_kernel.pdf')
print('Kernel λmin =',float(np.linalg.eigvalsh(K).min()))

# (D) Haar-state gradient concentration for a very specific global projector cost.
# Let |psi> be Haar random in d=2^n dimensions, and
# f(theta)=|<0^n| exp(-i theta X_1/2)|psi>|^2.
# At theta=0, f'(0)=Im(psi[0]^*psi[2^(n-1)]).
# Haar moments give Var[f'(0)] = 1/[2d(d+1)], exactly.
rng=np.random.default_rng(20261016)
ns=np.arange(2,11)
observed=[];theory=[]
for n in ns:
    d=2**int(n)
    z=rng.normal(size=(1800,d))+1j*rng.normal(size=(1800,d))
    z/=np.linalg.norm(z,axis=1,keepdims=True)
    deriv=np.imag(np.conj(z[:,0])*z[:,d//2])
    observed.append(np.var(deriv))
    theory.append(1/(2*d*(d+1)))
fig,ax=plt.subplots(figsize=(5.1,2.8))
ax.semilogy(ns,theory,lw=1.8,color=BLUE,label='Exact Haar expectation')
ax.scatter(ns,observed,s=29,color=ORANGE,marker='o',zorder=4,label='Monte Carlo (1,800 states)')
ax.set(xlabel='Number of qubits $n$',ylabel=r'$\mathrm{Var}[\partial_\theta f(0)]$',xticks=ns)
ax.legend(frameon=False,fontsize=8,loc='upper right')
ax.grid(axis='y',alpha=.15)
fig.tight_layout();save(fig,'global_projector_gradients.pdf')
print('Haar variance numerical/exact ratios:',np.round(np.array(observed)/np.array(theory),3))