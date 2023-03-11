import React, { useState } from 'react';

const WeatherForm = ({ getWeather }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
