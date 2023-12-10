import { addFundOtpAction } from "../actionTypes";

const initialState={
    bankListData:[],
    loader:false,
}

export default function bankList(state=initialState,{type,payload}){
    // console.log('payloaddd rquest reducerr',payload)
    switch(type){
        case addFundOtpAction.BANK_LIST_INITIATE:{
            return{
                ...state,loader:true, bankListData:[]
            }
        }

        case addFundOtpAction.BANK_LIST_SUCCESS:{
            return{
                ...state,loader:false,  bankListData:payload
            }
        }

        case addFundOtpAction.BANK_LIST_FAILURE:{
            return{
                ...state,loader:false,  bankListData:[]
            }
        }

        default:
            return state
    }
}