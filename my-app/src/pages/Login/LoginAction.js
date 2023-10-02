import axios from "axios"
import { LOGIN_SUCCESS } from "./LoginActionType"



export const loginAction = (payload) => (dispatch) => {
   dispatch({
      type: LOGIN_SUCCESS,
      payload
   })
}


