import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form'
import pedidos from './pedidoReducer'


const rootReducer = combineReducers({
    pedidos, 
    form : formReducer
});

export default rootReducer;