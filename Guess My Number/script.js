'use strict';

// selecting an element in js
// console.log(document.querySelector('.message').textContent); // for class . & for id #
// // By this we know how to establish connection between this code and user interface

// // Dom and its methods are actually part of something called web APIs. APIs are libraries that browsers  implement and that we can access  from our js code. API-Application Programming Interface.
// Besides dom there are other api's like Timers , Fetch etc..

// document.querySelector('.message').textContent = '🎉Correct Number!'; 
// [query selector is an element on which we can use textcontent property and .operator is from L->R]

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //[1)click -name of event. 2)Function will only be called as soon as the event happens.3)We want to compare no with no's , therefore convert string to no]

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
  }

  //When player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent=
      // guess>secretNumber ? 'Too high!' : 'Too low';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('💥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!';
  //       document.querySelector('.message').textContent = 0;
  //     }

  //   When guess is too low{
  //    else if (guess < secretNumber)
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!';
  //       document.querySelector('.message').textContent = 0;
  //     }
  //   }
});

/// Coding Challenge 1

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222 ';

  document.querySelector('.number').style.width = '15rem';
});

/// Refactoring the code / Dry Principle
// Now we can refactor distinct code in a function and then call the function in all the places where
// we have the duplicate code
