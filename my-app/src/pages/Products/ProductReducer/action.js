import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_LOADING, FETCH_ELECTRONICS } from "./actionTypes"


export const fetchElectronics = (params) => (dispatch) => {

    dispatch({ type: PRODUCT_LOADING });
    axios({
        method: "get",
        url: `https://shopkart-payload.onrender.com/product`,
        params: params
    })
        .then((res) => { dispatch({ type: FETCH_ELECTRONICS, payload: res.data }) })
        .catch((err) => { dispatch({ type: PRODUCT_FAILURE }) })

}

