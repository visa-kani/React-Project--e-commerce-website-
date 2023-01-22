import { useDispatch } from 'react-redux';
import {addToCart} from "../Redux/CartSlice";
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { RiShuffleFill } from 'react-icons/ri'
import { CgSearch } from 'react-icons/cg'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineStar} from 'react-icons/ai'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { addToWish } from '../Redux/CartSlice';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';



function Item({id,image, title, price}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const dispatch = useDispatch()
  return (
    <div>
      {/* <div className='showpets text-center'>
          <Row className="align-items-center">
          <CardGroup>
            <Col className='equal-spacing'> */}
        <Card>
            <Card.Img  variant="top" src={image} />
            <div className="threediv row">
             <OverlayTrigger overlay={<Tooltip id="tooltip">wishlist</Tooltip>}>
              <span className="d-inline-block firstdiv col" onClick={()=>dispatch(addToWish({id,image, title, price}))} >
                <FiHeart  className='hovering' style={{ pointerEvents: 'none' }}/>
              </span>
              </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip">Compare</Tooltip>}>
              <span className="d-inline-block seconddiv col">
                <RiShuffleFill className='hovering' style={{ pointerEvents: 'none' }}/>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip">search</Tooltip>}>
              <span className="d-inline-block finaldiv col">
                <CgSearch className='hovering' style={{ pointerEvents: 'none' }}/>
              </span>
            </OverlayTrigger>
          </div>
            <Card.Body>
              <Card.Text><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></Card.Text>
              <Card.Title className='card-txt1 holds auto0'>{title}</Card.Title>
              <Card.Text className='card-txt2'>{price}</Card.Text>
              <Button className='btn showpets-btn' variant="primary" onClick={handleShow}
             >Add to Cart</Button>
            </Card.Body>
            </Card>


         

       

 

 
    
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title  style={{height:"120px"}} className='cart-banner'>
          <div className="banner-txt1 txt-orange f-s" style={{textAlign:"center"}}>Added To <span className="banner-txt1 txt-black f-s"> Cart</span> </div>          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='card-txt2'> Click to visit the cart page <u><Link to='/Cart' className='txt-black'> Cart Details</Link></u></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}  onFocus={()=>dispatch(addToCart({id,image, title, price}))}>
            Add to Cart
          </Button>

          {/* <Button class="btn btn-dark " onClick={handleClose}   >
            Add to cart
          </Button> */}
        </Modal.Footer>
      </Modal>



            {/* </Col>
            </CardGroup>
          </Row> */}
          {/* </div> */}
    </div>
  )
}

export default Item