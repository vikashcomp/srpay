import { requestMoneyAction } from "../actionTypes";

const initialState={
    requestListData:[],
    requestGenerateData:[],
    loader:false,
}

export default function requestForm(state=initialState,{type,payload}){
    // console.log('payloaddd rquest reducerr',payload)
    switch(type){
        case requestMoneyAction.REQUEST_LIST_INITIATE:{
            return{
                ...state,loader:true,requestListData:[]
            }
        }

        case requestMoneyAction.REQUEST_LIST_SUCCESS:{
            return{
                ...state,loader:false,requestListData:payload
            }
        }

        case requestMoneyAction.REQUEST_LIST_FAILURE:{
            return{
                ...state,loader:false,requestListData:[]
            }
        }

        ///////////////////////////////////////////////////////////////

        case requestMoneyAction.GENERATE_REFERENCE_INITIATE:{
            return{
                ...state,loader:true,requestGenerateData:payload
            }
        }

        case requestMoneyAction.GENERATE_REFERENCE_SUCCESS:{
            return{
                ...state,loader:false,requestGenerateData:payload
            }
        }

        case requestMoneyAction.GENERATE_REFERENCE_FAILURE:{
            return{
                ...state,loader:false,requestGenerateData:payload
            }
        }





        default:
            return state
    }
}