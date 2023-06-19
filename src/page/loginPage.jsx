import { useEffect } from "react";
import logo from "../assets/Logo.svg"
import { FormLogin } from "../components/FormLogin/index.jsx"
import { Nav } from "../style/NavBar.js"
import { useNavigate } from "react-router-dom";

export function LoginPage() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@token")
        if (token) {
            navigate("/dashboard")
        }
    }, [])

    return (
        <>
            <Nav type="center">
                <img src={logo} alt="Logo escrita KENZIE HUB em vermelho claro." />
            </Nav>
            <FormLogin />
        </>
    )
}

