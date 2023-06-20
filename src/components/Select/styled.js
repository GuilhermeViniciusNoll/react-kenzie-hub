import { styled } from "styled-components";
import { modelLabel, modelPlaceholder } from "../../style/globalStyle.js";

export const DivContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    label{
        ${modelLabel}
        color: var(--grey0);
    }

    select{
        ${modelPlaceholder}
        color: var(--grey1);
        background-color: var(--grey2);
        width: 100%;
        height: 38px;
        border-radius: 3px;
        padding: 0px 13px;
        border: 1px solid transparent;
    }

    select:hover{
        border: 1px solid var(--grey0);
    }
`