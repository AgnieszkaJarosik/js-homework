// Create a function that takes two parameters: array and number off attempts. 
// Based on number of attempts choose a random number from table that many times 
//and return lowest one.

const array = [1,6,23,8,4,8,3,7];

function giveLowestRandom (arr, attempts) {
  let randomNumber = returnRandom (arr);
  let min = randomNumber;

  for (let i=2; i<=attempts; i++){
    randomNumber = returnRandom (arr);
    if (min > randomNumber) min = randomNumber;
  }

  return min;
}

function returnRandom (arr) {
  let random =  Math.floor(Math.random() * arr.length);
  return arr[random];
}

console.log(  giveLowestRandom(array,7) );