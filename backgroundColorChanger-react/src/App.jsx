import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div style={{backgroundColor: color}} className="w-full h-screen relative transition-all">
        <div className="flex flex-wrap justify-center absolute inset-x-0 bottom-4">
          <div className="flex flex-wrap justify-center gap-3 px-8 py-3 rounded-full bg-white">
            <button onClick={() => setColor("red")} className="bg-red-700 text-white shadow-lg px-5 py-2 rounded-full cursor-pointer">
              Red  
            </button>    
            <button onClick={() => setColor("green")} className="bg-green-700 text-white shadow-lg px-5 py-2 rounded-full cursor-pointer">
              Green  
            </button>    
            <button onClick={() => setColor("blue")} className="bg-blue-700 text-white shadow-lg px-5 py-2 rounded-full cursor-pointer">
              Blue  
            </button>    
            <button onClick={() => setColor("olive")} className="bg-green-600 text-white shadow-md px-5 py-2 rounded-full cursor-pointer">
              Olive  
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
