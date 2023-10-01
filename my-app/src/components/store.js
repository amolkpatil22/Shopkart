import thunk from "redux-thunk";
<<<<<<< HEAD
import { loginReducer } from "../pages/Login/LoginReducer";
const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer=combineReducers({loginReducer
=======
import {reducer as productReducer} from "../pages/Products/ProductReducer/reducer"

const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer=combineReducers({
productReducer,
>>>>>>> 779c04698f32d0966f182069e48cc22f6b9ca977
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))