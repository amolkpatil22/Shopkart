import thunk from "redux-thunk";
import { loginReducer } from "../pages/Login/LoginReducer";
import {reducer as productReducer} from "../pages/Products/ProductReducer/reducer"
const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");


const rootReducer=combineReducers({
productReducer,
loginReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))