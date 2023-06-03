//const { default: axios } = require("axios");
import axios from "axios";
const { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } = require("../Types/userTypes.js");


export const userAction = (values) => async (dispatch) => {
    try {
        const config = {
            'Content-Type': 'application/json', 
        }
        const { data } = await axios.post("http://192.168.131.1:8080/api/users", values, config)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED, payload: error })
    }
}