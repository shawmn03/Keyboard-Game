let score = 0;
let timeLeft = 30;
let gameInterval;
let currentKey;

const scoreElement = document.getElementById("score");
const timeLeftElement = document.getElementById("time-left");
const keyDisplay = document.getElementById("key-display");
const gameOverElement = document.getElementById("game-over");
const startButton = document.getElementById("start-button");

const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreElement.textContent = score;
    timeLeftElement.textContent = timeLeft;
    gameOverElement.style.display = "none";

    startButton.disabled = true;
    gameInterval = setInterval(updateGame, 1000);
    showNewKey();
}

function updateGame() {
    timeLeft--;
    timeLeftElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        gameOverElement.style.display = "block";
        startButton.disabled = false;
        startButton.textContent = "Try Again";
    }
}

function showNewKey() {
    const randomIndex = Math.floor(Math.random() * keys.length);
    currentKey = keys[randomIndex];
    keyDisplay.textContent = currentKey;
}

document.addEventListener("keydown", (event) => {
    if (event.key.toUpperCase() === currentKey) {
        score++;
        scoreElement.textContent = score;
        showNewKey();
    }
});

startButton.addEventListener("click", () => {
    startGame();
});
