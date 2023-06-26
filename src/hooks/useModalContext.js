import { useContext } from "react";
import { modalContext } from "../providers/modalProvider.jsx";

export function useModalContext() {
    return useContext(modalContext)
}