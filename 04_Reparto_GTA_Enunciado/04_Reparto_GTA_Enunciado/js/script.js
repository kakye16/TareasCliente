// 1. Guarda los datos de la misión.
const titulo = document.getElementById('titulo')
const nombreMision = "Entrega en Los Santos"

let ingresos = 12000
let gatos = 2000
let numeroJugadores = 4

// 2. Define calcularReparto con un jugador por defecto.
function calcularReparto(ingresos, gastos, jugadores = 1) {
    return (ingresos - gastos) / jugadores
}
// 3. Llama a calcularReparto y guarda el resultado.
const beneficioPorJugador = calcularReparto(ingresos, gatos, numeroJugadores)
// 4. Actualiza el título y el estado.
titulo.textContent = "GTA · Entrega en Los Santos"

const estado = document.getElementById('estado')
estado.textContent = "Misión completada"

// 5. Define mostrarDato y úsala para añadir los tres datos al resumen.
function mostrarDato(etiqueta, valor) {
    const dato = document.createElement("li")
    dato.textContent = "{etiqueta}, {valor}"
}
// 6. Muestra el reparto por jugador y aplica la clase destacado.
