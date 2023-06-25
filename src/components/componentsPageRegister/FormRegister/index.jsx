import { InputDefault } from "../../Input/index.jsx"
import { SelectDefault } from "../../Select/index.jsx"
import { FormStyledDefault } from "../../../style/Form.js"
import { api } from "../../../services/api.js"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { RegisterSchema } from "./formRegisSchema.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export function FormRegister() {

    const [select, setSelect] = useState([])

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(RegisterSchema),
    })

    const navigate = useNavigate()

    useEffect(() => {
        setSelect(["Primeiro módulo (Introdução ao Frontend)",
            "Segundo módulo (Frontend Avançado)",
            "Terceiro módulo (Introdução ao Backend)",
            "Quarto módulo (Backend Avançado)"])
    }, [])

    const userRegister = async (FormData) => {
        try {
            const { data } = await api.post("/users", FormData)
            toast.success("Conta criada com sucesso!", {
                autoClose: 2000,
                pauseOnHover: false
            })
            setTimeout(() => {
                navigate("/")
            }, 3000)
        } catch (error) {
            if (error.response.data.message == "Email already exists") {
                toast.error("Esse email já esta sendo utilizado!", {
                    autoClose: 3000,
                    pauseOnHover: false
                })
            } else {
                toast.error("Algo Deu errado!")
            }
        }
    }

    const submit = async (data) => {
        await userRegister(data)
    }

    return (
        <FormStyledDefault onSubmit={handleSubmit(submit)}>
            <h1>Crie sua conta</h1>
            <p>Rapido e grátis, vamos nessa</p>
            <div className="containerData">
                <InputDefault register={register("name")} id="Name" placeholder="Digite aqui seu nome" type="text" />
                <InputDefault register={register("email")} id="Email" placeholder="Digite aqui seu email" type="text" />
                <InputDefault register={register("password")} id="Senha" placeholder="Digite aqui sua senha" type="password" />
                <InputDefault register={register("confirm")} id="confirm" placeholder="Digite novamente sua senha" type="password" />
                <InputDefault register={register("bio")} id="bio" placeholder="Fale sobre você" type="text" />
                <InputDefault register={register("contact")} id="contact" placeholder="Opções de contato" type="text" />
                <SelectDefault register={register("course_module")} id="course_module" label="Selecione o modulo" listOptions={select} />
            </div>
            <button className="buttonDisableColor" type="submit" >Cadastrar</button>
        </FormStyledDefault>
    )
}
