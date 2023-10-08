import { Carousel, Button } from "react-bootstrap";
import Slide1Image from "../../../src/images/slide1.jpg";
import Slide2Image from "../../../src/images/slide2.jpg";
import Slide3Image from "../../../src/images/slide3.jpg";
import { Overlay } from "react-bootstrap";

function Header() {
  return (
    <header className='home-header z-1 position-relative'>
      <Carousel className='home-header_carousel'>
        <Carousel.Item>
          <img
            className='img-fluid'
            style={{ width: '100%' }}
            src={Slide1Image}
            alt='Slide 1'
          />
          <div className='carousel-caption translate-middle-y z-2'>
            <h1 className='fw-semibold'> #1 Car Rent Service In Your City </h1>
            <p className=''>
              Maecenas viverra porta eros, id tincidunt lorem rhoncus eget.
              Aliquam erat volutpat. Sed ultricies elementum egestas.
            </p>
            <Button className='d-none d-lg-inline fw-semibold fs-4 btn btn-lg btn-primary text-white px-5 py-3 rounded-1 '>
              Book Now
            </Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='img-fluid'
            style={{ width: '100%' }}
            src={Slide2Image}
            alt='Slide 2'
          />
          <div className='carousel-caption translate-middle-y z-2'>
            <h1 className='fw-semibold'>24/7 Customer Support Guarantee</h1>
            <p>
              Maecenas viverra porta eros, id tincidunt lorem rhoncus eget.
              Aliquam erat volutpat. Sed ultricies elementum egestas.
            </p>
            <Button className='d-none d-lg-inline fw-semibold fs-4 btn btn-lg btn-primary text-white px-5 py-3 rounded-1'>
              Book Now
            </Button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='img-fluid'
            style={{ width: '100%' }}
            src={Slide3Image}
            alt='Slide 3'
          />
          <div className='carousel-caption translate-middle-y z-2'>
            <h1 className='fw-semibold'>Quality Cars with Unlimited Miles</h1>
            <p>
              Maecenas viverra porta eros, id tincidunt lorem rhoncus eget.
              Aliquam erat volutpat. Sed ultricies elementum egestas.
            </p>
            <Button className='d-none d-lg-inline fw-semibold fs-4 btn btn-lg btn-primary text-white px-5 py-3 rounded-1'>
              Book Now
            </Button>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* <div className="carousel-inner">
        <div className="carousel-item d-block w-100">
          <img
            src={slide1}
            alt="Car slide 1"
          />
        </div>
        <div className="carousel-item d-block w-100">
          <img
            src={slide2}
            alt="Car slide 2"
          />
        </div>
        <div className="carousel-item d-block w-100">
          <img
            src={slide3}
            alt="Car slide 3"
          />
        </div>
      </div>
      <h1>#1 Car Rent Service In Your City</h1>
      <p>
        Maecenas viverra porta eros, id tincidunt lorem rhoncus eget. Aliquam
        erat volutpat. Sed ultricies elementum egestas.
      </p>
      <Button className="d-none d-lg-inline btn btn-primary"> Book Now </Button> */}
    </header>
  );
}

export default Header;
