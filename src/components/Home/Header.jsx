import { Carousel, Button } from "react-bootstrap";
import Slide1Image from "../../../src/images/slide1.jpg";
import Slide2Image from "../../../src/images/slide2.jpg";
import Slide3Image from "../../../src/images/slide3.jpg";
import { Overlay } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

function Header() {
  return (
    <header className='home-header z-1 position-relative'>
      <Carousel
        slide
        className='home-header_carousel'
      >
        <Carousel.Item interval={6500}>
          <Image
            className=''
            src={Slide1Image}
            alt='Slide 1'
          />
          <Carousel.Caption className=' z-2'>
            <h1 className='fw-semibold animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
              {' '}
              #1 Car Rent Service In Your City{' '}
            </h1>
            <p className='animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
              Maecenas viverra porta eros, id tincidunt lorem rhoncus eget.
              Aliquam erat volutpat. Sed ultricies elementum egestas.
            </p>
            <Button className='animate__animated animate__fadeInUp animate__slow animate__delay-1s d-none d-lg-inline fw-semibold fs-4 btn btn-lg btn-primary text-white px-5 py-3 rounded-1 '>
              Book Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6500}>
          <Image
            className=''
            src={Slide2Image}
            alt='Slide 2'
          />
          <Carousel.Caption className=' z-2'>
            <h1 className='fw-semibold animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
              24/7 Customer Support Guarantee
            </h1>
            <p className='animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
              Maecenas viverra porta eros, id tincidunt lorem rhoncus eget.
              Aliquam erat volutpat. Sed ultricies elementum egestas.
            </p>
            <Button className='animate__animated animate__fadeInUp animate__slow animate__delay-1s d-none d-lg-inline fw-semibold fs-4 btn btn-lg btn-primary text-white px-5 py-3 rounded-1'>
              Book Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6500}>
          <Image
            className=''
            src={Slide3Image}
            alt='Slide 3'
          />
          <Carousel.Caption className=' z-2'>
            <h1 className='fw-semibold animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
              Quality Cars with Unlimited Miles
            </h1>
            <p className='animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
              Maecenas viverra porta eros, id tincidunt lorem rhoncus eget.
              Aliquam erat volutpat. Sed ultricies elementum egestas.
            </p>
            <Button className='animate__animated animate__fadeInUp animate__slow animate__delay-1s d-none d-lg-inline fw-semibold fs-4 btn btn-lg btn-primary text-white px-5 py-3 rounded-1'>
              Book Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default Header;
