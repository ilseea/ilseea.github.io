const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');

            let image = document.createElement('img');

            h2.textContent = towns[i].name;
            year.textContent = 'Year Founded:' + ' ' + towns[i].yearFounded;
            population.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;

            image.setAttribute('src', towns[i].imageurl);
            image.setAttribute('alt', towns[i].name + ' ' + towns[i].lastname + '- ' + towns[i].order);

            card.appendChild(h2);
            card.appendChild(year);
            card.appendChild(population);
            card.appendChild(rain);

            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }
    });