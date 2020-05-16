let today = new Date();
let date = today.getFullYear();
document.getElementById('currentYr').innerHTML = date;

let dateModified = document.lastModified;
document.getElementById('datetime').innerHTML = dateModified;