import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

const SearchInput = () => {
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
    <section className='bg-primary py-5 text-center row '>
      <div className='px-4 px-md-5 py-5'>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <h2 className='mb-5 fs-2 fw-bold'>
            Search & Hire Cars <span>Search & Hire Cars</span>
          </h2>

          <div className='car-search-form row gap-3 gap-lg-0'>
            <InputGroup
              hasValidation
              className=' col-sm'
            >
              <InputGroup.Text>
                {' '}
                <i class='fs-4 h-100 fa-solid fa-location-dot'></i>
              </InputGroup.Text>
              <Form.Control
                required
                className=''
                type='text'
                placeholder='Enter location...'
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a location.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>

            <InputGroup
              hasValidation
              className=' col-sm'
            >
              <InputGroup.Text>
                {' '}
                <i class='fs-4 h-100 fa-solid fa-location-dot'></i>
              </InputGroup.Text>

              <Form.Control
                required
                className=''
                type='text'
                placeholder='Drop location...'
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a drop location.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>

            <InputGroup
              hasValidation
              className=' car-search-form_date col-md-12 col-lg'
            >
              <Form.Control
                required
                className=''
                type='date'
                placeholder='Pick a date'
              />

              <Form.Control
                required
                type='time'
                value='12:00'
              />
              <Form.Control.Feedback type='invalid'>
                Pick a pickup date & Time.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>

            <InputGroup
              hasValidation
              className=' col-md-12 col-lg'
            >
              <Form.Control
                required
                type='date'
                className=''
              />
              <Form.Control
                required
                type='time'
                className=''
                value='2:00'
              />
              <Form.Control.Feedback type='invalid'>
                Pick a drop-off date & Time.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </div>
          {/* Row End */}
          <Button
            to='/CarSearch'
            type='submit'
            className='btn btn-secondary px-5 py-3 mt-4 fw-semibold fs-4 text-light'
          >
            <span className='me-1'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </span>
            Find Now
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default SearchInput;
