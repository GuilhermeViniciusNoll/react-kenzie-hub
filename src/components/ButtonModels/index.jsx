import { Button } from "./styled.js";

export function ButtonModels({ type, children }) {

    return (
        <Button type={type} >{children}</Button>
    )
}
