# 04 · Reparto de ganancias en GTA

**Temas 1, 2 y 3: introducción, DOM y funciones · 20–25 minutos**

Tras una misión de GTA, el equipo necesita calcular cuánto dinero recibe cada jugador después de descontar los gastos. Los importes son datos inventados para este ejercicio.

Completa únicamente `js/script.js`. Conserva el HTML y el CSS. El resultado debe aparecer al cargar la página.

1. Guarda el nombre de la misión (`Entrega en Los Santos`), los ingresos (`12000`), los gastos (`2000`) y el número de jugadores (`4`) en variables. Los importes y el número de jugadores deben ser números.
2. Crea una función llamada `calcularReparto` que reciba ingresos, gastos y jugadores. El número de jugadores debe valer `1` por defecto. La función debe devolver el resultado de restar los gastos a los ingresos y dividirlo entre los jugadores, sin modificar la página.
3. Llama a esa función con los datos de la misión y guarda el valor devuelto.
4. Cambia el título a `GTA · Entrega en Los Santos` y el estado a `Misión completada`, utilizando la variable del nombre de la misión.
5. Crea una función llamada `mostrarDato` que reciba una etiqueta y un valor. Cada llamada debe crear un elemento de lista dentro de `resumen`, con el formato `Etiqueta: valor`. Utilízala tres veces para mostrar ingresos, gastos y jugadores.
6. Muestra el reparto por jugador en el párrafo `reparto` y asígnale la clase CSS `destacado`.

Construye los textos a partir de las variables y del resultado de la función; no escribas el reparto calculado directamente en el código. Puedes suponer que los gastos no superan los ingresos y que hay al menos un jugador.

**Resultado esperado:**

```text
GTA · Entrega en Los Santos
Misión completada
• Ingresos: 12000 $
• Gastos: 2000 $
• Jugadores: 4
Cada jugador recibe: 2500 $
```

**Comprueba también:** si cambias los jugadores a `2`, deben aparecer `5000 $` por jugador. Si llamas a `calcularReparto(12000, 2000)`, debe devolver `10000`, porque se utiliza el jugador por defecto.

Practicas variables, números, operaciones y cadenas (tema 1); modificación y creación de elementos (tema 2); y declaración, parámetros, valor por defecto, llamadas y retorno de funciones (tema 3).
