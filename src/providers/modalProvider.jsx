import { createContext } from "react"
import { useState } from "react"
import { api } from "../services/api.js"
import { toast } from "react-toastify"

export const modalContext = createContext({})

export function ModallProvider({ children }) {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalType, setModalType] = useState("")
    const [techSelect, setTechSelect] = useState({})

    const newTech = async (formData) => {
        const token = JSON.parse(localStorage.getItem("@token"))
        try {
            const { data } = await api.post(`/users/techs`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tech criada com sucesso!", {
                autoClose: 2000,
                pauseOnHover: false
            })
            return data
        } catch (error) {
            if (error.response.data.message == "User Already have this technology created you can only update it") {
                toast.error("Essa tecnologia já existe, escolha outra!", {
                    autoClose: 3000,
                    pauseOnHover: false
                })
                return false
            } else {
                toast.error("Algo Deu errado!")
            }

        }
    }

    const editTech = async (techID, formdata) => {
        const token = JSON.parse(localStorage.getItem("@token"))
        try {
            const { data } = await api.put(`/users/techs/${techID}`, formdata, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tech editada!", {
                autoClose: 2000,
                pauseOnHover: false
            })
            return data
        } catch (error) {
            toast.error("Algo Deu errado!")
            return false
        }
    }

    const deleteTech = async (techID) => {
        const token = JSON.parse(localStorage.getItem("@token"))
        try {
            const { data } = await api.delete(`/users/techs/${techID}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tech deletada!", {
                autoClose: 2000,
                pauseOnHover: false
            })
            return data
        } catch (error) {
            toast.error("Algo Deu errado!")
            return false
        }
    }


    return (
        <modalContext.Provider value={{ modalType, modalOpen, setModalOpen, setModalType, newTech, setTechSelect, techSelect, editTech, deleteTech }} >
            {children}
        </modalContext.Provider>
    )

}