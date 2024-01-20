import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button className="outline-none px-4 py-3 rounded-3xl text-white" style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")} >Olive</button>
            <button className="outline-none px-4 py-3 rounded-3xl bg-red-500 text-white" onClick={() => setColor("red")} >Red</button>
            <button className="outline-none px-4 py-3 rounded-3xl bg-purple-500 text-white" onClick={() => setColor("purple")} >Purple</button>
            <button className="outline-none px-4 py-3 rounded-3xl bg-green-500 text-white" onClick={() => setColor("green")} >Green</button>
            <button className="outline-none px-4 py-3 rounded-3xl bg-black text-white" onClick={() => setColor("black")} >Black</button>
            <button className="outline-none px-4 py-3 rounded-3xl bg-blue-500 text-white" onClick={() => setColor("blue")} >Blue</button>
            <button className="outline-none px-4 py-3 rounded-3xl bg-yellow-500 text-white" onClick={() => setColor("yellow")} >Yellow</button>
            <button className="outline-none px-4 py-3 rounded-3xl bg-pink-500 text-white" onClick={() => setColor("pink")}>Pink</button>
            <button className="outline-none px-4 py-3 rounded-3xl bg-orange-500 text-white" onClick={() => setColor("orange")}>orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
