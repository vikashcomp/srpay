import React, { useEffect, useRef, useState } from "react";
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import { useUserProfile, useUserwalletBalance } from '../customHooks/hooks';
import { getFundList } from "../redux/actions/fundRequestAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import Pagination from "react-js-pagination";
import html2canvas from "html2canvas";
import moment from "moment";
import { useDownloadExcel } from "react-export-table-to-excel";
const initialState = {
  from: "",
  to: "",
};
const FundRequestHistory = () => {
  const { kycData } = useUserProfile();
  const { walletBalanceData } = useUserwalletBalance();
  const [iState, updateState] = useState(initialState);
  const { from, to } = iState;
  const tableRef = useRef();
  const [activePage, updateActivePage] = useState(1);
  const [serialNo, updateSerialNo] = useState(10);

  const dispatch = useDispatch();
  const { fundRequestList } = useSelector((state) => state.fundRequestForm);

  const userDataid = JSON.parse(window.localStorage.getItem("tokenData"));

  useEffect(() => {
    dispatch(getFundList({ access_token: userDataid }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateState({ ...iState, [name]: value });
  };

  const handlePageChange = (pageNumber) => {
    let ser = pageNumber * 10;
    updateSerialNo(ser);
    updateActivePage(pageNumber);
    //  dispatch(getCategoryList({ pageNumber: pageNumber }));
  };

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });
  const exportToPDF = () => {
    const doc = new jsPDF();

    // Find the table element
    const table = document.querySelector("table");

    // Use html2canvas to convert the table to an image
    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add the image to the PDF
      doc.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

      // Save the PDF
      doc.save("table.pdf");
    });
  };

  const handleApply = () => {
    if (!from && !to) {
      toast.error("Please select the date", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
    if (from && !to) {
      toast.error("Please Select To Date", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
    if (!from && to) {
      toast.error("Please Select To Date", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
    if (from && to) {
      if (to < from) {
        toast.error("To Date can't be less than From Date", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        updateState({ ...iState, endDate: "" });
      }
    }

    if (from && to && from < to) {
      dispatch(getFundList({ access_token: userDataid, from, to })).then(
        (res) => {
          if (res.status === true) {
            toast.success("Data Found Successfully", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
            });
            updateState({
              ...iState,
            });
          } else {
            toast.error("No Data Found", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
            });
          }
        }
      );
    }
  };

  const handleRefresh = () => {
    updateState(initialState);
    dispatch(getFundList({ access_token: userDataid }));
    updateActivePage(1);
    updateSerialNo(10);
  };
  return (
    <>
      <div>
        <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
      </div>
      <div className="container fundRequestHistory mt-3">
        <h2 style={{ color: "#e21d24" }}>
          Fund <span style={{ color: "#2e26c6" }}>Request History</span>
        </h2>
        <div className="row">
          <div className="col-12 main-bg mt-3 mb-3 ">
            <div className="col-4 d-flex">
              <ul>
                <li style={{ color: "#e21d24", listStyle: 'none' }}>
                  <b>From</b>
                </li>
                <input
                  type="date"
                  name="from"
                  value={from}
                  max={new Date().toISOString().split("T")[0]}
                  onChange={handleInputChange}
                ></input>
              </ul>
              <ul>
                <li style={{ color: "#2e26c6", listStyle: 'none' }}>
                  <b>To</b>
                </li>
                <input
                  type="date"
                  name="to"
                  value={to}
                  min={moment(from).format("YYYY-MM-DD")}
                  onChange={handleInputChange}
                ></input>
              </ul>
              <div className="ms-5 mt-3 search-button">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleApply}
                >
                  Search
                </button>
              </div>
              <div className="ms-5 mt-3 search-button">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleRefresh}
                >
                  Clear
                </button>
              </div>
            </div>
            <div className="d-flex  mb-3 right-button">
              <div className="ms-5 mt-3 search-button">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={onDownload}
                >
                  Export To Excel
                </button>
              </div>
              <div className="ms-5 mt-3 search-button">
                <button
                  className="btn btn-danger"
                  type="submit"
                  onClick={exportToPDF}
                >
                  Export To PDF
                </button>
              </div>
            </div>

            <div className="container">
              <table
                className="table table-bordered table-striped"
                ref={tableRef}
              >
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Reference No.</th>
                    <th scope="col">USER ID</th>
                    {/* <th scope="col">Distributer Name</th> */}
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Mode</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {fundRequestList?.length > 0 ?
                    fundRequestList?.map((x, i) => {
                      console.log("fundRequestList", fundRequestList);
                      //  console.log('filterrrrrrrr',filterData)
                      return (
                        <tr key={i}>
                          <td scope="row">{i + 1 + serialNo - 10}</td>
                          <td scope="row">{x.ftr_ref_no}</td>
                          <td>{x.nreq_id}</td>
                          {/* <td>{x.abc}</td> */}
                          <td>{x.amount}</td>
                          <td>
                            {moment(x.ftr_date).format("YYYY-MM-DD")}
                          </td>
                          <td>{x.trans_id}</td>
                          <td>{x.mode_trans}</td>

                          <td style={{ color: x.is_approved === true ? 'green' : x.is_pending === true ? 'orange' : x.is_approved === false ? 'red' : '' }}>
                            <strong>
                              {x.is_approved === true ? "Accepted" : x.is_pending === true ? "Pending" : x.is_approved === false ? "Rejected" : ""}
                            </strong>
                          </td>



                          {/* <td>{x.}</td> */}
                          {/* <td>
                                                        {x.is_denied}
                                                    </td> */}
                          {/* <td>{x.}</td> */}
                        </tr>
                      );
                    })
                    : <tr>
                      <td colSpan="10">
                        <p>No Data found.</p>
                      </td>
                    </tr>}
                </tbody>
              </table>
            </div>
            <div className="Pagination">
              <ul>
                {/* {couponList?.data?.total > 0 && ( */}
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={10}
                  //   totalItemsCount={couponList?.data?.total}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                />
                {/* )} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundRequestHistory;
