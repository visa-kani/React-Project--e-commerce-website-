import React from 'react'
import Section1 from './Section1'
import {RiArrowRightSLine} from 'react-icons/ri'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import about2 from '../images/about-3.png'
import team1 from '../images/team-1.jpg'
import team2 from '../images/team-2.jpg'
import team3 from '../images/team-3.jpg'
import team4 from '../images/team-4.jpg'
import team5 from '../images/team-5.jpg'
import Section8 from './Section8'

function About() {
  return (
    <div>
         <Section1/>

        <div className='cart-banner '>
            <p className='cart-head'>ABOUT US</p>
            <p className='card-txt1 center-txt'>home <RiArrowRightSLine/><span>About Us</span></p>
        </div>
        <Container className='topspace'>
            <Row>
                <Col lg={6}>
                    <div className='about-txt1 txt-orange'>Welcomme <span className='txt-black'>Petdy</span></div>
                    <p className='card-txt1 '>Our staff spends time interacting with and monitoring the pets to
                        ensure their safety and happiness while they are with us.</p>

                    <p className='about-txt2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aliquip commodo consequat.</p>

                    <p className='about-txt2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. 
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <img src={about2} alt='signature'></img>
                    <p>Richard B. Anaya</p>

                </Col>
                <Col lg={6} >
                    <div className='about-img about-img1'></div>
                </Col>
            </Row>
            <Row>
                
                <Col lg={6} >
                    <div className='about-img about-img2 '></div>
                </Col>
                <Col lg={6}>
                    <div className='about-txt1 txt-orange'>Welcomme <span className='txt-black'>Petdy</span></div>
                    
                    <p className='about-txt2'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia day deserunt mollit anim id est laborum.
                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium an doloremque laudantium, totam rem an aperiam, eaque ipsa quae ab illo inventore</p>

                     <div>Our Mission</div>

                    <p className='about-txt2'> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia day deserunt mollit anim id est laborum. Sed ut perspiciatis unde 
                    omnis iste natus error sit voluptatem accusantium an doloremque laudantium, totam rem an aperiam, eaque ipsa quae ab illo inventore</p>

                    <div>Our Mission</div>

                    <p className='about-txt2'>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia day deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium an doloremque laudantium.
                    </p>
                </Col>
            </Row>
        </Container>
        <Container>
        <div className='about-txt1 txt-orange'>OUR <span className='txt-black'> TEAM</span></div>
            <Row>
                <Col>
                    <img src={team1} alt='team1'></img>
                    <p className='about-txt3'>Teri Baker</p>
                    <p className='card-txt2'>Grooming | EXP 1+ Years</p>
                </Col>
                <Col>
                   <img src={team2} alt='team2'></img>
                   <p className='about-txt3'> Guy salazar</p>
                   <p className='card-txt2'>Borading | EXP 2+ Years</p>
                </Col>
                <Col>
                    <img src={team3} alt='team3'></img>
                    <p className='about-txt3'>Agnes Powers</p>
                    <p className='card-txt2'>Grooming | EXP 1+ Years</p>
                </Col>
                <Col>
                    <img src={team4} alt='team4'></img>
                    <p className='about-txt3'>DIxie Kelley</p>
                    <p className='card-txt2'> Pet Training | EXP 1+ Years</p>
                </Col>
                <Col>
                    <img src={team5} alt='team5'></img>
                    <p className='about-txt3'>Melvin Saunder</p>
                    <p className='card-txt2'>Grooming | EXP 1+ Years</p>
                </Col>
            </Row>
            <div className='about-footerline'></div>
        </Container>
        <Section8/>
    </div>
  )
}

export default About