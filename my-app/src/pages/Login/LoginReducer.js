
import { LOGIN_SUCCESS } from "./LoginActionType";

const initialState={
    isAuth:false,
    isLoading:false,
    isError:false,    
    userSuccessData:  {}
}
export const  loginReducer= (state=initialState,{type,payload})=>{
  
    switch(type){
        case LOGIN_SUCCESS:
            return {...state,isLoading:false,isError:false,isAuth:true,userSuccessData:payload}
        default:
            return {...state}
    }
}