"use strict";
(function(root){
  const colors={ink:"#233b4e",blue:"#256e9b",teal:"#148579",orange:"#c17437",red:"#bf5162",grid:"#e0e8ed",gray:"#718494"};
  const $=(s,container=document)=>container.querySelector(s);
  const $$=(s,container=document)=>Array.from(container.querySelectorAll(s));
  const fmt=(x,n=3)=>!Number.isFinite(x)?"—":(Math.abs(x)<Math.pow(10,-n)/2?0:x).toFixed(n);
  const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
  function sliderValues(){
    $$('input[type="range"]').forEach(el=>{
      const label=document.querySelector('[data-value-for="'+el.id+'"]');
      if(label){let mult=+(el.dataset.mult||1),digits=+(el.dataset.digits||2);label.textContent=fmt(+el.value*mult,digits)+(el.dataset.unit||"");}
    });
  }
  function setup(onUpdate) {
    $$('input,select').forEach(el=>el.addEventListener("input",()=>{sliderValues();onUpdate();}));
    $$('[data-set]').forEach(b=>b.addEventListener("click",()=>{
      const values=JSON.parse(b.dataset.set);
      Object.entries(values).forEach(([id,val])=>{let el=document.getElementById(id);if(el)el.value=String(val);});
      sliderValues();onUpdate();
    }));
    $$('[data-answer]').forEach(b=>b.addEventListener("click",()=>{
      const answer=b.dataset.answer,group=b.closest(".self-check");
      const selected=group.querySelector('input[type="radio"]:checked');
      const feedback=group.querySelector(".feedback");
      feedback.textContent=selected
        ? (selected.value===answer?"Correct. "+(group.dataset.correct||""):"Review the projection or limiting case. "+(group.dataset.hint||""))
        : "Choose an answer before checking.";
      feedback.dataset.correct=String(!!selected&&selected.value===answer);
    }));
    sliderValues();onUpdate();
  }
  function plot(canvas,config){
    const c=canvas.getContext("2d"),W=720,H=300;
    canvas.width=W;canvas.height=H;
    let {xmin=-1,xmax=1,ymin=-1,ymax=1,xlabel="x",ylabel="y",series=[],points=[],zero=false}=config;
    if(Math.abs(xmax-xmin)<1e-12)xmax=xmin+1;if(Math.abs(ymax-ymin)<1e-12)ymax=ymin+1;
    c.clearRect(0,0,W,H);c.fillStyle="#fff";c.fillRect(0,0,W,H);
    const l=66,r=W-20,t=15,b=H-45;
    const X=x=>l+(x-xmin)/(xmax-xmin)*(r-l),Y=y=>b-(y-ymin)/(ymax-ymin)*(b-t);
    c.lineWidth=1;c.font="12px system-ui";
    for(let i=0;i<=5;i++){
      const xx=l+(r-l)*i/5,yy=t+(b-t)*i/5;
      c.strokeStyle=colors.grid;c.beginPath();c.moveTo(xx,t);c.lineTo(xx,b);c.moveTo(l,yy);c.lineTo(r,yy);c.stroke();
      c.fillStyle=colors.gray;c.textAlign="center";c.fillText(fmt(xmin+(xmax-xmin)*i/5,1),xx,b+19);
      c.textAlign="right";c.fillText(fmt(ymax-(ymax-ymin)*i/5,2),l-8,yy+4);
    }
    if(zero){c.strokeStyle="#9daab5";c.setLineDash([5,5]);if(xmin<0&&xmax>0){c.beginPath();c.moveTo(X(0),t);c.lineTo(X(0),b);c.stroke();}if(ymin<0&&ymax>0){c.beginPath();c.moveTo(l,Y(0));c.lineTo(r,Y(0));c.stroke();}c.setLineDash([]);}
    c.textAlign="center";c.fillStyle=colors.ink;c.fillText(xlabel,(l+r)/2,H-10);
    c.save();c.translate(17,(t+b)/2);c.rotate(-Math.PI/2);c.fillText(ylabel,0,0);c.restore();
    series.forEach((item,i)=>{
      const data=item.data||[];c.lineWidth=item.width||2.8;c.strokeStyle=item.color||[colors.blue,colors.teal,colors.orange,colors.red][i%4];c.setLineDash(item.dash?[7,5]:[]);
      c.beginPath();let started=false;
      data.forEach(([x,y])=>{if(!Number.isFinite(y)){started=false;return;}if(!started){c.moveTo(X(x),Y(y));started=true;}else c.lineTo(X(x),Y(y));});
      c.stroke();c.setLineDash([]);
    });
    points.forEach(item=>{
      c.beginPath();c.arc(X(item.x),Y(item.y),item.radius||5,0,Math.PI*2);c.fillStyle=item.color||colors.orange;c.fill();c.strokeStyle="#fff";c.lineWidth=1.5;c.stroke();
    });
  }
  function bars(canvas,labels,values,options={}){
    const c=canvas.getContext("2d"),W=720,H=275;canvas.width=W;canvas.height=H;
    c.fillStyle="#fff";c.fillRect(0,0,W,H);const l=62,r=W-22,t=22,b=H-45;
    const max=options.max||Math.max(.01,...values)*1.14;
    for(let i=0;i<=4;i++){let y=b-(b-t)*i/4;c.strokeStyle=colors.grid;c.beginPath();c.moveTo(l,y);c.lineTo(r,y);c.stroke();c.fillStyle=colors.gray;c.font="12px system-ui";c.textAlign="right";c.fillText(fmt(max*i/4,2),l-10,y+4);}
    const bw=(r-l)/Math.max(1,values.length);
    values.forEach((v,i)=>{let h=clamp(v/max,0,1)*(b-t);c.fillStyle=i===options.highlight?colors.orange:(options.color||colors.blue);c.globalAlpha=.78;c.fillRect(l+i*bw+bw*.14,b-h,bw*.72,h);c.globalAlpha=1;c.fillStyle=colors.ink;c.textAlign="center";c.font="11px system-ui";c.fillText(String(labels[i]),l+(i+.5)*bw,b+16);});
    c.fillStyle=colors.ink;c.textAlign="center";c.fillText(options.xlabel||"Outcome", (l+r)/2,H-9);
  }
  function readingTable(rows,target){
    const el=$(target);el.replaceChildren();
    rows.forEach(([a,b])=>{const row=document.createElement("div");row.className="metric-row";let label=document.createElement("span"),value=document.createElement("strong");label.textContent=a;value.textContent=b;row.append(label,value);el.append(row);});
  }
  function seedRng(seed){let a=(Math.round(seed)>>>0)||1;return function(){a^=a<<13;a^=a>>>17;a^=a<<5;return (a>>>0)/4294967296;};}
  root.AQM={colors,$,$$,fmt,clamp,setup,plot,bars,readingTable,seedRng};
})(globalThis);
