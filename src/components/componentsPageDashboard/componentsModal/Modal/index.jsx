import { useModalContext } from "../../../../hooks/useModalContext.js"
import { ModalNewTech } from "../ModalNewTech/index.jsx"
import { ModalUpdateTech } from "../ModalUpdateTech/index.jsx"
import { ContainerModalStyled } from "./styled.js"


export function Modal() {

    const { modalType } = useModalContext()

    return (
        <ContainerModalStyled>
            {modalType === 'newTech' ? <ModalNewTech /> : <ModalUpdateTech/>}
        </ContainerModalStyled>
    )
}