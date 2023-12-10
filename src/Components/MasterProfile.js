import React from 'react'
import logo from '../images/sr.jpg'
import aps from '../images/aps.png'
import recharge from '../images/recharge.png'
import homeButton from '../images/home-button.png'
import logout from '../images/logout.png'
import cardMachine from '../images/card-machine.png'
import qrCode from '../images/qr-code.png'
import paymetGateway from '../images/payment-gateway.png'
import rupee from '../images/rupee.png'
import walletFilled from '../images/wallet-filled-money-tool.png'
import refund from '../images/refund.png'
import qr from '../images/qr-code.png'
import transferMoney from '../images/transfer-money.png'
import database from '../images/database.png'
import user from '../images/user.png'
import thumbUp from '../images/thumb-up.png'
const MasterProfile = () => {
    return (
        <>

            <header className="d-flex flex-wrap justify-content-center border-bottom top-header">


                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <div className="logo p-3">
                        <img className="img-fluid" src={logo} />
                    </div>
                </a>
                <div className="col-lg-8 mt-1 contactus">
                    <div className="row mb-2 ">
                        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10 " >
                            <span className='size'>contact Us: +834588584</span>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                            <span className='size'>xyz comm</span>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                            <img className="img-fluid pe-2" src={walletFilled} width="25px" />
                            <span className='size'>wallet Ballance 18.5</span>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                            <img className="img-fluid pe-2" src={walletFilled} width="25px" />
                            <span className='size'>Earning 100.1</span>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10 " >
                            <span className='size'>Mail Us :Support@SRPAY.CO.IN</span>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                            <span className='size'>Master Official LoginID</span>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                            <img className="img-fluid pe-2" src={walletFilled} width="25px" />

                            <span className='size'>Reverse Balance(5000)</span>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10 ">
                            <img className="img-fluid pe-2" src={walletFilled} width="25px" />

                            <span className='size'>Remaing Payout(55.1)</span>
                        </div>
                    </div>

                    <div className='links'>
                        <ul className='list-unstyled d-flex justify-content-around'>
                            <a href="" style={{ backgroundColor: "#d493f2" }}>
                                <li>
                                    <img src={thumbUp} width="25px" alt="Fund Approve" />
                                    <h6 className='d-inline'><b>Fund Approve</b></h6>
                                </li>
                            </a>
                            <a href="" style={{ backgroundColor: "#b08888" }}>
                                <li>
                                    <img src={refund} width="25px" alt="Request Money" />
                                    <h6 className='d-inline'><b>Request Money</b></h6>
                                </li>
                            </a>
                            <a href="" style={{ backgroundColor: "#748ee5" }}>
                                <li>
                                    <img src={database} width="25px" alt="E-Collect" />
                                    <h6 className='d-inline'><b>E-Collect</b></h6>
                                </li>
                            </a>
                            <a href="" style={{ backgroundColor: "#9a8e56" }}>
                                <li>
                                    <img src={qr} width="25px" alt="UPI QR" />
                                    <h6 className='d-inline'><b>UPI QR</b></h6>
                                </li>
                            </a>
                            <a href="" style={{ backgroundColor: "#fce896" }}>
                                <li>
                                    <img src={transferMoney} width="25px" alt="Instant Topup" />
                                    <h6 className='d-inline'><b>Instant Topup</b></h6>
                                </li>
                            </a>
                            <a href="" style={{ backgroundColor: "#afef9d" }}>
                                <li>
                                    <img src={user} width="25px" alt="Fund Request" />
                                    <h6 className='d-inline'><b>Fund Request</b></h6>
                                </li>
                            </a>
                        </ul>
                    </div>


                </div>
            </header>

            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navba₹upportedContent" aria-controls="navba₹upportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navba₹upportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Accounts
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="Instant Topup">Instant Topup</a></li>
                                    <li><a className="dropdown-item" href="Fund Request">Fund Request</a></li>
                                    <li><a className="dropdown-item" href="Bank Deatils">Bank Details</a></li>
                                    <li><a className="dropdown-item" href="E-Collect">E-Collect</a></li>
                                    <li><a className="dropdown-item" href="Create Distributor">Create Distributor</a></li>
                                    <li><a className="dropdown-item" href="Manage Distributor">Manage Distributor</a></li>
                                    <li><a className="dropdown-item" href="Create partner">Create Partner</a></li>
                                    <li><a className="dropdown-item" href="Manage Partner">Manage Partner</a></li>
                                    <li><a className="dropdown-item" href="Commissions">Commissions</a></li>
                                    <li><a className="dropdown-item" href="Revoke Topup">Revoke Topup</a></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Wallet
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reports
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="Ledger">Ledger</a></li>
                                    <li><a className="dropdown-item" href="Transaction Recon">Transaction Recon</a></li>
                                    <li><a className="dropdown-item" href="Fund Request Report">Fund Request Report</a></li>
                                    <li><a className="dropdown-item" href="Distributor Performance">Distributor Performance</a></li>
                                    <li><a className="dropdown-item" href="Distributor Topup Report">Distributor Topup Report</a></li>
                                    <li><a className="dropdown-item" href="Topup Request Report"> partner Topup Report</a></li>
                                    <li><a className="dropdown-item" href="FTR Status Report">FTR Status Report</a></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Transaction Status
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="Partner Ledger">Partner Ledger</a></li>
                                    <li><a className="dropdown-item" href="Transaction Status">Transaction Status</a></li>
                                    <li><a className="dropdown-item" href="Sender Number">Sender Number</a></li>
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Device/Product
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="Request Product">Request Product</a></li>
                                    <li><a className="dropdown-item" href="Replace / Repair">Replace / Repair</a></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    My Profile
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="BC Certificate">BC Certificate</a></li>
                                    <li><a className="dropdown-item" href="Distributor Certificate">Distributor Certificate</a></li>
                                    <li><a className="dropdown-item" href="Marketing Material">Marketing Material</a></li>
                                    <li><a className="dropdown-item" href="TDS Certificate">TDS Certificate</a></li>
                                    <li><a className="dropdown-item" href="GST Invoice">GST Invoice</a></li>
                                    <li><a className="dropdown-item" href="Partner e-KYC">Partner e-KYC</a></li>


                                </ul>
                            </li>


                        </ul>

                        <img className='img-fluid imgEdit' width={'25px'} src={homeButton} />

                        <img className='img-fluid' width={'25px'} src={logout} />

                    </div>
                </div>
            </nav>
        </>
    )
}

export default MasterProfile
