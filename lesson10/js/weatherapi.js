const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=1d982ee27d3310460b15a19c65fa132b';
// 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1d982ee27d3310460b15a19c65fa132b'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });

// .then(function (jsonObject) {
//     const prophets = jsonObject['prophets'];
//     // const utah = prophets.filter(prophet => (prophet.birthplace == "Utah"));
//     // then change "prophets" to "Utah" in following "forEach"
//     prophets.forEach(prophet => {
//         let card = document.createElement('section');
//         let h2 = document.createElement('h2');
//         let db = document.createElement('p');
//         let pb = document.createElement('p');
//         let image = document.createElement('img');

//         // h2.textContent = prophet.name + ' ' + prophet.lastname; (now can add words before `mark below)
//         // if I want to add <strong> use .innerHTML
//         h2.textContent = `${prophet.name} ${prophet.lastname}`;
//         db.textContent = `Date of Birth: ${prophet.birthdate}`;
//         pb.textContent = 'Place of Birth:' + ' ' + prophet.birthplace;
//         image.setAttribute('src', prophet.imageurl);
//         image.setAttribute('alt', prophet.name + ' ' + prophet.lastname + '- ' + prophet.order);

//         card.appendChild(h2);
//         card.appendChild(db);
//         card.appendChild(pb);
//         card.appendChild(image);
//         document.querySelector('div.cards').appendChild(card);

//     });
// });