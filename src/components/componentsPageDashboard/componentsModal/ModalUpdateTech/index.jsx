import { useModalContext } from "../../../../hooks/useModalContext.js"
import { FormStyledDefault } from "../../../../style/Form.js"
import { SelectDefault } from "../../../Select/index.jsx"
import { InternalModalStyled } from "./styled.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { modalSchema } from "./formUpdateTechSchema.js"
import { Navigate } from "react-router-dom"

export function ModalUpdateTech() {

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(modalSchema),
    })

    const { setModalOpen, techSelect, editTech, deleteTech } = useModalContext()

    const listOptions = [
        "Iniciante",
        "Intermediário",
        "Avançado"
    ]

    const closeModal = () => {
        setModalOpen(false)
    }

    const submit = async (formData) => {
        const newData = editTech(techSelect.id, formData)
        if (newData) {
            setModalOpen(false)
            setTimeout(() => {
                window.location.reload()
            }, 3000)
        }
    }

    const HandleDeleteTech = () => {
        deleteTech(techSelect.id)
        setModalOpen(false)
        setTimeout(() => {
            window.location.reload()
        }, 3000)

    }

    return (
        <InternalModalStyled>
            <FormStyledDefault onSubmit={handleSubmit(submit)}>
                <header>
                    <h2>Cadastrar Tecnologia</h2>
                    <p onClick={closeModal}>X</p>
                </header>
                <div className="containerData">
                    <div className="fakeInput">
                        <label>Nome</label>
                        <p>{techSelect.title}</p>
                    </div>
                    <SelectDefault register={register("status")} id="status" label="Selecionar Status" listOptions={listOptions} />
                    <div className="containerButton">
                        <button className="buttonPrimary" type="submit">Salvar Alterações</button>
                        <button className="buttonGrey" onClick={HandleDeleteTech}>Excluir</button>
                    </div>
                </div>
            </FormStyledDefault>
        </InternalModalStyled>
    )
}