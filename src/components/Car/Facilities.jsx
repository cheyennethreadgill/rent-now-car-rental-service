/* eslint-disable react/prop-types */
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Facilities = ({ product }) => {
  return (
    <section className='bg-white pb-5 facilities'>
      <Row className='container text-black m-0 m-auto'>
        <Col>
          <h3 className='my-5'>Facilities</h3>
          <Row className='justify-content-center'>
            <Col md='3'>
              <ul>
                <li>
                  <i
                    className={
                      product.facilities.audio === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  Audio
                </li>
                <li>
                  <i
                    className={
                      product.facilities.bluetooth === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  Bluetooth
                </li>
                <li>
                  <i
                    className={
                      product.facilities.heated === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  Heated seats
                </li>
              </ul>
            </Col>
            <Col md='3'>
              <ul>
                <li>
                  <i
                    className={
                      product.facilities.allwheel === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  All wheel drive
                </li>
                <li>
                  <i
                    className={
                      product.facilities.usb === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  USB input
                </li>
                <li>
                  <i
                    className={
                      product.facilities.fmradio === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  Fm radio
                </li>
              </ul>
            </Col>
            <Col md='3'>
              <ul>
                <li>
                  <i
                    className={
                      product.facilities.gps === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  GPS Navigation
                </li>
                <li>
                  <i
                    className={
                      product.facilities.safe === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  Safe
                </li>
                <li>
                  <i
                    className={
                      product.facilities.air === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  Air conditioner
                </li>
              </ul>
            </Col>
            <Col md='3'>
              <ul>
                <li>
                  <i
                    className={
                      product.facilities.parkingsensors === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  Parking sensors
                </li>
                <li>
                  <i
                    className={
                      product.facilities.wifi === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  Wifi
                </li>
                <li>
                  <i
                    className={
                      product.facilities.sunroof === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  />
                  Sunroof
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

// Facilities.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     brand: PropTypes.string,
//     passengers: PropTypes.string,
//     color: PropTypes.string,
//     img: PropTypes.string,
//     singleImg: PropTypes.string,
//     rating: PropTypes.number,
//     price: PropTypes.number,
//     facilities: {
//       audio: PropType.boolean,
//       bluetooth: PropType.boolean,
//       heated: PropType.boolean,
//       allwheel: PropType.boolean,
//       usb: PropType.boolean,
//       fmradio: PropType.boolean,
//       gps: PropType.boolean,
//       safe: PropType.boolean,
//       air: PropType.boolean,
//       parkingsensors: PropType.boolean,
//       wifi: PropType.boolean,
//       sunroof: PropType.boolean,
//     },
//   }),
// };

// Facilities.defaultProps = {
//   product: null,
// };

export default Facilities;
