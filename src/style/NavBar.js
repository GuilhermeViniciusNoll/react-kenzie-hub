import { styled, css } from "styled-components";
import { modelStyleBlackButton } from "../style/globalStyle.js"

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;
    padding: 0px 15px;
    gap: 25px;
    flex-wrap: wrap;

    button, .buttonRedirection{
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 80px;
        ${modelStyleBlackButton}
    }

    button:hover, .buttonRedirection:hover{
        background-color: var(--grey2);
    }
    
    ${({ page }) => {
        if (page == "login") {
            return css`
            justify-content: center;
            `
        } else if (page == "register") {
            return css`
            max-width: 384px;
            justify-content: space-between;
            `
        } else {
            return css`
            max-width: 1050px;
            justify-content: space-between;
            `
        }
    }}
`