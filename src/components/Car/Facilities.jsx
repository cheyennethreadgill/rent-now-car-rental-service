import React from 'react';

export function Facilities({ product }) {
  return (
    <section className='bg-white pb-5 facilities'>
      <div className='row container text-black m-0 m-auto'>
        <div className='col'>
          <h3 className='my-5'>Facilities</h3>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-3'>
              <ul>
                <li>
                  <i
                    className={
                      product.facilities.audio === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  Audio
                </li>
                <li>
                  <i
                    className={
                      product.facilities.bluetooth === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  Bluetooth
                </li>
                <li>
                  <i
                    className={
                      product.facilities.heated === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  Heated seats
                </li>
              </ul>
            </div>
            <div className='col-12 col-md-3'>
              <ul>
                <li>
                  <i
                    className={
                      product.facilities.allwheel === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  All wheel drive
                </li>
                <li>
                  <i
                    className={
                      product.facilities.usb === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  USB input
                </li>
                <li>
                  <i
                    className={
                      product.facilities.fmradio === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  Fm radio
                </li>
              </ul>
            </div>
            <div className='col-12 col-md-3'>
              <ul>
                {' '}
                <li>
                  <i
                    className={
                      product.facilities.gps === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  GPS Navigation
                </li>
                <li>
                  <i
                    className={
                      product.facilities.safe === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  Safe
                </li>
                <li>
                  <i
                    className={
                      product.facilities.air === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  Air conditioner
                </li>
              </ul>
            </div>
            <div className='col-12 col-md-3'>
              <ul>
                <li>
                  <i
                    className={
                      product.facilities.parkingsensors === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  Parking sensors
                </li>
                <li>
                  <i
                    className={
                      product.facilities.wifi === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  Wifi
                </li>
                <li>
                  <i
                    className={
                      product.facilities.sunroof === true
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-xmark'
                    }
                  ></i>
                  Sunroof
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
