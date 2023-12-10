import React from 'react';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const MoneyTransferHistory = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
         <div>
         <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mb-3 mt-4'>
                <h3 style={{ color: "blue" }}> Money Transfer<span style={{ color: "red" }}> History</span></h3>
                <div className='row main-bg'>
                    <div className='col-md-3'>
                        <label htmlFor='lebel'>User</label>
                        <input className='form-control' id="input"></input>
                    </div>
                    <div className='col-md-3'>
                        <lebel htmlFor="label">From</lebel>
                        <input type="date" className='form-control' id="input"></input>
                    </div>
                    <div className='col-md-3'>
                        <label htmlFor='label'>To</label>
                        <input type='date' className='form-control' htmlFor="input"></input>
                    </div>
                    <div className='col-md-3 mt-4'>
                        <button className='btn btn-primary me-2'>Serch</button>
                        <button className='btn btn-primary'>Export</button>
                    </div>

                </div>


            </div>
        </>
    )
}

export default MoneyTransferHistory;
