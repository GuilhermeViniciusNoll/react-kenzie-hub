import { ButtonModels } from "../ButtonModels/index.jsx"
import { DivContainerButton } from "./styled.js"
import { Link } from "react-router-dom"

export function ContainerButton() {

    return (
        <DivContainerButton>
            <ButtonModels type="submit" >Entrar</ButtonModels>
            <div>
                <p>Ainda não possui uma conta ?</p>
                <Link className="buttonRederection" to="/register">Cadastre-se</Link>
            </div>
        </DivContainerButton>
    )
}
