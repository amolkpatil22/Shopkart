import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Cart } from "../pages/Cart/Cart"
import { Login } from "../pages/Login/Login"
import { SignupCard } from "../pages/Login/SignUp"
import ElectronicsList from "../pages/Products/Electronics/ElectronicsList"
import FootwearsList from "../pages/Products/Footwears/FootwearsList"
import FurnituresList from "../pages/Products/Furnitures/FurnituresList"


export const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignupCard/>}/>
            <Route path="/electronicslist" element={<ElectronicsList/>}/>
            <Route path="/footwearslist" element={<FootwearsList/>}/>
            <Route path="/furnitureslist" element={<FurnituresList/>}/> 

        </Routes>
    )
}
