//FOOTER DATE
let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// document.getElementById("demo").innerHTML = days[d.getDay()];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.getElementById("month").innerHTML = months[d.getMonth()];

let date = days[today.getDay()] + ', ' + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
document.getElementById("dailydate").innerHTML = date;


//NAVIGATION HAM BUTTON not working now for some reason??? idk

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

//BANNER ON FRIDAYS

let d = new Date();
const banner =
  document.getElementById('banner');
if (d.getDay() == 5) {
  document.getElementById('banner').style.display = 'block';
} else {
  document.getElementById('banner').style.display = 'none';
}


function adjustRating(severity) {
  document.getElementById("ratingvalue").innerHTML = severity;
}