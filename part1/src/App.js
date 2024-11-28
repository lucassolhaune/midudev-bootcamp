import { Fragment } from 'react';
import './App.css';
import Mensaje from './Mensaje';

const Description = () =>{
  return(
    <p>Esta es la APP del curso del bootcamp </p>
  );
}

const App = () => {
  return(
    
    /*Esto es un Fragment. Sirve para envolver lo que 
    querramos renderizar en React sin necesidad de crear un elemento en el HTML*/      
    <>
      {/*componente con llave que seria "COLOR" y valor que seria "message"*/}
      <Mensaje color ="red" message ="Estamos trabajando"/>
      {/*componente con llave que seria "COLOR" y valor que seria "message"*/}
      <Mensaje color ="green" message ="en un curso"/>
      {/*componente con "llave" que seria "COLOR" y "valor" que seria "message"*/}
      <Mensaje color ="yellow" message ="de React"/> 
      {/*Esto es un componente*/}
      <Description /> 
    </>

  );
}

export default App;
