import { getData } from "../../utilis/LocalStorage";
import { LOGIN_LOADING } from "./LoginActionType";

const initialState={
    isAuth:false,
    isLoading:false,
    isError:false,
    emailL:  "",
    password:""
}
export const  loginReducer= (state=initialState,{type,payload})=>{
  
    switch(type){
        case LOGIN_LOADING:
            return {...state}
        default:
            return {...state}
    }
}