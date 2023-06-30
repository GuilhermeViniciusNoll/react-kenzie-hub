import { useContext } from "react"
import { UserContext } from "../providers/UserContext.jsx"

export function useUserContext() {
    return useContext(UserContext)
}