import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherExtraInfo Humidity={17} Wind={"12 m/s"} />
        <WeatherTemperature 
        temperature={"20"} 
        WeatherState={"RAIN"} 
    />

    </div>
);

export default WeatherData;