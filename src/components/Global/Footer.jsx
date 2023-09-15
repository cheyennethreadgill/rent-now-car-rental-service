import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Socials from "../Global/SocialIcons";

const Footer = () => {
  return (
    <section className="footer pt-5">
      <div className="container w-75">
        <div className="row border-bottom py-5 d-flex justify-content-between gap-5">
          <div className="col-lg-5 footer_about d-flex flex-column gap-2">
            <h4 className="pb-4"> About Us</h4>

            <img
              src={Logo}
              alt="Rent now logo"
              width="170"
            />

            <p className="mt-3">
              Sed sit amet ligula ac nulla finibus euismod nec nec diam. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              semper, risus eget ornare maximus, ipsum ante semper.
            </p>

            {/* <Socials /> */}
          </div>
          <div className="col footer_quick-links">
            <h4 className="pb-4"> Quick Links</h4>

            <div className="row">
              <div className="col d-flex flex-column gap-2">
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  About us
                </a>
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  Contact us
                </a>
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  Support
                </a>
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  View Booking
                </a>
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  Affiliate
                </a>
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  Marketplace
                </a>
              </div>
              <div className="col d-flex flex-column gap-2">
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  Site Map
                </a>
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  Careers
                </a>
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  Press
                </a>
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  Get a reciept
                </a>
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  Community
                </a>
              </div>
            </div>
          </div>
          <div className="col footer_contact">
            <h4 className="pb-4 "> Contact Us</h4>
            <div className="row">
              <div className="col d-flex flex-column justify-content-between">
                {/* <i class="fa-solid fa-envelope-open"></i>
                <i class="fa-solid fa-square-phone"></i>
                <i class="fa-solid fa-location-dot"></i> */}
              </div>
              <div className="col-lg-10">
                <p>
                  support@exapmple.com <br></br>
                </p>
                <p>
                  (909) 555-5555 <br></br>
                </p>
                <p>1425 Pointe Lane, Miami Florida – 33169, USA</p>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright -------------------*/}
        <div className="row copyright py-4 d-flex align-items-center">
          <div className="col col-lg-8">
            <p>Copyright © RentNow 2023. All rights reserved.</p>
          </div>
          <div className="col ">
            <p>We Accept</p>
            <img
              width="200"
              src="https://demo.kitthemes.com/html/rentnow/assets/images/payments@2x.png"
              alt="Payment Methods"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
