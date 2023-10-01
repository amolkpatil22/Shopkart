import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Cart } from "../pages/Cart/Cart"
import { Login } from "../pages/Login/Login"
import { SignupCard } from "../pages/Login/SignUp"
<<<<<<< HEAD
import { PrivateRoute } from "./PrivateRoute"
import { Profile } from "../pages/Profile/Profile"
=======
import ElectronicsList from "../pages/Products/Electronics/ElectronicsList"
import FootwearsList from "../pages/Products/Footwears/FootwearsList"
import FurnituresList from "../pages/Products/Furnitures/FurnituresList"
>>>>>>> 779c04698f32d0966f182069e48cc22f6b9ca977


export const AllRoutes = () => {
    
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
            <Route path="/login" element={
            
                    <Login/>
          
            }/>
           <Route path="/signUp"  element={
             
                    <SignupCard/>
               
            }/>
          <Route path="/profile" element={<Profile/>}/>
=======
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignupCard/>}/>
            <Route path="/electronicslist" element={<ElectronicsList/>}/>
            <Route path="/footwearslist" element={<FootwearsList/>}/>
            <Route path="/furnitureslist" element={<FurnituresList/>}/> 

>>>>>>> 779c04698f32d0966f182069e48cc22f6b9ca977
        </Routes>
    )
}
