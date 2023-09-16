// import Nav from "../Global/Nav"
import NavSecondary from "../Global/NavSecondary";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Footer from "../Global/Footer";
import PopularCars from "./PopularCars";

function Home() {
  return (
    <section className="position-relative home">
      <NavSecondary />
      <Header />
      <SearchInput />
      <section className="bg-white py-5 text-black people-like-us">
        <div className="container">
          <h2 className=" text-center mt-5 fs-2 fw-semibold">
            Why People Like Us?
          </h2>
          <p className=" text-center mb-5">
            Inbecilloque elegans errorem concedo etsi electram.
          </p>

          <div className="row gap-5">
            <div className="row gap-4">
              <div className="dot "></div>
              <li className="col">
                <h5 className="text-black">Best Price Guarantee</h5>
                <p className="fs-5">
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </li>
              <div className="dot "></div>
              <li className="col">
                <p className="">
                  <h5 className="text-black">Personal Driver</h5>
                </p>
                <p className="fs-5">
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </li>
              <div className="dot "></div>
              <li className="col">
                <p className="">
                  <h5 className="text-black">No Cancellation Fees</h5>
                </p>
                <p className="fs-5">
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </li>
              <div className="dot "></div>
              <li className="col">
                <p className="">
                  <h5 className="text-black">Unlimited Miles</h5>
                </p>
                <p className="fs-5">
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </li>
            </div>
            <div className="row gap-4">
              <div className="dot "></div>
              <li className="col">
                <p className="">
                  <h5 className="text-black">Best Quality Cars</h5>
                </p>
                <p className="fs-5">
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </li>
              <div className="dot "></div>
              <li className="col">
                <p className="">
                  <h5 className="text-black">City to City</h5>
                </p>
                <p className="fs-5">
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </li>
              <div className="dot "></div>
              <li className="col">
                <p className="">
                  <h5 className="text-black">Reservation Anytime</h5>
                </p>
                <p className="fs-5">
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </li>
              <div className="dot "></div>
              <li className="col">
                <p className="">
                  <h5 className="text-black">24/7 Customer Support</h5>
                </p>
                <p className="fs-5">
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </li>
            </div>
          </div>
        </div>
      </section>
      <PopularCars />
      {/* Footer--------- */}
      <Footer />
    </section>
  );
}

export default Home;
