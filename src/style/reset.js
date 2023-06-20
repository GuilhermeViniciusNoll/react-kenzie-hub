import { createGlobalStyle } from "styled-components"

export const ResetStyle = createGlobalStyle`

*{
    margin: 0px;
    border: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

html,
body{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
}

#root{
    display: flex;
    justify-content: center;
    margin: 50px 0px 100px;
    width: 100%;
}

body{
    background-color: var(--grey4);
}

main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inContainerMain{
    padding: 0px 15px;
}

`