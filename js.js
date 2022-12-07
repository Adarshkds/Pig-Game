'use strict';
/* roll dice->dice rolls, number gets added to current score, 
if 1 on dice->player change and roll dice applies

if hold->current score of player x gets added to main score and player 
is switched->if score is above 100 before pressing hold the current player wins->background color changes to black for the winner player

if new game->everything reset and current player set to player 1*/

const score0 = document.getElementById(`score--0`);
const score1 = document.getElementById(`score--1`);
const currentScore0 = document.getElementById(`current--0`);
const currentScore1 = document.getElementById(`current--1`);

const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);
const btnNewGame = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const diceImg = document.querySelector(`.dice`);

// starters
score0.textContent = `0`;
score1.textContent = `0`;

// lets
let current = 0;
let final = [0, 0];
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  current = 0;
  document.getElementById(`current--${activePlayer}`).textContent = current;
  activePlayer = activePlayer == 1 ? 0 : 1;
  document.getElementById(`current--${activePlayer}`).textContent = current;
  player0.classList.toggle(`player--active`);
  player1.classList.toggle(`player--active`);
};

// Code
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    // random dice roll with img
    const dice = Math.floor(Math.random() * 6) + 1;
    diceImg.classList.remove(`hidden`);
    diceImg.src = `dice-${dice}.png`;

    // if dice = 1, switch player
    if (dice !== 1) {
      current += dice;
      document.getElementById(`current--${activePlayer}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    // current score gets added to final score
    final[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent =
      final[activePlayer];

    // if final score >= 100 the player wins and the button stops working, also change background color
    if (final[activePlayer] >= 10) {
      playing = false;
      diceImg.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
    } else {
      // else switch player
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener(`click`, function () {
  current = 0;
  final = [0, 0];
  activePlayer = 0;
  playing = true;
  // every score set to 0
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  // dice img = no
  diceImg.classList.add(`hidden`);
  // background color removed
  player0.classList.remove(`player--winner`);
  player1.classList.remove(`player--winner`);
  // player active set to player 0
  player0.classList.add(`player--active`);
  player1.classList.remove(`player--active`);
});
