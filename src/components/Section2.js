import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../images/slider.jpg'
import slider2 from '../images/slider2.jpg'

function Section2() {
  return (
    <div>
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
            <p className="carousel-txt2">mighty <b class="carousel-txt2 carousel-txt3"> DOG</b></p>
            <p className="carousel-txt4">We guarantee your dog will love our nourishing and deeply satisfying<br></br> stews as much as our Chief Tasting Officer.</p>
            <div className="floating">
              <button type="button" className="btn btn-dark floating">SHOP NOW </button>
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
             <p className="carousel-txt2">mighty <b class="carousel-txt2 carousel-txt3"> DOG</b></p>
             <p className="carousel-txt4">We guarantee your dog will love our nourishing and deeply satisfying <br></br>stews as much as our Chief Tasting Officer.</p>
             <div className="floating">
               <button type="button" className="btn btn-dark">SHOP NOW </button>
             </div>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Section2