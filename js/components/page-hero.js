import { ASSET } from "../data.js";
import { element, defineElement } from "./dom.js";

class PageHero extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    const section = element("section", "page-hero");
    const imageName = this.getAttribute("image");
    if (imageName) {
      const image = element("img", "page-hero__image");
      image.loading = "lazy";
      image.decoding = "async";
      image.src = imageName.startsWith("http") ? imageName : `${ASSET}${imageName}`;
      image.alt = "";
      image.setAttribute("aria-hidden", "true");
      section.append(image);
    }
    section.append(element("div", "page-hero__veil"));
    const content = element("div", "page-hero__content wrap");
    content.append(element("p", "eyebrow", this.getAttribute("eyebrow") || ""));
    const heading = element("h1", "", this.getAttribute("heading") || "");
    content.append(heading);
    content.append(element("p", "page-hero__description", this.getAttribute("description") || ""));
    section.append(content);
    const wave = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    wave.setAttribute("viewBox", "0 0 1440 48");
    wave.setAttribute("preserveAspectRatio", "none");
    wave.setAttribute("aria-hidden", "true");
    wave.classList.add("page-hero__wave");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M0,0 C480,48 960,48 1440,0 L1440,48 L0,48 Z");
    wave.append(path);
    section.append(wave);
    this.replaceChildren(section);
  }
}

defineElement("page-hero", PageHero);
