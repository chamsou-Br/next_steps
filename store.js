import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import { NewCLReducer } from "./Redux/Reducres/newCL";




const initState = {
    newCL : {
        existe : false
    }
}

const rerducers = combineReducers({
    newCL : NewCLReducer ,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rerducers , 
    initState ,
    composeEnhancer(applyMiddleware(logger , thunk))
)

export default store ;