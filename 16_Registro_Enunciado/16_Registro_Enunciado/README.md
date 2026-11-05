# 15 · Registro de usuario

**Formularios, regex y arrays · 60–75 minutos**

Programa el registro de una cuenta de jugador en `src/js/index.js`. Tienes HTML, CSS y el array `usuariosRegistrados`, que simula nombres ocupados. No se proporciona lógica resuelta.

## Requisitos

Todos los campos son obligatorios. Haz las validaciones **en JavaScript**, sin librerías ni atributos `required`, `minlength`, `maxlength`, `pattern`, `min` o `max`.

- **Nombre de usuario:** de 3 a 20 caracteres; solo letras de A a Z, números y guion bajo. Quita los espacios de los extremos. Mientras se escribe, comprueba el formato y que no esté en el array, ignorando mayúsculas. Muestra «Nombre disponible» solo si cumple ambas condiciones; en caso contrario, explica el error.
- **Email:** elimina espacios de los extremos y valida mediante regex: texto antes y después de una única `@`, punto en el dominio y extensión de al menos dos letras, sin espacios. No necesitas comprobar si ese email ya existe.
- **Fecha de nacimiento:** fecha real, no vacía y anterior o igual a hoy, según la fecha local. No se exige edad mínima.
- **Contraseña:** de 8 a 64 caracteres, al menos una minúscula de a–z, una mayúscula de A–Z y un número; sin espacios en blanco. No la recortes ni cambies su contenido.
- **Confirmación:** debe coincidir exactamente con la contraseña. Si se modifica la original después de validar la confirmación, comprueba de nuevo la coincidencia.
- **Ojos:** cada botón muestra u oculta su propio campo sin modificarlo ni enviar el formulario. Actualiza su etiqueta accesible y `aria-pressed`.
- **Errores y envío:** valida los demás campos al salir y al enviar; una vez revisados, actualiza sus errores al escribir. Muestra errores junto a cada campo y actualiza `aria-invalid`. Evita la recarga y enfoca el primer campo incorrecto. Si todo es válido, añade el nombre al array y muestra «Registro simulado completado». Limpia el formulario, los errores y los avisos de disponibilidad, y vuelve a ocultar las contraseñas conservando el mensaje de éxito hasta la siguiente edición.

Permite enviar con Enter y usar los ojos con teclado. No uses `alert`, servidor ni almacenamiento: guarda únicamente el nombre en el array durante esa sesión de página; al recargar se recuperan los nombres iniciales. No guardes ni muestres las contraseñas fuera de sus campos.

## Ayuda: accesibilidad y expresiones regulares

- **`<label>`** es la etiqueta visible de un campo. Su atributo `for` coincide con el `id` del input: al pulsar la etiqueta se activa ese campo.
- **`aria-label`** da un nombre accesible a un control sin texto, como el botón del ojo. Lo leen los lectores de pantalla; no añade texto visible ni un aviso al pasar el ratón. En este ejercicio indica «Mostrar contraseña» u «Ocultar contraseña».
- **`aria-pressed`** comunica si un botón con dos estados está activado. Aquí `"true"` significa contraseña visible y `"false"`, oculta. No cambia la visibilidad por sí solo: eso se hace cambiando el `type` del input. El CSS preparado también utiliza este atributo para cambiar el dibujo del ojo.
- **`aria-invalid`** indica si el campo tiene un error: `"true"` cuando es incorrecto y `"false"` cuando es válido. No valida por sí solo; comunica el resultado y permite aplicar el estilo preparado.
- **`aria-controls`** contiene el `id` del campo controlado por el ojo; **`aria-describedby`**, los identificadores de sus textos de ayuda o error. Ya están preparados en el HTML.
- **`campo.focus()`** lleva el foco del teclado a ese campo, para poder escribir directamente en él. Se usa al enviar con errores; no cambia el valor ni valida nada.

Puedes utilizar esta regex de email; no necesitas inventarla ni memorizarla:

```js
const regexEmail = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/;
```

| Parte | Significado |
| --- | --- |
| `^` y `$` | Comprueban el texto completo, de principio a fin. |
| `[^\s@]+` | Uno o más caracteres que no sean espacios en blanco (`\s`) ni `@`. Es la parte anterior a la arroba. |
| `@` | Una arroba literal. |
| `[^\s@.]+` | Una parte del dominio sin espacios, arrobas ni puntos. |
| `(?:\.[^\s@.]+)*` | Cero o más partes adicionales del dominio, cada una precedida de un punto. `(?:...)` agrupa sin guardar una captura; `*` permite repetir. Admite, por ejemplo, `correo.example.com`. |
| `\.[A-Za-z]{2,}` | Un punto literal seguido de al menos dos letras para la extensión. |

`regexEmail.test(texto)` devuelve `true` si el texto cumple el patrón y `false` si no. Es una regla didáctica: acepta `ana@example.com` y rechaza `ana@`, `a@@b.com` o `a@b..com`; no comprueba que el buzón exista ni cubre todos los formatos posibles de email.

En las otras regex, `[A-Za-z0-9_]` permite letras, números o guion bajo; `{3,20}` exige entre 3 y 20 repeticiones; `\d` representa un dígito y `/\s/` detecta espacios en blanco, incluidos tabuladores. Para comprobar la contraseña puedes usar comprobaciones separadas de longitud, minúsculas, mayúsculas y números según los requisitos, sin una única regex compleja.


## Comprobaciones

| Prueba | Resultado |
| --- | --- |
| Escribir ` PLAYER_ONE ` o `ab` | Nombre ocupado o formato incorrecto. |
| `nova_7`, `nova@example.com`, `2000-01-01` y `Juego2026!` en ambas contraseñas | Registro correcto; `nova_7` queda ocupado al escribirlo de nuevo. |
| Email `ana@`, fecha vacía o de mañana | Error en el campo correspondiente. |
| Contraseña `juego2026`, de 7 caracteres o distinta de la confirmación | Error; no se registra el nombre. |
| Cambiar la contraseña tras confirmar y pulsar ambos ojos | Se actualiza la coincidencia; cada ojo controla solo su campo. |

Entrega la carpeta con tu JavaScript terminado.

