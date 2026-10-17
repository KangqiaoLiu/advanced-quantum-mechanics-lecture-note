"use strict";
const assert=require("node:assert/strict");
const S=require("../companion/labs/IC-01-03/model.js");
const O=require("../companion/labs/IC-02-03/model.js");
const H=require("../companion/labs/IC-08-02/model.js");
const Q=require("../companion/labs/IC-09-03/model.js");
const close=(a,b,tol=1e-8)=>assert.ok(Number.isFinite(a)&&Math.abs(a-b)<=tol, "Expected "+a+" ≈ "+b+" (tol "+tol+")");
const dot=(a,b)=>a.reduce((z,x,i)=>z+x*b[i],0);
function integrate(f,a,b,N=24000){const h=(b-a)/N;let s=(f(a)+f(b))/2;for(let i=1;i<N;i++)s+=f(a+i*h);return s*h;}
let checks=0;
function check(name,fn){fn();checks++;process.stdout.write("PASS "+name+"\n");}
// Spin: independent Pauli projector identities and preparation branches
check("Stern–Gerlach projective probabilities and 1/4 joint survival",()=>{
 const z=S.unit(0),x=S.unit(90),steps=[{n:z,mode:"plus"},{n:x,mode:"plus"},{n:z,mode:"plus"}];
 const p=S.predict(z,steps);close(p.history[0].conditional,1);close(p.history[1].conditional,.5);close(p.history[2].conditional,.5);close(p.survival,.25);
 const sample=S.trials(z,steps,150000,423);assert.ok(Math.abs(sample.survivors-37500)<800);
});
check("Selective, nonselective and bypass operations remain distinct",()=>{
 const z=S.unit(0),x=S.unit(90);
 close(S.one(z,x,"plus").survival,.5);
 close(S.one(z,x,"both").survival,1);
 close(S.dot(S.one(z,x,"both").state,z),0,1e-14);
 close(S.dot(S.one(z,x,"bypass").state,z),1);
 assert.equal(S.one(z,z,"minus").state,null);
 const p=S.predict(z,[{n:z,mode:"minus"},{n:x,mode:"plus"}]);close(p.survival,0);assert.equal(p.state,null);
});
check("Pauli projector probabilities are complementary over arbitrary axes",()=>{
 for(let i=0;i<45;i++){const r=S.unit(i*4,37),n=S.unit((i*13)%180,0);const m=S.one(r,n,"both");close(m.pPlus+m.pMinus,1);assert.ok(S.dot(m.state,m.state)<=1+1e-12);}
});
// Oscillator: analytic normalization, Wigner marginal and time/covariance
check("Oscillator number states are normalized and stationary",()=>{
 for(let n=0;n<=5;n++){const a=O.describe({kind:"number",n,time:0}),b=O.describe({kind:"number",n,time:1.13});
 close(integrate(a.density,-9,9,24000),1,2e-7);close(a.vxx,n+.5);close(a.meanN,n);
 for(const x of [-1.2,0,.9,2])close(a.density(x),b.density(x),1e-11);
 close(a.occupation(n),1);
 }
});
check("Coherent Gaussian, Poisson occupation and Heisenberg motion",()=>{
 const a=O.describe({kind:"coherent",amplitude:1.7,phase:.4,time:Math.PI/2});
 close(a.mx,Math.SQRT2*1.7*Math.sin(.4),1e-12);
 close(a.vxx,.5);close(a.vpp,.5);close(a.det,.25);
 close(integrate(a.density,-10,10,24000),1,2e-7);
 close(Array.from({length:27},(_,n)=>a.occupation(n)).reduce((s,x)=>s+x,0),1,1e-10);
 const vacuum=O.describe({kind:"coherent",amplitude:0,time:0});close(vacuum.wigner(0,0),1/Math.PI);
});
check("Squeezed vacuum covariance and even number parity",()=>{
 for(const phi of [0,.4,Math.PI/2])for(const time of [0,.61,1.8]){
  const a=O.describe({kind:"squeezed",r:.9,squeezeAngle:phi,time});
  close(a.det,.25,1e-12);assert.ok(a.vxx>0&&a.vpp>0);
  close(integrate(a.density,-11,11,24000),1,2e-6);
  close(a.occupation(3),0);
  close(a.occupation(0),1/Math.cosh(.9));
 }
});
check("Wigner marginal equals position probability for Gaussian and Fock states",()=>{
 for(const params of [{kind:"coherent",amplitude:1.1,phase:.3,time:.5},{kind:"squeezed",r:.6,squeezeAngle:.4,time:.8},{kind:"number",n:2,time:.2}]){
  const a=O.describe(params);
  for(const x of [-1.15,.2,1.25])close(integrate(p=>a.wigner(x,p),-10,10,12000),a.density(x),2e-5);
 }
 const n1=O.describe({kind:"number",n:1});close(n1.wigner(0,0),-1/Math.PI);
});
// SSH: independent residual and orthogonality across regimes
check("SSH bulk winding, transition and staggered gap",()=>{
 close(H.bulkEnergy(Math.PI,.65,1.4),.75);
 close(H.describe({t1:.65,t2:1.4,N:10}).bulkGap,1.5);
 assert.equal(H.winding(.65,1.4,0),1);
 assert.equal(H.winding(1.4,.65,0),0);
 assert.equal(H.winding(1,1,0),null);
 assert.equal(H.winding(.65,1.4,.3),null);
 close(H.bulkEnergy(Math.PI,1,1,.7),.7);
});
check("SSH exact eigensystem residuals, orthonormality and energy symmetry",()=>{
 for(const cfg of [{t1:.65,t2:1.4,N:10,periodic:false,delta:0},{t1:1.4,t2:.65,N:8,periodic:true,delta:0},{t1:.65,t2:1.4,N:7,periodic:false,delta:.33}]){
  const D=H.describe(cfg),matrix=H.matrix(cfg.t1,cfg.t2,cfg.N,cfg.periodic,cfg.delta);
  for(let i=0;i<D.values.length;i++){
   const v=D.vectors[i],hv=matrix.map(row=>dot(row,v));
   close(dot(v,v),1,1e-9);
   close(Math.sqrt(hv.reduce((s,x,j)=>s+(x-D.values[i]*v[j])**2,0)),0,2e-8);
  }
  for(let i=0;i<D.vectors.length;i++)for(let j=i+1;j<D.vectors.length;j++)close(dot(D.vectors[i],D.vectors[j]),0,1e-8);
  if(cfg.delta===0)for(let i=0;i<D.values.length;i++)close(D.values[i]+D.values.at(-1-i),0,2e-8);
 }
});
check("SSH strongly dimerized open-chain edge zero modes and periodic removal",()=>{
 const a=H.describe({t1:0,t2:1,N:7,periodic:false,delta:0});
 close(a.values[6],0,1e-9);close(a.values[7],0,1e-9);
 const b=H.describe({t1:0,t2:1,N:7,periodic:true,delta:0});
 assert.ok(Math.min(...b.values.map(Math.abs))>.5);
});
// QNN: derivatives, sampling, entanglement and loss updates
check("Parameter shift matches direct analytic derivative for both circuits",()=>{
 for(const kind of ["one","two"])for(let j=0;j<30;j++){
   const theta=-2.7+.17*j,x=.34*j-.7,beta=.77;
   close(Q.shifted(kind,theta,x,beta),Q.derivative(kind,theta,x,beta),5e-15);
   close(Q.gradLoss(kind,theta,x,beta,.3), (Q.loss(kind,theta+1e-6,x,beta,.3)-Q.loss(kind,theta-1e-6,x,beta,.3))/2e-6,2e-9);
 }
});
check("QNN two-qubit purity and measurement edge cases",()=>{
 close(Q.purity("two",Math.PI/2,0,0),.5);
 close(Q.purity("two",Math.PI/2,0,Math.PI/2),1);
 close(Q.output("two",1,.3,Math.PI/2),0,1e-12);
 close(Q.derivative("two",1,.3,Math.PI/2),0,1e-12);
});
check("Finite shots unbiased within tolerance, training reproducible",()=>{
 const random=Q.rng(14),N=200000,mean=.37,s=Q.sample(mean,N,random);
 assert.ok(Math.abs(s.estimate-mean)<.012);
 const opts={kind:"one",theta:1,x:.3,beta:0,target:.75,eta:.32,shots:512};
 const a=Q.train(opts,14,81),b=Q.train(opts,14,81);
 assert.deepEqual(a,b);
 assert.ok(a.ideal.at(-1).loss<a.ideal[0].loss);
 close(Q.oneStep(opts,opts.theta,Q.rng(11)).gradientVariance,
    (2-Q.output("one",opts.theta+Math.PI/2,opts.x,0)**2-Q.output("one",opts.theta-Math.PI/2,opts.x,0)**2)/(4*opts.shots));
});

// Chapter 3 — Schmidt spectra, partial traces and local measurement probabilities
const Ent=require("../companion/labs/IC-03-04/model.js");
check("Two-qubit partial trace and entanglement entropy",()=>{
  for(let t=0;t<=90;t+=5)for(const phase of [-180,0,37,135]){
    const d=Ent.evaluate(t,phase);
    close(d.lambda0+d.lambda1,1);
    close(d.purity,d.lambda0*d.lambda0+d.lambda1*d.lambda1);
    close(d.joint.reduce((s,x)=>s+x,0),1);
    assert.ok(d.joint.every(x=>x>=-1e-12&&x<=1+1e-12));
    close(d.globalPurity,1);
  }
  const bell=Ent.evaluate(45,0);
  close(bell.entropy,1);close(bell.purity,.5);close(bell.E,1);close(bell.joint[0],.5);
  close(Ent.evaluate(45,180).E,-1);
  close(Ent.evaluate(45,90,0,90).E,1);
  close(Ent.evaluate(0,125).entropy,0);
  close(Ent.evaluate(30,90,0,90).E,Math.sin(Math.PI/3));
});
check("Entanglement: local density remains independent of relative phase",()=>{
  const a=Ent.evaluate(27,0),b=Ent.evaluate(27,91);
  assert.deepEqual(a.rhoA,b.rhoA);
  close(a.entropy,b.entropy);close(a.purity,b.purity);
  assert.ok(Math.abs(a.E-b.E)>.01);
  const z=Ent.evaluate(25,80,0,0,"zz");
  close(z.E,1);close(z.joint[0],Math.cos(25*Math.PI/180)**2);
  close(z.joint[3],Math.sin(25*Math.PI/180)**2);
});
// Chapter 4 — exact vs perturbative level splitting
const Avoid=require("../companion/labs/IC-04-01/model.js");
check("Avoided crossing gap, degeneracy and perturbative limit",()=>{
  const at=Avoid.evaluate(0,.4);
  close(at.gap,.8);close(at.exact[1],.4);assert.equal(at.pt[1],null);
  const deg=Avoid.evaluate(0,0);close(deg.gap,0);assert.equal(deg.pUpperZ,null);
  const distant=Avoid.evaluate(3,.2);
  assert.ok(distant.ptError<.0001);
  for(const x of [-3,-1,-.5,.5,1,3]){
   const a=Avoid.evaluate(x,.6),b=Avoid.evaluate(-x,.6);
   close(a.E,b.E);close(a.exact[0]+a.exact[1],0);
   close(a.pUpperZ+b.pUpperZ,1);
  }
});
// Chapter 5 — partial waves, angular integration and unitarity
const Scatter=require("../companion/labs/IC-05-05/model.js");
check("s+p partial-wave optical theorem and solid-angle normalization",()=>{
  // Composite Simpson integration controls quadrature error independently of the model.
  function simpson(fn,a,b,n=30000){const h=(b-a)/n;let s=fn(a)+fn(b);for(let i=1;i<n;i++)s+=(i%2?4:2)*fn(a+i*h);return s*h/3;}
  for(const [d0,d1,k] of [[0,0,1],[90,0,1],[0,90,1.8],[60,35,1.3],[120,50,.75]]){
   const s=Scatter.evaluate(d0,d1,k);
   close(s.total,s.optical,1e-10);
   close(s.sigma0+s.sigma1,s.total,1e-10);
   close(s.sigma0,4*Math.PI*Math.sin(Scatter.rad(d0))**2/(k*k));
   const numeric=simpson(theta=>2*Math.PI*Math.sin(theta)*s.ds(theta*180/Math.PI),0,Math.PI,30000);
   close(numeric,s.total,1e-7);
   if(s.total>1e-10)close(simpson(theta=>s.angularDensity(theta*180/Math.PI),0,Math.PI,30000),1,1e-8);
   const transport=simpson(theta=>2*Math.PI*Math.sin(theta)*(1-Math.cos(theta))*s.ds(theta*180/Math.PI),0,Math.PI,30000);
   close(transport,s.transport,1e-7);
   assert.ok(s.transport>=-1e-10);
  }
});
// Chapter 6 — CAR on all 16 occupation states, 32 operator pairings
const Fermi=require("../companion/labs/IC-06-04/model.js");
check("Fermionic creation order and Pauli exclusion",()=>{
 const vac=[0,0,0,0],a=Fermi.product(vac,{kind:"create",j:1},{kind:"create",j:0});
 const b=Fermi.product(vac,{kind:"create",j:0},{kind:"create",j:1});
 assert.deepEqual(a.after,[1,1,0,0]);close(a.amplitude,-1);close(b.amplitude,1);
 assert.equal(Fermi.apply([1,0,0,0],"create",0).allowed,false);
});
check("All fermionic canonical anticommutators across basis vectors",()=>{
 for(let bits=0;bits<16;bits++){
   const n=Array.from({length:4},(_,i)=>(bits>>i)&1);
   for(const j of [0,1,2,3])for(const k of [0,1,2,3])
     for(const a of ["create","annihilate"])for(const b of ["create","annihilate"]){
       const d=Fermi.compare(n,{kind:a,j:j},{kind:b,j:k});
       close(d.sum,a!==b&&j===k?1:0,1e-12);
     }
 }
});
// Chapter 7 — free Dirac block and nonrelativistic expansion
const Dirac=require("../companion/labs/IC-07-02/model.js");
check("Dirac positive-energy spinor, relativistic velocity and normalization",()=>{
 for(const p of [-3,-2,-.5,0,.5,1.5,3]){
   const E=Dirac.energy(p);
   close(E*E,p*p+1,1e-12);
   for(const t of [0,.12,1.5,3.3]){
      const pos=Dirac.evaluate(p,t,"positive"),up=Dirac.evaluate(p,t,"upper");
      close(pos.v,p/E);
      close(pos.probUpper+pos.probLower,1);
      close(up.probUpper+up.probLower,1);
      close(up.v,p/(E*E)*(1-Math.cos(2*E*t)),1e-12);
      close(up.bloch.reduce((s,x)=>s+x*x,0),1,1e-10);
      assert.ok(up.probLower>=-1e-12&&up.probLower<=1+1e-12);
   }
 }
});
check("Relativistic kinetic expansion and rest-frame state",()=>{
 close(Dirac.energy(0),1);
 close(Dirac.evaluate(0,3,"upper").v,0);
 for(const p of [.03,.08,.1]){
  const exact=Dirac.energy(p)-1,approx=Dirac.correction(p);
  assert.ok(Math.abs(exact-approx)<p**6/12);
  assert.ok(exact<Dirac.nonrel(p));
 }
});


// Expanded self-study mathematics: exact checks independent of browser rendering.
const Amp=require("../companion/labs/IC-01-01/model.js");
check("Two-path interference, coherence and pure-state visibility",()=>{
  for(const w of [0,.1,.5,.8,1])for(const eta of [0,.3,1])for(const phase of [0,45,180,270]){
    const p=Amp.predict(w,phase,eta);close(p.plus+p.minus,1);
    assert.ok(p.plus>=-1e-12&&p.plus<=1+1e-12);
    close(p.visibility,2*eta*Math.sqrt(w*(1-w)));
    close(p.purity,w*w+(1-w)**2+2*eta*eta*w*(1-w));
    if(eta===1)close(p.visibility**2+p.D**2,1,1e-12);
  }
  close(Amp.predict(.5,0,1).plus,1);close(Amp.predict(.5,180,1).plus,0);
  close(Amp.predict(.5,180,0).plus,.5);
});
const Eigen=require("../companion/labs/IC-01-02/model.js");
check("Hermitian two-level spectrum and normalized eigenstate Bloch vector",()=>{
  for(const z of [-2,-.8,0,.6,1.7])for(const g of [0,.4,1.5]){
    const p=Eigen.predict(z,g,70);
    close(p.e,Math.hypot(z,g));close(p.gap,2*p.e);
    if(p.e>0){close(p.rx*p.rx+p.ry*p.ry+p.rz*p.rz,1);close(p.pz,(1+p.rz)/2);}
    else assert.equal(p.pz,null);
  }
  close(Eigen.predict(0,1,0).pz,.5);
  close(Eigen.predict(.8,.6,0).e,Eigen.predict(.8,.6,128).e);
});
const Born=require("../companion/labs/IC-01-04/model.js");
check("Born projectors, bypass, selective and nonselective output",()=>{
  for(const theta of [0,30,90,180])for(const purity of [0,.4,1]){
    const p=Born.predict(0,0,purity,theta,0,"both"),
      select=Born.predict(0,0,purity,theta,0,"plus"),
      bypass=Born.predict(0,0,purity,theta,0,"bypass");
    close(p.pPlus+p.pMinus,1);close(p.success,1);
    close(p.outputPurity,(1+(purity*Math.cos(theta*Math.PI/180))**2)/2,1e-12);
    close(bypass.outputPurity,(1+purity*purity)/2,1e-12);
    if(select.success>1e-11)close(select.outputPurity,1);
  }
  assert.equal(Born.predict(0,0,1,180,0,"plus").final,null);
});
const Basis=require("../companion/labs/IC-01-05/model.js");
check("Physical expectation invariant under unitary basis changes",()=>{
  for(const a of [0,20,75,180])for(const b of [-180,-90,0,45,140]){
    const p=Basis.predict(a,b),rad=d=>d*Math.PI/180;
    close(p.trueValue,Math.cos(rad(a)));
    close(p.a00*p.a00+p.a01*p.a01,1);
    const c=Math.cos(rad(a-b)),s=Math.sin(rad(a-b));
    close(p.a00*c+p.a01*s,p.trueValue,1e-12);
    close(p.prob,.5*(1+p.naive),1e-12);
  }
});
const SpinPrec=require("../companion/labs/IC-02-01/model.js");
check("Unitary Bloch precession conserves norm and longitudinal spin",()=>{
  for(const initial of [0,30,90,180])for(const field of [0,45,90,140])for(const t of [0,.3,1,3,10]){
    const p=SpinPrec.predict(initial,20,field,1.4,t);
    close(p.norm,1,1e-12);
    close(p.longitudinal,SpinPrec.dot(p.r,p.n),1e-12);
  }
  close(SpinPrec.predict(0,0,90,1,Math.PI).r[2],-1);
});
const SpinBerry=require("../companion/labs/IC-02-08/model.js");
check("Spin Berry solid-angle phase, gauge winding, orientation and mesh convergence",()=>{
  for(const angle of [0,20,60,90,120,150])for(const wind of [-1,0,1,2]){
    const fine=SpinBerry.predict(angle,wind,0,256);
    assert.ok(fine.error<.005,[angle,wind,fine.error]);
    for(const gauge of [-3,0,2]){
      const g=SpinBerry.predict(angle,wind,gauge,256);
      close(SpinBerry.wrap(g.discrete-fine.discrete),0,1e-10);
      close(g.solid,2*Math.PI*wind*(1-Math.cos(angle*Math.PI/180)),1e-12);
    }
  }
  close(SpinBerry.predict(90,1,0,64).cos,-1);
});
const Mix=require("../companion/labs/IC-03-03/model.js");
check("Equivalent density ensembles and Helstrom qubit discrimination bound",()=>{
  const both=Mix.predict(.5,.5,75);
  close(both.pA,.5);close(both.pB,.5);close(both.distance,0);
  close(both.success,.5);close(both.entropyA,1);close(both.purityB,.5);
  for(const p of [0,.2,.6,1])for(const q of [0,.35,.5,.9,1]){
    const d=Mix.predict(p,q,35);
    close(d.distance,Math.hypot(2*p-1,2*q-1)/2);
    assert.ok(d.success>=.5&&d.success<=1+1e-12);
    close(d.entropyA,Mix.entropy(p));
  }
});
const POVM=require("../companion/labs/IC-03-05/model.js");
check("Same POVM effects with distinct instrument backaction",()=>{
  for(const theta of [0,35,90,180])for(const eta of [0,.35,1]){
    const lud=POVM.predict(theta,eta,"luders","both"),prep=POVM.predict(theta,eta,"prepare","both");
    close(lud.pPlus,prep.pPlus);close(lud.pPlus+lud.pMinus,1);
    close(prep.out[0],1);close(prep.out[2],0);
    const lplus=POVM.predict(theta,eta,"luders","plus");
    const pplus=POVM.predict(theta,eta,"prepare","plus");
    close(lplus.p,pplus.p);
    if(lplus.p<1e-12){assert.equal(lplus.out,null);assert.equal(pplus.out,null);}
    else{close(lplus.purity,1);close(pplus.purity,1);}
  }
  const initial=POVM.predict(0,0,"luders","both"),reinit=POVM.predict(0,0,"prepare","both");
  close(initial.out[2],1);close(reinit.out[0],1);
});
const Boson=require("../companion/labs/IC-06-03/model.js");
check("Bosonic Fock ladder and commutator coefficients",()=>{
  for(let n=0;n<=10;n++){
    const create=Boson.predict(n,2,0,"create",1.5),destroy=Boson.predict(n,2,0,"annihilate",1.5);
    close(create.amplitude**2,n+1);close(destroy.amplitude**2,n);
    close(create.amplitude**2-destroy.amplitude**2,1);
    if(n===0)assert.equal(destroy.after,null);
  }
  for(const alpha of [0,.5,1.5,2.9]){
    const a=Boson.predict(3,2,0,"create",alpha);
    const s=Array.from({length:50},(_,i)=>a.occupation(i)).reduce((x,y)=>x+y,0);
    close(s,1,1e-10);
  }
});
const Zak=require("../companion/labs/IC-08-04/model.js");
check("SSH Wilson-loop Zak phase gauge invariance and transition",()=>{
  for(const [a,b,expect] of [[.5,1.5,1],[1.5,.5,0],[.8,1.4,1]]){
    for(const n of [24,48,96]){
      const baseline=Zak.predict(a,b,n,0);
      assert.equal(baseline.nu,expect);
      assert.ok(baseline.error<1e-8,[a,b,n,baseline.error]);
      for(const m of [-2,1,3])close(Zak.wrap(Zak.predict(a,b,n,m).gamma-baseline.gamma),0,1e-9);
    }
  }
  assert.equal(Zak.predict(1,1,48,0).gamma,null);
});
const Chern=require("../companion/labs/IC-08-06/model.js");
check("QWZ two-band Chern phases, gap closures and midpoint convergence",()=>{
  for(const [M,integer] of [[-3,0],[-1,1],[1,-1],[3,0]]){
    const d=Chern.predict(M,64);
    assert.equal(d.exact,integer);
    assert.ok(Math.abs(d.numeric-integer)<.005,[M,d.numeric]);
    close(d.numeric,Chern.integrate(M,64),1e-12);
  }
  for(const critical of [-2,0,2]){const d=Chern.predict(critical,48);assert.equal(d.exact,null);assert.equal(d.numeric,null);close(d.gap,0);}
  const x=.7,y=1.2,M=-1;
  close(Chern.curvature(x,y,M),Chern.curvature(-x,-y,M),1e-12);
});
const Kernel=require("../companion/labs/IC-09-05/model.js");
check("Quantum fidelity Gram kernel is normalized and positive semidefinite",()=>{
  for(const n of [3,6,9,15]){
    const d=Kernel.predict(n,2.4,0,n-1,512);
    close(d.trace,n,1e-8);
    assert.ok(d.eig.at(-1)>-1e-8,d.eig.at(-1));
    assert.ok(d.rank<=3,[n,d.rank]);
    for(let i=0;i<n;i++)for(let j=0;j<n;j++){
      close(d.K[i][j],d.K[j][i]);
      close(d.K[i][j],(1+Math.cos(d.x[i]-d.x[j]))/2,1e-12);
    }
    for(let i=0;i<n;i++)close(d.K[i][i],1);
  }
  close(Kernel.kernel(0,Math.PI),0,1e-14);
  const shot=Kernel.predict(11,2.4,3,8,4096);
  assert.ok(Math.abs(shot.sampled-shot.exact)<6*shot.se+.0001);
});


// Additional self-study prerequisites: tensor products, exchange statistics, Pauli spin, SSH terminations and circuit output.
const Tensor=require("../companion/labs/IC-01-08/model.js");
check("Tensor product, CNOT basis indexing, and reduced-state entropy",()=>{
 const bell=Tensor.evaluate(90,0,"cnot");
 close(bell.norm,1);close(bell.v[0],1/Math.SQRT2,1e-12);close(bell.v[3],1/Math.SQRT2,1e-12);
 close(bell.lambda[0],.5);close(bell.lambda[1],.5);close(bell.purity,.5);close(bell.entropy,1);
 for(const a of [0,20,55,90,180])for(const b of [0,40,90,170]){
   for(const mode of ["product","cnot"]){
    const p=Tensor.evaluate(a,b,mode);
    close(p.norm,1,1e-12);close(p.lambda.reduce((x,y)=>x+y,0),1,1e-12);
    close(p.purity,p.lambda[0]**2+p.lambda[1]**2,1e-12);
    assert.ok(p.entropy>=-1e-12&&p.entropy<=1+1e-12);
   }
   close(Tensor.evaluate(a,b,"product").entropy,0,1e-10);
 }
 for(const a of [0,30,90,150])close(Tensor.evaluate(a,90,"cnot").entropy,0,1e-10);
});
const Exchange=require("../companion/labs/IC-06-01/model.js");
check("Gaussian orbital overlap and two-body exchange parity",()=>{
 for(const d of [.4,.8,2.5,4])for(const sigma of [.5,1,1.5]){
  const model=Exchange.describe(d,sigma);
  close(model.S,Math.exp(-d*d/(8*sigma*sigma)));
  for(const [x,y] of [[0,0],[.8,-1.2],[2,-.3],[-2,-2]]){
   close(model.psi(x,y,1),model.psi(y,x,1));
   close(model.psi(x,y,-1),-model.psi(y,x,-1),1e-11);
   close(model.density(x,y,-1),model.density(y,x,-1));
  }
  close(model.diagonal(.8,-1),0,1e-12);
 }
});
check("Symmetric and antisymmetric two-particle spatial densities normalize",()=>{
 const d=2,sigma=1,model=Exchange.describe(d,sigma),a=-8,b=8,N=240,h=(b-a)/N;
 for(const sign of [-1,1]){
  let area=0;
  for(let j=0;j<=N;j++)for(let i=0;i<=N;i++){
    const wx=(i===0||i===N)?.5:1,wy=(j===0||j===N)?.5:1;
    area+=wx*wy*model.density(a+i*h,a+j*h,sign);
  }
  close(area*h*h,1,1e-8);
 }
});
const Pauli=require("../companion/labs/IC-07-01/model.js");
check("Pauli electron orbital-spin Zeeman splitting and expected energy",()=>{
 for(const B of [0,.25,1,2.9])for(const l of [-2,-1,0,1,2])for(const theta of [0,45,90,160,180]){
  const r=Pauli.evaluate(B,l,theta);
  close(r.pUp+r.pDown,1);close(r.splitting,2*B);close(r.orbitalShift,B);
  close(r.mean,r.pUp*r.EUp+r.pDown*r.EDown,1e-12);
  assert.ok(r.variance>=-1e-12);
 }
 close(Pauli.evaluate(1,0,0).EUp,1);
 close(Pauli.evaluate(1,0,180).EDown,-1);
});
const BoundSSH=require("../companion/labs/IC-08-03/model.js");
check("SSH two terminations, finite-size splitting, chiral symmetry",()=>{
 const t1=.2,t2=1.5,N=12,delta=0;
 const weak=BoundSSH.predict(t1,t2,N,"inter",delta),strong=BoundSSH.predict(t1,t2,N,"intra",delta);
 assert.equal(weak.nu,1);assert.equal(strong.nu,1);
 assert.ok(weak.middle<.03,[weak.middle]);
 assert.ok(strong.middle>1,[strong.middle]);
 assert.ok(weak.edge>strong.edge,[weak.edge,strong.edge]);
 close(weak.probs.reduce((a,b)=>a+b,0),1,1e-9);
 const broken=BoundSSH.predict(t1,t2,N,"inter",.3);
 assert.equal(broken.nu,null);assert.ok(broken.middle>.1);
 for(const cfg of [[1.3,.5,6,"inter",0],[.5,1.3,10,"intra",0]]){
   const p=BoundSSH.predict(...cfg);close(p.probs.reduce((a,b)=>a+b,0),1,1e-8);
 }
});
const Circuit=require("../companion/labs/IC-09-01/model.js");
check("QML Ry-Rz-Ry output, shift identity, vanishing gradients and Pauli shot noise",()=>{
 for(const x of [-2,-1,0,.7,2])for(const theta of [-3,-1,0,1.2,2.7])for(const beta of [0,.3,1.1,Math.PI/2]){
   const p=Circuit.predict(x,theta,beta,128);
   assert.ok(p.f>=-1-1e-12&&p.f<=1+1e-12);
   close(p.pPlus+p.pMinus,1,1e-12);
   close(p.d,p.shifted,1e-12);
   const h=1e-5;
   close(p.d,(Circuit.output(x,theta+h,beta)-Circuit.output(x,theta-h,beta))/(2*h),2e-10);
   if(x===0||beta===0)close(p.d,0,1e-12);
 }
 const sampled=Circuit.predict(.9,1.1,1,4096);
 assert.ok(Math.abs(sampled.sample.estimate-sampled.f)<6*sampled.se+.02);
});


const Airy=require("../companion/labs/IC-02-05/model.js");
check("Linear turning-point Airy integration and matched WKB asymptotics",()=>{
 close(Airy.airy(0),.355028053887817,1e-14);
 close(Airy.airy(2),.0349241304232744,3e-8);
 close(Airy.airy(-2),.2274074282016856,3e-8);
 for(const x of [-7,-4,-2,1.5,2,3])assert.ok(Number.isFinite(Airy.airy(x)));
 assert.equal(Airy.wkb(0),null);
 const near=Airy.predict(0,0,1),far=Airy.predict(-6,0,1);
 assert.equal(near.approx,null);
 assert.ok(far.error<.035,far.error);
});
const PathPhase=require("../companion/labs/IC-02-06/model.js");
check("One-mode path integral Gaussian exact value and converging quadrature",()=>{
 for(const c of [.05,.4,1.8,3])for(const sigma of [.5,1,1.7]){
  const exact=PathPhase.predict(c,sigma),numeric=PathPhase.integrate(c,sigma,2400,7);
  close(numeric.real,exact.real,2e-6);
  close(numeric.imag,exact.imag,2e-6);
  close(numeric.ratio,exact.ratio,1e-6);
  assert.ok(exact.ratio<=1);
 }
 close(PathPhase.predict(0,1).ratio,1,1e-12);
});
const Coupled=require("../companion/labs/IC-03-02/model.js");
check("Spin-half angular momentum addition, exchange eigenstates and mixing",()=>{
 const singlet=Coupled.evaluate(1,0,"lower"),triplet=Coupled.evaluate(1,0,"upper");
 close(singlet.lower,-.75);close(triplet.upper,.25);
 close(singlet.pSinglet,1);close(singlet.S2,0);close(singlet.correlation,-3);
 close(triplet.pTriplet,1);close(triplet.S2,2);close(triplet.correlation,1);
 assert.equal(Coupled.evaluate(0,0).defined,false);
 for(const J of [-1.3,.4,1.5])for(const d of [-2,-.6,0,.9]){
  const p=Coupled.evaluate(J,d),q=Coupled.evaluate(J,d,"upper");
  close(p.pTriplet+p.pSinglet,1);
  close(p.pUD+p.pDU,1);
  close(p.pTriplet+q.pTriplet,1);
  close(p.upper-p.lower,Math.hypot(J,2*d));
 }
});
const CHSH=require("../companion/labs/IC-03-06/model.js");
check("CHSH Tsirelson bound and all four singlet joint probabilities",()=>{
 const opt=CHSH.evaluate(0,90,45,-45,1);
 close(opt.S,-2*Math.SQRT2,1e-12);
 assert.equal(opt.violates,true);
 const noisy=CHSH.evaluate(0,90,45,-45,.5);
 assert.equal(noisy.violates,false);
 for(const v of [0,.2,.75,1])for(const b of [-120,0,25,90]){
  const s=CHSH.evaluate(0,90,b,-b,v);
  assert.ok(Math.abs(s.S)<=2*Math.SQRT2+1e-12);
  close(s.joint.reduce((p,q)=>p+q,0),1);
  close(s.joint[0]+s.joint[1],.5);
  close(s.joint[0]+s.joint[2],.5);
 }
});
const Variational=require("../companion/labs/IC-04-02/model.js");
check("Anharmonic oscillator variational bounds and nested Rayleigh-Ritz energies",()=>{
 close(Variational.energy(1,0),.5);
 close(Variational.lowest(0,8),.5);
 close(Variational.optimal(0),1,1e-12);
 for(const l of [.1,.4,1.2]){
  const optimum=Variational.optimal(l);
  close(optimum**4+6*l*optimum**6,1,1e-10);
  const e=Variational.energy(optimum,l);
  assert.ok(e<=Variational.energy(optimum*.85,l));
  assert.ok(e<=Variational.energy(optimum*1.15,l));
  const a=Variational.lowest(l,8),b=Variational.lowest(l,12),d=Variational.lowest(l,20);
  assert.ok(a+1e-8>=b&&b+1e-8>=d,[l,a,b,d]);
  assert.ok(d<=e+.015,[l,d,e]);
  const h=Variational.matrix(l,12);
  for(let i=0;i<12;i++)for(let j=0;j<12;j++)close(h[i][j],h[j][i]);
 }
});
const Rabi=require("../companion/labs/IC-04-03/model.js");
check("Analytic driven Rabi rotation, detuning envelope, full Bloch norm",()=>{
 close(Rabi.rwa(1,0,Math.PI),1,1e-12);
 close(Rabi.bound(1,2),.2);
 for(const d of [-2,0,1])for(const t of [0,.5,3,6]){
  const z=Rabi.predict(.5,d,t);
  assert.ok(z.rwa>=-1e-12&&z.rwa<=1+1e-12);
  assert.ok(z.lab>=-1e-9&&z.lab<=1+1e-9);
  close(z.norm,1,3e-7);
 }
 const z=Rabi.predict(.3,0,5);
 assert.ok(Math.abs(z.difference)<.03,z.difference);
});
const Scattering=require("../companion/labs/IC-05-03/model.js");
check("Outgoing delta-scatterer T matrix, exact unitarity and Born convergence",()=>{
 for(const k of [.7,1,2])for(const g of [-2,-.5,0,1,3]){
  const e=Scattering.exact(g,k);
  close(e.R+e.T,1);
  close(e.rr*e.rr+e.ri*e.ri,e.R);
  const q=Scattering.predict(g,k,6);
  close(q.error,q.predictedError,2e-10);
 }
 const convergent=Scattering.predict(.6,1,10),divergent=Scattering.predict(5,1,10);
 assert.ok(convergent.error<3e-6);
 assert.ok(divergent.error>divergent.R*100);
 close(Scattering.exact(0,1).T,1);
});
const Pump=require("../companion/labs/IC-08-07/model.js");
check("Rice-Mele Thouless Chern pump, orientation, homotopy and critical cycle",()=>{
 for(const n of [24,40,56]){
  const top=Pump.predict(.5,0,0,Math.PI/2,n);
  const trivial=Pump.predict(.3,0,.55,Math.PI/2,n);
  assert.equal(top.analytic,-1);
  assert.equal(trivial.analytic,0);
  assert.ok(Math.abs(top.numeric+1)<.02,[n,top.numeric]);
  assert.ok(Math.abs(trivial.numeric)<.02,[n,trivial.numeric]);
  assert.ok(top.mingap>.1);
 }
 assert.equal(Pump.predict(.4,0,.4,0,48).analytic,null);
 close(Pump.flux(1,.5,0,0,80),Pump.flux(1+2*Math.PI,.5,0,0,80),1e-12);
});
const Train=require("../companion/labs/IC-09-06/model.js");
check("Global parity cost versus local gradient exponential second moments",()=>{
 for(const n of [1,2,5,10,15]){
   const d=Train.predict(n,1024,1800,7);
   close(d.exactGlobal,2**(-n));
   close(d.exactLocal,.5);
   close(d.rmsGlobal**2,d.exactGlobal);
   close(d.nominalShotNoise**2,1/2048);
   assert.equal(d.global.length,1800);
   assert.deepEqual(d.global,Train.predict(n,1024,1800,7).global);
   assert.ok(d.globalMoment>=0&&d.localMoment>0);
 }
 const local=Train.predict(6,1024,6000,5);
 assert.ok(Math.abs(local.localMoment-.5)<.025,[local.localMoment]);
});

process.stdout.write("\nALL "+checks+" PHYSICS TEST GROUPS PASSED\n");
