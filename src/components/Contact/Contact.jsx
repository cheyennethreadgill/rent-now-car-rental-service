import { ContactForm } from '../Global/ContactForm';
import Navigation from '../Global/Navigation/Navigation';
import PageHeaders from '../Global/PageHeaders';
import Footer from '../Global/Footer';
import siteImages from '../data/siteImages';
import { useState } from 'react';
import pageList from '../data/pageList';

function Contact() {
  const [HeaderImg, setHeaderImg] = useState(siteImages);

  return (
    <section className='contact '>
      <Navigation />
      <PageHeaders
        src={HeaderImg[1].img}
        name={pageList[1].name}
      />
      <section className='bg-white text-black py-4'>
        <div className='container contact py-5'>
          <div className='row gap-4 '>
            <div className='col-md-12 col-lg contact_message '>
              <ContactForm />
              {/* --------------------------------------------------------------------------------------------Contact form Ends--- */}
            </div>
            <div className='col-md-12 col-lg contact_info pt-sm-4 pt-lg-0 pb-5'>
              <h4 className=''>Contact Info</h4>
              <div className='row'>
                <div className='col d-flex mt-4 gap-3'>
                  <span>
                    <i className='fs-4 fa-solid fa-location-dot'></i>
                  </span>
                  <div>
                    <h5 className=''>Head Office</h5>
                    <p>125 Main St</p>
                  </div>
                </div>
                <div className='col d-flex mt-4 gap-3'>
                  <span>
                    <i className='fs-4 fa-solid fa-envelope-open'></i>
                  </span>
                  <div>
                    <h5 className=''>Email</h5>
                    <p>rentnow@main.com</p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col d-flex mt-4 gap-3 mt-4 '>
                  <span>
                    <i className='fs-4 fa-solid fa-square-phone'></i>
                  </span>
                  <div className=''>
                    <h5 className=''>Phone</h5>
                    <p>(901) 111-1111</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default Contact;
