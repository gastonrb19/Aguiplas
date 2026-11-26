import { initRouter } from "./router.js";

function setTheme(theme, persist = true) {
  const dark = theme === "dark";
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.classList.toggle("light", !dark);
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) meta.content = dark ? "dark" : "light";
  const icon = document.querySelector("#theme-toggle-btn .material-symbols-outlined");
  if (icon) icon.textContent = dark ? "light_mode" : "dark_mode";
  if (persist) {
    try {
      localStorage.setItem("aguiplas-theme", theme);
    } catch (error) {
      console.warn("No se pudo guardar la preferencia de tema.", error);
    }
  }
}

let initialTheme = "dark";
try {
  if (localStorage.getItem("aguiplas-theme") === "light") initialTheme = "light";
} catch (error) {
  console.warn("No se pudo leer la preferencia de tema.", error);
}
setTheme(initialTheme, false);

document.addEventListener("theme-change", (event) => {
  setTheme(event.detail.theme, event.detail.persist !== false);
});

initRouter();
