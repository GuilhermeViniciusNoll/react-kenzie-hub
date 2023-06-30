import { RoutesMain } from "./routes/routesMain.jsx"
import { ResetStyle } from "./style/reset.js"
import { GlobalStyled } from "./style/globalStyle.js"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { UserProvider } from "./providers/UserContext.jsx"

function App() {

  return (
    <>
      <GlobalStyled />
      <ResetStyle />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <ToastContainer theme="dark" />
    </>
  )
}

export default App
