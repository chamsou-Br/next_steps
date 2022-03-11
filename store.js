import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import { NewCLReducer } from "./Redux/Reducres/newCL";
import { createWrapper } from "next-redux-wrapper"




const initState = {
    newCL : {
        existe : false
    }
}

const rerducers = combineReducers({
    newCL : NewCLReducer ,
})

const composeEnhancer = compose;

const makeStore = () => createStore(
    rerducers , 
    initState ,
    composeEnhancer(applyMiddleware(logger , thunk))
)
const wrapper = createWrapper(makeStore, { debug: true }); 
export default  wrapper