import logo from "../../assets/Logo.svg"
import { Nav } from "../../style/NavBar.js"
import { Header } from "../../style/Header.js"
import { useUserContext } from "../../hooks/useUserContext.js"

export function DashboardPage() {

    const {user, userlogout} = useUserContext()

    return (
        <>
            <Nav>
                <img src={logo} alt="Logo escrita KENZIE HUB em vermelho claro." />
                <button onClick={userlogout}>Sair</button>
            </Nav>
            <Header>
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.course_module}</p>
                </div>
            </Header>
            <main>

            </main>
        </>
    )
}