import Image from 'react-bootstrap/Image';

function PageHeaders(props) {
  return (
    <section>
      <div className='page-header position-relative'>
        <div className='page-header_img position-fixed'>
          <Image
            className=' '
            src={props.src}
            alt='Picture of a road'
          />
        </div>
        <div className='page-header_info container text-center position-relative z-5'>
          <h1 className='fw-semibold'> {props.name} </h1>
          <p className='lead'>
            Cras eros lorem, rhoncus ac risus sit amet, fringilla ultrices
            purus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageHeaders;
