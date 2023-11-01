


function multiply() {
    getal();
    var antwoord = getal1 * getal2;
    document.getElementById("waarde").innerHTML = antwoord;
}
  
function minus() {
    getal();
    var antwoord = getal1 - getal2;
    document.getElementById("waarde").innerHTML = antwoord;
}

function add() {
    getal();
    var antwoord = getal1 + getal2;
    document.getElementById("waarde").innerHTML = antwoord;
}

function devide() {
    getal();
    var antwoord = getal1 / getal2;
    document.getElementById("waarde").innerHTML = antwoord;
}

function getal(){
    getal1 = parseInt(document.getElementById("getal1").value);
    getal2 = parseInt(document.getElementById("getal2").value);
}
