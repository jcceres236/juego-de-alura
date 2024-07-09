/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

//console.log (numeroSecreto); se cambio la posicion para juntarlo con el boton

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log (typeof(numeroDeUsuario));
    console.log (numeroSecreto);
    console.log (typeof(numeroSecreto));
    console.log (numeroDeUsuario); 
    console.log (numeroDeUsuario === numeroSecreto); **se aplicara logica** lo anterior era solo validacion */
    //let numeroUsuario = document.querySelector('input')
    //alert('click desde el botón');
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //EL usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
    /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';*/
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //return Math.floor(Math.random()*10)+1;
    /*let numeroSecreto = Math.floor(Math.random()*10)+1; (posicionamos let al principio como variable)
    return numeroSecreto;*/
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Enhorabuena! ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //reiniciar caja
    limpiarCaja();
    //Indicar numerodeintervalo de número
    /*mensajeIniciales(); Se modifica en condiciones*/
    //Generar el numero aleatorio
    /*numeroSecreto = generarNumeroSecreto(); se corre ya que se llama como mensajes iniciale*/
    //Iniciarlizar el número de intentos
    condicionesIniciales();
    //Desahabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();