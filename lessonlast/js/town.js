const requestURL = '/data/rent.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
        console.log(response);
    })

    .then(function (jsonObject) {
        const vehicles = jsonObject['vehicles'];
        const result = vehicles.filter(rent => (
            rent.rentaltype == 'Honda Metro Scooter' || rent.rentaltype == 'Honda Dio Scooter' || rent.rentaltype == 'Honda PCX150 Scooter'));

        result.forEach(rent => {
            let rentcard = document.createElement('article');
            rentcard.classList.add("rentcard");


            let rentdetail = document.createElement('div');
            rentdetail.classList.add("rentdetail")
            let rentaltype = document.createElement('h3');
            let max = document.createElement('h4');
            // let year = document.createElement('p');
            // let population = document.createElement('p');
            // let rain = document.createElement('p');

            // let rentpicture = document.createElement('div');
            // rentpicture.classList.add("rentpicture")
            // let image = document.createElement('img');

            rentaltype.textContent = rent.rentaltype;
            max.textContent = `"${rent.motto}"`;
            year.textContent = `Year Founded: ${rent.yearFounded}`;
            // population.textContent = `Population: ${rent.currentPopulation}`;
            // rain.textContent = `Annual Rain Fall: ${rent.averageRainfall} inches`;

            // image.setAttribute('src', rent.photo);
            // image.setAttribute('alt', rent.rentaltype);



            // rentpicture.appendChild(image);
            // rentcard.appendChild(rentpicture);

            rentdetail.appendChild(rentaltype);
            rentdetail.appendChild(max);
            // rentdetail.appendChild(year);
            // rentdetail.appendChild(population);
            // rentdetail.appendChild(rain);
            // rentcard.appendChild(rentdetail);

            // rentpicture.appendChild(image);
            // rentcard.appendChild(rentpicture);


            document.querySelector('div.cards').appendChild(rentcard);
        });
    });