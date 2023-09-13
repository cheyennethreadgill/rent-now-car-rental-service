import { useState } from "react";
import cars from "../Products/productList";

function CCards() {
  const [carList, setcarList] = useState(cars);

  return (
    <section className="cards text-black bg-light">
      <div className="container w-75 pb-5">
        {cars.map((car) => {
          return (
            <div className="col">
              <div className="row pb-5">
                <div className="card">
                  <div className="row">
                    <div className="col">
                      <img
                        src={car.img}
                        alt=""
                        className="card-img "
                      />
                    </div>

                    {/* column 1 */}
                    <div className="col-lg-9">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h4 className="card-title">{car.name}</h4>
                            <div className="d-flex gap-5">
                              <div className="">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                              </div>
                              <div className="">
                                <p className="rating">3 Reviews</p>
                              </div>
                            </div>
                            <p className="card-text">
                              Lorem ipsum, dolor sit amet consectetur.
                            </p>
                          </div>
                          <div className="col-lg-3 d-flex flex-column justify-content-end">
                            <p className="price">
                              <strong> ${car.price} </strong>/total
                            </p>
                            <p className="price_per-day">
                              ${(car.price / 2).toFixed(0)} /day
                            </p>

                            <button className="btn btn-primary py-3 px-4 text-white">
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
          );
        })}
      </div>
    </section>
  );
}

export default CCards;
