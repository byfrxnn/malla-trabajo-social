// script.js

const ramos = [
  { nombre: "Taller de desarrollo socio-personal", requisitos: [] },
  { nombre: "Fundamentos del Trabajo Social", requisitos: [] },
  { nombre: "Procesos psicosociales I", requisitos: [] },
  { nombre: "Antropología sociocultural", requisitos: [] },
  { nombre: "Historia social contemporánea", requisitos: [] },
  { nombre: "Fundamentos epistemológicos de las ciencias sociales", requisitos: [] },
  { nombre: "Taller de habilidades profesionales", requisitos: ["Taller de desarrollo socio-personal"] },
  { nombre: "Estadística social", requisitos: [] },
  { nombre: "Procesos psicosociales II", requisitos: ["Procesos psicosociales I"] },
  { nombre: "Ética profesional del Trabajo Social", requisitos: [] },
  { nombre: "Estado y Sociedad", requisitos: [] },
  { nombre: "Teorías sociales", requisitos: ["Fundamentos epistemológicos de las ciencias sociales"] },
  { nombre: "Teoría y método del Trabajo Social", requisitos: ["Fundamentos del Trabajo Social"] },
  { nombre: "Taller de aproximación a la realidad social", requisitos: ["Taller de habilidades profesionales"] },
  { nombre: "Metodología de investigación social I", requisitos: ["Estadística social"] },
  { nombre: "Economía Social", requisitos: [] },
  { nombre: "Epistemología del Trabajo Social", requisitos: ["Teorías sociales"] },
  { nombre: "Teoría y método del Trabajo Social II", requisitos: ["Teoría y método del Trabajo Social"] },
  { nombre: "Estructura social y desigualdad social", requisitos: ["Economía Social"] },
  { nombre: "Metodología de investigación social II", requisitos: ["Metodología de investigación social I", "Teorías sociales"] },
  { nombre: "Contextos jurídicos para la intervención social", requisitos: [] },
  { nombre: "Taller de pedagogía social", requisitos: ["Taller de aproximación a la realidad social"] },
  { nombre: "Intervención social", requisitos: ["Teoría y método del Trabajo Social II"] },
  { nombre: "Planificación social", requisitos: [] },
  { nombre: "Redes sociales e intersectorialidad", requisitos: ["Estructura social y desigualdad social"] },
  { nombre: "Interculturalidad y colectivos sociales", requisitos: [] },
  { nombre: "Políticas públicas", requisitos: ["Teorías sociales"] },
  { nombre: "Práctica Integrada", requisitos: [
    "Intervención social", "Planificación social", "Redes sociales e intersectorialidad",
    "Interculturalidad y colectivos sociales", "Políticas públicas"
  ] },
  { nombre: "Taller integrado de investigación social", requisitos: ["Metodología de investigación social I", "Metodología de investigación social II"] },
  { nombre: "Práctica integrada II", requisitos: ["Práctica Integrada", "Taller integrado de investigación social", "Análisis de la cuestión social"] },
  { nombre: "Geografía social", requisitos: [] },
  { nombre: "Políticas sociales y gestión social", requisitos: ["Planificación social", "Políticas públicas"] },
  { nombre: "Análisis de la cuestión social", requisitos: ["Intervención social"] },
  { nombre: "Derechos humanos", requisitos: [] },
  { nombre: "Cambio social y organización social", requisitos: ["Políticas sociales y gestión social"] },
  { nombre: "Electivo de análisis regional I", requisitos: [] },
  { nombre: "Electivo de análisis regional II", requisitos: ["Electivo de análisis regional I", "Cambio social y organización social"] },
  { nombre: "Seminario de investigación social I", requisitos: ["Cambio social y organización social", "Proyectos sociales I"] },
  { nombre: "Proyectos sociales I", requisitos: ["Taller integrado de investigación social"] },
  { nombre: "Desafíos de la actuación profesional de Trabajo Social", requisitos: [] },
  { nombre: "Proyectos sociales II", requisitos: ["Proyectos sociales I"] },
  { nombre: "Seminario de investigación social II", requisitos: ["Seminario de investigación social I"] },
  { nombre: "Trabajo Social y mundo laboral", requisitos: [] },
  { nombre: "Taller de título I", requisitos: ["Proyectos sociales II", "Seminario de investigación social II", "Trabajo Social y mundo laboral"] },
  { nombre: "Práctica Profesional I", requisitos: ["Proyectos sociales II", "Seminario de investigación social II", "Trabajo Social y mundo laboral"] },
  { nombre: "Taller de título II", requisitos: ["Taller de título I", "Práctica Profesional I"] },
  { nombre: "Práctica profesional II", requisitos: ["Taller de título I", "Práctica Profesional I"] },
];

const aprobados = new Set();

function render() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  ramos.forEach(ramo => {
    const desbloqueado = ramo.requisitos.every(req => aprobados.has(req));
    const div = document.createElement("div");
    div.className = "ramo";
    if (!desbloqueado) div.classList.add("bloqueado");
    if (aprobados.has(ramo.nombre)) div.classList.add("aprobado");

    div.innerHTML = `<h4>${ramo.nombre}</h4><p>${ramo.requisitos.length ? "Requiere: " + ramo.requisitos.join(", ") : ""}</p>`;

    if (desbloqueado) {
      div.onclick = () => {
        if (!aprobados.has(ramo.nombre)) {
          aprobados.add(ramo.nombre);
        } else {
          aprobados.delete(ramo.nombre);
        }
        render();
      };
    }

    contenedor.appendChild(div);
  });
}

render();
