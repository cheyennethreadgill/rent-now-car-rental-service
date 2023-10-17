import React from 'react';

const QuickLinks = () => {
  return (
    <div className='col-sm-12 col-md-3 footer_quick-links'>
      <h4 className='pb-4 fs-3 fw-semibold'> Quick Links</h4>

      <div className='row fs-6'>
        <div className='col d-flex flex-column gap-2 '>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            About us
          </a>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            Contact us
          </a>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            Support
          </a>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            View Booking
          </a>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            Affiliate
          </a>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            Marketplace
          </a>
        </div>
        <div className='col d-flex flex-column gap-2'>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            Site Map
          </a>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            Careers
          </a>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            Press
          </a>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            Get a reciept
          </a>
          <a
            className='text-decoration-none'
            href='/Contact'
          >
            Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
