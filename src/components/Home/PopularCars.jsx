import React from 'react';
import { Container } from 'react-bootstrap';
import PopularProducts from '../Product/PopularProducts';

const PopularCars = () => {
  return (
    <section className="text-black popular-cars p-4 bg-light">
      <Container>
        <h2 className="text-center mt-5 fw-bold">
          Popular Cars
          <span className="text-ofwhite">
            Popular Cars
          </span>
        </h2>
        <p className="text-center mb-5 position-relative z-3">
          Inbecilloque elegans errorem concedo
          etsi electram.
        </p>
        <PopularProducts />
      </Container>
    </section>
  );
};

export default PopularCars;
