const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1d982ee27d3310460b15a19c65fa132b&units=imperial';
// TAKE OUT CONSOLE.LOG/.TABLE FOR THE FINAL OUT, AS FINAL VERSION. TAKE OUT THEN!
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        console.log(fivedayforecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;

        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp;
            // document.getElementById(`forecast${day+1}`).textContent = forecast.weather.icon;
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`icon${day+1}`).src = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            document.getElementById(`icon${day+1}`).alt = 'A picture of ' + forecast.weather[0].main;

            day++;
        });

    });

// const imgURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=1d982ee27d3310460b15a19c65fa132b&units=imperial';
// // 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1d982ee27d3310460b15a19c65fa132b'

// fetch(imgURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//         console.log(jsObject);

//         document.getElementById('current-temp').textContent = jsObject.main.temp;

//         const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
//         const desc = jsObject.weather[0].description; // note how we reference the weather array
//         document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
//         document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
//         document.getElementById('icon').setAttribute('alt', desc);

//         icon.setAttribute('src', imagesrc);
//         icon.setAttribute('alt', desc);

//     });