import React from "react";
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { AiOutlineFileExcel } from 'react-icons/ai';

const InstantTopup = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    

  return (
    <>
      <div>
      <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
      </div>

      <div className="container fundRequestHistory mt-3 mb-5">
        <h2 style={{ color: "#e21d24" }}>
          Instant <span style={{ color: "#2e26c6" }}>Topup</span>
        </h2>
        <div className="main-bg ">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="inputPassword4" className="mt-2">
                <b>Customer Mobile</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Customer Mobile*"
              />
            </div>
            <div className="col-md-3 ">
              <label htmlFor="inputPassword4" className="mt-2">
                <b>Bank Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Bank Name*"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputPassword4" className="mt-2">
                <b>Card Number</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="xxxx xxxx xxxx"
              />
            </div>
          
            <div className="col-md-3">
              <label htmlFor="inputPassword4" className="mt-2">
                <b>Card Holder Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Card Holder Name*"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputPassword4" className="mt-2">
                <b>Amount</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Amount"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputPassword4" className="mt-2">
                <b>Expiry Month</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="MM"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputPassword4" className="mt-2">
                <b>Expiry Year</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="YY"
              />
            </div>

            <div className="col-md-3 process-button">
              <button className="btn btn-primary" type="submit">
                Process
              </button>
            </div>
          </div>
          <div className="mt-3">
            <h2 style={{ color: "#e21d24" }}>
              Request <span style={{ color: "#2e26c6" }}>History</span>
            </h2>
          </div>
          <div className="col-4 d-flex mt-3">
            <ul>
              <li style={{ color: "#e21d24", listStyle: "none" }}>
                <b>From</b>
              </li>
              <input type="date"></input>
            </ul>
            <ul>
              <li style={{ color: "#2e26c6", listStyle: "none" }}>
                <b>To</b>
              </li>
              <input type="date"></input>
            </ul>
            <div className="ms-5 mt-3 search-button">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
          <div className="d-flex  mb-3 right-button float-end">
            <div className="ms-5 mt-3 search-button">
              <button className="btn btn-primary" type="submit">
                <AiOutlineFileExcel /> Export To Excel
              </button>
            </div>
            <div className="ms-5 mt-3 search-button">
              <button className="btn btn-danger" type="submit">
              <AiOutlineFilePdf/>  Export To PDF
              </button>
            </div>
          </div>

          <div className="container">
            <table className="table table-bordered table-striped ">
              <thead>
                <tr>
                  <th scope="col">Date & Time</th>
                  <th scope="col">Reference Number</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Bank Name</th>
                  <th scope="col">Card No.</th>
                  <th scope="col">Card Holder Name</th>
                  <th scope="col">Mobile No.</th>
                  
                 
                  
                  <th scope="col">TXN Status</th>
                  <th scope="col">Payment Status</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">10/10/2022 || 12.00PM</td>
                  <td>5646566565</td>
                  <td>64546</td>
                  <td>Axis</td>
                  <td>886736434</td>
                  <td>Ravinder Kumar</td>
                  <td>765765765</td>
                
                  <td style={{ color: "green" }}>Verify</td>
                  <td>Success</td>
                </tr>
                <tr>
                  <td scope="row">15/05/2021|| 11:00AM</td>
                  <td>6456566565</td>
                  <td>64546</td>
                  <td>HDFSC</td>
                  <td>776736434</td>
                  <td>sachin Kumar</td>
                  <td>955765765</td>
                  
                  <td style={{ color: "red" }}>Reject</td>
                  <td>Success</td>
                </tr>
                <tr>
                  <td scope="row">13/07/2020 || 4.00 PM</td>
                  <td>9456566565</td>
                  <td>75546</td>
                  <td>sbi</td>
                  <td>876736434</td>
                  <td>sandeep Kumar</td>
                  <td>965765765</td>
                  <td style={{ color: "orange" }}>Pending</td>
                  <td>Success</td>
                </tr>
              </tbody>
            </table>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default InstantTopup;
