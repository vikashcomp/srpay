import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { verifyOtp } from '../redux/actions/mobileAction';
import logo from '../images/sr.jpg'


const initialState={
    otp:'',
    mobile_no:'',
  errors:{}
}
const Otp = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const[iState,updateState]=useState(initialState)
    const [loading, setLoading] = useState(false);
    const{otp,mobile_no,errors}=iState;

    const handleChange=(e)=>{
        const{name,value}=e.target;
        updateState({...iState,[name]:value})
    }

    const token=JSON.parse(window.localStorage.getItem('tokenData'))

    const getMobile=JSON.parse(window.localStorage.getItem('numberData'))

    const handleValidation=()=>{
        let error={};
        let formIsValid=true;
        if(!otp){
            setLoading(false)
            error.otpError='OTP is required';
            formIsValid=false;
            
        } else if(otp!=1234){
            setLoading(false)
            error.otpError='wrong OTP';
            formIsValid=false;
        }
        
        
    updateState({
        ...iState,
        errors: error
    });
    return formIsValid;
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoading(true);
        let formIsValid=handleValidation();

        if(formIsValid){
        const data={otp,mobile_no:getMobile,access_token:token};
        dispatch(verifyOtp(data))
        .then((res)=>{
            if(res.success==true){
                toast.success(res.message,{
                    position:toast.POSITION.TOP_RIGHT,
                    autoClose:1000,
                   
                });
                navigate("/pan")
                updateState({...iState});
            } else{
    
                updateState({
                    ...iState
                })
            }
        })
    }

}


  return (
    <div>
         <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom top-header">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <div className="logo p-3">
                <img className="img-fluid" src={logo}/>
            </div>
        </a>
        <ul className="nav nav-pills d-inline cta p-3 text-center">
            <li className="nav-item"><a href=""><i className="fa-solid fa-phone"></i> 0123456789</a></li>
            <li className="nav-item"><a href=""><i className="fa-solid fa-envelope"></i> example@gmail.com</a></li>
        </ul>
        </header>


      <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-12 mx-auto form text-center p-5">
                <form className="py-5 main-bg" onSubmit={handleSubmit}>
                    <h2 className="fw-bold" style={{color:" #e21d24"}}>Verify <span style={{color:"blue"}}>Otp</span></h2>
                    <div className="input my-5">
                        
                        <input className="" type="text" name="otp" placeholder="Enter Otp" value={otp} onChange={handleChange}/>
                        <span style={{ color: 'red' }}>{errors?.otpError}</span>
                    </div>

                    <div className="join py-1 mb-4">
                        <button className="btn btn-primary px-4" disabled={loading ? loading : loading}>{loading ? "LOADING" : 'Next'}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Otp
