import React, { useEffect, useState } from "react";
import Weather from "./WeatherClass";
function WeatherCardSmall(props) {

    const [state, Setstate] = useState({
        icon: "wi wi-day-sunny",
        mintemp: 0,
        maxtemp: 0,
        id: props.id,
        day: null
    })




    useEffect(() => {

        const setclass = async () => {

            if (props.class) {
                var result = props.class.getdaydata(state.id)
                var icon = props.class.geticon(result.weather[0].main)
                var dt = result.dt * 1000
                var dateObject = new Date(dt)
                console.log(result)
                var min = Math.round(result.temp.min)
                var max = Math.round(result.temp.max)
                var day
                if (state.id === 0) day = "Today"
                else day = dateObject.toLocaleString("en-US", { weekday: "long" })

                Setstate((previous => {
                    return {
                        ...previous,
                        class: props.class,
                        min: min,
                        max: max,
                        icon: icon,
                        day: day
                    }
                }))

            }

        }

        setclass()
    }, [props.class])

    if (state.class) {
        return (
            <div className="col-auto">
                <p className="lead text-center pt-2">{state.day}</p>
                <i className={state.icon}></i>
                <p className="lead text-center pt-2"><span style={{ color: "black" }}>{state.max}°</span><span style={{ color: "grey" }}>{state.min}°</span></p>
            </div>
        )
    }
    else {
        return (null)
    }
}

export default WeatherCardSmall