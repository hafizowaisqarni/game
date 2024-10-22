
var playerOne = prompt("Heads or Tails").toLowerCase();
var playerTwo, currentPlayer;


while (true) {
    if (playerOne === "heads") {
        playerTwo = "tails";
        currentPlayer = "PATLO";
        break;
    } else if (playerOne === "tails") {
        playerTwo = "heads";
        currentPlayer = "MOTO";
        break;
    } else {
        alert("Invalid Input. Choose Heads or Tails");
        playerOne = prompt("Heads or Tails").toLowerCase();
    }
}


function rollDice() {
    return {
        diceOne: Math.floor(Math.random() * 6) + 1,
        diceTwo: Math.floor(Math.random() * 6) + 1
    };
}


var rollButton = document.getElementById("rollButton");
var num1Element = document.getElementsByClassName("num")[0];
var num2Element = document.getElementsByClassName("num")[1];


function diceRoll() {
    var { diceOne, diceTwo } = rollDice();


    num1Element.textContent = diceOne;
    num2Element.textContent = diceTwo;


    if (diceOne === 6 && diceTwo === 6) {
        alert(`${currentPlayer} wins the game!`);
        currentPlayer = currentPlayer === "PATLO" ? "MOTO" : "PATLO";
    }
}


rollButton.addEventListener("click", diceRoll);