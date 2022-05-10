import './style.css';
import getWeather from './openweathermapAPI';

const searchInput = document.querySelector('#searchInput');
const submitBtn = document.querySelector('#searchBtn');
let location;
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    location = searchInput.value;
    getWeather(location).then(data => console.log(data));
})
