var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage = "./images/dice"+ randomNumber1 + ".png"; //Dice1.png - Dice6.png

var randomImageSource1 =  randomDiceImage; // images/dice1.png - images/dice6.png

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomImageSource1);

// setting random image on 1

 var randomNumber2 = Math.floor(Math.random()*6) + 1;

 var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

 var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

 // setting random image on 2

 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
 } else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
 } else {
    document.querySelector("h1").innerHTML = " Draw!!! "
 }