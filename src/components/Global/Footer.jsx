import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import QuickLinks from './QuickLinks';
import Logo from '../../images/logo.svg';
import Socials from './SocialIcons';

const Footer = () => {
  return (
    <section className="footer pt-5">
      <Container className="w-75">
        <Row className="border-bottom py-5 d-flex justify-content-between gap-5">
          <Col
            lg="4"
            md="3"
            className="footer_about d-flex flex-column gap-2"
          >
            <h4 className="pb-4 fs-3 fw-semibold">
              About Us
            </h4>
            <Link to="/">
              <Image
                src={Logo}
                alt="Rent now logo"
                width="170"
                height="100%"
              />
            </Link>

            <p className="mt-3">
              Sed sit amet ligula ac nulla finibus
              euismod nec nec diam. Lorem ipsum
              dolor sit amet, consectetur
              adipiscing elit. Praesent semper,
              risus eget ornare maximus, ipsum
              ante semper.
            </p>

            <Socials />
          </Col>
          <QuickLinks />
          <Col
            lg="3"
            md="4"
            className="footer_contact fs-6"
          >
            <h4 className="pb-4 fs-3 fw-semibold">
              Contact Us
            </h4>
            <Row>
              <Col
                lg="1"
                className="d-flex flex-column justify-content-center justify-content-lg-between align-items-center gap-4 gap-lg-0"
              >
                <i className="  fs-3 fs-lg-5 fa-solid fa-envelope-open" />
                <i className="fs-3 fs-lg-5 fa-solid fa-square-phone" />
                <i className="fs-3 fs-lg-5 fa-solid fa-location-dot" />
              </Col>
              <Col
                lg="10"
                className="d-flex flex-column gap-3"
              >
                <a
                  aria-label="support@exapmple.com"
                  href="mailto:support@exapmple.com"
                >
                  support@exapmple.com <br />
                </a>
                <a
                  aria-label="(909) 555-5555"
                  href="tel:9085555555"
                >
                  (909) 555-5555 <br />
                </a>
                <p>
                  1425 Pointe Lane, Miami Florida
                  – 33169, USA
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* ----------------------------------------------------------------------------------------------------Copyright -*/}
        <Row className="copyright py-4 d-flex align-items-center fs-6">
          <Col lg="8">
            <p>
              Copyright © RentNow 2023. All
              rights reserved.
            </p>
          </Col>
          <Col>
            <p>We Accept</p>
            <Image
              width="200px"
              height="100%"
              src="https://demo.kitthemes.com/html/rentnow/assets/images/payments@2x.png"
              alt="Payment Methods"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
