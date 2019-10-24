//Create a function that returns sum of first and last elements of given array.
//ARRAY: [1,6,23,8,4,8,3,7]

const array = [1,6,23,8,4,8,3,7];

function addFirstLast (arr) {
  return arr[0] + arr[arr.length-1];
}

console.log(addFirstLast(array));