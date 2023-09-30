import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Cart } from "../pages/Cart/Cart"
import { Login } from "../pages/Login/Login"
import { SignupCard } from "../pages/Login/SignUp"


export const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignupCard/>}/>

        </Routes>
    )
}
