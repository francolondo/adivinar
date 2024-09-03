import React from 'react';
import Adivinanza from './banco';
import image from './imgs/signo-pregunta.png';

function Pagina(){
  return (
    <div className='App'>

    <div className='divjuego'>
      <img src={image} class='pregunta'></img>
    < h1 className='titulo'>Bienvenido a mi juego</h1>
    </div>
      <p>Ingresa tu prediccion del 1 al 10</p>
      <input type='number' placeholder='Ingrese un número' id='txtIngresado'></input>
      <br></br>
      <button onClick={Adivinanza}>Comprobar</button>
    </div>
  )
}

export default Pagina;