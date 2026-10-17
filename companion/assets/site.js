"use strict";
const base = "https://github.com/KangqiaoLiu/advanced-quantum-mechanics-lecture-note/blob/main/";
const container = document.querySelector("#labs");
const chapterInput = document.querySelector("#chapter");
const searchInput = document.querySelector("#search");
const trackInput = document.querySelector("#track");
const message = document.querySelector("#message");
const count = document.querySelector("#count");
let catalog = null;

const element = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};
function external(target, textLabel) {
  const a = element("a", "", textLabel);
  a.href = target;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}
function card(lab) {
  const article = element("article", "lab");
  const kind = lab.editorial_track;
  if (kind === "reading") article.classList.add("lab-reading");
  if (kind === "reference") article.classList.add("lab-reference");
  article.append(element("span", "id", lab.id + " · Chapter " + lab.chapter));
  article.append(element("h3", "", lab.title));
  article.append(element("p", "question", lab.question));
  if (kind !== "reading") article.append(element("p", "observable", "Explore: " + lab.observable));

  const chips = element("div", "chips");
  chips.append(element("span", "chip", kind === "selected" ? "Selected investigation" : kind === "reference" ? "Foundational reference" : "Guided reading"));
  if (kind !== "reading") chips.append(element("span", "chip", lab.stage === "implemented" ? "Interactive now" : "Selected · in development"));
  article.append(chips);

  const links = element("div", "lab-links");
  if (lab.stage === "implemented" && lab.page) {
    const launch = element("a", "launch", "Explore interactive lab ↗");
    launch.href = lab.page;
    links.append(launch);
  }
  if (kind === "reading") {
    const link = element("a", "launch", "Read the guided extension ↗");
    link.href = "reading.html#" + encodeURIComponent(lab.id);
    links.append(link);
    links.append(external(lab.reading_resource.url, "External resource ↗"));
  } else if (lab.stage !== "implemented") {
    links.append(element("span", "pending-copy", "Full independent-study lab in preparation"));
  }
  links.append(external(base + lab.source, "Lecture-note derivation ↗"));
  article.append(links);
  return article;
}
function render() {
  if (!catalog) return;
  const term = searchInput.value.trim().toLocaleLowerCase();
  const chapter = chapterInput.value;
  const track = trackInput.value;
  const labs = catalog.labs.filter(lab =>
    (chapter === "all" || lab.chapter === Number(chapter)) &&
    (track === "all" ||
      (track === "working" ? lab.stage === "implemented" : lab.editorial_track === track)) &&
    (!term || [lab.id, lab.title, lab.question, lab.observable, lab.reading_resource?.task || ""]
      .some(s => s.toLocaleLowerCase().includes(term))));
  const fragment = document.createDocumentFragment();
  labs.forEach(lab => fragment.append(card(lab)));
  container.replaceChildren(fragment);
  count.textContent = labs.length + " matching topics · " +
    labs.filter(x => x.stage === "implemented").length + " live experiments · " +
    (catalog.curation.selected_to_build || 0) + " selected future experiments in the full plan";
  if (!labs.length) container.append(element("p", "minor", "No matching question. Try another chapter or collection."));
}
async function init() {
  try {
    const response = await fetch("./catalog.json");
    if (!response.ok) throw Error("Catalog file unavailable.");
    catalog = await response.json();
    const c = catalog.curation;
    document.querySelector("#catalog-status").textContent =
      c.selected_live + " selected interactive labs · " + c.selected_to_build +
      " selected future topics · " + c.reference_live + " additional reference labs";
    catalog.chapters.forEach(ch => {
      const opt = document.createElement("option");
      opt.value = String(ch.number);
      opt.textContent = "Chapter " + ch.number + " — " + ch.name;
      chapterInput.append(opt);
    });
    [chapterInput, searchInput, trackInput].forEach(el => el.addEventListener("input", render));
    render();
  } catch (err) {
    count.textContent = "Catalog unavailable.";
    message.hidden = false;
    message.textContent = "Serve from the repository root with: python3 -m http.server 8000. Then visit /companion/ .";
  }
}
init();
