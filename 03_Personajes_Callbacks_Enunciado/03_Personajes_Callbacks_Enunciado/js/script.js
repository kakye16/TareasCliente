// Datos iniciales: cada personaje tiene un nombre y un rol.
const personajes = [
  { nombre: "Niebla", rol: "jugador" },
  { nombre: "Morgath", rol: "jefe" },
  { nombre: "Elara", rol: "aldeano" },
  { nombre: "Rayo", rol: "jugador" },
  { nombre: "Varkos", rol: "jefe" },
  { nombre: "Bruno", rol: "aldeano" }
];

// 1. Crea formatearAliasJugador(texto, formatear).
// Debe ejecutar el callback con el texto y devolver su resultado.
function formatearAliasJugador(texto, formatear) {
  return formatear(texto)
}

// 2. Crea tres funciones: formatearJugador, formatearJefe y formatearAldeano.
// Cada una recibe un texto y devuelve el icono correspondiente seguido del texto.
function formatearJugador(texto) {
  return `🎮${texto}`
}

function formatearJefe(texto) {
  return `👑${texto}`
}

function formatearAldeano(texto) {
  return `🌾${texto}`
}


const lista = document.getElementById("personajes");

for (const personaje of personajes) {
  let formateador

  switch (personaje.rol) {
    case "jugador":
      formateador = formatearJugador
      break;

    case "jefe":
      formateador = formatearJefe
      break;

    case "aldeano":
      formateador = formatearAldeano
      break;

    default:
      break;
  }

  // 3. Sustituye esta asignación por la selección del callback según el rol.
  // Usa formatearAliasJugador para obtener el nombre con su icono.
  let nombreFormateado = formatearAliasJugador(personaje.nombre, formateador) // <- Sustituir por lo que se pide


  // El DOM ya está preparado: conservamos el nombre y el rol por separado.
  const fila = document.createElement("li");
  const nombre = document.createElement("span");
  nombre.className = "nombre";
  nombre.textContent = nombreFormateado;

  const rol = document.createElement("span");
  rol.className = "rol";
  rol.textContent = personaje.rol;

  fila.appendChild(nombre);
  fila.appendChild(rol);
  lista.appendChild(fila);
}
