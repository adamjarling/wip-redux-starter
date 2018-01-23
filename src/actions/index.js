const API_KEY = '3853f693a179e8e9baf76720851812d6';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  }
}
