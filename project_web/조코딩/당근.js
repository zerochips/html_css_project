const moles = document.querySelectorAll('.grid-item img');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const gameStart = document.getElementById('game-start');
const gameOver = document.getElementById('game-over');
const score = document.getElementById('score');

let scoreCount = 0;
let gameIsRunning = false;

function showMole() {
  let randomIndex = Math.floor(Math.random() * moles.length);
  moles[randomIndex].classList.add('visible');
  setTimeout(() => {
    moles[randomIndex].classList.remove('visible');
    if (gameIsRunning) {
      showMole();
    }
  }, 1000);
}

function startGame() {
  gameIsRunning = true;
  scoreCount = 0;
  score.innerText = scoreCount;
  startButton.style.display = 'none';
  gameStart.style.display = 'block';
  setTimeout(() => {
    gameStart.style.display = 'none';
    showMole();
  }, 2000);
}

function restartGame() {
  gameIsRunning = false;
  gameOver.style.display = 'none';
  startButton.style.display = 'block';
}

function whackMole() {
  if (this.classList.contains('visible')) {
    this.classList.remove('visible');
    scoreCount++;
    score.innerText = scoreCount;
  }
}

const gridItems = document.querySelectorAll('.grid-item');

let score = 0;

gridItems.forEach(gridItem => {
  gridItem.addEventListener('click', () => {
    if (gridItem.classList.contains('orange')) {
      score++;
      document.getElementById('score').textContent = score;
    }
  });
});



moles.forEach(mole => mole.addEventListener('click', whackMole));
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
