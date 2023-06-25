import { FormStyledDefault } from "../../../style/Form.js"
import { InputDefault } from "../../Input/index.jsx"
import { ContainerButton } from "../ContainerButton/index.jsx"
import { useForm } from "react-hook-form"
import { useUserContext } from "../../../hooks/useUserContext.js"
import { LoginSchema } from "./formLoginSchema.js"
import { zodResolver } from "@hookform/resolvers/zod"

export function FormLogin() {

    const { userLogin } = useUserContext()

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(LoginSchema),
    })

    const submit = async (data) => {
        await userLogin(data)
    }

    return (
        <FormStyledDefault onSubmit={handleSubmit(submit)}>
            <h1>Login</h1>
            <div className="containerData">
                <InputDefault register={register("email")} id="Email" placeholder="Digite aqui seu email" type="text" />
                <InputDefault register={register("password")} id="Senha" placeholder="Digite aqui sua senha" type="password" />
                <ContainerButton />
            </div>
        </FormStyledDefault>
    )
}
