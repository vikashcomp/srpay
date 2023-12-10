import React, { useEffect, useState } from "react";
import user from "../images/user.png";
import { useUserIsLoggedIn, useUserProfile, useUserwalletBalance } from "../customHooks/hooks";
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  adharPhoto,
  bankPhoto,
  changePhoto,
  panPhoto,
  sendForReview,
} from "../redux/actions/profileAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getKyc } from "../redux/actions/kycAction";

const initialState = {
  adhar_proof: "",
  pan_proof: "",
  bank_proof: "",
  selfie_proof: "",
  PhotoModal: false,
  AdharModal: false,
  PanModal: false,
  BankModal: false,
  errors: {},
  adharData: "",
  pandData: "",
  bankData: "",
  photoData: "",
  reviewData: "",
  loading: false,
};

const Profile = () => {
  const dispatch = useDispatch();
  const [iState, updateState] = useState(initialState);
  const {
    selfie_proof,
    adhar_proof,
    pan_proof,
    bank_proof,
    AdharModal,
    PanModal,
    BankModal,
    PhotoModal,
    errors,
    adharData,
    pandData,
    bankData,
    photoData,
    reviewData,
    loading,
  } = iState;


  const { kycData } = useUserProfile();
  const { walletBalanceData } = useUserwalletBalance();
  useUserIsLoggedIn();

  useEffect(() => {
    if (kycData?.is_activated == false && kycData?.is_rejected == false) {
      toast.success("Your Profile is under review and we will contact you soon", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  }, [])

  // const kycStatusMessage = (docType) => {
  //   if (
  //     kycData?.is_send_approval &&
  //     !kycData?.is_rejected &&
  //     !kycData?.is_activated
  //   )
  //     return "Not verified yet";
  //   else {
  //     if (kycData?.is_rejected || kycData?.is_activated) {
  //       if (kycData?.[docType]) return "Verified";
  //       else return "Rejected";
  //     }
  //   }
  // };

  const kycStatusCssClass = (docType) => {
    if (
      kycData?.is_send_approval &&
      !kycData?.is_rejected &&
      !kycData?.is_activated
    )
      return "not-verified-yet";

    else {
      if (kycData?.is_rejected || kycData?.is_activated) {
        if (kycData?.[docType])
          return "verified";
        else return "rejected";
      }
    }
  };

  const handleAdharClose = () => {
    updateState({
      ...iState,
      AdharModal: false,
      adhar_proof: "",
      errors: {},
    });
  };
  const handleAdharShow = () => {
    updateState({
      ...iState,
      AdharModal: true,
      adhar_proof: "",
      errors: {},
    });
  };

  const handlePanClose = () => {
    updateState({
      ...iState,
      PanModal: false,
      pan_proof: "",
      errors: {},
    });
  };
  const handlePanShow = () => {
    updateState({
      ...iState,
      PanModal: true,
      pan_proof: "",
      errors: {},
    });
  };
  const handleBankClose = () => {
    updateState({
      ...iState,
      BankModal: false,
      bank_proof: "",
      errors: {},
    });
  };
  const handleBankShow = () => {
    updateState({
      ...iState,
      BankModal: true,
      bank_proof: "",
      errors: {},
    });
  };

  const handlePhotoClose = () => {
    updateState({
      ...iState,
      PhotoModal: false,
      selfie_proof: "",
      errors: {},
    });
  };
  const handlePhotoShow = () => {
    updateState({
      ...iState,
      PhotoModal: true,
      selfie_proof: "",
      errors: {},
    });
  };


  const handleImageChange = (e, type) => {
    const file = e.target.files[0];

    if (file) {
      if (
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png"
      ) {
        if (file.size <= 1024 * 1024) {
          const updatedState = { ...iState };

          switch (type) {
            case "photo":
              updatedState.selfie_proof = file;
              break;
            case "adhar":
              updatedState.adhar_proof = file;
              break;
            case "pan":
              updatedState.pan_proof = file;
              break;
            case "bank":
              updatedState.bank_proof = file;
              break;
            default:
              break;
          }

          updateState(updatedState);
        } else {
          toast.error("Please upload an image less than 1 MB in size.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } else {
        toast.error("Please upload in JPEG, PNG, JPG format only.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  const token = JSON.parse(window.localStorage.getItem("tokenData"));

  let handleValidation = (type) => {
    let error = {};
    let formIsValid = true;

    if (type == "adhar" && !adhar_proof) {
      error.adhrError = "* Please select Your Aadhar";
      formIsValid = false;
    }
    if (type == "pan" && !pan_proof) {
      error.panError = "* Please select Your Pan Card";
      formIsValid = false;
    }
    if (type == "bank" && !bank_proof) {
      error.bankError = "* Please select Your Bank Proof";
      formIsValid = false;
    }
    if (type == "photo" && !selfie_proof) {
      error.picError = "* Please select Your photo Proof";
      formIsValid = false;
    }

    updateState({
      ...iState,
      errors: error,
    });
    return formIsValid;
  };
  const handleBulkUpload = (type) => {
    let formIsValid = handleValidation(type);
    if (formIsValid && type == "adhar") {
      let dataa = { adhar_proof: adhar_proof, access_token: token };
      dispatch(adharPhoto(dataa)).then((res) => {
        if (res.data.success == true) {
          toast.success("Upload Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
          updateState({
            ...iState,
            AdharModal: false,
            adhar_proof: "",
            adharData: res.data.success,
          });
        } else {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
          updateState({
            ...iState,
            AdharModal: true,
          });
        }
      });
    } else if (formIsValid && type == "pan") {
      let dataa = { pan_proof: pan_proof, access_token: token };
      dispatch(panPhoto(dataa)).then((res) => {
        if (res.data.success == true) {
          toast.success("Upload Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
          updateState({
            ...iState,
            PanModal: false,
            pan_proof: "",
            pandData: res.data.success,
          });
        } else {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
          updateState({
            ...iState,
            PanModal: true,
          });
        }
      });
    } else if (formIsValid && type == "bank") {
      let dataa = { bank_proof: bank_proof, access_token: token };
      dispatch(bankPhoto(dataa)).then((res) => {
        if (res.data.success == true) {
          console.log("ress", res);
          toast.success("Upload Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
          updateState({
            ...iState,
            BankModal: false,
            bank_proof: "",
            bankData: res.data.success,
          });
        } else {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
          updateState({
            ...iState,
            BankModal: true,
          });
        }
      });
    } else if (formIsValid && type == "photo") {
      let dataa = { selfie_proof: selfie_proof, access_token: token };
      dispatch(changePhoto(dataa)).then((res) => {
        if (res.data.success == true) {
          toast.success("Upload Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
          updateState({
            ...iState,
            PhotoModal: false,
            selfie_proof: "",
            photoData: res.data.success,
          });
        } else {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
          updateState({
            ...iState,
            PhotoModal: true,
          });
        }
      });
    }
  };

  const handleReview = () => {
    updateState({ ...iState, loading: true });
    const data = { access_token: token };
    dispatch(sendForReview(data)).then((res) => {
      if (res.data.success == true) {
        dispatch(getKyc({ access_token: token }));
        toast.success("Send Review Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        updateState({ ...iState, loading: false, reviewData: res.data.success });
      } else {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        updateState({ ...iState, loading: false });
      }
    });
  };

  return (
    <>
      <div>
        <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
      </div>
      <div className="container mb-4">
        <h2 className="fw-bold" style={{ color: "blue" }}>
          Profile <span style={{ color: "#e21d24" }}>Info</span>
        </h2>
        {kycData?.adhar_verify === false &&
          kycData?.pan_verify === false &&
          kycData?.bank_verify === false &&
          kycData?.photo_verify === false && kycData?.is_rejected == true && (
            <Link to="/kyc" variant="primary" className="mt-4">
              Edit Profile
            </Link>
          )}

        <div className="row gx-5">
          <div className="col-lg-6 profile-left">
            <div className="profile-img">
              <img className="img-fluid image" src={user} width="50px" alt="" />
              <h3 className="raj">{kycData.cust_name}</h3>
              <h6 className="user">{kycData.userId}</h6>
            </div>
            <div className="profile-detials">
              <div className="details">
                <div className="row">
                  <div className="col-lg-6">
                    <h5>
                      <b>Pan Number</b>
                    </h5>
                  </div>
                  <div className="col-lg-6">
                    <h6>{kycData.pan_no}</h6>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="row">
                  <div className="col-lg-6">
                    <h5>
                      <b>Mobile No</b>
                    </h5>
                  </div>
                  <div className="col-lg-6">
                    <h6>{kycData.mobile_no}</h6>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="row">
                  <div className="col-lg-6">
                    <h5>
                      <b>Email ID</b>
                    </h5>
                  </div>
                  <div className="col-lg-6">
                    <h6>{kycData.email_id}</h6>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="row">
                  <div className="col-lg-6">
                    <h5>
                      <b>D.O.B</b>
                    </h5>
                  </div>
                  <div className="col-lg-6">
                    <h6>{kycData.dob}</h6>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="row">
                  <div className="col-lg-6">
                    <h5>
                      <b>Aadhar Image</b>
                    </h5>
                  </div>

                  <div className="col-lg-6">
                    <h6 className={kycStatusCssClass("adhar_verify")}>
                      {/* {kycStatusMessage("adhar_verify")} */}
                      {kycData?.adhar_verify == false && kycData?.is_rejected == false ? "Not Verified Yet"
                        : kycData?.adhar_verify == false && kycData?.is_rejected == true ? "Rejected"
                          : kycData?.adhar_verify == true && kycData?.is_rejected == false ? "Verified"
                            : kycData?.adhar_verify == true && kycData?.is_rejected == true ? "Verified"
                              : ""}
                      {
                        // kycStatusMessage("adhar_verify") === "Rejected" && 
                        kycData?.adhar_verify == false && kycData?.is_rejected == true &&
                        (
                          <Button
                            variant="btn btn-primary ms-4"
                            disabled={
                              kycData?.adhar_verify == false &&
                              kycData?.pan_verify == false &&
                              kycData?.bank_verify == false &&
                              kycData?.photo_verify == false
                            }
                            onClick={() => handleAdharShow()}
                          >
                            {adharData ? "Uploaded" : "Upload Again"}
                          </Button>
                        )}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="details">
                <div className="row">
                  <div className="col-lg-6">
                    <h5>
                      <b>Pan Image</b>
                    </h5>
                  </div>
                  <div className="col-lg-6">
                    <h6 className={kycStatusCssClass("pan_verify")}>
                      {/* {kycStatusMessage("pan_verify")} */}
                      {kycData?.pan_verify == false && kycData?.is_rejected == false ? "Not Verified Yet"
                        : kycData?.pan_verify == false && kycData?.is_rejected == true ? "Rejected"
                          : kycData?.pan_verify == true && kycData?.is_rejected == false ? "Verified"
                            : kycData?.pan_verify == true && kycData?.is_rejected == true ? "Verified"
                              : ""}
                      {
                        // kycStatusMessage("pan_verify") === "Rejected" 
                        kycData?.pan_verify == false
                        && kycData?.is_rejected == true && (
                          <Button
                            variant="btn btn-primary ms-4"
                            disabled={
                              kycData?.adhar_verify == false &&
                              kycData?.pan_verify == false &&
                              kycData?.bank_verify == false &&
                              kycData?.photo_verify == false
                            }
                            onClick={() => handlePanShow()}
                          >
                            {pandData ? "Uploaded" : "Upload Again"}
                          </Button>
                        )}
                    </h6>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="row">
                  <div className="col-lg-6">
                    <h5>
                      <b>Bank Proof</b>
                    </h5>
                  </div>
                  <div className="col-lg-6">
                    <h6 className={kycStatusCssClass("bank_verify")}>
                      {/* {kycStatusMessage("bank_verify")} */}
                      {kycData?.bank_verify == false && kycData?.is_rejected == false ? "Not Verified Yet"
                        : kycData?.bank_verify == false && kycData?.is_rejected == true ? "Rejected"
                          : kycData?.bank_verify == true && kycData?.is_rejected == false ? "Verified"
                            : kycData?.bank_verify == true && kycData?.is_rejected == true ? "Verified"
                              : ""}
                      {
                        // kycStatusMessage("bank_verify") === "Rejected"
                        kycData?.bank_verify == false
                        && kycData?.is_rejected == true && (
                          <Button
                            variant="btn btn-primary ms-4"
                            disabled={
                              kycData?.adhar_verify == false &&
                              kycData?.pan_verify == false &&
                              kycData?.bank_verify == false &&
                              kycData?.photo_verify == false
                            }
                            onClick={() => handleBankShow()}
                          >
                            {bankData ? "Uploaded" : "Upload Again"}
                          </Button>
                        )}
                    </h6>
                  </div>
                </div>
              </div>

              <div className="details">
                <div className="row">
                  <div className="col-lg-6">
                    <h5>
                      <b>Photo Proof</b>
                    </h5>
                  </div>
                  <div className="col-lg-6">
                    <h6 className={kycStatusCssClass("photo_verify")}>
                      {/* {kycStatusMessage("photo_verify")} */}

                      {kycData?.photo_verify == false && kycData?.is_rejected == false ? "Not Verified Yet"
                        : kycData?.photo_verify == false && kycData?.is_rejected == true ? "Rejected"
                          : kycData?.photo_verify == true && kycData?.is_rejected == false ? "Verified"
                            : kycData?.photo_verify == true && kycData?.is_rejected == true ? "Verified"
                              : ""}
                      {
                        // kycStatusMessage("photo_verify") === "Rejected" 
                        kycData?.photo_verify == false
                        && kycData?.is_rejected == true && (
                          <Button
                            variant="btn btn-primary ms-4"
                            disabled={
                              kycData?.adhar_verify == false &&
                              kycData?.pan_verify == false &&
                              kycData?.bank_verify == false &&
                              kycData?.photo_verify == false
                            }
                            onClick={() => handlePhotoShow()}
                          >
                            {photoData ? "Uploaded" : "Upload Again"}
                          </Button>
                        )}
                    </h6>
                  </div>
                </div>
              </div>
              {
                kycData?.is_rejected == true &&
                <Button
                  variant="primary"
                  className="mt-4"
                  onClick={handleReview}
                  disabled={
                    (kycData?.adhar_verify === false && !adharData) ||
                    (kycData?.pan_verify === false && !pandData) ||
                    (kycData?.bank_verify === false && !bankData) ||
                    (kycData?.photo_verify === false && !photoData)
                  }
                >
                  Send Review
                </Button>
              }

            </div>
          </div>

          <div className="col-lg-6 profile-right">
            <h2>Show Status</h2>

            <div className="col-lg-6">
              <h6 className="not-verified">{kycData.remark}</h6>
            </div>
          </div>
        </div>
        <Modal show={AdharModal} className="ModalBox">
          <Modal.Body>
            <div className="Category">
              <button className="CloseModal" onClick={handleAdharClose}>
                ×
              </button>
              <h3>Upload Aadhar Image</h3>
              <div className="form-group">
                <label> Aadhar Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => handleImageChange(e, "adhar")}
                />
                <span style={{ color: "red" }}>{errors?.adhrError}</span>
              </div>
              <Button
                variant="primary"
                onClick={() => handleBulkUpload("adhar")}
              >
                Submit
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={PanModal} className="ModalBox">
          <Modal.Body>
            <div className="Category">
              <button className="CloseModal" onClick={handlePanClose}>
                ×
              </button>
              <h3>Upload Pan Image</h3>
              <div className="form-group">
                <label> Pan Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => handleImageChange(e, "pan")}
                />
                <span style={{ color: "red" }}>{errors?.panError}</span>
              </div>
              <Button variant="primary" onClick={() => handleBulkUpload("pan")}>
                Submit
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={BankModal} className="ModalBox">
          <Modal.Body>
            <div className="Category">
              <button className="CloseModal" onClick={handleBankClose}>
                ×
              </button>
              <h3>Upload Bank Proof</h3>
              <div className="form-group">
                <label> Bank Proof</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => handleImageChange(e, "bank")}
                />
                <span style={{ color: "red" }}>{errors?.bankError}</span>
              </div>
              <Button
                variant="primary"
                onClick={() => handleBulkUpload("bank")}
              >
                Submit
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={PhotoModal} className="ModalBox">
          <Modal.Body>
            <div className="Category">
              <button className="CloseModal" onClick={handlePhotoClose}>
                ×
              </button>
              <h3>Upload Photo Proof</h3>
              <div className="form-group">
                <label>Photo Proof</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => handleImageChange(e, "photo")}
                />
                <span style={{ color: "red" }}>{errors?.picError}</span>
              </div>

              <Button
                variant="primary"
                onClick={() => handleBulkUpload("photo")}
              >
                Submit
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Profile;
