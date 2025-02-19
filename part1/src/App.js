//NUNCA crear componentes dentro de otro componente

/**
 * Forma one line. Extraes la propiedad.
 * const Title = (course) => <h1>{course}</h1>
 */
const Title = (props) => {
  return <h1>{props.course}</h1>
}

//Componente App
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  //EJERCICIO DE PRUEBA
  return (
    <div>
      <Title course =  {course}/>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App