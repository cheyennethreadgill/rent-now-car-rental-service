import { Link } from "react-router-dom";
import { useState } from "react";
import products from "./productList";

function Product() {
  const [product, setProduct] = useState(products);
  return (
    <div className="row gap-4 product">
      {products.map((product) => {
        return (
          <div className="card col-lg-3 border-none pb-2 d-flex">
            <Link
              to={`/Car/${product.name}`}
              className="text-decoration-none"
            >
              {/* <Link to="/Car"> */}
              <div className="d-flex justify-content-end decoration-none">
                <div className=" text-white bg-secondary py-1 px-3 rounded-1 mt-3 justify-self-end ">
                  5 0
                </div>
              </div>
              <img
                className="card-img"
                src={product.img}
                alt="Picture of a Black Sedan"
                width=""
              />
              <div className="card-body text-primary">
                <h4 className="card-title text-black fs-3 fw-semibold">
                  {product.name}
                </h4>
                <div className="card-text text-black">
                  <p>Mauris semper nisl a massa convallis</p>
                </div>
                <div className="d-flex  text-black justify-content-between">
                  <ul className="px-0 ml-3">
                    <li>Aliqua venandi mutat</li>
                    <li>Aliqua venandi mutat</li>
                    <li>Aliqua venandi mutat</li>
                  </ul>
                  <p className="align-self-end justify-self-end px-3 py-2 rounded-1 bg-primary text-white">
                    From <br />{" "}
                    <strong className="fs-3">${product.price}</strong>/day
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
