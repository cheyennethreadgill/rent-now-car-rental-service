import { useState } from "react";
import CCards from "./CCards";
import cars from "../Products/productList";

function CarFilter() {
  const [products, setProducts] = useState(cars);
  // console.log(cars);

  const filterColor = (colorValue) => {
    let filterResult = cars.filter((car) => {
      return car.color === colorValue;
    });
    setProducts(filterResult);
    // console.log(filterResult);
    // console.log("filter done");
  };

  const filterBrand = (brandValue) => {
    let brandResult = cars.filter((car) => {
      return car.brand === brandValue;
    });
    setProducts(brandResult);
  };

  const filterPassengers = (passValue) => {
    let passResult = cars.filter((car) => {
      return car.passengers === passValue;
    });
    setProducts(passResult);
    console.log(passResult);
  };

  const filterAll = (value) => {
    let allProducts = cars.filter((car) => {
      return cars === value;
    });
    setProducts(allProducts);
  };

  return (
    <section>
      <section className="car-filter bg-light py-5 text-black">
        <div className="container-fluid w-75 pt-4">
          <div className="row car-filter_cards">
            <div className="col d-flex align-items-center gap-2 p-0">
              <p className=" m-0 ">Car Brand:</p>
              <select
                onChange={(e) => filterBrand(e.target.value)}
                name="car-select "
                id=""
                className="pr-4 px-2 py-2 car-select"
              >
                <option value="Any">Any</option>
                <option value="Nissan">Nissan</option>
                <option value="Lexus">Lexus</option>
                <option value="BMW">BMW</option>
                <option value="Tesla">Tesla</option>
              </select>
            </div>

            <div className="col d-flex align-items-center gap-2 p-0">
              <p className=" m-0 ">Passengers:</p>
              <select
                onChange={(e) => filterPassengers(e.target.value)}
                name="passenger-filter "
                id=""
                className="pr-4 px-2 py-2 passenger-select"
              >
                <option
                  onChange={(e) => filterAll(e.target.value)}
                  value="All"
                >
                  All
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="col d-flex align-items-center justify-content-end gap-2 p-0">
              <p className=" m-0 ">Color</p>
              <div className="car-filter_color-input d-flex justify-content-between gap-2">
                <div className="d-flex car-filter_color-input_blue">
                  <input
                    name=""
                    id=""
                    type="checkbox"
                    value="blue"
                    onClick={(e) => filterColor(e.target.value)}
                  ></input>
                </div>

                <div className="d-flex car-filter_color-input_white">
                  <input
                    name=""
                    id=""
                    type="checkbox"
                    value="white"
                    onClick={(e) => filterColor(e.target.value)}
                  ></input>
                </div>

                <div className="d-flex car-filter_color-input_gray">
                  <input
                    name=""
                    id=""
                    type="checkbox"
                    value="gray"
                    onClick={(e) => filterColor(e.target.value)}
                  ></input>
                </div>

                <div className="car-filter_color-input_black">
                  <input
                    name=""
                    id=""
                    type="checkbox"
                    value="black"
                    onClick={(e) => filterColor(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cars */}
      <section className="cards text-black bg-light">
        <div className="container w-75 pb-5">
          {products.map((product, key) => {
            return (
              <div
                key={product.id}
                className="col"
              >
                <div className="row pb-5">
                  <div className="card">
                    <div className="row">
                      <div className="col d-flex align-items-center">
                        <img
                          src={product.img}
                          alt=""
                          className="card-img "
                        />
                      </div>

                      {/* column 1 */}
                      <div className="col-lg-9 py-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h4 className="card-title">{product.brand}</h4>
                              <div className="d-flex gap-5">
                                <div className="">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="">
                                  <p className=" rating">3 Reviews</p>
                                </div>
                              </div>
                              <p className=" card-text">
                                Lorem ipsum, dolor sit amet consectetur.
                              </p>
                              <p className=" passengers">
                                {product.passengers} Passengers
                              </p>
                            </div>
                            <div className="col-lg-3 d-flex flex-column justify-content-end text-center">
                              <p className="d-flex price m-0 align-items-center justify-content-center fw-medium">
                                <strong>${product.price}</strong>
                                <span className="d-inline-block ml-3">
                                  /total
                                </span>
                              </p>

                              <p className="">
                                ${(product.price / 2).toFixed(0)} /day
                              </p>

                              <button className="btn btn-primary py-2 px-4 text-white fs-5 fw-medium rounded-1">
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
    </section>
  );
}

export default CarFilter;
