import React from 'react';


function Adivinanza(){
    let numIngresado = document.getElementById('txtIngresado').value;
    let num = Math.floor(Math.random()*(10-1)+1)
    if (numIngresado == num){
        alert(`felicidades, el numero era${num}`)
    }else{
        alert(`incorrecto, el numero era ${num}`)
    }
}


export default Adivinanza;