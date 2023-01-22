import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
// import { useForm } from "react-hook-form";

function SignUp() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    
      setValidated(true);
    };

  return (
    <div className='Signin-layout'>
        <div className='Sign-img'>
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
      
      <Form.Group as={Col} md="4"controlId="validationCustom01">
        <Form.Label className='form-txt1'>First name</Form.Label>
        <Form.Control
          required
          type="text"
         placeholder='firstname'
        />
        <Form.Control.Feedback type="invalid">Required!</Form.Control.Feedback>
      </Form.Group>

      
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label className='form-txt1'>Last name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Lastname"
        />
        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        <Form.Control.Feedback type="invalid">
          Required!
        </Form.Control.Feedback>
      </Form.Group>
    </Row>


    <Row>
      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label className='form-txt1'>Email ID.</Form.Label>
        <Form.Control type="email" placeholder="Email" required />                  
        <Form.Control.Feedback type="invalid">
          Invalid mail id.
        </Form.Control.Feedback>
      </Form.Group> 
      </Row>

      <Row>
      <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Label className='form-txt1'>State</Form.Label>
        <Form.Control type="text" placeholder="State" required />
        <Form.Control.Feedback type="invalid">
        Provide valid state.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>
     

      <Row>
      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label className='form-txt1'>Password</Form.Label>
        <Form.Control type="password" placeholder="password" required />
        <Form.Control.Feedback type="invalid">
          Provide valid password.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>

    <Form.Group className="mb-3">
      <Form.Check
        required
        label="Agree to terms and conditions"
        feedbackType="invalid"
      />
    </Form.Group>
    <Button type="submit"  >Submit form</Button>
  </Form>
        </div>
    </div>
  )
}

export default SignUp