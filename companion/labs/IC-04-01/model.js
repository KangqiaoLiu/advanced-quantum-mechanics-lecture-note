"use strict";
(function(root,factory){const m=factory();if(typeof module!=="undefined"&&module.exports)module.exports=m;root.AvoidModel=m;})(globalThis,function(){
 function evaluate(x,g){
  const E=Math.hypot(x,g),exact=[-E,E],diabatic=[-Math.abs(x),Math.abs(x)];
  const pt=Math.abs(x)>1e-12?[-Math.abs(x)-g*g/(2*Math.abs(x)),Math.abs(x)+g*g/(2*Math.abs(x))]:[null,null];
  const pUpperZ=E>1e-12?.5*(1+x/E):null;
  const mixing=E>1e-12?Math.abs(g/E):null;
  return {E,exact,diabatic,pt,pUpperZ,mixing,gap:2*E,avoidedGap:2*Math.abs(g),
    ptError:pt[1]===null?null:Math.abs(pt[1]-E),
    ptSmallParameter:Math.abs(x)>1e-12?Math.abs(g/x):null};
 }
 return {evaluate};
});
