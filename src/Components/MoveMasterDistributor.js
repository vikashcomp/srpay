import React from 'react'
import { useUserProfile } from '../customHooks/hooks';
import UserHeader from './UserHeader';
import UserNav from './UserNav';

const MoveMasterDistributor = () => {
    const { kycData } = useUserProfile();

    return (
        <>
            <UserHeader kycData={kycData} />
            <UserNav userRole={kycData?.user_type_label} />

            <div className='container fundRequestHistory mt-3 mb-5'>
                <h2 style={{ color: "#e21d24" }}>Move To <span style={{ color: "#2e26c6" }}> Master Distributor</span></h2>
                <div className='main-bg'>
                    <div className='row p-5'>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="form-label"><b>FTR Refrance Number</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="SRPAY1001" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="form-label"><b>Distributor Id</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="SRPAY1001" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="form-label"><b>Name</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Harsh Kumar" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="form-label"><b>Contact Number</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="44567789323" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="form-label"><b>Current OutStanding</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="4999" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="form-label"><b>Available Limit</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="63664654564" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="form-label"><b>Eligible Limit</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="12" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="form-label"><b>Amount</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="4568" />
                        </div>

                        <div className='col-md-4 process-button'>
                            <button className="btn btn-primary me-3" type="submit">Cancel</button>
                            <button className="btn btn-primary" type="submit">Process</button>

                        </div>
                        <div className='term mt-5'>
                            <h5>Terms & Conditions</h5>

                            <li>Transfer Timing are between 9am to 6pm daily</li>
                            <li>Maximum 15 Transaction  allowed per day</li>
                            <li>Minimum amount per transaction is Rs.100</li>
                        </div>

                    </div>
                </div>
            </div>
        </>


    )
}

export default MoveMasterDistributor;
