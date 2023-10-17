import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import carouselImgs from '../../images/Carousel/carouselImgs';

const Header = () => {
  return (
    <header className='home-header z-1 position-relative'>
      <Carousel
        slide
        className='home-header_carousel'
      >
        {carouselImgs.map(({ id, img, caption, description }) => {
          return (
            <Carousel.Item
              interval={100000}
              key={id}
            >
              <Image
                src={img}
                alt='Slide 1'
                width='100%'
                height='100%'
              />
              <Carousel.Caption className='z-2 p-0'>
                <h1 className='fw-semibold animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
                  {caption}
                </h1>
                <p className='animate__animated animate__fadeInUp animate__slow animate__delay-1s'>
                  {description}
                </p>
                <Button className='animate__animated animate__fadeInUp animate__slow animate__delay-1s d-none d-lg-inline fw-semibold fs-4 btn btn-lg btn-primary text-white px-5 py-3 rounded-1 '>
                  Book Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </header>
  );
};

export default Header;
