/* eslint-disable react/prop-types */
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container } from 'react-bootstrap';

const Filter = ({ filterBrand, filterPassengers, filterColor }) => {
  return (
    <section className='car-filter bg-white py-5 text-black'>
      <Container
        fluid
        className='w-75 pt-4'
      >
        <Row className='gap-4 car-filter_cards'>
          <Col
            sm='12'
            lg='3'
            className='d-flex align-items-center gap-2 p-0'
          >
            <p className='m-0'>Car Brand:</p>
            <Form.Label htmlFor='car-select' />
            <select
              onChange={(e) => {
                return filterBrand(e.target.value);
              }}
              id='car-select'
              className='pr-4 ps-2 pe-4 py-1 car-select'
            >
              <option value='Any'>Any</option>
              <option value='Nissan'>Nissan</option>
              <option value='Lexus'>Lexus</option>
              <option value='BMW'>BMW</option>
              <option value='Tesla'>Tesla</option>
            </select>
          </Col>

          <Col
            sm='12'
            lg='5'
            className='d-flex gap-2 p-0 align-items-center'
          >
            <p className='m-0'>Passengers:</p>
            <Form.Label htmlFor='passenger-select' />
            <select
              onChange={(e) => {
                return filterPassengers(e.target.value);
              }}
              name='passenger-filter '
              id='passenger-select'
              className='pr-4 ps-2 pe-4 py-1 passenger-select'
            >
              <option value='All'>All</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </Col>

          <Col
            sm='12'
            lg='3'
            className='d-flex align-items-center gap-2 p-0'
          >
            <p className='m-0'>Color</p>

            <div className='car-filter_color-input d-flex justify-content-between gap-2 align-items-center'>
              <div className='d-flex car-filter_color-input_blue'>
                <Form.Label for='blue' />
                <Form.Control
                  id='blue'
                  type='checkbox'
                  value='blue'
                  onClick={(e) => {
                    return filterColor(e.target.value);
                  }}
                />
              </div>

              <div className='d-flex car-filter_color-input_white'>
                <Form.Label for='white' />
                <Form.Control
                  id='white'
                  type='checkbox'
                  value='white'
                  onClick={(e) => {
                    return filterColor(e.target.value);
                  }}
                />
              </div>

              <div className='d-flex car-filter_color-input_gray'>
                <Form.Label for='gray' />
                <Form.Control
                  id='gray'
                  type='checkbox'
                  value='gray'
                  onClick={(e) => {
                    return filterColor(e.target.value);
                  }}
                />
              </div>

              <div className='d-flex  car-filter_color-input_black '>
                <Form.Label for='black' />
                <Form.Control
                  id='black'
                  type='checkbox'
                  value='black'
                  onClick={(e) => {
                    return filterColor(e.target.value);
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Filter;
