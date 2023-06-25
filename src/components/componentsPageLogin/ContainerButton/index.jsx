import { DivStyledContainer } from "./styled.js"
import { Link } from "react-router-dom"

export function ContainerButton() {

    return (
        <DivStyledContainer>
            <button className="buttonPrimary" type="submit" >Entrar</button>
            <div>
                <p>Ainda não possui uma conta ?</p>
                <Link className="buttonGrey" to="/register">Cadastre-se</Link>
            </div>
        </DivStyledContainer>
    )
}
