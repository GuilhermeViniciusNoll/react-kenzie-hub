import { DivContainerSelect } from "./styled.js"

export function SelectDefault({ id, label, register }) {

    return (
        <DivContainerSelect>
            <label>{label}</label>
            <select {...register} id={id}>
                <option selected value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
        </DivContainerSelect>
    )
}
