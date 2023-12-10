import React from 'react';
import {AiFillFileExcel} from 'react-icons/ai'
import {AiFillFilePdf} from 'react-icons/ai'
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const CreditCardPayment = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
         <div>
         <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container fundRequestHistory mt-3'>
                <h2 style={{ color: "#e21d24" }}>Credit Card <span style={{ color: "#2e26c6" }}>Payment</span></h2>
                <div className='main-bg'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className=""><b>Bank Name</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="HDFSC Bank LTd" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className=" "><b>Card Number</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="535 5355 3535 56" />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className=" "><b>Customer Name</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Ravinder kumar" />
                        </div>

                        <div className='col-md-4 mt-2'>
                            <label htmlFor="inputPassword4" className=" "><b>Customer Mobile</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="9998765645" />
                        </div>
                        <div className='col-md-4 mt-2'>
                            <label htmlFor="inputPassword4" className=""><b>Amount</b></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="6365" />
                        </div>

                        <div className='col-md-4  mt-2 process-button '>
                            <button className="btn btn-primary process-button" type="submit">Proceed Card Payment</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h2 style={{ color: "#e21d24" }}>Credit Card  <span style={{ color: "#2e26c6" }}> Payment History</span></h2>
                    </div>
                    <div className='col-4 d-flex mt-3'>
                        <ul>
                            <li style={{ color: "#e21d24" }}><b>From</b></li>
                            <input type="date"></input>
                        </ul>
                        <ul>
                            <li style={{ color: "#2e26c6" }}><b>To</b></li>
                            <input type="date"></input>
                        </ul>
                        <div className="ms-5 mt-3 search-button">
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </div>
                    <div className='d-flex  mb-3 right-button'>
                        <div className="ms-5 mt-3 search-button">
                            <button className="btn btn-primary" type="submit"><AiFillFileExcel />Export To Excel</button>
                        </div>
                        <div className="ms-5 mt-3 search-button">
                            <button className="btn btn-danger" type="submit"><AiFillFilePdf />Export To PDF</button>
                        </div>
                    </div>

                    <div className="container">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">TXN Date & time</th>
                                    <th scope="col">TXN Id</th>
                                    <th scope="col">Merchant Ref No</th>
                                    <th scope="col">TXN BC</th>
                                    <th scope="col">Card Number</th>
                                    <th scope="col">Bank Name</th>
                                    <th scope="col">TXN Amount</th>
                                    <th scope="col">Bank RRN</th>
                                    <th scope="col">Remarks</th>
                                    <th scope="col">status</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>21-9-2025</td>
                                    <td>776736434</td>
                                    <td>Active</td>
                                    <td>Delhi</td>
                                    <td>gdgd</td>
                                    <td>gdgd</td>
                                    <td>
                                        <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-primary">Verify</button></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>21-9-2025</td>
                                    <td>776736434</td>
                                    <td>harshit@gmail.com</td>
                                    <td>Delhi</td>
                                    <td>gdgd</td>
                                    <td>gdgd</td>
                                    <td>
                                        <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-primary">Verify</button></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>21-9-2025</td>
                                    <td>776736434</td>
                                    <td>harshit@gmail.com</td>
                                    <td>Delhi</td>
                                    <td>gdgd</td>
                                    <td>gdgd</td>
                                    <td>
                                        <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-primary">Verify</button></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreditCardPayment;
