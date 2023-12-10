import React, { useEffect, useRef, useState } from "react";
import { useUserProfile, useUserwalletBalance } from '../customHooks/hooks';
import UserHeader from './UserHeader';
import UserNav from './UserNav';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { AiOutlineFileExcel } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { partnerLedgerList } from '../redux/actions/ledgerAction';
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

const PartnerLeder = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const dispatch = useDispatch()
    const tableRef = useRef();
    const [activePage, updateActivePage] = useState(1);
    const [serialNo, updateSerialNo] = useState(10);

    const [iState, updateState] = useState(initialState);
    const { from, to } = iState;

    const { partnerLedgerData } = useSelector((state) => state.partnerLedgerList);
    console.log("partnerledgerdata", partnerLedgerData)

    const userDataid = JSON.parse(window.localStorage.getItem('tokenData'));

    useEffect(() => {
        dispatch(partnerLedgerList({ access_token: userDataid }));
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

        // if (from && to && from < to) {
        //     dispatch(partnerLedgerList({ access_token: userDataid, from, to })).then(
        //         (res) => {
        //             if (res.status === true) {
        //                 toast.success("Data Found Successfully", {
        //                     position: toast.POSITION.TOP_RIGHT,
        //                     autoClose: 1000,
        //                 });
        //                 updateState({
        //                     ...iState,
        //                 });
        //             } else {
        //                 toast.error("No Data Found", {
        //                     position: toast.POSITION.TOP_RIGHT,
        //                     autoClose: 1000,
        //                 });
        //             }
        //         }
        //     );
        // }
    };

    const handleRefresh = () => {
        updateState(initialState);
        dispatch(partnerLedgerList({ access_token: userDataid }));
        updateActivePage(1);
        updateSerialNo(10);
    };
    return (
        <>
            <div>
                <div>
                    <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
                    <UserNav userRole={kycData?.user_type_label} />
                </div>
                <div className='container fundRequestHistory mt-4 mb-3'>
                    <h2 style={{ color: "#2e26c6" }}>Partner Wallet<span style={{ color: "#e21d24" }}> Ledger</span></h2>
                    <div className='row  main-bg'>
                        <div className='col-12 mt-3 mb-3 '>
                            <div className='col-4 d-flex '>
                                <ul>
                                    <li style={{ color: "#e21d24" }}>
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
                                    <li style={{ color: "#2e26c6" }}>
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
                            <div className='d-flex  mb-3 right-button'>
                                <div className="ms-5 mt-3 search-button">
                                    <button className="btn btn-primary" type="submit" onClick={onDownload}><AiOutlineFileExcel /> Export To Excel</button>
                                </div>
                                <div className="ms-5 mt-3 search-button">
                                    <button className="btn btn-danger" type="submit" onClick={exportToPDF}><AiOutlineFilePdf /> Export To PDF</button>
                                </div>
                            </div>

                            <div className="container">
                                <table className="table table-bordered table-striped" ref={tableRef}>
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Date & Time</th>
                                            <th scope="col">Deposit Date</th>
                                            <th scope="col">Refrance Number</th>
                                            <th scope="col">User ID/Name</th>
                                            <th scope="col">Mode</th>
                                            <th scope="col">Deposit Amt</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Dis.Remark</th>
                                            <th scope="col">Remark</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {partnerLedgerData?.length > 0 ?
                                            partnerLedgerData?.map((x, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td scope="row">{i + 1 + serialNo - 10}</td>

                                                        <td>{moment(x.requested_date).format("YYYY-MM-DD")}</td>
                                                        <td>{x.ftr_ref_no}</td>
                                                        <td>{x.req_parent_name}</td>
                                                        <td>{x.mode_transfer}</td>
                                                        <td>{x.req_amount}</td>
                                                        <td>Inprocess</td>
                                                        <td></td>
                                                        <td>{x.remarks}</td>
                                                        <td>{x.trans_type}</td>
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
            </div>

        </>
    )
}

export default PartnerLeder
