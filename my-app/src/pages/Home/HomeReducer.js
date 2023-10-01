import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType"


let intdata = {
    isLoading: false,
    isError: false,
    product:[]
}


export const HomeReducer = (state = intdata, { type, payload }) => {
    switch (type) {
        case GET_REQUEST: return { ...state, isLoading: true }
        case GET_SUCCESS: return { ...state, isLoading: false, product:payload }
        case GET_FAILURE: return { ...state, isLoading: false, isError: true }
        default: return state
    }

}