import { DivContainerSelect } from "./styled.js"

export function SelectDefault({ id, label, register, listOptions }) {

    return (
        <DivContainerSelect>
            <label>{label}</label>
            <select {...register} id={id}>
                {listOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </DivContainerSelect>
    )
}
