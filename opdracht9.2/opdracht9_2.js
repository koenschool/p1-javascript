function changeImage() {
    var image = document.getElementById('monkey');
    if (image.src.match("monkeysee")) {
      image.src = "img/monkeyhide.png";
    } else {
      image.src = "img/monkeysee.png";
    }
  }