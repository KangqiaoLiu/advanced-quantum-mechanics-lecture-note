"use strict";
(function(root,factory){const obj=factory();if(typeof module!=="undefined"&&module.exports)module.exports=obj;root.OscModel=obj;})(globalThis,function(){
  const factorial=n=>{let r=1;for(let j=2;j<=n;j++)r*=j;return r;};
  function hermite(n,x){if(n===0)return 1;if(n===1)return 2*x;let a=1,b=2*x;for(let k=2;k<=n;k++){let c=2*x*b-2*(k-1)*a;a=b;b=c;}return b;}
  function laguerre(n,x){if(n===0)return 1;if(n===1)return 1-x;let a=1,b=1-x;for(let k=2;k<=n;k++){let v=((2*k-1-x)*b-(k-1)*a)/k;a=b;b=v;}return b;}
  const normal=(x,mean,varx)=>Math.exp(-.5*(x-mean)**2/varx)/Math.sqrt(2*Math.PI*varx);
  function describe({kind="coherent",n=2,amplitude=1.5,phase=0,r=.65,squeezeAngle=0,time=0}){
    const c=Math.cos(time),s=Math.sin(time);let mx=0,mp=0,vxx=.5,vpp=.5,vxp=0,meanN=0;
    if(kind==="coherent"){mx=Math.SQRT2*amplitude*Math.cos(phase-time);mp=Math.SQRT2*amplitude*Math.sin(phase-time);meanN=amplitude*amplitude;}
    if(kind==="number"){vxx=n+.5;vpp=n+.5;meanN=n;}
    if(kind==="squeezed"){
      const ch=Math.cosh(2*r),sh=Math.sinh(2*r);
      const ax=.5*(ch-Math.cos(squeezeAngle)*sh),ap=.5*(ch+Math.cos(squeezeAngle)*sh),cov=-.5*Math.sin(squeezeAngle)*sh;
      vxx=c*c*ax+2*c*s*cov+s*s*ap;
      vpp=s*s*ax-2*s*c*cov+c*c*ap;
      vxp=-s*c*ax+(c*c-s*s)*cov+s*c*ap;
      meanN=Math.sinh(r)**2;
    }
    const det=vxx*vpp-vxp*vxp;
    function density(x){if(kind==="number")return Math.exp(-x*x)*hermite(n,x)**2/(Math.sqrt(Math.PI)*2**n*factorial(n));return normal(x,mx,vxx);}
    function wigner(x,p){
      if(kind==="number"){let rr=x*x+p*p;return ((n%2===0)?1:-1)*Math.exp(-rr)*laguerre(n,2*rr)/Math.PI;}
      const dx=x-mx,dp=p-mp,quad=(vpp*dx*dx-2*vxp*dx*dp+vxx*dp*dp)/det;
      return Math.exp(-.5*quad)/(2*Math.PI*Math.sqrt(det));
    }
    function occupation(j){
      if(kind==="number")return j===n?1:0;
      if(kind==="coherent"){const lambda=amplitude*amplitude;return Math.exp(-lambda)*lambda**j/factorial(j);}
      if(j%2)return 0;
      const k=j/2,tr=Math.tanh(r);return factorial(2*k)/(4**k*factorial(k)**2)*tr**(2*k)/Math.cosh(r);
    }
    return {kind,n,mx,mp,vxx,vpp,vxp,det,meanN,density,wigner,occupation};
  }
  return {factorial,hermite,laguerre,describe};
});
