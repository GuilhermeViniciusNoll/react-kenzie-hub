import { InputDefault } from "../Input/index.jsx"
import { FormDefaultStyled } from "../../style/Form.js"
import { ContainerButton } from "../ContainerButton/index.jsx"
import { api } from "../../services/api.js"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { LoginSchema } from "./formLoginSchema.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

export function FormLogin({ setUser }) {

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(LoginSchema),
    })

    const navigate = useNavigate()

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

    const submit = async (data) => {
        await userLogin(data)
    }

    return (
        <FormDefaultStyled onSubmit={handleSubmit(submit)}>
            <div className="containerForm">
                <h1>Login</h1>
                <div className="containerInputs">
                    <InputDefault register={register("email")} id="Email" placeholder="Digite aqui seu email" type="text" />
                    <InputDefault register={register("password")} id="Senha" placeholder="Digite aqui sua senha" type="password" />
                    <ContainerButton />
                </div>
            </div>
        </FormDefaultStyled>
    )
}
