import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../logo&icons/logo.png'
import '../App.css';
import { RiShuffleFill } from 'react-icons/ri'
import banner from '../images/banner-7.jpg'
import { CgSearch } from 'react-icons/cg'
import {FiHeart} from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UncontrolledExample from './tabs'

function Section1() {

const cart = useSelector((state) => state.cart)
const wish = useSelector((state) => state.wish)

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}

const getwish = () => {
  let total = 0
  wish.forEach(item => {
    total += item.quantity
  })
  return total
}

  return (
    <div>
      <Row>    
    <Navbar collapseOnSelect expand="lg" variant="dark" className='top navbar'>
      <Container fluid>
        <Col lg={2}>
        <Navbar.Brand href="#home">
          <div className='pink'>
          <img src={logo} alt='logo'></img>
          </div>
        </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Col lg={7}>
          <Nav>
            <Nav.Link id='hom'><Link to='/'  className='nav-style'>Home</Link></Nav.Link>
            <Nav.Link  className='mx-2 nav-style'>

              {/* --------------------------------------MEGA DROPDOWN------------------------------------- */}

             <NavDropdown  title='Shop' className='drop'>
                <ul className='floating mt-3 '>
                  <h5>SHOP LAYOUT</h5> 
                  <Link to='/Shop'><li>Shop Left Sidebar</li></Link>
                  <li>Shop Right Sidebar</li>
                  <li>Shop Full Width</li>
                  <li>Shop 100 Full Width</li>
                  <li>Shop Both Sidebars</li>
                </ul>
                <ul className='floating mt-3'>
                  <h5>SHOP PAGES</h5>
                    <li>My Account</li>
                    <li>My Wishlist</li>
                    <li>My Cart</li>
                    <li>My Checkout</li>
                </ul>
                <ul className='floating mt-3'>
                  <h5>PRODUCT TYPES</h5>
                    <li>Simple Product</li>
                    <li>Variable Product</li>
                    <li>Affiliate Product</li>
                    <li>Group Product</li>
                </ul>
                <NavDropdown.Item href="#action/3.4">
                <img src={banner} alt='banner' style={{width:'100%'}}></img>
              </NavDropdown.Item>
              </NavDropdown>
              
            </Nav.Link>
            <Nav.Link href='#features' className='nav-style'>pages</Nav.Link>
            <Link to='/Service'><Nav.Link href="#features" className='nav-style'>Service</Nav.Link></Link>
            <Link to='/Blogs'><Nav.Link href="#features"className='nav-style'>Blogs</Nav.Link></Link>
            <Link to='/About'><Nav.Link href="#features" className='nav-style'>About Us</Nav.Link></Link>
            <Nav.Link href="#features" className='nav-style' >Contacts</Nav.Link>
          </Nav>
         
          </Col>
          
          <Col lg={2} className='blue'>
          <Nav>
          <Nav.Link id='over' className='nav-style' href="#deets"><CgSearch style={{fontSize:30}}/></Nav.Link>
          <Nav.Link id='over' className='nav-style' href="#deets"><RiShuffleFill style={{fontSize:30}} /></Nav.Link>
          {/* <Nav.Link id='over'  className='nav-style'href="#deets"><FiHeart style={{fontSize:30}}/></Nav.Link> */}
          <Nav.Link id='over' className='nav-style' href="#deets"><Link to='/Wish'><FiHeart style={{fontSize:30 ,color:'black'}}/>
          <div className='counter'><sup className='px-1' style={{backgroundColor:'#f56036',borderRadius:'50%',color:'white'}}>{getwish() || 0}</sup></div></Link>
          </Nav.Link>
          <Nav.Link id='over' className='nav-style' href="#deets"><Link to='/Cart'><HiOutlineShoppingBag style={{fontSize:30 ,color:'black'}}/>
          <div className='counter'><sup className='px-1' style={{backgroundColor:'#f56036',borderRadius:'50%',color:'white'}}>{getTotalQuantity() || 0}</sup></div></Link>
          </Nav.Link>
          {/* <Nav.Link>
            <CgSearch style={{fontSize:30}}/>
            <RiShuffleFill style={{fontSize:30}} />
            <FiHeart style={{fontSize:30}}/>
            <Link to='/Cart'><HiOutlineShoppingBag className='cart-bag' style={{fontSize:30 ,color:'black'}}/>
            <div className='counter'><sup className='px-1' style={{backgroundColor:'#f56036',borderRadius:'50%',color:'white'}}>{getTotalQuantity() || 0}</sup></div></Link>
          </Nav.Link> */}
          
             <UncontrolledExample/>
          
          </Nav>
          </Col>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      
   
    </Row>
    </div>

  )
}

export default Section1;