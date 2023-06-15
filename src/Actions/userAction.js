//const { default: axios } = require("axios");
import axios from "axios";
import  { post,API_URL,setAccessToken,clearAccessToken } from '../Components/api';
const { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT,USER_LOGIN_LOADING } = require("../Types/userTypes.js");


export const userAction = (loginPayload) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_LOADING });
        const { data } = await post('/users',loginPayload)
        const { accessToken } = data;
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        
    } catch (error) {
        alert(error);
        dispatch({ type: USER_LOGIN_FAILED, payload: error })
    }
}

export const LOGOUT =()=> (dispatch)=>{
    localStorage.removeItem('accessToken');
    clearAccessToken();
    dispatch({ type: USER_LOGOUT })
}