import axiosClient from "./instance";

const appID = "dc8bf24b0fde169e59a4ad7d395fbd1d";

export const WeatherApi = {
   getByCity(cityName) {
      let url = `weather?q=${cityName}&units=metric&APPID=${appID}`
      return axiosClient.get(url)
   }
}