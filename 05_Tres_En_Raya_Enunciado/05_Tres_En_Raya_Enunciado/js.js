const celdas = document.querySelectorAll(".celda");

let click = "X";

celdas.forEach(celda => {
    celda.addEventListener('click', () => {
        celda.textContent = click;
        if (click === "X") {
            click = "O"
        } else {
            click = "X"
        }
    });
});