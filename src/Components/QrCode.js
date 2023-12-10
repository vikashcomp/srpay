import React, { useState } from 'react'
import GenerateQr from './GenerateQr';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import { useUserProfile } from '../customHooks/hooks';

const QrCode = () => {
    const { kycData } = useUserProfile();
    const [amount, setAmount] = useState('')
    return (
        <>
         <div>
                <UserHeader kycData={kycData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mt-5'>
                <h2 style={{ color: 'blue' }}> QR <span style={{ color: 'red' }}>Code</span></h2>
                <div className='row main-bg mb-5'>
                    <div className="col-md-6 d-flex mx-auto ">
                        <label htmlFor="inputEmail4" className="form-label"></label>
                        <input type="" className="form-control" id="inputEmail4" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <div className='col-md-4 ms-5'>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Generate QR
                            </button>
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Qr For Srpay</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <GenerateQr value={amount} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h2 style={{ color: 'blue' }}>Payment <span style={{ color: 'red' }}>History</span></h2> */}

            </div>
        </>
    )
}

export default QrCode
