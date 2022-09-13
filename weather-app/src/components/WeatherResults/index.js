import React from "react";

const WeatherResults = (props) => {
  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr className="outfit bg-dark text-center">
          <th scope="col">City</th>
          <th scope="col">Country</th>
          <th scope="col">Temperature</th>
          <th scope="col">Description</th>
          <th scope="col">Icon</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
      <tbody>
        {props.weatherData.map((data, index) => (
          <tr key={index} className="text-center">
            <td>{data.city}</td>
            <td>{data.country}</td>
            <td>{data.temperature}</td>
            <td>{data.description}</td>
            <td>
              <img
                src={`http://openweathermap.org/img/w/${data.icon}.png`}
                alt="weather icon"
              />
            </td>
            <td>{data.date}</td>
            <td>{data.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherResults;
