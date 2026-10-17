"use strict";
(function(){const $=AQM.$,m=AvoidModel,f=AQM.fmt;
 function update(){const x=+$("#detuning").value,g=+$("#coupling").value,d=m.evaluate(x,g);
 const xs=Array.from({length:251},(_,i)=>-3+6*i/250);
 AQM.plot($("#bands"),{xmin:-3,xmax:3,ymin:-3.5,ymax:3.5,xlabel:"Unperturbed detuning x",ylabel:"Energy",zero:true,
 series:[{data:xs.map(v=>[v,m.evaluate(v,g).exact[1]]),color:AQM.colors.blue},
 {data:xs.map(v=>[v,m.evaluate(v,g).exact[0]]),color:AQM.colors.orange},
 {data:xs.map(v=>[v,Math.abs(v)]),color:AQM.colors.gray,dash:true,width:1.5},
 {data:xs.map(v=>[v,-Math.abs(v)]),color:AQM.colors.gray,dash:true,width:1.5}],
 points:[{x,y:d.exact[1],color:AQM.colors.red,radius:5},{x,y:d.exact[0],color:AQM.colors.red,radius:5}]});
 const es=xs.map(v=>{const q=m.evaluate(v,g);return [v,q.ptError===null?NaN:q.ptError];});
 AQM.plot($("#error"),{xmin:-3,xmax:3,ymin:0,ymax:Math.max(1.05,2*g),xlabel:"Unperturbed detuning x",ylabel:"|E⁽²⁾₊ − E₊|",series:[{data:es,color:AQM.colors.red}],points:d.ptError===null?[]:[{x,y:d.ptError,color:AQM.colors.orange}]});
 const pop=xs.map(v=>[v,m.evaluate(v,g).pUpperZ]);
 AQM.plot($("#weights"),{xmin:-3,xmax:3,ymin:0,ymax:1.02,xlabel:"Unperturbed detuning x",ylabel:"P(|↑z〉 | upper energy)",series:[{data:pop,color:AQM.colors.teal}],points:d.pUpperZ===null?[]:[{x,y:d.pUpperZ,color:AQM.colors.orange}]});
 AQM.readingTable([["Exact energies E−, E+",d.exact.map(v=>f(v,4)).join(" ; ")],
 ["Exact level spacing",f(d.gap,4)],["Minimum avoided gap",f(d.avoidedGap,4)],
 ["Upper-state ↑z weight",f(d.pUpperZ,4)],["Coupling ratio |g/x|",f(d.ptSmallParameter,3)],
 ["Second-order upper energy",f(d.pt[1],4)],["Second-order absolute error",f(d.ptError,4)]],"#metrics");
 $("#verdict").textContent=d.ptSmallParameter===null?"At x=0 the nondegenerate expansion is undefined. Diagonalizing the degenerate two-level block gives energies ±|g|.":(d.ptSmallParameter<.2?"Well separated: second-order perturbation theory is usually accurate.":(d.ptSmallParameter>.8?"Strong state mixing: the nondegenerate series is unreliable near the avoided crossing.":"The perturbative corrections are appreciable; compare the exact and truncated predictions."));
 }
 AQM.setup(update);
})();
