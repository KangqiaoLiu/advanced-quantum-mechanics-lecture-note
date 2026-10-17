"use strict";
(function(){
  const $=AQM.$,f=AQM.fmt,M=QNNModel;
  let updates=0,seed=3301;
  const read=()=>({kind:$("#kind").value,theta:+$("#theta").value,x:+$("#x").value,beta:+$("#beta").value,target:+$("#target").value,eta:+$("#eta").value,shots:+$("#shots").value});
  function drawCircuit(kind){
    let canvas=$("#circuit"),c=canvas.getContext("2d");canvas.width=720;canvas.height=210;c.fillStyle="white";c.fillRect(0,0,720,210);
    const wire=(y,label)=>{c.strokeStyle="#9fb0bd";c.lineWidth=2;c.beginPath();c.moveTo(60,y);c.lineTo(685,y);c.stroke();c.fillStyle=AQM.colors.ink;c.font="15px system-ui";c.fillText(label,11,y+4);};
    const gate=(x,y,text)=>{c.fillStyle="#e6f3f5";c.strokeStyle="#2b8390";c.lineWidth=2;c.fillRect(x-46,y-20,92,40);c.strokeRect(x-46,y-20,92,40);c.fillStyle=AQM.colors.ink;c.textAlign="center";c.font="14px system-ui";c.fillText(text,x,y+5);c.textAlign="left";};
    wire(72,"|0〉");gate(175,72,"Ry(x)");gate(340,72,"Ry(θ)");
    if(kind==="two"){wire(150,"|0〉");gate(175,150,"Ry(β)");
      c.fillStyle=AQM.colors.orange;c.beginPath();c.arc(510,72,6,0,2*Math.PI);c.fill();c.strokeStyle=AQM.colors.orange;c.lineWidth=2.5;c.beginPath();c.moveTo(510,72);c.lineTo(510,150);c.stroke();c.beginPath();c.arc(510,150,14,0,2*Math.PI);c.stroke();c.beginPath();c.moveTo(497,150);c.lineTo(523,150);c.stroke();gate(620,150,"〈Z₁〉");}
    else gate(605,72,"〈Z₀〉");
  }
  function render(){
    const p=read();$("#beta-wrap").hidden=p.kind!=="two";drawCircuit(p.kind);
    const current=M.output(p.kind,p.theta,p.x,p.beta),d=M.derivative(p.kind,p.theta,p.x,p.beta),
      shift=M.shifted(p.kind,p.theta,p.x,p.beta),lo=M.loss(p.kind,p.theta,p.x,p.beta,p.target),
      grad=M.gradLoss(p.kind,p.theta,p.x,p.beta,p.target);
    AQM.readingTable([["Exact expectation f(θ)",f(current,5)],["Measurement outcome probabilities", "P(+1)="+f((1+current)/2,3)+" · P(−1)="+f((1-current)/2,3)],
      ["Exact loss L",f(lo,5)],["Readout of the control qubit purity",f(M.purity(p.kind,p.theta,p.x,p.beta),5)]],"#current");
    const plus=M.output(p.kind,p.theta+Math.PI/2,p.x,p.beta),minus=M.output(p.kind,p.theta-Math.PI/2,p.x,p.beta);
    AQM.readingTable([["f(θ+π/2)",f(plus,5)],["f(θ−π/2)",f(minus,5)],["Shifted gradient [f₊−f₋]/2",f(shift,5)],
      ["Direct analytic ∂θf",f(d,5)],["Exact ∂θL",f(grad,5)],["One ideal update θ−η∂θL",f(p.theta-p.eta*grad,5)],
      ["Shot-gradient standard error",f(Math.sqrt(((1-plus*plus)+(1-minus*minus))/(4*p.shots)),5)]],"#gradients");
    const points=Array.from({length:251},(_,i)=>{const theta=-Math.PI+i*2*Math.PI/250;return [theta,M.output(p.kind,theta,p.x,p.beta)];});
    AQM.plot($("#expectation"),{xmin:-Math.PI,xmax:Math.PI,ymin:-1.08,ymax:1.08,xlabel:"Trainable parameter θ (rad)",ylabel:"Exact expectation f(θ)",zero:true,series:[{data:points,color:AQM.colors.teal}],
       points:[{x:p.theta,y:current,color:AQM.colors.red,radius:6},{x:p.theta+Math.PI/2>Math.PI?p.theta-Math.PI*1.5:p.theta+Math.PI/2,y:plus,color:AQM.colors.orange,radius:5},{x:p.theta-Math.PI/2< -Math.PI?p.theta+Math.PI*1.5:p.theta-Math.PI/2,y:minus,color:AQM.colors.blue,radius:5}]});
    const losses=Array.from({length:251},(_,i)=>{let theta=-Math.PI+i*2*Math.PI/250;return [theta,M.loss(p.kind,theta,p.x,p.beta,p.target)];});
    AQM.plot($("#landscape"),{xmin:-Math.PI,xmax:Math.PI,ymin:0,ymax:2.1,xlabel:"Trainable parameter θ (rad)",ylabel:"Loss L(θ)",series:[{data:losses,color:AQM.colors.blue}],points:[{x:p.theta,y:lo,color:AQM.colors.orange,radius:6}]});
    const hist=M.train(p,updates,seed),peak=Math.max(.1,...hist.ideal.map(x=>x.loss),...hist.noisy.map(x=>x.loss));
    AQM.plot($("#history"),{xmin:0,xmax:Math.max(1,updates),ymin:0,ymax:peak*1.15,xlabel:"Training update",ylabel:"True loss at updated θ",series:[
      {data:hist.ideal.map(x=>[x.step,x.loss]),color:AQM.colors.blue},
      {data:hist.noisy.map(x=>[x.step,x.loss]),color:AQM.colors.orange}]});
    const idealEnd=hist.ideal.at(-1),noisyEnd=hist.noisy.at(-1);
    AQM.readingTable([["Completed updates",String(updates)],["Ideal: final θ and true loss",f(idealEnd.theta,4)+" · "+f(idealEnd.loss,6)],
      ["Finite-shot: final θ and true loss",f(noisyEnd.theta,4)+" · "+f(noisyEnd.loss,6)],
      ["Circuit evaluations for noisy gradient",String(updates*3)+" settings × "+p.shots+" shots"],
      ["Seed for reproducible shot samples",String(seed)]],"#training");
    $("#training-note").textContent=updates?("Finite-shot updates used independent measurements of f, f₊ and f₋. At the last computed step θ="+f(hist.last.theta,4)+
      ", the true loss gradient was "+f(hist.last.trueLossGradient,5)+" and the estimated gradient was "+f(hist.last.sampledLossGradient,5)+
      ". Re-setting an input resets the trajectory."):"Inspect the exact loss and parameter-shift values; use the two buttons to begin reproducible training.";
  }
  $("#single").addEventListener("click",()=>{updates=Math.min(40,updates+1);render();});
  $("#run").addEventListener("click",()=>{updates=+$("#steps").value;render();});
  $("#reset").addEventListener("click",()=>{updates=0;seed+=17;render();});
  AQM.setup(()=>{updates=0;render();});
})();
