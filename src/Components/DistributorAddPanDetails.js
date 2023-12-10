import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useParams } from 'react-router-dom';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const initialState = {
    pan_number: '',
    name: '',
    pan_status: '',
    ac_type: '',
    dob: '',
}

const DistributorAddPanDetails = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const { value } = useParams();
    const [iState, updateState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const { pan_number, pan_status, ac_type, dob } = updateState
    const navigate = useNavigate();


    const panNumvber = JSON.parse(window.localStorage.getItem('getPanNumber'))
    
    const tokenpan = JSON.parse(window.localStorage.getItem('panDataName'))
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateState({ ...iState, [name]: value });
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        toast.success('Account Created Successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,

        });
        navigate(`/welcome/${value}`)
    }
    return (
        <>
          <div>
          <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 mx-auto form text-center p-5">
                        <form className="py-5 main-bg" onSubmit={handleSubmit} >
                            <h2 className="fw-bold" style={{ color: " #e21d24" }}>Verify Your <span style={{ color: "blue" }}>PAN</span></h2>
                            <div className="input my-2">
                                <input className="" type="text" name="pan_number" placeholder="PAN Number" value={panNumvber} />
                            </div>
                            <div className="input my-2">
                                <input className="" type="text" name="name" placeholder="Name" value={tokenpan.name} onChange={handleChange} />
                            </div>

                            <div className="input my-2">
                                <input className="" type="text" name="ac_type" placeholder="individual" value={tokenpan.ac_type} onChange={handleChange} />
                            </div>
                            <div className="input my-2">
                                <input className="" type="text" name="pan_status" placeholder="Active" value={tokenpan.pan_status} onChange={handleChange} />
                            </div>
                            <div className="join py-1 mb-4">
                                <button className="btn btn-primary px-4" type='submit' disabled={loading ? loading : loading}>{loading ? "LOADING" : 'NEXT'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DistributorAddPanDetails;
