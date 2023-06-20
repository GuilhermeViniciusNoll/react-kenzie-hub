import { DivContainerButton } from "./styled.js"
import { Link } from "react-router-dom"

export function ContainerButton() {

    return (
        <DivContainerButton>
            <button type="submit" >Entrar</button>
            <div>
                <p>Ainda não possui uma conta ?</p>
                <Link className="buttonRederection" to="/register">Cadastre-se</Link>
            </div>
        </DivContainerButton>
    )
}
