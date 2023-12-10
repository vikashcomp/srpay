import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getVerifyAdmin } from "../redux/actions/verifyAdminAction";
import { toast } from "react-toastify";
import { getImage } from "../redux/actions/imageAction";
import Modal from "./Modal";
import { getUserActivateList, getUserRejectedList, getUserStatus } from "../redux/actions/userAction";
import AdminHeader from "./AdminHeader";
import AdminNav from "./AdminNav";
const initialState={
  errors:{},
}

const VerifyAdmin = () => {
  const [iState,updateState]=useState(initialState);
  const {errors}=iState
  const [textBox, setTextBox] = useState();
  const [adharNumber, setAdharNumber] = useState();
  const [panNumber, setPanNumber] = useState();
  const [selfieNumber, setSelfieNumber] = useState();
  const [bankNumber, setBankNumber] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { verifyData } = useSelector((state) => state.verifyForm);


  const adminToken = JSON.parse(window.localStorage.getItem("adminToken"));

  const userId = JSON.parse(window.localStorage.getItem("userId"));

  useEffect(() => {
    dispatch(getVerifyAdmin({ access_token: adminToken, user_id: userId }));
  }, []);

  let handleValidation = () => {
    let error = {}
    let formIsValid = true
if (!bankNumber) {
        error.bankError = "* Please select bank proof"
        formIsValid = false;
    }
    if (!panNumber) {
        error.panError = "* Please select pan proof"
        formIsValid = false;
    }
    if (!selfieNumber) {
        error.slefError = "* Please select selfie proof"
        formIsValid = false;
    }
    if (!adharNumber) {
        error.adharError = "* Please select adhar proof"
        formIsValid = false;
    }

    updateState({
        ...iState,
        errors: error
    });
    return formIsValid;
}

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = handleValidation();

    if (formIsValid){
    const data = { access_token: adminToken, adhar_state: adharNumber, pan_state: panNumber, selfie_state: selfieNumber, bank_state: bankNumber, user_id: userId, remarks: textBox }
    console.log('dataaaa', data)

    dispatch(getUserStatus(data)).then((res) => {
      console.log('ress', res)
      if (res.success == true) {
        toast.success("Record Updated", {
          position: toast.POSITION.TOP_RIGHT
        })
        navigate('/admin/kyc/pending')
      }

      else {
        console.log(res)
        toast.error("Record Not Updated")
      }
    })
  }

  };
  

  // const handleClick = async (e,userId) => {  //  Approved//

  //   e.preventDefault();


  //   const data = { access_token: adminToken }
  //   console.log('data', data)

  //   dispatch(getUserActivateList(data)).then((res) => {

  //     console.log('res approveddd', res)
  //     if (res.success == true) {
  //       toast.success('Kyc Data Approved', {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 1000,
  //       })
  //       navigate('/admin/kyc/approved')
  //     }

  //     else {
  //       console.log(res)
  //       toast.error("Kyc Data  Not Updated")
  //       navigate('/admin/kyc/rejected')
  //     }
  //   })
  // }

  // const handle = (e,userId) => {                           // Rejected Api//
  //   e.preventDefault();
  //   const data = { access_token: adminToken }
  //   console.log('dataa', data)
  //   dispatch(getUserRejectedList(data)).then((res) => {
  //     console.log('res rejectedd', res)
  //     if (res.success == true) {
  //       toast.success('Kyc Data Rejected', {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 1000,
  //       })
  //       navigate('/admin/kyc/rejected')
  //     }
  //     else {
  //       console.log(res)
  //       toast.error("Kyc Data  Not Updated")

  //     }

  //   })
  // }

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   await handleSubmit(e)
  //   if (adharNumber === '0' || panNumber === '0' || selfieNumber === '0' || bankNumber === '0') {
  //     await handle(e)
  //   } else {
  //     await handleClick(e)
  //   }

  // }


  const [image, setImage] = useState(null);
  const handleAadhar = (image) => {
    // console.log("imageee", image);
    const data = { filepath: image };
    // console.log("dataaphotoo", data);
    dispatch(getImage(data)).then((res) => {
      console.log("res+++++++", res);
      setImage(URL.createObjectURL(res));
    });
  };

  const handleCloseModal = () => {
    setImage(null);
  };

  let imagess = JSON.parse(window.localStorage.getItem("imageToken"));
  // console.log("imagee", imagess);

  const kycDocuments = [
    {
      id: "aadhar",
      label: "Aadhar Image Proof",
      objectKey: 'adhar_docs'

    },
    {
      id: "pan",
      label: "Pan Proof Image",
      objectKey: 'pan_docs'
    },
    {
      id: "bank",
      label: "Bank Image Proof",
      objectKey: 'bank_docs'
    },
    {
      id: "selfie",
      label: "Selfie Proof Image",
      objectKey: 'photo'
    },
  ];


  return (
    <>
      <AdminHeader />
      <AdminNav />
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-22 mx-auto">
            <h2 className="mx-auto" style={{ color: "#2e26c6" }}>
              Verify <span style={{ color: "#e22d24" }}>User</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-22 offset-lg-2 mx-auto success-page main-bg">
            <h2 className="fw-bold" style={{ color: "#e22d24" }}>
              Personal<span style={{ color: "#2e26c6" }}> Details</span>
            </h2>
            <form className="row g-2" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Full Name*"
                  value={verifyData?.data?.[0]?.cust_name}
                  disabled
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Father's Name*"
                  value={verifyData?.data?.[0]?.father_name}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label"></label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Mobile Number*"
                  value={verifyData?.data?.[0]?.mobile_no}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Email Address*"
                  value={verifyData?.data?.[0]?.email_id}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Pincode*"
                  value={verifyData?.data?.[0]?.pin_code}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Aadhar No*"
                  value={verifyData?.data?.[0]?.adhar_no}
                  disabled
                />
                
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="State*"
                  value={verifyData?.data?.[0]?.state_name}
                  disabled
                />
              </div>

              <div className="col-22">
                <label htmlFor="inputAddress" className="form-label"></label>
                <textarea
                  rows="4"
                  cols="52"
                  type="text-area"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Registration Address*"
                  value={verifyData?.data?.[0]?.reg_addr}
                  disabled
                />
              </div>

              <div className="col-22">
                <label htmlFor="inputAddress2" className="form-label"></label>
                <textarea
                  type="text"
                  rows="4"
                  cols="52"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Communication Address*"
                  value={verifyData?.data?.[0]?.comm_addr}
                  disabled
                />
              </div>
              <h2 className="fw-bold" style={{ color: "#e22d24" }}>
                Bank <span style={{ color: "#2e26c6" }}>Detail</span>
              </h2>

              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Account Number*"
                  value={verifyData?.data?.[0]?.bank_ac_no}
                  disabled
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Bank Name*"
                  value={verifyData?.data?.[0]?.bank_ac_name}
                  disabled
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="IFSC code*"
                  value={verifyData?.data?.[0]?.bank_ifsc}
                  disabled
                />
              </div>

              <h2 className="fw-bold" style={{ color: "#e22d24" }}>
                <span style={{ color: "#2e26c6" }}>Document</span>
              </h2>

              {kycDocuments.map((x) => (
                <div className="col-md-6">
                  <button
                    type="button"
                    className="document-btn document-btn-animation"
                    data-bs-toggle="modal"
                    data-bs-target={`#${x.id}-modal`}
                    onClick={() =>
                      handleAadhar(verifyData?.data?.[0]?.[x.objectKey])
                    }
                  >
                    {x.label}
                  </button>
                  <Modal image={image} handleCloseModal={handleCloseModal} id={x.id} />

                </div>
              ))}


              <div className="col-md-6">
                <div className="form-group">
                  <label>Aadhar Number</label>
                  <select
                    className="form-select"
                    value={adharNumber}
                    onChange={(e) => setAdharNumber(e.target.value)}
                  >
                    <option>Select</option>
                    <option value={1}>Accept</option>
                    <option value={0}>Reject</option>
                  </select>
                  <span style={{ color: 'red' }}>{errors?.adharError}</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Selfie Proof</label>
                  <select
                    className="form-select"
                    value={selfieNumber}
                    onChange={(e) => setSelfieNumber(e.target.value)}
                  >
                    <option>Select </option>
                    <option value={1}> Accept</option>
                    <option value={0}>Reject</option>
                  </select>
                  <span style={{ color: 'red' }}>{errors?.slefError}</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Pan Proof</label>
                  <select
                    className="form-select"
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value)}
                  >
                    <option>Select </option>
                    <option value={1}>Accept</option>
                    <option value={0}>Reject</option>
                  </select>
                  <span style={{ color: 'red' }}>{errors?.panError}</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Bank Proof</label>
                  <select
                    className="form-select"
                    value={bankNumber}
                    onChange={(e) => setBankNumber(e.target.value)}
                  >
                    <option>Select</option>
                    <option value={1}>Accept</option>
                    <option value={0}>Reject</option>
                  </select>
                  <span style={{ color: 'red' }}>{errors?.bankError}</span>
                </div>
              </div>

              <div className="row">
              <label for="exampleInputEmail1" class="form-label mt-2"><span style={{color:"red"}}>If there is any false information in personal details please select this button</span> </label>   
              <div className="col-md-6">
              <button type="button" class="btn btn-danger">Rejected All</button>
              </div>
              
              </div>
              <div className="col-22">
                <textarea
                  type="text"
                  rows="4"
                  cols="52"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Comment box*"
                  required="true"
                  value={textBox} 
                  onChange={(e) => {
                    setTextBox(e.target.value);
                  }}
                />
              </div>

              <div className="button py-2 text-center">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "blue" }}
                  // onClick={(e) => handleLogin(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyAdmin;


