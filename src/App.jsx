import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from './views/Home';
import WeatherByDay from "./components/Weather/WeatherByDay"
import WeatherByWeek from "./components/Weather/WeatherByWeek"
import WeatherByHour from "./components/Weather/WeatherByHour"
import "./styles/index.scss"

const App = () => {
  return (
    <div className='App' >
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<WeatherByDay />} />
          <Route path="week" element={<WeatherByWeek />} />
          <Route path="hour" element={<WeatherByHour />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App