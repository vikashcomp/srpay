import React, { useEffect, useState } from 'react';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import { toast } from "react-toastify";
import { useUserProfile, useUserwalletBalance } from '../customHooks/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { genFtrMoveDistributor, saveFtrMoveDistributor } from '../redux/actions/moveDistributorAction';

const MoveDistributor = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const dispatch = useDispatch();

    const [Current_outtStanding, setCurrentOutStanding] = useState("")
    const [avilLimit, setAvilLimit] = useState("")
    const [eligble_limit, setEligibleLimit] = useState("")
    const [amount, setAmount] = useState("")

    const userDataid = JSON.parse(window.localStorage.getItem('tokenData'))


    const { genFtrMovDisData } = useSelector((state) => state.moveDistributorForm)
    console.log('genFtrMovDisData', genFtrMovDisData)



    useEffect(() => {
        dispatch(genFtrMoveDistributor({ access_token: userDataid }))
    }, [])


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const data = { access_token: userDataid, req_amount: Number(amount), ntras_id: genFtrMovDisData?.data?.nentryid };
            const res = await dispatch(saveFtrMoveDistributor(data));

            if (res.success === true) {
                setAmount('');
                toast.success("Fund Transfer Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                });
            } else {
                toast.error('Something Went Wrong');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div>
                <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container fundRequestHistory mt-3 mb-5'>
                <h2 style={{ color: "#e21d24" }}>Move To <span style={{ color: "#2e26c6" }}> Distributor</span></h2>
                <div className='main-bg'>
                    <div className='row p-5'>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>FTR Refrance Number</b></label>
                            <input type="text" className="form-control" id="inputPassword4" name='ftr_no' value={genFtrMovDisData?.data?.ftr_no} disabled />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Distributor Id</b></label>
                            <input type="text" className="form-control" id="inputPassword4" name='parent_id_str' value={genFtrMovDisData?.data?.parent_id_str} disabled />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Name</b></label>
                            <input type="text" className="form-control" id="inputPassword4" name='parent_name' value={genFtrMovDisData?.data?.parent_name} disabled />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Contact Number</b></label>
                            <input type="text" className="form-control" id="inputPassword4" name='parent_mobile' value={genFtrMovDisData?.data?.parent_mobile} disabled />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Current OutStanding</b></label>
                            <input type="text" className="form-control" id="inputPassword4" value={Current_outtStanding} onChange={(e) => { setCurrentOutStanding(e.target.value) }} />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Available Limit</b></label>
                            <input type="text" className="form-control" id="inputPassword4" value={walletBalanceData?.data?.wallet_bal
                  } onChange={(e) => { setAvilLimit(e.target.value) }} disabled />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Eligible Limit</b></label>
                            <input type="text" className="form-control" id="inputPassword4" value={eligble_limit} onChange={(e) => { setEligibleLimit(e.target.value) }} />
                        </div>
                        <div className='col-md-4'>
                            <label htmlFor="inputPassword4" className="mt-2"><b>Amount</b></label>
                            <input type="text" className="form-control" id="inputPassword4" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                        </div>

                        <div className='col-md-4 process-button'>
                            <button className="btn btn-primary me-4" type="submit">Cancel</button>
                            <button className="btn btn-primary" type="submit" onClick={handleSubmit}> Process </button>
                        </div>
                        <div className='term mt-5'>
                            <h5>Terms & Conditions</h5>
                            <li>Transfer Timing are between 9am to 6pm daily</li>
                            <li>Maximum 15 Transaction  allowed per day</li>
                            <li>Minimum amount per transaction is Rs.100</li>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MoveDistributor;
