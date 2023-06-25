import logo from "../../assets/Logo.svg"
import { Nav } from "../../style/NavBar.js"
import { Link } from "react-router-dom"
import { FormRegister } from "../../components/componentsPageRegister/FormRegister/index.jsx"

export function RegisterPage() {

    return (
        <>
            <Nav page="register" >
                <img src={logo} alt="Logo escrita KENZIE HUB em vermelho claro." />
                <Link className="buttonRedirection" to="/">Voltar</Link>
            </Nav>
            <main>
                <FormRegister />
            </main>
        </>
    )
}