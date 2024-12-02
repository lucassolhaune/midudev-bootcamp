import './App.css';
import { useState } from 'react';

const App = (props) => {
  const contador = useState(0); //contador inicializado en cero

  const valueContador = contador[0]; //valor del contador
  const updateContador = contador[1];   //actualizacion del contador

  // Con este intervalo estamos diciendole que cada dos segundos 
  // actulice el contador que tenemos
  setInterval(() =>{
    updateContador(valueContador + 1);
  }, 2000);

  return(
    <div>
      {contador}
    </div>
  );
}

export default App;
