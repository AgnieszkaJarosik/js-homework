// 3. Write a function that rotates a list by k elements.  Try solving this without creating a copy of the list.
const process = require('process');
const [,,rotateValue] = process.argv;

const array = [1,2,3,4,5,6];

(function rotateArray (arr, value=3) {
  const resultArr = connectArrays(arr, removeFromFront(arr, value));
  showResult(resultArr);
})(array, rotateValue);

function showResult (resultMessage) {
  console.log(resultMessage);
}

function removeFromFront (arr, counter) {
  return arr.splice(0, counter);
}

function connectArrays (arr1, arr2) {
  return arr1.concat(arr2);
}