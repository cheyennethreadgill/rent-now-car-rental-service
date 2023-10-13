import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

export function Product({ products, key }) {
  return (
    <div className='container w-75 pb-5'>
      {/* -------------------------------------------------------------------------------------------------------------HOME */}
      {/* -------------------------------------------------Instead of mapping from product list, map from api */}
      {products.map((product, key) => {
        return (
          <Link
            to={`/CarSearch/Products/${product.id}`}
            key={product.id}
          >
            <div
              key={product.id}
              className='col '
            >
              <div className='row pb-5'>
                <div className='card'>
                  <div className='row'>
                    <div className='col d-flex align-items-center'>
                      <Image
                        src={product.img}
                        alt=''
                        className='card-img '
                        width='auto'
                        height='auto'
                      />
                    </div>

                    {/* column 1 */}
                    <div className='col-lg-9 py-4'>
                      <div className='card-body text-center text-lg-start'>
                        <div className='row'>
                          <div className='col'>
                            <h4 className='card-title fw-semibold'>
                              {product.brand}
                            </h4>
                            <div className='d-md-flex gap-3'>
                              <div className=''>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                              </div>
                              <div className=''>
                                <p className=' rating'>3 Reviews</p>
                              </div>
                            </div>
                            <p className=' card-text'>
                              Lorem ipsum, dolor sit amet consectetur.
                            </p>

                            <p>
                              <strong>Color:</strong> {product.color}
                            </p>
                            <div className='d-flex align-items-center gap-lg-4 flex-column flex-lg-row'>
                              <div className='d-flex gap-2'>
                                <i className='fa-solid fa-car-side'></i>{' '}
                                <p className=' passengers'>
                                  {product.passengers} Passengers
                                </p>
                              </div>
                              <div className='d-flex gap-2'>
                                <i className='fa-solid fa-gas-pump'></i>
                                <p className=' gas'> Gas</p>
                              </div>
                              <div className='d-flex gap-2'>
                                <i className='fa-solid fa-door-closed'></i>
                                <p className=' doors'> doors</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-3 d-flex flex-column justify-content-between pt-5 pt-lg-0'>
                            <div>
                              <p className='d-flex price m-0 align-items-center fw-medium justify-content-center justify-content-lg-start'>
                                <strong>${product.price}</strong>
                                <span className='d-inline-block ml-3'>
                                  /total
                                </span>
                              </p>
                              <p className=''>
                                ${(product.price / 2).toFixed(0)} /day
                              </p>
                            </div>

                            <button className='btn btn-primary py-2 px-4 text-white fs-5 fw-medium rounded-1 '>
                              Book Now
                            </button>
                          </div>
                          {/* column 2 */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
