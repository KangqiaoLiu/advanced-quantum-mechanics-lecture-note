"use strict";
(function(){const $=AQM.$,m=EntModel,f=AQM.fmt;
 function update(){const t=+$("#theta").value,phase=+$("#phase").value,a=+$("#alpha").value,b=+$("#beta").value,basis=$("#basis").value,
 d=m.evaluate(t,phase,a,b,basis);
 AQM.bars($("#schmidt"),["λ₀","λ₁"],[d.lambda0,d.lambda1],{max:1.05,xlabel:"Eigenvalues of reduced density operator ρA"});
 AQM.bars($("#joint"),["++","+-","-+","--"],d.joint,{max:1.05,xlabel:"Joint measurement outcomes (A,B)"});
 AQM.plot($("#correl"),{xmin:-180,xmax:180,ymin:-1.02,ymax:1.02,xlabel:"Relative state phase φ (degrees)",ylabel:"Correlation E",zero:true,
 series:[{data:Array.from({length:241},(_,i)=>{let ph=-180+1.5*i;return [ph,m.evaluate(t,ph,a,b,basis).E];}),color:AQM.colors.blue}],
 points:[{x:phase,y:d.E,color:AQM.colors.orange,radius:6}]});
 AQM.readingTable([["Reduced state ρA","diag("+f(d.lambda0,4)+", "+f(d.lambda1,4)+")"],["Entropy S(ρA)",f(d.entropy,4)+" bits"],["Purity Tr(ρA²)",f(d.purity,4)],["Concurrence C",f(d.concurrence,4)],["Global state purity","1.0000"],["Correlation E",f(d.E,4)],["P(B+ | A+)",f(d.conditionalBplus,4)]],"#metrics");
 $("#interpret").textContent=(t===0||t===90)?"The joint state is a product state; its reduced density operator is pure.":(Math.abs(t-45)<1e-8?"This state is maximally entangled. Each subsystem is maximally mixed regardless of φ.":"The state is partially entangled; entropy tracks the Schmidt probabilities.");
 }
 AQM.setup(update);
})();
