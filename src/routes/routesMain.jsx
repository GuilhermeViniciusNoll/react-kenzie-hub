import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../page/loginPage/loginPage.jsx"
import { DashboardPage } from "../page/dashboardPage/dashboardPage.jsx"
import { RegisterPage } from "../page/registerPage/registerPage.jsx"
import { ProtectorRoutes } from "./ProtectorRoutes.jsx"

export function RoutesMain() {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectorRoutes />} >
                <Route index element={<DashboardPage />} />
            </Route>
        </Routes>
    )
}