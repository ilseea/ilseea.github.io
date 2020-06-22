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
            let towncard = document.createElement('section');
            towncard.classList.add("towncard");


            let towndetail = document.createElement('div');
            towndetail.classList.add("towndetail")
            let name = document.createElement('h2');
            let slogan = document.createElement('h3');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');

            let townpicture = document.createElement('div');
            townpicture.classList.add("townpicture")
            let image = document.createElement('img');

            name.textContent = town.name;
            slogan.textContent = town.motto;
            year.textContent = 'Year Founded:' + ' ' + town.yearFounded;
            population.textContent = 'Population:' + ' ' + town.currentPopulation;
            rain.textContent = 'Annual Rain Fall:' + ' ' + town.averageRainfall + ' inches';


            image.setAttribute('src', town.photo);
            image.setAttribute('alt', town.name);

            towndetail.appendChild(name);
            towndetail.appendChild(slogan);
            towndetail.appendChild(year);
            towndetail.appendChild(population);
            towndetail.appendChild(rain);
            towncard.appendChild(towndetail);

            townpicture.appendChild(image);
            towncard.appendChild(townpicture);


            document.querySelector('div.cards').appendChild(towncard);
        });
    });