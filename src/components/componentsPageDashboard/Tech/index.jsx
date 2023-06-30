import { useTechContext } from "../../../hooks/useTechContext.js"

export function TechItem({ tech }) {

    const { setModalOpen, setModalType, setTechSelect } = useTechContext()

    const openModalEdit = () => {
        setModalOpen(true)
        setModalType("")
        setTechSelect(tech)
    }

    return (
        <li onClick={openModalEdit}>
            <h2>{tech.title}</h2>
            <p>{tech.status}</p>
        </li>
    )
}