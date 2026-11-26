export const ASSET = "https://geston-docs-565420068098.s3.sa-east-1.amazonaws.com/fdb21611-00e8-48c1-91a4-d504f2097fc7/Documentaci%C3%B3n/img/";
export const WA_BASE = "https://wa.me/56997462988";

export const titles = {
  inicio: "Inicio | Aguiplas – Soluciones eficientes en triturado y filtrado de polietileno",
  productos: "Productos Resultantes | Aguiplas – PEAD y PEBD",
  servicios: "Nuestros Servicios | Aguiplas – Filtrado y Triturado",
  "sobre-nosotros": "Quiénes Somos | Aguiplas – 14 Años de Experiencia",
  contacto: "Contacto y Ubicación | Aguiplas San Joaquín",
};

export const products = {
  filtrado: {
    badge: "POST-FILTRADO",
    title: "Producto Final de Filtrado (Pellet)",
    description: "Producto viable y de alta calidad obtenido tras ejecutar nuestro servicio de filtrado continuo sobre excedentes productivos de polietileno. Disponible en tonos naturales, grises o de color según la materia prima ingresada por el cliente.",
    origin: "Polietileno de Alta Densidad (PEAD) y Baja Densidad (PEBD)",
    process: "Filtrado de polietileno, extrusión, remoción de impurezas y peletizado",
    delivery: "Pellet filtrado despachado en sacos blancos rotulados Aguiplas o maxisacas",
    quality: "Alta calidad y trazabilidad · Cumplimiento Ley REP 20.920",
    message: "Hola Aguiplas, quiero consultar por el servicio de filtrado de polietileno para obtener pellet resultante.",
    gallery: [
      { src: `${ASSET}pellet-color.jpg`, alt: "Pellet filtrado tono rojo y burdeo Aguiplas", caption: "Pellet color (filtrado)" },
      { src: `${ASSET}pellet-natural-gris.jpg`, alt: "Pellet filtrado tono natural y gris Aguiplas", caption: "Pellet natural / gris" },
      { src: `${ASSET}sacos-aguiplas-pallet.jpg`, alt: "Sacos rotulados Aguiplas apilados en pallet", caption: "Sacos rotulados Aguiplas" },
      { src: `${ASSET}extrusora-hilos-negro.jpg`, alt: "Extrusión y enfriamiento de hilos en planta", caption: "Proceso de extrusión" },
      { src: `${ASSET}hilos-filtrado-color.jpg`, alt: "Hilos extruidos durante el proceso de filtrado rojo", caption: "Proceso hilos color" },
      { src: `${ASSET}hilos-filtrado-natural.jpg`, alt: "Hilos extruidos blancos y grises en línea de filtrado", caption: "Proceso hilos natural" },
    ],
  },
  triturado: {
    badge: "POST-TRITURADO",
    title: "Producto Final de Triturado (Polietileno Molido)",
    description: "Material resultante de nuestro servicio de triturado de durezas y scrap de polietileno, pensado para integrar una nueva vida útil a plásticos que ya han sido utilizados y devolverlos limpios y homogéneos para su reincorporación.",
    origin: "Scrap y durezas rígidas de polietileno PEAD y PEBD",
    process: "Corte hidráulico previo (si aplica), detector de metales y molino industrial",
    delivery: "Material molido homogéneo entregado en sacos blancos rotulados Aguiplas",
    quality: "Reducción controlada y trazabilidad por lote en planta autorizada",
    message: "Hola Aguiplas, necesito cotizar el servicio de triturado de durezas o scrap de polietileno.",
    gallery: [
      { src: `${ASSET}durezas-molido-blanco.jpg`, alt: "Polietileno molido blanco homogéneo Aguiplas", caption: "Molido blanco limpio" },
      { src: `${ASSET}triturado-material.jpg`, alt: "Material triturado de polietileno Aguiplas", caption: "Material triturado" },
      { src: `${ASSET}sacos-aguiplas-pallet.jpg`, alt: "Sacos rotulados listos para entrega", caption: "Entrega en sacos" },
      { src: `${ASSET}hero-molino-cinta.jpg`, alt: "Cinta transportadora con detector de metales y molino", caption: "Línea de molino" },
      { src: `${ASSET}guillotina-hidraulica.jpg`, alt: "Guillotina hidráulica de corte previo para durezas", caption: "Guillotina de corte" },
      { src: `${ASSET}molino-industrial.jpg`, alt: "Equipo industrial de triturado Aguiplas", caption: "Molino industrial" },
    ],
  },
  excedentes: {
    badge: "MATERIA DE ORIGEN",
    title: "Scrap y Durezas de Polietileno que Procesamos",
    description: "Recibimos excedentes industriales de polietileno de alta y baja densidad, incluyendo bidones, envases rígidos, bobinas de film, recortes y tortas/purgas para devolverlos transformados.",
    origin: "Bidones PEAD, envases rígidos, bobinas de film, recortes troquelados y tortas",
    process: "Clasificación, corte con guillotina hidráulica, triturado de durezas y/o filtrado",
    delivery: "Retorno al cliente como material triturado limpio o pellet filtrado reutilizable",
    quality: "Gestión segura con Resolución Sanitaria SEREMI de Salud y Ley REP",
    message: "Hola Aguiplas, tengo excedentes de scrap o durezas de polietileno y quiero consultar por el servicio.",
    gallery: [
      { src: `${ASSET}durezas-bidones-blancos.jpg`, alt: "Bidones blancos PEAD palletizados", caption: "Bidones PEAD blancos" },
      { src: `${ASSET}durezas-bidones-mix.jpg`, alt: "Bidones blancos y azules recibidos en planta", caption: "Bidones blancos y color" },
      { src: `${ASSET}durezas-envases-pallet.jpg`, alt: "Envases rígidos apilados en pallet", caption: "Envases rígidos" },
      { src: `${ASSET}durezas-maxisaco-rigidos.jpg`, alt: "Durezas y envases rígidos de PEAD en maxisaco", caption: "Durezas en maxisaco" },
      { src: `${ASSET}durezas-bobinas-pallet.jpg`, alt: "Bobinas industriales de polietileno en pallet", caption: "Bobinas en pallet" },
      { src: `${ASSET}durezas-bobinas-grandes.jpg`, alt: "Rollos industriales de film de gran formato", caption: "Rollos gran formato" },
      { src: `${ASSET}bobinas-blancas-saco.jpg`, alt: "Rollos blancos amarrados en maxisaco listos para procesar", caption: "Rollos blancos en saco" },
      { src: `${ASSET}scrap-film-colores-saco.jpg`, alt: "Scrap de film verde y color clasificado", caption: "Scrap de film" },
      { src: `${ASSET}scrap-bolsas-colores.jpg`, alt: "Scrap de film y bolsas de colores PEAD y PEBD", caption: "Scrap bolsas colores" },
      { src: `${ASSET}recortes-troquelados.jpg`, alt: "Recortes troquelados de polietileno", caption: "Recortes troquelados" },
      { src: `${ASSET}torta-purga-natural.jpg`, alt: "Durezas de polietileno blanco y natural", caption: "Torta / purga natural" },
      { src: `${ASSET}torta-purga-color.jpg`, alt: "Durezas de polietileno de color para triturado", caption: "Torta / purga color" },
    ],
  },
};

export const serviceModes = {
  filtrado: {
    title: "Servicio de Filtrado de Polietileno (PEAD y PEBD)",
    description: "Nuestro servicio de filtrado entrega un producto viable y de alta calidad para nuestros clientes, removiendo contaminantes mediante extrusión continua para retornar pellet listo para producción.",
    chips: ["PEAD y PEBD", "Filtrado continuo", "Producto final en pellet", "Trazabilidad Ley REP"],
  },
  triturado: {
    title: "Servicio de Triturado de Scrap y Film",
    description: "Integramos una nueva vida útil a material que ya ha sido utilizado y excedentes de film o recortes de polietileno, reduciéndolos en planta a granulometría pareja lista para reutilizar.",
    chips: ["Scrap rígido y film", "Detector de metales", "Despacho en sacos", "Nueva vida útil"],
  },
  durezas: {
    title: "Especialidad: Corte Hidráulico y Triturado de Durezas",
    description: "Procesamos durezas pesadas y volumétricas —bidones PEAD, envases rígidos, tortas/purgas y bobinas industriales— combinando guillotina hidráulica y molienda controlada para retornar material limpio y uniforme.",
    chips: ["Guillotina hidráulica", "Bidones y envases PEAD", "Bobinas y rollos film", "Molido homogéneo"],
  },
  completo: {
    title: "Servicio Integral: Triturado + Filtrado en Planta",
    description: "Combinamos el corte y triturado previo de durezas o scrap voluminoso con el filtrado y peletizado final, valorizando de principio a fin las mermas de tu empresa.",
    chips: ["Proceso completo", "Retorno al cliente", "Resolución SEREMI", "14 años de experiencia"],
  },
};

export const processStages = [
  {
    name: "Recepción", subtitle: "Excedentes de Producción", title: "Recepción de Scrap y Durezas de Polietileno",
    description: "Recibimos scrap de polietileno PEAD y PEBD, film, bobinas y durezas productivas para iniciar el ciclo de valorización.",
    metric: "Trazabilidad Ley REP", chips: ["Scrap PEAD / PEBD", "Durezas de Polietileno", "Resolución SEREMI"],
  },
  {
    name: "Triturado", subtitle: "Nueva Vida Útil", title: "Triturado Mecánico de Durezas y Scrap",
    description: "Reducimos descartes rígidos y durezas a material molido homogéneo, listo para reincorporarse a nuevos procesos.",
    metric: "Molino Industrial", chips: ["Triturado de durezas", "Granulometría pareja", "Sacos rotulados"],
  },
  {
    name: "Filtrado", subtitle: "Alta Calidad", title: "Filtrado Continuo y Extrusión de Polietileno",
    description: "El filtrado continuo remueve impurezas y forma hilos uniformes para obtener pellet de alta calidad.",
    metric: "Alta Calidad B2B", chips: ["PEAD y PEBD", "Remoción de impurezas", "Hilos uniformes"],
  },
  {
    name: "Entrega", subtitle: "Economía Circular", title: "Entrega del Producto Resultante al Cliente",
    description: "Entregamos a tu empresa el pellet filtrado o el material triturado final para reutilizar en sus propios procesos.",
    metric: "Retorno al Cliente", chips: ["Entrega post-servicio", "Ley REP 20.920", "Socio a largo plazo"],
  },
];

export const plantGallery = [
  { src: `${ASSET}extrusora-hilos-negro.jpg`, alt: "Extrusión y filtrado continuo de hilos negros", label: "Proceso Filtrado", title: "Línea de Filtrado & Extrusión", detail: "El Pinar 205 Bodega 35 · San Joaquín, RM" },
  { src: `${ASSET}guillotina-hidraulica.jpg`, alt: "Guillotina hidráulica industrial para corte", label: "Corte de Durezas", title: "Guillotina y Triturado de Durezas", detail: "Bidones, envases rígidos, tortas y bobinas" },
  { src: `${ASSET}durezas-molido-blanco.jpg`, alt: "Material triturado homogéneo blanco", label: "Proceso Triturado", title: "Molido Homogéneo Post-Servicio", detail: "Nueva vida útil para descartes PEAD / PEBD" },
  { src: `${ASSET}scrap-film-colores-saco.jpg`, alt: "Scrap de film verde y polietileno recuperable", label: "Recepción Excedentes", title: "Clasificación de Scrap y Film", detail: "Recepción ordenada con trazabilidad Ley REP" },
  { src: `${ASSET}sacos-aguiplas-pallet.jpg`, alt: "Sacos blancos rotulados listos para despacho", label: "Producto Final", title: "Despacho Rotulado AGUIPLAS", detail: "Sacos identificados por cliente y material" },
];
