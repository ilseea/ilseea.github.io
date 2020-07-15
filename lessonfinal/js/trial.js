const requestURL = 'https://ilseea.github.io/lessonfinal/data/rent.json';

fetch(requestURL)
    .then(function (response) {
        // return response.json();
        console.log(response);
    });