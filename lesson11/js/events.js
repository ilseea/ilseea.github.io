const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const result = towns.filter(town => (
            town.name == 'Fish Haven' || town.name == 'Preston' || town.name == 'Soda Springs'));
        // console.log(jsObject);
        result.forEach(town => {
            let towncard = document.createElement('article');
            towncard.classList.add("towncard");


            let towndetail = document.createElement('div');
            towndetail.classList.add("towndetail")
            let name = document.createElement('h4');
            let calendar = document.createElement('h5');




            name.textContent = town.name;
            calendar.textContent = `"${town.events}"`;


            towndetail.appendChild(name);
            towndetail.appendChild(calendar);

            towncard.appendChild(towndetail);


            document.querySelector('ul#fishcards').appendChild(towncard);
        });






    });