"use strict";
(function(root,factory){const obj=factory();if(typeof module!=="undefined"&&module.exports)module.exports=obj;root.SSHModel=obj;})(globalThis,function(){
  function matrix(t1,t2,N,periodic=false,delta=0){
    const size=2*N,A=Array.from({length:size},()=>Array(size).fill(0));
    for(let j=0;j<N;j++){
      A[2*j][2*j]=delta;A[2*j+1][2*j+1]=-delta;
      A[2*j][2*j+1]=A[2*j+1][2*j]=t1;
      if(j<N-1){A[2*j+1][2*j+2]=A[2*j+2][2*j+1]=t2;}
    }
    if(periodic){A[2*N-1][0]=A[0][2*N-1]=t2;}
    return A;
  }
  function jacobi(original){
    const n=original.length,A=original.map(r=>r.slice()),V=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>+(i===j)));
    let sweeps=0;
    for(;sweeps<70;sweeps++){
      let off=0;
      for(let p=0;p<n;p++)for(let q=p+1;q<n;q++){
        const apq=A[p][q];off=Math.max(off,Math.abs(apq));
        if(Math.abs(apq)<1e-14)continue;
        const tau=(A[q][q]-A[p][p])/(2*apq),sign=tau>=0?1:-1;
        const t=sign/(Math.abs(tau)+Math.sqrt(1+tau*tau)),c=1/Math.sqrt(1+t*t),s=t*c;
        const app=A[p][p],aqq=A[q][q];
        A[p][p]=app-t*apq;A[q][q]=aqq+t*apq;A[p][q]=0;A[q][p]=0;
        for(let k=0;k<n;k++)if(k!==p&&k!==q){
          const akp=A[k][p],akq=A[k][q];
          A[k][p]=A[p][k]=c*akp-s*akq;
          A[k][q]=A[q][k]=s*akp+c*akq;
        }
        for(let k=0;k<n;k++){const vkp=V[k][p],vkq=V[k][q];V[k][p]=c*vkp-s*vkq;V[k][q]=s*vkp+c*vkq;}
      }
      if(off<1e-12)break;
    }
    const entries=Array.from({length:n},(_,j)=>({energy:A[j][j],vector:V.map(row=>row[j])})).sort((a,b)=>a.energy-b.energy);
    return {values:entries.map(x=>x.energy),vectors:entries.map(x=>x.vector),sweeps};
  }
  const bulkEnergy=(k,t1,t2,delta=0)=>Math.sqrt(t1*t1+t2*t2+2*t1*t2*Math.cos(k)+delta*delta);
  function winding(t1,t2,delta=0){if(Math.abs(delta)>1e-10)return null;if(Math.abs(t1-t2)<1e-9)return null;return t2>t1?1:0;}
  function describe({t1=.65,t2=1.4,N=10,periodic=false,delta=0}){
    const full=matrix(t1,t2,N,periodic,delta),eig=jacobi(full);
    const gap=2*Math.sqrt((t1-t2)**2+delta**2);
    return {...eig,bulkGap:gap,winding:winding(t1,t2,delta),
      chiral:Math.abs(delta)<1e-10,nearIndex:eig.values.reduce((best,x,i,all)=>Math.abs(x)<Math.abs(all[best])?i:best,0)};
  }
  return {matrix,jacobi,bulkEnergy,winding,describe};
});
