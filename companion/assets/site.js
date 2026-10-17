"use strict";
const listing=document.querySelector("#labs"),chapterSelect=document.querySelector("#chapter"),search=document.querySelector("#search"),collection=document.querySelector("#track"),count=document.querySelector("#count"),status=document.querySelector("#catalog-status"),notice=document.querySelector("#message");
let catalog;
function element(tag,cls,value){const x=document.createElement(tag);if(cls)x.className=cls;if(value!==undefined)x.textContent=value;return x;}
function link(href,label,external){const a=element("a","",label);a.href=href;if(external){a.target="_blank";a.rel="noopener noreferrer";}return a;}
function card(topic){
 const card=element("article","lab");
 if(topic.category==="foundation")card.classList.add("lab-reference");
 if(topic.category==="reading")card.classList.add("lab-reading");
 card.append(element("span","id",topic.id+" · Chapter "+topic.chapter));
 card.append(element("h3","",topic.title));
 card.append(element("p","question",topic.question));
 if(topic.category!=="reading")card.append(element("p","observable","Explore: "+topic.observable));
 card.append(element("span","chip",topic.category==="featured"?"Featured investigation":topic.category==="foundation"?"Foundational reference":"Guided reading"));
 const links=element("div","lab-links");
 if(topic.page)links.append(link(topic.page,"Open experiment ↗"));
 if(topic.reading){links.append(link("reading.html#"+encodeURIComponent(topic.id),"Open reading exercise ↗"));links.append(link(topic.reading.url,"External teaching resource ↗",true));}
 links.append(link("../pdf/advanced-quantum-mechanics.pdf","Course lecture notes ↗"));
 card.append(links);return card;
}
function render(){
 if(!catalog)return;
 const chapter=chapterSelect.value,kind=collection.value,term=search.value.trim().toLocaleLowerCase();
 const topics=catalog.labs.filter(t=>
  (chapter==="all"||t.chapter===Number(chapter))&&
  (kind==="all-experiments"?Boolean(t.page):kind==="featured"?t.category==="featured":kind==="foundation"?t.category==="foundation":t.category==="reading")&&
  (!term||[t.id,t.title,t.question,t.observable||"",t.reading?.task||""].some(s=>s.toLocaleLowerCase().includes(term)))
 );
 listing.replaceChildren(...topics.map(card));
 count.textContent=topics.length+" "+(topics.length===1?"learning topic":"learning topics");
 if(!topics.length)listing.append(element("p","minor","No matching topic. Try another chapter or search term."));
}
async function init(){
 try{
  const request=await fetch("catalog.json");if(!request.ok)throw Error("Catalog unavailable");
  catalog=await request.json();
  status.textContent="Interactive investigations · Nine chapters";
  for(const ch of catalog.chapters){const option=element("option","","Chapter "+ch.number+" — "+ch.name);option.value=String(ch.number);chapterSelect.append(option);}
  [chapterSelect,search,collection].forEach(x=>x.addEventListener("input",render));
  render();
 }catch(error){
  status.textContent="Interactive learning";count.textContent="Course content unavailable";
  notice.hidden=false;notice.textContent="Please open this page through the course website.";
 }
}
init();
