import { defineElement, element } from "./dom.js";
import "./header-parts.js";

class SiteHeader extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    const header = element("header", "site-header");
    const bar = element("div", "site-header__bar wrap");
    bar.append(document.createElement("site-brand"));
    bar.append(document.createElement("desktop-navigation"));
    bar.append(document.createElement("header-actions"));
    header.append(bar, document.createElement("mobile-navigation"));
    this.replaceChildren(header);
  }
}

defineElement("site-header", SiteHeader);
