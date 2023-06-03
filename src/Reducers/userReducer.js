import { USER_LOGIN_FAILED,USER_LOGIN_SUCCESS,USER_LOGIN_LOADING } from "../Types/userTypes"

const initialState = {
    loading:false,
    data:[],
    error:''
}

export const loginUserReducer = (state=initialState,action) => {
    switch (action.type) {
        case USER_LOGIN_LOADING:
            return {
                ...state,
                loading:true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
            }
        case USER_LOGIN_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}