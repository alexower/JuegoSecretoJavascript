let intentos =  0;
let numeroRamdom = 0;
let listaNumeros = [];
let numeroMaximo = 10;
console.log (numeroRamdom);

function VerificarNumero() {
    let numeroUsuario = parseInt(document.getElementById("EntradaNumero").value);
    console.log (numeroUsuario);
    console.log (intentos);
    console.log (numeroUsuario === numeroRamdom);
    if (numeroUsuario === numeroRamdom) {
        AsignarTexto('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez':'veces'}!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario > numeroRamdom){
            AsignarTexto('p', " el numero es menor ");
        }else{
            AsignarTexto('p', "el numero es mayor ");
        }
    }
    intentos++;
    LimpiarCaja();
}

function LimpiarCaja() {
    document.getElementById('EntradaNumero').value = '';
}

function AsignarTexto (element, text) {
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = text;
}

function CondicionesIniciales(){
    AsignarTexto('h1', 'juego del numero secreto !');
    AsignarTexto ('p', 'Indica un numero del 1 al 10'); 
    numeroRamdom = GenerarNumeroRamdom();
    intentos = 1;
}

function GenerarNumeroRamdom() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log (listaNumeros);
   
    if (listaNumeros.length == numeroMaximo) {
        AsignarTexto('p', 'Ya no hay mas numeros disponibles');
    }else{
    //si el numero sorteado esta en la list
        if (listaNumeros.includes(numeroGenerado)) {
            return GenerarNumeroRamdom();
        }else {
            listaNumeros.push(numeroGenerado); 
            return numeroGenerado;
        }
    }
}

function reiniciarGame() {
    //limpiar caja
    LimpiarCaja(); 
    //condiciones iniciales
    CondicionesIniciales (); 
    // desablitar boton de reiniciar juego
    document.querySelector("#reiniciar").setAttribute ("disabled",'true');
}

CondicionesIniciales(); 
