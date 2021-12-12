class Weather {

    constructor(dates) {
        this.dates = dates
        this.current = null
    }

    getdaydata(day) {
        return this.dates.daily[day]
    }


    geticon(type) {
        switch (type) {
            case 'Rain':
                return ("wi wi-rain")


            case 'Clouds':
                return ("wi wi-cloudy")


            case 'Clear':
                return ("wi wi-cloud")


            case 'Drizzle':
                return ("wi wi-raindrops")


            case 'Snow':
                return ("wi wi-snowflake-cold")


            default:
                return ("wi wi-day-sunny")

        }
    }

}

export default Weather