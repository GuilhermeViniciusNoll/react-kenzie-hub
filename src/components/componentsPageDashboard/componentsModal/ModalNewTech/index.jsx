import { useTechContext } from "../../../../hooks/useTechContext.js"
import { FormStyledDefault } from "../../../../style/Form.js"
import { InputDefault } from "../../../Input/index.jsx"
import { SelectDefault } from "../../../Select/index.jsx"
import { InternalModalStyled } from "./styled.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { modalSchema } from "./formNewTechSchema.js"

export function ModalNewTech() {

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(modalSchema),
    })
    const { setModalOpen, newTech } = useTechContext()

    const listOptions = [
        "Iniciante",
        "Intermediário",
        "Avançado"
    ]

    const closeModal = () => {
        setModalOpen(false)
    }

    const submit = async (formData) => {
        const newData = await newTech(formData)
        if (newData) {
            setModalOpen(false)
        }
    }

    return (
        <InternalModalStyled>
            <FormStyledDefault onSubmit={handleSubmit(submit)}>
                <header>
                    <h2>Cadastrar Tecnologia</h2>
                    <p onClick={closeModal}>X</p>
                </header>
                <div className="containerData">
                    <InputDefault register={register("title")} type="text" id="title" label="Nome" placeholder="Nome da tecnologia" />
                    <SelectDefault register={register("status")} id="status" label="Selecionar Status" listOptions={listOptions} />
                    <button className="buttonPrimary" type="submit">Cadastrar Tecnologia</button>
                </div>
            </FormStyledDefault>
        </InternalModalStyled>
    )
}