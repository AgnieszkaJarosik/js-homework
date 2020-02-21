// 2. Write a guessing game where the user has to guess a secret number.

(function playGame () {
  let min = 1;
  let max = 100;
  const secretNum = getRandom(min, max);
  let playerTry = guessNumber(min, max);
  let counter = 1;
  let gameCounter = 0;

  while (secretNum !== playerTry && gameCounter < 1000) {
    gameCounter++;
      if ( tryIsBigger(playerTry, secretNum) ) { 
        showGameMessage( playerTry, 'large');
        max = playerTry;
      } else {
        showGameMessage( playerTry, 'small'); 
        min = playerTry;
      };
      playerTry = guessNumber(min, max);
      counter ++;
  }
  showWinMessage(playerTry, counter);
})()

function tryIsBigger ( num, secret ) {
  if (num > secret) { return true }
  else { return false }
}

function guessNumber (min, max) {
  const num = ((max - min) / 2) + min;
  return Math.floor(num)
}

function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function showGameMessage (nr, adjective) {
  console.log(`${nr} is too ${adjective}`);
}

function showWinMessage (num, counter) {
  console.log(`${num}
Wou win!!!
You guessed it in ${counter} tries`);
}