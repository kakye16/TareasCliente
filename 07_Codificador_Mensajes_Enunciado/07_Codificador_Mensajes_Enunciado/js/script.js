// Completa el comportamiento descrito en README.md.
// El HTML y el CSS están preparados. Programa también el cambio del candado.

const mensaje = document.getElementById("mensaje");
const clave = document.getElementById("clave");
const boton = document.getElementById("codificar");
const resultado = document.getElementById("resultado");
const estado = document.getElementById("estado");
const candado = document.getElementById("candado");

boton.addEventListener("click", function () {


    const texto = mensaje.value.trim().toUpperCase();

    if (texto === "") {
        alert("El mensaje no puede estar vacío.");
        return;
    }

    const valorClave = clave.value.trim();

    if (valorClave === "") {
        alert("La clave es obligatoria.");
        return;
    }

    if (!/^\d+$/.test(valorClave)) {
        alert("La clave debe ser un número entero.");
        return;
    }

    const numeroClave = Number(valorClave);

    if (numeroClave < 1 || numeroClave > 99) {
        alert("La clave debe estar entre 1 y 99.");
        return;
    }

    const palabras = texto.split(/\s+/);


    const palabrasCodificadas = palabras.map(function (palabra) {
        return palabra
            .replaceAll("A", "4")
            .replaceAll("E", "3")
            .replaceAll("I", "1")
            .replaceAll("O", "0")
            .replaceAll("U", "9");
    });

    const palabrasInvertidas = palabrasCodificadas.reverse();
    const mensajeCodificado = palabrasInvertidas.join("-");

    const codigo = numeroClave * palabras.length;

    const codigoFormateado = String(codigo).padStart(3, "0");

    const resultadoFinal = mensajeCodificado + "#" + codigoFormateado;

    resultado.textContent = resultadoFinal;
    estado.textContent = "Codificado";
    candado.textContent = "🔒";
});
