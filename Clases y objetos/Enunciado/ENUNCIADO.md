# Combate entre monstruos

Amplía la clase `Monster` para que dos monstruos puedan combatir. Cada uno tiene nombre (`name`), vida (`pv`), ataque (`attack`) y defensa (`defense`), y comienza con 100 puntos de vida.

## Archivos y punto de partida

- `monster.js`: define y exporta la clase base. Añade aquí los métodos del ejercicio.
- `script.js`: importa la clase y crea dos instancias, `slime` y `wolf`. Escribe aquí las llamadas para comprobar el combate.
- `index.html`: carga `script.js` como módulo. No necesitas modificarlo.

Abre `index.html` con Live Server y consulta la consola del navegador. Al empezar verás los mensajes de `action()` de los dos monstruos.

En el constructor, `this` representa el monstruo que se está creando. Dentro de un método, `this` representa la instancia sobre la que lo llamas. Cada monstruo conserva sus propios valores.

## Métodos que debes programar

1. **`receiveDamage(amount)`**: resta a la vida el daño recibido menos la defensa. El daño efectivo no puede ser negativo y la vida nunca puede bajar de cero.
2. **`attackMonster(target)`**: ataca a otro monstruo usando su propio valor de `attack` y el método `receiveDamage` del objetivo. `target` es otra instancia de `Monster`, no su nombre. Si el atacante tiene 0 de vida, no puede atacar.
3. **`showInfo()`**: devuelve un texto como `Slime — Vida: 100, Ataque: 10, Defensa: 3`.

## Comprueba el combate

Utiliza los monstruos preparados en `script.js` y ejecuta estas acciones en orden. Muestra los resultados en consola.

| Acción | Resultado esperado |
| --- | --- |
| Mostrar la información inicial | Ambos tienen 100 de vida. |
| El lobo ataca al slime | El slime queda con 79 de vida. |
| El slime ataca al lobo | El lobo queda con 97 de vida. |
| El slime recibe un golpe de 2 puntos | Conserva sus 79 de vida. |
| El slime recibe un golpe de 200 puntos | Queda con 0 de vida. |
| El slime intenta atacar de nuevo al lobo | No puede dañarlo; el lobo conserva sus 97 de vida. |

## Ampliación opcional

Si ya has trabajado la herencia, crea y exporta una clase `Boss` que herede de `Monster`, comience con 200 puntos de vida y sobrescriba `action()` con un mensaje propio. Impórtala en `script.js`, crea un jefe y muestra su información y su mensaje.

Entrega la carpeta con tus cambios en `monster.js` y `script.js`.
