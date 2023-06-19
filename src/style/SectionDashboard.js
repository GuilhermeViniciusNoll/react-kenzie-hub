import { styled } from "styled-components";
import { modelH1, modelPlaceholder } from "./globalStyle.js";

export const SectionDashboard = styled.section`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    width: 100%;
    height: 118px;

    h1{
        ${modelH1}
    }
    
    p{
        ${modelPlaceholder}
        color: var(--grey1);
    }
`