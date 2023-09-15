import { Link } from "react-router-dom"
import logo from "../../../src/images/logo.svg"
import Socials from "../Global/SocialIcons"
import { Button } from "react-bootstrap"

function NavSecondary() {
  return (
    <section className="container position-absolute z-2 top-0 start-50 translate-middle-x">
      <div className="row nav-info border-bottom pb-3">
        {/* <Socials /> */}
        <div className="col row nav-info_contact">
          <div className="col d-flex align-items-center gap-3">
            {/* <i class="fa-solid fa-2x fa-square-phone nav-info_contact_icon"></i> */}
            <a
              href="#"
              className="nav-info_contact_info text-decoration-none"
            >
              (954) 555-5555 <br></br>
              (954) 555-6565
            </a>
          </div>
          <div className="col d-flex align-items-center gap-3">
            {/* <i class="fa-solid fa-2x fa-envelope-open nav-info_contact_icon"></i> */}
            <a
              href="#"
              className="nav-info_contact_info text-decoration-none"
            >
              support@example.coms <br />
              sale@example.com
            </a>
          </div>
          <div className="col d-flex align-items-center gap-3">
            {/* <i class="fa-solid fa-2x fa-location-dot nav-info_contact_icon"></i> */}
            <a
              href="#"
              className="nav-info_contact_info text-decoration-none"
            >
              <br />
              1425 Pointe Lane, Miami Florida – 33169, USA
            </a>
          </div>
        </div>
      </div>
      {/* Main Navigation---------------------- */}
      <section className="container pt-3">
        <nav className="row primary-nav">
          <div className="col logo">
            <a
              href="#"
              className="text-decoration-none"
            >
              <img
                src={logo}
                alt="Rent Now Logo"
              />
            </a>
          </div>
          <ul className="col">
            <li className="list-unstyled d-flex align-items-center justify-content-end gap-5">
              <Link
                to="/"
                className="text-decoration-none"
              >
                Home
              </Link>
              <Link
                to="/CarSearch"
                className="text-decoration-none"
              >
                Search Cars
              </Link>
              <Button>
                <Link
                  to="/Contact"
                  className="text-decoration-none"
                >
                  Contact
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
}

export default NavSecondary
