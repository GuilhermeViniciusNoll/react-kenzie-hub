import { styled } from "styled-components";
import { modelH2, modelStyleBlackButton, modelLabel } from "../../../style/globalStyle";


export const SectionTechStyled = styled.section`

    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    div{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    div > h2{
        color: var(--grey0);
        ${modelH2}
    }

    div > button{
        max-width: 32px;
        ${modelStyleBlackButton}
    }

    ul{
        border-radius: 4px;
        width: 100%;
        height: 450px;
        background-color: var(--grey3);
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    ul > li{
        list-style: none;
        background-color: var(--grey4);
        width: 100%;
        height: auto;
        min-height: 50px;
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    ul > li:hover{
        background-color: var(--grey2);
    }

    ul > li:hover > p {
        color: var(--grey0);
    }

    ul > li > h2{
        color: var(--grey0);
        ${modelH2}
    }

    ul > li > p{
        ${modelLabel}
        color: var(--grey2);
    }
`