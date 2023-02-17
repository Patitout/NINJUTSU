let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-guerrero')
    botonMascotaJugador.addEventListener('click', seleccionarGuerrero)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonNieve = document.getElementById('boton-nieve')
    botonNieve.addEventListener('click', ataqueNieve)
}

//Hace que puedas elegir un guerrero y que se cambie en el texto
function seleccionarGuerrero() {
    let imputLopez = document.getElementById("Lopez")
    let imputZica = document.getElementById("Zica")
    let imputTrunso = document.getElementById("Trunso")
    let imputPato = document.getElementById("Pato")
    let imputPeña = document.getElementById("Peña")
    let imputMati = document.getElementById("Mati")
    let spanGuerroPlayer = document.getElementById("guerreroPlayer")

    if (imputLopez.checked) {
        alert("Seleccionaste a Lopez como guerrero") + (spanGuerroPlayer.innerHTML = ' Lopez')
    } else if (imputZica.checked) {
        alert("Seleccionaste a Zica como guerrero") + (spanGuerroPlayer.innerHTML = ' Zica')
    } else if (imputTrunso.checked) {
        alert("Seleccionaste a Trunso como guerrero") + (spanGuerroPlayer.innerHTML = ' Trunso')
    } else if (imputPato.checked) {
        alert("Seleccionaste a Pato como guerrero") + (spanGuerroPlayer.innerHTML = ' Pato')
    } else if (imputPeña.checked) {
        alert("Seleccionaste a Peña como guerrero") + (spanGuerroPlayer.innerHTML = ' Peña')
    } else if (imputMati.checked) {
        alert("Seleccionaste a Mati como guerrero") + (spanGuerroPlayer.innerHTML = ' Mati')
    } else {
        alert("No seleccionaste nada, tarado, elegí algún guerrero")
    }

    seleccionarGuerreroEnemigo()
}

function seleccionarGuerreroEnemigo() {
    let pcRandy = aleatorio(1,6)
    let spanGuerreroPC = document.getElementById('guerreroPC')

    if (pcRandy == 1) {
        spanGuerreroPC.innerHTML = 'Lopez'
    } else if (pcRandy == 2) {
        spanGuerreroPC.innerHTML = 'Zica'
    } else if (pcRandy == 3) {
        spanGuerreroPC.innerHTML = 'Trunso'
    } else if (pcRandy == 4) {
        spanGuerreroPC.innerHTML = 'Pato'
    } else if (pcRandy == 5) {
        spanGuerreroPC.innerHTML = 'Peña'
    } else {
        spanGuerreroPC.innerHTML = 'Mati'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueNieve() {
    ataqueJugador = 'NIEVE'
    ataqueAleatorioEnemigo()
}

function quieroUnNumero() {
    var numerito
    if (ataqueJugador == 'FUEGO') {
        numerito = '1'
    } else if (ataqueJugador == 'AGUA') {
        numerito = '2'
    } else {
        numerito = '3'
    }
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'NIEVE'
    }

    crearMensaje()
}

function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu guerrero atacó con ' + ataqueJugador + ', el guerrero del enemigo atacó con ' + ataqueEnemigo + numerito

    sectionMensajes.appendChild(parrafo)
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)