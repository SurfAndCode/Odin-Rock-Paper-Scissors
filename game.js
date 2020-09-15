let players = [["COMPUTER", 0], ["PLAYER", 0]];
let finished = false;

function computerPlay() {
    return ["ROCK", "PAPER", "SCISSORS"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    const result = document.querySelector("h3");
    const pcTally = document.querySelector(".pc");
    const playerTally = document.querySelector(".player");

    if (playerSelection === computerSelection) {
        result.innerText = `It's a draw. Computer's choice: ${computerSelection}, Player's choice: ${playerSelection}`;
    }
    else if ((playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS")) {
        players[0][1]++;
        result.innerText = `Computer wins. Computer's choice: ${computerSelection}, Player's choice: ${playerSelection}`;
        pcTally.innerText = players[0][1];
    } else {
        players[1][1]++;
        result.innerText = `Player wins. Computer's choice: ${computerSelection}, Player's choice: ${playerSelection}`;
        playerTally.innerText = players[1][1];
    }
}

function endGame() {

    const end = document.querySelector(".endgame");

    if (players[0][1] === 5 || players[1][1] === 5) {
        let winner = players[0][1] === 5 ? "COMPUTER" : "PLAYER";
        end.innerText = `Game Over! ${winner} wins!`;
        finished = true;
    }
}

function reset() {

    let answer = confirm("Would you like to play a new game?");

    if (answer) {
        const result = document.querySelector("h3");
        const pcTally = document.querySelector(".pc");
        const playerTally = document.querySelector(".player");
        const end = document.querySelector(".endgame");
        result.innerText = "";
        end.innerText = "";
        pcTally.innerText = 0;
        playerTally.innerText = 0;
        players = [["COMPUTER", 0], ["PLAYER", 0]];
        finished = false;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (players[0][1] <= 5 && players[1][1] <= 5) {
            if (finished) reset()
            else {
                const computerSelection = computerPlay();
                const playerSelection = (button.classList[1]).toUpperCase();
                console.log(button.classList);
                playRound(playerSelection, computerSelection);
                endGame();
            }
        }
    }
    )
});