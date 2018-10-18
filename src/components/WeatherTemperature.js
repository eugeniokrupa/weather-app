import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons ={

    sunny: "day-sunny",
    fog: "day-fog",    
    cloud: "cloud",
    cloudy: "cloudy",
    rain: "rain",
    snow: "snow",
    windy: "windy",
};

const getWeatherIcon = WeatherState => {
    const icon = icons[WeatherState];
    if (icon) 
        return <WeatherIcons name={icon} size="2x" />;
    else
<<<<<<< HEAD
        return <WeatherIcons name={"cloudy"} size="2x" />;
=======
        return <WeatherIcons name={"rain"} size="2x" />;
>>>>>>> 9c429cdb62fba486b384521c08006c7ebfd0f01f

}

const WeatherTemperature = ({ temperature, WeatherState }) => (
    <div>
        {
        
            getWeatherIcon(WeatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
); 

export default WeatherTemperature;
