const icon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temperature-value p');
const description = document.querySelector('.temperature-description p');
const locationElem = document.querySelector('.location p');
const notification = document.querySelector('.notification');

const weather = {};
weather.temperature = {
    unit: 'celsius'
}
const kelvin = 273;
const key = 'e8b5256238bff666cd9940087de29dc0';

let displayWeather = () => {
    icon.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    temp.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    description.innerHTML = weather.description;
    locationElem.innerHTML = `${weather.city}, ${weather.country}`;
}

let getWeather = (latitude, longitude) => {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    fetch(api).then(response => {
        let data = response.json();
        return data;
    }).then(data => {
        weather.temperature.value = Math.floor(data.main.temp - kelvin);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    }).then(() => displayWeather());
}

let setPosition = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

let showError = (e) => {
    notification.style.display = 'block';
    notification.innerHTML = `<P>${e.message}</P>`;
}

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notification.style.display = 'block';
    notification.innerHTML = '<P>Вы не разрешили использовать геопозицию</P>'
}

let celsToFahrenheit = (temperature) => {
    return (temperature * 9 / 5) + 32;
}

temp.addEventListener('click', () => {
    if (weather.temperature.value === undefined) return;
    if (weather.temperature.unit == 'celsius') {
        let fahrenheit = celsToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        temp.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = 'fahrenheit';
    } else {
        temp.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = 'celsius';
    }
})