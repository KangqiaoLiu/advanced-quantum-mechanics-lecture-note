"use strict";
(function(){
  const $=AQM.$,f=AQM.fmt,M=SpinModel;
  const ids=[1,2,3],state={seed:1001,last:null};
  function params(){
    const initial=M.unit(+$("input#initial").value,+$("input#phase").value);
    const stages=ids.map(i=>({n:M.unit(+$("input#a"+i).value),mode:$("#m"+i).value}));
    return {initial,stages,N:+$("#shots").value};
  }
  function drawBloch(r,stages){
    const canvas=$("#bloch"),c=canvas.getContext("2d"),W=720,H=335;canvas.width=W;canvas.height=H;c.fillStyle="#fff";c.fillRect(0,0,W,H);
    const Cx=310,Cy=166,R=125;
    c.strokeStyle="#cbdce5";c.lineWidth=2;c.beginPath();c.arc(Cx,Cy,R,0,2*Math.PI);c.stroke();
    c.strokeStyle="#d5e2e8";c.beginPath();c.moveTo(Cx-R-32,Cy);c.lineTo(Cx+R+32,Cy);c.moveTo(Cx,Cy-R-20);c.lineTo(Cx,Cy+R+20);c.stroke();
    c.font="14px system-ui";c.fillStyle="#526b78";c.fillText("+z",Cx+6,Cy-R-24);c.fillText("+x",Cx+R+39,Cy+5);c.fillText("−z",Cx+6,Cy+R+19);c.fillText("−x",Cx-R-55,Cy+5);
    const arrow=(x,y,color,w)=>{c.strokeStyle=color;c.lineWidth=w;c.beginPath();c.moveTo(Cx,Cy);c.lineTo(Cx+R*x,Cy-R*y);c.stroke();c.fillStyle=color;c.beginPath();c.arc(Cx+R*x,Cy-R*y,5,0,2*Math.PI);c.fill();};
    stages.forEach((s,i)=>arrow(s.n[0],s.n[2],["#acb4bd","#bd733b","#8693a2"][i],2));
    if(r)arrow(r[0],r[2],AQM.colors.teal,4);
    c.fillStyle="#233b4e";c.font="14px system-ui";c.fillText("Current ensemble: " +(r?"rₓ="+f(r[0])+"   rᵧ="+f(r[1])+"   r_z="+f(r[2]):"no surviving branch"),475,85);
    c.fillStyle="#55727d";c.font="12px system-ui";c.fillText("Arrows: teal = state; gray/orange = analyzer axes",475,112);
  }
  function render(){
    const p=params(),result=M.predict(p.initial,p.stages),h=result.history;
    AQM.readingTable([["Exact survival probability",f(result.survival*100,2)+"%"],
      ["Expected survivors at N="+p.N,f(p.N*result.survival,1)],
      ["Binomial standard deviation",f(Math.sqrt(p.N*result.survival*(1-result.survival)),2)+" atoms"],
      ["State after the third station",result.valid?"defined":"impossible selected branch"]],"#metrics");
    const table=$("#stages");table.replaceChildren();
    h.forEach((step,i)=>{
      let row=document.createElement("div");row.className="metric-row";
      let title=document.createElement("span"),val=document.createElement("strong");
      title.textContent="Station "+(i+1)+" · "+({plus:"select +",minus:"select −",both:"ignore outcome",bypass:"bypass"}[step.mode]);
      val.textContent=(step.result?"P(+|in)="+f(step.result.pPlus)+" · ":"")+"survival="+f(step.joint*100,1)+"%";
      row.append(title,val);table.append(row);
    });
    const r=result.state;
    drawBloch(r,p.stages);
    AQM.readingTable([["Final vector r",r? "["+r.map(x=>f(x,3)).join(", ")+"]":"undefined (zero survivors)"],
      ["Purity Tr(ρ²)",r?f((1+M.dot(r,r))/2):"—"],
      ["State description",r?(M.dot(r,r)>1-1e-8?"pure":"mixed"):"not physically realized"]],"#state");
    AQM.bars($("#survival"),["input","after 1","after 2","after 3"],[1,...h.map(x=>x.joint)],{max:1.05,xlabel:"Measurement stage (fraction of incident atoms)"});
    if(state.last){
      $("#samples").textContent="Sampled "+state.last.N+" incident atoms: "+state.last.survivors+
        " survivors ("+f(100*state.last.survivors/state.last.N,2)+"%). Re-run for a different seeded trial. This sample corresponds to the settings at its last execution.";
    }
  }
  $("#simulate").addEventListener("click",()=>{
    const p=params();state.last=M.trials(p.initial,p.stages,p.N,++state.seed);render();
  });
  AQM.setup(()=>{state.last=null;$("#samples").textContent="Run the sampled experiment to compare the finite count with the exact prediction.";render();});
})();
