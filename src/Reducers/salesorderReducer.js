//import { createStore } from 'redux';
import { SALESORDER_FAILED, SALESORDER_LOADING, SALESORDER_SUCCESS } from "../Types/salesorderTypes";

const initialState = {
    loading:false,
    data:[],
    error:''
}

export const salesorderReducer = (state=initialState,action) => {
    switch (action.type) {
        case SALESORDER_LOADING:
            return {
                ...state,
                loading:true
            }
        case SALESORDER_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
            }
        case SALESORDER_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
//const store = createStore(salesorderReducer);