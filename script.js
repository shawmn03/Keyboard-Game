et timer;
let timeLeft = 30;
let score = 0;
let gameStarted = false;
let keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
let currentKey = '';
let keyToPressElement = document.getElementById('key-to-press');
let scoreElement = document.getElementById('score-value');
let timeLeftElement = document.getElementById('time-left');
let startButton = document.getElementById('start-button');

function startGame() {
  gameStarted = true;
  score = 0;
  timeLeft = 30;
  updateUI();
  startButton.disabled = true;
  
  timer = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft--;
      updateUI();
    } else {
      endGame();
    }
  }, 1000);

  setInterval(randomKey, 2000);
}

function endGame() {
  clearInterval(timer);
  alert('Game Over! Your final score is: ' + score);
  startButton.disabled = false;
  gameStarted = false;
}

function randomKey() {
  const randomIndex = Math.floor(Math.random() * keys.length);
  currentKey = keys[randomIndex];
  keyToPressElement.textContent = currentKey;
}

function updateUI() {
  timeLeftElement.textContent = timeLeft;
  scoreElement.textContent = score;
}

document.addEventListener('keydown', function(event) {
  if (!gameStarted) return;
  
  if (event.key.toUpperCase() === currentKey) {
    score++;
    randomKey(); 
  }
});
  
startButton.addEventListener('click', function() {
  if (!gameStarted) {
    startGame();
  }
});
