const Weather = ({weatherData, capitalName}) => {

    console.log(`Temperature from Weather-component: ${weatherData.main.temp}`)
    const temperature = weatherData.main.temp
    const iconId = weatherData.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`
    const windSpeed = weatherData.wind.speed

    return (
        <div>
            <h3>{`Weather in ${capitalName}`}</h3>
            <p>{`Temperature ${temperature} Celsius`}</p>
            <img src={iconUrl} />
            <p>{`Wind ${windSpeed} m/s`}</p>
        </div>
    )
}

export default Weather