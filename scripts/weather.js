// Weather API - OpenWeatherMap
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const city = 'Rexburg'; // Or your city
const country = 'US'; // Your country code
const units = 'imperial'; // For Fahrenheit

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${units}&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');
    const weatherIcon = document.getElementById('weather-icon');
    
    // Temperature
    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    
    // Condition
    condition.textContent = data.weather[0].description;
    
    // Icon
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const iconImg = document.createElement('img');
    iconImg.src = iconUrl;
    iconImg.alt = data.weather[0].description;
    weatherIcon.appendChild(iconImg);
}

// Call the function when the page loads
window.addEventListener('load', getWeather);