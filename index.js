// var imgArray = ["./images/dice1.png", "./images/dice2.png","./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];


// var randomNumber1 = Math.floor((Math.random()*6));
// var randomImage1 = imgArray[randomNumber1];
// document.querySelector('.img1').setAttribute('src', randomImage1);



// var randomNumber2 = Math.floor((Math.random()*6));
// var randomImage2 = imgArray[randomNumber2];
// document.querySelector('.img2').setAttribute('src', randomImage2);





// // declaring winner
// if(randomNumber1 > randomNumber2){
//     document.querySelector("h1").textContent = "Player 1 Wins!";
// }
// else if(randomNumber1 < randomNumber2){
//     document.querySelector("h1").textContent = "Player 2 Wins!";
// }
// else{
//     document.querySelector("h1").textContent = "Draw!";
// }

// location.reload() ;

if (window.performance.getEntriesByType("navigation")[0].type === 'reload') {
  rollDice();
}
 
function rollDice() {
  var randomNumber1 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
  var randomNumber2 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
 
  document.querySelector(".img1").setAttribute("src", randomNumber1);
  document.querySelector(".img2").setAttribute("src", randomNumber2);
 
  changeTitle(randomNumber1, randomNumber2);
}
 
function changeTitle(num1, num2) {
  if (num1 === num2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
}

function refreshPage(){
    location.reload();
}
