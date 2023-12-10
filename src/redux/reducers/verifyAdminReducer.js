import { verifyAdminAction } from "../actionTypes";

const initialState = {
    verifyData:[],
    loader:false,
    loginStatus:false,

}

export default function verifyForm(state=initialState,{type,payload}) {
    // console.log('payloaddverify',payload)
    switch(type){
        case verifyAdminAction.VERIFY_LOGIN_INITIATE:{
            return{
                ...state,loader:true,verifyData:[]
            }
        }

        case verifyAdminAction.VERIFY_LOGIN_SUCCESS:{
            return{
                ...state,loader:false,verifyData:payload

            }
        
        }

        case verifyAdminAction.VERIFY_LOGIN_FAILURE:{
            return{
                ...state,loader:false,verifyData:[]
            }
        
        }

        default:
            return state;

    }
}