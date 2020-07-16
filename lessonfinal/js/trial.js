const requestURL = 'https://ilseea.github.io/lessonfinal/data/rent.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();

    })

    .then(function (jsonObject) {
        const vehicles = jsonObject['vehicles'];
        console.log(jsonObject)

        vehicles.forEach(drive => {
            let card = document.createElement('tr');
            let name = document.createElement('td');
            // let head = document.createElement('th');
            let max = document.createElement('td');
            let tres = document.createElement('td');
            let day = document.createElement('td');
            let half = document.createElement('td');
            let full = document.createElement('td');
            // let dia = document.createElement('p');

            // let image = document.createElement('img');

            // name.textContent = drive.rentaltype + ' ' + drive.lastrentaltype; (now can add words before `mark below)
            // if I want to add <strong> use .innerHTML

            name.textContent = `${drive.rentaltype}`;
            // head.textContent = 'Seats' + ' ' + 'Reserve';
            max.textContent = `${drive.capacity}`;
            tres.textContent = '$' + drive.reservation.tres;
            day.textContent = '$' + drive.reservation.day;
            half.textContent = '$' + drive.walkin.half;
            full.textContent = '$' + drive.walkin.full;
            // dia.textContent = 'Day Rental: ' + ' ' + drive.day;

            // image.setAttribute('src', drive.imageurl);
            // image.setAttribute('alt', drive.rentaltype + ' ' + drive.lastrentaltype + '- ' + drive.order);

            card.appendChild(name);
            // card.appendChild(head);

            card.appendChild(max);
            card.appendChild(tres);
            card.appendChild(day);
            card.appendChild(half);
            card.appendChild(full);
            // card.appendChild(dia);

            // card.appendChild(image);
            document.querySelector('.cards').appendChild(card);

        });
    });