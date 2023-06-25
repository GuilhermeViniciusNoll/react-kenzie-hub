import { styled } from "styled-components";
import { modelH1, modelLabel } from "./globalStyle.js";

export const Header = styled.header`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px var(--grey2);
    border-top: solid 1px var(--grey2);
    width: 100vw;
    height: 118px;
    margin-bottom: 30px;

    h1{
        ${modelH1}
    }
    
    p{
        ${modelLabel}
        color: var(--grey2);
    }

    div{
        width: 100%;
        max-width: 1050px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0px 15px;
        gap: 20px;
        justify-content: space-between;
    }
`