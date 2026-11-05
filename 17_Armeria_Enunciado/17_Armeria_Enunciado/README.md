# La Armeria RPG

**Clases ES6, objetos, arrays y formularios · 45–60 minutos**

Construye el sistema de una tienda de objetos para un videojuego RPG. El catalogo, el jugador y la interfaz ya tienen unos datos iniciales, pero el modelo y la logica principal son responsabilidad tuya.

Abre `index.html` y trabaja en `js/script.js`. No hay una unica solucion correcta: puedes decidir como organizar tus clases, que validaciones añadir y si prefieres metodos auxiliares, funciones normales o funciones flecha.

## Punto de partida

En `script.js` encontraras `datosIniciales`, una coleccion de objetos simples. Usala como fuente de datos para construir tu catalogo. Puedes ampliar esos datos, cambiar el nombre de tus clases o crear mas de una clase si te resulta util.

La parte final del archivo contiene la conexion con el DOM: dibuja tarjetas, escucha los controles y gestiona las compras. Puedes conservarla o adaptarla si tu diseño necesita otros nombres o comportamientos.

## Diseña tu modelo

Crea una clase, o varias, que representen los objetos de la armeria. Como orientacion, cada producto deberia poder proporcionar a la interfaz:

- un nombre, una imagen, una rareza, un tipo y un bonus;
- un precio almacenado en centimos (`1500` representa `15,00 €`);
- el precio original para poder mostrar una rebaja;
- una operacion que transforme el precio en un texto legible;
- una operacion que aplique su efecto al jugador;
- una operacion que produzca una copia rebajada sin modificar el objeto de partida.

Elige como validar los tipos de objeto (`Arma`, `Armadura` y `Consumible`) y que debe ocurrir ante datos incorrectos. Relaciona cada tipo con una estadistica del jugador: ataque, defensa o vida.

Despues, crea `productosIniciales` a partir de `datosIniciales` y utiliza ese catalogo como base para las ofertas. El catalogo que se muestra puede ser una coleccion distinta, pero las ofertas nuevas deben partir siempre de los precios originales.

## Logica de mercado

Implementa la logica que necesita la interfaz. Puedes conservar estos nombres o adaptar las llamadas del resto del archivo a tu propia API:

- Una operacion para filtrar por rareza. El valor `todas` debe devolver todos los productos.
- Una busqueda por nombre que ignore mayusculas, minusculas y espacios sobrantes.
- Una operacion que recorra el catalogo y aplique un descuento cuando el criterio coincida con el tipo o con la rareza.
- Una operacion que elija al azar un criterio y un porcentaje, actualice la oferta visible y vuelva a dibujar el catalogo.

Procura que las operaciones sobre arrays devuelvan colecciones nuevas. Una oferta no deberia cambiar los precios base ni acumular descuentos cada vez que se pulsa **Cambiar Oferta**.

## Contrato con la interfaz

La funcion `renderizarCatalogo` ya muestra cada producto usando sus datos y necesita poder formatear el precio. La compra necesita poder aplicar el efecto del producto sobre `jugador`.

La interfaz ofrece estos elementos:

- `#input-buscar` para la busqueda;
- `#select-rareza` para el filtro;
- `#btn-nueva-oferta` para generar otra oferta;
- `#texto-oferta-dia` para describirla;
- `#banner-notificacion` para los mensajes al usuario.

No uses `alert()`: las compras correctas y los errores deben comunicarse con `mostrarNotificacion()`. Puedes reorganizar la interfaz si quieres añadir funcionalidad, pero conserva una experiencia equivalente.

## Comprueba tu actividad

| Comprobacion | Resultado esperado |
| --- | --- |
| Cargar la pagina | Aparece el catalogo y se muestra una oferta aleatoria. |
| Buscar `Escudo` | Solo aparecen los productos cuyo nombre coincide. |
| Elegir `Legendaria` | Solo aparecen objetos de esa rareza. |
| Cambiar la oferta varias veces | Los precios parten siempre del original y no acumulan descuentos. |
| Comprar con oro suficiente | El oro disminuye, se aplica el bonus y aparece un mensaje de exito. |
| Comprar sin oro suficiente | Aparece un mensaje de error y las estadisticas permanecen igual. |
| Probar un porcentaje conocido | Un producto de `1500` centimos con un 20 % de descuento cuesta `1200` centimos. |

Como reto opcional, añade una validacion de datos, inventario de compras, ordenacion por precio o una segunda categoria de oferta.
