"use strict";
const root=document.querySelector("#reading-list"),chapterNav=document.querySelector("#chapter-nav");
const base="https://github.com/KangqiaoLiu/advanced-quantum-mechanics-lecture-note/blob/main/";
const e=(tag,cls,value)=>{const item=document.createElement(tag);if(cls)item.className=cls;if(value!==undefined)item.textContent=value;return item;};
function link(url,label,external=false){const a=e("a","",label);a.href=url;if(external){a.target="_blank";a.rel="noopener noreferrer";}return a;}
async function load(){
 try{
  const response=await fetch("catalog.json");
  if(!response.ok)throw Error("Unable to load the curriculum registry.");
  const catalog=await response.json(),reading=catalog.labs.filter(x=>x.editorial_track==="reading"),ids=new Map(catalog.labs.map(x=>[x.id,x]));
  document.querySelector("#reading-count").textContent=reading.length+" guided extensions across "+catalog.chapters.length+" chapters";
  for(const ch of catalog.chapters){
   const topics=reading.filter(l=>l.chapter===ch.number);if(!topics.length)continue;
   chapterNav.append(link("#chapter-"+ch.number,"Chapter "+ch.number+" · "+topics.length));
   const section=e("section","reading-chapter");section.id="chapter-"+ch.number;
   section.append(e("h2","",ch.number+". "+ch.name));const grid=e("div","reading-grid");
   for(const lab of topics){
    const card=e("article","reading-task");card.id=lab.id;
    card.append(e("span","id",lab.id+" · Guided reading"));
    card.append(e("h3","",lab.title));card.append(e("p","",lab.question));
    card.append(e("p","reading-action","Investigate independently: "+lab.reading_resource.task));
    const links=e("div","links");
    links.append(link(lab.reading_resource.url,lab.reading_resource.label+" ↗",true));
    links.append(link(base+lab.source,"Original lecture-note section ↗",true));
    const related=ids.get(lab.reading_resource.related_lab);
    if(related&&related.page)links.append(link(related.page,"Related experiment: "+related.id+" ↗"));
    card.append(links);grid.append(card);
   }
   section.append(grid);root.append(section);
  }
  if(location.hash){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(target)target.scrollIntoView({block:"start"});}
 }catch(error){const x=document.querySelector("#reading-error");x.hidden=false;x.textContent="The guided reading page requires the curriculum JSON. Start an HTTP preview from the repository root and visit /companion/reading.html.";}
}
load();
