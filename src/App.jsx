import Login from "./components/Login"
import Register from "./components/Register"
import { useState } from "react"

const App = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div id="main-container">
      {!toggle
        ? <Login fn={setToggle} />
        : <Register fn={setToggle} />}
    </div>
  )
}

export default App