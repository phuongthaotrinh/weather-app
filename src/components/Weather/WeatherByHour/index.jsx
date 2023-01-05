import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { formatTime } from "../../../helpers";
import "./index.scss";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const WeatherByHour = () => {
  const { dataLocation } = useSelector((state) => state.weatherReducer);
  const hours = [];
  const temp = [];
  const feel = [];
  const getHours = dataLocation?.hourly?.map((hour) => [...hours, formatTime(hour.dt)]);
  const getTemp = dataLocation?.hourly?.map((hour) => [...temp, hour?.temp]).flat();
  const getFeelslike = dataLocation?.hourly?.map((el) => [...feel, el?.feels_like]).flat();

  const [hour, setHour] = useState({
    labels: getHours,
    datasets: [
      {
        label: " Temp (°C)",
        data: getTemp,
        borderColor: "#8e5ea2",
        fill: false,
      },
      {
        label: " Feel like (°C)",
        data: getFeelslike,
        borderColor: "#3cba9f",
        fill: false,
      },
    ],
  });

  return (
    <div className="weather-hour">
      <Line data={hour}></Line>
    </div>
  )
}

export default WeatherByHour