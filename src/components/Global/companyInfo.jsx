import React from 'react';

 const CompanyInfo = () => {
   return (
     <div className='row align-items-center'>
       <div className='col d-flex align-items-center gap-3'>
         <i className='d-none d-md-block fa-solid fa-square-phone nav-info_contact_icon ' />
         <p
           href='#'
           className='nav-info_contact_info text-decoration-none fs-6'
         >
           (954) 555-5555 <br />
           (954) 555-6565
         </p>
       </div>

       <div className='col d-flex align-items-center gap-3'>
         <i className='d-none d-md-block fa-solid fa-envelope-open nav-info_contact_icon' />
         <p
           href='#'
           className='nav-info_contact_info text-decoration-none fs-6'
         >
           support@example.coms <br />
           sale@example.com
         </p>
       </div>

       <div className='col d-none d-lg-flex align-items-center gap-3'>
         <i className='d-xs-none d-sm-none d-md-none d-lg-block fa-solid fa-location-dot nav-info_contact_icon' />
         <p
           href='#'
           className='nav-info_contact_info text-decoration-none fs-6'
         >
           1425 Pointe Lane, Miami Florida – 33169, USA
         </p>
       </div>
     </div>
   );
 };

 export default CompanyInfo;
