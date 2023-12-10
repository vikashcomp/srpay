import { moveDistributorAction} from "../actionTypes";

const initialState={
    genFtrMovDisData:[],
    // fundRequestList:[],
    // fundRequestListSecond:[],
    loader:false,
    loginStatus:false,
}

export default function moveDistributorForm(state=initialState,{type,payload}){
    switch(type){
        case moveDistributorAction.MOVE_DISTRIBUTOR_INITIATE:{
            return{
                ...state,loader:true,genFtrMovDisData:[]
            }
        }

        case moveDistributorAction.MOVE_DISTRIBUTOR_SUCCESS:{
            return{
                ...state,loader:false,genFtrMovDisData:payload
            }
        }

        case moveDistributorAction.MOVE_DISTRIBUTOR_FAILURE:{
            return{
                ...state,loader:false,genFtrMovDisData:payload
            }
        }


        ///////---------------------save-Ftr_LIST-------------------------//

        // case fundRequestAction.FUND_LIST_INITIATE:{
        //     return{
        //         ...state,loader:true,fundRequestList:[]
        //     }
        // }

        // case fundRequestAction.FUND_LIST_SUCCESS:{
        //     return{
        //         ...state,loader:false,fundRequestList:payload
        //     }
        // }

        // case fundRequestAction.FUND_LIST_FAILURE:{
        //     return{
        //         ...state,loader:false,fundRequestList:payload
        //     }
        // }

        
        // case fundRequestAction.FUND_LIST_SECOND_INITIATE:{
        //     return{
        //         ...state,loader:true,fundRequestListSecond:[]
        //     }
        // }

        // case fundRequestAction.FUND_LIST_SECOND_SUCCESS:{
        //     return{
        //         ...state,loader:false,fundRequestListSecond:payload
        //     }
        // }

        // case fundRequestAction.FUND_LIST_SECOND_FAILURE:{
        //     return{
        //         ...state,loader:false,fundRequestListSecond:payload
        //     }
        // }

        
        default:
            return state
    }
}