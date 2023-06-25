import logo from "../../assets/Logo.svg"
import { Nav } from "../../style/NavBar.js"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { Header } from "../../style/Header.js"
import { api } from "../../services/api.js"

export function DashboardPage({ user, setUser }) {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@token")
        const id = JSON.parse(localStorage.getItem("@userId"))
        if (!token) {
            navigate("/")
        } else {
            if (user.name == undefined) {
                const requestUser = async () => {
                    const { data } = await api.get(`/users/${id}`)
                    setUser(data)
                }
                requestUser()
            }
        }
    }, [])

    const exit = () => {
        localStorage.removeItem("@userId")
        localStorage.removeItem("@token")
        toast.info("Deslogando!", {
            autoClose: 2000,
            pauseOnHover: false
        })
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }

    return (
        <>
            <Nav>
                <img src={logo} alt="Logo escrita KENZIE HUB em vermelho claro." />
                <button onClick={exit}>Sair</button>
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