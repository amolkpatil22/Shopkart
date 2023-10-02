import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Cart } from "../pages/Cart/Cart"
import { Login } from "../pages/Login/Login"
import { SignupCard } from "../pages/Login/SignUp"
import { PrivateRoute } from "./PrivateRoute"
import { Profile } from "../pages/Profile/Profile"
import ElectronicsList from "../pages/Products/Electronics/ElectronicsList"
import SingleElectronics from "../pages/SingleProduct/SingleElectronics"




export const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />           
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignupCard />} />
            <Route path="/product" element={<ElectronicsList />} />
            <Route path="/product/:id" element={<SingleElectronics />} />
        </Routes>
    )
}
