import logo from "../assets/Logo.svg"
import { Nav } from "../style/NavBar.js"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { FormRegister } from "../components/FormRegister/index.jsx";

export function RegisterPage() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@token")
        if (token) {
            navigate("/dashboard")
        }
    }, [])

    return (
        <>
            <Nav >
                <img src={logo} alt="Logo escrita KENZIE HUB em vermelho claro." />
                <Link className="buttonRedirection" to="/">Voltar</Link>
            </Nav>
            <FormRegister/>
        </>
    )
}