import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Section8() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 500, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <div>
        <Container>
            <Row>
                <Carousel
                     // ref={el => (this.Carousel = el)} additionalTransfrom={-20 * 5}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    partialVisible={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["desktop"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    arrows={true}
                >

                <Col>
                    <div className='logo1 star-color'></div>
                </Col>
                <Col>
                    <div className='logo2'></div>
                </Col>
                <Col>
                    <div className='logo3'></div>
                </Col>
                <Col>
                    <div className='logo4'></div>
                </Col>
                <Col>
                    <div className='logo5'></div>
                </Col>
                <Col>
                    <div className='logo6'></div>
                </Col>
                </Carousel>
            </Row>
        </Container>
    </div>
  )
}

export default Section8