import axios from "axios";
import { useSelector } from 'react-redux';
import  { post,API_URL } from '../Components/api';
const { MGMTSALEDATA_LOADING,MGMTSALEDATA_SUCCESS, MGMTSALEDATA_FAILED } = require("../Types/mgmtsaleTypes");

export const mgmtsaleAction = (values)=> async (dispatch) => {
        try {
            /*const accessToken = useSelector(state=> state.userLogin);
            const { accessTokenId } = accessToken;
            const config = {
                'Content-Type':'application/json',
                'authorization':accessTokenId,
            }
            const response = await axios.post(`${API_URL}/getmgmtsaledata`,values,config)
            dispatch({type:MGMTSALEDATA_SUCCESS,payload:response})*/
            dispatch({ type: MGMTSALEDATA_LOADING });
            const { data } = await post('/getmgmtsaledata',values);
            dispatch({ type: MGMTSALEDATA_SUCCESS, payload: data })
        } catch (error) {
            dispatch({type:MGMTSALEDATA_FAILED,payload:error})
        }
    }