import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchInput = () => {
  const [validated, setValidated] =
    useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Row className="bg-primary py-5 text-center">
      <div className="px-4 px-md-5 py-5">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <h2 className="mb-5 fs-2 fw-bold">
            Search & Hire Cars
            <span>Search & Hire Cars</span>
          </h2>

          <Row className="car-search-form row gap-3 gap-lg-0">
            <Col className="pe-lg-0">
              <InputGroup
                hasValidation
                className=" col-sm"
              >
                <InputGroup.Text>
                  <i className="fs-4 h-100 fa-solid fa-location-dot" />
                </InputGroup.Text>
                <Form.Label htmlFor="pickup-location" />
                <Form.Control
                  required
                  type="text"
                  id="pickup-location"
                  placeholder="Enter location..."
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a location.
                </Form.Control.Feedback>
                <Form.Control.Feedback>
                  Looks good!
                </Form.Control.Feedback>
              </InputGroup>
            </Col>

            <Col className="ps-lg-0">
              <InputGroup hasValidation>
                <InputGroup.Text>
                  <i className="fs-4 h-100 fa-solid fa-location-dot" />
                </InputGroup.Text>
                <Form.Label htmlFor="drop-location" />
                <Form.Control
                  required
                  type="text"
                  id="drop-location"
                  placeholder="Drop location..."
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a drop location.
                </Form.Control.Feedback>
                <Form.Control.Feedback>
                  Looks good!
                </Form.Control.Feedback>
              </InputGroup>
            </Col>

            <InputGroup
              hasValidation
              className=" car-search-form_date col-md-12 col-lg"
            >
              <Form.Label htmlFor="pickup-date" />
              <Form.Control
                required
                id="pickup-date"
                type="date"
                placeholder="Pick a date"
              />
              <Form.Label htmlFor="pickup-time" />
              <Form.Control
                required
                id="pickup-time"
                type="time"
                defaultValue="12:00"
              />
              <Form.Control.Feedback type="invalid">
                Pick a pickup date & Time.
              </Form.Control.Feedback>
              <Form.Control.Feedback>
                Looks good!
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup
              hasValidation
              className="col-md-12 col-lg"
            >
              <Form.Label htmlFor="dropoff-date" />
              <Form.Control
                required
                id="dropoff-date"
                type="date"
              />
              <Form.Label htmlFor="dropoff-time" />
              <Form.Control
                required
                id="dropoff-time"
                type="time"
                defaultValue="12:00"
              />
              <Form.Control.Feedback type="invalid">
                Pick a drop-off date & Time.
              </Form.Control.Feedback>
              <Form.Control.Feedback>
                Looks good!
              </Form.Control.Feedback>
            </InputGroup>
          </Row>

          <Link
            type="submit"
            href="/CarSearch"
            className="btn btn-secondary px-5 py-3 mt-4 fw-semibold fs-4 text-light"
          >
            <span className="me-1">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            Find Now
          </Link>
        </Form>
      </div>
    </Row>
  );
};

export default SearchInput;
