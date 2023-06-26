import { SectionTechStyled } from "./styled.js"
import { TechItem } from "../Tech/index.jsx"
import { useUserContext } from "../../../hooks/useUserContext"
import { useModalContext } from "../../../hooks/useModalContext.js"
import { Modal } from "../componentsModal/Modal"


export function TechSection() {

    const { techList } = useUserContext()
    const { modalOpen, setModalOpen, setModalType } = useModalContext()

    const openModal = () => {
        setModalOpen(true)
        setModalType('newTech')
    }

    return (
        <>
            <SectionTechStyled>
                <div>
                    <h2>Tecnologias</h2>
                    <button onClick={openModal}>+</button>
                </div>
                <ul>
                    {techList.map((tech) => <TechItem key={tech.id} tech={tech} />)}
                </ul>
            </SectionTechStyled>
            {modalOpen ? <Modal /> : null}
        </>
    )
}