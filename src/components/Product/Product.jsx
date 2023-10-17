// @flow
/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line import/no-extraneous-dependencies

const Product = ({ products }) => {
  return (
    <Container className='container w-75 pb-5'>
      {/* ------------------------------------------------------------------------------------------------HOME */}
      {/* --------------------------------------------------Instead of mapping from product list, map from api */}
      {products.map(({ id, name, img, brand, color, passengers, price }) => {
        return (
          <Link
            aria-label={name}
            to={`/CarSearch/Products/${id}`}
            key={id}
          >
            <Col key={id}>
              <Row className='pb-5'>
                <Card className='card'>
                  <Row>
                    <Card.Img
                      // eslint-disable-next-line global-require
                      src={img}
                      alt={name}
                      className='card-img'
                      width='inherit'
                      height='inherit'
                    />
                    <Col
                      lg='9'
                      className='py-4'
                    >
                      <Card.Body className='text-center text-lg-start'>
                        <Col>
                          <Card.Title className='fw-semibold'>
                            {brand}
                          </Card.Title>
                          <div className='d-md-flex gap-3'>
                            <div>
                              <i className='fa-solid fa-star' />
                              <i className='fa-solid fa-star' />
                              <i className='fa-solid fa-star' />
                              <i className='fa-solid fa-star' />
                            </div>
                            <div>
                              <p className='rating'>3 Reviews</p>
                            </div>
                          </div>
                          <Card.Text>
                            Lorem ipsum, dolor sit amet consectetur.
                          </Card.Text>

                          <p>
                            <strong>Color:</strong>
                            {color}
                          </p>
                          <div className='d-flex align-items-center gap-lg-4 flex-column flex-lg-row'>
                            <div className='d-flex gap-2'>
                              <i className='fa-solid fa-car-side' />
                              <p className='passengers'>
                                {passengers} {}
                                Passengers
                              </p>
                            </div>
                            <div className='d-flex gap-2'>
                              <i className='fa-solid fa-gas-pump' />
                              <p className='gas'> Gas</p>
                            </div>
                            <div className='d-flex gap-2'>
                              <i className='fa-solid fa-door-closed' />
                              <p className='doors'> doors</p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          lg='3'
                          className='d-flex flex-column justify-content-between pt-5 pt-lg-0'
                        >
                          <div>
                            <p className='d-flex price m-0 align-items-center fw-medium justify-content-center justify-content-lg-start'>
                              <strong>${price}</strong>
                              <span className='d-inline-block ml-3'>
                                /total
                              </span>
                            </p>
                            <p className=''>${(price / 2).toFixed(0)} /day</p>
                          </div>

                          <button
                            type='submit'
                            className='btn btn-primary py-2 px-4 text-white fs-5 fw-medium rounded-1 '
                          >
                            Book Now
                          </button>
                        </Col>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Row>
            </Col>
          </Link>
        );
      })}
    </Container>
  );
};

// propTypes = {
//   products: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     brand: PropTypes.string,
//     passengers: PropTypes.string,
//     color: PropTypes.string,
//     img: PropTypes.string,
//     singleImg: PropTypes.string,
//     rating: PropTypes.number,
//     price: PropTypes.number,
//   }),
// };

// defaultProps = {
//   products: null,
// };

export default Product;
