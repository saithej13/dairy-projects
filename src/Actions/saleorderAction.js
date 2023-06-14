import { useState, useEffect } from 'react';
import axios from "axios";
import  { post,API_URL } from '../Components/api';
const { SALESORDER_LOADING,SALESORDER_SUCCESS, SALESORDER_FAILED } = require("../Types/salesorderTypes");

export const saleorderAction = (values)=> async (dispatch) => {
        try {
            dispatch({ type: SALESORDER_LOADING })
            const { data } = await post('/getsalesitems',values);
            dispatch({ type: SALESORDER_SUCCESS, payload: data })
        } catch (error) {
            dispatch({type:SALESORDER_FAILED,payload:error})
        }
    }