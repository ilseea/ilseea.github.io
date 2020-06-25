const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=1d982ee27d3310460b15a19c65fa132b&units=imperial';
// 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1d982ee27d3310460b15a19c65fa132b'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current-temp').textContent = jsObject.main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        // note the concatenation
        const desc = jsObject.weather[0].description;
        // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;
        // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);
        // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);

        icon.setAttribute('src', imagesrc);
        icon.setAttribute('alt', desc);

    });


// THIS IS FROM THE LAB VIDEO WK10
// const currentTemp = document.querySelector('#current-temp');
// const icon = document.querySelector('img');

// currentTemp.textContent = jsObject.main.temp;

// const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
// const desc = jsObject.weather[0].description;