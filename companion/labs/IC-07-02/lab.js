"use strict";
(function(){const $=AQM.$,m=DiracModel,f=AQM.fmt;
function update(){const p=+$("#p").value,t=+$("#t").value,prep=$("#prep").value,d=m.evaluate(p,t,prep);
 const ps=Array.from({length:241},(_,i)=>-3+6*i/240);
 AQM.plot($("#disp"),{xmin:-3,xmax:3,ymin:-3.4,ymax:3.4,xlabel:"Momentum p/(mc)",ylabel:"Energy E/(mc²)",zero:true,
 series:[{data:ps.map(v=>[v,m.energy(v)]),color:AQM.colors.blue},{data:ps.map(v=>[v,-m.energy(v)]),color:AQM.colors.orange}],
 points:[{x:p,y:d.e,color:AQM.colors.red,radius:6},{x:p,y:-d.e,color:AQM.colors.red,radius:4}]});
 const pp=Array.from({length:181},(_,i)=>3*i/180);
 AQM.plot($("#nonrel"),{xmin:0,xmax:3,ymin:-4,ymax:3.3,xlabel:"Momentum magnitude |p|/(mc)",ylabel:"Kinetic energy /(mc²)",
 series:[{data:pp.map(q=>[q,m.energy(q)-1]),color:AQM.colors.blue},
 {data:pp.map(q=>[q,m.nonrel(q)]),color:AQM.colors.orange,dash:true},
 {data:pp.map(q=>[q,m.correction(q)]),color:AQM.colors.teal,dash:true}],zero:true,
 points:[{x:Math.abs(p),y:d.kinetic,color:AQM.colors.red,radius:5}]});
 const ts=Array.from({length:241},(_,i)=>12*i/240);
 AQM.plot($("#velocity"),{xmin:0,xmax:12,ymin:-1.03,ymax:1.03,xlabel:"Time τ = mc²t/ℏ",ylabel:"〈v〉/c",zero:true,
 series:[{data:ts.map(time=>[time,m.evaluate(p,time,prep).v]),color:AQM.colors.blue},
 {data:ts.map(time=>[time,p/d.e]),color:AQM.colors.orange,dash:true}],
 points:[{x:t,y:d.v,color:AQM.colors.red,radius:6}]});
 AQM.readingTable([["Dimensionless positive E",f(d.e,5)],["Negative-energy branch","−"+f(d.e,5)],
 ["Exact kinetic E−mc²",f(d.kinetic,5)],["Schrödinger kinetic p²/2m",f(d.nonrel,5)],
 ["Relativistic expansion through p⁴",f(d.correction,5)],
 ["〈velocity〉/c at selected time",f(d.v,5)],["Positive-energy group velocity/c",f(d.groupVelocity,5)],
 ["Upper/lower probabilities",f(d.probUpper,5)+" / "+f(d.probLower,5)],
 ["Spinor normalization",f(d.probUpper+d.probLower,5)]],"#metrics");
 $("#reading").textContent=prep==="positive"?"A positive-energy eigenspinor has stationary component probabilities and a constant velocity equal to the group velocity p/E.":"The prepared upper-component spinor is a coherent mixture of positive and negative energy eigenstates at p≠0. Its velocity generally oscillates at angular frequency 2E in natural units: a two-level illustration of zitterbewegung. The physical one-particle meaning of negative-frequency components requires care.";
}
AQM.setup(update);
})();
