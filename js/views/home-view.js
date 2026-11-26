import { ASSET, processStages, plantGallery } from "../data.js";
import { defineElement, element, enableTabArrowNavigation, staticTemplate } from "../components/dom.js";

const stageIcons = ["forklift", "precision_manufacturing", "filter_alt", "autorenew"];

class HomeView extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    this.replaceChildren(staticTemplate(`
      <section class="home-hero">
        <img class="home-hero__slide is-visible" src="${ASSET}hero-molino-cinta.jpg" alt="" aria-hidden="true" referrerpolicy="no-referrer" loading="eager" fetchpriority="high">
        <img class="home-hero__slide" src="${ASSET}hero-extrusora-fondo.jpg" alt="" aria-hidden="true" referrerpolicy="no-referrer" loading="eager">
        <div class="home-hero__veil"></div>
        <div class="home-hero__content wrap">
          <div class="home-hero__copy">
            <p class="experience-pill"><span class="status-dot"></span>14 Años de Experiencia · Reciclaje Industrial Chile</p>
            <h1>Transformamos tus residuos plásticos en <span>materia prima confiable para tu empresa.</span></h1>
            <p>Triturado de durezas y filtrado de PEAD y PEBD con procesos confiables. Ofrecemos soluciones seguras para gestionar excedentes de producción, <strong>proporcionando el material procesado tras nuestro servicio</strong> para ayudar a tu empresa a reutilizar sus propios materiales e impulsar la economía circular.</p>
            <div class="button-row">
              <a class="button button--whatsapp" href="#productos" data-nav="productos">Ver Productos Resultantes <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>
              <a class="button button--glass" href="#servicios" data-nav="servicios">Nuestros Servicios</a>
            </div>
          </div>
          <div class="hero-facts">
            <article class="hero-fact"><span>Polietileno</span><strong>PEAD · PEBD</strong><small>Scrap y Durezas</small></article>
            <article class="hero-fact"><span>Normativa</span><strong>Ley REP</strong><small>SEREMI de Salud RM</small></article>
            <article class="hero-fact hero-fact--wide"><span>Modelo de Servicio</span><strong>No vendemos plástico: procesamos tus mermas y entregamos el producto final resultante</strong></article>
          </div>
        </div>
        <svg class="hero-wave" aria-hidden="true" viewBox="0 0 1440 56" preserveAspectRatio="none"><path d="M0 56 1440 0v56z"/></svg>
      </section>

      <section class="category-grid wrap" aria-label="Accesos a productos y servicios">
        <a class="category-card" href="#productos-filtrado" data-product-link="filtrado"><img src="https://aguiplas.cl/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-10-at-14.51.59-1.jpeg" alt="Pellet resultante del filtrado" referrerpolicy="no-referrer"><span class="category-card__label"><strong>FILTRADO</strong><small>Pellet Final PEAD/PEBD</small></span></a>
        <a class="category-card" href="#productos-triturado" data-product-link="triturado"><img src="${ASSET}durezas-molido-blanco.jpg" alt="Material triturado de polietileno blanco"><span class="category-card__label"><strong>TRITURADO</strong><small>Material Molido PE</small></span></a>
        <a class="category-card" href="#productos-excedentes" data-product-link="excedentes"><img src="${ASSET}durezas-bidones-blancos.jpg" alt="Bidones y durezas de polietileno en pallet"><span class="category-card__label"><strong>DUREZAS</strong><small>Bidones, Bobinas y Scrap</small></span></a>
        <a class="category-card" href="#servicios" data-nav="servicios"><img src="${ASSET}guillotina-hidraulica.jpg" alt="Guillotina hidráulica industrial"><span class="category-card__label"><strong>SERVICIOS</strong><small>Corte, Molino & Filtrado</small></span></a>
      </section>

      <section class="home-content wrap">
        <div class="story-card panel">
          <div class="panel-heading">
            <span class="eyebrow"><span class="status-dot"></span>Ciclo Técnico Circular</span>
            <div class="story-controls"><span id="step-indicator">ETAPA 1/4 · 25%</span><button class="round-button" id="cycle-toggle" type="button" aria-label="Pausar el ciclo"><span class="material-symbols-outlined" aria-hidden="true">pause</span></button></div>
          </div>
          <div class="step-tabs" role="tablist" aria-label="Etapas del ciclo circular">
            ${processStages.map((stage, index) => `<button type="button" role="tab" class="step-tab${index === 0 ? " is-active" : ""}" aria-selected="${index === 0}" data-step="${index}"><span class="step-tab__top"><span class="step-tab__num">0${index + 1}</span><span class="material-symbols-outlined" aria-hidden="true">${stageIcons[index]}</span></span><strong>${stage.name}</strong><i></i></button>`).join("")}
          </div>
          <div class="process-diagram" role="img" aria-label="Diagrama animado del ciclo: scrap y durezas, triturado, filtrado y producto final">
            <div class="process-diagram__pattern" aria-hidden="true"></div>
            <div class="process-diagram__canvas">
              <svg aria-hidden="true" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M30 60H290" stroke="var(--svg-track)" stroke-dasharray="4 4" stroke-linecap="round" stroke-width="3"/>
                <rect class="beam-flow" id="energy-beam" width="55" height="4" x="30" y="58" rx="2" fill="#52b788"/>

                <g id="svg-step-0" class="diagram-step">
                  <rect x="25" y="32" width="50" height="56" rx="6" fill="var(--svg-node-bg)" stroke="#006c48" stroke-width="2.2"/>
                  <path d="M33 46 44 38 57 42 67 47 62 70 38 68Z" fill="#0077b6" fill-opacity=".25" stroke="#38bdf8" stroke-width="1.5"/>
                  <circle cx="50" cy="55" r="8" fill="#2d6a4f" fill-opacity=".25"/>
                  <text x="50" y="102" fill="var(--svg-label-fill)" font-family="Plus Jakarta Sans, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle">SCRAP Y DUREZAS</text>
                  <rect class="pellet-float-1" x="42" y="47" width="5" height="5" rx="1" fill="#52b788"/>
                  <rect class="pellet-float-2" x="54" y="52" width="6" height="4" rx="1" fill="#38bdf8"/>
                </g>
                <path d="M75 60H105" stroke="#2d6a4f" stroke-linecap="round" stroke-width="2.5"/>

                <g id="svg-step-1" class="diagram-step">
                  <circle cx="130" cy="60" r="26" fill="var(--svg-node-bg)" stroke="#006c48" stroke-width="2.2"/>
                  <path d="M130 40v40M110 60h40M116 46l28 28m0-28-28 28" stroke="#52b788" stroke-linecap="round" stroke-width="1.6"/>
                  <circle cx="130" cy="60" r="7" fill="#92f7c3" stroke="#006c48" stroke-width="1.5"/>
                  <text x="130" y="102" fill="var(--svg-label-fill)" font-family="Plus Jakarta Sans, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle">TRITURADO</text>
                </g>
                <path d="M156 60h30" stroke="var(--svg-track)" stroke-linecap="round" stroke-width="2.5"/>

                <g id="svg-step-2" class="diagram-step">
                  <polygon points="192,36 238,36 226,84 204,84" fill="var(--svg-node-bg)" stroke="#006c48" stroke-width="2.2"/>
                  <path d="M200 52h30M203 62h24M206 72h18" stroke="#38bdf8" stroke-dasharray="2 2" stroke-width="1.2"/>
                  <text x="215" y="102" fill="var(--svg-label-fill)" font-family="Plus Jakarta Sans, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle">FILTRADO</text>
                </g>
                <path d="M238 60h27" stroke="var(--svg-track)" stroke-linecap="round" stroke-width="2.5"/>

                <g id="svg-step-3" class="diagram-step">
                  <rect x="265" y="36" width="46" height="48" rx="8" fill="var(--svg-node-bg)" stroke="#006c48" stroke-width="2.2"/>
                  <ellipse class="pellet-float-1" cx="280" cy="52" rx="4" ry="3.5" fill="#52b788"/>
                  <ellipse class="pellet-float-2" cx="295" cy="50" rx="3.5" ry="3" fill="#92f7c3"/>
                  <ellipse class="pellet-float-3" cx="288" cy="64" rx="4.5" ry="3.5" fill="#2d6a4f"/>
                  <ellipse cx="277" cy="70" rx="3" ry="2.5" fill="#38bdf8"/>
                  <text x="288" y="102" fill="var(--svg-label-fill)" font-family="Plus Jakarta Sans, sans-serif" font-size="8.5" font-weight="700" text-anchor="middle">PRODUCTO FINAL</text>
                </g>
              </svg>
              <span class="process-metric" id="step-metric">Scrap &amp; Durezas PEAD/PEBD</span>
            </div>
          </div>
          <div class="stage-narrative">
            <div class="stage-meta"><span id="stage-badge">Paso 01 / Recepción</span><span id="stage-subtitle">Excedentes de Producción</span><strong id="stage-metric">Trazabilidad Ley REP</strong></div>
            <h2 id="stage-title"></h2><p id="stage-description"></p><div class="chip-row" id="stage-chips"></div>
          </div>
        </div>

        <div class="plant-gallery panel">
          <div class="panel-heading"><span class="eyebrow">Galería Real en Planta</span><div class="gallery-controls"><button class="round-button" type="button" data-gallery-prev aria-label="Ver foto anterior"><span class="material-symbols-outlined" aria-hidden="true">chevron_left</span></button><button class="round-button" type="button" data-gallery-next aria-label="Ver foto siguiente"><span class="material-symbols-outlined" aria-hidden="true">chevron_right</span></button></div></div>
          <div class="plant-gallery__scroller" id="plant-gallery"></div>
          <div class="plant-gallery__footer"><div class="gallery-dots" id="gallery-dots"></div><a href="#contacto" data-nav="contacto">Solicitar presupuesto <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a></div>
        </div>
      </section>

      <section class="trust-band">
        <img class="trust-band__image" src="https://aguiplas.cl/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-17-at-14.12.13.jpeg" alt="" aria-hidden="true" referrerpolicy="no-referrer" loading="lazy">
        <div class="trust-band__veil" aria-hidden="true"></div>
        <div class="wrap">
          <p class="eyebrow">Somos Confiables</p>
          <h2>Altos estándares de calidad, excelencia y trazabilidad en Chile</h2>
          <div class="trust-grid">
            <article><span class="material-symbols-outlined">history</span><strong>14 Años de Experiencia</strong><p>Socio estratégico de largo plazo para la industria</p></article>
            <article><span class="material-symbols-outlined">autorenew</span><strong>Servicio con Retorno</strong><p>Proporcionamos el producto posterior al servicio</p></article>
            <article><span class="material-symbols-outlined">filter_alt</span><strong>Filtrado y Triturado</strong><p>Especialistas en scrap y durezas PEAD y PEBD</p></article>
            <article><span class="material-symbols-outlined">qr_code_2</span><strong>Compromiso Ley REP</strong><p>Facilitamos cumplimiento de la Ley 20.920</p></article>
            <article><span class="material-symbols-outlined">health_and_safety</span><strong>Resolución Sanitaria</strong><p>Autorización vigente de SEREMI de Salud RM</p></article>
          </div>
        </div>
      </section>
    `));
    this.renderStage(0);
    this.renderGallery();
    this.bindCycle();
    enableTabArrowNavigation(this.querySelector(".step-tabs"), "[data-step]");
    this.bindGallery();
    this.bindHeroSlides();
  }

  renderStage(index) {
    const stage = processStages[index];
    this.querySelector("#step-indicator").textContent = `ETAPA ${index + 1}/4 · ${(index + 1) * 25}%`;
    this.querySelector("#stage-badge").textContent = `Paso 0${index + 1} / ${stage.name}`;
    this.querySelector("#stage-subtitle").textContent = stage.subtitle;
    this.querySelector("#stage-metric").textContent = stage.metric;
    this.querySelector("#step-metric").textContent = stage.name === "Recepción" ? "Scrap & Durezas PEAD/PEBD" : stage.metric;
    this.querySelector("#stage-title").textContent = stage.title;
    this.querySelector("#stage-description").textContent = stage.description;
    const chips = this.querySelector("#stage-chips");
    chips.replaceChildren(...stage.chips.map((text) => element("span", "chip", text)));
    this.querySelectorAll(".step-tab").forEach((tab, tabIndex) => {
      const active = tabIndex === index;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.querySelector("i").style.width = tabIndex < index ? "100%" : active ? "100%" : "0";
    });
    for (let stepIndex = 0; stepIndex < processStages.length; stepIndex += 1) {
      const node = this.querySelector(`#svg-step-${stepIndex}`);
      node.style.transformOrigin = "center center";
      if (stepIndex === index) {
        node.style.opacity = "1";
        node.style.transform = "scale(1.05)";
      } else if (stepIndex < index) {
        node.style.opacity = ".85";
        node.style.transform = "scale(1)";
      } else {
        node.style.opacity = ".6";
        node.style.transform = "scale(.96)";
      }
    }
    this.querySelector("#energy-beam").setAttribute("x", String(30 + index * 68));
  }

  renderGallery() {
    const scroller = this.querySelector("#plant-gallery");
    this.galleryItems = plantGallery.map((item, index) => {
      const card = element("article", "plant-slide");
      const image = element("img");
      image.src = item.src;
      image.alt = item.alt;
      image.loading = "lazy";
      const overlay = element("div", "plant-slide__overlay");
      const top = element("div", "plant-slide__top");
      top.append(element("span", "", item.label), element("small", "", `${index + 1} / ${plantGallery.length}`));
      overlay.append(top, element("div", "plant-slide__text"));
      overlay.lastElementChild.append(element("h3", "", item.title), element("p", "", item.detail));
      card.append(image, overlay);
      scroller.append(card);
      return card;
    });
    const dots = this.querySelector("#gallery-dots");
    plantGallery.forEach((_, index) => {
      const button = element("button", index === 0 ? "is-active" : "");
      button.type = "button";
      button.setAttribute("aria-label", `Diapositiva ${index + 1}`);
      button.addEventListener("click", () => this.goToSlide(index));
      dots.append(button);
    });
  }

  bindCycle() {
    const tabs = [...this.querySelectorAll(".step-tab")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let active = 0;
    let timer = null;
    let playing = !reducedMotion;
    const toggle = this.querySelector("#cycle-toggle");
    const setPlaying = (next) => {
      playing = next && !reducedMotion;
      toggle.querySelector("span").textContent = playing ? "pause" : "play_arrow";
      toggle.setAttribute("aria-label", playing ? "Pausar el ciclo" : "Reproducir el ciclo");
      window.clearInterval(timer);
      if (playing && !reducedMotion) timer = window.setInterval(() => {
        active = (active + 1) % processStages.length;
        this.renderStage(active);
      }, 4200);
    };
    tabs.forEach((tab) => tab.addEventListener("click", () => {
      active = Number(tab.dataset.step);
      this.renderStage(active);
      if (playing) setPlaying(true);
    }));
    toggle.addEventListener("click", () => setPlaying(!playing));
    setPlaying(playing);
  }

  goToSlide(index) {
    const items = this.galleryItems || [];
    if (!items.length) return;
    const target = Math.max(0, Math.min(items.length - 1, index));
    items[target].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    this.querySelectorAll("#gallery-dots button").forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === target));
  }

  bindGallery() {
    this.querySelector("[data-gallery-prev]").addEventListener("click", () => this.goToSlide(this.currentSlide - 1));
    this.querySelector("[data-gallery-next]").addEventListener("click", () => this.goToSlide(this.currentSlide + 1));
    this.querySelector("#plant-gallery").addEventListener("scroll", (event) => {
      const scroller = event.currentTarget;
      const index = Math.round(scroller.scrollLeft / scroller.clientWidth);
      if (Number.isFinite(index)) {
        this.currentSlide = index;
        this.querySelectorAll("#gallery-dots button").forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
      }
    }, { passive: true });
    this.currentSlide = 0;
  }

  bindHeroSlides() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const slides = [...this.querySelectorAll(".home-hero__slide")];
    let active = 0;
    window.setInterval(() => {
      active = (active + 1) % slides.length;
      slides.forEach((slide, index) => slide.classList.toggle("is-visible", index === active));
    }, 4200);
  }
}

defineElement("home-view", HomeView);
