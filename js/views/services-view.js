import { ASSET, WA_BASE, serviceModes } from "../data.js";
import { defineElement, element, enableTabArrowNavigation, staticTemplate } from "../components/dom.js";

class ServicesView extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    this.replaceChildren(staticTemplate(`
      <page-hero eyebrow="Nuestros Servicios" heading="Servicios de Reciclaje y Transformación" image="guillotina-hidraulica.jpg" description="Conoce nuestros servicios de reciclaje: transforma los residuos de polietileno de tu empresa en nuevas oportunidades y sé parte de la economía circular."></page-hero>
      <div class="page-content wrap">
        <section class="panel service-selector">
          <div class="service-selector__heading"><div><p class="eyebrow">Soluciones Especializadas</p><h2>Servicios disponibles en planta</h2></div>
            <div class="tab-list service-tabs" role="tablist" aria-label="Servicios Aguiplas">
              <button type="button" role="tab" aria-controls="service-tab-panel" data-service-tab="filtrado" aria-selected="true">Filtrado PEAD / PEBD</button>
              <button type="button" role="tab" aria-controls="service-tab-panel" data-service-tab="triturado" aria-selected="false">Triturado de Scrap</button>
              <button type="button" role="tab" aria-controls="service-tab-panel" data-service-tab="durezas" aria-selected="false">Especialidad: Durezas</button>
              <button type="button" role="tab" aria-controls="service-tab-panel" data-service-tab="completo" aria-selected="false">Triturado + Filtrado Integral</button>
            </div>
          </div>
          <div class="service-selector__panel" id="service-tab-panel" role="tabpanel"><div><h3 id="service-title"></h3><p id="service-description"></p><div class="chip-row" id="service-chips"></div></div>
            <a class="button button--whatsapp" href="${WA_BASE}?text=${encodeURIComponent("Hola Aguiplas, quiero consultar presupuesto por sus servicios de filtrado y triturado.")}" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined" aria-hidden="true">chat</span>Solicitar Presupuesto</a>
          </div>
        </section>

        <div class="service-card-grid">
          <article class="panel service-card">
            <div class="service-card__meta"><span>Servicio 01</span><strong>PEAD y PEBD</strong></div>
            <h2>Filtrado</h2><p>El servicio de filtrado entrega un producto viable para nuestros clientes industriales, asegurando calidad y pureza en el pellet retornado.</p>
            <h3>Proceso en Planta</h3><div class="image-strip image-strip--three">
              <img src="${ASSET}hilos-filtrado-color.jpg" alt="Hilos de polietileno extruidos durante el filtrado" loading="lazy">
              <img src="${ASSET}extrusora-hilos-negro.jpg" alt="Extrusión y enfriamiento de hilos en tina" loading="lazy">
              <img src="${ASSET}hilos-filtrado-natural.jpg" alt="Filamentos blancos y grises en línea de filtrado" loading="lazy">
            </div>
            <h3>Producto Final Entregado (Pellet)</h3><div class="image-strip image-strip--three">
              <img src="${ASSET}pellet-color.jpg" alt="Pellet filtrado de color" loading="lazy">
              <img src="${ASSET}pellet-natural-gris.jpg" alt="Pellet filtrado natural y gris" loading="lazy">
              <img src="${ASSET}sacos-aguiplas-pallet.jpg" alt="Sacos Aguiplas listos para despacho" loading="lazy">
            </div>
          </article>
          <article class="panel service-card">
            <div class="service-card__meta"><span>Servicio 02</span><strong>Scrap y Film</strong></div>
            <h2>Triturado</h2><p>Integramos una nueva vida útil a material ya utilizado, reduciendo descartes productivos y excedentes de film o rígidos a granulometría homogénea.</p>
            <h3>Proceso en Planta</h3><div class="image-strip">
              <img src="${ASSET}hero-molino-cinta.jpg" alt="Cinta transportadora y molino Aguiplas" loading="lazy">
              <img src="${ASSET}scrap-film-colores-saco.jpg" alt="Scrap de film clasificado en maxisaco" loading="lazy">
              <img src="${ASSET}triturado-operacion.jpg" alt="Proceso de triturado en operación" loading="lazy">
              <img src="${ASSET}triturado-descarga-saco.jpg" alt="Descarga de material triturado hacia saco" loading="lazy">
            </div>
            <h3>Producto Final Entregado</h3><div class="image-strip image-strip--three">
              <img src="${ASSET}durezas-molido-blanco.jpg" alt="Material triturado blanco homogéneo" loading="lazy">
              <img src="${ASSET}triturado-material.jpg" alt="Polietileno triturado homogéneo" loading="lazy">
              <img src="${ASSET}sacos-aguiplas-pallet.jpg" alt="Sacos rotulados para entrega" loading="lazy">
            </div>
          </article>
        </div>

        <article class="panel specialty-card">
          <div class="specialty-card__heading"><div><p class="eyebrow">Especialidad Aguiplas · Servicio 03</p><h2>Procesamiento y Triturado de Durezas Industriales</h2><p>Contamos con guillotina hidráulica de gran formato y línea de molienda con detector de metales integrado para recuperar bidones PEAD, envases industriales, tortas/purgas y bobinas de film, devolviendo material molido limpio listo para reincorporar.</p></div>
            <a class="button button--whatsapp" href="${WA_BASE}?text=${encodeURIComponent("Hola Aguiplas, necesito cotizar el servicio especializado para durezas industriales.")}" target="_blank" rel="noopener noreferrer">Cotizar Servicio de Durezas</a></div>
          <div class="specialty-grid">
            ${[
              ["guillotina-hidraulica.jpg", "Guillotina hidráulica de corte"],
              ["durezas-bidones-blancos.jpg", "Bidones PEAD blancos"],
              ["durezas-bidones-mix.jpg", "Bidones blancos y color"],
              ["durezas-envases-pallet.jpg", "Envases rígidos en pallet"],
              ["durezas-maxisaco-rigidos.jpg", "Durezas rígidas en maxisaco"],
              ["durezas-bobinas-pallet.jpg", "Bobinas en pallet"],
              ["durezas-bobinas-grandes.jpg", "Rollos de gran formato"],
              ["durezas-molido-blanco.jpg", "Resultado: molido limpio"],
            ].map(([src, caption]) => `<figure><img src="${ASSET}${src}" alt="${caption}" loading="lazy"><figcaption>${caption}</figcaption></figure>`).join("")}
          </div>
        </article>

        <section class="panel video-panel"><div><p class="eyebrow">Video Operativo</p><h2>Proceso en Planta</h2><p>Observa las etapas clave para garantizar la calidad del producto solicitado, desde el ingreso de excedentes hasta la entrega final.</p><div class="chip-row"><span class="chip">Scrap PEAD y PEBD</span><span class="chip">Durezas PEAD y PEBD</span></div></div><div class="video-frame"><iframe title="Servicios Aguiplas - Video de proceso en planta" src="https://www.youtube-nocookie.com/embed/IiS38wp--3A" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div></section>
      </div>
    `));
    this.querySelectorAll("[data-service-tab]").forEach((button) => button.addEventListener("click", () => this.selectService(button.dataset.serviceTab)));
    enableTabArrowNavigation(this.querySelector(".service-tabs"), "[data-service-tab]");
    this.selectService("filtrado");
  }

  selectService(key) {
    const mode = serviceModes[key] || serviceModes.filtrado;
    this.querySelector("#service-title").textContent = mode.title;
    this.querySelector("#service-description").textContent = mode.description;
    const chips = this.querySelector("#service-chips");
    chips.replaceChildren(...mode.chips.map((text) => element("span", "chip", text)));
    this.querySelectorAll("[data-service-tab]").forEach((button) => {
      const active = button.dataset.serviceTab === key;
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
  }
}

defineElement("services-view", ServicesView);
