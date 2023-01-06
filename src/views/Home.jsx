import React from 'react';
import NavBar from '../components/Navbar';
import Weather from '../components/Weather';
import "./index.scss";

const Home = () => {
   return (
      <div className="homepage">
         <NavBar />
         <Weather />
      </div>
   )
}

export default Home