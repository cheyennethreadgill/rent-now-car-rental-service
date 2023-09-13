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
    <section className="contact ">
      <NavSecondary />
      <PageHeaders
        src={HeaderImg[1].img}
        name={pageList[1].name}
      />
      <section className="bg-white text-black py-4">
        <div className="container contact py-5 w-75">
          <div className="row gap-4 ">
            <div className="col contact_message">
              <h4 className="mb-4">Send Message</h4>
              <div className="row">
                <div className="col ">
                  <div className="input-group">
                    <i class="fa-regular fa-user input-group-text"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter username..."
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="input-group">
                    <i class="fa-regular fa-envelope input-group-text"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter email..."
                    />
                  </div>
                </div>
              </div>
              <div className="row col mt-3">
                <div className="col">
                  <div className="input-group">
                    <i class="fa-regular fa-message input-group-text"></i>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Your Message"
                    />
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-end">
                <Button className="btn btn-primary text-white mt-4 px-5 py-3">
                  Send Message
                </Button>
              </div>
            </div>
            {/* Message Ends--------------- */}
            <div className="col contact_info pb-5">
              <h4>Contact Info</h4>
              <div className="row">
                <div className="col mt-4 ">
                  <h5>Head Office</h5>
                  125 Main St
                </div>
                <div className="col">
                  <h5>Email</h5>
                  <p>rentnow@main.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col mt-4 ">
                  <div className="d-flex gap-5">
                    <h5>Phone</h5>
                  </div>
                  <p>(901) 111-1111</p>
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
