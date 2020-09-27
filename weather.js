const weather = document.querySelector(".js-weather")

const COORDS = 'coords';
const API_KEY = "8a9ec30a2155643a638723b6f7dc7abf"

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
        .then(function (response){
            return response.json();
        })
        .then(function (json){
            const temperature = parseInt(json.main.temp/1);
            const weath = json.weather[0].main;
            const place = json.name;
            weather.innerText = `현재 위치의 온도 
            ${temperature}℃, ${weath}`;
        });


}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function  handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}
function  handleGeoError(){
    console.log("cant access")
}

function  askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function  loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude)
    }
}

function init(){
    loadCoords();
}

init();