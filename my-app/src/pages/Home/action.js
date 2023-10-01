import axios from "axios"
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType"




export const datafetch = () => (dispatch) => {
    dispatch({ type: GET_REQUEST })
    axios.get(`http://localhost:8080/product`)
        .then((res) => { dispatch({ type: GET_SUCCESS, payload: res.data }) })
        .catch((err) => { dispatch({ type: GET_FAILURE }) });
}