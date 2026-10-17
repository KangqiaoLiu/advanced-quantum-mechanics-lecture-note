"use strict";
(function(root,factory){const m=factory();if(typeof module!=="undefined"&&module.exports)module.exports=m;root.DiracModel=m;})(globalThis,function(){
 function energy(p){return Math.hypot(1,p);}
 const nonrel=p=>p*p/2,correction=p=>p*p/2-p**4/8;
 function evaluate(p,time,prep="upper"){
   const e=energy(p),nx=p/e,nz=1/e,angle=2*e*time;
   const posProbUpper=(1+nz)/2,posProbLower=(1-nz)/2;
   if(prep==="positive")return {e,v:nx,probUpper:posProbUpper,probLower:posProbLower,
    bloch:[nx,0,nz],normalization:1,groupVelocity:p/e,kinetic:e-1,nonrel:nonrel(p),correction:correction(p)};
   const cx=Math.cos(angle),sy=Math.sin(angle);
   const bx=nx*nz*(1-cx);
   return {e,v:bx,probUpper:1-nx*nx*(1-cx)/2,probLower:nx*nx*(1-cx)/2,
    bloch:[bx,-nx*sy,nz*nz+nx*nx*cx],normalization:1,groupVelocity:p/e,
    kinetic:e-1,nonrel:nonrel(p),correction:correction(p)};
 }
 return {energy,nonrel,correction,evaluate};
});
