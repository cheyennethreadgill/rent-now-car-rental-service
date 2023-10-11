import React from "react";
export function QuickLinks({}) {
  return <div className='col-sm-12 col-md-3 footer_quick-links'>
            <h4 className='pb-4 fs-3 fw-semibold'> Quick Links</h4>

            <div className='row fs-6'>
              <div className='col d-flex flex-column gap-2 '>
                <a className='text-decoration-none' href='#'>
                  About us
                </a>
                <a className='text-decoration-none' href='#'>
                  Contact us
                </a>
                <a className='text-decoration-none' href='#'>
                  Support
                </a>
                <a className='text-decoration-none' href='#'>
                  View Booking
                </a>
                <a className='text-decoration-none' href='#'>
                  Affiliate
                </a>
                <a className='text-decoration-none' href='#'>
                  Marketplace
                </a>
              </div>
              <div className='col d-flex flex-column gap-2'>
                <a className='text-decoration-none' href='#'>
                  Site Map
                </a>
                <a className='text-decoration-none' href='#'>
                  Careers
                </a>
                <a className='text-decoration-none' href='#'>
                  Press
                </a>
                <a className='text-decoration-none' href='#'>
                  Get a reciept
                </a>
                <a className='text-decoration-none' href='#'>
                  Community
                </a>
              </div>
            </div>
          </div>;
}
  