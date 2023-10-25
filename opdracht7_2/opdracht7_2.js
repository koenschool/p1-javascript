function myFunction() {
    var number = document.getElementById("myInput").value;
    var text;


if (number > 19){
    text = "Genoeg geld!";


    }else {
    text = "Te weinig geld:(";
  }

  document.getElementById("demo").innerHTML = text;
}