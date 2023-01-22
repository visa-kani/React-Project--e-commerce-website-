import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo&icons/logo.png'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import banner from '../images/banner-7.jpg'
import { CgSearch } from 'react-icons/cg'
import {FiHeart} from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { RiShuffleFill } from 'react-icons/ri'
import UncontrolledExample from './tabs'
import { useSelector } from 'react-redux';


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
      <Container fluid>
        <Row>
        <Navbar collapseOnSelect expand="lg" variant="dark" className='top navbar' >

        <Col lg={2} >
        <Navbar.Brand>
          <div className='pink'>
          <img src={logo} alt='logo'></img>
          </div>
        </Navbar.Brand>
        </Col>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

        <Col lg={9}   >
        <Nav>
            <Nav.Link ><Link to='/'   className='nav-style home-left'>Home</Link></Nav.Link>
            <Nav.Link  className='mx-2 nav-style'>

              {/* --------------------------------------MEGA DROPDOWN------------------------------------- */}

             <NavDropdown  title='Shop' className='drop'>
                <ul className='floating mt-3'>
                  <h5>SHOP LAYOUT</h5> 
                  <Link to='/Shop'><li>Shop Left Sidebar</li></Link>
                  <Link to='/Shop'><li>Shop Right Sidebar</li></Link>
                  <Link to='/Shop'><li>Shop Full Width</li></Link>
                  <Link to='/Shop'><li>Shop 100 Full Width</li></Link>
                  <Link to='/Shop'><li>Shop Both Sidebars</li></Link>
                </ul>
                <ul className='floating mt-3'>
                  <h5>SHOP PAGES</h5>
                    <li>My Account</li>
                    <Link to="/Wish"><li>My Wishlist</li></Link>
                    <Link to="/Cart"><li>My Cart</li></Link>
                    <li>My Checkout</li>
                </ul>
                <ul className='floating mt-3'>
                  <h5>PRODUCT TYPES</h5>
                    <li>Simple Product</li>
                    <li>Variable Product</li>
                    <li>Affiliate Product</li>
                    <li>Group Product</li>
                </ul>
                <NavDropdown.Item >
                <img src={banner} alt='banner' style={{width:'100%'}}></img>
              </NavDropdown.Item>
              </NavDropdown>
              
            </Nav.Link>
            <Nav.Link className='nav-style nav-extra'>Pages</Nav.Link>
            <Nav.Link ><Link to='/Service' className='nav-style nav-extra'>Service</Link></Nav.Link>
            <Nav.Link ><Link to='/Blogs' className='nav-style nav-extra'>Blogs</Link></Nav.Link>
            <Nav.Link ><Link to='/About' className='nav-style nav-extra'>About Us</Link></Nav.Link>
            <Nav.Link className='nav-style nav-extra' >Contacts</Nav.Link>
          </Nav>
        </Col>

        <Col lg={3}  className="icon-control" >
          <Nav>
            <Nav.Link  className='icon-style '><CgSearch style={{fontSize:30}}/></Nav.Link>

            <Nav.Link  className='icon-style' ><RiShuffleFill style={{fontSize:30}} /></Nav.Link>

            <Nav.Link className='icon-style'><Link to='/Wish'><FiHeart style={{fontSize:30 ,color:'black'}}/>

            <div className='counter'><sup className='px-1' style={{backgroundColor:'#f56036',borderRadius:'50%',color:'white'}}>{getwish() || 0}</sup></div></Link></Nav.Link>

            <Nav.Link className='icon-style' ><Link to='/Cart'><HiOutlineShoppingBag style={{fontSize:30 ,color:'black'}}/>
            <div className='counter'><sup className='px-1' style={{backgroundColor:'#f56036',borderRadius:'50%',color:'white'}}>{getTotalQuantity() || 0}</sup></div></Link>
            </Nav.Link>
          </Nav>
         
          
        </Col>
        </Navbar.Collapse>
        </Navbar>
        <div className='lets-play'>
        <div className='fraud'><UncontrolledExample/></div>
        </div>

       
       
        </Row>
      </Container>
    </div>
  )
}

export default Section1