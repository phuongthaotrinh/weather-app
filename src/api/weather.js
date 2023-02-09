import axiosClient from "./instance";

let APIKEY = "e5f1e0e91073e047bfd37039ad433153"

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
