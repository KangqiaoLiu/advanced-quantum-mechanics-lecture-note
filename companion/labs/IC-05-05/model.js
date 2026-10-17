"use strict";
(function(root,factory){const m=factory();if(typeof module!=="undefined"&&module.exports)module.exports=m;root.ScattModel=m;})(globalThis,function(){
 const rad=d=>d*Math.PI/180,cc=(re,im)=>({re,im}),sum=(a,b)=>cc(a.re+b.re,a.im+b.im),abs2=z=>z.re*z.re+z.im*z.im;
 function term(delta,k,l){const d=rad(delta),a=(2*l+1)*Math.sin(d)/k;return cc(a*Math.cos(d),a*Math.sin(d));}
 function amplitude(theta,delta0,delta1,k){const z0=term(delta0,k,0),z1=term(delta1,k,1),u=Math.cos(rad(theta));return sum(z0,cc(z1.re*u,z1.im*u));}
 function differential(theta,d0,d1,k){return abs2(amplitude(theta,d0,d1,k));}
 function evaluate(d0,d1,k){
 const s0=Math.sin(rad(d0)),s1=Math.sin(rad(d1)),phase=rad(d0-d1);
 const sigma0=4*Math.PI*s0*s0/(k*k),sigma1=12*Math.PI*s1*s1/(k*k);
 const total=sigma0+sigma1,forward=amplitude(0,d0,d1,k),optical=4*Math.PI/k*forward.im;
 const transport=total-8*Math.PI*s0*s1*Math.cos(phase)/(k*k);
 const interference=6*s0*s1*Math.cos(phase)/(k*k);
 return {sigma0,sigma1,total,optical,transport,forward,interference,
  unitarity0:1,unitarity1:1,
  ds:theta=>differential(theta,d0,d1,k),
  angularDensity:theta=>total>1e-15?2*Math.PI*Math.sin(rad(theta))*differential(theta,d0,d1,k)/total:0};
 }
 return {rad,cc,sum,abs2,term,amplitude,differential,evaluate};
});
