import { addFundOtpAction } from "../actionTypes";

const initialState={
    addListData:[],
    loader:false,
}

export default function addList(state=initialState,{type,payload}){
    // console.log('payloaddd rquest reducerr',payload)
    switch(type){
        case addFundOtpAction. FUND_ADD_LIST_INITIATE:{
            return{
                ...state,loader:true,addListData:[]
            }
        }

        case addFundOtpAction.FUND_ADD_LIST_SUCCESS:{
            return{
                ...state,loader:false, addListData:payload
            }
        }

        case addFundOtpAction.FUND_ADD_LIST_FAILURE:{
            return{
                ...state,loader:false, addListData:[]
            }
        }

        default:
            return state
    }
}