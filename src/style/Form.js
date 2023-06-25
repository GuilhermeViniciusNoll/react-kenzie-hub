import { styled } from "styled-components";
import { modelH1 } from "../style/globalStyle.js"

export const FormStyledDefault = styled.form`
    background-color: var(--grey3);
        padding: 35px 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        width: 100%;
        max-width: 369px;
        border-radius: 3px;
    
    h1{
        color: var(--grey0);
        ${modelH1}
    }

    p{
        color: var(--grey1);
        font-weight: var(--weight2);
        font-size: var(--size1);
        line-height: var(--lineHeight1);
        color: var(--grey1);
    }

     .containerData{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 25px;
    }

    
`