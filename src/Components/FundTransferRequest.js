
import React from 'react';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const FundTransferRequest = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container fundRequestHistory mt-4 mb-3 '>
                <h2 style={{ color: "#e21d24" }}>Fund Transfer <span style={{ color: "#2e26c6" }}> Request</span></h2>
                <div className='row main-bg'>
                    <div className='col-12 mt-3 mb-3 '>
                        <div className='col-4 d-flex '>
                            <ul>
                                <li style={{ color: "#e21d24", listStyle: "none" }}><b>From</b></li>
                                <input type="date"></input>
                            </ul>
                            <ul>
                                <li style={{ color: "#2e26c6", listStyle: "none" }}><b>To</b></li>
                                <input type="date"></input>
                            </ul>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-primary" type="submit">Search</button>
                            </div>

                        </div>
                        <div className='d-flex  mb-3 right-button'>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-primary" type="submit">Export To Excel</button>
                            </div>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-danger" type="submit">Export To PDF</button>
                            </div>
                        </div>

                        <div className="container">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Date & Time</th>
                                        <th scope="col">Distributor ID</th>
                                        <th scope="col">Bank Name</th>
                                        <th scope="col">Bank A/C</th>
                                        <th scope="col">Ref No</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Wallet_Type</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">27/5/2023 12:32 Am</th>
                                        <td>64365456465465</td>
                                        <td>HDFSC</td>
                                        <td>65454653343</td>
                                        <td>65344524237</td>
                                        <td>25.00</td>
                                        <td>verified</td>
                                        <td></td>
                                        <td>true</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">28/5/2023 12:32 Am</th>
                                        <td>64365456465465</td>
                                        <td>HDFSC</td>
                                        <td>65454653343</td>
                                        <td>65344524237</td>
                                        <td>25.00</td>
                                        <td>verified</td>
                                        <td></td>
                                        <td>true</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">23/5/2023 12:32 Am</th>
                                        <td>64365456465465</td>
                                        <td>HDFSC</td>
                                        <td>65454653343</td>
                                        <td>65344524237</td>
                                        <td>25.00</td>
                                        <td>verified</td>
                                        <td></td>
                                        <td>true</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FundTransferRequest;
