import { RoutesMain } from "./routes/routesMain.jsx";
import { ContainerMain } from "./style/ContainerMain.js";
import { ResetStyle } from "./style/reset.js";
import { GlobalStyled } from "./style/globalStyle.js";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <GlobalStyled />
      <ResetStyle />
      <ContainerMain>
        <RoutesMain />
      </ContainerMain>
      <ToastContainer />
    </>
  )
}

export default App
