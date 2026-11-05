// =========================================================================
// 1. MODELO DE DATOS Y CATÁLOGO
// =========================================================================

// Cada tipo de objeto se relaciona con una estadística del jugador.
const ESTADISTICA_POR_TIPO = {
  Arma: 'ataque',
  Armadura: 'defensa',
  Consumible: 'vida'
};

const RAREZAS_VALIDAS = ['Común', 'Rara', 'Legendaria'];

class Producto {
  constructor({ nombre, imagen, precioEntero, precioOriginal, rareza, tipo, bonus }) {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
      throw new Error('El producto necesita un nombre válido.');
    }
    if (!Number.isInteger(precioEntero) || precioEntero < 0) {
      throw new Error(`Precio inválido en "${nombre}": debe ser un entero de céntimos >= 0.`);
    }
    if (!(tipo in ESTADISTICA_POR_TIPO)) {
      throw new Error(`Tipo inválido en "${nombre}": ${tipo}. Usa Arma, Armadura o Consumible.`);
    }
    if (!RAREZAS_VALIDAS.includes(rareza)) {
      throw new Error(`Rareza inválida en "${nombre}": ${rareza}.`);
    }
    if (typeof bonus !== 'number' || Number.isNaN(bonus)) {
      throw new Error(`Bonus inválido en "${nombre}".`);
    }

    this.nombre = nombre.trim();
    this.imagen = imagen;
    this.precioEntero = precioEntero;
    this.precioOriginal = precioOriginal ?? precioEntero;
    this.rareza = rareza;
    this.tipo = tipo;
    this.bonus = bonus;
  }

  get estadistica() {
    return ESTADISTICA_POR_TIPO[this.tipo];
  }

  getPrecioFormateado(centimos = this.precioEntero) {
    return (centimos / 100).toFixed(2).replace('.', ',') + ' €';
  }

  aplicarEfecto(jugador) {
    jugador[this.estadistica] += this.bonus;
  }

  conDescuento(porcentaje) {
    const precioRebajado = Math.round(this.precioOriginal * (1 - porcentaje / 100));
    return new Producto({ ...this, precioEntero: precioRebajado });
  }
}


// =========================================================================
// 2. MERCADO Y CATALOGO PREDEFINIDO
// =========================================================================

// Estos objetos son solo los datos iniciales. Decide cómo convertirlos en las
// instancias de tu modelo y guarda el resultado en productosIniciales.
const datosIniciales = [
  {
    nombre: "Espada de Hierro",
    imagen: "https://images.unsplash.com/photo-1440711085503-89d8ec455791?q=80&w=1098&auto=format&fit=crop",
    precioEntero: 1500, rareza: "Común", tipo: "Arma", bonus: 25
  },
  {
    nombre: "Escudo Antiguo",
    imagen: "https://images.unsplash.com/photo-1778940454592-f9e9595ade99?q=80&w=687&auto=format&fit=crop",
    precioEntero: 2000, rareza: "Común", tipo: "Armadura", bonus: 15
  },
  {
    nombre: "Poción de Vida",
    imagen: "https://images.unsplash.com/photo-1610706936277-f01646bb90c6?q=80&w=687&auto=format&fit=crop",
    precioEntero: 500, rareza: "Común", tipo: "Consumible", bonus: 200
  },
  {
    nombre: "Mandoble Rúnico",
    imagen: "https://images.unsplash.com/photo-1594399430386-913fd5defaa4?q=80&w=1170&auto=format&fit=crop",
    precioEntero: 4500, rareza: "Rara", tipo: "Arma", bonus: 60
  },
  {
    nombre: "Coraza Solar",
    imagen: "https://images.unsplash.com/photo-1664998064103-4075dad55a79?q=80&w=687&auto=format&fit=crop",
    precioEntero: 6000, rareza: "Legendaria", tipo: "Armadura", bonus: 80
  },
  {
    nombre: "Elixir Ancestral",
    imagen: "https://plus.unsplash.com/premium_photo-1695385055449-73d3748a0d9c?q=80&w=1170&auto=format&fit=crop",
    precioEntero: 2500, rareza: "Rara", tipo: "Consumible", bonus: 500
  }
];

const productosIniciales = datosIniciales.map(datos => new Producto(datos));

//dinamico
let catalogoMercado = [...productosIniciales];

//stats
const jugador = {
  vida: 1000,
  ataque: 150,
  defensa: 80,
  oroCentimos: 8000
};

// =========================================================================
// 3. FUNCIONES DE LÓGICA DE MERCADO (A diseñar)
// =========================================================================
//filtros
const filtrarPorRareza = (lista, rareza) =>
  rareza === 'todas' ? [...lista] : lista.filter(p => p.rareza === rareza);

const buscarPorNombre = (lista, texto) => {
  const termino = texto.trim().toLowerCase();
  return lista.filter(p => p.nombre.toLowerCase().includes(termino));
};

const aplicarDescuentoFiltro = (lista, criterio, porcentaje) =>
  lista.map(p =>
    p.tipo === criterio || p.rareza === criterio ? p.conDescuento(porcentaje) : p
  );


function generarOfertaAleatoria() {
  const criterios = ['Arma', 'Armadura', 'Consumible', 'Legendaria', 'Rara'];
  const porcentajes = [10, 15, 20, 25, 30, 50];

  const criterioElegido = criterios[Math.floor(Math.random() * criterios.length)];
  const porcentajeElegido = porcentajes[Math.floor(Math.random() * porcentajes.length)];


  catalogoMercado = aplicarDescuentoFiltro(productosIniciales, criterioElegido, porcentajeElegido);


  const textoOferta = document.getElementById('texto-oferta-dia');
  textoOferta.textContent = `${porcentajeElegido}% de descuento en objetos de tipo/rareza: ${criterioElegido}`;

  aplicarFiltrosCombos();
}

// =========================================================================
// 4. INTERACCIÓN CON EL DOM Y NOTIFICACIONES (Lógica provista)
// =========================================================================

const contenedorCatalogo = document.getElementById('contenedor-catalogo');
const inputBuscar = document.getElementById('input-buscar');
const selectRareza = document.getElementById('select-rareza');
const bannerNotificacion = document.getElementById('banner-notificacion');
const btnNuevaOferta = document.getElementById('btn-nueva-oferta');

function mostrarNotificacion(mensaje, esExito) {
  const bannerNotificacion = document.getElementById('banner-notificacion');

  if (!bannerNotificacion) {
    console.error('No se encuentra el banner de notificación.');
    return;
  }

  bannerNotificacion.textContent = mensaje;
  bannerNotificacion.className = esExito
    ? 'banner-notificacion exito'
    : 'banner-notificacion error';

  console.log('Notificación mostrada:', mensaje);

  setTimeout(() => {
    bannerNotificacion.className = 'banner-notificacion oculto';
  }, 3000);
}

function renderizarJugador() {
  document.getElementById('stat-hp').textContent = jugador.vida;
  document.getElementById('stat-atk').textContent = jugador.ataque;
  document.getElementById('stat-def').textContent = jugador.defensa;
  document.getElementById('stat-oro').textContent = (jugador.oroCentimos / 100).toFixed(2).replace('.', ',') + ' €';
}

function renderizarCatalogo(lista) {
  contenedorCatalogo.innerHTML = '';

  lista.forEach((producto, index) => {
    const tieneRebaja = producto.precioEntero < producto.precioOriginal;
    const card = document.createElement('div');
    card.className = `tarjeta-producto ${producto.rareza.toLowerCase()}`;

    card.innerHTML = `
      <div class="producto-img-container">
        <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <div class="producto-header">
        <span class="producto-nombre">${producto.nombre}</span>
        <span class="badge-rareza">${producto.rareza}</span>
      </div>
      <div class="producto-info">
        <span>Tipo: ${producto.tipo}</span><br>
        <span class="producto-bonus">+${producto.bonus} ${producto.tipo === 'Arma' ? 'ATK' : producto.tipo === 'Armadura' ? 'DEF' : 'HP'}</span>
      </div>
      <div class="producto-footer">
        <div class="precio-contenedor">
          ${tieneRebaja ? `<span class="precio-original">${producto.getPrecioFormateado(producto.precioOriginal)}</span>` : ''}
          <span class="producto-precio">${producto.getPrecioFormateado()}</span>
        </div>
        <button class="btn-comprar" data-index="${index}">Comprar</button>
      </div>
    `;
    contenedorCatalogo.appendChild(card);
  });

  document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.target.getAttribute('data-index');
      comprarProducto(lista[idx]);
    });
  });
}

function comprarProducto(producto) {
  if (jugador.oroCentimos >= producto.precioEntero) {
    jugador.oroCentimos -= producto.precioEntero;
    producto.aplicarEfecto(jugador);
    renderizarJugador();
    mostrarNotificacion(`¡Has comprado ${producto.nombre} exitosamente!`, true);
  } else {
    mostrarNotificacion(`No tienes suficiente oro para comprar ${producto.nombre}.`, false);
  }
}

function aplicarFiltrosCombos() {
  const texto = inputBuscar.value;
  const rareza = selectRareza.value;

  let resultado = buscarPorNombre(catalogoMercado, texto);
  resultado = filtrarPorRareza(resultado, rareza);

  renderizarCatalogo(resultado);
}


inputBuscar.addEventListener('input', aplicarFiltrosCombos);
selectRareza.addEventListener('change', aplicarFiltrosCombos);
btnNuevaOferta.addEventListener('click', generarOfertaAleatoria);


renderizarJugador();
generarOfertaAleatoria();