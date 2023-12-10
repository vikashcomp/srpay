import React from 'react';

import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

import UserHeader from './UserHeader';
import UserNav from './UserNav';

const MoveBankDistributor = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();

    return (
        <>
            <div>
                <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container fundRequestHistory mt-5 mb-5'>
                <h2 style={{ color: "#e21d24" }}>Move To <span style={{ color: "#2e26c6" }}> Bank</span></h2>
                <div className='main-bg'>
                    <div className='row '>
                        <div className='col-md-4'>
                            <label htmlFor="" className="mt-2"><b>Partner ID</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="SRPAY1001" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Name</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Harsh Kumar" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Bank Name</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="HDFSC BANK LTD" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Account Number</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="44567789323" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>IFSC Code</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="HDFSC054" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Available Wallet Balance</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="6564" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Eligible Limit</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="1265" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Amount</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="4568" />
                        </div>

                        <div className='col-md-4 process-button'>
                            <button className="btn btn-primary me-3" type="submit">Cancel</button>
                            <button className="btn btn-primary" type="submit">Process</button>

                        </div>

                        <div className='term mt-5'>
                            <h5>Term & Condition</h5>

                            <li>Transfer Timing are between 9Am to 6pm daily</li>
                            <li>Maximum 15 Transaction  allowed per day</li>
                            <li>Minimum amount per transaction is Rs.100</li>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default MoveBankDistributor
