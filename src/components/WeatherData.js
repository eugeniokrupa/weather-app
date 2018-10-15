import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
    <div>
        <WeatherExtraInfo Humidity={17} Wind={"12 m/s"} />
        <WeatherTemperature />

    </div>
);

export default WeatherData;