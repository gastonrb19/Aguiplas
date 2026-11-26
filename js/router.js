import { titles } from "./data.js";
import "./components/site-header.js";
import "./components/site-footer.js";
import "./components/page-hero.js";
import "./views/home-view.js";
import "./views/products-view.js";
import "./views/services-view.js";
import "./views/about-view.js";
import "./views/contact-view.js";

const viewTags = {
  inicio: "home-view",
  productos: "products-view",
  servicios: "services-view",
  "sobre-nosotros": "about-view",
  contacto: "contact-view",
};

function parseHash() {
  const raw = (window.location.hash || "#inicio").slice(1).toLowerCase();
  if (raw.startsWith("productos-")) return { view: "productos", product: raw.slice("productos-".length) };
  return { view: Object.hasOwn(viewTags, raw) ? raw : "inicio", product: null };
}

function applyRoute() {
  const { view, product } = parseHash();
  const outlet = document.getElementById("app");
  for (const [key, tag] of Object.entries(viewTags)) {
    let node = outlet.querySelector(tag);
    if (!node) {
      node = document.createElement(tag);
      outlet.append(node);
    }
    node.hidden = key !== view;
  }
  document.title = titles[view];
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === view) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (product) {
    const productView = outlet.querySelector("products-view");
    if (productView?.selectProduct) productView.selectProduct(product);
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}

export function navigate(hash) {
  if (window.location.hash === hash) applyRoute();
  else window.location.hash = hash;
}

export function initRouter() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-nav], a[data-product-link]");
    if (!link) return;
    event.preventDefault();
    if (link.dataset.productLink) navigate(`#productos-${link.dataset.productLink}`);
    else navigate(`#${link.dataset.nav}`);
  });
  window.addEventListener("hashchange", applyRoute);
  applyRoute();
}
