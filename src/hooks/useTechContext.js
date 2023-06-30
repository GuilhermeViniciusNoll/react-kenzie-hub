import { useContext } from "react"
import { TechContext } from "../providers/TechContext.jsx"

export function useTechContext() {
    return useContext(TechContext)
}