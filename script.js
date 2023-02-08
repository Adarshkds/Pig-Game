`use strict`;

// btn
const newGame = document.querySelector(`.btn--new`);
const rules = document.querySelector(`.btn--rules`);
const roll = document.querySelector(`.btn--roll`);
const hold = document.querySelector(`.btn--hold`);

let currentScore0 = document.getElementById(`current--0`);
let currentScore1 = document.getElementById(`current--1`);

// starting conditions
const dice = document.querySelector(`.dice`);
let current = 0;
currentScore1 = 0;

let diceNum = Math.floor(Math.random() * 6) + 1;
dice.classList.add(`hidden`);

// Rules button
const closeRules = function () {
  document.querySelector(`.rules`).classList.add(`display`);
  document.querySelector(`.overlay`).classList.add(`display`);
};

rules.addEventListener(`click`, function () {
  document.querySelector(`.rules`).classList.remove(`display`);
  document.querySelector(`.overlay`).classList.remove(`display`);
});

document.querySelector(`.close-rules`).addEventListener(`click`, closeRules);
document.querySelector(`.overlay`).addEventListener(`click`, closeRules);

// Roll Dice Button
roll.addEventListener(`click`, function () {
  diceNum = Math.floor(Math.random() * 6) + 1;
  current += diceNum;
  dice.classList.remove(`hidden`);
  dice.src = `dice-${diceNum}.png`;
  if(dice.src!==`dice-1.png`)
  currentScore0.textContent = current;
});
