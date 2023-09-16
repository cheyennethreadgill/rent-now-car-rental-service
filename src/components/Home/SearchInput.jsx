import { Link } from "react-router-dom";

const SearchInput = () => {
  return (
    <section className="bg-primary p-5 text-center row">
      <div className="container-fluid">
        <h2 className="mb-5 fs-2 fw-semibold">Search & Hire Cars</h2>
        <div className="car-search-form row">
          <div className="input-group col">
            <i class="input-group-text h-100 fa-solid fa-location-dot"></i>
            <input
              className="form-control"
              type="text"
              placeholder="Enter location..."
            />
          </div>

          <div className="input-group col">
            <i class="input-group-text h-100 fa-solid fa-location-dot"></i>

            <input
              className="form-control"
              type="text"
              placeholder="Drop location..."
            />
          </div>

          <div className="input-group car-search-form_date col">
            <input
              className="form-control"
              type="date"
              placeholder="Pick a date"
            />

            <input
              type="time"
              value="12:00"
            />
          </div>

          <div className="input-group col">
            <input
              type="date"
              className="form-control"
            />
            <input
              type="time"
              className="form-control"
              value="2:00"
            />
          </div>
        </div>
        {/* Row End */}
        <Link
          to="/CarSearch"
          className="btn btn-secondary px-5 py-3 mt-4 fw-semibold fs-4"
        >
          Find Now
        </Link>
      </div>
    </section>
  );
};

export default SearchInput;
