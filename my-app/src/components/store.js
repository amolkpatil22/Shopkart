import thunk from "redux-thunk";
import { loginReducer } from "../pages/Login/LoginReducer";
import {reducer as productReducer} from "../pages/Products/ProductReducer/reducer"
import { HomeReducer } from "../pages/Home/HomeReducer";
const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");


const rootReducer=combineReducers({
productReducer,
loginReducer,
HomeReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))