import React, { useState, useRef, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import jsPDF from 'jspdf'
import { FaFileExcel } from 'react-icons/fa';
import { AiOutlineFilePdf } from 'react-icons/ai';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import { useUserProfile } from '../customHooks/hooks';

const AgentLedger = () => {
    const { kycData } = useUserProfile();
    const tableRef = useRef('');

    const [searchQuery, setSearchQuery] = useState('');
    const [tableData, setTableData] = useState([
        { id: 1, date: '12-10-2022', txnId: 'TXN123', description: "treyo", paymentMode: 'Credit Card', debit: 2000, credit: 400, closingbalance: "25,0000", view: "lorem" },
        { id: 2, date: '25-5-2025', txnId: 'TXN543', description: "fgtr", paymentMode: 'Debit Card', debit: 1500, credit: 500, closingbalance: "20,0000", view: "modern" },
        { id: 3, date: '5-5-2019', txnId: 'TXN389', description: "mobir", paymentMode: 'Net banking', debit: 1800, credit: 1000, closingbalance: "10,0000", view: "depart" },
        { id: 4, date: '7-8-2001', txnId: 'TXN987', description: "gumar", paymentMode: 'upi', debit: 2200, credit: 1200, closingbalance: "27,0000", view: "moster" },
        // { id: 5, date: '7-8-2001', txnId: 'TXN421', description: "nadar", paymentMode: 'Credit Card', debit: 1600, credit: 1500 },
        // { id: 6, date: '7-8-2001', txnId: 'TXN974', description: "yuoi", paymentMode: 'Cash', debit: 25000, credit: 2500 },
    ]);

    const filteredData = tableData.filter((item) =>

        item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.txnId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.paymentMode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.debit.toString().includes(searchQuery) ||
        item.credit.toString().includes(searchQuery) ||
        item.closingbalance.toString().includes(searchQuery) ||
        item.view.toLowerCase().includes(searchQuery.toLowerCase())

    );

    // const handleExport = () => {
    //     const fileName = 'filtered_data.xlsx';
    //     const ws = XLSX.utils.json_to_sheet(filteredData);
    //     const wb = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    //     XLSX.writeFile(wb, fileName);
    // };

    // const handleExportPDF = () => {
    //     const doc = new jsPDF();
    //     const table = document.getElementById('table');
    //     doc.autoTable({ html: table });
    //     doc.save('filtered_data.pdf');
    // };

    const onDelete = (id) => {
        setTableData(tableData.filter((item) => item.id !== id))
    }

    return (
        <>
            <div>
                <UserHeader kycData={kycData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container fundRequestHistory mt-3 mb-5'>
                <h2 style={{ color: "#e21d24" }}> Agent  <span style={{ color: "#2e26c6" }}> Ledger</span></h2>
                <div className='row main-bg'>
                    <div className='col-12 mt-3'>
                        <div className='col-4 d-flex'>
                            {/* <ul>
                                <li style={{ color: "#e21d24" }}><b>From</b></li>
                                <input type="name"></input>
                            </ul> */}
                            <ul>
                                <li style={{ color: "#2e26c6" }}><b>Search</b></li>
                                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search " className='wallet-search'></input>

                            </ul>
                            {/* <div className="ms-5 mt-3 search-button">

                                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                            </div> */}
                        </div>
                        <div className='d-flex  mb-3 right-button'>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-primary" ><FaFileExcel /> Export To Excel</button>
                            </div>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-danger"><AiOutlineFilePdf /> Export To PDF</button>
                            </div>
                        </div>

                        <div className="container">
                            <table id="example" className="table table-bordered table-striped">

                                <thead>

                                    <tr>
                                        <th scope="col">Date & Time</th>
                                        <th scope="col">TXN Id</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Payment Mode</th>
                                        <th scope="col">Debit</th>
                                        <th scope="col">Credit</th>
                                        <th scope="col">Closing Balance</th>
                                        <th scope="col">View</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredData.map((item) => (
                                        <>
                                            <tr key={item.id}>
                                                <th scope="row">{item.date}</th>
                                                <td>{item.txnId}</td>
                                                <td>{item.description}</td>
                                                <td>{item.paymentMode}</td>
                                                <td>{item.debit}</td>
                                                <td>{item.credit}</td>
                                                <td>{item.closingbalance}</td>
                                                <td>{item.view}</td>
                                                <td>
                                                    <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-danger btn-sm me-3" onClick={() => onDelete(item.id)}>delete</button></i>
                                                </td>
                                            </tr>

                                            {/* < tr >
                                                <th scope="row">{item.date}</th>
                                                <td>{item.txnId}</td>
                                                <td>{item.description}</td>
                                                <td>{item.paymentMode}</td>
                                                <td>{item.debit}</td>
                                                <td>{item.credit}</td>
                                                <td>20,0000</td>
                                                <td>lorem</td>
                                                <td>
                                                    <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-success btn-sm me-3">Approve</button></i>
                                                </td>
                                            </tr>
                                            
                                            < tr >
                                                <th scope="row">{item.date}</th>
                                                <td>{item.txnId}</td>
                                                <td>{item.description}</td>
                                                <td>{item.paymentMode}</td>
                                                <td>{item.debit}</td>
                                                <td>{item.credit}</td>
                                                <td>20,0000</td>
                                                <td>lorem</td>
                                                <td>
                                                    <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-success btn-sm me-3">Approve</button></i>
                                                </td>
                                            </tr>
                                            
                                            < tr >
                                                <th scope="row">{item.date}</th>
                                                <td>{item.txnId}</td>
                                                <td>{item.description}</td>
                                                <td>{item.paymentMode}</td>
                                                <td>{item.debit}</td>
                                                <td>{item.credit}</td>
                                                <td>20,0000</td>
                                                <td>lorem</td>
                                                <td>
                                                    <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-success btn-sm me-3">Approve</button></i>
                                                </td>
                                            </tr> */}

                                        </>
                                    )
                                    )}

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgentLedger;
