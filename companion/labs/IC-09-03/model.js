"use strict";
(function(root,factory){const obj=factory();if(typeof module!=="undefined"&&module.exports)module.exports=obj;root.QNNModel=obj;})(globalThis,function(){
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const output=(kind,theta,x,beta=0)=>Math.cos(theta+x)*(kind==="two"?Math.cos(beta):1);
  const derivative=(kind,theta,x,beta=0)=>-Math.sin(theta+x)*(kind==="two"?Math.cos(beta):1);
  const shifted=(kind,theta,x,beta=0)=>.5*(output(kind,theta+Math.PI/2,x,beta)-output(kind,theta-Math.PI/2,x,beta));
  const loss=(kind,theta,x,beta,target)=>.5*(output(kind,theta,x,beta)-target)**2;
  const gradLoss=(kind,theta,x,beta,target)=>(output(kind,theta,x,beta)-target)*derivative(kind,theta,x,beta);
  const purity=(kind,theta,x,beta)=>kind==="two"?.5*(1+Math.cos(theta+x)**2+(Math.sin(theta+x)*Math.sin(beta))**2):1;
  function rng(seed){let a=(Math.floor(seed)>>>0)||1;return()=>{a^=a<<13;a^=a>>>17;a^=a<<5;return(a>>>0)/4294967296;};}
  function sample(mean,n,random){
    let plus=0,p=(1+clamp(mean,-1,1))/2;
    for(let i=0;i<n;i++)if(random()<p)plus++;
    return {estimate:2*plus/n-1,plus,minus:n-plus};
  }
  function oneStep(settings,theta,random){
    const {kind,x,beta,target,eta,shots}=settings;
    const exact=output(kind,theta,x,beta),a=output(kind,theta+Math.PI/2,x,beta),b=output(kind,theta-Math.PI/2,x,beta);
    const obs=sample(exact,shots,random),up=sample(a,shots,random),dn=sample(b,shots,random);
    const sampledGradient=.5*(up.estimate-dn.estimate);
    const trueGradient=.5*(a-b);
    return {theta,exact,plus:a,minus:b,obs,up,dn,
      trueGradient,sampledGradient,loss:loss(kind,theta,x,beta,target),
      sampledLossGradient:(obs.estimate-target)*sampledGradient,
      trueLossGradient:(exact-target)*trueGradient,
      gradientVariance:((1-a*a)+(1-b*b))/(4*shots)};
  }
  function train(settings,steps,seed){
    const random=rng(seed),ideal=[{step:0,theta:settings.theta,loss:loss(settings.kind,settings.theta,settings.x,settings.beta,settings.target)}],
      noisy=[{step:0,theta:settings.theta,loss:loss(settings.kind,settings.theta,settings.x,settings.beta,settings.target)}];
    let idealTheta=settings.theta,noisyTheta=settings.theta,first=null,last=null;
    for(let step=1;step<=steps;step++){
      const s=oneStep(settings,noisyTheta,random);if(!first)first=s;last=s;
      noisyTheta-=settings.eta*s.sampledLossGradient;
      idealTheta-=settings.eta*gradLoss(settings.kind,idealTheta,settings.x,settings.beta,settings.target);
      ideal.push({step,theta:idealTheta,loss:loss(settings.kind,idealTheta,settings.x,settings.beta,settings.target)});
      noisy.push({step,theta:noisyTheta,loss:loss(settings.kind,noisyTheta,settings.x,settings.beta,settings.target)});
    }
    return {ideal,noisy,first,last};
  }
  return {clamp,output,derivative,shifted,loss,gradLoss,purity,rng,sample,oneStep,train};
});
