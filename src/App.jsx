import { useState } from 'react'
function App() {
  const [color, setColor] = useState("#e11d48")

  return (
   <div className ="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=>{setColor("#38bdf8")}} className= "outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#38bdf8"}}>Blue</button>
        <button onClick={()=>{setColor("white")}} className= "outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "white"}}>White</button>
        <button onClick={()=>{setColor("gold")}} className= "outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "gold"}}>Gold</button>
        <button onClick={()=>{setColor("#7c3aed")}}className= "outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#7c3aed"}}>Purple</button>
        <button onClick={()=>{setColor("#84cc16")}}className= "outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#84cc16"}}>Lime Green</button>
        </div> 
      </div>
   </div>
  )
}

export default App
