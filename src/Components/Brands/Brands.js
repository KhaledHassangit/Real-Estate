import React from 'react'
import "./Brands.css"
import Tower from "../../Assests/tower.png"
import Realty from "../../Assests/realty.png"
import Prologis from "../../Assests/prologis.png"
import Equinix from "../../Assests/equinix.png"
import { Col, Container, Row } from 'react-bootstrap'
import { Fade } from "react-awesome-reveal";


const Brands = () => {
    return (
        <div className='brands'>
            <Container className='text-center'>
                
                <Row className='custom'>
                    <Col lg="3" xl="3" md="3" sm="6" xs="12">
                        <Fade duration={1000}>
                        <img alt='' src={Tower} className='Tower'/>
                        </Fade>
                    </Col>

                    <Col lg="3" xl="3" md="3" sm="6" xs="12">
                        <Fade duration={2000}>
                        <img alt='' src={Realty} className='Realty'/>
                        </Fade>
                    </Col>

                    <Col lg="3" xl="3" md="3" sm="6" xs="12">
                        <Fade duration={3000}>
                        <img alt='' src={Prologis} className='Prologis'/>
                        </Fade>
                    </Col>

                    <Col lg="3" xl="3" md="3" sm="6" xs="12">
                        <Fade duration={4000}>
                        <img alt='' src={Equinix} className='Equinix'/>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Brands
