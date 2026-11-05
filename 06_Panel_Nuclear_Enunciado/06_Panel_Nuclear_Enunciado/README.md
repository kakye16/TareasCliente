# 06 · El Panel de Control Nuclear del Sector 7-G

Alguien se ha ido a por donuts y te han dejado a cargo de la consola de la Central Nuclear de Springfield. Programa los controles interactivos de la pantalla de estado utilizando JavaScript y eventos del DOM.

Abre `index.html` en el navegador, sin instalar nada. Completa `js/script.js`. El HTML y el CSS están preparados; examina la clase `.borroso` e investiga cómo funciona la propiedad CSS `filter`.

## Requisitos

1. **Captura de pantalla (teclado):** escucha el teclado en la página y acumula los caracteres escritos en `p#pantalla-mensaje`, en letras gigantes. Retroceso elimina el último carácter "mensaje.slice(0, -1)". Las teclas especiales y los atajos no deben aparecer como texto. Respeta el teclado de los controles; pulsa la pantalla para seguir escribiendo después de utilizarlos.
2. **Nivel de alerta (desplegable):** al cambiar `select#selector-alerta`, actualiza `h2#titulo-estado` con `ESTADO: NORMAL`, `ESTADO: PRECAUCIÓN` o `ESTADO: ¡FUSIÓN INMINENTE!`.
3. **Indicadores emoji (checkboxes):** añade o quita los símbolos seleccionados delante del mensaje, en el orden de los controles (☢️, ⚠️, 🍩). Conserva el texto escrito y evita duplicar símbolos.
4. **Cámara de seguridad (ratón):** al entrar el ratón en `img#foto-camara`, aplica la clase `borroso` para simular interferencias. Al salir, retírala.
5. **Botón mutante (clic cíclico):** cada clic en `button#boton-fision` cambia su clase de color: verde radiactivo → amarillo alerta → rojo fusión → verde radiactivo. El botón empieza verde.

Registra los eventos desde JavaScript. Usa `textContent` para mostrar el mensaje como texto.

## Comprobación

- Escribe `Hola Springfield` y pulsa Retroceso: aparece `Hola Springfiel`.
- Marca Radiactivo y Donut: aparece `☢️ 🍩 Hola Springfiel`. Desmarca Radiactivo: queda `🍩 Hola Springfiel`.
- Pulsa la pantalla y sigue escribiendo: se conserva el emoji sin duplicarse.
- Prueba los tres niveles de alerta y comprueba sus títulos exactos.
- Entra y sal de la foto: la interferencia aparece y desaparece.
- Pulsa el botón cuatro veces: amarillo, rojo, verde y amarillo.
- Usa Tab, las flechas del selector y Espacio sobre los checkboxes: los controles funcionan sin añadir texto al mensaje.

La foto y las fuentes se cargan desde servicios externos y necesitan conexión.

