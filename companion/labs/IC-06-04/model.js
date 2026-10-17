"use strict";
(function(root,factory){const m=factory();if(typeof module!=="undefined"&&module.exports)module.exports=m;root.FermiModel=m;})(globalThis,function(){
 const decode=s=>{if(!/^[01]{4}$/.test(s))throw Error("occupation must be four bits");return [...s].map(Number);};
 const encode=n=>n.join("");
 const parity=(n,j)=>n.slice(0,j).reduce((s,x)=>s+x,0);
 function apply(n,kind,j){
  const before=n.slice(),m=parity(n,j),sign=m%2===0?1:-1,allowed=kind==="create"?n[j]===0:n[j]===1;
  const after=allowed?n.slice():null;if(after)after[j]=kind==="create"?1:0;
  return {before,kind,j,m,sign,allowed,after,amplitude:allowed?sign:0};
 }
 function product(n,left,right){
  const first=apply(n,right.kind,right.j);
  const second=first.allowed?apply(first.after,left.kind,left.j):null;
  return {first,second,allowed:!!(second&&second.allowed),after:second&&second.after?second.after:null,
    amplitude:first.amplitude*(second?second.amplitude:0)};
 }
 function compare(n,left,right){
  const ab=product(n,left,right),ba=product(n,right,left);
  const sum=ab.amplitude+ba.amplitude;
  return {ab,ba,sum,final:ab.after||ba.after||null};
 }
 return {decode,encode,parity,apply,product,compare};
});
