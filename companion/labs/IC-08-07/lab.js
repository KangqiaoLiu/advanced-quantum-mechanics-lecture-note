"use strict";(function(){const $=AQM.$,m=Model0807,f=AQM.fmt;function drawLoop(canvas,m,R,dd,zz,phase){
 const c=canvas.getContext("2d");canvas.width=720;canvas.height=300;
 c.fillStyle="#ffffff";c.fillRect(0,0,720,300);
 const x0=58,y0=36,size=222,centerX=x0+size/2,centerY=y0+size/2,scale=size/2.9;
 const X=x=>centerX+scale*x,Y=y=>centerY-scale*y;
 c.strokeStyle="#cbd8df";c.lineWidth=1;c.strokeRect(x0,y0,size,size);
 c.setLineDash([4,4]);c.strokeStyle="#cedae0";
 c.beginPath();c.moveTo(x0,centerY);c.lineTo(x0+size,centerY);c.moveTo(centerX,y0);c.lineTo(centerX,y0+size);c.stroke();c.setLineDash([]);
 c.fillStyle="#536b79";c.font="13px system-ui";c.textAlign="center";
 c.fillText("δ · dimerization",centerX,285);
 c.save();c.translate(23,centerY);c.rotate(-Math.PI/2);c.fillText("Δ · onsite staggering",0,0);c.restore();
 c.fillText("−1.45",x0+17,y0+size+15);c.fillText("+1.45",x0+size-17,y0+size+15);
 c.lineWidth=2.8;c.strokeStyle=AQM.colors.blue;c.beginPath();
 for(let j=0;j<=240;j++){let a=2*Math.PI*j/240,d=m.dimer(a,R,dd,zz),x=X(d.delta),y=Y(d.z);if(j===0)c.moveTo(x,y);else c.lineTo(x,y);}
 c.stroke();
 const pos=m.dimer(phase,R,dd,zz);
 c.fillStyle=AQM.colors.orange;c.beginPath();c.arc(X(0),Y(0),6,0,2*Math.PI);c.fill();
 c.fillStyle=AQM.colors.red;c.beginPath();c.arc(X(pos.delta),Y(pos.z),6,0,2*Math.PI);c.fill();
 c.fillStyle="#244658";c.textAlign="left";c.font="15px system-ui";
 c.fillText("Actual parameter-space geometry",320,62);
 c.font="13px system-ui";c.fillText("Equal axis scales (closed circle)",320,95);
 c.fillText("Orange: bulk gap-closing point",320,126);
 c.fillText("Red: selected cycle position",320,156);
 c.fillText("R = "+AQM.fmt(R,2),320,196);
 c.fillText("Loop centre (δ₀, Δ₀) =",320,222);
 c.fillText("("+AQM.fmt(dd,2)+", "+AQM.fmt(zz,2)+")",320,243);
}function update(){const R=+$("#radius").value,dd=+$("#centerD").value,zz=+$("#centerZ").value,p=+$("#phase").value,N=+$("#grid").value,d=m.predict(R,dd,zz,p,N),angles=Array.from({length:181},(_,i)=>i*2*Math.PI/180);drawLoop($("#loop"),m,R,dd,zz,p);const profiles=angles.map(x=>[x,m.flux(x,R,dd,zz,N)]),maxVal=Math.max(.2,...profiles.map(x=>Math.abs(x[1]||0)));AQM.plot($("#flux"),{xmin:0,xmax:2*Math.PI,ymin:-maxVal*1.15,ymax:maxVal*1.15,xlabel:"Adiabatic cycle phase φ",ylabel:"Berry flux F(φ)",zero:true,series:[{data:profiles,color:AQM.colors.teal}]});let cumulative=0,last=0;const data=[[0,0]];for(let i=1;i<angles.length;i++){const h=angles[i]-angles[i-1];cumulative+=h*(profiles[i][1]+profiles[i-1][1])/2;data.push([angles[i],cumulative]);}AQM.plot($("#charge"),{xmin:0,xmax:2*Math.PI,ymin:-1.35,ymax:.35,xlabel:"Pump cycle phase φ",ylabel:"Integrated geometric index Q(φ)",zero:true,series:[{data,color:AQM.colors.blue},...(d.analytic===null?[]:[{data:[[0,d.analytic],[2*Math.PI,d.analytic]],color:AQM.colors.orange,dash:true}])],points:[{x:p,y:data.reduce((best,z)=>Math.abs(z[0]-p)<Math.abs(best[0]-p)?z:best,data[0])[1],color:AQM.colors.red}]});AQM.readingTable([["Selected control point (δ,Δ)",f(d.position.delta,4)+" ; "+f(d.position.z,4)],["Minimum bulk gap throughout cycle",f(d.mingap,6)],["Gap at current cycle position",f(d.instantGap,6)],["Analytic lower-band pump index",d.analytic===null?"undefined: gapless cycle":String(d.analytic)],["Midpoint-integrated geometric index",f(d.numeric,6)],["Deviation from topological integer",f(d.error,6)],["Momentum–cycle grid",String(N)+" × "+String(N)]],"#metrics");$("#interpret").textContent=d.critical?"The control loop touches a bulk degeneracy. An isolated occupied-band Chern pump index is undefined.":d.error!==null&&d.error>.04?"Finite-grid error is significant near the gap: increase N for a reliable topological comparison.":"The cycle is gapped; the integrated Berry curvature approaches a quantized lower-band index controlled by loop winding.";}AQM.setup(update);})();