import { styled } from "styled-components";
import { modelLabel, modelPlaceholder } from "../../style/globalStyle.js";

export const DivContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    label{
        ${modelLabel}
        color: var(--grey0);
    }

    input{
        ${modelPlaceholder}
        color: var(--grey0);
        background-color: var(--grey2);
        width: 100%;
        height: 38px;
        border-radius: 3px;
        padding: 0px 13px;
        border: 1px solid transparent;
    }

    input::placeholder{
        color: var(--grey1);
    }

    input:hover{
        border: 1px solid var(--grey0);
    }
`