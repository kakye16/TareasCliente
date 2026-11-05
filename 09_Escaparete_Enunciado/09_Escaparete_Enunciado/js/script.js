// === REGISTRO DE ELEMENTOS DEL DOM ===
const imgPrincipal = document.getElementById('imagen-principal');
const placaTexto = document.getElementById('placa-personalizada');
const miniaturas = document.querySelectorAll('.miniatura');
const botonesColor = document.querySelectorAll('.btn-color');
const campoTexto = document.getElementById('campo-texto');

const nombreModeloEl = document.getElementById('nombre-modelo');
const precioModeloEl = document.getElementById('precio-modelo');
const btnAgregarCarrito = document.getElementById('btn-agregar-carrito');

const listaCarritoEl = document.getElementById('lista-carrito');
const totalCarritoEl = document.getElementById('total-carrito');
const btnVaciarCarrito = document.getElementById('btn-vaciar-carrito');

// Estado de la aplicación
let modeloSeleccionado = {
  nombre: "Runner Retro",
  precio: 120,
  imagenSrc: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80"
};

// Array global de trabajo para almacenar el carrito
let carrito = [];

// =========================================================================
// COMPORTAMIENTOS A IMPLEMENTAR
// =========================================================================

// 1. Selector de estilo/filtro (click)
// Recorre 'botonesColor' y asigna evento click.
// Modifica el estilo 'filter' de 'imgPrincipal' según data-filtro del botón.
function inicializarFiltros() {
  // TU CÓDIGO AQUÍ
}

// 2. Vista previa y selección de modelos (mouseover, mouseout, click)
// - mouseover: muestra temporalmente el src de la miniatura en 'imgPrincipal'.
// - mouseout: restaura en 'imgPrincipal' el src guardado en 'modeloSeleccionado.imagenSrc'.
// - click: actualiza 'modeloSeleccionado' con el nombre (data-nombre), precio (data-precio)
//   y la imagen actual. Actualiza la clase '.activa' y las etiquetas en pantalla.
function inicializarGaleria() {
  // TU CÓDIGO AQUÍ
}

// 3. Grabado personalizado (input)
// Escucha el evento 'input' en 'campoTexto'. Actualiza el contenido de 'placaTexto'.
// Si está vacío, debe mostrar "TU TEXTO".
function inicializarGrabado() {
  // TU CÓDIGO AQUÍ
}

// 4. Gestión del Carrito con Arrays (push, filter, reduce)
// - Añadir elemento: Crea un objeto con id (Date.now()), nombre, grabado y precio. Usa push().
// - Renderizar carrito: Recorre el array 'carrito' para generar las <li> dentro de 'listaCarritoEl'.
// - Calcular total: Usa reduce() sobre 'carrito' para calcular el precio total acumulado.
// - Eliminar item: Usa filter() para eliminar un elemento por id.
// - Vaciar carrito: Asigna [] al array 'carrito' y re-renderiza.
function inicializarCarrito() {
  // TU CÓDIGO AQUÍ
}

// Inicialización general
function iniciarApp() {
  inicializarFiltros();
  inicializarGaleria();
  inicializarGrabado();
  inicializarCarrito();
}

iniciarApp();
