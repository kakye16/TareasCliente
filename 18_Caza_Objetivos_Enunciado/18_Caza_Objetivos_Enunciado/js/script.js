const tablero = document.querySelector('#tablero');
const objetivo = document.querySelector('#objetivo');
const botonIniciar = document.querySelector('#iniciar');
const textoPuntos = document.querySelector('#puntos');
const textoTiempo = document.querySelector('#tiempo');
const textoModo = document.querySelector('#modo');
const textoEstado = document.querySelector('#estado');
const textoVentana = document.querySelector('#ventana');

const DURACION = 20000;
const modos = {
  facil: { nombre: 'Fácil', intervalo: 1200 },
  dificil: { nombre: 'Difícil', intervalo: 700 }
};

// --- Variables de Estado del Juego ---
let modoActual = modos.facil;
let puntos = 0;
let tiempoRestante = DURACION;
let tiempoRestanteObjetivo = 0;

let tiempoFinPartida = 0;
let tiempoFinObjetivo = 0;

let timerPartida = null;
let timerObjetivo = null;
let timerPreparacion = null;
let timerIntervaloVisual = null;

let estadoJuego = 'inactivo'; // 'inactivo', 'preparando', 'jugando', 'pausado', 'finalizado'
let pasoPreparacionActual = 0;

// --- Movimiento del Objetivo ---
function moverObjetivo() {
  const anchoDisponible = Math.max(0, tablero.clientWidth - objetivo.offsetWidth);
  const altoDisponible = Math.max(0, tablero.clientHeight - objetivo.offsetHeight);
  objetivo.style.left = `${Math.floor(Math.random() * (anchoDisponible + 1))}px`;
  objetivo.style.top = `${Math.floor(Math.random() * (altoDisponible + 1))}px`;
}

// --- Configuración Inicial y UI ---
function actualizarVentana() {
  textoVentana.textContent = `Ventana: ${window.innerWidth} x ${window.innerHeight}`;
}

function inicializarModo() {
  const params = new URLSearchParams(window.location.search);
  const modoUrl = params.get('modo');
  if (modos[modoUrl]) {
    modoActual = modos[modoUrl];
  } else {
    modoActual = modos.facil;
  }
  textoModo.textContent = modoActual.nombre;
}

// Mantener el objetivo dentro del tablero al redimensionar
window.addEventListener('resize', () => {
  actualizarVentana();
  const anchoDisponible = Math.max(0, tablero.clientWidth - objetivo.offsetWidth);
  const altoDisponible = Math.max(0, tablero.clientHeight - objetivo.offsetHeight);

  let leftActual = parseInt(objetivo.style.left) || 0;
  let topActual = parseInt(objetivo.style.top) || 0;

  if (leftActual > anchoDisponible) objetivo.style.left = `${anchoDisponible}px`;
  if (topActual > altoDisponible) objetivo.style.top = `${altoDisponible}px`;
});

// Limpieza total de temporizadores
function limpiarTemporizadores() {
  clearTimeout(timerPartida);
  clearTimeout(timerObjetivo);
  clearTimeout(timerPreparacion);
  clearInterval(timerIntervaloVisual);
  timerPartida = null;
  timerObjetivo = null;
  timerPreparacion = null;
  timerIntervaloVisual = null;
}

// --- Actualización Visual en Tiempo Real del Reloj ---
function iniciarActualizacionVisual() {
  clearInterval(timerIntervaloVisual);
  timerIntervaloVisual = setInterval(() => {
    if (estadoJuego === 'jugando') {
      tiempoRestante = Math.max(0, tiempoFinPartida - Date.now());
      // Formato con un decimal para que luzca bien con tu HTML (<span id="tiempo">20.0</span>)
      textoTiempo.textContent = (tiempoRestante / 1000).toFixed(1);

      if (tiempoRestante <= 0) {
        clearInterval(timerIntervaloVisual);
      }
    }
  }, 100);
}

// --- Lógica del Objetivo ---
function programarCambioObjetivo(duracionMs) {
  clearTimeout(timerObjetivo);
  tiempoRestanteObjetivo = duracionMs;
  tiempoFinObjetivo = Date.now() + duracionMs;

  timerObjetivo = setTimeout(() => {
    moverObjetivo();
    programarCambioObjetivo(modoActual.intervalo);
  }, duracionMs);
}

// Clic al objetivo para sumar puntos
objetivo.addEventListener('click', (e) => {
  e.stopPropagation();
  if (estadoJuego !== 'jugando') return;

  puntos++;
  textoPuntos.textContent = puntos;
  moverObjetivo();
  programarCambioObjetivo(modoActual.intervalo);
});

// --- Cuenta Atrás de Partida ---
function programarFinPartida(duracionMs) {
  clearTimeout(timerPartida);
  tiempoRestante = duracionMs;
  tiempoFinPartida = Date.now() + duracionMs;

  timerPartida = setTimeout(() => {
    finalizarPartida();
  }, duracionMs);
}

function finalizarPartida() {
  limpiarTemporizadores();
  estadoJuego = 'finalizado';

  // Ocultar de nuevo el objetivo y deshabilitarlo
  objetivo.hidden = true;
  objetivo.disabled = true;

  textoEstado.textContent = '¡Partida terminada!';
  textoTiempo.textContent = '0.0';
  botonIniciar.textContent = 'Comenzar otra partida';
  botonIniciar.disabled = false;
}

// --- Preparación (3, 2, 1) ---
function iniciarPreparacion(duracionMs = 3000) {
  estadoJuego = 'preparando';
  botonIniciar.disabled = true;

  objetivo.hidden = true;
  objetivo.disabled = true;

  pasoPreparacionActual = Math.ceil(duracionMs / 1000);
  textoEstado.textContent = `Preparados: ${pasoPreparacionActual}`;

  timerPreparacion = setInterval(() => {
    pasoPreparacionActual--;
    if (pasoPreparacionActual > 0) {
      textoEstado.textContent = `Preparados: ${pasoPreparacionActual}`;
    } else {
      clearInterval(timerPreparacion);
      arrancarPartidaEfectiva();
    }
  }, 1000);
}

function arrancarPartidaEfectiva() {
  estadoJuego = 'jugando';
  textoEstado.textContent = '¡A jugar!';

  // Habilitar y mostrar el objetivo correctamente quitando el atributo hidden y disabled
  objetivo.hidden = false;
  objetivo.disabled = false;
  moverObjetivo();

  programarCambioObjetivo(modoActual.intervalo);
  programarFinPartida(DURACION);
  iniciarActualizacionVisual();
}

// --- Visibilidad de la Pestaña (Pausa Automática) ---
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (estadoJuego === 'jugando') {
      tiempoRestante = Math.max(0, tiempoFinPartida - Date.now());
      tiempoRestanteObjetivo = Math.max(0, tiempoFinObjetivo - Date.now());
      limpiarTemporizadores();

      estadoJuego = 'pausado';
      textoEstado.textContent = 'Juego pausado por cambio de pestaña';

      objetivo.hidden = true;
      objetivo.disabled = true;

      botonIniciar.textContent = 'Continuar';
      botonIniciar.disabled = false;
    } else if (estadoJuego === 'preparando') {
      limpiarTemporizadores();
      estadoJuego = 'inactivo';
      textoEstado.textContent = 'Inicio cancelado por cambio de pestaña';

      objetivo.hidden = true;
      objetivo.disabled = true;

      botonIniciar.textContent = 'Comenzar';
      botonIniciar.disabled = false;
    }
  }
});

// --- Botón de Inicio / Continuar ---
botonIniciar.addEventListener('click', () => {
  if (estadoJuego === 'inactivo' || estadoJuego === 'finalizado') {
    puntos = 0;
    textoPuntos.textContent = puntos;
    textoTiempo.textContent = `${DURACION / 1000}.0`;
    limpiarTemporizadores();
    iniciarPreparacion(3000);
  } else if (estadoJuego === 'pausado') {
    estadoJuego = 'jugando';
    textoEstado.textContent = '¡A jugar!';

    objetivo.hidden = false;
    objetivo.disabled = false;

    botonIniciar.disabled = true;
    botonIniciar.textContent = 'Partida en curso';

    programarCambioObjetivo(tiempoRestanteObjetivo);
    programarFinPartida(tiempoRestante);
    iniciarActualizacionVisual();
  }
});

// Inicialización de la interfaz al cargar
inicializarModo();
actualizarVentana();