# 18 · Caza de objetivos

Completa `js/script.js` para crear un juego de puntería: pulsa el objetivo tantas veces como puedas en **20 segundos**. El HTML, el CSS y la función que mueve el objetivo ya están preparados.

1. La URL decide la dificultad: cada nuevo objetivo dispone de 1200 ms en `?modo=facil` y 700 ms en `?modo=dificil` antes de cambiar de posición. Si falta el modo o no es válido, usa el fácil.
2. Al comenzar, muestra **3, 2 y 1**, un número por segundo, antes de activar la partida. Cada acierto suma un punto y mueve el objetivo, que vuelve a disponer de su plazo completo. La partida termina al agotarse los 20 segundos aunque el último objetivo aún tenga tiempo.
3. Muestra el tiempo restante y, al agotarse, bloquea el objetivo y muestra la puntuación final. Permite comenzar otra partida con el marcador a cero, sin duplicar temporizadores.
4. Si la pestaña se oculta, pausa el juego conservando puntos y tiempo. Al volver, el jugador debe pulsar **Continuar**. Si aún se estaba preparando, cancela el inicio.
5. Muestra el tamaño de la ventana y mantén el objetivo dentro del tablero al redimensionarla.

**Comprueba:** abre `index.html?modo=dificil`, inicia, consigue 3 puntos y cambia de pestaña. Al volver deben mantenerse los 3 puntos y el tiempo de la pausa. Continúa hasta ver el resultado y comienza otra partida con el marcador a cero.

Comprueba también que la preparación muestra 3, 2 y 1 y que, al acertar justo antes de que un objetivo cambie de posición, el siguiente dispone de otros 700 ms.

La cuenta atrás debe basarse en el instante de finalización, para que los retrasos del navegador no alarguen la partida. Detén los temporizadores al pausar, finalizar o cancelar el inicio.
