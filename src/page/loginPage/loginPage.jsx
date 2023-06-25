import logo from "../../assets/Logo.svg"
import { FormLogin } from "../../components/componentsPageLogin/FormLogin/index.jsx"
import { Nav } from "../../style/NavBar.js"


export function LoginPage() {

    return (
        <>
            <Nav page="login">
                <img src={logo} alt="Logo escrita KENZIE HUB em vermelho claro." />
            </Nav>
            <main>
                <FormLogin />
            </main>
        </>
    )
}

