import { styled } from "styled-components";

export const DivContainerButton = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        width: 100%;
    }

    div > p{
        font-weight: var(--weight3);
        font-size: var(--size1);
        line-height: var(--lineHeight1);
        color: white;
    }

    .buttonRederection{
        width: 100%;
        height: 38px;
        background-color: var(--grey1);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: 4px;
    }
`