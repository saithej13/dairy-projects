import { useState, useEffect } from 'react';
import axios from "axios";
const  { MGMTMILKDATA_FAILED, MGMTMILKDATA_LOADING, MGMTMILKDATA_SUCCESS }  = require("../Types/mgmtmilkTypes");

export const mgmtmilkAction = (values)=> async (dispatch) => {
        try {
            console.log(values)
            const config = {
                'Content-Type':'application/json',
            }
            const {data} = await axios.post("http://192.168.131.1:8080/api/getmgmtmilkdata",values,config)
            dispatch({type:MGMTMILKDATA_SUCCESS,payload:data})  
            console.log('action finished')
        } catch (error) {
            dispatch({type:MGMTMILKDATA_FAILED,payload:error})
        }
    }