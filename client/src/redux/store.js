import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk"

let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store
