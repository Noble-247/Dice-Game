/** FIRST DICE */
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // +1 is used to make the random numbers from 1 to 6
randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //targets the dice1-dice6 image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

/** SECOND DICE */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png" //targets the dice1-dice6 image
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImageSource2);

/**If Player 1 Wins */
if (randomNumber1 > randomNumber2) {
    let winnerNotice = document.querySelector("h1");
    winnerNotice.innerHTML = "Player1 Wins!!";
    winnerNotice.style.color = "green";
}
/**If Player2 Wins */
else if (randomNumber2 > randomNumber1) {
    let winnerNotice = document.querySelector("h1");
    winnerNotice.innerHTML = "Player2 Wins!!";
    winnerNotice.style.color = "green";
}
/**If its a draw */
else {
    let winnerNotice = document.querySelector("h1");
    winnerNotice.innerHTML = "Heads Up, It's a draw!!"
    winnerNotice.style.color = "orange";
}