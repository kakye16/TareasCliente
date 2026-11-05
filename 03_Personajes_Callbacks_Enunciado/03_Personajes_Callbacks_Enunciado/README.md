# 03 · Personajes y callbacks

**Temas 1, 2 y 3: variables, DOM y callbacks · 20–25 minutos**

La página muestra inicialmente seis personajes con su nombre y su rol. Tu tarea es añadir un icono delante de cada nombre según su rol, usando una función que reciba otra función como argumento.

Edita únicamente `js/script.js`. Los datos y el código que muestra la lista ya están preparados. Conserva el HTML y el CSS.

| Rol | Icono | Ejemplo |
| --- | --- | --- |
| jugador | 🎮 | 🎮 Niebla |
| jefe | 👑 | 👑 Morgath |
| aldeano | 🌾 | 🌾 Elara |

1. Crea `formatearAliasJugador(texto, formatear)`. Debe ejecutar la función recibida en `formatear`, pasándole `texto`, y devolver el resultado. Esta función no debe decidir qué icono corresponde a cada rol.
2. Crea tres funciones: `formatearJugador`, `formatearJefe` y `formatearAldeano`. Cada una recibe un texto y devuelve ese mismo texto con su icono y un espacio delante. No deben modificar el DOM ni los datos originales.
3. En el recorrido de personajes, elige la función de formato según el rol. Pasa esa función como segundo argumento de `formatearAliasJugador`, y el nombre como primero.
4. Guarda el resultado en `nombreFormateado` para que el código preparado lo muestre. Conserva el orden, el nombre original y el rol visible. Solo se añade el icono al nombre.

**Recuerda la estructura del ejemplo:**

```js
function formatearAliasJugador(texto, formatear) {
  return formatear(texto);
}

function encerrarEntreCorchetes(texto) {
  return `[${texto}]`;
}

console.log(formatearAliasJugador("Niebla", encerrarEntreCorchetes)); // "[Niebla]"
console.log(formatearAliasJugador("Niebla", (texto) => texto.toUpperCase())); // "NIEBLA"
```

El callback es la función que pasas como argumento. Pasa su nombre **sin paréntesis**: la función receptora se encarga de ejecutarla. Puedes usar funciones declaradas o funciones de flecha para los tres formatos.

**Resultado esperado:**

```text
🎮 Niebla     jugador
👑 Morgath    jefe
🌾 Elara      aldeano
🎮 Rayo       jugador
👑 Varkos     jefe
🌾 Bruno      aldeano
```

**Comprueba:** cambia el rol de Niebla a `jefe` y recarga: debe aparecer `👑 Niebla`. Añade otro personaje con cualquiera de los tres roles: debe recibir el icono correspondiente sin crear otra función ni añadir condiciones para su nombre. Al recargar no deben acumularse iconos.

Puedes suponer que todos los personajes tienen uno de estos tres roles.
