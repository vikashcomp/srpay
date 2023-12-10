import React, { useEffect } from 'react';
import user from "../images/user.png";
import { getKyc } from '../redux/actions/kycAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const UserProfileStatus = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const { kycData } = useSelector((state) => state.kycForm)

    const userDataid = JSON.parse(window.localStorage.getItem('tokenData'))

    useEffect(() => {



        dispatch(getKyc({ access_token: userDataid }))
      
      }, [])


    return (
        <>
            <div className='container mb-4'>
                <h2 className="fw-bold" style={{ color: "blue" }}>Profile <span style={{ color: "#e21d24" }}>Info</span></h2>
                <div className='row gx-5'>
                    <div className='col-lg-6 profile-left'>
                        <div className="profile-img">
                            <img className="img-fluid image" src={user} width="50px" alt="" />
                            <h3 className="raj">{kycData.cust_name}</h3>
                            <h6 className="user">{kycData.userId}</h6>
                        </div>
                        <div className='profile-detials'>
                            <div className='details'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h5><b>Pan Number</b></h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6>{kycData.pan_no}</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='details'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h5><b>Mobile No</b></h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6>{kycData.mobile_no}</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='details'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h5><b>Email ID</b></h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6>{kycData.email_id}</h6>
                                    </div>
                                </div>
                            </div>


                            <div className='details'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h5><b>D.O.B</b></h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6>{kycData.dob}</h6>
                                    </div>
                                </div>
                            </div>



                            <div className='details'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h5><b>Aadhar Image</b></h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6 className="not-verified">{kycData}</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='details'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h5><b>Pan Image</b></h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6 className="not-verified">Not Verified Yet</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='details'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h5><b>Bank Proof</b></h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6 className="not-verified" >Not Verified Yet</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-lg-6 profile-right'>

                        <h2>Show Status</h2>
                        


                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfileStatus;
