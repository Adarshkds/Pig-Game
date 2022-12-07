'use strict';
const name0El = document.getElementById(`name--0`);
const name1El = document.getElementById(`name--1`);
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

const imgDice = document.querySelector(`.dice`);
const btnNewGame = document.querySelector(`.btn--new`);
const btnRules = document.querySelector(`.btn--rules`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
imgDice.classList.add(`hidden`);

// lets
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

// Code
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    // random dice roll
    const dice = Math.floor(Math.random() * 6) + 1;

    // dislay dice
    imgDice.classList.remove(`hidden`);
    imgDice.src = `dice-${dice}.png`;

    // if 1 switch player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    // add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // active player wins if score>=100 , change background colour
    if (scores[activePlayer] >= 100) {
      playing = false;
      imgDice.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      // switch player
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener(`click`, function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  imgDice.classList.add(`hidden`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
});
