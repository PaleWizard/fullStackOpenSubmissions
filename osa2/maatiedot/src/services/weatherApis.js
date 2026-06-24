import axios from "axios";

const baseurl = 'https://api.openweathermap.org/data/2.5/weather'

const getCurrentWeather = (lat, lon, appid) => {
    const url = `${baseurl}?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`
    const request = axios.get(url)
    return request.then(response => response.data)
}

export default { getCurrentWeather }