"use strict";

// Completa la ficha del servidor siguiendo el README.md.
const titulo = document.getElementById('titulo')
titulo.textContent = "Minecraft"

const estado = document.getElementById('estado')
estado.textContent = "Inscripciones abiertas"

const ficha = document.getElementById('ficha')
const subtitulo = document.createElement('h1')
subtitulo.classList.add("destacado")
const subtitulo2 = document.createElement("h2")
subtitulo2.classList.add = "destacado"
subtitulo.textContent = "Datos del servidor"
subtitulo2.textContent = "Horario"


const modalidad = document.createElement('p')
const dificultad = document.createElement('p')
const capacidad = document.createElement('p')

modalidad.textContent = "Modalidad: supervivencia"
dificultad.textContent = "Dificultad: normal"
capacidad.textContent = "Capacidad: 20 personas"

ficha.append(subtitulo)

ficha.append(modalidad)
ficha.append(dificultad)
ficha.append(capacidad)

let aviso = document.getElementById('aviso')
aviso.textContent = ("Solicita acceso a la persona administradora antes de conectarte")