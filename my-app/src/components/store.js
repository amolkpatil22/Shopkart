import thunk from "redux-thunk";

const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer=combineReducers({

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))