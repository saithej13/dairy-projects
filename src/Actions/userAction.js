//const { default: axios } = require("axios");
import axios from "axios";
import  { API_URL } from '../Components/api';
import {history} from './history';
const { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT,USER_LOGIN_LOADING } = require("../Types/userTypes.js");


export const userAction = (loginPayload) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_LOADING });
        const config = {
            'Content-Type': 'application/json', 
        }
        const { data } = await axios.post(`${API_URL}/users`,loginPayload, config)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        //history.push('/Home');
        //window.location.reload();
        
    } catch (error) {
        alert(error);
        dispatch({ type: USER_LOGIN_FAILED, payload: error })
    }
}

export const LOGOUT =()=> (dispatch)=>{
    dispatch({ type: USER_LOGOUT })
}