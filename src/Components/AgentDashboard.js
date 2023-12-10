import React from 'react';
import gear from "../images/gear.png";
import wallet from "../images/wallet.png";
import unnamed from "../images/unnamed.png";
import transferMoney from "../images/transfer-money.png";
import creditCard from "../images/credit-card.png";
import qr from "../images/qr-code.png";

import rupee from "../images/rupee.png";
import utility from "../images/utility.png";
import refund from "../images/refund.png";
import moneytransfer from "../images/money-transfer.png";

import mobileTransfer from "../images/mobile-transfer.png";
import umbrella from "../images/umbrella.png";
import selfCollect from "../images/self-collect.png";
import fav from "../images/fav.png";
import kyc from "../images/kyc.png";
import aps from "../images/aps.png";
import bill from "../images/bill.png";
import adhar from "../images/adhar1.png";
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';


const AgentDashboard = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
            <div>
                <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>

            <div className='container agent-dashboard mt-3'>
                <div className='row'>
                    {/* -------1st-------- */}
                    <h4 className='head'>Recharges</h4>
                    <hr />
                    <div className='col-3 agent-box gx-5'>
                        <div className=" main-bg  text-center ">
                            <img className='img-fluid' src={unnamed}></img>
                            <h6>Mobile/Dth</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box gx-5'>
                        <div className=" main-bg  text-center ">
                            <img className='img-fluid' src={wallet}></img>
                            <h6>Wallet Reacharge</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box   gx-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={transferMoney}></img>
                            <h6>Instant Topup</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box   gx-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={creditCard}></img>
                            <h6>Card Payment</h6>
                        </div>
                    </div>
                    {/* ---------2nd-------- */}

                    <h4 className='head'>Payment</h4>
                    <hr />
                    <div className='col-3 agent-box  gx-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={aps}></img>
                            <h6>AEPS</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box  gx-5 '>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={rupee}></img>
                            <h6>Money Transfer</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box   gx-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={adhar}></img>
                            <h6>Aadhar Pay</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box  gx-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={qr}></img>
                            <h6>UPI QR</h6>
                        </div>
                    </div>
                    {/* ----------3rd------------ */}

                    <div className='col-3 agent-box   gx-5'>
                        <div className=" main-bg  text-center ">
                            <img className='img-fluid' src={bill}></img>
                            <h6>Bharat Bill Pay</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box   gx-5'>
                        <div className=" main-bg  text-center ">
                            <img className='img-fluid' src={qr}></img>
                            <h6>Instant Qr Pay</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box gx-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={refund}></img>
                            <h6>Payout settelment</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box  gx-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={utility}></img>
                            <h6>Utility Payment</h6>
                        </div>
                    </div>

                    {/* --------4th---------- */}


                    <div className='col-3 agent-box gx-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={selfCollect}></img>
                            <h6>E-Collect</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box  gx-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={moneytransfer}></img>
                            <h6>Qr Fund Transfer</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box   gx-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={mobileTransfer}></img>
                            <h6>Nepal Money Transfer</h6>
                        </div>
                    </div>
                    {/* -------------5th---------- */}

                    <h4 className='head'>Others</h4>
                    <hr />
                    <div className='col-3 agent-box  gx-5 mb-5'>
                        <div className=" main-bg  text-center">
                            <img className='img-fluid' src={fav} ></img>
                            <h6>Cash Collection</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box    gx-5'>
                        <div className="main-bg  text-center">
                            <img className='img-fluid' src={umbrella}></img>
                            <h6>Insurance Premium</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box    gx-5'>
                        <div className="main-bg  text-center">
                            <img className='img-fluid' src={kyc} ></img>
                            <h6>Patner KYC</h6>
                        </div>
                    </div>
                    <div className='col-3 agent-box   gx-5'>
                        <div className="main-bg  text-center">
                            <img className='img-fluid' src={gear} ></img>
                            <h6>Bank Setting</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AgentDashboard;
