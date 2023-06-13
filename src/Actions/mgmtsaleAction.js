import { useState, useEffect } from 'react';
import axios from "axios";
import  { API_URL } from '../Components/api';
const { MGMTSALEDATA_SUCCESS, MGMTSALEDATA_FAILED } = require("../Types/mgmtsaleTypes");

export const mgmtsaleAction = (values)=> async (dispatch) => {
        try {
            const config = {
                'Content-Type':'application/json',
            }
            const response = await axios.post(`${API_URL}/getmgmtsaledata`,values,config)
        //     const lables = [];
        //     const datasets = {};
        //     const data=[];
        //     const label =[];
        //     const groupedData = {};
        //     for(let i=0;i<response.data["data"].length;i++){ 
        //         lables.unshift(response.data["data"][i].TDATE)
        //         data.unshift(response.data["data"][i].QTY)
        //    }
        //    console.log(data)
        //     response.data["data"].forEach(item => {
        //         const {CATNAME } = item;
        //         if (!groupedData[CATNAME]) {
        //             groupedData[CATNAME] = [];
        //         }
        //         groupedData[CATNAME].push(datasets);
        //         });
        //         datasets.push(groupedData,)
        //     console.log(datasets)
            // dispatch({type:MGMTSALEDATA_SUCCESS,payload:{groupedData,lables}})  
            dispatch({type:MGMTSALEDATA_SUCCESS,payload:response})
        } catch (error) {
            dispatch({type:MGMTSALEDATA_FAILED,payload:error})
        }
    }