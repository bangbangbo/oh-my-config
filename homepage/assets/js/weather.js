const iconElement = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.weatherValue p');
const descElement = document.querySelector('.weatherDescription p');

const weather = {};
weather.temperature = { unit: 'celsius' };

const tempUnit = CONFIG.weatherUnit;
const KELVIN = 273.15;
const key = CONFIG.weatherKey;

// const LATITUDE = x;
// const LONGITUDE = y;

getWeather(LATITUDE, LONGITUDE);

function getWeather(latitude, longitude) {
	const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${CONFIG.language}&appid=${key}`;

	fetch(api)
		.then(response => response.json())
		.then(data => {
			const celsius = Math.floor(data.main.temp - KELVIN);
			weather.temperature.value =
				tempUnit === 'C' ? celsius : (celsius * 9) / 5 + 32;
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;
		})
		.then(displayWeather)
		.catch(err => console.error('Weather error:', err));
}

function displayWeather() {
	iconElement.innerHTML = `<img src="assets/icons/${CONFIG.weatherIcons}/${weather.iconId}.png" />`;
	tempElement.innerHTML = `${weather.temperature.value.toFixed(0)}°<span class="darkfg">${tempUnit}</span>`;
	descElement.innerHTML = weather.description;
}