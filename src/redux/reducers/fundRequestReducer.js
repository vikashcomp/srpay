import {fundRequestAction} from "../actionTypes";

const initialState={
    requestFtrId:[],
    fundRequestList:[],
    fundRequestListSecond:[],
    fundRequestListAdmin:[],
    loader:false,
    loginStatus:false,
}

export default function fundRequestForm(state=initialState,{type,payload}){
    switch(type){
        case fundRequestAction.FTR_NUMBER_INITIATE:{
            return{
                ...state,loader:true,requestFtrId:[]
            }
        }

        case fundRequestAction.FTR_NUMBER_SUCCESS:{
            return{
                ...state,loader:false,requestFtrId:payload
            }
        }

        case fundRequestAction.FTR_NUMBER_FAILURE:{
            return{
                ...state,loader:false,requestFtrId:payload
            }
        }


        ///////---------------------FUND-REQUEST_LIST-------------------------//

        case fundRequestAction.FUND_LIST_INITIATE:{
            return{
                ...state,loader:true,fundRequestList:[]
            }
        }

        case fundRequestAction.FUND_LIST_SUCCESS:{
            return{
                ...state,loader:false,fundRequestList:payload
            }
        }

        case fundRequestAction.FUND_LIST_FAILURE:{
            return{
                ...state,loader:false,fundRequestList:payload
            }
        }



        case fundRequestAction.FUND_LIST_ADMIN_INITIATE:{
            return{
                ...state,loader:true,fundRequestListAdmin:[]
            }
        }

        case fundRequestAction.FUND_LIST_ADMIN_SUCCESS:{
            return{
                ...state,loader:false,fundRequestListAdmin:payload
            }
        }

        case fundRequestAction.FUND_LIST_ADMIN_FAILURE:{
            return{
                ...state,loader:false,fundRequestListAdmin:payload
            }
        }

        
        case fundRequestAction.FUND_LIST_SECOND_INITIATE:{
            return{
                ...state,loader:true,fundRequestListSecond:[]
            }
        }

        case fundRequestAction.FUND_LIST_SECOND_SUCCESS:{
            return{
                ...state,loader:false,fundRequestListSecond:payload
            }
        }

        case fundRequestAction.FUND_LIST_SECOND_FAILURE:{
            return{
                ...state,loader:false,fundRequestListSecond:payload
            }
        }

        
        default:
            return state
    }
}