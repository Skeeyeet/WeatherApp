import React,{useEffect,useState} from "react";
import WeatherCardSmall from "./WeatherCardSmall";
import WeatherClass from './WeatherClass'

function MainWeatherComponent(){

    const [Weather,SetWeather] = useState({
        class:null
    })

    useEffect(()=>{
       
        const getdata = async()=>{
            console.log('hello')
        } 

        var weatherclass = new WeatherClass()
        SetWeather({class:weatherclass})
        getdata()
    },[])

    return(
        <div className="row justify-content-md-center">
            
            <WeatherCardSmall/>
            <WeatherCardSmall/>
            <WeatherCardSmall/>
            <WeatherCardSmall/>
            <WeatherCardSmall/>
            <WeatherCardSmall/>

        </div>
    )
}

export default MainWeatherComponent