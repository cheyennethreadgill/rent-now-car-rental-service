function CarFilter() {
  return (
    <section className="car-filter bg-light py-5 text-black">
      <div className="container w-75 pt-4">
        <div className="row">
          <div className="col d-flex align-items-center gap-2 p-0">
            <p className="">Car Brand:</p>
            <select
              name="car-select "
              id=""
              className="car-select"
            >
              <option value="Any">Any</option>
              <option value="Rover">Nissan</option>
              <option value="Lexus">Lexus</option>
              <option value="BMW">BMW</option>
              <option value="Tesla">Tesla</option>
            </select>
          </div>
          <div className="col d-flex align-items-center gap-2 p-0">
            <p className="">Passengers:</p>
            <select
              name="passenger-filter "
              id=""
              className="passenger-select"
            >
              <option value="Any">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="col d-flex align-items-center justify-content-end gap-2 p-0">
            <p className="">Color</p>
            <div className="car-filter_color-input d-flex justify-content-between gap-2">
              <div className="d-flex">
                <label htmlFor="car-filter">Red</label>
                <input
                  name="car-filter_color-input_red"
                  id=""
                  type="checkbox"
                  value="red"
                ></input>
              </div>

              <div className="d-flex">
                <label htmlFor="car-filter">Blue</label>
                <input
                  name="car-filter_color-input_blue"
                  id=""
                  type="checkbox"
                  value="blue"
                ></input>
              </div>

              <div className="d-flex">
                <label htmlFor="car-filter">White</label>
                <input
                  name="car-filter_color-input_white"
                  id=""
                  type="checkbox"
                  value="white"
                ></input>
              </div>

              <div className="d-flex">
                <label htmlFor="car-filter">Grey</label>
                <input
                  name="car-filter_color-input_grey"
                  id=""
                  type="checkbox"
                  value="grey"
                ></input>
              </div>

              <div className="">
                <label htmlFor="car-filter">Black</label>
                <input
                  name="car-filter_color-input_black"
                  id=""
                  type="checkbox"
                  value="black"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarFilter;
