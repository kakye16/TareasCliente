# Primeros clics: tres en raya

**Introducción a eventos básicos**

Crea desde cero una página con un tablero de tres en raya. Solo necesitas alternar marcas con cada clic.

## Qué debes construir

- Crea `index.html`, `css/estilos.css` y `js/script.js` y enlázalos.
- Centra el tablero horizontal y verticalmente en la pantalla.
- Utiliza CSS Grid para formar tres filas y tres columnas, con nueve celdas cuadradas del mismo tamaño. Puedes usar botones como celdas.
- El tablero empieza vacío. Registra un listener de `click` en cada celda.
- El primer clic escribe **X** en la celda pulsada; el segundo escribe **O** en la celda que se pulse; el tercero, **X**, y así indefinidamente.
- El turno es compartido por todo el tablero: no empieza de nuevo en cada celda.
- Si pulsas una celda ocupada, sustituye su contenido por la marca del turno actual y pasa al siguiente turno.

No compruebes si una celda está ocupada, quién gana o si hay empate. No añadas puntuaciones, temporizadores ni un final de partida. Al recargar la página, el tablero vuelve a estar vacío y comienza X.

Ampliación: Haz que en la pantalla se muestre de quién es el turno.

## Comprueba el resultado

1. Pulsa la celda superior izquierda: aparece **X**.
2. Pulsa la central: aparece **O**.
3. Pulsa otra vez la central: su **O** se sustituye por **X**.
4. Pulsa la superior derecha: aparece **O**.
5. Sigue pulsando, incluso después de llenar las nueve celdas: las marcas siguen alternándose.

Practicas selección de elementos, una variable de estado compartida, eventos de clic y modificación del texto de una celda.
