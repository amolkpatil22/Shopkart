
import { useSelector } from "react-redux"



export const PrivateRoute=({children})=>{

      const isAuth=useSelector((store)=>{
        return store.loginReducer.isAuth
      })  

      if(isAuth){
        return children
      }
}