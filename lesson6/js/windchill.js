document.getElementById("chill").innerHTML =
    "Windchill: " + frio() + "&#8457;";

function frio() {
    return (Math.round((35.74 + 0.6215 * 46) -
        (35.75 * (Math.pow(15, 0.16))) +
        (0.4275 * 46 * (Math.pow(15, 0.16)))));
}