import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#055A69")

  return (
    <>
    <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
           onClick={() => setColor("#690505")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#690505"}}>Red
          </button>
          <button 
           onClick={() => setColor("#2FA94F")} 
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#2FA94F"}}>Green
          </button>
          <button 
           onClick={() => setColor("#267BD1")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#267BD1"}}>Blue
          </button>
          <button 
           onClick={() => setColor("purple")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"purple"}}>Purple
          </button>
          <button 
           onClick={() => setColor("black")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"black"}}>Black
          </button>
          <button 
           onClick={() => setColor("grey")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"grey"}}>Grey
          </button>
          <button 
           onClick={() => setColor("#2299c4")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#2299c4"}}>Curious Blue
          </button>
           <button 
           onClick={() => setColor("#C7509E")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#C7509E"}}>Mulberry
          </button>
          <button 
           onClick={() => setColor("#7F3AAC")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#7F3AAC"}}>Grape
          </button>
          <button 
           onClick={() => setColor("#38B7CB")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
           style={{backgroundColor:"#38B7CB"}}>Moonstone
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
