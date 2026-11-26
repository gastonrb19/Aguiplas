import { products, WA_BASE } from "../data.js";
import { defineElement, element, enableTabArrowNavigation, staticTemplate } from "../components/dom.js";

class ProductsView extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    this.replaceChildren(staticTemplate(`
      <page-hero eyebrow="Resultados del Servicio en Planta" heading="Productos Resultantes y Excedentes" image="hero-molino-cinta.jpg" description="Conoce los productos finales que entregamos tras nuestros servicios de Filtrado y Triturado, además de los tipos de scrap y durezas de polietileno PEAD y PEBD que procesamos."></page-hero>
      <div class="page-content wrap">
        <aside class="notice"><span class="material-symbols-outlined" aria-hidden="true">info</span><div><h2>Modalidad exclusiva de servicio (sin venta directa)</h2><p><strong>Aguiplas no vende plástico a público ni terceros.</strong> Cada producto corresponde al resultado final entregado directamente al cliente después del servicio sobre sus excedentes de PEAD y PEBD.</p></div></aside>
        <div class="tab-list product-tabs" role="tablist" aria-label="Productos y excedentes Aguiplas">
          <button type="button" role="tab" aria-controls="product-panel" data-product-tab="filtrado" aria-selected="true">Producto Final Filtrado (Pellet)</button>
          <button type="button" role="tab" aria-controls="product-panel" data-product-tab="triturado" aria-selected="false">Producto Final Triturado</button>
          <button type="button" role="tab" aria-controls="product-panel" data-product-tab="excedentes" aria-selected="false">Scrap y Durezas Procesables</button>
        </div>
        <section class="product-panel panel" id="product-panel" role="tabpanel" aria-labelledby="product-heading">
          <div class="product-panel__main">
            <div class="product-panel__copy">
              <div class="product-badge-row"><span class="product-badge" id="product-badge"></span><span class="muted">Proporcionado tras el servicio</span></div>
              <h2 id="product-heading"></h2>
              <p id="product-description"></p>
              <dl class="product-details">
                <div><dt>Polímeros Trabajados</dt><dd id="product-origin"></dd></div>
                <div><dt>Servicio Asociado</dt><dd id="product-process"></dd></div>
                <div><dt>Formato de Entrega</dt><dd id="product-delivery"></dd></div>
                <div><dt>Estándar y Trazabilidad</dt><dd id="product-quality"></dd></div>
              </dl>
              <div class="button-row">
                <a class="button button--whatsapp" id="product-whatsapp" href="https://wa.me/56997462988" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined" aria-hidden="true">chat</span>Consultar Servicio por WhatsApp</a>
                <a class="button button--outline" href="#contacto" data-nav="contacto">Ir a Contacto <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>
              </div>
            </div>
            <figure class="product-main-image"><img id="product-image" alt="" loading="lazy" decoding="async"></figure>
          </div>
          <div class="product-gallery-section"><h3 id="product-gallery-title">Fotografías reales en planta</h3><div class="product-gallery" id="product-gallery"></div></div>
        </section>
        <aside class="cta-banner" style="--banner-image: url('${"https://geston-docs-565420068098.s3.sa-east-1.amazonaws.com/fdb21611-00e8-48c1-91a4-d504f2097fc7/Documentaci%C3%B3n/img/sacos-aguiplas-pallet.jpg"}')">
          <div><p class="eyebrow">Retorno en Sacos · PEAD / PEBD</p><h2>¿Tienes excedentes de polietileno o durezas en planta?</h2><p>Evaluamos tu material y coordinamos el servicio de triturado o filtrado en San Joaquín para devolverte el pellet o molido listo para reincorporar.</p></div>
          <div class="button-row"><a class="button button--whatsapp" href="${WA_BASE}?text=${encodeURIComponent("Hola Aguiplas, necesito cotizar el servicio de procesamiento de polietileno.")}" target="_blank" rel="noopener noreferrer">Consultar Servicio</a><a class="button button--glass" href="#servicios" data-nav="servicios">Ver Procesos <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a></div>
        </aside>
      </div>
    `));
    this.selectedKey = "filtrado";
    this.querySelectorAll("[data-product-tab]").forEach((button) => button.addEventListener("click", () => this.selectProduct(button.dataset.productTab)));
    enableTabArrowNavigation(this.querySelector(".product-tabs"), "[data-product-tab]");
    this.selectProduct("filtrado");
  }

  selectProduct(key) {
    const data = products[key] || products.filtrado;
    this.selectedKey = products[key] ? key : "filtrado";
    this.querySelector("#product-badge").textContent = data.badge;
    this.querySelector("#product-heading").textContent = data.title;
    this.querySelector("#product-description").textContent = data.description;
    this.querySelector("#product-origin").textContent = data.origin;
    this.querySelector("#product-process").textContent = data.process;
    this.querySelector("#product-delivery").textContent = data.delivery;
    this.querySelector("#product-quality").textContent = data.quality;
    this.querySelector("#product-whatsapp").href = `${WA_BASE}?text=${encodeURIComponent(data.message)}`;
    this.querySelector("#product-gallery-title").textContent = "Fotografías reales en planta (haz clic para ampliar)";
    const mainImage = this.querySelector("#product-image");
    const gallery = this.querySelector("#product-gallery");
    const selectImage = (image, activeIndex) => {
      mainImage.src = image.src;
      mainImage.alt = image.alt;
      gallery.querySelectorAll("button").forEach((button, index) => {
        button.classList.toggle("is-selected", index === activeIndex);
      });
    };
    gallery.replaceChildren();
    data.gallery.forEach((image, index) => {
      const button = element("button", `thumbnail${index === 0 ? " is-selected" : ""}`);
      button.type = "button";
      button.setAttribute("aria-label", `Ampliar imagen: ${image.caption}`);
      const thumbnail = element("img");
      thumbnail.loading = "lazy";
      thumbnail.decoding = "async";
      thumbnail.src = image.src;
      thumbnail.alt = image.alt;
      button.append(thumbnail, element("span", "", image.caption));
      button.addEventListener("click", () => selectImage(image, index));
      gallery.append(button);
    });
    selectImage(data.gallery[0], 0);
    this.querySelectorAll("[data-product-tab]").forEach((button) => {
      const active = button.dataset.productTab === this.selectedKey;
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
  }
}

defineElement("products-view", ProductsView);
