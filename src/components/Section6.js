import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import {AiOutlineStar} from 'react-icons/ai'

function Section6() {
  return (
    <div>
        <Container className='banner-bottom'>
            <Row>
                <Col lg={3} md={8} sm={12}>
                    <div className="banner-txt1 txt-black f-s">pets <span className="banner-txt1 txt-orange f-s">accessories</span> </div>
                    <b href="#" className="petaccess-txt1">All Products</b><br></br>
                    <b href="#" className="petaccess-txt1">Accessories & Parts</b><br></br>
                    <b href="#" className="petaccess-txt1">Audio & Video</b><br></br>
                    <b href="#" className="petaccess-txt1">Camera & Photo</b><br></br>
                    <b href="#" className="petaccess-txt1">Accessories</b><br></br>
                    <b href="#" className="petaccess-txt1">Dining Subtances</b><br></br>
                    <b href="#" className="petaccess-txt1">Pet Housing</b><br></br>
                    <b href="#" className="petaccess-txt1">Toys</b><br></br>
                </Col>
                <Col lg={3} xs={6}>
                    <Row>
                        <Col className='petfood-down' lg={4}>
                            <div className='petfood-img petfood-img1'></div>
                        </Col>
                        <Col className='petfood-down' lg={8}>
                            <div className='star-color'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                            <p className="petfood-txt1">Freesytle chicken, Salmon & lentiles Recipes</p>
                            <p className="petfood-txt2">$65.00</p>
                        </Col>
                    </Row>
                    <div className='borderbottom-line'></div>
                    <Row>
                        <Col lg={4}>
                            <div className='petfood-img petfood-img2'></div>
                        </Col>
                        <Col lg={8}>
                            <div className='star-color'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                            <p className="petfood-txt1">Freestyle Small Breed Turkey & Lentils Recipe</p>
                            <p className="petfood-txt2">$40.00</p>
                        </Col> 
                    </Row>
                    <div className='borderbottom-line'></div>
                    <Row>
                        <Col lg={4}>
                            <div className='petfood-img petfood-img3'></div>
                        </Col>
                        <Col lg={8}>
                            <div className='star-color'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                            <p className="petfood-txt1">Medalseries Chicken, Salmon & Carrot In Broth Recipe</p>
                            <p className="petfood-txt2">$50.00</p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} xs={6}>
                <Row>
                        <Col className='petfood-down' lg={4}>
                            <div className='petfood-img petfood-img4'></div>
                        </Col>
                        <Col className='petfood-down' lg={8}>
                            <div className='star-color'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                            <p className="petfood-txt1">Medalseries Limited Ingredient Diet Turkey Recipe</p>
                            <p className="petfood-txt2">$55.00</p>
                        </Col>
                    </Row>
                    <div className='borderbottom-line'></div>
                    <Row>
                        <Col lg={4}>
                            <div className='petfood-img petfood-img5'></div>
                        </Col>
                        <Col className='petfood-left2' lg={8}>
                            <div className='star-color'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                            <p className="petfood-txt1">Freestyle Jerky Strips Salmon With Strawberries Recipe</p>
                            <p className="petfood-txt2">$60.00</p>
                        </Col> 
                    </Row>
                    <div className='borderbottom-line'></div>
                    <Row>
                        <Col lg={4}>
                            <div className='petfood-img petfood-img6'></div>
                        </Col>
                        <Col lg={8}>
                            <div className='star-color'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                            <p className="petfood-txt1">Medalseries Limited Ingredient Diet Turkey Recipe</p>
                            <p className="petfood-txt2">$40.00</p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className='banner-bgi6'>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Section6