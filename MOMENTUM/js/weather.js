const API_KEY = "d0a273dbd6aacce5b1ea2bc6c8832ebf";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            const name = data.name;
            const weather = data.weather[0].main;
            city.innerText = name;
            weatherContainer.innerText = `${weather}/ ${data.main.temp}`;
            
        });    
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

