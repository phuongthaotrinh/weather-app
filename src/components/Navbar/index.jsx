import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { convertText, getCurrentTime } from "../../helpers";
import { getDataByLocation, getDataCity } from "../../redux/weatherSlice";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const { dataCity } = useSelector((state) => state.weatherReducer);
  let city = convertText("Hà Nội")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataCity(city)).unwrap()
      .then(({ coord }) => {
        let data = { lat: coord?.lat, lon: coord?.lon }
        dispatch(getDataByLocation(data))
      })
  }, [dispatch]);

  const submitData = (e) => {
    e.preventDefault();
    dispatch(getDataCity(search)).unwrap()
      .then(({ coord }) => {
        let data = { lat: coord?.lat, lon: coord?.lon }
        dispatch(getDataByLocation(data))
      })
    setSearch("")

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

        <img src={(`/src/assets/images/${filterImage}.png`)} alt="" />
        <h3>{dataCity?.name}</h3>
        <h2>{dataCity?.main?.temp}°C</h2>
        <h4> {getCurrentTime(Date.now())}</h4>
        <p> {dataCity?.weather?.[0]?.description}</p>
        <p> {dataCity?.weather?.[0]?.main} {`${dataCity?.clouds?.all} %`} </p>
        <div className="banner-side">
          <p>{dataCity?.name}</p>
          <img src={require("/src/assets/images/banner.webp")} alt="" />
        </div>

      </div>
    </div>
  );
};

export default NavBar;
