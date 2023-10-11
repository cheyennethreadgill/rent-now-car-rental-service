import { Product } from '../../Product/Product';
import { useState } from 'react';
import cars from '../../data/Products/productList';

function CarFilter() {
  const [products, setProducts] = useState(cars);

  // ---------------------------------------------------Select Input------------
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

  // ------------------------------------------------------------Radio----------
  const filterColor = (colorValue) => {
    let filterResult = cars.filter((car) => {
      return car.color === colorValue;
    });
    setProducts(filterResult);
  };

  return (
    <section>
      <section className='car-filter bg-white py-5 text-black'>
        <div className='container-fluid w-75 pt-4'>
          <div className='row gap-4 car-filter_cards'>
            <div className='col-sm-12 col-lg  d-flex align-items-center gap-2 p-0'>
              <p className=' m-0 '>Car Brand:</p>
              <select
                onChange={(e) => filterBrand(e.target.value)}
                name='car-select '
                id=''
                className='pr-4 ps-2 pe-4 py-1 car-select'
              >
                <option value='Any'>Any</option>
                <option value='Nissan'>Nissan</option>
                <option value='Lexus'>Lexus</option>
                <option value='BMW'>BMW</option>
                <option value='Tesla'>Tesla</option>
              </select>
            </div>

            <div className='col-lg d-flex gap-2 p-0 align-items-center'>
              <p className=' m-0 '>Passengers:</p>
              <select
                onChange={(e) => filterPassengers(e.target.value)}
                name='passenger-filter '
                id=''
                className='pr-4 ps-2 pe-4 py-1 passenger-select'
              >
                <option value='All'>All</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>

            <div className='col-sm-12 col-lg d-flex align-items-center gap-2 p-0'>
              <p className=' m-0'>Color</p>
              <div className='car-filter_color-input d-flex justify-content-between gap-2'>
                <div className='d-flex car-filter_color-input_blue'>
                  <input
                    name=''
                    id=''
                    type='checkbox'
                    value='blue'
                    onClick={(e) => filterColor(e.target.value)}
                  ></input>
                </div>

                <div className='d-flex car-filter_color-input_white'>
                  <input
                    name=''
                    id=''
                    type='checkbox'
                    value='white'
                    onClick={(e) => filterColor(e.target.value)}
                  ></input>
                </div>

                <div className='d-flex car-filter_color-input_gray'>
                  <input
                    name=''
                    id=''
                    type='checkbox'
                    value='gray'
                    onClick={(e) => filterColor(e.target.value)}
                  ></input>
                </div>

                <div className='car-filter_color-input_black'>
                  <input
                    name=''
                    id=''
                    type='checkbox'
                    value='black'
                    onClick={(e) => filterColor(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cars -----------------------------------------------------------------------*/}
      <section className='cards text-black bg-white'>
        <Product products={products} />
      </section>
    </section>
  );
}

export default CarFilter;
