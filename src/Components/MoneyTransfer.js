import React from 'react';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const MoneyTransfer = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mt-4'>
                <h2 style={{ color: "red" }}>Money <span style={{ color: "blue" }}>Transfer</span></h2>
                <div className='row main-bg'>
                    <div className='col-md-4'>
                        <label><b>Customer Login</b></label>
                        <input type="text" className="form-control" placeholder="Search Mobile Customer Number" />
                    </div>
                    <div className='col-md-2 mt-4'>
                        <button className='btn btn-primary'>search</button>
                    </div>



                    <div className="container mt-5 mb-5">

                        <h2 style={{ color: "red" }}>Send <span style={{ color: "blue" }}> Money To</span> </h2>

                        <table className="table table-bordered table-striped">
                            {/* <thead>
                                <tr>
                                    <th scope="col">Date & Time</th>
                                    <th scope="col">TXN Id</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Payment Mode</th>
                                    <th scope="col">Debit</th>
                                    <th scope="col">Credit</th>
                                    <th scope="col">Closing Balance</th>
                                    <th scope="col">Raise Complaint</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                <tr>
                                    <th scope="row">SR EnterPrises<br />
                                        PANJAB NATIONAL BANK</th>
                                    <td>A/C :65434356545<br />
                                        IFSC:PUNB048686</td>
                                    <td>Verified</td>
                                    <td><input className='form-control' placeholder='Enter Amount '></input></td>
                                    <td><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />IMPS
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />NEFT</td>
                                    <td><button className='btn btn-primary'>send</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">SR EnterPrises<br />
                                        PANJAB NATIONAL BANK</th>
                                    <td>A/C :65434356545<br />
                                        IFSC:PUNB048686</td>
                                    <td>Verified</td>
                                    <td><input className='form-control' placeholder='Enter Amount '></input></td>
                                    <td><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />IMPS
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />NEFT</td>
                                    <td><button className='btn btn-primary'>send</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">SR EnterPrises<br />
                                        PANJAB NATIONAL BANK</th>
                                    <td>A/C :65434356545<br />
                                        IFSC:PUNB048686</td>
                                    <td>Verified</td>
                                    <td><input className='form-control' placeholder='Enter Amount '></input></td>
                                    <td><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />IMPS
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />NEFT</td>
                                    <td><button className='btn btn-primary'>send</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">SR EnterPrises<br />
                                        PANJAB NATIONAL BANK</th>
                                    <td>A/C :65434356545<br />
                                        IFSC:PUNB048686</td>
                                    <td>Verified</td>
                                    <td><input className='form-control ' placeholder='Enter Amount '></input></td>
                                    <td><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />IMPS
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />NEFT</td>
                                    <td><button className='btn btn-primary'>send</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>



            </div>
        </>
    )
}

export default MoneyTransfer
