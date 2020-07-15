const requestURL = '/data/rent.json';

fetch(requestURL)
    .then(function (response) {
        // return response.json();
        console.log(response);
    });