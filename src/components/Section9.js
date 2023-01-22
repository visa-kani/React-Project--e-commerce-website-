import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import logo from '../logo&icons/logo-white.png'
import {RiArrowRightSLine} from 'react-icons/ri'
import Container from 'react-bootstrap/esm/Container'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillGooglePlusCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoPinterest } from 'react-icons/io'
// import { Link } from 'react-router-dom'


function Section9() {
  return (
    <div className='footer1'>
        <Container>
            <Row >
                <Col lg={3} md={12} xs={12}>
                    <img src={logo} alt='logo' className='footer-adjust2'/>
                    <p className='footer-txt2 footer-adjust'>Address: Timbercrest Road, Chisana, Alaska Badalas United State</p>
                    <p className='footer-txt2 footer-adjust'>Phone: 706-676-8237</p>
                    <p className='footer-txt2 footer-adjust'>Email: petdy@demo.com</p>
                    <p className='footer-txt2 footer-adjust'>Working Our: Operating 24/7</p>
                </Col>
                <Col lg={3} md={6} xs={6}>
                <h4 className='footer-txt1'>Quick Links</h4>
                    <p className='footer-txt2'><RiArrowRightSLine/>About Us</p>
                    <p className='footer-txt2'><RiArrowRightSLine/>Contact Us</p>
                    <p className='footer-txt2'><RiArrowRightSLine/> Service</p>
                    <p className='footer-txt2'><RiArrowRightSLine/>Why Choose Us</p>
                    <p className='footer-txt2'><RiArrowRightSLine/> Business With Us</p>
                    <p className='footer-txt2'><RiArrowRightSLine/> Find A Store</p>
                </Col>
                <Col lg={3}  md={6} xs={6}>
                    <h4 className='footer-txt1'>Quick Links</h4>
                     <p className='footer-txt2'><RiArrowRightSLine/>About Us</p>
                    <p className='footer-txt2'><RiArrowRightSLine/>Contact Us</p>
                    <p className='footer-txt2'><RiArrowRightSLine/> Service</p>
                    <p className='footer-txt2'><RiArrowRightSLine/>Why Choose Us</p>
                    <p className='footer-txt2'><RiArrowRightSLine/> Business With Us</p>
                    <p className='footer-txt2'><RiArrowRightSLine/> Find A Store</p>
                </Col>
                <Col  lg={3} md={12} xs={12}>
                    <h4 className='footer-txt1'>News Letter</h4>
                    <p className='footer-txt2'>Follow us to receive notifications about new products and promotions</p>
                    <div className='input-layout '>
                        <input className='input' placeholder='Your email'></input> <span className='input-layout-txt'> SUBSCRIBE</span>
                    </div>
                  
                    <p className='footer-icon'>Follows Us :<BsFacebook className='foot-icon'/><AiOutlineTwitter className='foot-icon'/><AiFillGooglePlusCircle className='foot-icon'/><AiOutlineInstagram className='foot-icon'/><AiFillLinkedin className='foot-icon'/><IoLogoPinterest className='foot-icon'/> </p>
                    <div>
                    <p className='footer-txt3'></p>
                    </div>
                </Col>
            </Row>
            <div className='border-line'></div>
        </Container>
        <Container>
        <Row className='footer2'>
            <Col>
            <p className='footer-txt2'>Copyright 2023 <span className='txt-white'>Pedty</span>-All Rights Reserved.</p>
            </Col>
            <Col>
                <p>GO TO TOP</p>
            </Col>
            <Col>
                <p className='footer-txt2 floating-right'>Powered by <span className='txt-orange'>WooVina Theme</span></p>
            </Col>
        </Row>
        <div className='border-line-orange'></div>
        </Container>
    </div>
  )
}

export default Section9