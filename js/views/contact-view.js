import { defineElement, staticTemplate } from "../components/dom.js";

class ContactView extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    this.replaceChildren(staticTemplate(`
      <page-hero eyebrow="Contacto Directo" heading="Contacto y Nuestra Ubicación" image="durezas-molido-blanco.jpg" description="Para consultas sobre presupuestos o más información referente a nuestros servicios de triturado y filtrado, no dude en contactarnos."></page-hero>
      <div class="contact-layout wrap">
        <section class="panel contact-form-panel">
          <div class="contact-form-heading"><p class="eyebrow">Presupuesto de Servicio</p><h2>Conversemos sobre tu proyecto</h2><p>Completa tus datos y envía tu consulta directamente por WhatsApp o por correo a <strong>j.aguiplas@gmail.com</strong>.</p></div>
          <form id="contact-form" novalidate>
            <div class="form-grid">
              <label class="field"><span>Nombre y Apellidos <b>*</b></span><input class="form-input" name="name" type="text" autocomplete="name" required minlength="2" maxlength="100" placeholder="Ej. Carolina Pérez"><small class="field-error">Ingresa tu nombre (mínimo 2 caracteres).</small></label>
              <label class="field"><span>Correo electrónico <b>*</b></span><input class="form-input" name="email" type="email" autocomplete="email" required placeholder="nombre@empresa.cl"><small class="field-error">Ingresa un correo electrónico válido.</small></label>
            </div>
            <div class="form-grid">
              <label class="field"><span>Empresa (opcional)</span><input class="form-input" name="company" type="text" autocomplete="organization" maxlength="100" placeholder="Ej. Envases del Sur SpA"></label>
              <label class="field"><span>Teléfono de contacto (opcional)</span><input class="form-input" name="phone" type="tel" autocomplete="tel" maxlength="30" placeholder="+56 9 ..."></label>
            </div>
            <fieldset class="service-fieldset"><legend>Servicio a Consultar</legend>
              <label><input type="radio" name="serviceType" value="Servicio de Filtrado (PEAD/PEBD)" checked><span>Filtrado</span></label>
              <label><input type="radio" name="serviceType" value="Servicio de Triturado"><span>Triturado</span></label>
              <label><input type="radio" name="serviceType" value="Triturado + Filtrado Integral"><span>Integral</span></label>
              <label><input type="radio" name="serviceType" value="Evaluación de Scrap y Durezas"><span>Evaluación</span></label>
            </fieldset>
            <label class="field"><span class="field-label-row">Comentarios y detalle de material <b>*</b><small id="comments-counter">0 / 600</small></span><textarea class="form-input" name="comments" required minlength="10" maxlength="600" rows="5" placeholder="Indícanos si requieres filtrado o triturado, si se trata de scrap o durezas de PEAD/PEBD y volumen estimado..."></textarea><small class="field-error">Describe brevemente tu consulta (mínimo 10 caracteres).</small></label>
            <div class="form-actions"><button class="button button--whatsapp" type="submit" data-channel="whatsapp"><span class="material-symbols-outlined" aria-hidden="true">chat</span>Enviar por WhatsApp</button><button class="button button--primary" type="button" id="send-mail"><span class="material-symbols-outlined" aria-hidden="true">mail</span>Enviar a j.aguiplas@gmail.com</button></div>
            <p id="contact-feedback" class="form-feedback" role="status" aria-live="polite" hidden></p>
          </form>
        </section>
        <aside class="contact-details">
          <section class="contact-info panel">
            <div class="contact-info__heading"><strong>Planta Aguiplas · San Joaquín</strong><span>RM Santiago</span></div>
            <a class="contact-method" href="https://wa.me/56997462988" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined" aria-hidden="true">chat</span><span><small>WhatsApp</small><strong>+56 9 9746 2988</strong></span></a>
            <a class="contact-method" href="tel:+56997462988"><span class="material-symbols-outlined" aria-hidden="true">call</span><span><small>Teléfono Planta</small><strong>+56 9 9746 2988</strong></span></a>
            <a class="contact-method" href="mailto:j.aguiplas@gmail.com"><span class="material-symbols-outlined" aria-hidden="true">mail</span><span><small>Correo Electrónico</small><strong>j.aguiplas@gmail.com</strong></span></a>
            <div class="contact-method"><span class="material-symbols-outlined" aria-hidden="true">location_on</span><span><small>Nuestra Ubicación</small><strong>El Pinar 205 Bodega 35, San Joaquín</strong><small>Región Metropolitana, Santiago</small></span></div>
            <div class="map-frame"><iframe title="Mapa de ubicación Aguiplas en San Joaquín" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.3785865835607!2d-70.6252578!3d-33.491526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dbc0d0dcd5e3%3A0xcb44d95283b9ffa0!2sReciclaje%20Juan%20Carlos%20Aguilar%20E.I.R.L!5e0!3m2!1ses!2scl!4v1765682305839!5m2!1ses!2scl" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=-33.491526,-70.6252578" target="_blank" rel="noopener noreferrer">Abrir ubicación en Google Maps <span class="material-symbols-outlined" aria-hidden="true">open_in_new</span></a>
          </section>
        </aside>
      </div>
    `));
    this.bindForm();
  }

  bindForm() {
    const form = this.querySelector("#contact-form");
    const comments = form.elements.comments;
    const counter = this.querySelector("#comments-counter");
    const feedback = this.querySelector("#contact-feedback");
    const mailButton = this.querySelector("#send-mail");
    const syncField = (field) => {
      if (!field.matches(".form-input")) return;
      if (field.name === "name") field.setCustomValidity(field.value.trim().length >= 2 ? "" : "Ingresa tu nombre (mínimo 2 caracteres).");
      if (field.name === "comments") field.setCustomValidity(field.value.trim().length >= 10 ? "" : "Describe brevemente tu consulta (mínimo 10 caracteres).");
      const valid = field.checkValidity();
      field.setAttribute("aria-invalid", String(!valid));
      field.closest(".field").classList.toggle("is-invalid", !valid);
    };
    form.addEventListener("input", (event) => {
      if (event.target === comments) counter.textContent = `${comments.value.length} / 600`;
      if (event.target.matches(".form-input") && event.target.dataset.touched) syncField(event.target);
    });
    form.addEventListener("blur", (event) => {
      if (!event.target.matches(".form-input")) return;
      event.target.dataset.touched = "true";
      syncField(event.target);
    }, true);

    const payload = () => {
      const fields = [...form.querySelectorAll(".form-input")];
      fields.forEach((field) => {
        field.dataset.touched = "true";
        syncField(field);
      });
      if (!form.checkValidity()) {
        form.reportValidity();
        return null;
      }
      const data = new FormData(form);
      const name = String(data.get("name")).trim();
      const email = String(data.get("email")).trim();
      const company = String(data.get("company") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const service = String(data.get("serviceType")).trim();
      const detail = String(data.get("comments")).trim();
      return {
        name,
        service,
        text: [
          "Hola Aguiplas, envío consulta desde el sitio web:",
          `• Nombre: ${name}`,
          `• Correo: ${email}`,
          company && `• Empresa: ${company}`,
          phone && `• Teléfono: ${phone}`,
          `• Servicio: ${service}`,
          `• Detalle: ${detail}`,
        ].filter(Boolean).join("\n"),
      };
    };
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = payload();
      if (!data) return;
      const url = `https://wa.me/56997462988?text=${encodeURIComponent(data.text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      feedback.textContent = "Abriendo WhatsApp con tu consulta prellenada para +56 9 9746 2988.";
      feedback.hidden = false;
    });
    mailButton.addEventListener("click", () => {
      const data = payload();
      if (!data) return;
      const subject = `Consulta Aguiplas - ${data.service} (${data.name})`;
      window.location.href = `mailto:j.aguiplas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(data.text)}`;
      feedback.textContent = "Abriendo tu cliente de correo hacia j.aguiplas@gmail.com con los datos listos.";
      feedback.hidden = false;
    });
  }
}

defineElement("contact-view", ContactView);
