import { styled } from "styled-components";

export const DivStyledContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        width: 100%;
    }

    div > p{
        font-weight: var(--weight2);
        font-size: var(--size1);
        line-height: var(--lineHeight1);
        color: var(--grey1);
    }

    .buttonGrey{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }
`