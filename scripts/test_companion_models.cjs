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

process.stdout.write("\nALL "+checks+" PHYSICS TEST GROUPS PASSED\n");
