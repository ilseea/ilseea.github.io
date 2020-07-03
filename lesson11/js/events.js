const eventAPI = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(eventAPI)
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