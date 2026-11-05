# 09 · Escaparate Interactivo de Zapatillas y Carrito

**Eventos, DOM y Métodos de Arrays · 40–50 minutos**

Crea la lógica interactiva del configurador de una tienda de zapatillas personalizadas y su carrito de compras. Esta actividad pone en práctica eventos de ratón/teclado (`click`, `mouseover`, `mouseout`, `input`), manipulación de estilos CSS mediante JavaScript y el uso de métodos iterativos de arrays (`push`, `filter`, `reduce`).

Abre `index.html` y completa las cuatro funciones señaladas en `js/script.js`. El HTML y los estilos CSS están preparados.

## Elementos de partida

En el archivo `js/script.js` dispones de las referencias del DOM y dos variables de estado:
* `modeloSeleccionado`: Objeto que almacena el modelo actual fijado por el usuario.
* `carrito`: Array global de objetos vacíos inicialmente.

## Comportamientos

1. **Filtro visual CSS (`click`):** al hacer clic en cualquiera de los botones de estilo, aplica el valor de su atributo `data-filtro` sobre la propiedad `imgPrincipal.style.filter`.
2. **Galería e inspección (`mouseover`, `mouseout`, `click`):**
   * **`mouseover`:** al pasar el ratón por encima de una miniatura, muestra su imagen en la vista principal (`imgPrincipal.src`).
   * **`mouseout`:** al retirar el ratón de las miniaturas, restaura en la vista principal la imagen almacenada en `modeloSeleccionado.imagenSrc`.
   * **`click`:** al hacer clic en una miniatura, fija permanentemente este modelo actualizando el objeto `modeloSeleccionado` (nombre, precio e imagen), la clase CSS `.activa` y el texto con el nombre y precio en pantalla.
3. **Grabado personalizado (`input`):** refleja en tiempo real lo escrito en el input dentro del elemento `#placa-personalizada`. Si el campo está vacío, restaura el texto `"TU TEXTO"`.
4. **Gestión de Carrito (Arrays):**
   * **Añadir:** al pulsar *Añadir al Carrito*, crea un objeto con un `id` único (`Date.now()`), el nombre del modelo, el texto del grabado actual y el precio convertido a número. Agrégalo al array `carrito` mediante `.push()`.
   * **Renderizar y Calcular Total:** crea una función que recorra el array `carrito` para renderizar el HTML del listado e incorpore un botón de eliminar. Usa el método `.reduce()` para calcular la suma de los precios y mostrarla en `#total-carrito`.
   * **Eliminar e Interacción:** al hacer clic en el botón de eliminar de un producto, usa `.filter()` para quitarlo del array por su `id`.
   * **Vaciar:** al pulsar el botón *Vaciar Carrito*, reasigna el array a `[]` y re-renderiza la pantalla.

## Comprueba tu actividad

Abre `index.html` en tu navegador y realiza las siguientes verificaciones:

| Acciones | Resultado esperado |
| --- | --- |
| Clic en filtro **Cyber** | La imagen principal cambia de color/saturación mediante un filtro CSS. |
| Pasar el ratón por la 2ª miniatura y salir | La imagen cambia a la miniatura mientras el ratón está encima y vuelve al modelo fijado al salir. |
| Hacer clic en la 3ª miniatura | El modelo fijado cambia a *"Pastel Street"* (110 €). Al salir el ratón, este se mantiene como modelo activo. |
| Escribir *"BART"* y pulsar **Añadir al Carrito** | Aparece una línea en el carrito con el modelo, el grabado `"BART"` y el total se actualiza a `110 €`. |
| Añadir 2 productos más y vaciar | El total se actualiza mediante `reduce()`. Al vaciar, la lista queda limpia y el total vuelve a `0 €`. |
