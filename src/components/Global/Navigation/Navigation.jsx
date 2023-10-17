import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Image } from 'react-bootstrap';
import CompanyInfo from '../companyInfo';
import Socials from '../SocialIcons';
import logo from '../../../images/logo.svg';

const Navigation = () => {
  return (
    <section className='d-block z-2 nav-secondary'>
      <div className='row nav-info py-xs-2 py-sm-2 py-md-2 container m-0 m-auto justify-content-center align-items-center'>
        <div className='col d-none d-sm-block'>
          <Socials />
        </div>
        <div className='col-sm-8 nav-info_contact justify-content-center'>
          <CompanyInfo />
        </div>
      </div>
      {/* ---------------------------------------------- info end--*/}
      <div className='border-bottom ' />

      {/* -----------------------------------------------------------------------------Main Navigation----- */}

      <section className='container'>
        <Navbar
          expand='xl'
          data-bs-theme='light'
          bg=''
          className='justify-content-between'
        >
          <Navbar.Brand
            href='#'
            className='text-decoration-none'
          >
            <Image
              src={logo}
              alt='Rent Now Logo'
              width='100%'
              height='100%'
            />
          </Navbar.Brand>
          {/* -----------------------------------------------------------------------------BRAND LOGO- */}

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          {/* ---------------------------------------------------------------  --------Navbar collapse- */}
          <Navbar.Collapse
            className=' justify-content-end w-50'
            id='navbarNav'
          >
            <Nav className='justify-content-end '>
              <Nav.Item className=''>
                <Nav.Link
                  href='/'
                  className=' mx-sm-3 m-md-0 text-decoration-none ps-4 pb-3'
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className=''>
                <Nav.Link
                  href='/CarSearch'
                  className=' mx-sm-3 m-md-0 text-decoration-none ps-4 py-3 py-lg-2'
                >
                  Search Cars
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className=''>
                <Nav.Link
                  href='/Contact'
                  className=' mx-sm-3 m-md-0 text-decoration-none ps-4 '
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </section>
  );
};

export default Navigation;
