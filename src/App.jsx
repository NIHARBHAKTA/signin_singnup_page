import Login from "./components/Login/login"
import Register from './components/Login/Register'
import { useState } from 'react'

const App = () => {

  const [Toggle, setToggle] = useState(0)

  return (

    <div id="main-container">

      {Toggle === 0 ? <Login fn={setToggle} /> : <Register fn={setToggle} />}

    </div>
  )
}

export default App
