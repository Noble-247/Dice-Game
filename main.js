/** FIRST DICE */
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // +1 is used to make the random numbers from 1 to 6
randomDiceImage = "dice" + randomNumber1 + ".png"; //  for dice1.png to dice6.png
var randomImageSource = "images/" + randomDiceImage; // for images/dice1.png to image/diceg.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


/** SECOND DICE */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png" // combines the line 2 and 3 codes for dice1
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

/**If Player 1 Wins */
if (randomNumber1 > randomNumber2) {
    let winnerTitle = document.querySelector("h1");
    winnerTitle.innerHTML = "Player1 Wins!!";
    winnerTitle.style.color = "green";
}
/**If Player2 Wins */
else if (randomNumber2 > randomNumber1) {
    let winnerTitle = document.querySelector("h1");
    winnerTitle.innerHTML = "Player2 Wins!!";
    winnerTitle.style.color = "green";
}
/**if its a draw */
else {
    let winnerTitle = document.querySelector("h1");
    winnerTitle.innerHTML = "Heads Up, It's a draw!!"
    winnerTitle.style.color = "orange";
}