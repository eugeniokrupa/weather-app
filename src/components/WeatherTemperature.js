import React from 'react';
import WeatherIcons from 'react-weathericons';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers';

const icons ={

    [SUN]: "day-sunny",    
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWeatherIcon = WeatherState => {
    const icon = icons[WeatherState];
    if (icon) 
        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name={"rain"} size="2x" />;

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
