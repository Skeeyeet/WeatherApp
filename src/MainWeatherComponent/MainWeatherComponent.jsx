import React, { useEffect, useState } from "react";
import WeatherCardSmall from "./WeatherCardSmall";
import WeatherClass from './WeatherClass';
require("dotenv").config();

function MainWeatherComponent() {

    const [Weather, SetWeather] = useState({
        class: null
    })

    useEffect(() => {
        //https://api.openweathermap.org/data/2.5/forecast?id=${process.env.REACT_APP_CITYID}&units=metric&appid=${process.env.REACT_APP_WEATHERAPI}
        const getdata = async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=-37.840935&lon=144.946457&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_WEATHERAPI}`, {
                method: "GET"
            }).then((async response => {
                var newresponse = await response.text()
                newresponse = await JSON.parse(newresponse)
                var weatherclass = new WeatherClass(newresponse)
                SetWeather({ class: weatherclass })
            }))
        }

        getdata()
    }, [])

    return (
        <div className="row justify-content-md-center">

            <WeatherCardSmall id={0} class={Weather.class} />
            <WeatherCardSmall id={1} class={Weather.class} />
            <WeatherCardSmall id={2} class={Weather.class} />
            <WeatherCardSmall id={3} class={Weather.class} />
            <WeatherCardSmall id={4} class={Weather.class} />
            <WeatherCardSmall id={5} class={Weather.class} />
            <WeatherCardSmall id={6} class={Weather.class} />
            <WeatherCardSmall id={7} class={Weather.class} />

        </div>
    )
}

export default MainWeatherComponent