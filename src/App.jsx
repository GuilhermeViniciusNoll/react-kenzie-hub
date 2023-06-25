import { RoutesMain } from "./routes/routesMain.jsx"
import { ResetStyle } from "./style/reset.js"
import { GlobalStyled } from "./style/globalStyle.js"
import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {

  const [user, setUser] = useState({})

  return (
    <>
      <GlobalStyled />
      <ResetStyle />
      <RoutesMain user={user} setUser={setUser} />
      <ToastContainer theme="dark" />
    </>
  )
}

export default App
