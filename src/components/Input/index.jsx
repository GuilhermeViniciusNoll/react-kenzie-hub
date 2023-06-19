import { DivContainerInput } from "./styled.js"

export function InputDefault({ type, placeholder, id, register }) {

    return (
        <DivContainerInput>
            <label htmlFor={id}>{id}</label>
            <input {...register} id={id} type={type} placeholder={placeholder} />
        </DivContainerInput>
    )
}
