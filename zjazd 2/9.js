// Create a function that takes given array. Then takes a random element, 
// removes it from the array and pushes it to result arrays. 
// This takes place as long as there are elements in source array. 

const array = [1,6,23,8,4,8,3,7];

function returnRandomArray (arr) {
  const newArray = [];
  let random;
  let number;

  while (arr.length > 0) {
    random = returnRandom(arr.length);
    number = arr.splice(random, 1);
    newArray.push(number[0]);
  }

  return newArray;
}

function returnRandom (max) {
  return  Math.floor( Math.random() * max );
}

console.log( returnRandomArray(array) );