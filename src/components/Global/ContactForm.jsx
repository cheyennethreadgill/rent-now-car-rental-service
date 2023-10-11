import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function ContactForm({}) {
  return (
    <Form>
      <h4 className='mb-4 '>Send Message</h4>
      <div className='row'>
        <div className='col '>
          <InputGroup className='input-group d-flex '>
            <InputGroup.Text>
              <i class='fa-regular fa-user align-self-center py-3'></i>
            </InputGroup.Text>
            <Form.Control
              type='text'
              className='rounded-1 form-control-light'
              placeholder='Enter username...'
            />
          </InputGroup>
        </div>
        <div className='col'>
          <InputGroup className=' d-flex'>
            <InputGroup.Text>
              <i class='fa-regular fa-envelope align-self-center py-3'></i>
            </InputGroup.Text>
            <Form.Control
              type='text'
              className='rounded-1 form-control-light'
              placeholder='Enter email...'
            />
          </InputGroup>
        </div>
      </div>
      <div className='row col mt-3'>
        <div className='col'>
          <InputGroup className='d-flex'>
            <InputGroup.Text>
              <i class='fa-regular fa-message align-self-start pb-5'></i>
            </InputGroup.Text>
            <Form.Control
              as='textarea'
              type='text'
              className='form-control-light'
              placeholder='Your Message'
            />
          </InputGroup>
        </div>
      </div>
      <div className='col d-flex justify-content-end'>
        <Button
          type='submit'
          className='btn btn-primary text-white mt-4 px-5 py-2 fs-5 rounded-1'
        >
          Send Message
        </Button>
      </div>
    </Form>
  );
}
