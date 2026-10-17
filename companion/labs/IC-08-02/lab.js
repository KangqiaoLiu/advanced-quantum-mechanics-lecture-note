"use strict";
(function(){
 const $=AQM.$,f=AQM.fmt,M=SSHModel;
 let first=true,selectedNearZero=true,lastN=null;
 function param(){return {t1:+$("#t1").value,t2:+$("#t2").value,delta:+$("#delta").value,N:+$("#cells").value,periodic:$("#boundary").value==="periodic"};}
 function drawChain(p){
   const canvas=$("#chain"),c=canvas.getContext("2d");canvas.width=720;canvas.height=165;
   c.fillStyle="white";c.fillRect(0,0,720,165);const start=40,end=680,step=(end-start)/(2*p.N-1),y=75;
   for(let i=0;i<2*p.N-1;i++){
     c.strokeStyle=i%2===0?AQM.colors.blue:AQM.colors.orange;
     c.lineWidth=1.4+Math.min(7,(i%2===0?p.t1:p.t2)*2.4);c.beginPath();c.moveTo(start+i*step,y);c.lineTo(start+(i+1)*step,y);c.stroke();
   }
   for(let i=0;i<2*p.N;i++){let x=start+i*step;c.fillStyle=i%2===0?"#246b94":"#c97a41";c.beginPath();c.arc(x,y,Math.min(9,step*.32),0,2*Math.PI);c.fill();}
   c.fillStyle=AQM.colors.ink;c.font="13px system-ui";c.fillText("A₁",start-12,y+27);c.fillText("Bₙ",end-8,y+27);
   c.fillText(p.periodic?"Periodic: Bₙ is connected to A₁ across the boundary":"Open: no coupling across the two endpoints",36,138);
   if(p.periodic){c.strokeStyle=AQM.colors.orange;c.lineWidth=2;c.setLineDash([8,6]);c.beginPath();c.moveTo(start,y-15);c.bezierCurveTo(start,y-65,end,y-65,end,y-15);c.stroke();c.setLineDash([]);}
 }
 function update(){
   const p=param(),d=M.describe(p);
   let slider=$("#index");slider.max=String(2*p.N-1);
   if(first||lastN!==p.N||selectedNearZero){slider.value=String(d.nearIndex);selectedNearZero=false;}
   const chosen=Math.max(0,Math.min(+slider.value,d.values.length-1)),energy=d.values[chosen],v=d.vectors[chosen];
   lastN=p.N;first=false;
   const specMax=Math.max(2.25,p.t1+p.t2+Math.abs(p.delta)+.3);
   const dataK=Array.from({length:241},(_,i)=>-Math.PI+2*Math.PI*i/240);
   AQM.plot($("#bands"),{xmin:-Math.PI,xmax:Math.PI,ymin:-specMax,ymax:specMax,xlabel:"Crystal momentum k (radians)",ylabel:"Energy E / energy unit",zero:true,
    series:[{data:dataK.map(k=>[k,M.bulkEnergy(k,p.t1,p.t2,p.delta)]),color:AQM.colors.blue},{data:dataK.map(k=>[k,-M.bulkEnergy(k,p.t1,p.t2,p.delta)]),color:AQM.colors.orange}]});
   const lim=Math.max(2.3,p.t1+p.t2+.15);
   const qloop=Array.from({length:201},(_,i)=>{let k=2*Math.PI*i/200;return[p.t1+p.t2*Math.cos(k),p.t2*Math.sin(k)];});
   AQM.plot($("#loop"),{xmin:-lim,xmax:lim,ymin:-lim,ymax:lim,xlabel:"Re q*(k)",ylabel:"Im q*(k)",zero:true,series:[{data:qloop,color:AQM.colors.teal,width:3}],points:[{x:0,y:0,color:AQM.colors.red,radius:4},{x:p.t1+p.t2,y:0,color:AQM.colors.orange,radius:5}]});
   AQM.plot($("#spectrum"),{xmin:-.5,xmax:d.values.length-.5,ymin:-specMax,ymax:specMax,xlabel:"Eigenstate index (energy-sorted)",ylabel:"Finite-chain energy",zero:true,
    points:d.values.map((e,i)=>({x:i,y:e,color:i===chosen?AQM.colors.orange:AQM.colors.blue,radius:i===chosen?7:3.2}))});
   AQM.bars($("#density"),Array.from({length:2*p.N},(_,i)=>i%2===0?"A"+(i/2+1):"B"+((i+1)/2)),v.map(x=>x*x),{max:Math.max(.08,Math.max(...v.map(x=>x*x))*1.1),highlight:0,xlabel:"Position along finite chain (A/B sites)"});
   drawChain(p);
   AQM.readingTable([["Infinite-bulk spectral gap",f(d.bulkGap,4)],["Chiral symmetry",d.chiral?"Present (Γ=σᶻ)":"Broken (Δ≠0)"],
     ["Bulk winding ν",d.winding===null?(d.chiral?"undefined at gap closure":"not protected / not assigned"):String(d.winding)],["Finite-chain boundary",p.periodic?"Periodic":"Open"],
     ["Dimension of finite Hamiltonian",(2*p.N)+" × "+(2*p.N)]],"#metrics");
   const concentration=v.slice(0,2).reduce((a,b)=>a+b*b,0)+v.slice(-2).reduce((a,b)=>a+b*b,0);
   AQM.readingTable([["Selected eigenstate",String(chosen)+" / "+(d.values.length-1)],["Its eigenenergy",f(energy,6)],
     ["Weight on four boundary sites",f(concentration*100,2)+"%"],["Probability normalization",f(v.reduce((s,x)=>s+x*x,0),6)],
     ["Selected eigenenergy closest to zero",chosen===d.nearIndex?"Yes":"No"]],"#state");
 }
 $("#edge").addEventListener("click",()=>{selectedNearZero=true;update();AQM.$('[data-value-for="index"]').textContent=$("#index").value;});
 $("#index").addEventListener("input",()=>{selectedNearZero=false;});
 AQM.setup(update);
})();
