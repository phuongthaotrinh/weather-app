import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.scss"
import { useSelector } from "react-redux";

function Weather(props) {
   let activeStyle = {
      color: "#212529",
      borderBottom: "3px solid #212529",
   };
   let { msg } = useSelector((state) => state.weatherReducer);
   
   return (
      <div className="weather">
         {msg && <div className="error_msg">{msg}</div>}
         <nav>
            <ul>
               <li>
                  <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}      >
                     Today
                  </NavLink>
               </li>
               <li>
                  <NavLink to="week" style={({ isActive }) => (isActive ? activeStyle : undefined)}   >
                     Week
                  </NavLink>
               </li>
               <li>
                  <NavLink to="hour" style={({ isActive }) => (isActive ? activeStyle : undefined)}  >
                     Hour
                  </NavLink>
               </li>
            </ul>
            <img src={("/src/assets/images/avt.png")} alt="" />
         </nav>

         <Outlet />
      </div>
   );
}

export default Weather;
