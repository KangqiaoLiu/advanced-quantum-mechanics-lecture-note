"use strict";
const root=document.querySelector("#reading-list"),chapterNav=document.querySelector("#chapter-nav");
const e=(tag,cls,value)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(value!==undefined)x.textContent=value;return x;};
function link(url,label,external){const x=e("a","",label);x.href=url;if(external){x.target="_blank";x.rel="noopener noreferrer";}return x;}
async function load(){
 try{
  const response=await fetch("catalog.json");if(!response.ok)throw Error("Reading content unavailable");
  const catalog=await response.json(),readings=catalog.labs.filter(x=>x.category==="reading"),index=new Map(catalog.labs.map(x=>[x.id,x]));
  document.querySelector("#reading-count").textContent=readings.length+" guided reading topics across "+catalog.chapters.length+" chapters";
  for(const ch of catalog.chapters){
   const topics=readings.filter(x=>x.chapter===ch.number);if(!topics.length)continue;
   chapterNav.append(link("#chapter-"+ch.number,"Chapter "+ch.number));
   const section=e("section","reading-chapter");section.id="chapter-"+ch.number;
   section.append(e("h2","",ch.number+". "+ch.name));const grid=e("div","reading-grid");
   for(const item of topics){
    const card=e("article","reading-task");card.id=item.id;
    card.append(e("span","id",item.id+" · Guided reading"));
    card.append(e("h3","",item.title));card.append(e("p","",item.question));
    card.append(e("p","reading-action","Investigate independently: "+item.reading.task));
    const links=e("div","links");links.append(link(item.reading.url,item.reading.title+" ↗",true));
    links.append(link("../pdf/advanced-quantum-mechanics.pdf","Course lecture notes ↗"));
    const related=index.get(item.reading.related);
    if(related?.page)links.append(link(related.page,"Related experiment ↗"));
    card.append(links);grid.append(card);
   }
   section.append(grid);root.append(section);
  }
  if(location.hash){const id=decodeURIComponent(location.hash.slice(1));const x=document.getElementById(id);if(x)x.scrollIntoView({block:"start"});}
 }catch(error){const x=document.querySelector("#reading-error");x.hidden=false;x.textContent="Unable to load the reading guide. Open this page through the course website.";}
}
load();
