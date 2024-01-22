import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Image, Row, Col } from 'react-bootstrap';
import CompanyInfo from '../companyInfo';
import Socials from '../SocialIcons';
import logo from '../../../images/logo.svg';

const Navigation = () => {
  return (
    <section className="z-2 nav-secondary">
      <Row className="nav-info py-xs-2 py-sm-2 py-md-2 container m-0 m-auto justify-content-center align-items-center">
        <Col className="d-none d-sm-block">
          <Socials />
        </Col>
        <Col
          sm="8"
          className="nav-info_contact justify-content-center"
        >
          <CompanyInfo />
        </Col>
      </Row>

      <div className="border-bottom" />

      {/* -----------------------------------------------------------------------------Main Navigation----- */}

      <section className="container">
        <Navbar
          expand="xl"
          data-bs-theme="light"
          className="justify-content-between"
        >
          <Navbar.Brand
            href="#"
            className="text-decoration-none"
          >
            <Image
              src={logo}
              alt="Rent Now Logo"
              width="100%"
              height="100%"
            />
          </Navbar.Brand>
          {/* -----------------------------------------------------------------------------BRAND LOGO- */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* ---------------------------------------------------------------  --------Navbar collapse- */}
          <Navbar.Collapse
            className=" justify-content-end w-50"
            id="navbarNav"
          >
            <Nav className="justify-content-end">
              <Nav.Item>
                <Link
                  to="/"
                  className=" mx-sm-3 m-md-0 text-decoration-none ps-4 pb-3"
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/CarSearch"
                  className=" mx-sm-3 m-md-0 text-decoration-none ps-4 py-3 py-lg-2"
                >
                  Search Cars
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/Contact"
                  className=" mx-sm-3 m-md-0 text-decoration-none ps-4"
                >
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </section>
  );
};

export default Navigation;
