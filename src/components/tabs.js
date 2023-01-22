import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import {FaUserCircle} from 'react-icons/fa'
// import Col from 'react-bootstrap/esm/Col';
// import Row from 'react-bootstrap/esm/Row';
// import Nav from 'react-bootstrap/Nav'

function UncontrolledExample() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    
    <div>

      
      <div onClick={handleShow}><FaUserCircle style={{fontSize:30}}/></div>
            <Modal show={show} onHide={handleClose}>
     

      <Modal.Body>
      <Modal.Header closeButton>
        <Modal.Title>Registration </Modal.Title>
      </Modal.Header>

      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 "
      
    >
      <Tab eventKey="home" title="LogIn">
        <Login />
      </Tab>


      <Tab eventKey="profile" title="SignUp">
        <SignUp />
      </Tab>

    </Tabs>
        

      </Modal.Body>

      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  </div>
  );
}

export default UncontrolledExample;