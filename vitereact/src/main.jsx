import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h1>Custom react app</h1>
  )
}

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement("a", {
  href: "https://www.google.com",
  target: "_blank"
}, "Click me to visit google");

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp />
  anotherElement
)
