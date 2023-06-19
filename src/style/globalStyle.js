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

export const modelLabel = css`
    font-weight: var(--weight1);
    font-size: var(--size1);
`

export const modelPlaceholder = css`
    font-weight: var(--weight1);
    font-size: var(--size2);
    line-height: var(--lineHeight4);
`

export const modelButtonDefault = css`
    font-weight: var(--weight2);
    font-size: var(--size2);
    line-height: var(--lineHeight4);
`