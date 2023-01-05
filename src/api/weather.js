import axiosClient from "./instance";

let APIKEY = `${import.meta.env.VITE_API_KEY}`

export const WeatherApi = {
   getByCity(cityName) {
      let url = `weather?q=${cityName}&units=metric&appid=${APIKEY}`
      return axiosClient.get(url)
   },
   getByLocation(input) {
      let url = `onecall?lat=${input?.lat}&lon=${input?.lon}&units=metric&appid=${APIKEY}`
      return axiosClient.get(url)
   }
}