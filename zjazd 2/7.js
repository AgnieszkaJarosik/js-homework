// Create a function the return one random element from given array. use random function 
const array = [1,6,23,8,4,8,3,7];

function returnRandom (arr) {
  let random =  Math.floor(Math.random() * arr.length);
  return arr[random];
}

console.log(returnRandom(array));