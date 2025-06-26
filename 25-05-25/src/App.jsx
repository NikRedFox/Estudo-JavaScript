import { useState } from "react";

// const App =()=>{

//   // const [contador, setContador] = useState(0)

//   // const incrementar = () =>{
//   //   setContador(contador+1)    
//   //   console.log(contador)
//   // }

//   // let nome

//   const[nome, setNome] = useState("Nikolas")
//   const[especie, setEspecie] = useState("")

//   const buscar=()=>{
//     fetch("https://rickandmortyapi.com/api/character")
//     .then((res) => res.json())
//     .then((data) =>{
//       console.log(data.results[0].name)
//       setNome(data.results[0].name)
//       setEspecie(data.results[0].species)
//     })

//     .catch((err) =>{
//       console.log(err)
//     })
//   }

//   return(
//     <div>
//       <p>Nome: {nome}</p>
//       <p>Especie: {especie}</p>
//       <button onClick={buscar}>Incrementar</button>
//     </div>  
//   )
// }

// export default App

import './App.css'

const Conselho =()=>{
  const[conselho, setConselho] = useState()

  const buscar =()=>{
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) =>{
      console.log(data.slip.advice)
      setConselho(data.slip.advice)
    })
  }


  return(
    <>
      <main className="glass-card">
        <h1>💡 Conselho do Dia</h1>
        <p id="advice">Clique no botão abaixo para receber um conselho aleatório!</p>
        <p id="conselho-gerado">{conselho}</p>
        <button onClick={buscar} id="conselho">Gerar Conselho</button>
      </main>
    </>
  )
}

export default Conselho