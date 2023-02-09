`use strict`;

// btn
const newGame = document.querySelector(`.btn--new`);
const rules = document.querySelector(`.btn--rules`);
const roll = document.querySelector(`.btn--roll`);
const hold = document.querySelector(`.btn--hold`);
const dice = document.querySelector(`.dice`);
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);

let currentScore0 = document.getElementById(`current--0`);
let currentScore1 = document.getElementById(`current--1`);
let score0 = document.getElementById(`score--0`);
let score1 = document.getElementById(`score--1`);

// starting conditions
let currentScore = 0;
let activePlayer = 0;
let playerScore = [0, 0];
let playing = true;

let diceNum = Math.floor(Math.random() * 6) + 1;
dice.classList.add(`hidden`);
score0.textContent = 0;
score1.textContent = 0;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle(`player--active`);
  player1.classList.toggle(`player--active`);
};

const rulesBtn = function () {
  document.querySelector(`.rules`).classList.toggle(`display`);
  document.querySelector(`.overlay`).classList.toggle(`display`);
};

// Rules button
rules.addEventListener(`click`, function () {
  rulesBtn();
});

const closeRules = function () {
  rulesBtn();
};

document.querySelector(`.close-rules`).addEventListener(`click`, closeRules);
document.querySelector(`.overlay`).addEventListener(`click`, closeRules);

// Roll Dice Button
roll.addEventListener(`click`, function () {
  if (playing) {
    diceNum = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove(`hidden`);
    dice.src = `img/dice-${diceNum}.png`;

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold Button
hold.addEventListener(`click`, function () {
  if (playing) {
    playerScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      playerScore[activePlayer];
    if (playerScore[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      dice.classList.add(`hidden`);
    } else {
      switchPlayer();
    }
  }
});

// NewGame Button
newGame.addEventListener(`click`, function () {
  currentScore = 0;
  activePlayer = 0;
  playerScore = [0, 0];
  playing = true;

  diceNum = Math.floor(Math.random() * 6) + 1;
  dice.classList.add(`hidden`);

  score0.textContent = currentScore;
  score1.textContent = currentScore;
  currentScore0.textContent = currentScore;
  currentScore1.textContent = currentScore;

  player0.classList.remove(`player--winner`);
  player1.classList.remove(`player--winner`);

  player0.classList.add(`player--active`);
  player1.classList.remove(`player--active`);
});
