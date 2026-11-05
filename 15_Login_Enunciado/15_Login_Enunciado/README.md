# 14 · Login

**Formularios, expresiones regulares y eventos · 45–60 minutos**

Programa el acceso a una cuenta de jugador. Tienes el HTML, el CSS y una cuenta ficticia en `src/js/index.js`. Escribe en ese archivo toda la lógica, sin librerías.

## Requisitos

- **Usuario o email:** un único campo obligatorio. Elimina los espacios de los extremos. Si contiene `@`, comprueba con una expresión regular que tenga texto antes y después de `@`, un punto en el dominio y una extensión de al menos dos letras, sin espacios ni más de una `@`. Si no contiene `@`, admite de 3 a 20 caracteres: letras de A a Z, números y guion bajo.
- **Contraseña:** obligatoria, entre 8 y 64 caracteres y sin espacios en blanco. No elimines espacios ni cambies sus mayúsculas.
- **Mostrar u ocultar:** el botón del ojo alterna la visibilidad sin borrar la contraseña ni enviar el formulario. Actualiza su etiqueta accesible y `aria-pressed`; el CSS cambia el icono.
- **Errores:** valida al salir de cada campo y al enviar. Muestra el error junto al campo y actualiza `aria-invalid`. Cuando el usuario corrija un campo que ya se ha validado, actualiza su error mientras escribe. Al enviar, lleva el foco al primer campo incorrecto.
- **Acceso:** evita la recarga. Si los formatos son válidos, compara con `cuentaPrueba`: permite su usuario o su email, sin distinguir mayúsculas; la contraseña debe coincidir exactamente. Muestra «Acceso correcto» o «Usuario/email o contraseña incorrectos», sin revelar qué credencial ha fallado. Borra ese mensaje cuando se edite cualquier campo.

Haz **todas las validaciones en JavaScript**: no añadas `required`, `minlength`, `maxlength` ni `pattern` al HTML. Permite enviar con el botón o con Enter y manejar el ojo con teclado. No uses `alert`, no guardes contraseñas ni envíes datos a un servidor: es una simulación de acceso, no una autenticación real.

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
| Enviar vacío, usuario `ab`, email `ana@` o contraseña de 7 caracteres | Error junto al campo correspondiente. |
| Usuario `PLAYER_ONE` o email `player@example.com`, con `Juego2026!` | Acceso correcto por ambas vías. |
| Usuario `otro_user` con `Juego2026!`, o `player_one` con `juego2026!` | Credenciales incorrectas. |
| Pulsar el ojo dos veces | Muestra y vuelve a ocultar la contraseña sin modificarla. |
| Corregir un error y enviar con Enter | El error se actualiza y el formulario funciona sin recargar. |

Entrega la carpeta con tu JavaScript terminado.

