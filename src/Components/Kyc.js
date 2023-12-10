import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import logo from '../images/sr.jpg'
import moment from 'moment';
import { getKyc } from '../redux/actions/kycAction';
import { useSelector } from 'react-redux';
import { getForm } from '../redux/actions/formAction';

import { useUserProfile } from "../customHooks/hooks";

const initialState = {
    cust_name: "",
    pan_no: "",
    ac_type: "",
    pan_status: "",
    dob: '',
    age: '',
    mobile_no: "",
    father_name: "",
    email_id: "",

    pin_code: "",

    bank_ac_name: "",
    bank_ac_no: "",
    bank_ifsc: "",
    adhar_no: "",
    errors: {}

}

const Kyc = () => {
    const { kycDatam } = useUserProfile();

    const [loading, setLoading] = useState(false);
    const [reg_addr, setregAddr] = useState('')
    const [comm_addr, setcommAddr] = useState('')
    const [state_name, setStateName] = useState('')

    const [bank_proof, setBank_proof] = useState("")
    const [pan_proof, setPan_proof] = useState("")
    const [selfie_proof, setSelfie_proof] = useState("")
    const [adhar_proof, setAdhar_proof] = useState("")

    const [emailError, setEmailError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [iState, updateState] = useState(initialState);

    const handleSelfie = (e) => {
        setSelfie_proof(e.target.files[0]);
    }

    const handleBank = (e) => {
        setBank_proof(e.target.files[0]);
    }

    const handlePan = (e) => {
        setPan_proof(e.target.files[0]);
    }

    const handleAdhar = (e) => {
        setAdhar_proof(e.target.files[0]);
    }




    const userDataid = JSON.parse(window.localStorage.getItem('tokenData'))

    const { kycData } = useSelector((state) => state.kycForm)

    const { cust_name, pan_no, ac_type, pan_status, dob, age, errors, mobile_no, father_name, email_id, pin_code, bank_ac_name, bank_ac_no, bank_ifsc, adhar_no } = iState


    useEffect(() => {

        dispatch(getKyc({ access_token: userDataid }))

    }, [])

    useEffect(() => {
        if (dob !== "") {
            dateCal();
        }

    }, [dob])
    const dateCal = () => {

        let a = moment(new Date());
        let b = moment(new Date(dob));
        let temp = a.diff(b, 'years');
        updateState({ ...iState, age: temp })

    }


    const handleChange = (e) => {
        const { name, value } = e.target;

        updateState({ ...iState, [name]: value })

    }

    const handleEmailBlur = (e) => {
        const { value } = e.target;

        if (!/^.+?@.+?\..+$/.test(value)) {
            setEmailError("This format is not valid or empty");
        } else {
            setEmailError("");
        }
    };


    const handleCheckbox = (e) => [
        setcommAddr(reg_addr)
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        let formIsValid = handleValidation();

        if (formIsValid) {

            let bodyFormData = new FormData();
            bodyFormData.append('dob', dob);
            bodyFormData.append('father_name', father_name)
            bodyFormData.append('email_id', email_id)
            bodyFormData.append('state_name', state_name)
            bodyFormData.append('pin_code', pin_code)
            bodyFormData.append('reg_addr', reg_addr)
            bodyFormData.append('comm_addr', comm_addr)
            bodyFormData.append('bank_ac_name', bank_ac_name)
            bodyFormData.append('bank_ac_no', bank_ac_no)
            bodyFormData.append('bank_ifsc', bank_ifsc)
            bodyFormData.append('adhar_no', adhar_no)
            bodyFormData.append('bank_proof', bank_proof)
            bodyFormData.append('adhar_proof', adhar_proof)

            bodyFormData.append('pan_proof', pan_proof)
            bodyFormData.append('selfie_proof', selfie_proof)
            bodyFormData.append('access_token', userDataid)


            dispatch(getForm(bodyFormData)).then((res) => {


                if (res.success == true) {

                    toast.success('Your KYC is submit successfully, We will update you shortly', {
                        position: toast.POSITION.TOP_RIGHT

                    });

                    navigate('/profile')
                }

                else {
                    updateState({ ...iState })
                    toast.error('Invalid Data')


                }
            })
        }

    }


    // Validation//

    let handleValidation = () => {
        let error = {}
        let formIsValid = true
        if (!email_id.trim()) {
            error.emailIdError = "* Email Id can't be empty";
            formIsValid = false;
        } else {
            setLoading(false)
            if (!/^.+?@.+?\..+$/.test(email_id)) {
                error.emailIdError = "* Email format is not valid";
                formIsValid = false;
            }
        }

        if (!father_name.trim()) {
            error.fatherNameError = "* Name can't be empty";
            formIsValid = false;
        } else {
            setLoading(false)
            if (!/^[A-Za-z ]+$/.test(father_name)) {
                error.fatherNameError = "* Only alphabets are allowed";
                formIsValid = false;
            }
        }

        if (!dob) {
            setLoading(false)
            error.dobError = "* DOB can't be empty"
            formIsValid = false;
        } 
        // else {
        //     setLoading(false)
        //     if (age <= 18) {
        //         error.dobError = "Age Must be greater than or equal to 18"
        //         formIsValid = false;

        //     }
        // }

        if (!state_name) {
            setLoading(false)
            error.stateNameError = "* State Name can't be empty"
            formIsValid = false;
        }

        if (!adhar_no) {
            setLoading(false)
            error.adharNoError = "* Adhar No can't be empty"
            formIsValid = false;
        }


        if (!pin_code) {
            setLoading(false)
            error.pinCodeError = "* Pin Code can't be empty"
            formIsValid = false;
        }

        if (!reg_addr) {
            setLoading(false)
            error.regAddressError = "* Reg-Address can't be empty"
            formIsValid = false;
        }

        if (!comm_addr) {
            setLoading(false)
            error.comAddressError = "* Comm-Address can't be empty"
            formIsValid = false;
        }

        if (!bank_ac_no) {
            setLoading(false)
            error.accountNoError = "* Account No can't be empty"
            formIsValid = false;
        }

        if (!bank_ac_name) {
            setLoading(false)
            error.accountNameError = "* Account Name can't be empty"
            formIsValid = false;
        }

        if (!bank_ifsc) {
            setLoading(false)
            error.ifscCodeError = "* IFSC Code can't be empty"
            formIsValid = false;
        }

    if (!bank_proof) {
            setLoading(false)
            error.bankError = "* Please select bank proof"
            formIsValid = false;
        }
        if (!pan_proof) {
            setLoading(false)
            error.panError = "* Please select pan proof"
            formIsValid = false;
        }
        if (!selfie_proof) {
            setLoading(false)
            error.slefError = "* Please select selfie proof"
            formIsValid = false;
        }
        if (!adhar_proof) {
            setLoading(false)
            error.adharError = "* Please select adhar proof"
            formIsValid = false;
        }

        updateState({
            ...iState,
            errors: error
        });
        return formIsValid;
    }

const maxDate = new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    return (
        <>
            <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom top-header">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <div className="logo p-3">
                        <img className="img-fluid" src={logo} />
                    </div>
                </a>
                <ul className="nav nav-pills d-inline cta p-3 text-center">
                    <li className="nav-item"><a href=""><i className="fa-solid fa-phone"></i> 0123456789</a></li>
                    <li className="nav-item"><a href=""><i className="fa-solid fa-envelope"></i> example@gmail.com</a></li>
                </ul>
            </header>

            <div className="container p-5">
                <h1 className="h1" style={{ color: "#e21d24" }}>KYC <span style={{ color: "#2e26c6" }}>Update</span></h1>
                <div className="row">
                    <div className="col-lg-8 col-md-12 mx-auto success-page main-bg">
                        <h2 className="fw-bold" style={{ color: "#e21d24" }}>Personal<span style={{ color: "#2e26c6" }}> Details</span></h2>
                        <form className="row g-3" onSubmit={handleSubmit} >
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label"></label>
                                <input type="text" className="form-control" placeholder='Full Name*' name='cust_name' value={kycData.cust_name} disabled={true} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input type="text" className="form-control" placeholder='Father Name*' name='father_name' value={father_name} onChange={handleChange} />
                                <span style={{ color: 'red' }}>{errors?.fatherNameError}</span>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input type="number" className="form-control" placeholder='Mobile Number*' name='mobile_no' value={kycData.mobile_no} disabled={true} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input type="text" className="form-control" placeholder='Pan No*' name='pan_no' value={kycData.pan_no} disabled={true} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input type="text" className="form-control" placeholder='Pan Type' name='pan_type' value={kycData.pan_type} disabled={true} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input type="text" className="form-control" placeholder='Pan Status' name='pan_status' value={kycData.pan_status} disabled={true} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input type="date" className="form-control" placeholder='Enter DOB' max={maxDate} name='dob' value={dob} onChange={handleChange} />
                                <span style={{ color: 'red' }}>{errors?.dobError}</span>

                            </div>


                            <input type="hidden" className="form-control" placeholder='Enter Age' name='dob' value={age} onChange={handleChange} />


                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input type="text" className="form-control" placeholder='Email Address*' name='email_id' value={email_id} onChange={handleChange}  onBlur={handleEmailBlur}/>
                                <span style={{ color: 'red' }}>{errors?.emailIdError}</span>
                                <span style={{ color: 'red' }}>{emailError}</span>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input type="text" className="form-control" placeholder='Pincode*' name='pin_code' value={pin_code} onChange={handleChange} />
                                <span style={{ color: 'red' }}>{errors?.pinCodeError}</span>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label"></label>
                                <input type="text" className="form-control" placeholder='Aadhar No*' name='adhar_no' value={adhar_no} onChange={handleChange} />
                                <span style={{ color: 'red' }}>{errors?.adharNoError}</span>
                            </div>



                            <div className="col-md-6">

                                <select className="form-select" value={state_name} onChange={(e) => { setStateName(e.target.value) }}>
                                    <option>Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>

                                </select>
                                <span style={{ color: 'red' }}>{errors?.stateNameError}</span>

                            </div>



                            <div className="col-12">

                                <textarea rows="4" cols="50" type="text-area" className="form-control" id="inputAddress" placeholder="Registered Address*" name='reg_addr' value={reg_addr} onChange={(e) => { setregAddr(e.target.value) }} />
                                <span style={{ color: 'red' }}>{errors?.regAddressError}</span>
                            </div>
                            <div className="col-12">
                                <div className="form-check" onClick={handleCheckbox} >
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        <b>Same As Above</b>
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">

                                <textarea type="text" rows="4" cols="50" className="form-control" id="inputAddress2" placeholder="Communication Address*" name='comm_addr' value={comm_addr} onChange={(e) => { setcommAddr(e.target.value) }} />
                                <span style={{ color: 'red' }}>{errors?.comAddressError}</span>
                            </div>
                            <h2 className="fw-bold" style={{ color: "#e21d24" }}>Bank <span style={{ color: "#2e26c6" }}>Detail</span></h2>

                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label"></label>
                                <input type="Number" className="form-control" id="inputEmail4" placeholder='Account Number*' name='bank_ac_no' value={bank_ac_no} onChange={handleChange} />
                                <span style={{ color: 'red' }}>{errors?.accountNoError}</span>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label"></label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder='Bank Name*' name='bank_ac_name' value={bank_ac_name} onChange={handleChange} />
                                <span style={{ color: 'red' }}>{errors?.accountNameError}</span>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label"></label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder='IFSC code*' name='bank_ifsc' value={bank_ifsc} onChange={handleChange} />
                                <span style={{ color: 'red' }}>{errors?.ifscCodeError}</span>
                            </div>

                            <h2 className="fw-bold" style={{ color: "#e21d24" }}>Document <span style={{ color: "#2e26c6" }}>Upload</span></h2>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Aadhar proof*(self Attesed)</label>
                                <input type="file" className="form-control" id="inputEmail4" name='adhar_proof' onChange={handleAdhar} accept=".jpg, .jpeg, .png"
                                />
                                  <span style={{ color: 'red' }}>{errors?.adharError}</span>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Pan proof*(Self Attesed)</label>
                                <input type="file" className="form-control" id="inputEmail4" name='pan_proof' onChange={handlePan} accept=".jpg, .jpeg, .png"
                                />
                                  <span style={{ color: 'red' }}>{errors?.panError}</span>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Selfie proof*</label>
                                <input type="file" className="form-control" id="inputEmail4" name='selfie_proof' onChange={handleSelfie} accept=".jpg, .jpeg, .png"
                                />
                                  <span style={{ color: 'red' }}>{errors?.slefError}</span>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Bank proof*</label>
                                <input type="file" className="form-control" id="inputEmail4" name='bank_proof' onChange={handleBank}
                                    accept=".jpg, .jpeg, .png" />
                                      <span style={{ color: 'red' }}>{errors?.bankError}</span>
                            </div>
                            <div className="button py-1">
                                <button className="btn btn-primary" style={{ backgroundColor: "blue" }} type='submit' disabled={loading ? loading : loading}>{loading ? "LOADING" : 'Submit'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Kyc;




//------------------------------vikas---------------------//


// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import logo from '../images/sr.jpg'
// import moment from 'moment';
// import { getKyc } from '../redux/actions/kycAction';
// import { useSelector } from 'react-redux';
// import { getForm } from '../redux/actions/formAction';
// import { useLocation } from 'react-router-dom';




// const initialState = {
//     cust_name: "",
//     pan_no: "",
//     ac_type: "",
//     pan_status: "",
//     dob: '',
//     age: '',
//     mobile_no: "",
//     father_name: "",
//     email_id: "",

//     pin_code: "",

//     bank_ac_name: "",
//     bank_ac_no: "",
//     bank_ifsc: "",
//     adhar_no: "",
//     state_name:"",
//     reg_addr:"",
//     comm_addr:"",
//     errors: {}

// }

// const Kyc = () => {
//     const location = useLocation();
//     const { state: locationState } = location;
//     console.log("locationstate", locationState)
//     const kycDataFromLocation = locationState?.kycData || {};
//     console.log("location", kycDataFromLocation)

//     const [loading, setLoading] = useState(false);
//     // const [reg_addr, setregAddr] = useState('')
//     // const [comm_addr, setcommAddr] = useState('')
//     // const [state_name, setStateName] = useState('')

//     const [bank_proof, setBank_proof] = useState("")
//     const [pan_proof, setPan_proof] = useState("")
//     const [selfie_proof, setSelfie_proof] = useState("")
//     const [adhar_proof, setAdhar_proof] = useState("")

//     const [emailError, setEmailError] = useState("");

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [iState, updateState] = useState(initialState);

//     const handleSelfie = (e) => {
//         setSelfie_proof(e.target.files[0]);
//     }

//     const handleBank = (e) => {
//         setBank_proof(e.target.files[0]);
//     }

//     const handlePan = (e) => {
//         setPan_proof(e.target.files[0]);
//     }

//     const handleAdhar = (e) => {
//         setAdhar_proof(e.target.files[0]);
//     }


//     const userDataid = JSON.parse(window.localStorage.getItem('tokenData'))

//     const { kycData } = useSelector((state) => state.kycForm)

//     const { cust_name, pan_no, ac_type,state_name,comm_addr,reg_addr,pan_status, dob, age, errors, mobile_no, father_name, email_id, pin_code, bank_ac_name, bank_ac_no, bank_ifsc, adhar_no } = iState


//     useEffect(() => {

//         dispatch(getKyc({ access_token: userDataid }))

//     }, [])

//     useEffect(() => {
//         if (dob !== "") {
//             dateCal();
//         }

//     }, [dob])
//     const dateCal = () => {

//         var a = moment(new Date());
//         var b = moment(new Date(dob));
//         let temp = a.diff(b, 'years');
//         updateState({ ...iState, age: temp })

//     }


//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         updateState({ ...iState, [name]: value })

//     }

//     const handleEmailBlur = (e) => {
//         const { value } = e.target;

//         if (!/^.+?@.+?\..+$/.test(value)) {
//             setEmailError("This format is not valid or empty");
//         } else {
//             setEmailError("");
//         }
//     };


//     const handleCheckbox = (e) => {
//         // setcommAddr(reg_addr)
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         let formIsValid = handleValidation();
//         if (formIsValid) {

//             var bodyFormData = new FormData();
//             bodyFormData.append('dob', kycDataFromLocation.dob || dob);
//             bodyFormData.append('father_name', kycDataFromLocation.father_name || father_name)
//             bodyFormData.append('email_id', kycDataFromLocation.email_id || email_id)
//             bodyFormData.append('state_name', kycDataFromLocation.state_name ||state_name)
//             bodyFormData.append('pin_code', kycDataFromLocation.pin_code || pin_code)
//             bodyFormData.append('reg_addr', kycDataFromLocation.reg_addr ||reg_addr)
//             bodyFormData.append('comm_addr', kycDataFromLocation.comm_addr ||comm_addr)
//             bodyFormData.append('bank_ac_name', kycDataFromLocation.bank_ac_name || bank_ac_name)
//             bodyFormData.append('bank_ac_no', kycDataFromLocation.bank_ac_no || bank_ac_no)
//             bodyFormData.append('bank_ifsc', kycDataFromLocation.bank_ifsc || bank_ifsc)
//             bodyFormData.append('adhar_no', kycDataFromLocation.adhar_no || adhar_no)
//             bodyFormData.append('bank_proof', bank_proof)
//             bodyFormData.append('adhar_proof', adhar_proof)

//             bodyFormData.append('pan_proof', pan_proof)
//             bodyFormData.append('selfie_proof', selfie_proof)
//             bodyFormData.append('access_token', userDataid)

//             var bodyFormData = new FormData();
//             bodyFormData.append('dob', dob);
//             bodyFormData.append('father_name', father_name)
//             bodyFormData.append('email_id', email_id)
//             bodyFormData.append('state_name', state_name)
//             bodyFormData.append('pin_code', pin_code)
//             bodyFormData.append('reg_addr', reg_addr)
//             bodyFormData.append('comm_addr', comm_addr)
//             bodyFormData.append('bank_ac_name', bank_ac_name)
//             bodyFormData.append('bank_ac_no', bank_ac_no)
//             bodyFormData.append('bank_ifsc', bank_ifsc)
//             bodyFormData.append('adhar_no', adhar_no)
//             bodyFormData.append('bank_proof', bank_proof)
//             bodyFormData.append('adhar_proof', adhar_proof)

//             bodyFormData.append('pan_proof', pan_proof)
//             bodyFormData.append('selfie_proof', selfie_proof)
//             bodyFormData.append('access_token', userDataid)



//             dispatch(getForm(bodyFormData)).then((res) => {

//                 if (res.success == true) {
//                     toast.success('Your KYC is submit successfully, We will update you shortly', {
//                         position: toast.POSITION.TOP_RIGHT

//                     });

//                     navigate('/profile')
//                 }

//                 else {
//                     updateState({
//                         ...iState,
//                     })
//                     toast.error('Invalid Data')

//                 }
//             })
//         }

//     }


//     // Validation//

//     let handleValidation = () => {
//         let error = {}
//         let formIsValid = true
//         const enteredEmail = iState.email_id; // Email entered by the user
//         const preFilledEmail = kycDataFromLocation?.email_id; // Pre-filled Email from kycDataFromLocation

//         // Validate Email
//         if (!enteredEmail && !preFilledEmail) {
//             setLoading(false);
//             error.emailIdError = "* Email Id can't be empty";
//             formIsValid = false;
//         } else if (enteredEmail || preFilledEmail) {
//             if (!/^.+?@.+?\..+$/.test(enteredEmail || preFilledEmail)) {
//                 setLoading(false);
//                 error.emailIdError = "* Email format is not valid";
//                 formIsValid = false;
//             }
//         }

//         const enteredFatherName = iState.father_name; // Father's name entered by the user
//         const preFilledFatherName = kycDataFromLocation?.father_name; // Pre-filled father's name from kycDataFromLocation

//         if (!enteredFatherName.trim() && !preFilledFatherName.trim()) {
//             error.fatherNameError = "* Name can't be empty";
//             formIsValid = false;
//         } else if (enteredFatherName && !/^[A-Za-z ]+$/.test(enteredFatherName)) {
//             error.fatherNameError = "* Only alphabets are allowed";
//             formIsValid = false;
//         } else if (preFilledFatherName && !/^[A-Za-z ]+$/.test(preFilledFatherName)) {
//             error.fatherNameError = "* Only alphabets are allowed for pre-filled name";
//             formIsValid = false;
//         }


//         const enteredDob = iState.dob; // DOB entered by the user
//         const preFilledDob = kycDataFromLocation?.dob; // Pre-filled DOB from kycDataFromLocation

//         // Validate DOB
//         if (!enteredDob && !preFilledDob) {
//             setLoading(false);
//             error.dobError = "* DOB can't be empty";
//             formIsValid = false;
//         } else if (enteredDob || preFilledDob) {
//             const enteredAge = moment().diff(enteredDob || preFilledDob, 'years');
//             if (enteredAge <= 18) {
//                 setLoading(false);
//                 error.dobError = "Age Must be greater than or equal to 18";
//                 formIsValid = false;
//             }
//         }

//         const enteredStateName = iState.state_name; // State Name entered by the user
//         const preFilledStateName = kycDataFromLocation?.state_name; // Pre-filled State Name from kycDataFromLocation

//         // Validate State Name
//         if (!enteredStateName && !preFilledStateName) {
//             setLoading(false);
//             error.stateNameError = "* State Name can't be empty";
//             formIsValid = false;
//         }

//         const enteredAdharNo = iState.adhar_no; // Aadhar No entered by the user
//         const preFilledAdharNo = kycDataFromLocation?.adhar_no; // Pre-filled Aadhar No from kycDataFromLocation

//         // Validate Aadhar No
//         if (!enteredAdharNo && !preFilledAdharNo) {
//             setLoading(false);
//             error.adharNoError = "* Adhar No can't be empty";
//             formIsValid = false;
//         }



//         const enteredPinCode = iState.pin_code; // Pin Code entered by the user
//         const preFilledPinCode = kycDataFromLocation?.pin_code; // Pre-filled Pin Code from kycDataFromLocation

//         // Validate Pin Code
//         if (!enteredPinCode && !preFilledPinCode) {
//             setLoading(false);
//             error.pinCodeError = "* Pin Code can't be empty";
//             formIsValid = false;
//         }

//         const enteredRegAddr = iState.reg_addr; // Reg-Address entered by the user
//         const preFilledRegAddr = kycDataFromLocation?.reg_addr; // Pre-filled Reg-Address from kycDataFromLocation

//         // Validate Reg-Address
//         if (!enteredRegAddr && !preFilledRegAddr) {
//             setLoading(false);
//             error.regAddressError = "* Reg-Address can't be empty";
//             formIsValid = false;
//         }


//         const enteredCommAddr = iState.comm_addr; // Comm-Address entered by the user
//         const preFilledCommAddr = kycDataFromLocation?.comm_addr; // Pre-filled Comm-Address from kycDataFromLocation

//         // Validate Comm-Address
//         if (!enteredCommAddr && !preFilledCommAddr) {
//             setLoading(false);
//             error.comAddressError = "* Comm-Address can't be empty";
//             formIsValid = false;
//         }

//         const enteredBankAcNo = iState.bank_ac_no; // Bank Account No entered by the user
//         const preFilledBankAcNo = kycDataFromLocation?.bank_ac_no; // Pre-filled Bank Account No from kycDataForm

//         // Validate Bank Account No
//         if (!enteredBankAcNo && !preFilledBankAcNo) {
//             setLoading(false);
//             error.accountNoError = "* Account No can't be empty";
//             formIsValid = false;
//         }

//         const enteredBankAcName = iState.bank_ac_name; // Bank Account Name entered by the user
//         const preFilledBankAcName = kycDataFromLocation?.bank_ac_name; // Pre-filled Bank Account Name from kycDataFromLocation

//         // Validate Bank Account Name
//         if (!enteredBankAcName && !preFilledBankAcName) {
//             setLoading(false);
//             error.accountNameError = "* Account Name can't be empty";
//             formIsValid = false;
//         }

//         const enteredBankIfsc = iState.bank_ifsc; // Bank IFSC Code entered by the user
//         const preFilledBankIfsc = kycDataFromLocation?.bank_ifsc; // Pre-filled Bank IFSC Code from kycDataFromLocation

//         // Validate Bank IFSC Code
//         if (!enteredBankIfsc && !preFilledBankIfsc) {
//             setLoading(false);
//             error.ifscCodeError = "* IFSC Code can't be empty";
//             formIsValid = false;
//         }
//         updateState({
//             ...iState,
//             errors: error
//         });
//         return formIsValid;
//     }


//     return (
//         <>
//             <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom top-header">
//                 <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
//                     <div className="logo p-3">
//                         <img className="img-fluid" src={logo} />
//                     </div>
//                 </a>
//                 <ul className="nav nav-pills d-inline cta p-3 text-center">
//                     <li className="nav-item"><a href=""><i className="fa-solid fa-phone"></i> 0123456789</a></li>
//                     <li className="nav-item"><a href=""><i className="fa-solid fa-envelope"></i> example@gmail.com</a></li>
//                 </ul>
//             </header>

//             <div className="container p-5">
//                 <h1 className="h1" style={{ color: "#e21d24" }}>KYC <span style={{ color: "#2e26c6" }}>Update</span></h1>
//                 <div className="row">
//                     <div className="col-lg-8 col-md-12 mx-auto success-page main-bg">
//                         <h2 className="fw-bold" style={{ color: "#e21d24" }}>Personal<span style={{ color: "#2e26c6" }}> Details</span></h2>
//                         <form className="row g-3" onSubmit={handleSubmit} >
//                             <div className="col-md-6">
//                                 <label htmlFor="inputEmail4" className="form-label"></label>
//                                 <input type="text" className="form-control" placeholder='Full Name*' name='cust_name' value={kycData.cust_name} disabled={true} />
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="inputPassword4" className="form-label"></label>
//                                 <input type="text" className="form-control" placeholder='Father Name*' name='father_name' value={kycDataFromLocation?.father_name} onChange={handleChange} />
//                                 <span style={{ color: 'red' }}>{errors?.fatherNameError}</span>
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="inputPassword4" className="form-label"></label>
//                                 <input type="number" className="form-control" placeholder='Mobile Number*' name='mobile_no' value={kycData.mobile_no} disabled={true} />
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="inputPassword4" className="form-label"></label>
//                                 <input type="text" className="form-control" placeholder='Pan No*' name='pan_no' value={kycData.pan_no} disabled={true} />
//                             </div>

//                             <div className="col-md-6">
//                                 <label htmlFor="inputPassword4" className="form-label"></label>
//                                 <input type="text" className="form-control" placeholder='Pan Type' name='pan_type' value={kycData.pan_type} disabled={true} />
//                             </div>

//                             <div className="col-md-6">
//                                 <label htmlFor="inputPassword4" className="form-label"></label>
//                                 <input type="text" className="form-control" placeholder='Pan Status' name='pan_status' value={kycData.pan_status} disabled={true} />
//                             </div>

//                             <div className="col-md-6">
//                                 <label htmlFor="inputPassword4" className="form-label"></label>
//                                 <input type="date" className="form-control" placeholder='Enter DOB' max={new Date().toISOString().split("T")[0]} name='dob' value={kycDataFromLocation?.dob} onChange={handleChange} />
//                                 <span style={{ color: 'red' }}>{errors?.dobError}</span>

//                             </div>


//                             <input type="hidden" className="form-control" placeholder='Enter Age' name='dob' value={age} onChange={handleChange} />


//                             <div className="col-md-6">
//                                 <label htmlFor="inputPassword4" className="form-label"></label>
//                                 <input type="text" className="form-control" placeholder='Email Address*' name='email_id' value={kycDataFromLocation?.email_id} onChange={handleChange} onBlur={handleEmailBlur} />
//                                 <span style={{ color: 'red' }}>{errors?.emailIdError}</span>
//                                 <span style={{ color: 'red' }}>{emailError}</span>
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="inputPassword4" className="form-label"></label>
//                                 <input type="text" className="form-control" placeholder='Pincode*' name='pin_code' value={kycDataFromLocation?.pin_code} onChange={handleChange} />
//                                 <span style={{ color: 'red' }}>{errors?.pinCodeError}</span>
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="inputPassword4" className="form-label"></label>
//                                 <input type="text" className="form-control" placeholder='Aadhar No*' name='adhar_no' value={kycDataFromLocation?.adhar_no} onChange={handleChange} />
//                                 <span style={{ color: 'red' }}>{errors?.adharNoError}</span>
//                             </div>



//                             <div className="col-md-6">

//                                 <select className="form-select" value={kycDataFromLocation?.state_name} onChange={handleChange} >
//                                     <option>Select State</option>
//                                     <option value="Andhra Pradesh">Andhra Pradesh</option>
//                                     <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
//                                     <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//                                     <option value="Assam">Assam</option>
//                                     <option value="Bihar">Bihar</option>
//                                     <option value="Chandigarh">Chandigarh</option>
//                                     <option value="Chhattisgarh">Chhattisgarh</option>
//                                     <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
//                                     <option value="Daman and Diu">Daman and Diu</option>
//                                     <option value="Delhi">Delhi</option>
//                                     <option value="Lakshadweep">Lakshadweep</option>
//                                     <option value="Puducherry">Puducherry</option>
//                                     <option value="Goa">Goa</option>
//                                     <option value="Gujarat">Gujarat</option>
//                                     <option value="Haryana">Haryana</option>
//                                     <option value="Himachal Pradesh">Himachal Pradesh</option>
//                                     <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//                                     <option value="Jharkhand">Jharkhand</option>
//                                     <option value="Karnataka">Karnataka</option>
//                                     <option value="Kerala">Kerala</option>
//                                     <option value="Madhya Pradesh">Madhya Pradesh</option>
//                                     <option value="Maharashtra">Maharashtra</option>
//                                     <option value="Manipur">Manipur</option>
//                                     <option value="Meghalaya">Meghalaya</option>
//                                     <option value="Mizoram">Mizoram</option>
//                                     <option value="Nagaland">Nagaland</option>
//                                     <option value="Odisha">Odisha</option>
//                                     <option value="Punjab">Punjab</option>
//                                     <option value="Rajasthan">Rajasthan</option>
//                                     <option value="Sikkim">Sikkim</option>
//                                     <option value="Tamil Nadu">Tamil Nadu</option>
//                                     <option value="Telangana">Telangana</option>
//                                     <option value="Tripura">Tripura</option>
//                                     <option value="Uttar Pradesh">Uttar Pradesh</option>
//                                     <option value="Uttarakhand">Uttarakhand</option>
//                                     <option value="West Bengal">West Bengal</option>

//                                 </select>
//                                 <span style={{ color: 'red' }}>{errors?.stateNameError}</span>

//                             </div>



//                             <div className="col-12">

//                                 <textarea rows="4" cols="50" type="text-area" className="form-control" id="inputAddress" placeholder="Registered Address*" name='reg_addr' value={kycDataFromLocation?.reg_addr} onChange={handleChange} />
//                                 <span style={{ color: 'red' }}>{errors?.regAddressError}</span>
//                             </div>
//                             <div className="col-12">
//                                 <div className="form-check" onClick={handleCheckbox} >
//                                     <input className="form-check-input" type="checkbox" id="gridCheck" />
//                                     <label className="form-check-label" htmlFor="gridCheck">
//                                         <b>Same As Above</b>
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className="col-12">

//                                 <textarea type="text" rows="4" cols="50" className="form-control" id="inputAddress2" placeholder="Communication Address*" name='comm_addr' value={kycDataFromLocation?.comm_addr} onChange={handleChange}  />
//                                 <span style={{ color: 'red' }}>{errors?.comAddressError}</span>
//                             </div>
//                             <h2 className="fw-bold" style={{ color: "#e21d24" }}>Bank <span style={{ color: "#2e26c6" }}>Detail</span></h2>

//                             <div className="col-md-6">
//                                 <label htmlFor="inputEmail4" className="form-label"></label>
//                                 <input type="Number" className="form-control" id="inputEmail4" placeholder='Account Number*' name='bank_ac_no' value={kycDataFromLocation?.bank_ac_no} onChange={handleChange} />
//                                 <span style={{ color: 'red' }}>{errors?.accountNoError}</span>
//                             </div>

//                             <div className="col-md-6">
//                                 <label htmlFor="inputEmail4" className="form-label"></label>
//                                 <input type="text" className="form-control" id="inputEmail4" placeholder='Bank Name*' name='bank_ac_name' value={kycDataFromLocation?.bank_ac_name} onChange={handleChange} />
//                                 <span style={{ color: 'red' }}>{errors?.accountNameError}</span>
//                             </div>

//                             <div className="col-md-6">
//                                 <label htmlFor="inputEmail4" className="form-label"></label>
//                                 <input type="text" className="form-control" id="inputEmail4" placeholder='IFSC code*' name='bank_ifsc' value={kycDataFromLocation?.bank_ifsc} onChange={handleChange} />
//                                 <span style={{ color: 'red' }}>{errors?.ifscCodeError}</span>
//                             </div>

//                             <h2 className="fw-bold" style={{ color: "#e21d24" }}>Document <span style={{ color: "#2e26c6" }}>Upload</span></h2>
//                             <div className="col-md-6">
//                                 <label htmlFor="inputEmail4" className="form-label">Aadhar proof*(self Attesed)</label>
//                                 <input type="file" className="form-control" id="inputEmail4" name='adhar_proof' onChange={handleAdhar} accept=".jpg, .jpeg, .png"
//                                 />
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="inputEmail4" className="form-label">Pan proof*(Self Attesed)</label>
//                                 <input type="file" className="form-control" id="inputEmail4" name='pan_proof' onChange={handlePan} accept=".jpg, .jpeg, .png"
//                                 />
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="inputEmail4" className="form-label">Selfie proof*</label>
//                                 <input type="file" className="form-control" id="inputEmail4" name='selfie_proof' onChange={handleSelfie} accept=".jpg, .jpeg, .png"
//                                 />
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="inputEmail4" className="form-label">Bank proof*</label>
//                                 <input type="file" className="form-control" id="inputEmail4" name='bank_proof' onChange={handleBank}
//                                     accept=".jpg, .jpeg, .png" />
//                             </div>
//                             <div className="button py-1">
//                                 <button className="btn btn-primary" style={{ backgroundColor: "blue" }} type='submit' disabled={loading ? loading : loading}>{loading ? "LOADING" : 'Submit'}</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Kyc;




