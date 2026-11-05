# 05 · Calendario de torneos

**Temas 1–4: introducción, DOM, funciones y fechas · 25–30 minutos**

Tres torneos se aplazan tres días. Calcula sus nuevas fechas y muestra si, respecto al **30 de septiembre de 2026**, ya han finalizado, se celebran ese día o están pendientes. Para este ejercicio, cada torneo dura un único día.

Edita únicamente `js/script.js`. La lista de torneos y el código que muestra los resultados ya están preparados. Conserva el HTML y el CSS.

| Torneo | Fecha inicial |
| --- | --- |
| Mario Kart | 26/9/2026 |
| Rocket League | 27/9/2026 |
| Super Smash Bros. | 30/9/2026 |

1. Crea `formatearFecha(fecha)`: recibe una fecha y devuelve un texto con el formato `día/mes/año`, sin ceros iniciales.
2. Crea `obtenerEstado(fecha, referencia)`: devuelve `Finalizado` si la fecha es anterior a la referencia, `Se celebra hoy` si coincide o `Pendiente` si es posterior.
3. Utiliza tu función de formato para mostrar `Fecha de referencia: 30/9/2026` en el párrafo preparado.
4. Dentro del recorrido, crea una fecha a partir del año, mes y día de cada torneo. Aplázala tantos días como indique `diasDeRetraso`. El cambio de mes o año debe resolverse mediante el objeto de fecha.
5. Usa tus funciones para guardar la nueva fecha formateada en `fechaFormateada` y su estado en `estadoTorneo`. El DOM preparado mostrará ambos resultados.

**Recuerda:** los meses del constructor de fechas van de 0 a 11, pero los datos de la lista van de 1 a 12. El día del mes y el día de la semana son conceptos distintos. Para comprobar que dos fechas representan el mismo instante, compara su valor en milisegundos, no la identidad de los objetos.

Todas las fechas se crean sin horas, a las 00:00 en hora local. Usa la referencia fija del ejercicio, no la fecha actual. No escribas los resultados directamente en el código.

**Resultado esperado:**

```text
Fecha de referencia: 30/9/2026

Mario Kart
Nueva fecha: 29/9/2026
Estado: Finalizado

Rocket League
Nueva fecha: 30/9/2026
Estado: Se celebra hoy

Super Smash Bros.
Nueva fecha: 3/10/2026
Estado: Pendiente
```

**Comprueba también:**

- Con `diasDeRetraso = 0`, las fechas coinciden con las iniciales y Super Smash Bros. se celebra el día de referencia.
- Si cambias la fecha inicial de un torneo al 30/12/2026 y mantienes tres días de retraso, su nueva fecha debe ser `2/1/2027`.
- Si añades otro torneo con la misma estructura, debe calcularse sin añadir más condiciones.

Practicas variables, operaciones y recorridos (tema 1), el DOM ya preparado (tema 2), funciones con parámetros y retorno (tema 3), y creación, consulta, modificación y comparación de fechas (tema 4).
