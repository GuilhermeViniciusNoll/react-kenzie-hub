import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../page/loginPage.jsx";
import { DashboardPage } from "../page/dashboardPage.jsx"
import { RegisterPage } from "../page/registerPage.jsx"


export function RoutesMain() {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}