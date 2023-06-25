import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../page/loginPage/loginPage.jsx"
import { DashboardPage } from "../page/dashboardPage/dashboardPage.jsx"
import { RegisterPage } from "../page/registerPage/registerPage.jsx"

export function RoutesMain({ user, setUser }) {

    return (
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route path="/dashboard" element={<DashboardPage user={user} setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}