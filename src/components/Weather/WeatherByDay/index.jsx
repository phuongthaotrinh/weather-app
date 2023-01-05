import React from 'react'
import "./index.scss";
import { useSelector } from 'react-redux';
import { formatTime, getCurrentTime } from '../../../helpers';


const WeatherByDay = () => {
  const { dataLocation } = useSelector((state) => state.weatherReducer);
  console.log(dataLocation);
  return (
    <div className="weather-day">
      <div className="weather-day-inner row">
        <div className="weather-day-item">
          <div className="weather-day-content">
            <p className="title">UV index</p>
            <div className="inner-content">
              <img src="/src/assets/svg/uv.svg" alt="" />
              <p className="desc">{dataLocation?.current?.uvi}</p>
            </div>
          </div>
        </div>
        <div className="weather-day-item">
          <div className="weather-day-content">
            <p className="title">Wind Status </p>
            <div className="inner-content">
              <img src="/src/assets/svg/wind.svg" alt="" />
              <p className="desc">{`${Math.round(dataLocation?.current?.wind_speed * 3.6 * 100) / 100} km/h`}</p>
            </div>
          </div>
        </div>
        <div className="weather-day-item">
          <div className="weather-day-content">
            <p className="title">Sunrise & Sunset</p>
            <div className="inner-content two-icon">
              <div>
                <p className="text-icon">
                  <img src="/src/assets/svg/sunRise.svg" alt="" />
                  &nbsp; {formatTime(dataLocation?.current?.sunrise, false)}
                </p>
                <p className="text-icon">
                  <img src="/src/assets/svg/sunSet.svg" alt="" />
                  &nbsp; {formatTime(dataLocation?.current?.sunset)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-day-item">
          <div className="weather-day-content">
            <p className="title">Humidity</p>
            <div className="inner-content">
              <img src="/src/assets/svg/Humidity.svg" alt="" />
              <p className="desc">{dataLocation?.current?.humidity} %</p>
            </div>
          </div>
        </div>
        <div className="weather-day-item">
          <div className="weather-day-content">
            <p className="title">Visibility </p>
            <div className="inner-content">
              <img src="/src/assets/svg/visibility.svg" alt="" />
              <p className="desc">{`${dataLocation?.current?.visibility / 1000} km`}</p>
            </div>
          </div>
        </div>
        <div className="weather-day-item">
          <div className="weather-day-content">
            <p className="title">Pressure</p>
            <div className="inner-content">
              <img src="/src/assets/svg/pressure.svg" alt="" />
              <p className="desc">{dataLocation?.current?.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherByDay