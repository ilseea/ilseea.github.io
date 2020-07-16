const requestURL = 'https://ilseea.github.io/lessonfinal/data/rent.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();

    })

    .then(function (jsonObject) {
        const vehicles = jsonObject['vehicles'];
        console.log(jsonObject)

        vehicles.forEach(drive => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let max = document.createElement('p');
            let tres = document.createElement('p');
            // let dia = document.createElement('p');

            // let image = document.createElement('img');

            // h2.textContent = drive.rentaltype + ' ' + drive.lastrentaltype; (now can add words before `mark below)
            // if I want to add <strong> use .innerHTML
            h2.textContent = `${drive.rentaltype}`;
            max.textContent = `Seats: ${drive.capacity}`;
            tres.textContent = '3 hr Rental: ' + ' ' + drive.reservation.tres;
            // dia.textContent = 'Day Rental: ' + ' ' + drive.day;

            // image.setAttribute('src', drive.imageurl);
            // image.setAttribute('alt', drive.rentaltype + ' ' + drive.lastrentaltype + '- ' + drive.order);

            card.appendChild(h2);
            card.appendChild(max);
            card.appendChild(tres);
            // card.appendChild(dia);

            // card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);

        });
    });