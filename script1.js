'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;



diceEl.classList.add('hidden');
btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
    } else {
      
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        // activePlayer = activePlayer === 0 ? 1 : 0;
    }
})






