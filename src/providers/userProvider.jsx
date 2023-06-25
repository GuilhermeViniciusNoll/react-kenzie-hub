import { createContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api.js"
import { toast } from "react-toastify"


export const UserContext = createContext({})

export function UserProvider({ children }) {

    const [user, setUser] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@token"))
        const id = JSON.parse(localStorage.getItem("@userId"))
        if (token && id) {
            const requestUser = async () => {
                try {
                    const { data } = await api.get(`/profile`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(data)
                    navigate("/dashboard")
                } catch (error) {
                    if (error.response.data.message == "Token inválido.") {
                        localStorage.removeItem("@userId")
                        localStorage.removeItem("@token")
                        navigate("/")
                        toast.error("Token inválido, faça o login novamente!", {
                            autoClose: 3000,
                            pauseOnHover: false
                        })
                    } else {
                        localStorage.removeItem("@userId")
                        localStorage.removeItem("@token")
                        navigate("/")
                        toast.error("Algo Deu errado!", {
                            autoClose: 3000,
                            pauseOnHover: false
                        })
                    }
                }
            }
            requestUser()
        } else {
            setUser(null)
            navigate("/")
        }
    }, [])

    const userLogin = async (FormData) => {
        try {
            const { data } = await api.post("/sessions", FormData)

            localStorage.setItem("@token", JSON.stringify(data.token))
            localStorage.setItem("@userId", JSON.stringify(data.user.id))
            setUser(data.user)
            toast.success("Login realizado com sucesso!", {
                autoClose: 2000,
                pauseOnHover: false
            })
            setTimeout(() => {
                navigate("/dashboard")
            }, 3000)

        } catch (error) {
            if (error.response.data.message == "Incorrect email / password combination") {
                toast.error("Senha ou Email incorreto, Por favor tente novamente!", {
                    autoClose: 3000,
                    pauseOnHover: false
                })
            } else {
                toast.error("Algo Deu errado!")
            }

        }
    }

    const userlogout = () => {
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
        <UserContext.Provider value={{ user, setUser, userLogin, userlogout }} >
            {children}
        </UserContext.Provider>
    )

}