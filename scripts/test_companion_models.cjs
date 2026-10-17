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
process.stdout.write("\nALL "+checks+" PHYSICS TEST GROUPS PASSED\n");
