// "use strict"; activa el modo estricto de JavaScript, que ayuda a detectar
// algunos errores que de otra forma podrían pasar inadvertidos.
// Ej: nombre = "Link"; // Error: no hemos declarado la variable.
// Es una buena práctica pero no necesaria
// Cargar los JS con <script type="module"> ya hace esta línea
"use strict";

// 1. Selecciona el título y cambia su texto.
const titulo = document.getElementById("titulo")
titulo.textContent("Inventario de Link")
// 2. Crea un li con el nombre del objeto y la clase "objeto".
const lista = document.createElement("li")
lista.textContent = "Espada de madera"
// 3. Selecciona el inventario y añade el li.
const inventario = document.getElementById("inventario")
lista.className("class", "objeto")
inventario.append(lista)