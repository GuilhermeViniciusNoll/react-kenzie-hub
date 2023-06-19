import { styled } from "styled-components";
import { modelH1, modelLabel } from "./globalStyle.js";

export const Header = styled.header`
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px var(--grey2);
    border-top: solid 1px var(--grey2);
    width: 100%;
    height: 118px;

    h1{
        ${modelH1}
    }
    
    p{
        ${modelLabel}
        color: var(--grey2);
    }
`