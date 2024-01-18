import React from 'react'
import "./Landing.css"
import { Col, Container, Row } from 'react-bootstrap'
import {HiLocationMarker} from "react-icons/hi"
import LadningImage from "../../Assests/hero-image.png"
import { Slide } from "react-awesome-reveal";
import CountUp   from  "react-countup"
export const Landing = () => {
    return (
        <div className='bg landing' id="#home">
            <Container>
                <Row>
                    <Col md="6" lg="6" sm="12">
                        
                        <div className='textdiv '>
                        <Slide direction="up"  duration={2000} >
                        <h1>Discover <br/> Most Suitable Property</h1>
                        </Slide>
                        <span>Find A Variety of Properties that suit you very easily</span>
                        <span>  forget all difficulties
                        in finding a residence for you
                        </span>
                    </div>
                    
                    <div className='searchBar flex'>
                        <div className='inputBox flex'>
                        <HiLocationMarker className="icon" />
                        <input type='text' placeholder='Search By Location' />
                        </div>
                        <button className='btn'>Search</button>
                    </div>
                    <div className='numbers flex'>
                        <div className='singleNumber '>
                            <div className='d-flex parent ms-2'>
                                <span className='me-1'> <CountUp delay={0} duration={3} start={8900} end={9000}/></span>
                                <blockquote>+</blockquote>
                            </div>
                            <small>Premium Product</small>
                        </div>

                        <div className='singleNumber'>

                            <div className='d-flex parent ms-2'>
                                <span className='me-1'><CountUp delay={0} duration={3} start={1980} end={2000}/> </span>
                                <blockquote>+</blockquote>
                            </div>
                            <small>Happy  Customers </small>
                        </div>

                        <div className='singleNumber'>
                        <div className='d-flex parent ms-2'>
                                <span className='me-1'><CountUp delay={0} duration={3} start={18} end={28}/></span>
                                <blockquote>+</blockquote>
                            </div>
                            <small className=''>Awards  Winning </small>
                        </div>
                    </div>
                    </Col>

                    
                    <Col md="6" lg="6" sm="12">
                    <Slide direction= "right"  duration={2000} >
                        <div className='imgDiv '>
                            <img alt=''src={LadningImage}/>
                        </div>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
