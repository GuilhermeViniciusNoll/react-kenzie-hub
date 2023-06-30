import { SectionTechStyled } from "./styled.js"
import { TechItem } from "../Tech/index.jsx"
import { useUserContext } from "../../../hooks/useUserContext.js"
import { useTechContext } from "../../../hooks/useTechContext.js"
import { Modal } from "../componentsModal/Modal"
import { useEffect } from "react"


export function TechSection() {

    const { user, techUser } = useUserContext()
    const { modalOpen, setModalOpen, setModalType, techList, setTechList } = useTechContext()

    useEffect(() => { 
        setTechList(techUser)
    }, [user])

    const openModal = () => {
        setModalOpen(true)
        setModalType("newTech")
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