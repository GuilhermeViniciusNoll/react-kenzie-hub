import logo from "../assets/Logo.svg"
import { Nav } from "../style/NavBar.js"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../style/Header.js"
import { SectionDashboard } from "../style/SectionDashboard.js"
import { api } from "../services/api.js";

export function DashboardPage() {

    const navigate = useNavigate()

    const [user, setUser] = useState({ name: '', courseModule: '' })
    console.log(user)

    useEffect(() => {
        const token = localStorage.getItem("@token")
        const id = JSON.parse(localStorage.getItem("@userId"))
        if (!token) {
            navigate("/")
        } else {
            const requestUser = async () => {
                const { data } = await api.get(`/users/${id}`);
                setUser({ name: data.name, courseModule: data.course_module })
            }
            requestUser()
        }

    }, [])

    const exit = () => {
        localStorage.removeItem("@userId");
        localStorage.removeItem("@token");
        toast("Deslogando!")
        setTimeout(() => {
            navigate("/")
        }, 3000);
    }

    return (
        <>
            <Nav >
                <img src={logo} alt="Logo escrita KENZIE HUB em vermelho claro." />
                <button onClick={exit}>Sair</button>
            </Nav>
            <Header>
                <h1>{user.name}</h1>
                <p>{user.courseModule}</p>
            </Header>
            <SectionDashboard>
                <h1>Que pena! Estamos em desenvolvimento {":("}</h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </SectionDashboard>
        </>

    )
}