import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../page/loginPage.jsx"
import { DashboardPage } from "../page/dashboardPage.jsx"
import { RegisterPage } from "../page/registerPage.jsx"

export function RoutesMain({ user, setUser }) {

    return (
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route path="/dashboard" element={<DashboardPage user={user} setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}