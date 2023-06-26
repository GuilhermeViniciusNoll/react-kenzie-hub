import { styled } from "styled-components";
import { modelPlaceholder, modelLabel } from "../../../../style/globalStyle.js"

export const InternalModalStyled = styled.div`
   width: 100%;
   max-width: 369px;
   border-radius: 3px;

   .fakeInput{
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
   }

   .fakeInput > label{ 
      ${modelLabel}
      color: var(--grey0);}

   .fakeInput > p{
      ${modelPlaceholder}
      color: var(--grey1);
      background-color: var(--grey2);
      width: 100%;
      height: 48px;
      border-radius: 3px;
      padding: 0px 13px;
      border: 1px solid transparent;
      display: flex;
      justify-content: start;
      align-items: center;
   }
`