import React from "react";
import { UilTemperature, UilWind } from "@iconscout/react-unicons";

const WeatherCard = (props) => {
  return (
    <div className="card px-5">
      <div className="card-body ms-3">
        <p className="card-title fs-3 outfit">
          {props.city}, {props.country}
        </p>
        <p className="card-text">
          {props.temperature}°C, {props.description}
        </p>
        <img
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
          alt="weather icon"
          width={150}
          height={150}
        />
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="fw-bold">Date:</span> {props.date}
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Time:</span> {props.time}
        </li>
        <li className="list-group-item">
          <span className="fw-bold me-2">
            Humidity <i className="bi bi-moisture"> </i> :
          </span>
          {props.main.humidity}
        </li>
        <li className="list-group-item">
          <span className="fw-bold me-2">
            Pressure <UilWind size="15" /> :
          </span>
          {props.main.pressure}
        </li>
        <li className="list-group-item">
          <span className="fw-bold me-2">
            Feels Like <UilTemperature size="15" />:
          </span>
          {props.main.feels_like}
        </li>
      </ul>
    </div>
  );
};

export default WeatherCard;
