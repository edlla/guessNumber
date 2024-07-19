'use strict';

const displayMessage = function(message) {
    document.querySelector('.prompt').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener
('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('Enter valid a number!');

    }else if (guess === secretNumber) {

        displayMessage('Correct Guess!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#27ae60';

    }else if (guess !== secretNumber) {

        if(score > 1) {
            // document.querySelector('.prompt').textContent = guess > secretNumber ? 'Too High! Try Again!' : 'Too Low! Try Again!';
            displayMessage(guess > secretNumber ? 'Too High! Try Again!' : 'Too Low! Try Again!');
            score--;
            document.querySelector('.score').textContent = score;

        }else {

            // document.querySelector('.prompt').textContent = 'You lost the game!';
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0;
            
        }
    }
});

document.querySelector('.again').addEventListener
('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    // document.querySelector('.prompt').textContent = 'Start Guessing ...';
    displayMessage('Start Guessing ...');
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = 'black';
});