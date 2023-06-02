/*
Var images är en array som innehåller mina bilder
Currentindex ++ lägger till ökar med 1 från 0 (var currentindex = 0;)
*/

var images = ["himmel moln.jpg", "curly ginger cat.jpg", "water.jpg", "gingor cat.jpg"]; 
var currentIndex = 0

function VisaNyBild() {
currentIndex++;
if (currentIndex >= images.length) {
  currentIndex = 0;
}
var imageElement = document.getElementById("Img");
imageElement.src = images[currentIndex];
}

//Visar ingen bild då display = "none";
function GomBild() {
  document.getElementById("Img").style.display = "none";

}

function VisaBild() {
  document.getElementById("Img").style.display = "block";

}

function AndraRubrik() {
  document.getElementById("heading").innerHTML = "Ny rubrik!";
}

function VisaTid() {
  document.getElementById("tid").innerHTML = Date();
}

//Genererar en random färg baserat på hexadecimal format.
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function AndraBakgrund() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }

  function HemligtMeddelande() {
    document.getElementById("meddelande").innerHTML = "Boo :o!!";
  }






  



  