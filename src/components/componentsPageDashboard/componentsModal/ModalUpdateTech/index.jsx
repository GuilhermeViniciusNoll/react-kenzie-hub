import { useTechContext } from "../../../../hooks/useTechContext.js"
import { FormStyledDefault } from "../../../../style/Form.js"
import { SelectDefault } from "../../../Select/index.jsx"
import { InternalModalStyled } from "./styled.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { modalSchema } from "./formUpdateTechSchema.js"
import { useUserContext } from "../../../../hooks/useUserContext.js"

export function ModalUpdateTech() {

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(modalSchema),
    })

    const { rechargeTechUser } = useUserContext()
    const { setModalOpen, techSelect, editTech, deleteTech } = useTechContext()

    const listOptions = [
        "Iniciante",
        "Intermediário",
        "Avançado"
    ]

    const closeModal = () => {
        setModalOpen(false)
    }

    const submit = async (formData) => {
        const newData = await editTech(techSelect.id, formData)
        if (newData) {
            setModalOpen(false)
        }
    }

    const HandleDeleteTech = async () => {
        deleteTech(techSelect.id)
        setModalOpen(false)
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