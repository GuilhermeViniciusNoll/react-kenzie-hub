import { createGlobalStyle, css } from "styled-components"

export const GlobalStyled = createGlobalStyle`

:root{
    --colorPrimary: #FF577F;
    --colorPrimaryFocus: #FF427F;
    --colorPrimaryDisable: #59323F;

    --grey0: #F8F9FA;
    --grey1: #868E96;
    --grey2: #343B41;
    --grey3: #212529;
    --grey4: #121214;

    --colorSuccess: #3FE864;
    --coloNegative: #E83F5B;

    --weight4: 700;
    --weight3: 600;
    --weight2: 500;
    --weight1: 400;
    
    --size3: 1.125rem;
    --size2: 1rem;
    --size1: .75rem;
    
    --lineHeight5: 1.75rem;
    --lineHeight4: 1.625rem;
    --lineHeight3: 1.5rem;
    --lineHeight2: 1.375rem;
    --lineHeight1: 1.125rem;
}
`

export const modelH1 = css`
    font-weight: var(--weight4);
    font-size: var(--size3);
    line-height: var(--lineHeight5);
`

export const modelH2 = css`
    font-weight: var(--weight4);
    font-size: var(--size2);
    line-height: var(--lineHeight5);
`

export const modelLabel = css`
    font-weight: var(--weight1);
    font-size: var(--size1);
`

export const modelPlaceholder = css`
    font-weight: var(--weight1);
    font-size: var(--size2);
    line-height: var(--lineHeight4);
`

export const modelLetterButtonDefault = css`
    font-weight: var(--weight2);
    font-size: var(--size2);
    line-height: var(--lineHeight4);
`
export const modelStyleButtonDisable = css`
    ${modelLetterButtonDefault}
    background-color: var(--colorPrimaryDisable);
    color: var(--grey0);
    width: 100%;
    height: 48px;
    border-radius: 4px;
    padding: 0px 5px;
    
    &:hover{
        background-color: var(--colorPrimaryFocus);
    }
`

export const modelStyleButtonPrimary = css`
    ${modelLetterButtonDefault}
    background-color: var(--colorPrimary);
    color: var(--grey0);
    width: 100%;
    height: 48px;
    border-radius: 4px;
    padding: 0px 5px;
    
    &:hover{
        background-color: var(--colorPrimaryFocus);
    }
`

export const modelStyleGreyButton = css`
    ${modelLetterButtonDefault}
    background-color: var(--grey1);
    color: var(--grey0);
    width: 100%;
    height: 48px;
    border-radius: 4px;
    padding: 0px 5px;
    
    &:hover{
        background-color: var(--grey2);
    }
`

export const modelStyleBlackButton = css`
    ${modelLetterButtonDefault}
    border-radius: 4px;
    height: 30px;
    background-color: var(--grey3);
    color: var(--grey0);
    width: 100%;
    
    &:hover{
        background-color: var(--grey2);
    }
`
