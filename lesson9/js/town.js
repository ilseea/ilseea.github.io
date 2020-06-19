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
            // let h3 = document.createElement('h3');
            let db = document.createElement('p');
            let pb = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[i].name + ' ' + towns[i].lastname;
            db.textContent = 'Date of Birth:' + ' ' + towns[i].birthdate;
            pb.textContent = 'Place of Birth:' + ' ' + towns[i].birthplace;
            image.setAttribute('src', towns[i].imageurl);
            image.setAttribute('alt', towns[i].name + ' ' + towns[i].lastname + '- ' + towns[i].order);

            card.appendChild(h2);
            card.appendChild(db);
            card.appendChild(pb);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);

        }
    });