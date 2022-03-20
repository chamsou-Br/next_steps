import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import { NewCLReducer } from "./Redux/Reducres/newCL";
import { createWrapper } from "next-redux-wrapper"
import {NewCVReducer} from "./Redux/Reducres/newCV.js"




const initState = typeof window !== "undefined" ?  {
    newCL : JSON.parse(localStorage.getItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCL")) ? 
            JSON.parse(localStorage.getItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCL")) : 
            { existe : false},
    newCV : JSON.parse(localStorage.getItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCV")) ? 
            JSON.parse(localStorage.getItem("PROJET_STEP_TO_STEP_TO_GET_A_JOB__NewCV")) : 
            { existe : false},
} : {
    newCL : {
        existe : false
    },
    newCV : {
        existe : true
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