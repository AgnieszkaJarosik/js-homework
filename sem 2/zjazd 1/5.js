// Write a code that takes a number and returns a list of its digits.

const process = require('process');
const [,,number] = process.argv;

(function giveDigits ( number=0 ) {
  console.log(findUniqDigits(convertToDigitsArr(number)));
})(number);

function convertToDigitsArr (number) {
  const numString = number.toString();
  const numArray = changeToNumbers(numString);
  return [...numArray];
}

function changeToNumbers ([...str]) {
  return str.map( letter => Number(letter));
}

function findUniqDigits (arr) {
  return arr.reduce( (acc, curr) => {
    if ( !orContains(acc, curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

function orContains (arr, nr) {
  return arr.includes(nr);
}