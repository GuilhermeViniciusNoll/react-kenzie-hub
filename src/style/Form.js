import { styled } from "styled-components";
import { modelH1 } from "../style/globalStyle.js"

export const FormDefaultStyled = styled.form`
    padding: 0px 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    
    h1{
        color: var(--grey0);
        ${modelH1}
    }

    .containerForm{
        background-color: var(--grey3);
        padding: 35px 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        width: 100%;
        max-width: 400px;
        border-radius: 3px;
    }

    .containerInputs{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`