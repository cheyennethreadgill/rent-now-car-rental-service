function PageHeaders(props) {
  return (
    <section>
      <div className="page-header jumbotron position-relative">
        <img
          className="position-fixed top-0 left-0 height-inherit"
          src={props.src}
          alt="Picture of a road"
        />
        <div className="page-header_info container text-center position-relative z-5">
          <h1> {props.name} </h1>
          <p className="lead">
            Cras eros lorem, rhoncus ac risus sit amet, fringilla ultrices
            purus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageHeaders;
