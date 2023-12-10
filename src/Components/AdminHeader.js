import React,{ useState} from 'react'
import logo from "../images/logo.png";
import search from "../images/search.png";
import gear from "../images/gear.png";
import userBlack from "../images/userBlack.png"
import priceTag from "../images/price-tag.png";
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    // const [search, setSearch] = useState()

    return (

        <header className="d-flex flex-wrap justify-content-center border-bottom top-header">
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-lg-4'>
                        <a href="/admin-login" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <div className="logo p-1">
                                <img className="img-fluid" src={logo} />
                                <p className="logo-detail">
                                    <b>HELLO , SR PAY PRIVATE LIMITED</b>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-8 mt-4">
                        <div className="row mb-3 justify-content-end">
                            <div className="col-2 me-5 box box1-bg-color  text-center admin-header-link" >
                                <Link to="/search-user" style={{ color: 'white', textDecoration: 'none', fontSize: "600" }}>
                                    <img className="img-fluid" src={search} width="25px" alt='proper' /> 
                                     {/* <input class="form-control me-2 search-user " type="search" value={search} placeholder="Search User.." aria-label="Search" onChange={(e)=>setSearch(e.target.value)} />  */}
                                    <h6 className='d-inline'><b>Search Users</b></h6>
                                </Link>

                            </div>
                            <div className="col-2 me-5 box box2-bg-color text-center">
                                <Link  style={{ color: 'white', textDecoration: 'none', fontSize: "600" }}>
                                    <img className="img-fluid" src={gear} width="25px" alt='proper' />
                                    <h6 className='d-inline'><b>Marquee Setting</b></h6>
                                </Link>
                            </div>
                            <div className="col-2 me-5 box box3-bg-color text-center">
                                <Link  style={{ color: 'white', textDecoration: 'none', fontSize: "600" }}>
                                    <img className="img-fluid" src={priceTag} width="25px" />
                                    <h6 className='d-inline'><b>Offer/Banner</b></h6>
                                </Link>
                            </div>
                        </div>
                        <div className='row justify-content-end'>
                            <div className="col-2 me-5 box box4-bg-color text-center" >
                                <Link style={{ color: 'white', textDecoration: 'none', fontSize: "600" }}>
                                    <img className="img-fluid" src={userBlack} width="25px" alt='proper' />
                                    <h6 className='d-inline'><b>Modify User</b></h6>
                                </Link>
                            </div>
                            <div className="col-2 me-5 box box5-bg-color  text-center">
                                <Link   to="/block-unblock"style={{ color: 'white', textDecoration: 'none', fontSize: "600" }}>
                                    <img className="img-fluid" src={userBlack} width="25px" alt='proper' />
                                    <h6 className='d-inline'><b>Block/Unblock User</b></h6>
                                </Link>
                            </div>
                            <div className="col-2 me-5 box  box6-bg-color text-center">
                                <Link style={{ color: 'white', textDecoration: 'none', fontSize: "600" }}>
                                    <img className="img-fluid" src={gear} width="25px" alt='proper' />
                                    <h6 className='d-inline'><b>Buisness Setting</b></h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default AdminHeader;
