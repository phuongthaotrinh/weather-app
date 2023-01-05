import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from './views/Home';




const App = () => {
  return (
    <div className='App' >
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="/" element={<WeatherByDay />} />
          <Route path="week" element={<WeatherByWeek />} />
          <Route path="hour" element={<WeatherByHour />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App