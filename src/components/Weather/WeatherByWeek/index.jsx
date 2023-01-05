import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatTime } from "../../../helpers";
import "./index.scss";

function WeatherByWeek(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const { dataLocation } = useSelector((state) => state.weatherReducer);

  const [detail, setDetails] = useState(dataLocation?.daily?.[0]);

  const dateFormat = (strDate) => {
    const date = new Date(strDate * 1000);
    return (
      days[date.getDay()] + ", " + date.getDate() + "/" + (date.getMonth() + 1)
    );
  };

  return (
    <div className="weather-week">
      <div className="weather-week-inner">
        {dataLocation?.daily?.map((day, index) => (
          <div
            key={index}
            onClick={() => setDetails(day)}
            className="weather-week-item"
          >
            <div
              className={`${day?.dt === detail?.dt ? "bg-day" : ""
                } weather-week-content`}
            >
              <p className="title">{dateFormat(day?.dt)}</p>
              <div className="inner-content">
                <img
                  src={`https://openweathermap.org/img/w/${day?.weather?.[0]?.icon}.png`}
                  alt=""
                />
                <p>
                  {Math.round(day?.temp?.min)}° - {Math.round(day?.temp?.max)}°
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="day-week">
        <p>{dateFormat(detail?.dt)}</p>
        <div className="day-week-inner">
          <div className="left">
            <p>Temp current : {detail?.temp?.day} °C</p>
            <p>
              Temp : {detail?.temp?.min} °C - {detail?.temp?.max} °C
            </p>
            <p>Humidity : {detail?.humidity} %</p>
            <p>
              Wind speed : {Math.round(detail?.wind_speed * 3.6 * 100) / 100}{" "}
              km/h
            </p>
          </div>
          <div className="right">
            <p>Sunrise : {formatTime(detail?.sunrise)}</p>
            <p>Sunset : {formatTime(detail?.sunrise)}</p>
            <p>Description : {detail?.weather[0]?.description}</p>
            <p>Atmospheric pressure : {detail?.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherByWeek;
