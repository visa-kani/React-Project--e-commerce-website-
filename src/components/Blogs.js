import React from 'react'
import Section1 from './Section1'
import {RiArrowRightSLine} from 'react-icons/ri'
import {FaRegComment} from 'react-icons/fa'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Carousel from 'react-bootstrap/Carousel'
import blog2 from '../images/blog-2.jpg'
import blog10 from '../images/blog-10.jpg'
import blog7 from '../images/blog-7.jpg'
import blog3 from '../images/blog-3.jpg'

function Blogs() {
  return (
    <div>
        <Section1/>

        <div className='cart-banner '>
            <p className='cart-head'>Blogs</p>
            <p className='card-txt1 center-txt'>home <RiArrowRightSLine/><span>Blogs</span></p>
        </div>
        
        <Container>
            <Row>
                <Col lg={4}>
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={blog2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={blog10}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={blog3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={blog7}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
                </Col>
                <Col lg={7} className='blogs-container2-spacing'> 
                <div className='blogs-txt1'>BUSINESS</div>
                <div className='blogs-txt2'>Post with Gallery</div>
                <div className='about-txt2'>
                Phasellus sit amet elits sem. Maecenas eleifend exid id magna pretium tincidunt. 
                Nam vel venenatis odio. Sed in metus eu dui gravida elementum. 
                Fusce vehicula mauris quis interdum consequat. 
                In cursus est faucibus odio auctor dapibus. Aliquam interdum, 
                lacus et euismod volutpat, enim metus hendrerit turpis, 
                a maximus erat sem nec orci. Proin suscipit ullamcorper mattis. 
                Sed vehicula sit amet risus hendrerit viverra.
                </div>
                <div className='blogs-borderbottom-line'></div>
                <div className='border-line-spacing'>  
                <div className='floating blog-icon'><FaRegComment/></div> <div className='blogs-txt1 txt-orange'> 0 Comments</div>  
               
                </div>
                <div className='floating-right blogs-txt1 txt-orange'>JULY 9, 2019</div>
                </Col>
                <div className='blogs-borderbottom-line'></div>
            </Row>
            <Row>
              <Col lg={4}>
                
              </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default Blogs