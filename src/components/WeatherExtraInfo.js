import React from 'react';

const WeatherExtraInfo = ({ Humidity, Wind }) => (

    <div>
        <span>{`${Humidity} % - `}</span>
        <span>{`${Wind} wind`}</span>
    </div>

    ); 

    export default WeatherExtraInfo;