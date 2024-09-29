const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location.');
    }
});

function getWeather(location) {
    const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found.');
            }
        })
        .catch(error => {
            alert('Error fetching weather data.');
            console.error(error);
        });
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.innerHTML = `
        <p><strong>${data.name}</strong></p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}