import weatherApis from "../services/weatherApis"
import { useState, useEffect } from "react";
import Weather from "./Weather";

const CountryDetails = ({country}) => {
    const [weather, setWeather] = useState(null)

    console.log(country)

    const countryName = country.name.common
    const capital = country.capital[0]
    const area = `Area: ${country.area}`
    const flagUrl = country.flags.png
    const capitalLatitude = country.capitalInfo.latlng[0] //for weather-info
    const capitalLongitude = country.capitalInfo.latlng[1] //for weather-info

    const lang = Object.entries(country.languages).map(([key, value]) => {
        return <li key={key}>{value}</li>
    })

    console.log(`Capital's latitude: ${capitalLatitude}`)
    console.log(`Capital's longitude: ${capitalLongitude}`)

    const weatherApiKey = import.meta.env.VITE_WEATHER_APIKEY
    
    useEffect(() => {
        console.log(`Effect run on CountryDetails.`)
            weatherApis.getCurrentWeather(capitalLatitude, capitalLongitude, weatherApiKey)
            .then(weather => setWeather(weather))
    }, [capitalLatitude, capitalLongitude])

    console.log(weather)

    return (
        <div>
            <h2>{countryName}</h2>
            <p>{`Capital: ${capital}`}</p>
            <p>{area}</p>
            <h3>Languages</h3>
            <ul>{lang}</ul>
            <img className="flag" src={flagUrl}/>
            {weather && <Weather weatherData={weather} capitalName={capital}/>}
        </div>
    )
}

export default CountryDetails