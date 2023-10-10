import { Link } from "react-router-dom"
import logo from "../../../src/images/logo.svg"
import Socials from "../Global/SocialIcons";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavSecondary() {
  return (
    <section className='position-absolute z-2 w-100 nav-secondary'>
      <div className='row nav-info py-xs-2 py-sm-2 py-md-2 container m-0 m-auto justify-content-center align-items-center'>
        <div className='col d-none d-sm-block'>
          <Socials />
        </div>
        <div className='col-sm-8 nav-info_contact justify-content-center'>
          <div className='row align-items-center'>
            <div className='col d-flex align-items-center gap-3'>
              <i className='d-none d-md-block fa-solid fa-square-phone nav-info_contact_icon '></i>
              <address
                href='#'
                className='nav-info_contact_info text-decoration-none fs-6'
              >
                (954) 555-5555 <br></br>
                (954) 555-6565
              </address>
            </div>
            {/* first col end*/}
            <div className='col d-flex align-items-center gap-3'>
              <i className='d-none d-md-block fa-solid fa-envelope-open nav-info_contact_icon'></i>
              <address
                href='#'
                className='nav-info_contact_info text-decoration-none fs-6'
              >
                support@example.coms <br />
                sale@example.com
              </address>
            </div>
            {/* second col end */}
            <div className='col d-none d-lg-flex align-items-center gap-3'>
              <i className='d-xs-none d-sm-none d-md-none d-lg-block fa-solid fa-location-dot nav-info_contact_icon'></i>
              <address
                href='#'
                className='nav-info_contact_info text-decoration-none fs-6'
              >
                1425 Pointe Lane, Miami Florida – 33169, USA
              </address>
            </div>
          </div>
          {/* third col end */}
        </div>
      </div>
      {/*---------------------------------------------- info end--*/}
      <div className='border-bottom'></div>

      {/* -----------------------------------------------------------------------------Main Navigation----- */}
      <section className='container pt-3'>
        <Navbar
          expand='xl'
          data-bs-theme='light'
          bg=''
          class='  justify-content-between'
        >
          <Navbar.Brand
            href='#'
            className='text-decoration-none'
          >
            <Link to='/'>
              <img
                src={logo}
                alt='Rent Now Logo'
              />
            </Link>
          </Navbar.Brand>
          {/* -----------------------------------------------------------------------------BRAND LOGO- */}

          {/* ---------------------------------------------------------------  --------Navbar collapse- */}
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <Navbar.Collapse
            className=' justify-content-end w-50 py-3'
            id='navbarNav'
          >
            <Nav className='justify-content-end '>
              <Nav.Item className='border-bottom'>
                <Nav.Link
                  href='/'
                  className=' mx-sm-3 m-md-0 text-decoration-none ps-4 pb-3'
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='border-bottom'>
                <Nav.Link
                  href='/CarSearch'
                  className=' mx-sm-3 m-md-0 text-decoration-none ps-4 py-3'
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
            {/* hamburger------------ */}
          </Navbar.Collapse>
        </Navbar>
      </section>
    </section>
  );
}

export default NavSecondary
