import { styled } from "styled-components";
import { modelH1, modelPlaceholder } from "./globalStyle.js";

export const SectionDashboard = styled.section`
    color: white;
    display: flex;
    width: 100%;
    max-width: 1050px;
   
    h1{
        ${modelH1}
    }
    
    p{
        ${modelPlaceholder}
        color: var(--grey1);
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
    }
`