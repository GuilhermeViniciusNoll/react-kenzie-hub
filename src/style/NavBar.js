import { styled, css } from "styled-components";

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;
    gap: 25px;
    flex-wrap: wrap;

    button, .buttonRedirection{
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--grey3);
        color: white;
        width: 100%;
        max-width: 80px;
        height: 30px;
        border-radius: 4px;
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
            max-width: 430px;
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