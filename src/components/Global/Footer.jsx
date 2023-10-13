import { QuickLinks } from './QuickLinks';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import Socials from '../Global/SocialIcons';
import { Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <section className='footer pt-5'>
      <div className='container w-75'>
        <div className='row border-bottom py-5 d-flex justify-content-between gap-5'>
          <div className='col-lg-4 col-md-3 footer_about d-flex flex-column gap-2'>
            <h4 className='pb-4 fs-3 fw-semibold'> About Us</h4>
            <Link to='/'>
              <img
                src={Logo}
                alt='Rent now logo'
                width='170'
              />
            </Link>

            <p className='mt-3'>
              Sed sit amet ligula ac nulla finibus euismod nec nec diam. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              semper, risus eget ornare maximus, ipsum ante semper.
            </p>

            <Socials />
          </div>
          <QuickLinks />
          <div className='col-sm-4 col-md-4 col-lg-3 footer_contact fs-6'>
            <h4 className='pb-4 fs-3 fw-semibold '> Contact Us </h4>
            <div className='row'>
              <Col className='col-1 d-flex flex-column justify-content-center justify-content-lg-between align-items-center gap-4 gap-lg-0'>
                <i className='  fs-3 fs-lg-5 fa-solid fa-envelope-open'></i>
                <i className='fs-3 fs-lg-5 fa-solid fa-square-phone'></i>
                <i className='fs-3 fs-lg-5 fa-solid fa-location-dot'></i>
              </Col>
              <Col className='col-10 d-flex flex-column gap-3'>
                <a>
                  support@exapmple.com <br></br>
                </a>
                <a>
                  (909) 555-5555 <br></br>
                </a>
                <a>1425 Pointe Lane, Miami Florida – 33169, USA</a>
              </Col>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------Copyright -*/}
        <div className='row copyright py-4 d-flex align-items-center fs-6'>
          <div className='col col-lg-8'>
            <p className=''>Copyright © RentNow 2023. All rights reserved.</p>
          </div>
          <div className='col '>
            <p>We Accept</p>
            <img
              width='200px'
              height='100%'
              src='https://demo.kitthemes.com/html/rentnow/assets/images/payments@2x.png'
              alt='Payment Methods'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
