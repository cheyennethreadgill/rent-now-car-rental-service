import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Container, Col, Row } from 'react-bootstrap';
import Navigation from '../Global/Navigation/Navigation';
import Footer from '../Global/Footer';
import products from '../data/Products/productList';
import CarForm from '../Global/Forms/CarForm';
import Facilities from './Facilities';

const Car = () => {
  const { productId } = useParams();
  const product = products.find((prod) => {
    return prod.id === productId;
  });
  const { price, singleImg, brand } = product;

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className='car'>
      <Navigation />
      <div
        className='
          jumbotron'
      >
        <Image
          fluid
          className='
          bg-primary
          text-primary
          position-fixed'
          src={singleImg}
          alt={brand}
          width='100%'
          height='100%'
        />
      </div>
      <Container className='container position-relative'>
        <div className='jumbotron_info position-absolute z-3 d-flex flex-column'>
          <h1 className='fw-bold'>{brand} </h1>
          <p className='lead'>Mauris semper nisl a massa convallis</p>
          <div className='d-flex gap-4'>
            <p>
              <i className='fa-solid fa-car-side' /> Passengers
            </p>
            <p>
              <i className='fa-solid fa-door-closed' /> Doors
            </p>
            <p>
              <i className='fa-solid fa-gas-pump' /> Gas
            </p>
          </div>
        </div>
      </Container>
      <section className='car_info '>
        <section className='bg-white py-5 position-relative '>
          <Row className='container m-0 m-auto text-black'>
            <Col>
              <div className='rounded-1 car_info_btn bg-primary text-white px-4 py-2 position-absolute top-0'>
                <p className='m-0'>From</p>
                <p className='m-0'>
                  <span className='fs-2 fw-bold'>${price}</span> /day
                </p>
              </div>

              <p className='mt-5'>
                Praesent quis risus maximus arcu luctus egestas. Aliquam rhoncus
                metus eu dui aliquet, ut imperdiet metus fringilla. Nulla non
                purus et odio varius condimentum. Maecenas et elit eu lectus
                feugiat congue. Aenean dictum ligula vitae orci congue, eu
                rutrum ex tempus. Donec vel ex a neque congue volutpat. Mauris
                nec purus eget velit elementum posuere. Donec libero nisi,
                blandit non turpis sed, hendrerit suscipit metus. Aliquam ornare
                tincidunt dictum.
                <br />
                <br />
                Sed laoreet, arcu fringilla fermentum rutrum, quam urna dictum
                tellus, et rutrum dui lectus ac turpis. Donec eu sem in libero
                euismod tristique vel sit amet nibh. Integer pellentesque
                fermentum mi in accumsan. Phasellus congue risus urna, eget
                maximus ante ullamcorper et. Aenean malesuada, magna a ultrices
                hendrerit, ante lectus semper odio, quis imperdiet odio tellus
                at ex. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Nunc eu tellus quam. Cras sit amet sapien at est
                lacinia consectetur in efficitur ante.
                <br />
                <br />
                Nulla pellentesque metus et rutrum placerat. Aliquam erat
                volutpat. Donec pellentesque neque mi, ac tristique purus
                vestibulum et. Donec sagittis laoreet mauris, eget interdum
                tortor gravida nec. Maecenas suscipit nisi ex, eu dictum enim
                accumsan ut. Pellentesque vel sagittis ex. Duis vitae est ut
                diam blandit consectetur in eget risus. Donec faucibus ex
                consectetur, sodales quam ac, feugiat mi. Sed ultrices mi ac
                ultricies egestas. In varius ligula a ipsum facilisis, quis
                ornare neque euismod.
              </p>
            </Col>

            <CarForm
              validated={validated}
              handleSubmit={handleSubmit}
            />
          </Row>
        </section>

        <Facilities product={product} />
      </section>

      <Footer />
    </section>
  );
};

export default Car;
