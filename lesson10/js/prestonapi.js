const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=1d982ee27d3310460b15a19c65fa132b&units=imperial';
// 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1d982ee27d3310460b15a19c65fa132b'

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('weather-desc').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('high-temp').textContent = jsObject.main.temp_max;

        document.getElementById('wind-speed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;

        // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        // const desc = jsObject.weather[0].description; // note reference of weather array
        // document.getElementById('imagesrc').textContent = imagesrc; // informational spec only
        // document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        // document.getElementById('icon').setAttribute('alt', desc);

        // icon.setAttribute('src', imagesrc);
        // icon.setAttribute('alt', desc);

    });

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1d982ee27d3310460b15a19c65fa132b&units=imperial';
// TAKE OUT CONSOLE.LOG/.TABLE FOR THE FINAL OUT, AS FINAL VERSION. TAKE OUT THEN!
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        console.log(fivedayforecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;

        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp;
            // document.getElementById(`forecast${day+1}`).textContent = forecast.weather.icon;
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            day++;
        });
        // can use ARRAY

    });

// THIS IS FROM THE LAB VIDEO WK10
// const currentTemp = document.querySelector('#current-temp');
// const icon = document.querySelector('img');

// currentTemp.textContent = jsObject.main.temp;

// const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
// const desc = jsObject.weather[0].description;