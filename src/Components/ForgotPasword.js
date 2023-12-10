import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Container } from 'react-bootstrap';
import email from "../images/email.png";
import { Link } from 'react-router-dom';



const ForgotPasword = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link variant="primary" onClick={handleShow}>
                Forgot Password
            </Link>
            <div className='modalpayment '>
                <Modal show={show} onHide={handleClose} animation={false} >
                    {/* <Modal.Header closeButton >
                    </Modal.Header> */}
                    <Modal.Body className='bodyModal' >
                        <Container className='ms-3 mt-3'>
                            <Modal.Title><b>Forgotten Password</b></Modal.Title>
                            <p>Don't Worry! Just Enter Your Email Id And we will<br /> send You a Link To Reset Your Password</p>
                        </Container>

                        <Container  >
                            <Col  >
                                <label htmlFor="inputEmail4" className="form-label"><b>Email Address</b></label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><img src={email} className="img-fluid" width="30px"></img></span>
                                    <input type="text" className="form-control" placeholder="Enter Email Id" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                            </Col>
                            <div className="d-grid mt-2">
                                <Button variant="primary" size="md">
                                    Forgot Password
                                </Button>
                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default ForgotPasword;
