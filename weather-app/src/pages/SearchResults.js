import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { updateSearch, updateSearchState } from "../store/searchSlice";

import WeatherResults from "../components/WeatherResults";

const SearchResults = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);
  dispatch(updateSearch(""));
  dispatch(updateSearchState(false));

  return (
    <div className="d-flex justify-content-center p-5">
      {weatherData.length > 0 ? (
        <WeatherResults weatherData={weatherData} />
      ) : (
        <p className="text-center fs-2 outfit">No weather data to display</p>
      )}
    </div>
  );
};

export default SearchResults;
