import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import products from './productList';

const Product = () => {
  return (
    <Row className='row gap-4 product pb-5 mb-5'>
      {products.map(({ rating, id, img, name, price }) => {
        return (
          <Col
            lg='3'
            md='4'
            className='card border-none pb-2 d-flex flex-fill'
            key={id}
          >
            <Link
              // -----------------------------------------------------------------------------------Go to car details page--
              aria-label={name}
              to={`/CarSearch/Products/${id}`}
              key={id}
              className='text-decoration-none'
            >
              <div className='d-flex justify-content-end decoration-none'>
                <div className='fw-semibold gap-2 d-flex align-items-center text-white bg-secondary py-1 px-3 rounded-1 mt-3 justify-self-end'>
                  <i className='fs-6 fa-solid fa-star' />
                  {rating}
                </div>
              </div>
              <Card.Img
                src={img}
                alt='Picture of a Black Sedan'
                width='auto'
                height='auto'
              />
              <Card.Body className='text-primary'>
                <h4 className='card-title text-black fs-3 fw-semibold'>
                  {name}
                </h4>
                <Card.Text className='text-black'>
                  Mauris semper nisl a massa convallis
                </Card.Text>
                <div className='d-flex text-black justify-content-between'>
                  <ul className='px-0 ml-3'>
                    <li>Aliqua venandi mutat</li>
                    <li>Aliqua venandi mutat</li>
                    <li>Aliqua venandi mutat</li>
                  </ul>
                  <p className='align-self-end justify-self-end px-3 py-2 rounded-1 bg-primary text-white'>
                    From <br />
                    <strong className='fs-3'>${price}</strong>/day
                  </p>
                </div>
              </Card.Body>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};

export default Product;
