import React from 'react'
import "./Popular.css"
import  { Container,Row ,Col} from "react-bootstrap"
import IMG1 from "../../Assests/r1.png"
import IMG2 from "../../Assests/r2.png"
import IMG3 from "../../Assests/r3.png"
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SwiperCore ,{ Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';
import 'swiper/css/navigation';

const Popular = () => {

    return (
        
        <div className='popular'>
            <Container >
                <div className='title'>
                    <h3>Best Choices</h3>
                    <h2>Popular Residencies</h2>
                </div>
            <Row> 
        
                <div className='cards  '> 
            <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y ]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    breakpoints={{
                        100: {
                            slidesPerView: 1,
                        },
                        
                        780: {
                            slidesPerView: 2,
                            spaceBetween:5,

                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween:5,

                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween:10,
                        },
                        1300: {
                            slidesPerView: 4,
                            spaceBetween:5,
                        },
                    
                    }}
                    
                >
                <SwiperSlide >
                    <div className='card'>
                        <Fade duration={1000}>
                            <div className='img'>
                                <img alt='' src={IMG3}/>
                            </div>
                        </Fade>
                        <div className='price ms-1'>
                            <h5> <span>$</span>35,853</h5>
                            <h4>Aliva Priva Jardin</h4>
                            <p>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='card'>
                        <Fade duration={2000}>
                            <div className='img'>
                                <img alt='' src={IMG1}/>
                            </div>
                        </Fade>
                        <div className='price ms-1'>
                            <h5> <span>$</span>35,853</h5>
                            <h4>Aliva Priva Jardin</h4>
                            <p>Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='card'>
                        <Fade duration={3000}>
                            <div className='img'>
                                <img alt='' src={IMG2}/>
                            </div>
                        </Fade>
                        <div className='price ms-1'>
                            <h5> <span>$</span>35,853</h5>
                            <h4>Aliva Priva Jardin</h4>
                            <p>Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='card'>
                        <Fade duration={4000}>
                            <div className='img'>
                                <img alt='' src={IMG3}/>
                            </div>
                        </Fade>
                        <div className='price ms-1'>
                            <h5> <span>$</span>35,853</h5>
                            <h4>Aliva Priva Jardin</h4>
                            <p>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
                        </div>
                    </div> 
                </SwiperSlide>

                <SwiperSlide>
                <div className='card'>
                        <Fade >
                            <div className='img'>
                                <img alt='' src={IMG1}/>
                            </div>
                        </Fade>
                        <div className='price ms-1'>
                            <h5> <span>$</span>35,853</h5>
                            <h4>Aliva Priva Jardin</h4>
                            <p>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
                        </div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                <div className='card'>
                        <Fade >
                            <div className='img'>
                                <img alt='' src={IMG2}/>
                            </div>
                        </Fade>
                        <div className='price ms-1'>
                            <h5> <span>$</span>35,853</h5>
                            <h4>Aliva Priva Jardin</h4>
                            <p>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
                        </div>
                    </div> 
                </SwiperSlide>
            
            </Swiper>




                    

                </div> 
                    
                </Row>
            </Container>
        </div>
    )
}

export default Popular;
