import { walletAction } from "../actionTypes";

const initialState = {
    approveList:[],

}

export default function khataBookData(state=initialState,{type,payload}) {
    switch(type){
        case walletAction.REQUEST_APPROVE_LIST_INITIATE:{
            return{
                ...state,loader:true,approveList:[]
            }
        }

        case walletAction.REQUEST_APPROVE_LIST_SUCCESS:{
            return{
                ...state,loader:false,approveList:payload

            }
        
        }

        case walletAction.REQUEST_APPROVE_LIST_FAILURE:{
            return{
                ...state,loader:false,approveList:[]
            }
        
        }

        default:
            return state;

    }
}