import React from 'react';
import { Row, Col } from 'react-bootstrap';

const QuickLinks = () => {
  return (
    <Col
      sm="12"
      md="3"
      className="footer_quick-links"
    >
      <h4 className="pb-4 fs-3 fw-semibold">
        Quick Links
      </h4>

      <Row className="fs-6">
        <div className="col d-flex flex-column gap-2">
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            About us
          </a>
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            Contact us
          </a>
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            Support
          </a>
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            View Booking
          </a>
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            Affiliate
          </a>
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            Marketplace
          </a>
        </div>
        <div className="col d-flex flex-column gap-2">
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            Site Map
          </a>
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            Careers
          </a>
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            Press
          </a>
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            Get a reciept
          </a>
          <a
            className="text-decoration-none"
            href="/Contact"
          >
            Community
          </a>
        </div>
      </Row>
    </Col>
  );
};

export default QuickLinks;
