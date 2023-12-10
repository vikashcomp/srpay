import {kycAction} from "../actionTypes"

const initialState = {
    kycData:[],
    loader:false,
    loginStatus:false,
}

export default function kycForm(state=initialState,{type,payload}){
    // console.log('payloadd reducee',payload)
        switch(type){
            case kycAction.KYC_LOGIN_INITIATE:{
                return{
                    ...state,loader:true,kycData:[]
                }
            }

            case kycAction.KYC_LOGIN_SUCCESS:{
                // console.log('kyc dataaaaaaaaaa')
                return{
                    ...state,loader:false,kycData:payload
                }

                
            }


            case kycAction.KYC_LOGIN_FAILURE:{
                return{
                    ...state,loader:false,kycData:[]

                }
            }

            default:
                return state
        }

}