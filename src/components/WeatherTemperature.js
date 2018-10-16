import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons ={

    sunny: "day-sunny",
    fog: "day-fog",    
}
const getWeatherIcon = WeatherState => {
    const icon = icons[WeatherState];
    if (icon) 
        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name={"day-sunny"} size="2x" />;

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