import axios from 'axios';

const API_KEY = "f7719c11f49974059e9efb30cbc1805e";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //request returns a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}