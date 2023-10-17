import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ContactForm = () => {
  return (
    <Form>
      <h4 className='mb-4 '>Send Message</h4>
      <Row className='row'>
        <Col
          sm='12'
          lg='6'
        >
          <InputGroup className='input-group d-flex pb-3 pb-lg-0'>
            <InputGroup.Text>
              <i className='fa-regular fa-user align-self-center py-3' />
            </InputGroup.Text>
            <Form.Label htmlFor='username' />
            <Form.Control
              autoComplete='true'
              id='username'
              type='text'
              className='rounded-1 form-control-light'
              placeholder='Enter username...'
            />
          </InputGroup>
        </Col>
        <Col
          sm='12'
          lg='6'
        >
          <InputGroup className='d-flex'>
            <InputGroup.Text>
              <i className='fa-regular fa-envelope align-self-center py-3' />
            </InputGroup.Text>
            <Form.Label htmlFor='email' />
            <Form.Control
              autoComplete='true'
              id='email'
              type='text'
              className='rounded-1 form-control-light'
              placeholder='Enter email...'
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className='col mt-3'>
        <Col>
          <InputGroup className='d-flex'>
            <InputGroup.Text>
              <i className='fa-regular fa-message align-self-start pb-5' />
            </InputGroup.Text>
            <Form.Label htmlFor='message' />
            <Form.Control
              autoComplete='true'
              id='message'
              as='textarea'
              type='text'
              className='form-control-light'
              placeholder='Your Message'
            />
          </InputGroup>
        </Col>
      </Row>
      <Col className='d-flex justify-content-end'>
        <Button
          type='submit'
          className='btn btn-primary text-white mt-4 px-5 py-2 fs-5 rounded-1'
        >
          Send Message
        </Button>
      </Col>
    </Form>
  );
};

export default ContactForm;
