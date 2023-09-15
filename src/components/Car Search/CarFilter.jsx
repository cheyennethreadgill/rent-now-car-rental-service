import { useState } from "react";
import CCards from "./CCards";
import cars from "../Products/productList";

function CarFilter() {
  const [products, setProducts] = useState(cars);
  // console.log(products);

  const filterProducts = (catValue) => {
    const filterResult = products.filter((product) => {
      return product.color === catValue;
    });
    setProducts(filterResult);
    // console.log("filter done");
    // console.log(filterResult);
  };

  const [newProduct, setnewProducts] = useState(cars);

  return (
    <section>
      <section className="car-filter bg-light py-5 text-black">
        <div className="container-fluid w-75 pt-4">
          <div className="row">
            <div className="col d-flex align-items-center gap-2 p-0">
              <p className="">Car Brand:</p>
              <select
                name="car-select "
                id=""
                className="car-select"
              >
                <option value="Any">Any</option>
                <option value="Rover">Nissan</option>
                <option value="Lexus">Lexus</option>
                <option value="BMW">BMW</option>
                <option value="Tesla">Tesla</option>
              </select>
            </div>

            <div className="col d-flex align-items-center gap-2 p-0">
              <p className="">Passengers:</p>
              <select
                name="passenger-filter "
                id=""
                className="passenger-select"
              >
                <option value="Any">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="col d-flex align-items-center justify-content-end gap-2 p-0">
              <p className="">Color</p>
              <div className="car-filter_color-input d-flex justify-content-between gap-2">
                <div className="d-flex car-filter_color-input_blue">
                  <input
                    name=""
                    id=""
                    type="checkbox"
                    // value="blue"
                    onClick={() => filterProducts("blue")}
                  ></input>
                </div>

                <div className="d-flex car-filter_color-input_white">
                  <input
                    name=""
                    id=""
                    type="checkbox"
                    // value="white"
                    onClick={() => filterProducts("white")}
                  ></input>
                </div>

                <div className="d-flex car-filter_color-input_gray">
                  <input
                    name=""
                    id=""
                    type="checkbox"
                    // value="gray"
                    onClick={() => filterProducts("gray")}
                  ></input>
                </div>

                <div className="car-filter_color-input_black">
                  <input
                    name=""
                    id=""
                    type="checkbox"
                    // value="black"
                    onClick={() => filterProducts("black")}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <div className="col">
                        <img
                          src={product.img}
                          alt=""
                          className="card-img "
                        />
                      </div>

                      {/* column 1 */}
                      <div className="col-lg-9">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h4 className="card-title">{product.name}</h4>
                              <div className="d-flex gap-5">
                                <div className="">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
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
                                <strong> ${product.price} </strong>/total
                              </p>
                              <p className="price_per-day">
                                ${(product.price / 2).toFixed(0)} /day
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
    </section>
  );
}

export default CarFilter;
