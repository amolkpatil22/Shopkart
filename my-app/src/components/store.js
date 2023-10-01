import thunk from "redux-thunk";
import { loginReducer } from "../pages/Login/LoginReducer";
const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer=combineReducers({loginReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))