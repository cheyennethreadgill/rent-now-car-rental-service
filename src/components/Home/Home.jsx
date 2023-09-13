// import Nav from "../Global/Nav"
import NavSecondary from "../Global/NavSecondary";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Footer from "../Global/Footer";
import PopularCars from "./PopularCars";

function Home() {
  return (
    <section className="position-relative">
      <NavSecondary />
      <Header />
      <SearchInput />
      <section className="bg-white py-5 text-black">
        <div className="container">
          <h2 className=" text-center mt-5">Why People Like Us?</h2>
          <p className=" text-center mb-5">
            Inbecilloque elegans errorem concedo etsi electram.
          </p>

          <div className="row">
            <div className="row">
              <div className="col">
                <li className="list-bullet text-primary">
                  <h5 className="text-black">Best Price Guarantee</h5>
                </li>
                <p>
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </div>
              <div className="col">
                <li className="text-primary text-decoration-bullet">
                  <h5 className="text-black">Best Price Guarantee</h5>
                </li>
                <p>
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </div>
              <div className="col">
                <li className="text-primary text-decoration-bullet">
                  <h5 className="text-black">Best Price Guarantee</h5>
                </li>
                <p>
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </div>
              <div className="col">
                <li className="text-primary text-decoration-bullet">
                  <h5 className="text-black">Best Price Guarantee</h5>
                </li>
                <p>
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <li className="text-primary text-decoration-bullet">
                  <h5 className="text-black">Best Price Guarantee</h5>
                </li>
                <p>
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </div>
              <div className="col">
                <li className="text-primary text-decoration-bullet">
                  <h5 className="text-black">Best Price Guarantee</h5>
                </li>
                <p>
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </div>
              <div className="col">
                <li className="text-primary text-decoration-bullet">
                  <h5 className="text-black">Best Price Guarantee</h5>
                </li>
                <p>
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </div>
              <div className="col">
                <li className="text-primary text-decoration-bullet">
                  <h5 className="text-black">Best Price Guarantee</h5>
                </li>
                <p>
                  Duis placerat tempus odio vel pretium. Vestibulum mattis
                  viverra justo vel consequat.
                </p>
              </div>
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
