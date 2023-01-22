import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Section3() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 699 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>
        {/* --------------------------------------------------------------------------------------PRODUCT BANNERS 1 --*/}
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
    <div className=" banner-bgi1">
      <div className="banner-layout">
        <div className="banner-txt1 txt-white left-space ">PET'S <span className="banner-txt1 txt-orange">CLOTHER</span></div>
        <p className="banner-txt2 left-space">Various types of pens and <br></br>pens for your pet</p>
        <div>
          <button type="button" className="btn btn-trans lefts-space">DISCOVER NOW</button>
        </div>
      </div>
    </div>
    </Col>
     {/* --------------------------------------------------------------------------------------PRODUCT BANNERS 2 -- */}
    <Col>
    <div className=" banner-bgi2">
      <div className="banner-layout">
        <div className="banner-txt1 txt-white left-space">PET'S <span className="banner-txt1 txt-orange">MILK</span></div>
        <p className="banner-txt2 left-space">Various types of pens and <br></br>pens for your pet</p>
        <div>
          <button type="button" className="btn btn-trans lefts-space">DISCOVER NOW</button>
        </div>
      </div>
    </div>
    </Col>
     {/* --------------------------------------------------------------------------------------PRODUCT BANNERS 3 --*/}
    <Col>
    <div className=" banner-bgi3">
      <div className="banner-layout">
        <div className="banner-txt1 txt-orange left-space">NEW <span className="banner-txt1 txt-white">PRODUCT</span></div>
        <p className="banner-txt2 left-space">Various types of pens and <br></br>pens for your pet</p>
        <div>
          <button type="button" className="btn btn-trans lefts-space">DISCOVER NOW</button>
        </div>
      </div>
    </div>
    </Col>
    </Carousel>

</Row>
    </div>
  )
}

export default Section3