const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const result = towns.filter(town => (
            town.name == 'Fish Haven' || town.name == 'Preston' || town.name == 'Soda Springs'));

        result.forEach(town => {
            let card = document.createElement('section');
            card.classList.add("article");
            card.classList.add("card")
            let name = document.createElement('h2');
            let slogan = document.createElement('h3');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');
            // let image = document.createElement('img');

            name.textContent = town.name;
            slogan.textContent = town.motto;
            year.textContent = 'Year Founded:' + ' ' + town.yearFounded;
            population.textContent = 'Population:' + ' ' + town.currentPopulation;
            rain.textContent = 'Annual Rain Fall:' + ' ' + town.averageRainfall + ' inches';
            // image.setAttribute('src', town[i].imageurl);
            // image.setAttribute('alt', town[i].name + ' ' + town[i].lastname + '- ' + towns[i].order);

            card.appendChild(name);
            card.appendChild(slogan);
            card.appendChild(year);
            card.appendChild(population);
            card.appendChild(rain);
            // card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        });
    });