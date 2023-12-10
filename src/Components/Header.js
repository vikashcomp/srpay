import React from 'react'
import logo from '../images/sr.jpg'
const Header = () => {
  return (
    <>
   


<header className="d-flex flex-wrap justify-content-center mb-4 border-bottom top-header">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <div className="logo p-3">
                <img className="img-fluid" src={logo}/>
            </div>
        </a>
        <ul className="nav nav-pills d-inline cta p-3 text-center">
            <li className="nav-item"><a href=""><i className="fa-solid fa-phone"></i> 0123456789</a></li>
            <li className="nav-item"><a href=""><i className="fa-solid fa-envelope"></i> example@gmail.com</a></li>
        </ul>
    </header>
    
    </>
    

    
  )
}

export default Header