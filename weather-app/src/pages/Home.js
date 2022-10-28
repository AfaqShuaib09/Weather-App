import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchWeather } from "../apis";
import { setWeather } from "../store/weatherSlice";
import { updateSearchState } from "../store/searchSlice";
import WeatherCard from "../components/WeatherCard";
import Chart from "../components/Chart";
import { CHART_LABELS, CHART_COLORS } from "../constants";

const Home = () => {
  const search = useSelector((state) => state.search.city);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const dispatch = useDispatch();
  const [weatherData, setWeatherData] = useState(null);
  dispatch(updateSearchState(true));

  useEffect(() => {
    if (search) {
      const fetchAPI = async () => {
        const data = await fetchWeather(search);
        console.log(data);
        if (data && data.name) {
          const weatherData = {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            main: data.main,
            error: "",
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
          };
          setChartData({
            labels: CHART_LABELS,
            datasets: [
              {
                label: "Weather Data",
                data: [data.main.temp, data.main.humidity, data.main.pressure],
                backgroundColor: CHART_COLORS,
                borderWidth: 4,
              },
            ],
          });

          setWeatherData(weatherData);
          dispatch(setWeather(weatherData));
        }
      };
      fetchAPI();
    }
  }, [search, dispatch]);

  return (
    <div className="mt-5 d-flex justify-content-center py-5">
      {weatherData ? (
        <>
          <div className="contaiiner mt-2">
            <WeatherCard
              city={weatherData.city}
              country={weatherData.country}
              temperature={weatherData.temperature}
              description={weatherData.description}
              icon={weatherData.icon}
              main={weatherData.main}
              date={weatherData.date}
              time={weatherData.time}
            />

            <div className="container mt-5">
              <Chart chartData={chartData} />
            </div>
          </div>
        </>
      ) : (
        <p className="text-center fs-2 outfit">
          Enter City to show weather card
        </p>
      )}

      <ToastContainer />
    </div>
  );
};

export default Home;
