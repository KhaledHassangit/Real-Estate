import React from 'react'
import "./Footer.css"
import {  Container, Row } from 'react-bootstrap'
import Logo2 from "../../Assests/logo2.png"
import { Fade } from "react-awesome-reveal";

export const Footer = () => {
    return (
        <div className='footer '>
            <Container>
                <Fade>
                <Row>
                    <div className='between p-3'>
                    <>
                        <div className='d-flex flex-column'>
                        <div className='logo'>
                        <img className='logo' src={Logo2} alt=''/>
                        </div>
                        <span>Our vision is to make all people</span>
                        <span>the best place to live for them.</span>
                        </div>
                    </>

                    <>
                        <div className='info '>
                            <div className='adress'>
                                <h3>Information</h3>
                                <span>145 New York, FL 5467, USA</span>
                            </div>
                            <ul className='d-flex p-0 '>
                                <li>Property</li>
                                <li>Services</li>
                                <li>Product</li>
                                <li>AboutUs</li>
                            </ul>
                        </div>

                    </>
                    </div>
                </Row>
                </Fade>
            </Container>
        </div>
    )
}
