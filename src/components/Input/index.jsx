import { DivContainerInputStyled } from "./styled.js"

export function InputDefault({ type, placeholder, id, register }) {

    return (
        <DivContainerInputStyled>
            <label htmlFor={id}>{id}</label>
            <input {...register} id={id} type={type} placeholder={placeholder} />
        </DivContainerInputStyled>
    )
}
