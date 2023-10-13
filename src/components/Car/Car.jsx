import { Facilities } from './Facilities';
import Navigation from '../Global/Navigation/Navigation';
import Footer from '../Global/Footer';
import SocialIcons from '../Global/SocialIcons';
import { useParams } from 'react-router-dom';
import products from '../data/Products/productList';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Car = () => {
  // console.log(useParams());
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, price, singleImg, brand, color } = product;

  // console.log(product.facilities.audio);

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
        ></Image>
      </div>
      <div className='container position-relative'>
        <div className='jumbotron_info position-absolute z-3 d-flex flex-column'>
          <h1 className='fw-bold'>{brand} </h1>
          <p className='lead'>Mauris semper nisl a massa convallis</p>
          <div className='d-flex gap-4'>
            <p>
              <i className='fa-solid fa-car-side'></i> Passengers
            </p>
            <p>
              <i className='fa-solid fa-door-closed'></i> Doors
            </p>
            <p>
              <i className='fa-solid fa-gas-pump'></i> Gas
            </p>
          </div>
        </div>
      </div>
      <div className=' car_info '>
        <div className='container'></div>

        <section className='bg-white py-5 position-relative '>
          <div className='row container m-0 m-auto text-black'>
            <div className='col'>
              <div className='rounded-1 car_info_btn bg-primary text-white px-4 py-2 position-absolute top-0'>
                <p className='m-0'>From</p>
                <p className='m-0'>
                  {/* <span className="fs-2 fw-bold">${cars[0].price}</span> /day */}
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
                <br></br>
                <br></br>
                Sed laoreet, arcu fringilla fermentum rutrum, quam urna dictum
                tellus, et rutrum dui lectus ac turpis. Donec eu sem in libero
                euismod tristique vel sit amet nibh. Integer pellentesque
                fermentum mi in accumsan. Phasellus congue risus urna, eget
                maximus ante ullamcorper et. Aenean malesuada, magna a ultrices
                hendrerit, ante lectus semper odio, quis imperdiet odio tellus
                at ex. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Nunc eu tellus quam. Cras sit amet sapien at est
                lacinia consectetur in efficitur ante.
                <br></br>
                <br></br>
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
            </div>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className='check col-lg-4'
            >
              <div className='card pb-4 gap-4 '>
                <h5 className='card-title w-100 bg-primary text-white py-4 text-center'>
                  Check Availability
                </h5>
                <InputGroup className=' px-4 '>
                  <InputGroup.Text className='input-group-text-light'>
                    <i className='fa-solid fa-location-dot '></i>
                  </InputGroup.Text>
                  <Form.Label htmlFor='pickup'>
                    <Form.Control
                      id='pickup'
                      required
                      type='text'
                      className='form-control-light 
                    '
                      placeholder='Pickup Location'
                    />
                  </Form.Label>
                  <Form.Control.Feedback type='invalid'>
                    Please enter a pickup location.
                  </Form.Control.Feedback>
                </InputGroup>
                {/* input end */}
                <InputGroup className='px-4'>
                  <InputGroup.Text className='input-group-text-light'>
                    <i className='fa-solid fa-location-dot '></i>
                  </InputGroup.Text>
                  <Form.Label htmlFor='drop-off'>
                    <Form.Control
                      type='text'
                      className='form-control-light'
                      id='drop-off'
                      required
                      placeholder='Drop Location'
                    />
                  </Form.Label>
                  <Form.Control.Feedback type='invalid'>
                    Please enter a drop location.
                  </Form.Control.Feedback>
                </InputGroup>
                {/* input end */}

                <InputGroup className='px-4'>
                  <Form.Label htmlFor='pick-up'>
                    <Form.Control
                      id='pick-up'
                      type='date'
                      className='form-control-light'
                      required
                      placeholder='Pickup Date'
                    />
                  </Form.Label>

                  <Form.Control.Feedback type='invalid'>
                    Please enter a pickup date.
                  </Form.Control.Feedback>

                  <Form.Label htmlFor='pickup-time'>
                    <Form.Control
                      id='pickup-time'
                      type='time'
                      defaultValue='12:00'
                      className='form-control-light'
                      required
                    />
                  </Form.Label>

                  <Form.Control.Feedback type='invalid'>
                    Please enter a pickup time.
                  </Form.Control.Feedback>
                </InputGroup>

                {/* input end */}

                <InputGroup className='px-4'>
                  <Form.Label htmlFor='date'>
                    <Form.Control
                      id='date'
                      type='date'
                      className='form-control-light'
                      required
                      placeholder='Drop date'
                    />
                  </Form.Label>

                  <Form.Control.Feedback type='invalid'>
                    Please enter a dropoff time.
                  </Form.Control.Feedback>

                  <Form.Label htmlFor='drop-off-time'>
                    <Form.Control
                      id='drop-off-time'
                      type='time'
                      defaultValue='12:00'
                      className='form-control-light'
                      required
                    />
                  </Form.Label>

                  <Form.Control.Feedback type='invalid'>
                    Please enter a location.
                  </Form.Control.Feedback>
                </InputGroup>

                <button
                  type='submit'
                  className=' btn btn-primary py-3 text-white mx-4'
                >
                  Check Now
                </button>
              </div>
              {/* input end */}

              <div className='share d-flex gap-2 align-items-center'>
                <p>Share this car: </p>
                <div className=''>
                  <SocialIcons />
                </div>
              </div>
            </Form>
            {/* Check Avail Card End */}
          </div>
        </section>
        <Facilities product={product} />
      </div>
      {/* Car Info End */}
      <Footer />
    </section>
  );
};

export default Car;
