// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherDisplay = document.getElementById('weatherDisplay');
  
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  
    getWeatherBtn.addEventListener('click', () => {
      const city = cityInput.value.trim();
      if (city === '') {
        alert('Please enter a city name.');
        return;
      }
  
      fetch($,{apiUrl}?q=$:{city}&appid,$,{apiKey}&units,metric)
        .then((response) => {
          if (!response.ok) {
            throw new Error('City not found.');
          }
          return response.json();
        })
        .then((data) => {
          displayWeather(data);
        })
        .catch((error) => {
          displayError(error.message);
        });
    });
  
    function displayWeather(data) {
      const { name, main, weather } = data;
      const temperature = main.temp;
      const humidity = main.humidity;
      const description = weather[0].description;
  
      const weatherHTML = `
        <div class="weather-card">
          <h2>${name}</h2>
          <p><strong>Temperature:</strong> ${temperature}°C</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
          <p><strong>Conditions:</strong> ${description}</p>
        </div>
      `;
  
      weatherDisplay.innerHTML = weatherHTML;
    }
  
    function displayError(message) {
      weatherDisplay.innerHTML = <p class="error">${message}</p>;
    }
  });