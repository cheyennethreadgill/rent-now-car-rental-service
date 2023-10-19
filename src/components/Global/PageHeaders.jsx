import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

const PageHeaders = ({ src, name }) => {
  return (
    <section>
      <div className='page-header position-relative'>
        <div className='page-header_img position-fixed top-0'>
          <Image
            className=' '
            src={src}
            alt='Picture of a road'
          />
        </div>
        <div className='page-header_info container text-center position-relative z-5'>
          <h1 className='fw-semibold'> {name} </h1>
          <p className='lead'>
            Cras eros lorem, rhoncus ac risus sit amet, fringilla ultrices
            purus.
          </p>
        </div>
      </div>
    </section>
  );
};

PageHeaders.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PageHeaders;
