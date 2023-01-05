import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { convertText, getCurrentTime } from "../../helpers/useConvertWord";
import { getDataCity } from "../../redux/weatherSlice";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const { dataCity } = useSelector((state) => state.weatherReducer);

  let city = "Hà Nội"
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataCity(city))
  }, [dispatch]);


  console.log("dataCity0", dataCity);
  const submitData = (e) => {
    e.preventDefault();
    dispatch(getDataCity(search))
  };

  const handleFindCity = (e) => {
    e.preventDefault();
    setSearch(convertText(e.target?.value));
  };

  const filterImage = dataCity?.weather?.[0]?.main ?? "atmosphere"

  return (
    <div className="side-bar">
      <div className="side-bar-inner">
        <form onSubmit={submitData}>
          <input
            placeholder="Search..."
            className="search"
            type="text"
            onChange={(e) => handleFindCity(e)}
          />
        </form>
        <img src={(`/src/images/${filterImage}.png`)} alt="" />

        <h3>{dataCity?.name}</h3>
        <h2>{dataCity?.main?.temp}°C</h2>
        <h4> {getCurrentTime(Date.now())}</h4>
        <div className="banner-side">
          <p>{dataCity?.name}</p>
          <img src={("/src/images/banner.webp")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
