import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const WalletRecharge = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div>
                <div className='container mt-4 mb-3'>
                    <h2 style={{ color: "red" }}>Wallet Recharge <span style={{ color: "blue" }}>History</span></h2>
                    <div className='row d-flex justify-content-center  main-bg'>
                        <div className='col-md-2'>
                            <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="From Date" />
                        </div>
                        <div className='col-md-2'>
                            <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="To Date" />
                        </div>
                        <div className='col-md-2'>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Trans id" />
                            <div className='trans-icon'>
                                <AiOutlineQuestionCircle />
                            </div>
                        </div>
                        <div className="col-md-2 ">
                            <select className="form-select " >
                                <option>Service</option>
                                <option value="cash">user</option>
                                <option value="Net Banking">Banking</option>
                            </select>
                        </div>
                        <div className='col-md-2'>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Apply Filters" />
                        </div>


                        <div className='container fundRequestHistory mt-3 mb-3 '>

                            <div className='row'>
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
                                                    <td>25 May 2023  5:44 AM</td>
                                                    <td>64365456465465</td>
                                                    <td>others</td>
                                                    <td>others</td>
                                                    <td>6117,117</td>
                                                    <td>85857</td>
                                                    <td>6787,544</td>
                                                    <td>Amount On Hold_fy _Transaction</td>
                                                </tr>
                                                <tr>
                                                    <td>25 May 2023 4:00 PM</td>
                                                    <td>64365456465465</td>
                                                    <td>others</td>
                                                    <td>others</td>
                                                    <td>6117,117</td>
                                                    <td>876567</td>
                                                    <td>5654,76</td>
                                                    <td>Amount On Hold_fy _Transaction</td>
                                                </tr>
                                                <tr>
                                                    <td>25 May 2023 2:05PM</td>
                                                    <td>64365456465465</td>
                                                    <td>others</td>
                                                    <td>others</td>
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

                        <div className='row d-flex justify-content-center'>
                            <div className='col-md-1'>
                                <button type="button" className="btn btn-light"><GrPrevious /></button>
                            </div>
                            <div className='col-md-1'>
                                <button className="btn btn-primary">1</button>
                            </div>
                            <div className='col-md-1'>
                                <button type="button" className="btn btn-light"><GrNext /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WalletRecharge
