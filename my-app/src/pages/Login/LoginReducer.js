
import { LOGIN_SUCCESS } from "./LoginActionType";

const initialState = {
    isAuth: JSON.parse(localStorage.getItem("user")) || false,
    isLoading: false,
    isError: false,
    userSuccessData: {}
}
export const loginReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, isError: false, isAuth: payload.id, userSuccessData: payload }
        case "update": return { ...state, userSuccessData: payload }
        case "loggedout": return { ...state, userSuccessData: {}, isAuth: false }
        default:
            return { ...state }
    }
}