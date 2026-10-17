"use strict";
(function(){
  const $=AQM.$,f=AQM.fmt,M=OscModel;
  let playing=false,lastFrame=0,frame=null;
  function read(){
    return {kind:$("#kind").value,n:+$("#n").value,amplitude:+$("#amplitude").value,phase:+$("#phase").value*Math.PI/180,
    r:+$("#squeeze").value,squeezeAngle:+$("#squeezeAngle").value*Math.PI/180,time:+$("#time").value};
  }
  function wigner(canvas,model){
    const c=canvas.getContext("2d"),S=300;canvas.width=720;canvas.height=340;
    c.fillStyle="#fff";c.fillRect(0,0,720,340);
    const im=c.createImageData(S,S),maxR=4;
    for(let j=0;j<S;j++)for(let i=0;i<S;i++){
      const x=-maxR+2*maxR*i/(S-1),p=maxR-2*maxR*j/(S-1),v=model.wigner(x,p),strength=Math.min(1,Math.abs(v)*Math.PI);
      const hi=v>=0?[30,103,150]:[197,101,52];const id=4*(j*S+i);
      im.data[id]=Math.round(255*(1-strength)+hi[0]*strength);
      im.data[id+1]=Math.round(255*(1-strength)+hi[1]*strength);
      im.data[id+2]=Math.round(255*(1-strength)+hi[2]*strength);im.data[id+3]=255;
    }
    c.putImageData(im,40,18);c.strokeStyle="#526b78";c.strokeRect(40,18,S,S);
    c.strokeStyle="#d3dbe0";c.beginPath();c.moveTo(190,18);c.lineTo(190,318);c.moveTo(40,168);c.lineTo(340,168);c.stroke();
    if(model.kind!=="number"){c.fillStyle="#172f40";c.beginPath();c.arc(190+model.mx/maxR*150,168-model.mp/maxR*150,5,0,2*Math.PI);c.fill();}
    c.fillStyle=AQM.colors.ink;c.font="13px system-ui";c.fillText("p",194,13);c.fillText("x",345,173);
    c.fillText("−4",42,334);c.fillText("+4",317,334);c.fillText("Wigner quasiprobability",378,48);
    c.fillStyle=AQM.colors.blue;c.fillRect(380,78,16,13);c.fillStyle=AQM.colors.ink;c.fillText("positive W",407,90);
    c.fillStyle=AQM.colors.orange;c.fillRect(380,106,16,13);c.fillStyle=AQM.colors.ink;c.fillText("negative W",407,118);
    c.fillText("Center: ("+f(model.mx,2)+", "+f(model.mp,2)+")",380,164);
    c.fillText("∫ W(x,p) dx dp = 1",380,196);
    c.fillText("Area under |ψ(x)|² = 1",380,225);
  }
  function render(){
    const vals=read(),mod=M.describe(vals);
    ["coherent","number","squeezed"].forEach(kind=>{$("#"+kind+"-controls").hidden=vals.kind!==kind;});
    AQM.plot($("#density"),{xmin:-5,xmax:5,ymin:0,ymax:Math.max(.45,1.2*Math.max(...Array.from({length:300},(_,i)=>mod.density(-5+10*i/299)))),xlabel:"Dimensionless position x",ylabel:"|ψ(x)|²",series:[{data:Array.from({length:351},(_,i)=>{let x=-5+i/35;return[x,mod.density(x)];}),color:AQM.colors.blue,width:3.2}],points:[{x:mod.mx,y:mod.density(mod.mx),color:AQM.colors.orange}]});
    wigner($("#wigner"),mod);
    const labels=Array.from({length:19},(_,i)=>String(i)),probs=labels.map((_,i)=>mod.occupation(i));
    AQM.bars($("#occupations"),labels,probs,{max:Math.max(.12,Math.max(...probs)*1.1),xlabel:"Energy quantum number n",highlight:vals.kind==="number"?vals.n:undefined});
    const tail=Math.max(0,1-probs.reduce((s,x)=>s+x,0));
    $("#tail").textContent="P(n) for n = 0,…,18. Probability at n > 18: "+f(tail,6)+". Occupations are exact; only the displayed range is finite.";
    AQM.readingTable([["〈x〉",f(mod.mx,4)],["〈p〉",f(mod.mp,4)],["Δx²",f(mod.vxx,4)],["Δp²",f(mod.vpp,4)],["Cov(x,p)",f(mod.vxp,4)]],"#moments");
    AQM.readingTable([["〈n〉",f(mod.meanN,4)],["Covariance determinant",f(mod.det,4)],["Δx² Δp²",f(mod.vxx*mod.vpp,4)],["Oscillator energy 〈H〉/ℏω",f(mod.meanN+.5,4)]],"#phaseinfo");
  }
  function stop(){playing=false;$("#play").setAttribute("aria-pressed","false");$("#play").textContent="Play evolution";if(frame!==null)cancelAnimationFrame(frame);frame=null;lastFrame=0;}
  function animate(timestamp){
    if(!playing)return;
    if(lastFrame){const delta=(timestamp-lastFrame)/1000;const el=$("#time");el.value=(+el.value+delta*1.2)%(2*Math.PI);AQM.$('[data-value-for="time"]').textContent=f(+el.value,2)+" rad";render();}
    lastFrame=timestamp;frame=requestAnimationFrame(animate);
  }
  $("#play").addEventListener("click",()=>{if(playing){stop();return;}playing=true;$("#play").textContent="Pause evolution";$("#play").setAttribute("aria-pressed","true");frame=requestAnimationFrame(animate);});
  $("#pause").addEventListener("click",stop);
  if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){$("#play").disabled=true;$("#play").title="Motion reduced: advance using the evolution time slider.";}
  AQM.setup(()=>{render();});
  document.addEventListener("visibilitychange",()=>{if(document.hidden)stop();});
})();
