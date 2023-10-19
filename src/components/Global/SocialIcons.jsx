import React from 'react';
import { Col } from 'react-bootstrap';

const SocialIcons = () => {
  return (
    <Col className="nav-info_socials d-flex align-items-center gap-3 gap-3 ">
      <a
        aria-label="facebook.com"
        href="https://www.facebook.com"
      >
        <i className="fa fa-facebook fa-lg" />
      </a>
      <a
        aria-label="twitter.com"
        href="https://www.twitter.com"
      >
        <i className="fa fa-twitter fa-lg" />
      </a>
      <a
        aria-label="instagram.com"
        href="https://www.instagram.com"
      >
        <i className="fa fa-instagram fa-lg" />
      </a>
      <a
        aria-label="linkedin.com"
        href="https://www.linkedin.com"
      >
        <i className="fa fa-linkedin fa-lg" />
      </a>
    </Col>
  );
};
export default SocialIcons;
