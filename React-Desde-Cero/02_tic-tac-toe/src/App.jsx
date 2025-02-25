import { use, useState } from "react"

const TURNS = {
  x : 'x',
  o : 'o'
}

const Square = ({children, updateBoard,index}) => {
  return(
    <div className="square">
      {children}
    </div> 
  )
}

function App () {
const [board, setBoard] = useState(Array(9).fill(null))
console.log(board)

  return (
    <main className="board"> 

      <h1>tic tac toe</h1>

      <section className="game">  
        {
          board.map((_, index) =>{
            return (
            <Square
            key={index}
            index = {index}
            >

            </Square>
            )
          })
        }    
      </section>

    </main>
  ) 
}
export default App
