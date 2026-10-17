"use strict";
(function(){const $=AQM.$,m=FermiModel,f=AQM.fmt;
function update(){const n=m.decode($("#occup").value),left={kind:$("#leftkind").value,j:+$("#left").value},
 right={kind:$("#rightkind").value,j:+$("#right").value},r=m.compare(n,left,right),ab=r.ab,ba=r.ba;
 const final=ab.after||[0,0,0,0];
 AQM.bars($("#before"),["0","1","2","3"],n,{max:1.1,xlabel:"Occupied orbitals in input |n₀ n₁ n₂ n₃〉"});
 AQM.bars($("#after"),["0","1","2","3"],final,{max:1.1,xlabel:ab.allowed?"Occupied orbitals after AB |n′〉":"AB annihilates the chosen Fock state (zero vector)"});
 AQM.plot($("#order"),{xmin:-.4,xmax:1.4,ymin:-1.15,ymax:1.15,xlabel:"Order: 0 = AB, 1 = BA",ylabel:"Signed amplitude",zero:true,
 series:[{data:[[0,ab.amplitude],[1,ba.amplitude]],color:AQM.colors.blue,dash:true}],
 points:[{x:0,y:ab.amplitude,color:AQM.colors.orange,radius:7},{x:1,y:ba.amplitude,color:AQM.colors.teal,radius:7}]});
 const step=ab.first,step2=ab.second;
 AQM.readingTable([["Initial occupation |n〉","|"+m.encode(n)+"〉"],["Rightmost operation",right.kind==="create"?"a†"+right.j:"a"+right.j],
 ["Occupied earlier orbitals at step 1",String(step.m)],["Step 1 amplitude",String(step.amplitude)],
 ["Intermediate state",step.after?"|"+m.encode(step.after)+"〉":"zero vector"],["Step 2 amplitude",step2?String(step2.amplitude):"not reached"],
 ["AB|n〉",ab.allowed?(ab.amplitude>0?"+":"−")+"|"+m.encode(ab.after)+"〉":"0"],
 ["BA|n〉",ba.allowed?(ba.amplitude>0?"+":"−")+"|"+m.encode(ba.after)+"〉":"0"],
 ["{A,B}|n〉 amplitude",String(r.sum)]],"#metrics");
 const target=left.kind===right.kind?0:left.j===right.j?1:0;
 $("#identity").textContent="Canonical anticommutator: {"+(left.kind==="create"?"a†":"a")+left.j+","+(right.kind==="create"?"a†":"a")+right.j+"}|n〉 = "+
 (target===1?"|n〉":"0")+". Computed coefficient: "+r.sum+".";
}
AQM.setup(update);
})();
