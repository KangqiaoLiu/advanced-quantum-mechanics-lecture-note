"use strict";
(function(root,factory){const m=factory();if(typeof module!=="undefined"&&module.exports)module.exports=m;root.EntModel=m;})(globalThis,function(){
 const rad=d=>d*Math.PI/180;
 function state(theta,phi){const t=rad(theta),p=rad(phi);return [[Math.cos(t),0],[0,0],[0,0],[Math.sin(t)*Math.cos(p),Math.sin(t)*Math.sin(p)]];}
 function evaluate(theta,phi,alpha=0,beta=0,basis="xy"){
  const t=rad(theta),p=rad(phi),lambda0=Math.cos(t)**2,lambda1=Math.sin(t)**2;
  const coherence=Math.sin(2*t),E=basis==="zz"?1:coherence*Math.cos(p-rad(alpha+beta));
  const joint=basis==="zz"?[lambda0,0,0,lambda1]:[(1+E)/4,(1-E)/4,(1-E)/4,(1+E)/4];
  const entropy=-(lambda0>0?lambda0*Math.log2(lambda0):0)-(lambda1>0?lambda1*Math.log2(lambda1):0);
  return {lambda0,lambda1,entropy,purity:lambda0**2+lambda1**2,concurrence:coherence,coherence,E,joint,
   rhoA:[[lambda0,0],[0,lambda1]],globalPurity:1,conditionalBplus:joint[0]+joint[1]>0?joint[0]/(joint[0]+joint[1]):null};
 }
 return {rad,state,evaluate};
});
