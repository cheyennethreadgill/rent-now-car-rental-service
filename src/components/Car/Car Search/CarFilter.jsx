import React, { useState } from 'react';
import cars from '../../data/Products/productList';
import Product from '../../Product/Product';
import Filter from '../../Global/Filters/Filter';

const CarFilter = () => {
  const [products, setProducts] = useState(cars);

  // ---------------------------------------------------Select Input------------
  const filterBrand = (brandValue) => {
    const brandResult = cars.filter((car) => {
      return car.brand === brandValue;
    });
    setProducts(brandResult);
  };

  const filterPassengers = (passValue) => {
    const passResult = cars.filter((car) => {
      return car.passengers === passValue;
    });
    setProducts(passResult);
  };

  // ------------------------------------------------------------Radio----------
  const filterColor = (colorValue) => {
    const filterResult = cars.filter((car) => {
      return car.color === colorValue;
    });
    setProducts(filterResult);
  };

  return (
    <section>
      <Filter
        filterBrand={filterBrand}
        filterPassengers={filterPassengers}
        filterColor={filterColor}
      />

      <section className='cards text-black bg-white'>
        <Product products={products} />
      </section>
    </section>
  );
};

export default CarFilter;
