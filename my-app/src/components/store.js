import thunk from "redux-thunk";
import {reducer as productReducer} from "../pages/Products/ProductReducer/reducer"

const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer=combineReducers({
productReducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))