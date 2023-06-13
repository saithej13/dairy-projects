import { useState, useEffect } from 'react';
import axios from "axios";
import  { API_URL } from '../Components/api';
const { SALESORDER_SUCCESS, SALESORDER_FAILED } = require("../Types/salesorderTypes");

export const saleorderAction = (values)=> async (dispatch) => {
        try {
            const config = {
                'Content-Type':'application/json',
            }
            const {data} = await axios.post(`${API_URL}/getsalesitems`,values,config)
            dispatch({type:SALESORDER_SUCCESS,payload:data})  
        } catch (error) {
            dispatch({type:SALESORDER_FAILED,payload:error})
        }
    }