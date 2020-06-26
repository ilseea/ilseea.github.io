const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1d982ee27d3310460b15a19c65fa132b&units=imperial';
// TAKE OUT CONSOLE.LOG/.TABLE FOR THE FINAL OUT, AS FINAL VERSION. TAKE OUT THEN!
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));

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