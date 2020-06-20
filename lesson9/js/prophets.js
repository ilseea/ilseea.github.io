const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        // const utah = prophets.filter(prophet => (prophet.birthplace == "Utah"));
        // then change "prophets" to "Utah" in following "forEach"
        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let db = document.createElement('p');
            let pb = document.createElement('p');
            let image = document.createElement('img');

            // h2.textContent = prophet.name + ' ' + prophet.lastname; (now can add words before `mark below)
            // if I want to add <strong> use .innerHTML
            h2.textContent = `${prophet.name} ${prophet.lastname}`;
            db.textContent = `Date of Birth: ${prophet.birthdate}`;
            pb.textContent = 'Place of Birth:' + ' ' + prophet.birthplace;
            image.setAttribute('src', prophet.imageurl);
            image.setAttribute('alt', prophet.name + ' ' + prophet.lastname + '- ' + prophet.order);

            card.appendChild(h2);
            card.appendChild(db);
            card.appendChild(pb);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);

        });
    });