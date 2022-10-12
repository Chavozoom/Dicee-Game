//Player 1 number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//Player 1 image
var photoPath = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",photoPath);

//Player 2 number
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Player 2 image
var photoPath = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",photoPath);

//Winner print
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 🚩";
}
else{
  document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
}
