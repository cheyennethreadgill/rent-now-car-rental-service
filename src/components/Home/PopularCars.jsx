import { Link } from "react-router-dom";
import { useState } from "react";
import Product from "../Products/Products";

function PopularCars() {
  return (
    <section className='text-black popular-cars p-4 bg-light'>
      <div className='container'>
        <h2 className='text-center mt-5 fw-bold'>
          Popular Cars <span className='text-ofwhite'>Popular Cars</span>
        </h2>
        <p className='text-center mb-5'>
          Inbecilloque elegans errorem concedo etsi electram.
        </p>
        <Product />
      </div>
    </section>
  );
}

export default PopularCars;
