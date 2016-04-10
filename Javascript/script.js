var elem = document.getElementById("playground");
function getElem() {
    elem = elem == null ? document.getElementById("playground") : elem;
}
function pi() {
    getElem();
    elem.src = "Playground/pi.html";
}

function e() {
    getElem();
    elem.src = "Playground/default.html";
}