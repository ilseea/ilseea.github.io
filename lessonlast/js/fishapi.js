// FORECAST, STATS
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=1d982ee27d3310460b15a19c65fa132b&units=imperial';

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('weather-desc').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('high-temp').textContent = jsObject.main.temp_max;

        document.getElementById('wind-speed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    });

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=1d982ee27d3310460b15a19c65fa132b&units=imperial';
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

        let day = 0;

        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp;
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`icon${day+1}`).src = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            document.getElementById(`icon${day+1}`).alt = 'A picture of ' + forecast.weather[0].main;

            day++;
        });

    });
// EVENTS

const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(eventURL)
    .then(function (response) {
        return response.json();
    })
    .then(jsonObject => {
        const townEvents = jsonObject.towns.find(town => {
            return town.name == 'Fish Haven';
        }).events;

        townEvents.forEach(event => {
            let list = document.createElement('li');

            list.innerHTML = event;

            document.getElementById('events').appendChild(list);
        });
    });