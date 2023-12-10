import React from 'react';
import qr from "../images/qr-code.png";
import aps from "../images/aps.png";
import rupee from "../images/rupee.png";
import recharge from "../images/recharge.png";
import paymentGateway from "../images/payment-gateway.png";
import cardMachine from "../images/card-machine.png";
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import { useUserProfile, useUserwalletBalance } from '../customHooks/hooks';

const DistributorState = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
            <div>
                <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>

            <div className='container main-bg mt-5 mb-5'>
                <h2 clasName="mb-2" style={{ color: "red", }}>Today Sales</h2>
                <hr />
                <div className='container '>
                    <div className='row  justify-content-around '>
                        <div className='col-lg-2   distributor-box btn btn-light' >
                            <img className="img-fluid" src={aps} alt='image-aps' />
                            <div>
                                <h6>Aeps </h6>
                                <h6>₹:120000</h6>
                                <h6>Incentice:12</h6>
                            </div>
                        </div>
                        <div className='col-lg-2   text-center distributor-box '>
                            <img className="img-fluid " src={rupee} alt='image' />
                            <div>
                                <h6>Money Transfer</h6>
                                <h6> ₹:120000</h6>
                                <h6>Incentive:12</h6>
                            </div>

                        </div>
                        <div className='col-lg-2  text-center distributor-box '>
                            <img className='img-fluid' src={recharge} alt='image-recharge' />
                            <div>
                                <h6>Recharge</h6>
                                <h6> ₹:10000</h6>
                                <h6>Incentive:10</h6>
                            </div>

                        </div>

                        <div className='col-lg-2 text-center distributor-box '>
                            <img className='img-fluid' src={cardMachine} alt='card-machine' />
                            <div>
                                <h6>MATM</h6>
                                <h6>₹:8000</h6>
                                <h6>Incentive:55</h6>
                            </div>

                        </div>
                        <div className='row justify-content-around mt-4'>
                            <div className='col-lg-2   text-center distributor-box '>
                                <img className='img-fluid' src={qr} alt='img-qr' />
                                <div>
                                    <h6>UPI QR</h6>
                                    <h6>₹:120000</h6>
                                    <h6>count:12</h6>
                                </div>

                            </div>

                            <div className='col-lg-2   text-center distributor-box '>
                                <img className='img-fluid' src={paymentGateway} alt='image-paymentGatway' />
                                <div>
                                    <h6>Payment Gateway</h6>
                                    <h6> ₹:550000 </h6>
                                    <h6>count:12</h6>
                                </div>

                            </div>

                            <div className='col-lg-2  text-center distributor-box '>
                                <img className='img-fluid' src={rupee} alt='image-rupee' />
                                <div>
                                    <h6>Utility Gateway</h6>
                                    <h6>₹:700</h6>
                                    <h6> count:1</h6>
                                </div>

                            </div>

                            <div className='col-lg-2    text-center distributor-box '>
                                <img className='img-fluid' src={paymentGateway} alt='image-payment' />
                                <div>
                                    <h6>GTV sales</h6>
                                    <h6> ₹:300000</h6>
                                    <h6>Incentive:55</h6>
                                </div>

                            </div>
                        </div>

                    </div>
                    <hr />

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

                    <div className='row justify-content-around mt-5 pb-5'>
                        <div className='col-lg-2  text-center distributor-box '>
                            <img className="img-fluid" src={aps} alt='image-proper' />
                            <div>
                                <h6>Aeps </h6>
                                <h6>₹:120000</h6>
                                <h6>Incentice:12</h6>
                            </div>
                        </div>


                        <div className='col-lg-2   text-center distributor-box '>
                            <img className="img-fluid" src={rupee} alt='image-proper' />
                            <div>
                                <h6>Money Transfer</h6>
                                <h6>₹:120000 </h6>
                                <h6>Incentive:12</h6>
                            </div>

                        </div>

                        <div className='col-lg-2    text-center distributor-box '>
                            <img className='img-fluid' src={recharge} alt='image-proper' />
                            <div>
                                <h6>Recharge</h6>
                                <h6>₹:10000</h6>
                                <h6>Incentive:10</h6>
                            </div>
                        </div>

                        <div className='col-lg-2    text-center distributor-box gx-5'>
                            <img className='img-fluid' src={cardMachine} alt='image-proper' />
                            <div>
                                <h6>MATM </h6>
                                <h6> ₹:8000 </h6>
                                <h6>Incentive:55</h6>
                            </div>
                        </div>
                        <div className='row justify-content-around mt-4'>
                            <div className='col-lg-2   text-center distributor-box gx-5'>
                                <img className='img-fluid' src={qr} alt='image-proper' />
                                <div>
                                    <h6>UPI qr</h6>
                                    <h6>₹:120000 </h6>
                                    <h6>count:12</h6>
                                </div>

                            </div>

                            <div className='col-lg-2   text-center distributor-box gx-5'>
                                <img className='img-fluid' src={paymentGateway} alt='image-proper' />
                                <div>
                                    <h6>Payment Gateway</h6>
                                    <h6>₹:550000</h6>
                                    <h6>count:12</h6>
                                </div>

                            </div>

                            <div className='col-lg-2  text-center distributor-box gx-5'>
                                <img className='img-fluid' src={rupee} alt='image-proper' />
                                <div>
                                    <h6>Utility Gateway</h6>
                                    <h6>₹:700 </h6>
                                    <h6>count:1</h6>
                                </div>
                            </div>

                            <div className='col-lg-2    text-center distributor-box gx-5'>
                                <img className='img-fluid' src={paymentGateway} alt='image-proper' />
                                <div>
                                    <h6>GTV sales</h6>
                                    <h6> ₹:300000 </h6>
                                    <h6>Incentive:55</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default DistributorState;