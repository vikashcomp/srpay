import React from 'react';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const BankDetail = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mb-3 mt-5'>
                <h2>Bank Details</h2>
                <div className='row main-bg'>

                    <div className='col-md-4 bank-details-li '>
                        <ul>
                            <li>Canara Syndicate Bank-Cash Diposite Only</li>
                            <li>A/C Name : SR Pay Private Limited</li>
                            <li>A/C No : 6098765445</li>
                            <li>IFSC Code : SYNB0008262</li>
                            <li>Branch : SOHANA REWARI ROAD,DHARUHERA</li>
                        </ul>
                    </div>
                    <div className='col-md-4 bank-details-li'>
                        <ul>
                            <li>IndusInd Bank-Online Transfer Only</li>
                            <li>A/C Name : SR Pay Private Limited</li>
                            <li>A/C No : 6098765445</li>
                            <li>IFSC Code : SYNB0008262</li>
                            <li>Branch : Bhagat Singh Colony</li>
                        </ul>
                    </div>
                    <div className='col-md-4 bank-details-li' >
                        <ul>
                            <li>Canara Syndicate Bank-Cash Diposite Only</li>
                            <li>A/C Name : SR Pay Private Limited</li>
                            <li>A/C No : 70987654355</li>
                            <li>IFSC Code : SYNB0008262</li>
                            <li>Branch : SOHANA REWARI ROAD,DHARUHERA</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}

export default BankDetail
