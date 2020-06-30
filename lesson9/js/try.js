//Fetching and creating elements for home page
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const seidtowns = towns.filter(town => (
            town.name == "Preston" || town.name == "Fish Haven" || town.name == "Soda Springs"));

        seidtowns.forEach(town => {
            let townCard = document.createElement('div');
            townCard.classList.add("article");
            townCard.classList.add("card")
            let townName = document.createElement('h2');
            let motto = document.createElement('h3');
            let image = document.createElement('img');
            let year = document.createElement('p');
            let pop = document.createElement('p');
            let avgRain = document.createElement('p');

            townName.textContent = town.name;
            motto.textContent = town.motto;
            image.setAttribute('src', town.photo);
            image.setAttribute('alt', town.name);
            year.textContent = 'Founded in: ' + town.yearFounded
            pop.textContent = 'Current Population: ' + town.currentPopulation;
            avgRain.textContent = 'Average Rainfall: ' + town.averageRainfall;


            townCard.appendChild(townName);
            townCard.appendChild(motto);
            townCard.appendChild(image);
            townCard.appendChild(year);
            townCard.appendChild(pop);
            townCard.appendChild(avgRain);
            document.querySelector('div.cards').appendChild(townCard);
        });
    });