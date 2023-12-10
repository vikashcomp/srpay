import React from 'react';
import {useNavigate} from 'react-router-dom'
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const Complaint = () => {
    const navigate=useNavigate()
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const handleClick=()=>{
        navigate('/complaintissue')
    }
    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mt-4'>
                <h2 style={{ color: "red" }}>Complaint</h2>

                <div className='row main-bg'>
                    <div className='col-md-4'>
                        <button type="button" className="btn btn-primary" onClick={handleClick}>PPI Transaction Failed</button>
                    </div>
                    <div className='col-md-4'>
                        <button type="button" className="btn btn-primary "  onClick={handleClick}>Need To Clear Indeminity Bound For  Refund</button>
                    </div>
                    <div className='col-md-4'>
                        <button type="button" className="btn btn-primary"  onClick={handleClick}>PPI Transaction Failed</button>
                    </div>
                    <div className='col-md-4 mt-5'>
                        <button type="button" className="btn btn-primary"  onClick={handleClick}>PPI Transaction Failed</button>
                    </div>
                    <div className='col-md-4 mt-5'>
                        <button type="button" className="btn btn-primary "  onClick={handleClick}>Need To Clear Indeminity Bound For Refund</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Complaint
