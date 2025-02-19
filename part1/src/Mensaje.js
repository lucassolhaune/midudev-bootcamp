const Mensaje = (props) =>{ //Props en React = a Parametros
        
    return <h1 style={{ color: props.color }}>
        {props.message}
        </h1>
  }
export default Mensaje;