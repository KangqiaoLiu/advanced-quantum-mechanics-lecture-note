"use strict";
(function(root,factory){const obj=factory();if(typeof module!=="undefined"&&module.exports)module.exports=obj;root.SpinModel=obj;})(globalThis,function(){
  const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
  const unit=(theta,phi=0)=>{const t=theta*Math.PI/180,p=phi*Math.PI/180;return [Math.sin(t)*Math.cos(p),Math.sin(t)*Math.sin(p),Math.cos(t)];};
  const clamp=x=>Math.max(0,Math.min(1,x));
  function one(r,n,mode){
    const z=dot(r,n),pPlus=clamp((1+z)/2),pMinus=clamp((1-z)/2);
    if(mode==="bypass")return {state:r.slice(),survival:1,pPlus,pMinus,valid:true,n};
    if(mode==="both")return {state:n.map(x=>x*z),survival:1,pPlus,pMinus,valid:true,n};
    const sign=mode==="plus"?1:-1,p=mode==="plus"?pPlus:pMinus;
    return {state:p<1e-12?null:n.map(x=>sign*x),survival:p,pPlus,pMinus,valid:p>=1e-12,n};
  }
  function predict(initial,stages){
    let r=initial.slice(),survival=1,valid=true;
    const history=stages.map((s,index)=>{
      const before=r?r.slice():null,result=r?one(r,s.n,s.mode):null;
      const p=result?result.survival:0;survival*=p;
      r=result?result.state:null;valid=valid&&!!(result&&result.valid);
      return {index,mode:s.mode,axis:s.n,before,result,conditional:p,joint:survival};
    });
    return {history,state:r,survival,valid};
  }
  function trials(initial,stages,N,seed=17){
    let a=(seed>>>0)||1;const rand=()=>{a^=a<<13;a^=a>>>17;a^=a<<5;return(a>>>0)/4294967296;};
    const alive=[N],plus=Array(stages.length).fill(0),minus=Array(stages.length).fill(0);
    for(let shot=0;shot<N;shot++){
      let r=initial.slice(),active=true;
      stages.forEach((s,j)=>{if(!active)return;
        if(s.mode==="bypass")return;
        const p=clamp((1+dot(r,s.n))/2),sign=rand()<p?1:-1;
        if(sign>0)plus[j]++;else minus[j]++;
        if(s.mode==="plus"&&sign<0||s.mode==="minus"&&sign>0){active=false;return;}
        r=s.n.map(v=>v*sign);
      });
      if(active)alive[0]===N?void 0:void 0;
      if(active)alive.push(1);
    }
    return {survivors:alive.length-1,plus,minus,N};
  }
  return {dot,unit,one,predict,trials};
});
