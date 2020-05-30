document.getElementById("chill").innerHTML =
    "Windchill: " + first() + "&#8457;";

function first() {
    return (Math.round(0.0817 * (3.71 * (Math.pow(15, 0.5)) +
        5.81 - 0.25 * 15) * (76 - 91.4) + 91.4));

}