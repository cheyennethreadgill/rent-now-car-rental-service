import NavSecondary from "./Global/NavSecondary";
import Footer from "./Global/Footer";
import SocialIcons from "./Global/SocialIcons";
import { useParams } from "react-router-dom";
import products from "../components/Products/productList";

const Car = () => {
  console.log(useParams());
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, price, singleImg, brand, color } = product;

  console.log(name);

  return (
    <section className="car">
      <NavSecondary />
      <div
        className="
          jumbotron"
      >
        <img
          className="
          bg-primary
          text-primary
          position-fixed"
          src={singleImg}
        ></img>
      </div>
      <div className="container position-relative">
        <div className="jumbotron_info position-absolute z-3 d-flex flex-column">
          <h1>{brand} </h1>
          <p className="lead">Mauris semper nisl a massa convallis</p>
          <div>
            <p>
              <i className="fa-solid fa-door-closed"></i> Passengers
            </p>
          </div>
        </div>
      </div>
      <div className=" car_info ">
        <div className="container"></div>

        <section className="bg-white py-5 position-relative ">
          <div className="row container m-0 m-auto text-black">
            <div className="col">
              <div className="rounded-1 car_info_btn btn bg-primary text-white px-4 py-2 position-absolute top-0">
                <p className="m-0">From</p>
                <p className="m-0">
                  {/* <span className="fs-2 fw-bold">${cars[0].price}</span> /day */}
                  <span className="fs-2 fw-bold">${price}</span> /day
                </p>
              </div>

              <p className="mt-5">
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
            <div className="check col-lg-4">
              <div className="card pb-4 gap-4 ">
                <h5 className="card-title w-100 bg-primary text-white py-4 text-center">
                  Check Availability
                </h5>
                <div className="input-group px-4 ">
                  <i class="fa-solid fa-location-dot input-group-text"></i>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Pickup Location"
                  />
                </div>
                {/* input end */}
                <div className="input-group px-4 ">
                  <i class="fa-solid fa-location-dot input-group-text"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Drop Location"
                  />
                </div>
                {/* input end */}
                <div className="input-group px-4 ">
                  <i class="fa-solid fa-location-dot input-group-text"></i>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pickup Date"
                  />
                  <input
                    type="time"
                    name="time"
                    className="form-control"
                  />
                </div>
                {/* input end */}
                <div className="input-group px-4 ">
                  <i class="fa-solid fa-location-dot input-group-text"></i>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Drop date"
                  />
                  <input
                    type="time"
                    name="time"
                    className="form-control"
                  />
                </div>
                <button className=" btn btn-primary py-3 text-white mx-4">
                  Check Now
                </button>
              </div>
              {/* input end */}

              <div className="share d-flex gap-2 align-items-center">
                <p>Share this car: </p>
                <div className="">
                  <SocialIcons />
                </div>
              </div>
            </div>
            {/* Check Avail Card End */}
          </div>
        </section>
        <section className="bg-white pb-5">
          <div className="row container text-black m-0 m-auto">
            <div className="col">
              <h3>Facilities</h3>
              <ul className="row">
                <div className="col">
                  <li> Audio Input</li>
                  <li> Audio Input</li>
                  <li> Audio Input</li>
                </div>
                <div className="col">
                  <li> Audio Input</li>
                  <li> Audio Input</li>
                  <li> Audio Input</li>
                </div>
                <div className="col">
                  <li> Audio Input</li>
                  <li> Audio Input</li>
                  <li> Audio Input</li>
                </div>
                <div className="col">
                  <li> Audio Input</li>
                  <li> Audio Input</li>
                  <li> Audio Input</li>
                </div>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* Car Info End */}
      <Footer />
    </section>
  );
};

export default Car;
