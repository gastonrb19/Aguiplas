import { ASSET } from "../data.js";
import { element, icon, defineElement } from "./dom.js";

class SiteBrand extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    const link = element("a", "brand");
    link.href = "#inicio";
    link.dataset.nav = "inicio";
    const logoBox = element("span", "brand__logo");
    const image = element("img");
    image.src = `${ASSET}logo-aguiplas.png`;
    image.alt = "Logo Aguiplas";
    logoBox.append(image);
    link.append(logoBox);
    if (!this.hasAttribute("compact")) {
      const text = element("span", "brand__text");
      text.append(element("strong", "", "AGUIPLAS"), element("small", "", "Polietileno & Economía Circular"));
      link.append(text);
    } else {
      link.append(element("strong", "", "AGUIPLAS"));
    }
    this.replaceChildren(link);
  }
}

class DesktopNavigation extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    const nav = element("nav", "desktop-nav");
    nav.setAttribute("aria-label", "Navegación principal");
    for (const [view, label] of [["inicio", "Inicio"], ["productos", "Productos"], ["servicios", "Servicios"], ["sobre-nosotros", "Sobre Nosotros"], ["contacto", "Contacto"]]) {
      const link = element("a", "nav-link", label);
      link.href = `#${view}`;
      link.dataset.nav = view;
      if (view === "productos") {
        const indicator = element("span", "nav-dropdown");
        indicator.append(icon("expand_more"));
        link.append(indicator);
        const item = element("div", "nav-item--dropdown");
        item.append(link);
        const submenu = element("div", "nav-submenu");
        for (const [key, text] of [["filtrado", "Producto Final Filtrado (Pellet)"], ["triturado", "Producto Final Triturado"], ["excedentes", "Scrap y Durezas Procesables"]]) {
          const sublink = element("a", "", text);
          sublink.href = `#productos-${key}`;
          sublink.dataset.productLink = key;
          submenu.append(sublink);
        }
        item.append(submenu);
        nav.append(item);
      } else {
        nav.append(link);
      }
    }
    this.replaceChildren(nav);
  }
}

class HeaderActions extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    const actions = element("div", "header-actions");
    const themeButton = element("button", "icon-button theme-toggle");
    themeButton.type = "button";
    themeButton.id = "theme-toggle-btn";
    themeButton.setAttribute("aria-label", "Cambiar tema claro u oscuro");
    themeButton.title = "Cambiar tema claro / oscuro";
    themeButton.append(icon("light_mode"), element("span", "", "Tema"));
    const whatsapp = element("a", "button button--whatsapp header-whatsapp");
    whatsapp.href = "https://wa.me/56997462988?text=Hola%20Aguiplas%2C%20deseo%20consultar%20por%20sus%20servicios%20de%20triturado%20y%20filtrado%20de%20polietileno.";
    whatsapp.target = "_blank";
    whatsapp.rel = "noopener noreferrer";
    whatsapp.append(icon("chat"), element("span", "", "WhatsApp"));
    const menuButton = element("button", "icon-button menu-toggle");
    menuButton.type = "button";
    menuButton.id = "drawer-open-btn";
    menuButton.setAttribute("aria-label", "Abrir menú de navegación");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-controls", "mobile-drawer");
    menuButton.append(icon("menu"));
    actions.append(themeButton, whatsapp, menuButton);
    this.replaceChildren(actions);
    themeButton.addEventListener("click", () => {
      const theme = document.documentElement.classList.contains("dark") ? "light" : "dark";
      document.dispatchEvent(new CustomEvent("theme-change", { detail: { theme } }));
    });
    menuButton.addEventListener("click", () => {
      const drawer = document.getElementById("mobile-drawer");
      if (drawer && !drawer.open) drawer.showModal();
      menuButton.setAttribute("aria-expanded", "true");
    });
  }
}

class MobileNavigation extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    const dialog = element("dialog", "mobile-drawer");
    dialog.id = "mobile-drawer";
    dialog.setAttribute("aria-label", "Menú de navegación");
    const content = element("div", "mobile-drawer__content");
    const top = element("div", "mobile-drawer__top");
    const brand = document.createElement("site-brand");
    brand.setAttribute("compact", "");
    const close = element("button", "icon-button");
    close.type = "button";
    close.setAttribute("aria-label", "Cerrar menú");
    close.append(icon("close"));
    top.append(brand, close);
    const nav = element("nav", "mobile-nav");
    nav.setAttribute("aria-label", "Menú móvil");
    for (const [view, label] of [["inicio", "Inicio"], ["productos", "Productos Resultantes"], ["servicios", "Servicios"], ["sobre-nosotros", "Sobre Nosotros"], ["contacto", "Contacto"]]) {
      const link = element("a", "mobile-nav__link", label);
      link.href = `#${view}`;
      link.dataset.nav = view;
      link.dataset.drawerLink = "";
      nav.append(link);
      if (view === "productos") {
        for (const [key, subLabel] of [["filtrado", "Producto Final Filtrado (Pellet)"], ["triturado", "Producto Final Triturado"], ["excedentes", "Scrap y Durezas Procesables"]]) {
          const sublink = element("a", "mobile-nav__sub-link", `· ${subLabel}`);
          sublink.href = `#productos-${key}`;
          sublink.dataset.productLink = key;
          sublink.dataset.drawerLink = "";
          nav.append(sublink);
        }
      }
    }
    const info = element("div", "mobile-drawer__info");
    info.append(element("strong", "", "Planta San Joaquín"));
    info.append(element("p", "", "El Pinar 205 Bodega 35, San Joaquín, RM"));
    info.append(element("p", "", "Tel: +56 9 9746 2988 · j.aguiplas@gmail.com"));
    const whatsapp = element("a", "button button--whatsapp");
    whatsapp.href = "https://wa.me/56997462988?text=Hola%20Aguiplas%2C%20quiero%20consultar%20por%20triturado%20y%20filtrado%20de%20polietileno.";
    whatsapp.target = "_blank";
    whatsapp.rel = "noopener noreferrer";
    whatsapp.append(icon("chat"), element("span", "", "WhatsApp (+56 9 9746 2988)"));
    info.append(whatsapp);
    content.append(top, nav, info);
    dialog.append(content);
    this.replaceChildren(dialog);
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => document.getElementById("drawer-open-btn")?.setAttribute("aria-expanded", "false"));
    dialog.querySelectorAll("[data-drawer-link]").forEach((link) => link.addEventListener("click", () => dialog.close()));
    window.addEventListener("storage", (event) => {
      if (event.key === "aguiplas-theme" && ["dark", "light"].includes(event.newValue)) {
        document.dispatchEvent(new CustomEvent("theme-change", { detail: { theme: event.newValue, persist: false } }));
      }
    });
  }
}

for (const [name, Component] of [["site-brand", SiteBrand], ["desktop-navigation", DesktopNavigation], ["header-actions", HeaderActions], ["mobile-navigation", MobileNavigation]]) {
  defineElement(name, Component);
}
