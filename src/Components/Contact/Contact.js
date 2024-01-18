import React from 'react'
import "./Contact.css"
import {Row,Col, Container} from 'react-bootstrap'
import contact from "../../Assests/contact.jpg"
import chat from "../../Assests/chat.png" 
import call from "../../Assests/call.png" 
import msg from "../../Assests/msg.png" 
import { Fade,Roll,Slide } from "react-awesome-reveal";

export const Contact = () => {
    return (



        <div className='contact d-flex  '>
            <Container>
            <Row>
                
                
                <Col md="12" lg="12" xl="6" sm="12">
                <div className='title'>
                    <h3>Our Contact Us</h3>
                    <h2>Easy to contact us</h2>
                    <p>We always ready to help by providijng the best services for you.
                    We beleive a good blace to live can make your life better</p>
                </div>
    
                <div className='mods'>
                    <div className='flex1  d-flex '>
                        <Slide duration={1000} direction="down">
                        <div className='box  '>
                            <div className='d-flex'>
                                <div className='me-2 '>
                                <img alt='' src={call} style={{width:"50px",height:"50px"}}/>
                                </div>
                                <div className='flex-column d-flex'>
                                <span className='first'>Call</span>
                                <span >021 123 145 14</span>
                                </div>
                            </div>
                            <button>Call Now</button>

                        </div>
                        </Slide>
                        <Slide duration={1000} direction="down">
                        <div className='box  '>
                            <div className='d-flex'>
                                <div className='me-2 '>
                                <img alt='' src={msg} style={{width:"50px",height:"50px"}}/>
                                </div>
                                <div className='flex-column d-flex'>
                                <span className='first'>Chat</span>
                                <span >021 123 145 14</span>
                                </div>
                            </div>
                            <button>Chat Now</button>

                        </div>
                        </Slide>
                    </div>


                    <div className='flex1  d-flex'>
                    <Slide duration={1000} direction="down">
                    <div className='box  '>
                            <div className='d-flex'>
                                <div className='me-2 '>
                                <img alt='' src={msg} style={{width:"50px",height:"50px"}}/>
                                </div>
                                <div className='flex-column d-flex'>
                                <span className='first'>Video Call</span>
                                <span >021 123 145 14</span>
                                </div>
                            </div>
                            <button>Video Call Now</button>

                        </div>
                    </Slide>
                    <Slide duration={1000} direction="down">
                        <div className='box  '>
                            <div className='d-flex'>
                                <div className='me-2 '>
                                <img alt='' src={chat} style={{width:"50px",height:"50px"}}/>
                                </div>
                                <div className='flex-column d-flex'>
                                <span className='first'>Message</span>
                                <span >021 123 145 14</span>
                                </div>
                            </div>
                            <button>Message Now</button>

                        </div>
                        </Slide>
                    </div>
                </div>
                
                </Col>

                <Col md="12" lg="12" xl="6" sm="12">
                    <Fade  >
                    <div className='divcontainer'>
                        <img alt='' src={contact}/>
                    </div>
                    </Fade>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
