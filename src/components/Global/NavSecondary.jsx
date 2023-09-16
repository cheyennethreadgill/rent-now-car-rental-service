import { Link } from "react-router-dom"
import logo from "../../../src/images/logo.svg"
import Socials from "../Global/SocialIcons";

function NavSecondary() {
  return (
    <section className="position-absolute z-2 w-100">
      <div className="row nav-info py-3 container m-0 m-auto">
        <Socials />
        <div className="col row nav-info_contact">
          <div className="col d-flex align-items-center gap-3">
            <i class="fa-solid fa-2x fa-square-phone nav-info_contact_icon"></i>
            <address
              href="#"
              className="nav-info_contact_info text-decoration-none fs-6"
            >
              (954) 555-5555 <br></br>
              (954) 555-6565
            </address>
          </div>
          <div className="col d-flex align-items-center gap-3">
            <i class="fa-solid fa-2x fa-envelope-open nav-info_contact_icon"></i>
            <address
              href="#"
              className="nav-info_contact_info text-decoration-none fs-6"
            >
              support@example.coms <br />
              sale@example.com
            </address>
          </div>
          <div className="col d-flex align-items-center gap-3">
            <i class="fa-solid fa-2x fa-location-dot nav-info_contact_icon"></i>
            <address
              href="#"
              className="nav-info_contact_info text-decoration-none fs-6"
            >
              1425 Pointe Lane, Miami Florida – 33169, USA
            </address>
          </div>
        </div>
      </div>
      <div className="border-bottom"></div>
      {/* Main Navigation---------------------- */}
      <section className="container pt-3">
        <nav className="row primary-nav">
          <div className="col logo">
            <address
              href="#"
              className="text-decoration-none"
            >
              <img
                src={logo}
                alt="Rent Now Logo"
              />
            </address>
          </div>
          <ul className="col">
            <li className="list-unstyled d-flex align-items-center justify-content-end gap-5">
              <Link
                to="/"
                className="fs-4 text-decoration-none"
              >
                Home
              </Link>
              <Link
                to="/CarSearch"
                className="fs-4 text-decoration-none"
              >
                Search Cars
              </Link>
              <Link
                to="/Contact"
                className="fs-4 text-decoration-none btn btn-primary rounded-1"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
}

export default NavSecondary
