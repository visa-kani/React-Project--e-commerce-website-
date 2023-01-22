import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'

function Section5() {
  return (
    <div>
        <Container>
            <Row class="banner-bottom">
                <Col  className='banner-bgi4'>
                    <div className='banner-layout-45'>
                        <div className='banner-txt1 txt-white'>Nest<span className="banner-txt1 txt-orange">For Cats</span></div>
                        <p class="banner-txt2">Various types of pens and <br></br>pens for your pet</p>
                        <div>
                            <Button className="btn btn-trans topspace floating">DISCOVER NOW</Button>
                        </div>
                    </div>
                </Col>
                <Col  className='banner-bgi5'>
                    <div className='banner-layout-45'>
                        <div className="banner-txt1 txt-orange">Pedty <span className="banner-txt1 txt-white">Food</span></div>
                        <p className="banner-txt2">Provide protein and calcium for <br></br>your pet</p>
                        <div>
                            <Button className="btn btn-trans topspace floating">DISCOVER NOW</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Section5