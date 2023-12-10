import React from 'react'

const DashBoardKhataBook = () => {
    return (
        <>
            <div className='container fundRequestHistory mt-3'>
                <h2 style={{ color: "#e21d24" }}> DashBoard <span style={{ color: "#2e26c6" }}>KhataBook</span></h2>
                <div className='row'>
                    <div className='col-12 main-bg mt-3 mb-3 '>
                        <div className='col-4 d-flex'>
                            <ul>
                                <li style={{ color: "#e21d24" }}><b>From</b></li>
                                <input type="date"></input>
                            </ul>
                            <ul>
                                <li style={{ color: "#2e26c6" }}><b>To</b></li>
                                <input type="date"></input>
                            </ul>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-primary" type="submit">Search</button>
                            </div>

                        </div>
                        <div className='d-flex  mb-3 right-button'>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-primary" type="submit">Export To Excel</button>
                            </div>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-danger" type="submit">Export To PDF</button>
                            </div>
                        </div>

                        <div className="container">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr No</th>
                                        <th scope="col">Request Money</th>
                                        <th scope="col">Payment Diposite</th>
                                        <th scope="col">Move To Md</th>
                                        <th scope="col">Ledger</th>
                                        {/* <th scope="col">Transaction Id</th>
                                        <th scope="col">Mode</th> */}
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>truyt6754342</td>
                                        <td>Sachin Nada</td>
                                        <td>20,000000</td>
                                         <td>776736434</td>
                                        {/* <td>20-02-2023</td>  */}
                                        {/* <td>UPI</td> */}
                                        <td>
                                            <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-success btn-sm me-3">Approve</button></i>
                                            <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-danger btn-sm">Reject</button></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>yttr63554464</td>
                                        <td>Kumar Harshit</td>
                                        <td>18,000000</td>
                                         <td>29-2-2025</td>
                                        {/* <td>776736434</td> */}
                                        {/* <td>UPI</td>  */}
                                        <td>
                                            <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-success btn-sm me-3">Approve</button></i>
                                            <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-danger btn-sm ">Reject</button></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>dyeyeyey6365353</td>
                                        <td>Belal</td>
                                        <td>38,000000</td>
                                         <td>29-01-2035</td>
                                        {/* <td>66646464</td> */}
                                        {/* <td>Net Banking</td>  */}
                                        <td>
                                            <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-success btn-sm me-3">Approve</button></i>
                                            <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-danger btn-sm">Reject</button></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoardKhataBook;
