import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import { NewCLReducer } from "./Redux/Reducres/newCL";
import { createWrapper } from "next-redux-wrapper"
import {NewCVReducer} from "./Redux/Reducres/newCV.js"




const initState = {
    newCL : {
        existe : false
    },
    newCV : {
        existe : false
    }
}

const rerducers = combineReducers({
    newCL : NewCLReducer ,
    newCV : NewCVReducer
})

const composeEnhancer = compose;

const makeStore = () => createStore(
    rerducers , 
    initState ,
    composeEnhancer(applyMiddleware(logger , thunk))
)
const wrapper = createWrapper(makeStore, { debug: true }); 
export default  wrapper