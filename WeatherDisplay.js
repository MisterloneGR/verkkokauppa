import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      <h2>Weather for {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} &#8451;</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
