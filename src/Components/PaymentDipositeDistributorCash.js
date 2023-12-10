import React from 'react';
import logo from "../images/logo.png";
import logout from "../images/logout.png";
import transfer from "../images/transfer.png";
import qr from "../images/qr.png";
import refund from "../images/refund.png";
import database from "../images/database.png";
import user from "../images/user.png";
import filled from "../images/filled.png";


const PaymentDipositeDistributorCash = () => {
    return (
        <>
            {/* <div>
                
                <header class="d-flex flex-wrap justify-content-center border-bottom top-header">
                    <div class="container-fluid">
                        <div className='row'>
                            <div className='col-lg-4'>
                                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                    <div class="logo p-1">
                                        <img class="img-fluid" src={logo} />
                                        <p className="logo-detail">
                                            <b>HELLO , SR PAY PRIVATE LIMITED</b>
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-8 mt-1 contactus">
                                <div class="row mb-2 ">
                                    <div class="col-lg-3 col-md-2 col-sm-2 col-xs-10 " >
                                        <span className='size'>contact Us: +834588584</span>
                                    </div>
                                    <div class="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                                        <span className='size'>xyz comm</span>
                                    </div>
                                    <div class="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                                        <img class="img-fluid pe-2" src={filled} width="25px" />
                                        <span className='size'>wallet Ballance 18.5</span>
                                    </div>
                                    <div class="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                                        <img class="img-fluid pe-2" src={filled} width="25px" />
                                        <span className='size'>Earning 100.1</span>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div class="col-lg-3 col-md-2 col-sm-2 col-xs-10 " >
                                        <span className='size'>Mail Us :Support@SRPAY.CO.IN</span>
                                    </div>
                                    <div class="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                                        <span className='size'>Agent Officual LoinID</span>
                                    </div>
                                    <div class="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                                        <img class="img-fluid pe-2" src={filled} width="25px" />

                                        <span className='size'>Reverse Balance(5000)</span>
                                    </div>
                                    <div class="col-lg-3 col-md-2 col-sm-2 col-xs-10 ">
                                        <img class="img-fluid pe-2" src={filled} width="25px" />

                                        <span className='size'>Remaing Payout(55.1)</span>
                                    </div>
                                </div>


                                <div className='row'>
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-10  me-4 box box5-bg-color text-center" >
                                        <img class="img-fluid" src={refund} width="25px" />
                                        <h6 className='d-inline'><b>Request Money</b></h6>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-10  me-4 box box1-bg-color  text-center">
                                        <img class="img-fluid" src={qr} width="25px" />
                                        <h6 className='d-inline'><b>UPI QR</b></h6>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-10  me-4 box  box4-bg-color text-center">
                                        <img class="img-fluid" src={database} width="25px" />
                                        <h6 className='d-inline'><b>E-Collect</b></h6>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-10  me-4 box  box2-bg-color text-center">
                                        <img class="img-fluid" src={transfer} width="25px" />
                                        <h6 className='d-inline'><b>Instant Topup</b></h6>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-10  me-4 box  box3-bg-color text-center">
                                        <img class="img-fluid" src={user} width="25px" />
                                        <h6 className='d-inline'><b>Fund Request</b></h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>


                
                <nav class="navbar navbar-expand-lg bg-body-tertiary nav-recharge">
                    <div class="container-fluid">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                Accounts
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Wallet
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Banking Service
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Utility Services
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Travel
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CMS
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                MY Profile
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Repots
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <img class="img-fluid" src={logout} width="25px" />
                    </div>
                </nav>
            </div> */}

            {/* --------------Payment Diposite Distributor-------- */}
            <div className='container mt-5 mb-5'>
                <h2 style={{ color: "#2e26c6" }}>Payment Deposit <span style={{ color: "#e21d24" }}>Distributor</span></h2>
                <div className='row main-bg '>
                    <div class="col-md-4">
                        <label htmlFor="inputEmail4" class="form-label label-fund-request">UTR Refrance Number</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder='3344556678' />
                    </div>
                    <div class="col-md-4">
                        <label htmlFor="inputEmail4" class="form-label label-fund-request">Date & Time</label>
                        <input type="date" class="form-control" id="inputEmail4" placeholder='7-10-12' />
                    </div>
                    <div class="col-md-4">
                        <label htmlFor="inputEmail4" class="form-label label-fund-request">Current Outstanding</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder='5500' />
                    </div>
                    <div class="col-md-4">
                        <label htmlFor="inputEmail4" class="form-label label-fund-request">Diposite Amount</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder='500' />
                    </div>
                    <div class="col-md-4">
                        <label htmlFor="inputPassword4" className="form-label label-fund-request">Mode</label>
                        <select className="form-select" >
                            <option>cash</option>
                            <option value="cash">Net Banking</option>
                            <option value="Net Banking">UPI</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label htmlFor="inputEmail4" class="form-label label-fund-request">Remarks</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder='Lorem Ipsm dolor' />
                    </div>
                    <div className="button">
                        <button className="btn btn-primary" style={{ backgroundColor: "blue" }} type="submit">Process</button>
                    </div>

                    <div className='container fundRequestHistory mt-3'>
                        <h2 style={{ color: "#e21d24" }}>Payment <span style={{ color: "#2e26c6" }}> History</span></h2>
                        <div className='row'>
                            <div className='col-12 mt-3 mb-3 '>
                                <div className='col-4 d-flex '>
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
                                        <button className="btn btn-primary" type="submit">Export To Excel</button>
                                    </div>
                                    <div className="ms-5 mt-3 search-button">
                                        <button className="btn btn-danger" type="submit">Export To PDF</button>
                                    </div>
                                </div>

                                <div class="container">
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Date & Time</th>
                                                <th scope="col">TxN Id</th>
                                                <th scope="col">Deposit Mode</th>
                                                <th scope="col"> Outstanding Amount</th>
                                                <th scope="col">Deposite Amount</th>
                                                <th scope="col">Agent Remarks</th>
                                                
                                                <th scope="col">Status</th>
                                                <th scope="col">Distributor Remarks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">10-12-2023</th>
                                                <td>truyt6754342</td>
                                                <td>UPI</td>
                                                <td>20,000000</td>
                                                <td>10,0000</td>
                                                <td>Lorem Ipusum</td>
                                                <td>
                                                    <i to="/verify-kyc" class="Blue"><button type="button" class="btn btn-outline-success btn-sm me-3">Approve</button></i>
                                                    {/* <i to="/verify-kyc" class="Blue"><button type="button" class="btn btn-outline-danger btn-sm">Reject</button></i> */}
                                                </td>
                                                <td>Lorem Ipusum</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">10-12-2023</th>
                                                <td>truyt6754342</td>
                                                <td>UPI</td>
                                                <td>20,000000</td>
                                                <td>10,0000</td>
                                                <td>Lorem Ipusum</td>
                                                <td>
                                                    {/* <i to="/verify-kyc" class="Blue"><button type="button" class="btn btn-outline-success btn-sm me-3">Approve</button></i> */}
                                                    <i to="/verify-kyc" class="Blue"><button type="button" class="btn btn-outline-danger btn-sm">pending</button></i>
                                                </td>
                                                <td>Lorem Ipusum</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">10-12-2023</th>
                                                <td>truyt6754342</td>
                                                <td>UPI</td>
                                                <td>20,000000</td>
                                                <td>10,0000</td>
                                                <td>Lorem Ipusum</td>
                                                <td>
                                                    {/* <i to="/verify-kyc" class="Blue"><button type="button" class="btn btn-outline-success btn-sm me-3">Approve</button></i> */}
                                                    <i to="/verify-kyc" class="Blue"><button type="button" class="btn btn-outline-danger btn-sm"> Rejected</button></i>
                                                </td>
                                                <td>Lorem Ipusum</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentDipositeDistributorCash;
