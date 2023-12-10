import React from "react";

const Footer = () => {
    return (
        <>
            <footer style={{marginTop:"108px"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 my-lg-0 my-sm-2 mt-lg-3 text-center">
                            <p>Copyright 2022 SR Pay. All rights reserved</p>
                        </div>
                        <div className="col-md-4 my-sm-2 text-center">
                            <a href=""><i className="fa-brands fa-2x px-3 fa-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-2x px-3 fa-youtube"></i></a>
                        </div>
                        <div className="col-md-4 my-lg-0 my-sm-2 mt-lg-3 text-center">
                            <p>About SR Pay</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
