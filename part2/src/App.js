import './App.css';
import { useState } from 'react';

const App = (props) => {
  const [contadorValue, updateContador] = useState(0); //contador inicializado en cero

  // Con este intervalo estamos diciendole que cada dos segundos 
  // actulice el contador que tenemos

  return(
    <div>
    <h1>El valor del contador es: </h1>
    <p> {contadorValue} </p>
    <h2>Magia de react</h2>  
    </div>
  );
}

export default App;
