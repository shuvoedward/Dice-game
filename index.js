var randomNumber1 = Math.floor((Math.random()*6));
var imgArray = ["./images/dice1.png", "./images/dice2.png","./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
var randomImage1 = imgArray[randomNumber1];
document.querySelector('.img1').setAttribute('src', randomImage1);

// changing the second image
var randomNumber2 = Math.floor((Math.random()*6));
var randomImage2 = imgArray[randomNumber2];
document.querySelector('.img2').setAttribute('src', randomImage2);

// declaring winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}