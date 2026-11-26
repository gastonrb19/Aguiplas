// Cloudflare sirve primero los archivos estáticos del sitio.
// Este Worker solo se ejecuta cuando la URL no coincide con ningún archivo.
export default {
  async fetch(request) {
    const isPage = request.headers.get("Accept")?.includes("text/html");
    if ((request.method === "GET" || request.method === "HEAD") && isPage) {
      // 302 (temporal): si más adelante se crea una página en esa ruta, los navegadores no guardan la redirección.
      return Response.redirect(new URL("/", request.url).toString(), 302);
    }
    // Recursos faltantes (imágenes, scripts) siguen dando 404 para no ocultar errores reales.
    return new Response("No encontrado", { status: 404 });
  },
};
