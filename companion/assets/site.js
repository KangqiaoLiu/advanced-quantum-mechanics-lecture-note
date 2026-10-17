"use strict";
const base = "https://github.com/KangqiaoLiu/advanced-quantum-mechanics-lecture-note/blob/main/";
const container = document.querySelector("#labs");
const chapterInput = document.querySelector("#chapter");
const searchInput = document.querySelector("#search");
const coreInput = document.querySelector("#core");
const message = document.querySelector("#message");
const count = document.querySelector("#count");
let catalog = null;
const element = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};
function card(lab) {
  const article = element("article", "lab");
  article.append(element("span", "id", lab.id + " · Chapter " + lab.chapter));
  article.append(element("h3", "", lab.title));
  article.append(element("p", "question", lab.question));
  article.append(element("p", "observable", "Explore: " + lab.observable));
  const chips = element("div", "chips");
  chips.append(element("span", "chip", lab.level + " · " + lab.minutes + " min"));
  if (lab.route === "core") chips.append(element("span", "chip route", "classroom route"));
  chips.append(element("span", "chip", lab.stage === "implemented" ? "working experiment" : (lab.stage === "prototype" ? "planned prototype" : "planned lab")));
  article.append(chips);
  const a = element("a", "", "View relevant lecture-note source ↗");
  a.href = base + lab.source;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  article.append(a);
  if (lab.stage === "implemented" && lab.page) {
    const launch = element("a", "launch", "Open interactive experiment ↗");
    launch.href = lab.page;
    article.append(document.createTextNode(" · "));
    article.append(launch);
  }
  return article;
}
function render() {
  if (!catalog) return;
  const term = searchInput.value.trim().toLocaleLowerCase();
  const chapter = chapterInput.value;
  const onlyCore = coreInput.checked;
  const labs = catalog.labs.filter(lab =>
    (chapter === "all" || lab.chapter === Number(chapter)) &&
    (!onlyCore || lab.route === "core") &&
    (!term || [lab.id,lab.title,lab.question,lab.observable].some(s=>s.toLocaleLowerCase().includes(term))));
  const fragment = document.createDocumentFragment();
  labs.forEach(lab => fragment.append(card(lab)));
  container.replaceChildren(fragment);
  count.textContent = labs.length + " of " + catalog.labs.length + " scientific questions shown · " + catalog.labs.filter(x=>x.stage==="implemented").length + " runnable experiments · " + catalog.chapters.length + " chapters";
  if (!labs.length) container.append(element("p", "minor", "No questions match. Try a broader concept."));
}
async function init() {
  try {
    const response = await fetch("./catalog.json");
    if (!response.ok) throw Error("Catalog file unavailable.");
    catalog = await response.json();
    const available = catalog.labs.filter(lab => lab.stage === "implemented").length;
    document.querySelector("#catalog-status").textContent = available
      ? available + " working experiments · " + (catalog.labs.length - available) + " further questions in development"
      : "Curriculum preview · Physics laboratories are being prepared";
    catalog.chapters.forEach(ch=>{
      const opt = document.createElement("option");
      opt.value = String(ch.number);
      opt.textContent = "Chapter " + ch.number + " — " + ch.name;
      chapterInput.append(opt);
    });
    [chapterInput,searchInput,coreInput].forEach(el=>el.addEventListener("input",render));
    render();
  } catch (err) {
    count.textContent = "Catalog could not be loaded.";
    message.hidden = false;
    message.textContent = "Serve the companion directory with: python3 -m http.server 8000 from the repository root. Then open http://localhost:8000/companion/ .";
  }
}
init();

