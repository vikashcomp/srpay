import React from 'react';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const AaharpayHistory = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mt-4'>

                <h2 style={{ color: "red" }}>Aadhar PAY <span style={{ color: "blue" }}>History</span></h2>
                <div className='row main-bg'>
                    <div className='col-12 mt-3 mb-3'>
                        <div className="container">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Date & Time</th>
                                        <th scope="col">Trans ID</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Transaction Type</th>
                                        <th scope="col">Opening Bal</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Closing Bal</th>
                                        <th scope="col">Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>25 May 2023|| 10:34 AM</td>
                                        <td>64365456465465</td>
                                        <td>others</td>
                                        <td>Aeps</td>
                                        <td>6117,117</td>
                                        <td>85857</td>
                                        <td>6787,544</td>
                                        <td>Amount On Hold_fy _Transaction</td>
                                    </tr>
                                    <tr>
                                        <td>28 June 2023||11:45 AM</td>
                                        <td>643654564654563</td>
                                        <td>others</td>
                                        <td>Aeps</td>
                                        <td>6118,117</td>
                                        <td>876567</td>
                                        <td>5654,76</td>
                                        <td>Amount On Hold_fy _Transaction</td>
                                    </tr>
                                    <tr>
                                        <td>30 July 2023||12.00 AM</td>
                                        <td>64365456465654</td>
                                        <td>others</td>
                                        <td>Aeps</td>
                                        <td>7117,786</td>
                                        <td>67789</td>
                                        <td>60756</td>
                                        <td>Amount On Hold_fy _Transaction</td>
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

export default AaharpayHistory;
