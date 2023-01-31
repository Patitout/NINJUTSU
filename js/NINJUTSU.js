var ataqueJugador = document.getElementById("ataque")
var pc = aleatorio(1,3)

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+ min)
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

    seleccionarGuerreroPC()
}

/*Sirve para que la PC elija un campeon, y lo cambie en el texto
de momento los caampeones no tienen caracteristicas especiales
que puedan variar el resultado de un juego*/
function seleccionarGuerreroPC(jugada) {
    let PCrandy = aleatorio(1,6)
    let spanGuerroPC = document.getElementById("guerreroPC")
    if(PCrandy == 1){
        (spanGuerroPC.innerHTML = ' Lopez')
    } else if(PCrandy == 2){
        (spanGuerroPC.innerHTML = ' Zica')
    } else if(PCrandy == 3){
        (spanGuerroPC.innerHTML = ' Trunso')
    } else if(PCrandy == 4){
        (spanGuerroPC.innerHTML = ' Pato')
    } else if(PCrandy == 5){
        (spanGuerroPC.innerHTML = ' Peña')
    } else if(PCrandy == 6){
        (spanGuerroPC.innerHTML = ' Mati')
    }
}

function inciarJuego() {
    // Permite seleccionar un guerrero
    let botonGuerreroPlayer = document.getElementById('boton-guerrero')
    botonGuerreroPlayer.addEventListener('click', seleccionarGuerrero)

    /*Escucha cuando se elige un ataque y activa las funciones
    tanto del ataqueFuego, para que cambie el valor de "ataqueJugador"
    y lo escriba en la parte  de combate
    como la funcion de "ataqueDePC" que toma el valor de "pc"
    para escribir en la parte de combate pc que eligio aleatoriamente el pc*/
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)
    botonFuego.addEventListener('click', ataqueDePC)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)
    botonAgua.addEventListener('click', ataqueDePC)
    let botonNieve = document.getElementById("boton-nieve")
    botonNieve.addEventListener('click', ataqueNieve)
    botonNieve.addEventListener('click', ataqueDePC)
    
    
    let victorias = 0
    let derrotas = 0

    while (victorias < 3 && derrotas < 3) {
        //pc = aleatorio(1,3)    
        //alert("Elegiste "+jugador)

        // COMBATE
        if (ataqueJugador == pc) {
        alert("⭕EMPATE⭕") 
        } else if (((ataqueJugador - pc) == 1) || ((ataqueJugador - pc) == -2)) {
        alert("✅GANASTE✅")
        victorias = victorias + 1
        } else {
        alert("❌PERDISTE❌")
        derrotas = derrotas + 1
        }
    } 
}

//Agarra el valor de pc y cambia el texto en la parte del combate de pc
function ataqueDePC() {
    let SpanAtaquePC = document.getElementById("ataquePC")
    if(pc == 1){
        (SpanAtaquePC.innerHTML = ' Fuego')
    } else if(pc == 2){
        (SpanAtaquePC.innerHTML = ' Agua')
    } else if(pc == 3){
        (SpanAtaquePC.innerHTML = ' Nieve')
    }
}

/*Cambia el valor de "ataqueJugador" asi después lo puedo usar en el sistema para saber si perdí o gané. 
También cambia el texto en la parte del combate*/
function ataqueFuego() {
    ataqueJugador = 1
    (ataque.innerHTML = ' Fuego')
}

function ataqueAgua() {
    ataqueJugador = 2
    (ataque.innerHTML = ' Agua')
}

function ataqueNieve() {
    ataqueJugador = 3
    (ataque.innerHTML = ' Nieve')
}

// Hace que cargue primero el html y una vez cargue carga recien la function de iniciar juego
window.addEventListener('load', inciarJuego)