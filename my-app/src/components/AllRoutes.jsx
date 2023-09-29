import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Cart } from "../pages/Cart/Cart"


export const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}
