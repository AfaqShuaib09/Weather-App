import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./style.css";
import { updateSearch } from "../../store/searchSlice";

const Navbar = () => {
  const searchState = useSelector((state) => state.search.searchState);
  const [city, setCity] = React.useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearch(city));
    console.log(city);
    setCity("");
  };

  return (
    <nav className="navbar d-flex justify-content-between bg-color p-3">
      <div className="">
        <Link className="navbar-brand" to="/">
          <span className="logo fs-4 fw-bold text-white">
            My Weather App{" "}
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="logo"
              width={30}
              height={30}
            />
          </span>
        </Link>
      </div>

      <form className="form-inline pt-2" onSubmit={(e) => onSubmit(e)}>
        <div className="flex d-flex">
          <input
            className="form-control me-1"
            type="search"
            placeholder="Enter city name"
            value={city}
            aria-label="Search"
            onChange={(e) => setCity(e.target.value)}
            disabled={searchState ? false : true}
          ></input>
          <button className="btn btn-danger" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>

      <div className="d-flex align-items-center">
        <Link className="btn btn-danger me-1 rounded-pill" to="/search">
          Get Previous Results
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
