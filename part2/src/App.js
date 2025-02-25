import './App.css';
import { useState } from 'react';

const App = (props) => {
  const [contador, setContador] = useState(0); 

  console.log("render");  

  //Boton para incrementar el valor
  const handleClick = () => {
    setContador(contador + 1);
  }
  
  const handleClickReset = () => {
    setContador(0);
  }

  const decrementClick = () => {
    setContador (contador - 1);
  }

  const isEven = contador % 2 === 0;

  return(
    <div>
      <p>El valor del contador es: </p>
      <h1> {contador} </h1>
      <p>{isEven ? "Es par" : "Es impar"}</p>
      <button 
        onClick = {handleClick} >
        Increment
      </button>

      <button 
        onClick = {handleClickReset} >
        Reset
      </button>

      <button 
        onClick = {decrementClick} >
        Decrement
      </button>
    </div>
  );
}

export default App;
