import { useModalContext } from "../../../hooks/useModalContext.js"

export function TechItem({ tech }) {

    const { setModalOpen, setModalType, setTechSelect } = useModalContext()

    const openModalEdit = () => {
        setModalOpen(true)
        setModalType('')
        setTechSelect(tech)
    }

    return (
        <li onClick={openModalEdit}>
            <h2>{tech.title}</h2>
            <p>{tech.status}</p>
        </li>
    )
}