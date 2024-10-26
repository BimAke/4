const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

let rollCount = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    
    const dice1Value = rollDice();
    const dice2Value = rollDice();
    
    document.getElementById("dice1").src = diceImages[dice1Value - 1];
    document.getElementById("dice2").src = diceImages[dice2Value - 1];

    let resultText = `You rolled ${dice1Value} and ${dice2Value}.`;
    
    if (dice1Value === dice2Value) {
        resultText += " It's a double!";
    }

    document.getElementById("result").textContent = resultText;

    rollCount++;
    document.getElementById("rollCounter").textContent = `Rolls: ${rollCount}`;
}

document.getElementById("rollButton").addEventListener("click", playGame);
