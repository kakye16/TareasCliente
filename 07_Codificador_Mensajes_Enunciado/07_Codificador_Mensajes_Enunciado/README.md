# 07 · Codificador de mensajes

**Arrays, cadenas y números · 30–40 minutos**

Tu escuadrón necesita transformar los mensajes de sus misiones. Programa un codificador con unas reglas comunes para todos los mensajes.

Abre `index.html` y completa únicamente `js/script.js`. El HTML y el CSS están preparados. Utiliza la teoría de arrays, cadenas y números, junto con funciones, DOM y eventos básicos. No necesitas expresiones regulares ni librerías.

## Reglas de codificación

Al pulsar **Codificar mensaje**, lee el texto y la clave y aplica estas reglas en orden:

1. Elimina los espacios de los extremos y convierte el mensaje a mayúsculas. Si queda vacío, muestra un aviso y no lo codifiques.
2. La clave es obligatoria y debe ser un número entero del 1 al 99. Rechaza valores vacíos, decimales, texto y números fuera del intervalo.
3. Crea un array de palabras separadas por espacios. Si hay varios espacios seguidos, ignora las partes vacías.
4. Sustituye todas las vocales sin tilde de cada palabra: `A → 4`, `E → 3`, `I → 1`, `O → 0`, `U → 9`. Las letras con tilde, la Ñ, los números y los signos se conservan después del cambio a mayúsculas.
5. Invierte el orden de las palabras y únelas con un guion `-`. No inviertas las letras de cada palabra.
6. Calcula un código multiplicando la clave por el número de palabras. Añádelo al final tras `#`, con un mínimo de tres cifras, rellenando con ceros por la izquierda. No recortes códigos de más de tres cifras.

## Pantalla y funciones

- Conserva el mensaje original en el campo y muestra la salida en `#resultado` como texto.
- El candado comienza abierto, `🔓`. Tras una codificación válida, tu JavaScript debe cambiarlo a `🔒` y actualizar el estado a «Mensaje codificado».
- Si los datos no son válidos, elimina cualquier resultado anterior, muestra un aviso que explique el error y deja el candado abierto con el estado «Sin codificar».
- Cada clic procesa los valores actuales. El mismo texto y la misma clave siempre producen la misma salida.
- Organiza la solución en funciones: una transforma una palabra, otra recibe el mensaje válido y la clave numérica y devuelve el código completo, y otra atiende el clic, valida los datos y actualiza la pantalla.

## Comprueba tu actividad

| Mensaje | Clave | Resultado |
| --- | --- | --- |
| `  Atacad   la base  ` | `7` | `B4S3-L4-4T4C4D#021` |
| `Hola mundo` | `3` | `M9ND0-H0L4#006` |
| `aeiou aeiou` | `1` | `43109-43109#002` |
| `Misión 2!` | `10` | `2!-M1S1ÓN#020` |
| `uno dos tres cuatro cinco seis siete ocho nueve diez once` | `99` | `0NC3-D13Z-N93V3-0CH0-S13T3-S31S-C1NC0-C94TR0-TR3S-D0S-9N0#1089` |

Prueba también un mensaje vacío o solo con espacios, y las claves vacía, `0`, `100`, `2.5` y `7abc`. Después de un resultado correcto, introduce un dato incorrecto: el resultado anterior debe desaparecer y el candado volver a abrirse. Corrige los datos y comprueba que puedes codificar de nuevo.

Es una transformación de texto para practicar JavaScript, no un cifrado para proteger información.

Ampliación: Añade una opción para reiniciar todos los elementos sin recargar la página.
