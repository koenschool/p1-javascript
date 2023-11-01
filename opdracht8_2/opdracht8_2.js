
function getal(){
    getal1 = parseInt(document.getElementById("getal 1").value);
    getal2 = parseInt(document.getElementById("getal 2").value);
  
    if (getal1 <= 0 || getal2 <= 0){
   
        document.getElementById("waarde").innerHTML = "te laag";
        return false;
    
        }
        
        else 
        {
                return true;
              }
          
}

function multiply() {
    if(getal()){
    antwoord = getal1 * getal2;
    document.getElementById("waarde").innerHTML = antwoord;
}}
  
function minus() {
    if(getal()){
    var antwoord = getal1 - getal2;
    document.getElementById("waarde").innerHTML = antwoord;
}}

function add() {
    if(getal()){
    var antwoord = getal1 + getal2;
    document.getElementById("waarde").innerHTML = antwoord;
}}

function devide() {
    if(getal()){
    var antwoord = getal1 / getal2;
    document.getElementById("waarde").innerHTML = antwoord;
}}



