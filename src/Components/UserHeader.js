import React from "react";
import logo from "../images/logo.png";
import walletFilled from "../images/wallet-filled-money-tool.png";
import UserServices from "./UserServices";

const UserHeader = ({ kycData, walletBalanceData }) => {
  console.log('data.cust_name', kycData)
  console.log('wallet_Balance', walletBalanceData)
  return (
    <header className="d-flex flex-wrap justify-content-center border-bottom top-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <div className="logo p-1">
                <img className="img-fluid" src={logo} />
                <p className="logo-detail">
                  <b>Hello {kycData?.cust_name ?? ""}</b>
                </p>
              </div>
            </a>
          </div>

          <div className="col-lg-8 mt-1 contactus">
            <div className="row mb-2 ">
              <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10 ">
                <span className="size">Help Line: XXXXXXXXXX</span>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                <span className="size">xyz comm</span>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                <img
                  className="img-fluid pe-2"
                  src={walletFilled}
                  width="25px"
                />
                <span className="size">{`Wallet Balance ₹ ${walletBalanceData?.data?.wallet_bal
                  }.00 `}</span>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                <img
                  className="img-fluid pe-2"
                  src={walletFilled}
                  width="25px"
                />
                <span className="size">Earning 0.0</span>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10 ">
                <span className="size">Email: Support@SRPAY.CO.IN</span>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                <span className="size">
                  {kycData?.user_type_label} ID:{" "}
                  {kycData?.userId}
                </span>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10  ">
                <img
                  className="img-fluid pe-2"
                  src={walletFilled}
                  width="25px"
                />

                <span className="size">Reserve Balance 0.0</span>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-2 col-xs-10 ">
                <img
                  className="img-fluid pe-2"
                  src={walletFilled}
                  width="25px"
                />

                <span className="size">Pending Commission 0.0</span>
              </div>
            </div>
            <UserServices userRole={kycData?.user_type_label} />

          </div>
        </div>
      </div>
    </header>
  )
}

export default UserHeader;
