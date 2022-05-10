import './asset/style.css';
import getWeather from './openweathermapAPI';
import feelsLikePng from './asset/img/thermometer-lines.png';
import humidityPng from './asset/img/water-percent.png'
import pressurePng from './asset/img/pressure.png'


const searchInput = document.querySelector('#searchInput');
const submitBtn = document.querySelector('#searchBtn');
let location;
const cityName = document.querySelector('.city-name');
const currentTime = document.querySelector('.current-time');
const currentTemp = document.querySelector('.current-temperature');
const currentWeather = document.querySelector('.current-weather');
const currentWeatherIco = document.querySelector('.weather-icon');
const feelsLike = document.querySelector('.feels-like');
const humidity
= document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');

const feelsLikeIcon = document.querySelector('.feels-like-icon');
feelsLikeIcon.src= feelsLikePng;
const humidityIcon = document.querySelector('.humidity-icon');
humidityIcon.src= humidityPng;
const pressureIcon = document.querySelector('.pressure-icon');
pressureIcon.src= pressurePng;


function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
}
function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    location = searchInput.value;
    getWeather(location).then(data => {
        console.log(data);
        cityName.textContent = data.name;
        currentTime.textContent = getFormattedDate(toDateTime(data.dt));
        currentTemp.innerHTML = data.main.temp + " &#8451" ;
        currentWeather.textContent = data.weather[0].main;
        currentWeatherIco.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        feelsLike.innerHTML = data.main.feels_like + " &#8451" ;
        humidity.textContent = data.main.humidity;
        pressure.textContent = data.main.pressure ;
    });
})
getWeather(location).then(data => {
    console.log(data);
    cityName.textContent = data.name;
    currentTime.textContent = getFormattedDate(toDateTime(data.dt));
    currentTemp.innerHTML = data.main.temp + " &#8451" ;
    currentWeather.textContent = data.weather[0].main;
    currentWeatherIco.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    feelsLike.innerHTML = data.main.feels_like + " &#8451" ;
    humidity.textContent = data.main.humidity;
    pressure.textContent = data.main.pressure ;
});

