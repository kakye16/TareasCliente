// Completa los cinco comportamientos descritos en README.md.
// El HTML y las clases CSS ya están preparados.

const pantalla = document.getElementById("pantalla-mensaje");
const pantallaMarco = document.querySelector(".pantalla-marco");
const selectorAlerta = document.getElementById("selector-alerta");
const tituloEstado = document.getElementById("titulo-estado");
const checkboxes = document.querySelectorAll(".check-icono");
const fotoCamara = document.getElementById("foto-camara");
const botonFision = document.getElementById("boton-fision");

let mensaje = "";

let escribiendo = true;



document.addEventListener("keydown", function (evento) {

    if (escribiendo && evento.key === "Backspace") {
        evento.preventDefault();
        mensaje = mensaje.slice(0, -1);
        actualizarPantalla();
        return;
    }


    if (
        escribiendo &&
        evento.key.length === 1 &&
        !evento.ctrlKey &&
        !evento.altKey &&
        !evento.metaKey
    ) {
        mensaje += evento.key;
        actualizarPantalla();
    }
});


function actualizarPantalla() {
    let simbolos = "";


    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            simbolos += checkbox.value + " ";
        }
    });

    pantalla.textContent = simbolos + mensaje;
}


selectorAlerta.addEventListener("change", function () {
    tituloEstado.textContent = "ESTADO: " + selectorAlerta.value;

    escribiendo = false;
});


checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        actualizarPantalla();

        escribiendo = false;
    });
});


pantallaMarco.addEventListener("click", function () {
    escribiendo = true;
});


fotoCamara.addEventListener("mouseenter", function () {
    fotoCamara.classList.add("borroso");
});

fotoCamara.addEventListener("mouseleave", function () {
    fotoCamara.classList.remove("borroso");
});


botonFision.addEventListener("click", function () {

    if (botonFision.classList.contains("color-verde")) {

        botonFision.classList.remove("color-verde");
        botonFision.classList.add("color-amarillo");

    } else if (botonFision.classList.contains("color-amarillo")) {

        botonFision.classList.remove("color-amarillo");
        botonFision.classList.add("color-rojo");

    } else {

        botonFision.classList.remove("color-rojo");
        botonFision.classList.add("color-verde");
    }

    escribiendo = false;
});

