# 13 · Tarjeta de crédito

**Formularios, expresiones regulares y DOM · 60–90 minutos**

Programa un formulario que simule el pago de un videojuego y refleje los datos válidos en una tarjeta interactiva. El HTML, el CSS y las imágenes ya están preparados. Abre `index.html` y escribe todo el comportamiento en **`src/js/index.js`**, que solo contiene comentarios.

## Validación

Utiliza expresiones regulares para el titular, el número y el CVC. Estas son reglas simplificadas del ejercicio, no una validación bancaria real. No se pide el algoritmo de Luhn.

| Campo | Regla |
| --- | --- |
| Titular | Entre 1 y 20 caracteres después de quitar los espacios de los extremos. Solo letras de A a Z, vocales con tilde, ü, ñ y espacios, en mayúsculas o minúsculas. No se admiten campos vacíos ni solo espacios. |
| Mastercard | 16 dígitos. Empieza por 51, 52, 53, 54 o 55. |
| Visa | 13 o 16 dígitos. Empieza por 4. |
| American Express | 15 dígitos. Empieza por 34 o 37. |
| Caducidad | Mes y año válidos, iguales o posteriores al mes actual según la fecha local. El mes actual se acepta completo. |
| CVC | Exactamente 3 dígitos para las tres marcas, incluidos ceros iniciales. |

El número y el CVC solo admiten dígitos del 0 al 9: rechaza espacios, guiones y letras. Conserva ambos como texto. El campo de caducidad proporciona un valor con formato `AAAA-MM`; comprueba también el caso vacío.

## Comportamiento esperado

1. **Estado inicial.** Formulario vacío, tarjeta por el anverso con sus textos de ejemplo, sin marca ni logo y botón de pago deshabilitado. No muestres errores antes de que se utilice un campo.
2. **Validación de campos.** Valida al editar y al abandonar cada campo. Señala si es válido o inválido y muestra un mensaje concreto junto al campo incorrecto. Actualiza también `aria-invalid`. Al corregirlo, elimina el error.
3. **Vista previa.** Los valores válidos aparecen en la tarjeta. La caducidad se muestra como `MM/AA`, con dos dígitos para el mes. Si un dato deja de ser válido, recupera su texto inicial; no conserves el valor anterior.
4. **Detección de marca.** Un número admitido cambia el nombre, el logo y el color de ambas caras. Un número incorrecto restaura la tarjeta neutra y oculta el logo.
5. **Giro.** Cada pulsación sobre la tarjeta alterna entre anverso y reverso. Debe funcionar también con el teclado y actualizar `aria-pressed`.
6. **Pago simulado.** Habilita el botón únicamente cuando los cuatro campos sean válidos. Si se estropea un dato, deshabilítalo de inmediato. Al enviar el formulario, vuelve a validar los datos actuales, evita la recarga y muestra «Pago simulado correctamente. No se ha realizado ningún cargo.» solo si todo es válido. Contempla también el envío con Enter.
7. **Limpiar.** Restablece campos, tarjeta, marca, orientación, mensajes y botón al estado inicial, también después de un pago simulado.

Muestra los mensajes en la página, sin ventanas de alerta. Organiza el código en funciones, sin librerías. No envíes ni guardes los datos: toda la actividad sucede en la página y utiliza valores ficticios.

## Elementos disponibles

El CSS ya define los estados visuales. Decide cómo conectar la interfaz y organizar tu código; no necesitas modificar el diseño.

| Elementos | Uso |
| --- | --- |
| `#payment-form`, `#payButton`, `#form-message` | Formulario, botón de pago y mensaje de resultado. |
| `#cardNumber`, `#username`, `#expireDate`, `#cvc` | Campos del formulario. |
| Identificador del campo seguido de `-error` | Mensaje de error de cada campo. |
| `.is-valid`, `.is-invalid` | Estados visuales de los campos. |
| `#cardNumber-card`, `#username-card`, `#expireDate-card`, `#cvc-card` | Valores en la tarjeta. |
| `#cardName`, `#logo-front` | Marca y logo; el logo comienza con el atributo `hidden`. |
| `.flip-card-front`, `.flip-card-back` | Caras de la tarjeta. Conserva estas clases al cambiar la marca. |
| `.masterCard`, `.visa`, `.american` | Colores de marca para ambas caras. |
| `#flip-card` y `.is-flipped` | Control de giro y clase que muestra el reverso. |

Los logos están en `src/images/masterCard.png`, `src/images/visa.png` y `src/images/american.png`.

## Comprueba tu ejercicio

| Prueba | Resultado esperado |
| --- | --- |
| Abrir la página | Estado inicial, sin errores y sin posibilidad de pagar. |
| `Ana López`, `5122233344455566`, mes actual y `012` | Datos válidos, Mastercard y botón habilitado. El CVC conserva el cero. |
| Cambiar el número por `4912345678123` o `4111111111111111` | Marca Visa y ambas caras con su color. |
| Cambiar el número por `340001112223334` | Marca American Express y CVC de 3 dígitos admitido. |
| Número `5612233344455566`, uno con espacios o uno incompleto | Error, tarjeta neutra, sin logo y pago deshabilitado. |
| Titular `   Ana López   ` | Válido; la tarjeta muestra `Ana López`. |
| Titular de espacios, `Ana7` o más de 20 caracteres | Error y texto inicial del titular en la tarjeta. |
| CVC `12`, `1234` o `1a3` | Error y texto inicial del CVC. |
| Caducidad vacía o del mes anterior | Error y `MM/AA` en la tarjeta. |
| Caducidad del mes actual o posterior | Válida; enero de 2030 se representa como `01/30` cuando no esté caducado. |
| Borrar un dato tras completar el formulario | El pago vuelve a deshabilitarse inmediatamente. |
| Pulsar la tarjeta dos veces, también con Enter o espacio | Reverso y después anverso. |
| Enviar con todos los datos válidos | Mensaje de éxito sin recarga ni envío de datos. |
| Limpiar tras girar la tarjeta o simular el pago | Se recupera todo el estado inicial. |

Entrega la carpeta con tu JavaScript y una breve relación de las comprobaciones realizadas.
