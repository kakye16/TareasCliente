// Referencias a elementos del DOM
const btnIniciar = document.getElementById('btn-iniciar');
const btnDetener = document.getElementById('btn-detener');
const btnReiniciar = document.getElementById('btn-reiniciar');
const estadoJuego = document.getElementById('estado-juego');
const zonaResultados = document.getElementById('zona-resultados');

// Variables de estado de la ronda
let fechaInicio = null;
let fechaFin = null;

/**
 * Formatea un objeto Date al formato "horas:minutos:segundos" sin ceros a la izquierda
 */
function obtenerHoraFormateada(fecha) {
  const horas = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();
  return `${horas}:${minutos}:${segundos}`;
}

/**
 * Inicia la ronda guardando la hora exacta de comienzo
 */
function iniciarRonda() {
  fechaInicio = new Date();
  fechaFin = null;

  estadoJuego.textContent = 'Ronda en marcha';
  zonaResultados.innerHTML = '';

  btnIniciar.disabled = true;
  btnDetener.disabled = false;
}

/**
 * Detiene la ronda, calcula la duración exacta y muestra el veredicto
 */
function detenerRonda() {
  fechaFin = new Date();

  // Cálculo en segundos (incluyendo milisegundos)
  const tiempoRealSec = (fechaFin - fechaInicio) / 1000;
  const objetivo = 10;
  const diferenciaAbsoluta = Math.abs(tiempoRealSec - objetivo);

  // Determinación del veredicto antes del redondeo
  let veredicto = '';
  if (tiempoRealSec === objetivo) {
    veredicto = '¡Has acertado exactamente!';
  } else if (tiempoRealSec < objetivo) {
    veredicto = 'Te has adelantado al objetivo.';
  } else {
    veredicto = 'Te has pasado del objetivo.';
  }

  // Presentación formateada
  const horaInicioTexto = obtenerHoraFormateada(fechaInicio);
  const horaFinTexto = obtenerHoraFormateada(fechaFin);

  estadoJuego.textContent = '';
  zonaResultados.innerHTML = `
    <p><strong>Inicio:</strong> ${horaInicioTexto}</p>
    <p><strong>Fin:</strong> ${horaFinTexto}</p>
    <p><strong>Tiempo:</strong> ${tiempoRealSec.toFixed(2)} segundos</p>
    <p><strong>Diferencia:</strong> ${diferenciaAbsoluta.toFixed(2)} segundos</p>
    <p class="veredicto">${veredicto}</p>
  `;

  btnIniciar.disabled = false;
  btnDetener.disabled = true;
}

/**
 * Restablece el estado inicial de la aplicación
 */
function reiniciarRonda() {
  fechaInicio = null;
  fechaFin = null;

  estadoJuego.textContent = '';
  zonaResultados.innerHTML = '';

  btnIniciar.disabled = false;
  btnDetener.disabled = true;
}

// Vinculación de eventos
btnIniciar.addEventListener('click', iniciarRonda);
btnDetener.addEventListener('click', detenerRonda);
btnReiniciar.addEventListener('click', reiniciarRonda);
