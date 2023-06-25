import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext.js";

export function ProtectorRoutes() {
    const { user } = useUserContext();

    return user ? <Outlet /> : <Navigate to="/" />
}