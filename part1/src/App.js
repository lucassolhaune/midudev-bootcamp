//Componente App. NUNCA crear componentes dentro de otro componente
const App = () => {
  const course = 'Half Stack application development'
  const title1 = 'Retomando bootcamp midudev'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  //EJERCICIO DE PRUEBA
  return (
    <div>
      <h1>{course}</h1>
      <h2>{title1}</h2>
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