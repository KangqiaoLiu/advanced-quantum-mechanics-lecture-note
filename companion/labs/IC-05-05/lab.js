"use strict";
(function(){const $=AQM.$,m=ScattModel,f=AQM.fmt;
function update(){const d0=+$("#delta0").value,d1=+$("#delta1").value,k=+$("#k").value,theta=+$("#theta").value;
 const s=m.evaluate(d0,d1,k),rads=Array.from({length:181},(_,i)=>i);
 AQM.plot($("#angle"),{xmin:0,xmax:180,ymin:0,ymax:Math.max(.05,...rads.map(x=>s.ds(x)))*1.09,
 xlabel:"Scattering angle θ (degrees)",ylabel:"dσ/dΩ (length²/steradian)",
 series:[{data:rads.map(t=>[t,s.ds(t)]),color:AQM.colors.blue},{data:rads.map(t=>[t,Math.sin(m.rad(d0))**2/k**2]),color:AQM.colors.orange,dash:true},
 {data:rads.map(t=>[t,9*Math.sin(m.rad(d1))**2*Math.cos(m.rad(t))**2/k**2]),color:AQM.colors.teal,dash:true}],
 points:[{x:theta,y:s.ds(theta),color:AQM.colors.red,radius:5}]});
 AQM.plot($("#polar"),{xmin:0,xmax:180,ymin:0,ymax:Math.max(.025,...rads.map(t=>s.angularDensity(t)))*1.12,
 xlabel:"Polar angle θ (degrees)",ylabel:"dP/dθ (per radian)",series:[{data:rads.map(t=>[t,s.angularDensity(t)]),color:AQM.colors.teal}],
 points:[{x:theta,y:s.angularDensity(theta),color:AQM.colors.orange,radius:5}]});
 const ds=Array.from({length:181},(_,i)=>i);
 AQM.plot($("#phase"),{xmin:0,xmax:180,ymin:0,ymax:4*Math.PI/(k*k)*1.05,
 xlabel:"s-wave phase shift δ₀ (degrees)",ylabel:"σ₀ (length²)",series:[{data:ds.map(v=>[v,4*Math.PI*Math.sin(m.rad(v))**2/(k*k)]),color:AQM.colors.blue}],
 points:[{x:d0,y:s.sigma0,color:AQM.colors.orange,radius:5}]});
 AQM.readingTable([["σ₀, s-wave cross section",f(s.sigma0,4)],["σ₁, p-wave cross section",f(s.sigma1,4)],
 ["Total σ",f(s.total,4)],["Optical-theorem σ",f(s.optical,4)],["Transport cross section σtr",f(s.transport,4)],
 ["Forward amplitude f(0)",f(s.forward.re,4)+" + i("+f(s.forward.im,4)+")"],
 ["Selected differential dσ/dΩ",f(s.ds(theta),4)],["Elastic S-matrix magnitudes","|S₀|=|S₁|=1"]],"#metrics");
 $("#interpret").textContent=s.total<1e-12?"Both active phase shifts are integer multiples of π. The modeled elastic amplitude vanishes and the conditional angular distribution is undefined; its plotting value is set to zero.":(Math.abs(s.interference)>1e-7?"The two partial waves interfere in the angular distribution. Their cross term integrates to zero in the total cross section because P₀ and P₁ are orthogonal.":"The s–p interference term vanishes for these phase shifts.");
}
AQM.setup(update);
})();
