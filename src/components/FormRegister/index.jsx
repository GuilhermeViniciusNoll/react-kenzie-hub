import { InputDefault } from "../Input/index.jsx"
import { FormDefaultStyled } from "../../style/Form.js"
import { api } from "../../services/api.js";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form"
import { RegisterSchema } from "./formRegisSchema.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DivContainerSelect } from "./styled.js"
import { ButtonModels } from "../ButtonModels/index.jsx";


export function FormRegister() {

    const [select, setSelect] = useState()

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(RegisterSchema),
    });

    const navigate = useNavigate()

    const userRegister = async (FormData) => {
        try {
            const { data } = await api.post('/users', FormData);
            console.log(data)
            toast.success("Conta criada com sucesso!", {
                autoClose: 2000,
                pauseOnHover: false
            })
            setTimeout(() => {
                navigate("/")
            }, 3000);
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
        const dataRequest = { ...data, course_module: select }
        console.log("aq", dataRequest)
        await userRegister(dataRequest)
    }

    return (
        <FormDefaultStyled onSubmit={handleSubmit(submit)}>
            <h1>Register</h1>
            <div className="containerInputs">
                <InputDefault register={register("name")} id="name" placeholder="Digite aqui seu nome" type="text" />
                <InputDefault register={register("email")} id="Email" placeholder="Digite aqui seu email" type="text" />
                <InputDefault register={register("password")} id="Senha" placeholder="Digite aqui sua senha" type="password" />
                <InputDefault register={register("confirm")} id="confirm" placeholder="Digite novamente sua senha" type="password" />
                <InputDefault register={register("bio")} id="bio" placeholder="Fale sobre você" type="text" />
                <InputDefault register={register("contact")} id="contact" placeholder="Opções de contato" type="text" />
                <DivContainerSelect>
                    <label>Selecionar módulo</label>
                    <select onChange={(event) => { setSelect(event.target.value) }} name="course_module" id="course_module">
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </select>
                </DivContainerSelect>
            </div>
            <ButtonModels styles='disable' type="submit" >Cadastrar</ButtonModels>
        </FormDefaultStyled>
    )
}
