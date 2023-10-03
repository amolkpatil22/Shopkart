import axios from "axios"
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType"




export const datafetch = () => (dispatch) => {
    dispatch({ type: GET_REQUEST })
    axios.get(`https://shopkart-payload.onrender.com/product`)
        .then((res) => { dispatch({ type: GET_SUCCESS, payload: res.data }) })
        .catch((err) => { dispatch({ type: GET_FAILURE }) });
}


export const postdata = (id, data) => (dispatch) => {
    axios.patch(`https://shopkart-payload.onrender.com/userdata/${id}`, {cart:data})    
}