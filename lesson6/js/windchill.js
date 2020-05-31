let temp = document.getElementById('alto').textContent;
let wind = document.getElementById('speed').textContent;

document.getElementById("chill").innerHTML =
    "Windchill: " + frio() + "&#8457;";

function frio() {
    return (Math.round((35.74 + 0.6215 * temp) -
        (35.75 * (Math.pow(wind, 0.16))) +
        (0.4275 * temp * (Math.pow(wind, 0.16)))));
}