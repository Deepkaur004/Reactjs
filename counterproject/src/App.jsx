import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  function addValue() {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  }

  function removeValue() {
    counter = counter - 1
    if (counter <= 0) {
      counter = 0;
      setCounter(0);
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter project start</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Increase Value {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
