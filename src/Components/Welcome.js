import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import smiley from "../images/smiley.png";
import logo from "../images/sr.jpg";

const Welcome = () => {
  const navigate = useNavigate();

  const tokenpan = JSON.parse(window.localStorage.getItem("panDataName"));

  const handleNaviagte = () => {
    navigate("/");
    
  };

  useEffect(() => {
    window.localStorage.removeItem("tokenData");
    window.localStorage.removeItem("panDataName");
    window.localStorage.removeItem("numberData");
    window.localStorage.removeItem("getPanNumber");
  }, []);
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom top-header">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <div className="logo p-3">
            <img className="img-fluid" src={logo} />
          </div>
        </a>
        <ul className="nav nav-pills d-inline cta p-3 text-center">
          <li className="nav-item">
            <a href="">
              <i className="fa-solid fa-phone"></i> 0123456789
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fa-solid fa-envelope"></i> example@gmail.com
            </a>
          </li>
        </ul>
      </header>

      <div className="container p-5">
        <div className="row">
          <div className="col-lg-8 col-md-12 mx-auto success-page main-bg text-center">
            <div className="col-lg-4 mx-auto form p-2">
              <img src={smiley} className="smiley-img" width="50" />
            </div>
            <div className="col-lg-10 mx-auto">
              <h2>Dear user welcome to SRPAY Family</h2>
              <p>
                Your account has been created successfully. Please login using
              </p>
              <p>
                User ID - {tokenpan.userId} & One time password -{" "}
                {tokenpan.login_otp}
              </p>
            </div>
            <div className="my-3">
              <h3>To</h3>
            </div>
            <div className="join pb-5">
              <button className="btn btn-primary px-4" onClick={handleNaviagte}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
