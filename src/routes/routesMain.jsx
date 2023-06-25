import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../page/loginPage/loginPage.jsx"
import { DashboardPage } from "../page/dashboardPage/dashboardPage.jsx"
import { RegisterPage } from "../page/registerPage/registerPage.jsx"

export function RoutesMain() {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}