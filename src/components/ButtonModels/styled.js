import { styled, css } from "styled-components";

export const Button = styled.button`
    width: 100%;
    height: 38px;
    background-color: var(--colorPrimary);
    color: white;
    border-radius: 4px;

    &:hover{
        background-color: var(--colorPrimaryFocus);
    }

    ${({ styles }) => {
        if (styles === "disable") {
            return css`
            background-color: var(--colorPrimaryDisable);
            `
        }
    }}

`