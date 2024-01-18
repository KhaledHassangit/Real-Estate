import React from 'react'
import "./Banner.css"
import {Row,Col, Container} from 'react-bootstrap'
import { Fade, Slide } from "react-awesome-reveal";


const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Slide>
                <Row>
                    <Col md="12">
                        <div className='subs'>
                        <h2>Get started with Homyz</h2>
                        <span>Subscribe and find super attractive price quotes from us.</span>
                        <span>Find your residence soon</span>
                        <button>Get Started</button>
                        </div>
                    </Col>
                </Row>
                </Slide>
            </Container>
        </div>
    )
}

export default Banner
