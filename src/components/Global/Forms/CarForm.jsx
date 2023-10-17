/* eslint-disable react/prop-types */
import React from 'react';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import SocialIcons from '../SocialIcons';

const CarForm = ({ validated, handleSubmit }) => {
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className='check col-lg-4'
    >
      <div className='card pb-4 gap-4 '>
        <h5 className='card-title w-100 bg-primary text-white py-4 text-center'>
          Check Availability
        </h5>
        <InputGroup className=' px-4 '>
          <InputGroup.Text className='input-group-text-light'>
            <i className='fa-solid fa-location-dot ' />
          </InputGroup.Text>
          <Form.Label htmlFor='pickup' />
          <Form.Control
            id='pickup'
            required
            type='text'
            className='form-control-light 
                    '
            placeholder='Pickup Location'
          />
          <Form.Control.Feedback type='invalid'>
            Please enter a pickup location.
          </Form.Control.Feedback>
        </InputGroup>
        {/* input end */}
        <InputGroup className='px-4'>
          <InputGroup.Text className='input-group-text-light'>
            <i className='fa-solid fa-location-dot ' />
          </InputGroup.Text>
          <Form.Label htmlFor='drop-off' />
          <Form.Control
            type='text'
            className='form-control-light'
            id='drop-off'
            required
            placeholder='Drop Location'
          />
          <Form.Control.Feedback type='invalid'>
            Please enter a drop location.
          </Form.Control.Feedback>
        </InputGroup>
        {/* input end */}

        <InputGroup className='px-4'>
          <Form.Label htmlFor='pick-up' />
          <Form.Control
            id='pick-up'
            type='date'
            className='form-control-light'
            required
            placeholder='Pickup Date'
          />

          <Form.Control.Feedback type='invalid'>
            Please enter a pickup date.
          </Form.Control.Feedback>

          <Form.Label htmlFor='pickup-time' />
          <Form.Control
            id='pickup-time'
            type='time'
            defaultValue='12:00'
            className='form-control-light'
            required
          />

          <Form.Control.Feedback type='invalid'>
            Please enter a pickup time.
          </Form.Control.Feedback>
        </InputGroup>

        {/* input end */}

        <InputGroup className='px-4'>
          <Form.Label htmlFor='date' />
          <Form.Control
            id='date'
            type='date'
            className='form-control-light'
            required
            placeholder='Drop date'
          />

          <Form.Control.Feedback type='invalid'>
            Please enter a dropoff time.
          </Form.Control.Feedback>

          <Form.Label htmlFor='drop-off-time' />
          <Form.Control
            id='drop-off-time'
            type='time'
            defaultValue='12:00'
            className='form-control-light'
            required
          />

          <Form.Control.Feedback type='invalid'>
            Please enter a location.
          </Form.Control.Feedback>
        </InputGroup>

        <button
          type='submit'
          className=' btn btn-primary py-3 text-white mx-4'
        >
          Check Now
        </button>
      </div>
      {/* input end */}

      <div className='share d-flex gap-2 align-items-center'>
        <p>Share this car: </p>
        <div className=''>
          <SocialIcons />
        </div>
      </div>
    </Form>
  );
};
export default CarForm;
