import UserContextProvider from './Context/userContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>Dj sharanam Bhaje bhaje</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
      
  )
}

export default App
