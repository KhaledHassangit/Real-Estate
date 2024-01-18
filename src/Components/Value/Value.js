import React from 'react'
import "./Value.css"
import {Row,Col, Container} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import value from "../../Assests/value.png";
import { Fade } from "react-awesome-reveal";

export const Value = () => {
    return (



        <div className='value'>
            <Container>
            <Row>
                
                <Col md="12" lg="6" sm="12" xs="12">
                    <Fade >
                    <div className='imgbox'>
                        <img alt='' src={value}/>
                    </div>
                    </Fade>
                </Col>
                <Col md="12" lg="6" sm="12" xs="12">
                    <div className='text'>
                    <h3>Our Value</h3>
                    <h2>Value We Give to You</h2>
                    <p>We always ready to help by providijng the best services for you.
                    We beleive a good blace to live can make your life better
                    </p>
                    </div>
                    <div className='msg'>
                        <Accordion defaultActiveKey="0" flush className='acord'>
                            <Accordion.Item eventKey="0" className='item'>
                                <Accordion.Header className='head flexCenter'>Best interest rates on the market</Accordion.Header>
                                <Accordion.Body>
                                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut 
                                occaecat consequat est minim minim esse tempor laborum consequat 
                                esse adipisicing eu reprehenderit enim.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" className='item'>
                                <Accordion.Header className='head flexCenter'>Prevent unstable prices</Accordion.Header>
                                <Accordion.Body>
                                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut 
                                occaecat consequat est minim minim esse tempor laborum consequat 
                                esse adipisicing eu reprehenderit enim.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className='item'>
                                <Accordion.Header className='head flexCenter'>Best price on the market</Accordion.Header>
                                <Accordion.Body>
                                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut 
                                occaecat consequat est minim minim esse tempor laborum consequat 
                                esse adipisicing eu reprehenderit enim.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
