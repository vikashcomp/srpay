import React from 'react'
import logo from "../images/logo.png";
import search from "../images/search.png";
import gear from "../images/gear.png";
import price from "../images/price-tag.png";
import homeButton from '../images/home-button.png'
import logout from '../images/logout.png'
const Commission = () => {
    return (
        <>

            <div className="container mt-3">
                <div className="row">
                    <div className="mx-auto">
                        <h2 className="mx-auto " style={{ color: "#2e26c6" }}>
                            Commission <span style={{ color: "#e22d24" }}></span>
                        </h2>
                    </div>
                </div>

                <div className='row'>
                    <div className="col mb-5 offset-lg-2 mx-auto success-page main-bg">

                        <form className='formm' >
                            <div className='row'>
                                <div className='col-md-6 '>
                                    <label style={{ color: "#000" }}><b>State Distributor</b></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>

                                <div className='col-md-6'>
                                    <label style={{ color: "#000" }}><b>Super Distributor</b></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>

                                <div className='col-md-6 mt-2'>
                                    <label style={{ color: "#000" }}><b>Master Distributor</b></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>

                                <div className='col-md-6 mt-2'>
                                    <label style={{ color: "#000" }}><b>Distributor</b></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className='col-md-6 mt-2'>
                                    <label style={{ color: "#000" }}><b>Agent</b></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className="button py-2 text-center">
                                <button
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "blue" }}
                                >
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Commission
