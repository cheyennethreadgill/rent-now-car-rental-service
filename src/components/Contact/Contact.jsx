import NavSecondary from "../Global/NavSecondary";
import PageHeaders from "../Global/PageHeaders";
import Footer from "../Global/Footer";
import { Button } from "react-bootstrap";
import siteImages from "../Global/siteImages";
import { useState } from "react";
import pageList from "../Global/pageList";

function Contact() {
  const [HeaderImg, setHeaderImg] = useState(siteImages);
  // console.log(pageList[1].name)
  return (
    <section className='contact '>
      <NavSecondary />
      <PageHeaders
        src={HeaderImg[1].img}
        name={pageList[1].name}
      />
      <section className='bg-white text-black py-4'>
        <div className='container contact py-5'>
          <div className='row gap-4 '>
            <div className='col-md-12 col-lg contact_message '>
              <h4 className='mb-4 '>Send Message</h4>
              <div className='row'>
                <div className='col '>
                  <div className='input-group d-flex '>
                    <i class='fa-regular fa-user input-group-text align-self-center py-3'></i>
                    <input
                      type='text'
                      className='rounded-1 form-control-light'
                      placeholder='Enter username...'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='input-group d-flex'>
                    <i class='fa-regular fa-envelope input-group-text align-self-center py-3'></i>
                    <input
                      type='text'
                      className='rounded-1 form-control-light'
                      placeholder='Enter email...'
                    />
                  </div>
                </div>
              </div>
              <div className='row col mt-3'>
                <div className='col'>
                  <div className='input-group d-flex'>
                    <i class='fa-regular fa-message input-group-text align-self-start pb-5'></i>
                    <textarea
                      type='text'
                      className='form-control-light'
                      placeholder='Your Message'
                    />
                  </div>
                </div>
              </div>
              <div className='col d-flex justify-content-end'>
                <Button
                  type='submit'
                  className='btn btn-primary text-white mt-4 px-5 py-2 fs-5 rounded-1'
                >
                  Send Message
                </Button>
              </div>
            </div>
            {/* Message Ends--------------- */}
            <div className='col-md-12 col-lg contact_info pt-sm-4 pt-lg-0 pb-5'>
              <h4 className=''>Contact Info</h4>
              <div className='row'>
                <div className='col d-flex mt-4 gap-3'>
                  <span>
                    <i class='fs-4 fa-solid fa-location-dot'></i>
                  </span>
                  <div>
                    <h5 className=''>Head Office</h5>
                    <p>125 Main St</p>
                  </div>
                </div>
                <div className='col d-flex mt-4 gap-3'>
                  <span>
                    <i class='fs-4 fa-solid fa-envelope-open'></i>
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
                    <i class='fs-4 fa-solid fa-square-phone'></i>
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
