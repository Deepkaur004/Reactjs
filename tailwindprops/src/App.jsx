import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name : "Deep",
    age : 21
  }

  let myArr = [12,23,43,54]

  return (
    <>
      <Card userName="Deep" btnText = "View Profits"/>
      <Card userName="Gullu" />
    </>
  )
}

export default App
