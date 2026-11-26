import { ASSET } from "../data.js";
import { element, defineElement } from "./dom.js";

class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    const footer = element("footer", "site-footer");
    const grid = element("div", "site-footer__grid wrap");
    const about = element("div", "site-footer__about");
    const logo = element("img");
    logo.src = `${ASSET}logo-aguiplas.png`;
    logo.alt = "Logo Aguiplas";
    const title = element("strong", "", "Aguiplas");
    about.append(logo, title, element("p", "", "14 años de experiencia en triturado de durezas y filtrado de polietileno PEAD y PEBD. Entregamos el producto recuperado tras nuestro servicio técnico."));
    grid.append(about);

    const columns = [
      ["Productos Resultantes", [["Producto Final Filtrado (Pellet)", "#productos-filtrado"], ["Producto Final Triturado", "#productos-triturado"], ["Scrap y Durezas Procesables", "#productos-excedentes"], ["Servicios y Video en Planta", "#servicios"]]],
      ["Corporativo", [["Inicio", "#inicio"], ["Quiénes Somos", "#sobre-nosotros"], ["Ley REP y SEREMI", "#sobre-nosotros"], ["Contacto y Ubicación", "#contacto"]]],
    ];
    for (const [heading, links] of columns) {
      const column = element("div", "site-footer__column");
      column.append(element("h2", "", heading));
      for (const [label, href] of links) {
        const link = element("a", "", label);
        link.href = href;
        column.append(link);
      }
      grid.append(column);
    }
    const contact = element("div", "site-footer__column");
    contact.append(element("h2", "", "Nuestros Medios"));
    contact.append(
      element("p", "", "El Pinar 205 Bodega 35, San Joaquín, Región Metropolitana."),
    );
    for (const [label, href] of [["Correo: j.aguiplas@gmail.com", "mailto:j.aguiplas@gmail.com"], ["WhatsApp: +56 9 9746 2988", "https://wa.me/56997462988"], ["Teléfono: +56 9 9746 2988", "tel:+56997462988"]]) {
      const link = element("a", "", label);
      link.href = href;
      if (href.startsWith("https:")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      contact.append(link);
    }
    grid.append(contact);
    const wave = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    wave.setAttribute("viewBox", "0 0 1440 48");
    wave.setAttribute("preserveAspectRatio", "none");
    wave.setAttribute("aria-hidden", "true");
    wave.classList.add("site-footer__wave");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M0 48C480 0 960 0 1440 48V48H0Z");
    wave.append(path);
    footer.append(wave, grid, element("div", "site-footer__copyright", "Aguiplas | © Todos los derechos reservados 2026"));
    this.replaceChildren(footer);
  }
}

defineElement("site-footer", SiteFooter);
