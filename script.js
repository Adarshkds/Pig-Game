'use strict';
/*
press on roll dice -> dice img changes and the dots get added to current -> keep pressing and it will get added to current -> when o appears on dice img current score becomes 0 
hold -> changes player and adds current points to player points <= 100 (First to reach 100 points wins) 
new game -> resets game totally -> set player 1 as current player
*/

const currentEl0 = document.getElementById(`current--0`);
const currentEl1 = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const btnNew = document.querySelector(`.btn--new`);

let currentScore = 0;
let activePlayer = 0;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

btnRoll.addEventListener(`click`, function () {
  // guess number <= 6
  const dice = Math.floor(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;

  // if guess num !== 1 add points to current score else switch player
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // currentEl0.textContent = currentScore;
  } else {
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
    // we can write 31-35 in ternary operator
    activePlayer = activePlayer === 0 ? 1 : 0; // agar activeplayer===0 hai toh wo activepayer=1 hojayega i.e player 2 hojayega and agar activeplayer===0 nahi hai toh woh activeplayer=0 hojayega i.e player 1 hojayega /*simple logic hai bhai dimaag shaant kar ke soch*/
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

// btnHold.addEventListener(`click`, function () {
//   // keep current score
//   // switch player
// });

// btnNew.addEventListener(`click`, function () {
//   document.querySelector(`.current-score`).textContent = `0`;
//   document.querySelector(`.score`).textContent = `0`;
//   diceEl.src = `dice-1.png`;
// });
