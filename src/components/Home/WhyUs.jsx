import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const WhyUs = () => {
  return (
    <section className='bg-white py-5 text-black people-like-us w-75 m-0 m-auto'>
      <Container>
        <h2 className='text-center mt-5 fs-2 fw-semibold'>
          Why People Like Us?
        </h2>
        <p className='text-center mb-5'>
          Inbecilloque elegans errorem concedo etsi electram.
        </p>

        <Row className='gap-5 justify-content-center'>
          <Row className='gap-4 justify-content-between'>
            <Col
              md='5'
              sm='12'
              className='col-lg'
            >
              <h5 className='text-black'>Best Price Guarantee</h5>
              <p className='fs-6'>
                Duis placerat tempus odio vel pretium. Vestibulum mattis viverra
                justo vel consequat.
              </p>
            </Col>

            <Col
              md='5'
              sm='12'
              className='col-lg'
            >
              <h5 className='text-black'>Personal Driver</h5>

              <p className='fs-6'>
                Duis placerat tempus odio vel pretium. Vestibulum mattis viverra
                justo vel consequat.
              </p>
            </Col>

            <Col
              md='5'
              sm='12'
              className='col-lg'
            >
              <h5 className='text-black'>No Cancellation Fees</h5>

              <p className='fs-6'>
                Duis placerat tempus odio vel pretium. Vestibulum mattis viverra
                justo vel consequat.
              </p>
            </Col>

            <Col
              md='5'
              sm='12'
              className='col-lg'
            >
              <h5 className='text-black'>Unlimited Miles</h5>

              <p className='fs-6'>
                Duis placerat tempus odio vel pretium. Vestibulum mattis viverra
                justo vel consequat.
              </p>
            </Col>
          </Row>
          <Row className='gap-4 justify-content-between'>
            <Col
              md='5'
              sm='12'
              className='col-lg'
            >
              <h5 className='text-black'>Best Quality Cars</h5>

              <p className='fs-6'>
                Duis placerat tempus odio vel pretium. Vestibulum mattis viverra
                justo vel consequat.
              </p>
            </Col>

            <Col
              md='5'
              sm='12'
              className='col-lg'
            >
              <h5 className='text-black'>City to City</h5>

              <p className='fs-6'>
                Duis placerat tempus odio vel pretium. Vestibulum mattis viverra
                justo vel consequat.
              </p>
            </Col>

            <Col
              md='5'
              sm='12'
              className='col-lg'
            >
              <h5 className='text-black'>Reservation Anytime</h5>

              <p className='fs-6'>
                Duis placerat tempus odio vel pretium. Vestibulum mattis viverra
                justo vel consequat.
              </p>
            </Col>

            <Col
              md='5'
              sm='12'
              className='col-lg'
            >
              <h5 className='text-black'>24/7 Customer Support</h5>

              <p className='fs-6'>
                Duis placerat tempus odio vel pretium. Vestibulum mattis viverra
                justo vel consequat.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;