import { ASSET } from "../data.js";
import { defineElement, staticTemplate } from "../components/dom.js";

class AboutView extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    this.replaceChildren(staticTemplate(`
      <page-hero eyebrow="Quiénes Somos" heading="Sobre Nosotros · Aguiplas" image="sacos-aguiplas-pallet.jpg" description="Empresa chilena dedicada al reciclaje y valorización de plásticos, con 14 años de experiencia en el rubro."></page-hero>
      <div class="page-content wrap">
        <section class="about-intro">
          <div class="about-copy"><p class="eyebrow">Nuestra Empresa</p><h2>Socio estratégico de largo plazo para la industria nacional</h2>
            <p>Somos <strong>Aguiplas</strong>, una empresa chilena con <strong>14 años de experiencia</strong> en reciclaje y valorización de plásticos. Brindamos soluciones especializadas en el triturado de durezas y filtrado de excedentes productivos de polietileno PEAD y PEBD.</p>
            <p>Promovemos la economía circular y la sostenibilidad ambiental y productiva de Chile. Nuestros procesos se rigen por altos estándares de calidad, excelencia y trazabilidad, entregando directamente el producto recuperado tras cada servicio realizado.</p>
            <a class="button button--primary" href="#contacto" data-nav="contacto">Contactar a Planta San Joaquín <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>
          </div>
          <div class="stats-grid">
            <article class="panel stat-card"><strong>14 Años</strong><span>Experiencia</span><p>Trayectoria comprobada aportando al reciclaje industrial en Chile.</p></article>
            <article class="panel stat-card"><strong>PEAD / PEBD</strong><span>Especialización</span><p>Triturado de durezas y filtrado de scrap de polietileno.</p></article>
            <article class="panel stat-card"><strong>Ley REP</strong><span>Ley N° 20.920</span><p>Trazabilidad para Responsabilidad Extendida del Productor.</p></article>
            <article class="panel stat-card"><strong>SEREMI</strong><span>Operación Regulada</span><p>Resolución Sanitaria vigente otorgada por SEREMI de Salud.</p></article>
          </div>
        </section>
        <section class="certification-panel">
          <div><p class="eyebrow">Somos Confiables</p><h2>Marco Regulatorio y Certificación</h2></div>
          <article class="certification-card panel">
            <img src="${ASSET}sello-ley-rep.png" alt="Sello Ley REP 20.920 Aguiplas" loading="lazy">
            <div><h3>Comprometidos con la Ley REP</h3><p>Facilitamos el cumplimiento de la Ley 20.920 de Responsabilidad Extendida del Productor, clave para el fomento del reciclaje y la economía circular en Chile.</p></div>
          </article>
          <article class="certification-card panel">
            <img src="${ASSET}sello-seremi.png" alt="Sello Resolución Sanitaria SEREMI de Salud Aguiplas" loading="lazy">
            <div><h3>Operación Regulada y Segura</h3><p>Contamos con Resolución Sanitaria vigente, otorgada por la SEREMI de Salud, que certifica que nuestras operaciones cumplen los requisitos de higiene y seguridad ambiental.</p></div>
          </article>
        </section>
      </div>
    `));
  }
}

defineElement("about-view", AboutView);
