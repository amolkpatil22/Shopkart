import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_LOADING, FETCH_ELECTRONICS } from "./actionTypes"


export const fetchElectronics = (params) => (dispatch) => {

    dispatch({ type: PRODUCT_LOADING });
    axios({
        method: "get",
        url: `http://localhost:8080/product`,
        params: params
    })
        .then((res) => { dispatch({ type: FETCH_ELECTRONICS, payload: res.data }) })
        .catch((err) => { dispatch({ type: PRODUCT_FAILURE }) })

}

// export const fetchFootwears=()=>(dispatch)=>{
//     dispatch({type:PRODUCT_LOADING})
// let Data=axios.get(`https://6516c35509e3260018ca42bf.mockapi.io/footwears`).then((res)=>{
//     dispatch({type:FETCH_FOOTWEARS, payload:res.data})

// }).catch((err)=>{
// dispatch({type:PRODUCT_FAILURE})
// })
// return Data;
// }


// export const fetchFurnitures=()=>(dispatch)=>{
//     dispatch({type:PRODUCT_LOADING})
// let Data=axios.get(`https://6516bce509e3260018ca387d.mockapi.io//furnitures`).then((res)=>{
//     dispatch({type:FETCH_FURNITURES, payload:res.data})

// }).catch((err)=>{
// dispatch({type:PRODUCT_FAILURE})
// })
// return Data;
// }