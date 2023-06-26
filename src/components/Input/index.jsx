import { DivContainerInputStyled } from "./styled.js"

export function InputDefault({ type, placeholder, id, register, label }) {

    return (
        <DivContainerInputStyled>
            <label htmlFor={id}>{label}</label>
            <input {...register} id={id} type={type} placeholder={placeholder} />
        </DivContainerInputStyled>
    )
}
