import React from "react";
import Data from "./Data";
import Nav from 'react-bootstrap/Nav';
const Buttons = ({ filterItem, setItem, newArr }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Nav className="justify-content-right pb-4 m-3" variant="pills" defaultActiveKey="link">
          <Nav.Item >
            <Nav.Link className='nav-style' eventKey="link" onClick={() => setItem(Data)}>All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='nav-style' eventKey="link-1" onClick={() => filterItem("dog")}
            >Puppies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='nav-style' eventKey="link-2" onClick={() => filterItem("cat")}
            >Kittens</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='nav-style' eventKey="link-3" onClick={() => filterItem("pet-food")}
            >Pet-food</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='nav-style' eventKey="link-4" onClick={() => filterItem("products")}
            >Products</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default Buttons;