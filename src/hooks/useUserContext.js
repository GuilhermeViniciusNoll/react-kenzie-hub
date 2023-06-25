import { useContext } from "react";
import { UserContext } from "../providers/userProvider.jsx";

export function useUserContext() {
    return useContext(UserContext)
}