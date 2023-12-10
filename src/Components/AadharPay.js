import React from 'react';
import { useUserProfile } from '../customHooks/hooks';
import srpayMoney from "../images/srpayMoney.jpg";
import UserHeader from './UserHeader';
import UserNav from './UserNav';

const AadharPay = () => {
    const { kycData } = useUserProfile();
    return (
        <>
            <div>
                <UserHeader kycData={kycData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mb-5 mt-5'>
                <div className='row main-bg'>
                    <div className='col-md-8 '>
                        <div className='row mt-2'>
                            <div className='col-md-3 '>
                                <label htmlFor="inputEmail4" className="form">Select Your Service</label>
                                <select className="form-select" >

                                    <option value="cash">cash withdrawal</option>
                                    <option value="Mini Statement">Mini statement</option>
                                    <option value="Balance Enquery">Balance Enquiry</option>
                                </select>
                            </div>
                            <div className='col-md-3 '>
                                <label htmlFor="inputEmail4" className="form">Select  Device Type</label>
                                <select className="form-select" >
                                    <option>Select  Device Type</option>
                                    <option value="cash">Mantra</option>
                                    <option value="cash">Morpho</option>
                                    <option value="Net Banking">Secugen</option>
                                    <option value="Net Banking">Startek</option>
                                    <option value="Net Banking">Precision</option>
                                    <option value="Net Banking">Next Biometric</option>
                                    <option value="Net Banking">Morpho New</option>
                                    <option value="Net Banking">Aratek</option>
                                </select>
                            </div>
                            <div className='col-md-4'>
                                <label htmlFor="inputEmail4" className="form">Enter  Customer Mobile Number</label>
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping">+91-</span>
                                    <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <label htmlFor="inputEmail4" className="form">Enter Adhar Number Vertual/ID</label>
                                <div className='col-md-2'>
                                    <select className="form-select" >
                                        <option>AAdhar</option>
                                        <option value="cash">VID</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <label htmlFor="inputEmail4" className="form">Enter Amount You Like To Withraw or select from fast Cash </label>
                                <div className='col-md-2'>
                                    <div className="input-group flex-nowrap">
                                        <span className="input-group-text" id="addon-wrapping">Rs</span>
                                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <input type="text" className="form-control" placeholder="OR" />
                                </div>
                                <div className='col-md-2'>
                                    <input type="text" className="form-control" placeholder="500" disabled />
                                </div>
                                <div className='col-md-2'>
                                    <input type="text" className="form-control" placeholder="1000" disabled />
                                </div>
                                <div className='col-md-2'>
                                    <input type="text" className="form-control" placeholder="2000" disabled />
                                </div>
                                <div className='col-md-2'>
                                    <input type="text" className="form-control" placeholder="3000" disabled />
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <label htmlFor="inputEmail4" className="form">Select Bank</label>
                                <div className='col-md-3'>
                                    <select className="form-select" >
                                        <option>Select  Your bank</option>
                                        <option value="cash">SBI</option>
                                        <option value="Net Banking">PNB</option>
                                    </select>
                                </div>
                                <div className='col-md-1'>
                                    <input type="text" className="form-control" placeholder="OR" />
                                </div>
                                <div className='col-md-2'>
                                    <input type="text" className="form-control" placeholder="Bank of India" />
                                </div>
                                <div className='col-md-2'>
                                    <input type="text" className="form-control" placeholder="Bank of baroda plus vijay bank" />
                                </div>
                                <div className='col-md-2'>
                                    <input type="text" className="form-control" placeholder="pnb" disabled />
                                </div>
                                <div className='col-md-2'>
                                    <input type="text" className="form-control" placeholder="sbi" disabled />
                                </div>

                            </div>
                            <div>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        <p>
                                            I conform that i have approchaed sr pay private limited acting as buisness corresspondent of NDLS Bank,toacess AEPS service(Cash Withdrawl/ Cash Diposite/other services under it of NSDL Bank)
                                        </p>
                                    </label>

                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-6'>
                                    <input type="text" className="form-control" placeholder="SCAN FINGER PRINT AND SUBMIT" disabled />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <p>please read advisory carefully while doing AePS transaction</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <img src={srpayMoney} className="img-fluid" width="423px" alt='proper'></img>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AadharPay
