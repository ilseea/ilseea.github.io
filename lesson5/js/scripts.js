//FOOTER DATE
let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// document.getElementById("demo").innerHTML = days[d.getDay()];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.getElementById("month").innerHTML = months[d.getMonth()];

let date = days[today.getDay()] + ', ' + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
document.getElementById("dailydate").innerHTML = date;


//NAVIGATION HAM BUTTON

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

//BANNER ON FRIDAYS


function myFunction() {
  let today = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let date = days[today.getDay()] + ", " + today.getDate();
  let banner = document.getElementById("myDIV").innerHTML;
  if (date === "Saturday") {
    banner.style.display = "none";
  } else {
    banner.style.display = "none";
  }
}