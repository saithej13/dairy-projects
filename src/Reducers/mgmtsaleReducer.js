//import { createStore } from 'redux';
import { MGMTSALEDATA_FAILED, MGMTSALEDATA_LOADING, MGMTSALEDATA_SUCCESS } from "../Types/mgmtsaleTypes";

const initialState = {
    loading:false,
    // data:{
    //     labels:[],
    //     datasets: [{
    //         label: "failed",
    //         data: [],
    //         backgroundColor: "#2196F3",
    //         borderColor: "#2196F3",
    //         }],
    // },
    data:[],
    error:'',
    isdataloaded:false,
    
}

export const mgmtsaleReducer = (state=initialState,action) => {
    switch (action.type) {
        case MGMTSALEDATA_LOADING:
            return {
                ...state,
                loading:true,
                isdataloaded:false,
            }
        case MGMTSALEDATA_SUCCESS:
            return {
                ...state,
                loading:false,
                // data: {
                //     labels:action.payload.lables,
                //     datasets: [{
                //         //label: action.payload.label,
                //         data: action.payload.groupedData,
                //         // backgroundColor: "#2196F3",
                //         // borderColor: "#2196F3",
                //       }
                //     ],
                //   }
                data:action.payload.data,
                isdataloaded:true,
                error:'',
            }
        case MGMTSALEDATA_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload,
                isdataloaded:false,
            }
        default:
            return state
    }
}
//const store = createStore(MGMTSALEDATAReducer);