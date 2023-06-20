import { styled } from "styled-components";
import { modelStyleButtonPrimary } from "../../style/globalStyle.js";

export const DivContainerButton = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        width: 100%;
    }

    div > p{
        font-weight: var(--weight3);
        font-size: var(--size1);
        line-height: var(--lineHeight1);
        color: white;
    }

    button{
        ${modelStyleButtonPrimary}
    }

    .buttonRederection{
        width: 100%;
        height: 48px;
        background-color: var(--grey1);
        color: var(--grey0);
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: 4px;
    }
`