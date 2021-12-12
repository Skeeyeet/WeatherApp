import React from "react";

function WeatherCardSmall(props){

    return(
        <div className="col-md-auto">
            <p className="lead text-center pt-2">Today</p>
            <i className="wi wi-day-sunny"></i>
            <p className="lead text-center pt-2">40c</p>
        </div>
        )
}

export default WeatherCardSmall