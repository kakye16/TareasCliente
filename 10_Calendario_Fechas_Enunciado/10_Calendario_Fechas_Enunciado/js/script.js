// Los meses de estos datos están escritos como en un calendario: 1 a 12.
const torneos = [
  { nombre: "Mario Kart", anio: 2026, mes: 9, dia: 26 },
  { nombre: "Valorant", anio: 2026, mes: 9, dia: 27 },
  { nombre: "Tekken", anio: 2026, mes: 10, dia: 5 }
];

const diasDeRetraso = 3;
const fechaReferencia = new Date(2026, 8, 30);



function formatearFecha(fecha) {
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
}



function obtenerEstado(fecha, referencia) {

  const tiempoFecha = fecha.getTime();
  const tiempoReferencia = referencia.getTime();

  if (tiempoFecha < tiempoReferencia) {
    return "Finalizado";
  } else if (tiempoFecha === tiempoReferencia) {
    return "Se celebra hoy";
  } else {
    return "Pendiente";
  }
}



const pReferencia = document.getElementById("referencia");
if (pReferencia) {
  pReferencia.textContent = `Fecha de referencia: ${formatearFecha(fechaReferencia)}`;
}


const lista = document.getElementById("torneos");

for (const torneo of torneos) {

  const nuevaFecha = new Date(torneo.anio, torneo.mes - 1, torneo.dia);
  nuevaFecha.setDate(nuevaFecha.getDate() + diasDeRetraso);



  const fechaFormateada = formatearFecha(nuevaFecha);
  const estadoTorneo = obtenerEstado(nuevaFecha, fechaReferencia);


  const fila = document.createElement("li");
  const titulo = document.createElement("h2");
  titulo.textContent = torneo.nombre;
  const fecha = document.createElement("p");
  fecha.textContent = `Nueva fecha: ${fechaFormateada}`;
  const estado = document.createElement("p");
  estado.className = "estado";
  estado.textContent = `Estado: ${estadoTorneo}`;

  fila.appendChild(titulo);
  fila.appendChild(fecha);
  fila.appendChild(estado);
  lista.appendChild(fila);
}
