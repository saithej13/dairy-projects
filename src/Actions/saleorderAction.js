import { useState, useEffect } from 'react';
import axios from "axios";
const { SALESORDER_SUCCESS, SALESORDER_FAILED } = require("../Types/salesorderTypes");

export const saleorderAction = (values)=> async (dispatch) => {
        try {
            console.log(values)
            const config = {
                'Content-Type':'application/json',
            }
            const {data} = await axios.post("http://192.168.131.1:8080/api/getsalesitems",values,config)
            dispatch({type:SALESORDER_SUCCESS,payload:data})  
            console.log('action finished')
        } catch (error) {
            dispatch({type:SALESORDER_FAILED,payload:error})
        }
    }