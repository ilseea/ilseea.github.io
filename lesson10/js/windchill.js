let temp = document.getElementById('high-temp').textContent;
let wind = document.getElementById('wind-speed').textContent;

document.getElementById("windchill").innerHTML =
    frio() + "&#8457;";

function frio() {
    return (Math.round((35.74 + 0.6215 * temp) -
        (35.75 * (Math.pow(wind, 0.16))) +
        (0.4275 * temp * (Math.pow(wind, 0.16)))));
}