import React from 'react'
import Section1 from './Section1'
import Section8 from './Section8'
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../images/service-slider1.png'
import slider2 from '../images/service-slide2.png'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function Service() {
  return (
    <div>
        <Section1/>

        <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100  carousel-adj"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption >
        <div className="text-left">
           <div>
            <b className="carousel-txt1"> DOG'S FOOD </b>
          </div> 
            <p className="carousel-txt2 txt-white">FOR<b class="carousel-txt3 txt-orange"> YOUR PET</b></p>
            <p className="carousel-txt4 txt-white">We guarantee your dog will love our nourishing and deeply satisfying<br></br> stews as much as our Chief Tasting Officer.</p>
            <div className="floating">
            <button type="button" className="btn btn-orange floating">MAKE AN APPOINTMENT </button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  carousel-adj"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="text-left">
          <div>
            <b className="carousel-txt1"> DOG'S FOOD </b>
          </div>
             <p className="carousel-txt2 txt-white">FOR<b class="carousel-txt3 txt-orange"> YOUR PET</b></p>
             <p className="carousel-txt4 txt-white">We guarantee your dog will love our nourishing and deeply satisfying <br></br>stews as much as our Chief Tasting Officer.</p>
             <div className="floating">
               <button type="button" className="btn btn-orange">MAKE AN APPOINTMENT </button>
             </div>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className='banner-txt1 txt-black service-head'>Our <span className='txt-orange'>features</span></div>

    <Container>
        <Row>
            <Col lg={3} md={6} xs={12} className='g-3' >
                <div className='service-border'>
                    <div className='service-icon'>
                        <figure className='elementor-image-box-img'>
                        <img src="https://demo-44.woovinapro.com/wp-content/uploads/2020/10/injection.svg" class="attachment-full size-full  lazyload-loaded" alt="" loading="lazy" width="70px" height="70px" style={{marginLeft:"40px",marginTop:'30px'}}></img>
                        </figure>
                        <h4 className='service-txt1'>Vaccination</h4>
                        <p className='service-txt2'>Dolor sits amet, consectetur elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad</p>
                        <h5 className='service-txt3'><u>READ MORE</u></h5>
                    </div>
                </div>
            </Col>
            <Col lg={3}  md={6} xs={12} className='g-3'>
            <div className='service-border'>
                    <div className='service-icon'>
                        <figure className='elementor-image-box-img'>
                        <img src="https://demo-44.woovinapro.com/wp-content/uploads/2020/10/bandage.svg" class="attachment-full size-full  lazyload-loaded" alt="" loading="lazy" width="70px" height="70px"  style={{marginLeft:"40px",marginTop:'30px'}}></img>
                        </figure>
                        <h4 className='service-txt1'>Vaccination</h4>
                        <p className='service-txt2'>Dolor sits amet, consectetur elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad</p>
                        <h5  className='service-txt3'><u>READ MORE</u></h5>
                    </div>
                </div>
            </Col>
            <Col lg={3}  md={6} xs={12} className='g-3'>
            <div className='service-border'>
                    <div className='service-icon'>
                        <figure className='elementor-image-box-img'>
                        <img src="https://demo-44.woovinapro.com/wp-content/uploads/2020/10/food.svg" class="attachment-full size-full  lazyload-loaded" alt="" loading="lazy" width="70px" height="70px"  style={{marginLeft:"40px",marginTop:'30px'}}></img>
                        </figure>
                        <h4 className='service-txt1'>Vaccination</h4>
                        <p className='service-txt2'>Dolor sits amet, consectetur elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad</p>
                        <h5  className='service-txt3'><u>READ MORE</u></h5>
                    </div>
                </div>
            </Col>
            <Col lg={3}  md={6} xs={12} className='g-3'>
            <div className='service-border'>
                    <div className='service-icon'>
                        <figure className='elementor-image-box-img'>
                        <img src="https://demo-44.woovinapro.com/wp-content/uploads/2020/10/fracture.svg" class="attachment-full size-full  lazyload-loaded" alt="" loading="lazy" width="70px" height="70px"  style={{marginLeft:"40px",marginTop:'30px'}}></img>                        
                        </figure>
                        <h4 className='service-txt1'>Vaccination</h4>
                        <p className='service-txt2'>Dolor sits amet, consectetur elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad</p>
                        <h5  className='service-txt3'><u>READ MORE</u></h5>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>

    <Section8/>

    </div>
  )
}

export default Service