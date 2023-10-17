import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import siteImages from '../data/siteImages';
import pageList from '../data/pageList';
import PageHeaders from '../Global/PageHeaders';
import ContactForm from '../Global/Forms/ContactForm';
import Navigation from '../Global/Navigation/Navigation';
import Footer from '../Global/Footer';

const Contact = () => {
  return (
    <section className='contact'>
      <Navigation />
      <PageHeaders
        src={siteImages[1].img}
        name={pageList[1].name}
      />
      <section className='bg-white text-black py-4'>
        <Container className='container py-5'>
          <Row className='gap-4 '>
            <Col
              md='12'
              lg='5'
              className='contact_message '
            >
              <ContactForm />
              {/* --------------------------------------------------------------------------------------------Contact form Ends--- */}
            </Col>
            <Col
              lg='6'
              md='12'
              className='contact_info pt-sm-4 pt-lg-0 pb-5'
            >
              <h4>Contact Info</h4>
              <Row>
                <Col className='d-flex mt-4 gap-3'>
                  <span>
                    <i className='fs-4 fa-solid fa-location-dot' />
                  </span>
                  <div>
                    <h5>Head Office</h5>
                    <p>125 Main St</p>
                  </div>
                </Col>
                <Col className='d-flex mt-4 gap-3'>
                  <span>
                    <i className='fs-4 fa-solid fa-envelope-open' />
                  </span>
                  <div>
                    <h5>Email</h5>
                    <p>rentnow@main.com</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className='d-flex mt-4 gap-3 mt-4 '>
                  <span>
                    <i className='fs-4 fa-solid fa-square-phone' />
                  </span>
                  <div>
                    <h5>Phone</h5>
                    <p>(901) 111-1111</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
