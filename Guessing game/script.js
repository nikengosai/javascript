// function button() {
//     // const clickButton = document.querySelector(".button-1");
//     const title = document.querySelector(".title");
//     title.textContent = "Hello world!";
// }

'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 2;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/

let seceretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // when the input fiels is empty
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️  No Number!'
        displayMessage('⛔️  No Number!')
    }
    // when the player wins
    else if (guess === seceretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!'
        displayMessage('🎉 Correct Number!')

        document.querySelector('.number').textContent = seceretNumber;

        document.querySelector('body').style.backgroundColor = "#60b347 ";
        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== seceretNumber) {
        if (score > 0) {
            // document.querySelector('.message').textContent = guess > seceretNumber ? '📈 Too High!' : 'Too Low!'
            displayMessage(guess > seceretNumber ? '📈 Too High!' : 'Too Low!')

            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = '💥 You lose the game!'
            displayMessage("💥 You lose the game!")
        }
    }
    // when gusees is high 
    // else if (guess > seceretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = '📈 Too High!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '💥 You lose the game!'
    //     }
    // }
    // // when gusess is low
    // else if (guess < seceretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = '📈 Too Low!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '💥 You lose the game!'
    //     }
    // }
    // else {
    //     document.querySelector('.message').textContent = 'Guess again!'
    // }
});

// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial vatues of
// the score and secretNumber variables
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#222)
// and number width (15 rem)

document.querySelector('.agin').addEventListener('click', function () {


    score = 20;
    seceretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Strat guessing...!'
    displayMessage('Strat guessing...!')

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').backgroundColor = '#222'

    document.querySelector('.number').style.width = '15rem'

})