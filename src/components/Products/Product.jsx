import { Link } from "react-router-dom";
import { useState } from "react";
import products from "./productList";

function Product() {
  const [product, setProduct] = useState(products);
  return (
    <div className="row gap-4">
      {products.map((product) => {
        return (
          <div className="card col-lg-3 border-none">
            <Link to={`/Car/${product.name}`}>
              {/* <Link to="/Car"> */}
              <img
                className="card-img"
                src={product.img}
                alt="Picture of a Black Sedan"
              />
              <div className="card-body text-primary">
                <h4 className="card-title text-black"> {product.name} </h4>
                <div className="card-text">
                  Mauris semper nisl a massa convallis
                </div>
                <div className="d-flex gap-4 text-black">
                  <ul className="">
                    <li>Aliqua venandi mutat</li>
                    <li>Aliqua venandi mutat</li>
                    <li>Aliqua venandi mutat</li>
                  </ul>
                  <button className="align-self-end btn btn-primary text-white">
                    From <br /> <strong>${product.price}</strong>/day
                  </button>
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
