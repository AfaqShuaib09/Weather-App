import axios from "axios";
import { toast } from "react-toastify";
import { API_OPENWEATHER_KEY } from "./config";

const API_KEY = API_OPENWEATHER_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (query) => {
  try {
    const { data } = await axios.get(API_URL, {
      params: {
        q: query,
        units: "metric",
        APPID: API_KEY,
      },
    });
    return data;
  } catch (error) {
    const errorCode = error.response.status;
    const errorMessage = error.response.data.message;

    toast.error(`${errorCode} : ${errorMessage}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
