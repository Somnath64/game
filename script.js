'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function () {

  const guess = Number(document.querySelector('.guess').value);



  // Not entered a guess Number
  if(!guess){

    displayMessage('Please enter a number');

    //Guess Number same as secretNumber
  } else if(guess === secretNumber){

    displayMessage('Correct Guess 🎊');
    //console.log(score);
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b234';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

    }


    // guess number is not same as secretNumber
  } else if(guess !== secretNumber){
    if (score > 1) {

      displayMessage(guess > secretNumber?'Too High':'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {

      displayMessage('You lose the game');
      score = 0;
      document.querySelector('.score').textContent = 0 ;
    }
  }
});

//on click Again button
document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score ;
  document.querySelector('.number').textContent = '?';
//  document.querySelector('.message').textContent = "Start guessing...";
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
