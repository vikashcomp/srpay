import React from 'react';

const OperatorCommision = () => {
    return (
        <>
            <div className='container  mt-3 mb-5'>
                <h2 style={{ color: "#e21d24" }}>Operator <span style={{ color: "#2e26c6" }}>Commisson Info</span></h2>
                <div className='main-bg'>
                    <div className='row my-3 '>
                        <ul className='list-unstyled d-flex justify-content-center'>
                            <li><label htmlFor="slab" className="form-label label-fund-request" style={{ marginTop: "6px" }}><b>Select Provider Type  :</b></label></li>
                            <div className="col-md-2 ms-2">

                                <select className="form-select" >
                                    <option>Select</option>
                                    <option value="Prepaid">Prepaid</option>
                                    <option value="Postpaid">Postpaid</option>
                                </select>
                            </div>
                        </ul>
                    </div>

                    <div className="container mb-4">
                        <h2 className='text-center' style={{ color: "#e21d24" }}>Prepaid </h2>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Provider</th>
                                    <th scope="col">Commission</th>
                                    <th scope="col">IsPercent</th>
                                    <th scope="col"></th>
                                    <th scope="col">Slab</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">Airtel</td>
                                    <td>1</td>
                                    <td>
                                        <select className="form-select" >
                                            <option>Select</option>
                                            <option value="%">%</option>
                                            <option value="%">₹</option>
                                        </select></td>
                                    <td>or</td>
                                    <td><select className="form-select" >
                                        <option>-Select-</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select></td>

                                </tr>
                                <tr>
                                    <td>BSNL All IN 1</td>
                                    <td>1</td>
                                    <td>
                                        <select className="form-select" >
                                            <option>%</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select></td>
                                    <td>or</td>
                                    <td><select className="form-select" >
                                        <option>-Select-</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select></td>

                                </tr>
                                <tr>
                                    <td >Idea</td>
                                    <td>1</td>
                                    <td>
                                        <select className="form-select" >
                                            <option>%</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select></td>
                                    <td>or</td>
                                    <td><select className="form-select" >
                                        <option>-Select-</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select></td>

                                </tr>
                                <tr>
                                    <td >Idea Voda Phone</td>
                                    <td>1</td>
                                    <td>
                                        <select className="form-select" >
                                            <option>%</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select></td>
                                    <td>or</td>
                                    <td><select className="form-select" >
                                        <option>-Select-</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td >Jio</td>
                                    <td>1</td>
                                    <td>
                                        <select className="form-select" >
                                            <option>%</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select></td>
                                    <td>or</td>
                                    <td><select className="form-select" >
                                        <option>-Select-</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td >Jio Prime</td>
                                    <td>1</td>
                                    <td>
                                        <select className="form-select" >
                                            <option>%</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select></td>
                                    <td>or</td>
                                    <td><select className="form-select" >
                                        <option>-Select-</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td >UTI Pan Coupon</td>
                                    <td>1</td>
                                    <td>
                                        <select className="form-select" >
                                            <option>%</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select></td>
                                    <td>or</td>
                                    <td><select className="form-select" >
                                        <option>-Select-</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OperatorCommision;
