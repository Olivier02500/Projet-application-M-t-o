const button = document.getElementById('submit');
const town = document.getElementById('enterCity');
let APIKey = '11c2e3a0b0601501ba2b4c39b700c3d5';

function ville (Ville) {
    let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${Ville}&appid=${APIKey}&units=metric&lang=fr`;
}

let xhr = new XMLHttpRequest();

xhr.open("GET", requestURL);
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status !== 200 ) {
        return
    }
    let responces = xhr.response
    console.log(responces)
    document.getElementById('city').innerHTML += responces.name;
    document.getElementById('sky').innerHTML += responces.weather[0].description;
    document.getElementById('degres').innerHTML += responces.main.temp + ' °C';
    document.getElementById('wind').innerHTML += responces.wind.speed + ' Km/h ';
}

xhr.send();
