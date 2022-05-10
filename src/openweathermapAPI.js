async function getWeather(location){
    if(location == null){
        location ="ho chi minh";
    }
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d2a0fba124c539238ea24f0b78fc9adc`, {mode: "cors"});
    const dataJSON = await data.json();
    return dataJSON;
}
export default getWeather;